<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-06 14:29:10
 * @LastEditTime : 2021-07-14 09:30:35
 * @Description  : 
 * @FilePath     : /front-end/src/components/Contents.vue
-->

<template>
  <div class="bg-gray-200">
    <div class="flex-col py-1 -my-1 w-full mx-auto md:max-w-3/4 lg:max-w-1/2">
      <ul
        class="infinite-list"
        v-infinite-scroll="load"
        infinite-scroll-disabled="disabled"
      >
        <SinglePost v-for="post in posts" :key="post.pid" v-bind="post" />
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
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
      count: 10,
      loading: false,
    };
  },
  computed: {
    noMore() {
      return this.count >= 20;
    },
    disabled() {
      return this.loading || this.noMore;
    },
  },
  mounted() {
    API.get("/posts")
      .then((response) => {
        this.posts = response[0].posts;
        console.log(this.posts);
      })
      .catch((error) => console.log(error));
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        API.get("/posts")
          .then((response) => {
            this.posts =this.posts.concat(response[0].posts);
            console.log(this.posts.length);
          })
          .catch((error) => console.log(error));
        this.loading = false;
      }, 500);
    },
  },
};
</script>

<style>
</style>
