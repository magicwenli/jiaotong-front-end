<template>
  <div class="relative">
    <NavBar />
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";


// import HelloWorld from './components/HelloWorld.vue'

export default {
  components: { NavBar,Footer },
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue","Helvetica",PingFang SC,PingFang TC,Hiragino Sans GB,STHeiti,Microsoft YaHei,Microsoft JhengHei,"WenQuanYi Micro Hei",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

.el-loading-spinner .circular {
  display: inline;
}

.el-image-viewer__wrapper {
  z-index: 2001 !important;
}
</style>
