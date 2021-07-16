<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-06 16:35:02
 * @LastEditTime : 2021-07-16 09:30:01
 * @Description  : 
 * @FilePath     : /front-end/src/components/SinglePost.vue
-->

<template>
  <li>
    <el-card
      :body-style="{ padding: '0px' }"
      class="bg-color-7 shadow-md p-4 m-2"
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
            <span class="font-bold text-color-1 font-sans"
              ><span class="text-color-5">#&ensp;</span>{{ pid }}</span
            >
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
        <p class="text-justify pt-2" style="text-indent: 2em">
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
            bg-color-6
            rounded-tr-md
            ring-2 ring-offset-2 ring-color-6
            text-sm
          "
        >
          <span class="text-color-5 text-base font-bold">#</span
          >{{ label.name }}
        </router-link>
      </div>
      <div class="flex pt-4 space-x-2">
        <button
          class="
            flex flex-1
            items-center
            justify-center
            rounded-3xl
            bg-color-6
            cursor-pointer
            shadow-sm
          "
          @click="changeLikeBtn()"
        >
          <LikeBtn
            :width="40"
            :height="40"
            :checked="likeBtnChecked"
            class="flex -mr-4"
          />
          <span class="mr-4">&ensp;123</span>
        </button>
        <button
          class="
            flex flex-1
            items-center
            justify-center
            rounded-3xl
            bg-color-6
            cursor-pointer
          "
          @click.prevent="changeFavBtn()"
        >
          <FavBtn
            :width="22"
            :height="22"
            :checked="favBtnChecked"
            class="flex -mr-4"
          />
          <span class="mr-4">&ensp;123</span>
        </button>

        <button
          class="flex-1 rounded-3xl bg-color-6 shadow-sm"
          @click="showComments = !showComments"
        >
          <i class="fas fa-reply"></i>
          <span>&ensp;789</span>
        </button>
      </div>
      <div class="pt-4 overflow-hidden">
        <transition name="comments">
          <Comments v-if="showComments" :pid="pid" :muid="muid" />
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
import FavBtn from "./FavBtn.vue";

export default {
  components: {
    Comments,
    LikeBtn,
    FavBtn,
  },
  props: ["pid", "muid", "hasImg", "img", "content", "createTime", "labels"],
  methods: {
    formatTimeData(time) {
      let newDate = formatTime(new Date(time).getTime() / 1000);
      return newDate;
    },
    emailHash(email) {
      return (
        import.meta.env.VITE_GRAVATAR_URL +
        md5(email) +
        "?d=" +
        import.meta.env.VITE_GRAVATAR_TYPE
      );
    },
    changeLikeBtn() {
      this.likeBtnChecked = !this.likeBtnChecked;
    },
    changeFavBtn() {
      this.favBtnChecked = !this.favBtnChecked;
    },
    init() {
      this.loading = false;
    },
  },
  data() {
    return {
      loading: true,
      showComments: false,
      likeBtnChecked: false,
      favBtnChecked: false,
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    preImgList() {
      var list = [];
      list.push(this.img);
      // console.log(list);
      return list;
    },
  },
};
</script>

<style>
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
