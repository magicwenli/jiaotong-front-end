<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-06 16:35:02
 * @LastEditTime : 2021-07-18 19:07:51
 * @Description  : 
 * @FilePath     : \jiaotong-front-end\src\components\SinglePost.vue
-->

<template>
  <li>
    <el-card
      :body-style="{ padding: '0px' }"
      class="shadow-md p-4 m-2"
      v-loading="loading"
    >
      <div class="flex flex-row relative">
        <!-- 头像 -->
        <el-image
          class="w-12 h-12 rounded-2xl flex-none"
          :src="emailHash(secretId)"
          alt="用户头像"
          lazy
        />
        <div class="flex-row px-4 text-left text-md">
          <div>
            <span class="font-bold text-color-1 font-sans"
              ><span class="text-color-5">#&ensp;</span>{{ pid }}</span
            >
          </div>
          <div>
            <span class="font-light">{{ formatTimeData(postCreateTime) }}</span>
          </div>
        </div>
      </div>
      <div class="relative overflow-hidden">
        <!-- 正文 -->
        <el-image
          v-if="checkImg"
          class="float-right ml-4 mt-2 mr-2 mb-2 rounded-lg w-4/12 shadow-md"
          :src="realImgPath"
          :preview-src-list="preImgList"
          lazy
        >
          <template #error>
            <div class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </template>
        </el-image>
        <div
          class="text-justify pt-2"
          v-html="postContent"
        ></div>
      </div>
      <div class="flex space-x-4 pt-4 justify-items-start rounded-xl">
        <!-- TODO 应改为api请求接口地址 -->
        <router-link
          v-for="label in labels"
          :key="label.lid"
          :to="'/t/' + label.labelName"
          class="
            px-2
            bg-color-10
            rounded-sm
            ring-2 ring-offset-1 ring-color-10
            text-sm text-color-4
          "
        >
          <!-- <span class="text-color-11 text-base font-bold">#</span> -->
          {{ label.labelName }}
        </router-link>
      </div>
      <div class="flex pt-4 space-x-2">
        <button
          class="
            flex flex-1
            items-center
            justify-center
            rounded-3xl
            bg-color-8
            cursor-pointer
            shadow-md
          "
          @click="changeLikeBtn()"
        >
          <LikeBtn
            :width="40"
            :height="40"
            :checked="likeBtnChecked"
            class="flex -mr-4"
          />
          <span class="mr-4 text-color-9">{{ likes }}</span>
        </button>
        <button
          class="
            flex flex-1
            items-center
            justify-center
            rounded-3xl
            bg-color-8
            cursor-pointer
            shadow-md
          "
          @click.prevent="changeFavBtn()"
        >
          <FavBtn
            :width="22"
            :height="22"
            :checked="favBtnChecked"
            class="flex -mr-4"
          />
        </button>

        <button
          class="flex-1 rounded-3xl bg-color-8 shadow-md"
          @click="showComments = !showComments"
        >
          <i class="fas fa-reply opacity-50"></i>
          <span class="text-color-9">&ensp;{{ finalCommentsNum }}</span>
        </button>
      </div>
      <div class="pt-4 overflow-hidden">
        <transition name="comments">
          <Comments v-if="showComments" :pid="pid" :muid="secretId" @count="realCommentsNum = $event" />
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
import { createFav, deleteFav, likePost } from "../utils/api/posts";

export default {
  components: {
    Comments,
    LikeBtn,
    FavBtn,
  },
  props: [
    "pid",
    "secretId",
    "postImage",
    "postContent",
    "postCreateTime",
    "postLike",
    "commentsNum",
    "labels",
  ],
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
      if (!this.likeBtnChecked) {
        this.likes--;
      } else {
        this.likes++;
        try {
          likePost(this.pid);
        } catch (e) {
          this.$message.warning(e);
        }
      }
    },
    changeFavBtn() {
      this.favBtnChecked = !this.favBtnChecked;

      if (!this.favBtnChecked) {
        deleteFav(this.pid).catch((e) => {
          console.log(e);
          this.$message.warning(e);
        });
      } else {
        createFav(this.pid).catch((e) => {
          console.log(e);
          this.$message.warning(e);
        });
      }
    },
    init() {
      this.loading = false;
      // var post = this.$store.state.postLikes
      // console.log(post);
      // // console.log(post.liked);
    },
  },
  data() {
    return {
      loading: true,
      showComments: false,
      likeBtnChecked: false,
      favBtnChecked: false,
      likes: this.postLike,
      realCommentsNum: null,
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    realImgPath() {
      return import.meta.env.VITE_API_BASE_URL + this.postImage;
    },
    preImgList() {
      var list = [];
      list.push(this.realImgPath);
      // console.log(list);
      return list;
    },
    checkImg() {
      if (
        this.postImage === "null" ||
        this.postImage === "" ||
        (!this.postImage &&
          typeof this.postImage != "undefined" &&
          this.postImage != 0)
      ) {
        return false;
      } else {
        return true;
      }
    },
    finalCommentsNum() {
      return this.realCommentsNum == null ? this.commentsNum : this.realCommentsNum;
    },
  },
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
