<template>
  <div>
    <Banner />
    <Contents />
    <Post />
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import Contents from "../components/Contents.vue";
import Post from "../components/Post.vue";

export default {
  components: { Banner, Contents, Post },
}
</script>
