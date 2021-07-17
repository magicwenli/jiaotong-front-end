<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-13 09:57:26
 * @LastEditTime : 2021-07-17 17:06:18
 * @Description  : 
 * @FilePath     : /front-end/src/views/UserInfo.vue
-->

<template>
  <div class="bg-color-7" style="height: 80vh;">
    <div class="mx-auto md:max-w-3/4 lg:max-w-1/2">
      <div class="flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-4">
          <div class="flex-initial text-center">
            <h2 class="text-2xl font-extrabold text-color-5">
              <span v-html="randomEmoji()"></span>&ensp; 在线中
            </h2>
            <p class="mt-2 text-sm text-color-2">Welcome</p>
          </div>

          <div class="pt-12">
            <el-button type="primary" class="w-8/12" @click="toFavorite"
              >我的收藏</el-button
            >
          </div>

          <div class="">
            <el-button type="danger" class="w-8/12" @click="logOut"
              >退出登录</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";
export default {
  components: { ElMessage },
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
    logOut() {
      console.log("log out");
      localStorage.removeItem("Flag");
      ElMessage({ showClose: true, message: "退出登录" });
      this.$router.push("/");
    },
    toFavorite(){
      console.log("to favorite");
      this.$router.push('/t/userFavorites')
    }
  },
};
</script>

<style>
</style>