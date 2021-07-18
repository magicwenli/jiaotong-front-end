<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-17 20:40:26
 * @LastEditTime : 2021-07-18 19:12:57
 * @Description  : 
 * @FilePath     : \jiaotong-front-end\src\views\Search.vue
-->
<template>
  <div class="bg-color-12">
    <div class="mx-auto md:max-w-3/4 lg:max-w-1/2">
    <h2 class="p-4 pl-8 text-left">搜索：{{ this.$route.query.key }}</h2>
    </div>
  </div>
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
import SinglePost from "../components/SinglePost.vue";
import { searchPosts } from "../utils/api/posts.js";

export default {
  props:["tags","key","orderby","page","page_size"],
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
  },
  mounted() {
    this.refresh();
  },
  watch: {
    key(key, prekey) {
      this.refresh();
    },
    tags(tags, pretags) {
      this.refresh();
    },
  },
  methods: {
    async refresh() {
      try {
        const data = await searchPosts(
          this.$route.query.key,
          1,
          this.$route.query.page_size,
          this.$route.query.tags,
          this.$route.query.orderby
        );
        this.posts = data;
      } catch (e) {
        this.$message.error("获取帖子列表失败：" + e);
      }
    },

    async onScroll() {
      if (this.posts.length === 0) {
        // pass
      } else {
        this.loading = true;
        let page = Math.ceil(this.posts.length / this.pageSize) + 1;
        try {
          const data = await searchPosts(
            this.$route.query.key,
            page,
            this.$route.query.page_size,
            this.$route.query.tags,
            this.$route.query.orderby
          );
          if (data.length === 0) {
            this.noMore = true;
          } else {
            this.posts = this.posts.concat(data);
          }
        } catch (e) {
          this.$message.error("获取帖子列表失败：" + e);
        }

        this.loading = false;
      }
    },
  },
};
</script>

<style>
</style>