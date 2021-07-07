<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-06 14:29:10
 * @LastEditTime : 2021-07-07 16:26:53
 * @Description  : 
 * @FilePath     : /front-end/src/components/Contents.vue
-->

<template>
  <div class="flex-col mt-4">
    <SinglePost v-for="post in posts" :key="post.name" v-bind="post" />
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
import API from "./api.vue"

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
  },
};
</script>

<style>
</style>
