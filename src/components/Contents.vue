<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-06 14:29:10
 * @LastEditTime : 2021-07-17 18:10:40
 * @Description  : 
 * @FilePath     : /front-end/src/components/Contents.vue
-->

<template>
  <div class="bg-color-7">
    <div class="flex-col py-1 -my-1 w-full mx-auto md:max-w-3/4 lg:max-w-1/2">
      <ul
        class="infinite-list"
        v-infinite-scroll="onScroll"
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
      pageSize: 10,
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
  mounted() {
    this.refresh();
  },
  watch: {
    watchTag(tag, pretag) {
      this.refresh();
    },
  },
  methods: {
    async refresh() {
      if (this.currentTag === "userFavorites") {
        try {
          const data = await getFavPosts(1, this.pageSize, "time");
          this.posts = data;
        } catch (e) {
          this.$message.error("获取收藏列表失败：" + e);
        }
      } else {
        try {
          // console.log(this.currentTag);
          const data = await getPostsByTag(
            1,
            this.pageSize,
            this.currentTag,
            "time"
          );
          this.posts = data;
        } catch (e) {
          this.$message.error("获取帖子列表失败：" + e);
        }
      }
    },

    async onScroll() {
      if (this.posts.length === 0) {
        // pass 
      } else {
        this.loading = true;
        let page = Math.ceil(this.posts.length / this.pageSize) + 1;
        if (this.currentTag === "userFavorites") {
          try {
            const data = await getFavPosts(page, this.pageSize, "time");
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
              page,
              this.pageSize,
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
      }
    },
  },
};
</script>

<style>
</style>
