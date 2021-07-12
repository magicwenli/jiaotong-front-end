<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-09 09:30:22
 * @LastEditTime : 2021-07-12 09:53:41
 * @Description  : 
 * @FilePath     : /front-end/src/views/Post.vue
-->

<template>
  <div class="flex flex-col mx-4">
    <el-form>
      <div class="flex flex-row mt-4">
        <el-button class=""><i class="el-icon-arrow-left"></i>返回</el-button>
        <div class="flex-grow my-auto">
          <h2 class="text-gray-900 text-lg">发布动态</h2>
        </div>
        <el-button><i class="el-icon-check"></i>发布</el-button>
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

      <div class="flex flex-col mt-4">
        <div class="mr-auto">
          Preview:
        </div>
        <div class="rounded-md bg-gray-50  block text-left">
        <VueShowdown :markdown="textarea2" ></VueShowdown>
      </div></div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea2: "",
    };
  },
  methods: {
    md2Html(text){
      return Converter.makeHtml(text);
    }
  },
  components:[]
};
</script>