<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-06 14:29:10
 * @LastEditTime : 2021-07-12 11:10:21
 * @Description  : 
 * @FilePath     : /front-end/src/components/Contents.vue
-->

<template>
  <div class="flex-col bg-gray-200 py-1 -my-1">
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
      .get("/latest_copy")
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
