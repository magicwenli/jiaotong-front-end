<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-06 16:35:02
 * @LastEditTime : 2021-07-08 09:24:16
 * @Description  : 
 * @FilePath     : /front-end/src/components/SinglePost.vue
-->

<template>
  <div class="border-t-2 shadow-sm bg-gray-50 p-4">
    <div class="flex flex-row relative">
      <img class="w-12 h-12 rounded-2xl flex-none" :src="img" :alt="imgAlt" />
      <div class="flex-row px-4 text-left text-md">
        <div>
          <span class="font-bold text-gray-900 font-sans">{{ name }}</span>
          <!-- <a href="" class="h-4">
              <i class="absolute right-0 far fa-thumbs-up"></i>
        </a> -->
          <span class="absolute right-0 h-4 text-gray-500 italic">{{
            formatTimeData(publicTime)
          }}</span>
        </div>
        <div>
          <span class="font-light">{{ intro }}</span>
        </div>
      </div>
    </div>
    <div class="flex">
      <span class="text-left pt-2 font-serif" style="text-indent: 2em">
        {{ content }}
      </span>
    </div>
    <div class="flex space-x-2 pt-2 justify-items-start">
      <a
        v-for="label in labels"
        :key="label.name"
        :href="label.href"
        class="border-1 rounded-md"
      >
        <span class="text-purple-500 text-lg font-bold">#</span>{{ label.name }}
      </a>
    </div>
  </div>
</template>

<script>
import formatTime from "../utils/TimeFormater.vue";

export default {
  props: ["img", "imgAlt", "name", "intro", "content", "publicTime", "labels"],
  methods: {
    formatTimeData(time) {
      let newDate=formatTime(new Date(time).getTime() / 1000);
      return newDate;
    },
  }
};
</script>
