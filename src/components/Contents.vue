<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-06 14:29:10
 * @LastEditTime : 2021-07-08 10:04:01
 * @Description  : 
 * @FilePath     : /front-end/src/components/Contents.vue
-->

<template>
  <div class="flex-col">
    <SinglePost v-for="post in posts" :key="post.pid" v-bind="post" />
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
import API from "../utils/API.vue";

export default {
  components: {
    SinglePost,
  },
  data() {
    return {
      posts: null,
    };
  },
  mounted() {
    API
      .get("/latest")
      .then((response) => {
        console.log(response);
        this.posts = response.data.posts;
        })
      .catch((error) => console.log(error));
  }
};
</script>

<style>
</style>
