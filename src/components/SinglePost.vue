<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-06 16:35:02
 * @LastEditTime : 2021-07-14 10:20:24
 * @Description  : 
 * @FilePath     : /front-end/src/components/SinglePost.vue
-->

<template>
  <li>
    <el-card
      :body-style="{ padding: '0px' }"
      class="bg-gray-50 shadow-md p-4 m-2"
      v-loading="loading"
    >
      <div class="flex flex-row relative">
        <!-- 头像 -->
        <el-image
          class="w-12 h-12 rounded-2xl flex-none"
          :src="emailHash(muid)"
          :alt="123"
          lazy
        />
        <div class="flex-row px-4 text-left text-md">
          <div>
            <span class="font-bold text-gray-900 font-sans"
              ><span class="text-purple-500">#&ensp;</span>{{ pid }}</span
            >
            <!-- <a href="" class="h-4">
              <i class="absolute right-0 far fa-thumbs-up"></i>
        </a> -->
          </div>
          <div>
            <span class="font-light">{{ formatTimeData(createTime) }}</span>
          </div>
        </div>
      </div>
      <div class="relative overflow-hidden">
        <!-- 正文 -->
        <el-image
          v-if="hasImg"
          class="float-right ml-4 mt-2 mr-2 mb-2 rounded-lg w-4/12 shadow-md"
          :src="img"
          :preview-src-list="preImgList"
          lazy
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
      <div class="flex space-x-4 pt-4 justify-items-start rounded-xl">
        <router-link
          v-for="label in labels"
          :key="label.name"
          :to="label.url"
          class="
            px-2
            border-green-900
            bg-blue-100
            rounded-tr-md
            ring-2 ring-offset-2 ring-blue-400
            text-sm
          "
        >
          <span class="text-purple-500 text-base font-bold">#</span
          >{{ label.name }}
        </router-link>
      </div>
      <div class="flex pt-4 space-x-2">
        <div class="flex-1 rounded-3xl bg-green-100">
        <LikeBtn/><span>&ensp;123</span></div>
        <button class="flex-1 rounded-3xl bg-green-100">
          <i class="far fa-thumbs-up"></i>
          <span>&ensp;123</span>
        </button>
        <!-- <button class="flex-1 rounded-3xl bg-green-100">
        <i class="far fa-thumbs-down"></i>
        <span>&ensp;456</span>
      </button> -->
        <button
          class="flex-1 rounded-3xl bg-green-100"
          @click="showComments = !showComments"
        >
          <i class="fas fa-reply"></i>
          <span>&ensp;789</span>
        </button>
      </div>
      <div class="pt-4 overflow-hidden">
        <transition name="comments">
          <Comments v-if="showComments" :pid="pid" :muid="muid"/>
        </transition>
      </div>
    </el-card>
  </li>
</template>

<script>
import Comments from "./Comments.vue";
import formatTime from "../utils/TimeFormater.vue";
import md5 from "js-md5";
import LikeBtn from "./LikeBtn.vue";

export default {
  components: {
    Comments,
    LikeBtn
  },
  props: ["pid", "muid", "hasImg", "img", "content", "createTime", "labels"],
  methods: {
    formatTimeData(time) {
      let newDate = formatTime(new Date(time).getTime() / 1000);
      return newDate;
    },
    emailHash(email) {
      return "https://gravatar.loli.net/avatar/" + md5(email) + "?d=monsterid";
    },
    init() {
      this.loading = false;
    },
  },
  data() {
    return {
      loading: true,
      showComments: false,
    };
  },
  mounted() {
    this.init();
  },
  computed:{
    preImgList(){
      var list = [];
      list.push(this.img)
      console.log(list);
      return list
    }
  }
};
</script>

<style scoped>
.comments-enter-active,
.comments-leave-active {
  transition: all 0.5s;
}

.comments-enter-from,
.comments-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
