<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-06 14:29:10
 * @LastEditTime : 2021-07-07 10:14:21
 * @Description  : 
 * @FilePath     : /front-end/src/components/Contents.vue
-->

<template>
  <div class="flex-col mt-4">
    <SinglePost :singpost="spost"/>
    <!-- 'img','imgAlt','name','intro','content','labelHref','label' -->
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
      spost:{
        img:"",
        imgAlt:"",
        name:"abc",
        intro:"def",
        content:"thisthis",
        labelHref:"#",
        label:"123"
      }
    }
  }
};
</script>

<style>
</style>
