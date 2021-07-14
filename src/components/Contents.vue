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
import { getPostsByTag } from "../utils/api/posts.js";

export default {
  components: {
    SinglePost,
  },
  data() {
    return {
      posts: null,
    };
  },
  async mounted() {
    try {
      const data = await getPostsByTag('timeline', 1, 10);
      this.posts = data[0].posts;
    } catch (e) {
      this.$message.error('获取帖子列表失败：' + e);
    }
  },
};
</script>

<style>
</style>
