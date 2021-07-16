<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-09 09:30:22
 * @LastEditTime : 2021-07-16 11:30:10
 * @Description  : 
 * @FilePath     : /front-end/src/views/Post.vue
-->

<template>
  <div class="mx-auto md:max-w-3/4 lg:max-w-1/2">
    <div class="flex flex-col mx-4 mt-4">
      <el-form>
        <div class="flex flex-row mt-4">
          <router-link class="text-color-1 text-lg my-auto" to="/"
            ><i class="el-icon-arrow-left"></i>返回</router-link
          >
          <div class="flex-grow my-auto">
            <h2 class="text-center text-xl font-extrabold text-color-1">
              发布动态
            </h2>
          </div>
          <router-link class="text-color-1 text-lg my-auto" to="/"
            ><i class="el-icon-check"></i>发布</router-link
          >
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
          <el-upload
            class=""
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
      </el-form>
    </div>
  </div>
</template>

<script>
import { showdown } from "vue-showdown";
import showdownHighlight from "showdown-highlight";

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

showdown.setFlavor("github"); //original
showdown.setOption("emoji", true);
showdown.setOption("simplifiedAutoLink", true);
showdown.setOption("simpleLineBreaks", true);
var Converter = new showdown.Converter({
  // That's it
  extensions: [
    showdownHighlight({
      // Whether to add the classes to the <pre> tag
      pre: true,
    }),
  ],
});

export default {
  data() {
    return {
      textarea2: "```dustsdfa\nprint(fff)\n1232144\nfs\n```",
      // textarea2: "",
      fileList: [],
      compressing: false,
      compressedFile: null,
    };
  },
  methods: {
    md2Html(text) {
      return Converter.makeHtml(text);
    },
    handleRemove(file, fileList) {
      this.fileList = fileList;
      this.compressedFile = null;
    },
    handlePreview(file) {
      console.log(file);
    },
    async handleChange(file, fileList) {
      this.fileList = fileList;
      this.compressing = true;
      try {
        this.compressedFile = await compress(file.raw);
      } catch (e) {
        this.$message.error(String(e));
      }
      this.compressing = false;
    },
    handleExceed() {
      this.$message.error("最多只能上传一张图片");
    },
  },
  components: [],
};
</script>