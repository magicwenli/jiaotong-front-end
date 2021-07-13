<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-06 14:29:10
 * @LastEditTime : 2021-07-13 11:14:51
 * @Description  : 
 * @FilePath     : /front-end/src/components/Contents.vue
-->

<template>
  <div class="bg-gray-200">
    <div class="flex-col py-1 -my-1 w-full mx-auto md:max-w-3/4 lg:max-w-1/2">
      <SinglePost v-for="post in posts" :key="post.pid" v-bind="post" />
    </div>
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
    API.get("/latest_copy")
      .then((response) => {
        console.log(response);
        this.posts = response.data.posts;
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>
