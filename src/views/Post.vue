<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-09 09:30:22
 * @LastEditTime : 2021-07-12 10:48:03
 * @Description  : 
 * @FilePath     : /front-end/src/views/Post.vue
-->

<template>
  <div class="flex flex-col mx-4 mt-4">
    <el-form>
      <div class="flex flex-row mt-4">
        <router-link class="text-gray-900 text-lg my-auto" to="/"><i class="el-icon-arrow-left"></i>返回</router-link>
        <div class="flex-grow my-auto">
          <h2 class="text-center text-xl font-extrabold text-gray-900">发布动态</h2>
        </div>
        <router-link class="text-gray-900 text-lg my-auto" to="/"><i class="el-icon-check"></i>发布</router-link>
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
          action="http://192.168.43.165/test/upload"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-change="handleChange"
          :file-list="fileList"
          list-type="picture"
          with-credentials
        >
          <el-button class="" size="small" type="primary">点击上传</el-button>
          <template #tip>
            <div class="el-upload__tip">
              只能上传 jpg/png 文件，且不超过 500kb
            </div>
          </template>
        </el-upload>
      </div>
      <div class="flex flex-col my-4">
        <div class="mr-auto">Preview:</div>
        <div class="rounded-md bg-gray-50 block text-left">
          <VueShowdown :markdown="textarea2"></VueShowdown>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea2: "",
      fileList: [],
    };
  },
  methods: {
    md2Html(text) {
      return Converter.makeHtml(text);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
      }
  },
  components: [],
};
</script>