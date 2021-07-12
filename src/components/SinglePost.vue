<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-06 16:35:02
 * @LastEditTime : 2021-07-12 14:55:46
 * @Description  : 
 * @FilePath     : /front-end/src/components/SinglePost.vue
-->

<template>
  <el-card
    :body-style="{ padding: '0px' }"
    class="bg-gray-50 shadow-md p-4 m-2"
  >
    <div class="flex flex-row relative">
      <!-- 头像 -->
      <img
        class="w-12 h-12 rounded-2xl flex-none"
        :src="emailHash(email)"
        :alt="123"
      />
      <div class="flex-row px-4 text-left text-md">
        <div>
          <span class="font-bold text-gray-900 font-sans"
            ><span class="text-purple-500">#&ensp;</span>{{ tid }}</span
          >
          <!-- <a href="" class="h-4">
              <i class="absolute right-0 far fa-thumbs-up"></i>
        </a> -->
        </div>
        <div>
          <span class="font-light">{{ formatTimeData(publicTime) }}</span>
        </div>
      </div>
    </div>
    <div class="relative overflow-hidden">
      <!-- 正文 -->
        <el-image v-if="hasImg" class="float-right ml-4 mt-2 mb-2 rounded-lg w-4/12"
          :src="img"
        >
          <template #error>
            <div class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </template>
        </el-image>
      <p class="text-justify pt-2 font-serif" style="text-indent: 2em">
        {{ content }}
      </p>
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
    <div class="flex pt-2 space-x-2">
      <a class="flex-1 rounded-3xl bg-green-100">
        <i class="far fa-thumbs-up"></i>
        <span>&ensp;123</span>
      </a>
      <a class="flex-1 rounded-3xl bg-green-100">
        <i class="far fa-thumbs-down"></i>
        <span>&ensp;456</span>
      </a>
      <a class="flex-1 rounded-3xl bg-green-100">
        <i class="fas fa-reply"></i>
        <span>&ensp;789</span>
      </a>
    </div>
  </el-card>
</template>

<script>
import formatTime from "../utils/TimeFormater.vue";
import { generateFromString } from "generate-avatar";
import md5 from "js-md5";

export default {
  props: ["tid", "email","hasImg","img","intro", "content", "publicTime", "labels"],
  methods: {
    formatTimeData(time) {
      let newDate = formatTime(new Date(time).getTime() / 1000);
      return newDate;
    },
    emailHash(email) {
      return "https://cdn.v2ex.com/gravatar/" + md5(email) + "?d=monsterid";
    },
  },
};
</script>
