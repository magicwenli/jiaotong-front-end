<template>
  <div>
    <Banner />
    <Contents :tag="tag"/>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import Contents from "../components/Contents.vue";

export default {
  props:["tag"],
  components: { Banner, Contents },
}
</script>
