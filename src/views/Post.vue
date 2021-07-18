<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-09 09:30:22
 * @LastEditTime : 2021-07-17 21:59:23
 * @Description  : 
 * @FilePath     : /front-end/src/views/Post.vue
-->

<template>
  <div class="mx-auto md:max-w-3/4 lg:max-w-1/2">
    <div class="flex flex-col mx-4 mt-4">
      <div v-loading="loading">
        <div class="flex flex-row mt-4">
          <button
            class="text-color-9 text-lg p-1 rounded-md my-auto"
            @click="goBack"
          >
            <i class="el-icon-arrow-left"></i>返回
          </button>
          <div class="flex-grow my-auto">
            <h2 class="text-center text-xl font-extrabold text-color-1">
              发布动态
            </h2>
          </div>
          <button
            class="text-color-9 text-lg p-1 rounded-md my-auto"
            @click="publishPost"
          >
            <i class="el-icon-check"></i>发布
          </button>
        </div>
        <div class="mt-4">
          <el-input
            type="textarea"
            :autosize="{ minRows: 5, maxRows: 20 }"
            placeholder="请输入内容"
            v-model="textarea2"
          >
          </el-input>
        </div>
        <div class="mt-4">
          <el-select
            v-model="labelChoice"
            multiple
            placeholder="请选择标签"
            :multiple-limit="5"
            class="w-full"
          >
            <el-option
              v-for="item in labels"
              :key="item.lid"
              :label="item.labelName"
              :value="item.lid"
            >
            </el-option>
          </el-select>
        </div>
        <div class="mt-4">
          <el-upload
            ref="upload"
            action=""
            :auto-upload="false"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-change="handleChange"
            :on-exceed="handleExceed"
            :file-list="fileList"
            :limit="1"
            list-type="picture"
            accept="image/png, image/jpeg, image/gif"
            v-loading="compressing"
          >
            <el-button class="" size="small" type="primary">上传图片</el-button>
            <template #tip>
              <div class="el-upload__tip">
                只能上传最多一张 jpg/png 图片，图片会被压缩
              </div>
            </template>
          </el-upload>
        </div>
        <div class="flex flex-col my-4">
          <div class="mr-auto">Preview:</div>
          <div class="rounded-md block text-left">
            <div v-html="md2Html(textarea2)"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { showdown } from "vue-showdown";
import { createPost, getLabels } from "../utils/api/posts";
import showdownHighlight from "showdown-highlight";

showdown.setFlavor("github"); //original
showdown.setOption("emoji", true);
showdown.setOption("simplifiedAutoLink", true);
showdown.setOption("simpleLineBreaks", true);

// import hljs from 'highlight.js';
// import 'highlight.js/styles/github.css';

var Converter = new showdown.Converter({
  // That's it
  extensions: [
    showdownHighlight({
      // Whether to add the classes to the <pre> tag
      pre: true,
    }),
  ],
});

function compress(file) {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const image = new Image();
    const fileUrl = URL.createObjectURL(file);
    image.src = fileUrl;
    image.onload = () => {
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      ctx.drawImage(image, 0, 0);
      canvas.toBlob((newFile) => {
        URL.revokeObjectURL(fileUrl);
        resolve(newFile);
      }, "image/jpeg");
    };
    image.onerror = () => reject("无法读取图片文件");
  });
}

export default {
  data() {
    return {
      textarea2: "",
      fileList: [],
      compressing: false,
      compressedFile: null,
      loading: false,
      labels: [],
      labelChoice: [],
    };
  },
  methods: {
    md2Html(text) {
      return Converter.makeHtml(text);
    },
    goBack() {
      this.$router.go(-1); //返回上一层
    },
    async publishPost() {
      if (!this.textarea2.length) {
        this.$message.error("发布内容不能为空");
        return;
      }
      this.loading = true;
      try {
        await createPost(this.md2Html(this.textarea2), this.labelChoice.join(','), this.compressedFile);
      } catch (e) {
        this.$message.error("发布失败：" + e);
        this.loading = false;
        return;
      }
      this.loading = false;
      this.textarea2 = "";
      this.$message.success("发布动态成功");
      this.$router.push('/')
    },
    handleRemove(file, fileList) {
      this.fileList = fileList;
      this.compressedFile = null;
    },
    handlePreview(file) {
      // console.log(file);
    },
    async handleChange(file, fileList) {
      this.fileList = fileList;
      this.compressing = true;
      try {
        this.compressedFile = await compress(file.raw);
      } catch (e) {
        this.$refs.upload.clearFiles();
        this.fileList = [];
        this.$message.error("图片压缩失败：" + e);
      }
      this.compressing = false;
    },
    handleExceed() {
      this.$message.error("最多只能上传一张图片");
    },
  },
  computed: {
    imgUploadUrl() {
      return import.meta.env.VITE_IMAME_UPLOAD_URL;
    },
  },
  async mounted() {
    try {
      this.labels = await getLabels();
      // console.log(this.labels);
    } catch (e) {
      this.$message.error("获取标签列表失败：" + e);
    }
  },
  components: [],
};
</script>