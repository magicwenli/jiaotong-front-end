<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-06 14:29:10
 * @LastEditTime : 2021-07-07 11:22:53
 * @Description  : 
 * @FilePath     : /front-end/src/components/Contents.vue
-->

<template>
  <div class="flex-col mt-4">
      <SinglePost v-for="peter in peters" :key="peter.name" v-bind="peter"/>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'
export default {
  components:{
    SinglePost
  },
  data(){
    return {
      peters: [{
        img: "assets/logo.png",
        imgAlt: "",
        name: "a",
        intro: "def",
        content: "thisthis",
        labelHref: "#",
        label: "123",
      },{
        img: "assets/logo.png",
        imgAlt: "",
        name: "b",
        intro: "def",
        content: "thisthis",
        labelHref: "#",
        label: "123",
      },{
        img: "assets/logo.png",
        imgAlt: "",
        name: "c",
        intro: "def",
        content: "thisthis",
        labelHref: "#",
        label: "123",
      },{
        img: "assets/logo.png",
        imgAlt: "",
        name: "a",
        intro: "def",
        content: "thisthis",
        labelHref: "#",
        label: "123",
      },{
        img: "assets/logo.png",
        imgAlt: "",
        name: "b",
        intro: "def",
        content: "thisthis",
        labelHref: "#",
        label: "123",
      },{
        img: "assets/logo.png",
        imgAlt: "",
        name: "c",
        intro: "def",
        content: "thisthis",
        labelHref: "#",
        label: "123",
      },]
    }
  }
};
</script>

<style>
</style>
