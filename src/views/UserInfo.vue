<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-13 09:57:26
 * @LastEditTime : 2021-07-13 10:34:53
 * @Description  : 
 * @FilePath     : /front-end/src/views/UserInfo.vue
-->

<template>
  <div
    class="
      flex
      items-center
      justify-center
      bg-gray-50
      py-8
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div class="max-w-md w-full space-y-4">
      <div class="flex-initial text-center">
        <h2 class="text-2xl font-extrabold text-purple-600">
          <span v-html="randomEmoji()"></span>&ensp; 在线中
        </h2>
        <p class="mt-2 text-sm text-gray-600">Welcome</p>
      </div>
      <div class="">
          <el-button type="primary" class="w-full" @click="logOut">退出登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";
export default {
  components: {ElMessage},
  methods: {
    randomEmoji() {
      var items = [
        "&#128512;",
        "&#128517;",
        "&#128521;",
        "&#128536;",
        "&#128568;",
        "&#128584;",
        "&#128039;",
        "&#128033;",
        "&#128046;",
        "&#128047;",
      ];
      var randomItem = items[Math.floor(Math.random() * items.length)];
      return randomItem;
    },
    logOut(){
        console.log("log out");
        localStorage.removeItem('Flag');
        ElMessage({ showClose: true, message: "退出登录" });
        this.$router.push("/")
    }
  },
};
</script>

<style>
</style>