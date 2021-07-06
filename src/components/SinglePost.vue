<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-06 16:35:02
 * @LastEditTime : 2021-07-06 16:57:25
 * @Description  : 
 * @FilePath     : /front-end/src/components/SinglePost.vue
-->


<template>
  <div class="flex border-2 p-4">
    <img class="w-16 h-16 flex-none" :src="img" :alt="imgAlt" />
    <div class="flex-row pl-2 text-left">
      <div>
        <span class="text-lg text-left font-bold">{{ name }}</span>
      </div>
      <div>
        <span class="text-lg text-left">{{ intro }}</span>
      </div>
    </div>
  </div>
  <div class="flex">
    <span class="text-left">
      {{ content }}
    </span>
  </div>
  <div class="flex space-x-2 justify-items-start">
    <a href="" class="border-1 rounded-md"
      ><span class="text-purple-500 text-lg font-bold">#</span>{{ label }}</a
    >
  </div>
</template>

<script>
export default {
    props = ['img','imgAlt','name','intro','content','label']
};
</script>

<style>
</style>
