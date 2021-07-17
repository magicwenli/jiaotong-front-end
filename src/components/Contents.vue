<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-06 14:29:10
 * @LastEditTime : 2021-07-17 17:03:32
 * @Description  : 
 * @FilePath     : /front-end/src/components/Contents.vue
-->

<template>
  <div class="bg-color-7">
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
import { getPostsByTag, getFavPosts } from "../utils/api/posts.js";

export default {
  props: ["tag"],
  components: {
    SinglePost,
  },
  data() {
    return {
      posts: [],
      page: 1,
      loading: false,
      noMore: false,
    };
  },
  computed: {
    // TODO 按照api返回是否还有内容
    disabled() {
      return this.loading || this.noMore;
    },
    currentTag() {
      // console.log(this.tag || "null");
      return this.tag || "null";
    },
  },
  async mounted() {
    if (this.currentTag === "userFavorites") {
      try {
        const data = await getFavPosts(this.page, 10, "time");
        this.posts = data;
      } catch (e) {
        this.$message.error("获取收藏列表失败：" + e);
      }
    } else {
      try {
        // console.log(this.currentTag);
        const data = await getPostsByTag(
          this.page,
          10,
          this.currentTag,
          "time"
        );
        this.posts = data;
      } catch (e) {
        this.$message.error("获取帖子列表失败：" + e);
      }
    }
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        window.location.reload();
      }
    );
  },
  methods: {
    async load() {
      this.loading = true;
      this.page++;
      if (this.currentTag === "userFavorites") {
        try {
          const data = await getFavPosts(this.page, 10, "time");
          if (data.length === 0) {
            this.noMore = true;
          } else {
            this.posts = this.posts.concat(data);
          }
        } catch (e) {
          this.$message.error("获取收藏列表失败：" + e);
        }
      } else {
        try {
          const data = await getPostsByTag(
            this.page,
            10,
            this.currentTag,
            "time"
          );
          if (data.length === 0) {
            this.noMore = true;
          } else {
            this.posts = this.posts.concat(data);
          }
        } catch (e) {
          this.$message.error("获取帖子列表失败：" + e);
        }
      }
      this.loading = false;
    },
  },
};
</script>

<style>
</style>
