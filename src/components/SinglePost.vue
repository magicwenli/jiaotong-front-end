<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-06 16:35:02
 * @LastEditTime : 2021-07-07 10:09:48
 * @Description  : 
 * @FilePath     : /front-end/src/components/SinglePost.vue
-->

<template>
  <div class="flex border-2 p-4">
    <img class="w-16 h-16 flex-none" :src="singlepost.img" :alt="singlepost.imgAlt" />
    <div class="flex-row pl-2 text-left">
      <div>
        <span class="text-lg text-left font-bold">{{ singlepost.name }}</span>
      </div>
      <div>
        <span class="text-lg text-left">{{ singlepost.intro }}</span>
      </div>
    </div>
  </div>
  <div class="flex">
    <span class="text-left">
      {{ singlepost.content }}
    </span>
  </div>
  <div class="flex space-x-2 justify-items-start">
    <a :href="singlepost.labelHref" class="border-1 rounded-md">
      <span class="text-purple-500 text-lg font-bold">#</span>{{ singlepost.label }}
    </a>
  </div>
</template>

<script>
export default {
    props : {
        singpost:{
            required: true,
            type: Object
        }
    }
};
</script>
