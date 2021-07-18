<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-13 09:57:26
 * @LastEditTime : 2021-07-17 21:11:52
 * @Description  : 
 * @FilePath     : /front-end/src/views/UserInfo.vue
-->

<template>
  <div class="bg-color-7" style="height: 80vh">
    <div class="mx-auto md:max-w-3/4 lg:max-w-1/2">
      <div class="flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-4">
          <div class="flex-initial text-center">
            <h2 class="text-2xl font-extrabold text-color-5">
              <span v-html="randomEmoji"></span>&ensp; 在线中
            </h2>
            <p class="mt-2 text-sm text-color-2">Welcome</p>
          </div>

          <div class="pt-2">
            <el-input
              placeholder="请输入内容"
              v-model="search.key"
              class="input-with-select"
            >
              <template #append>
                <el-button icon="el-icon-search" @click="onSearch"></el-button>
              </template>
            </el-input>
          </div>

          <div class="flex space-x-2">
            <el-select v-model="search.orderby" placeholder="排序方式">
              <el-option
                v-for="(item, k) in orders"
                :key="k"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>

            <el-select v-model="search.tag" collapse-tags placeholder="标签">
              <el-option
                v-for="item in labels"
                :key="item.lid"
                :label="item.labelName"
                :value="item.lid"
              >
              </el-option>
            </el-select>
          </div>

          <div class="pt-4">
            <el-button type="primary" class="w-8/12" @click="toFavorite"
              >我的收藏</el-button
            >
          </div>

          <div class="pt-4">
            <el-button type="danger" class="w-8/12" @click="logOut"
              >退出登录</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";
import { getLabels, searchPosts } from "../utils/api/posts";
import { logout } from '../utils/api/users';

export default {
  components: { ElMessage },
  methods: {
    async logOut() {
      // console.log("log out");
      // localStorage.removeItem("Flag");
      try {
        await logout()
      } catch (e) {
        this.$message.error('登出失败：' + e)
        return
      }
      this.$store.dispatch('login/userLogin', false);
      // ElMessage({ showClose: true, message: "退出登录" });
      this.$router.push("/login");
    },
    toFavorite() {
      console.log("to favorite");
      this.$router.push("/t/userFavorites");
    },
    onSearch() {
      this.$router.push({
        path: "search",
        query: {
          key: this.search.key,
          tags: this.search.tags,
          orderby: this.search.orderby,
          page: this.search.page,
          page_size: this.search.page_size,
        },
      });
    },
  },
  data() {
    return {
      labels: [],
      search: {
        orderby: "",
        tags: "",
        key: "",
      },
      orders: [
        {
          label: "发帖时间",
          value: "time",
        },
        {
          label: "浏览数",
          value: "view",
        },
        {
          label: "喜爱数",
          value: "like",
        },
      ],
    };
  },
  computed: {
    randomEmoji() {
      var items = [
        "&#128512;",
        "&#128517;",
        "&#128521;",
        "&#128536;",
        "&#128568;",
        "&#128584;",
        "&#128039;",
        "&#128033;",
        "&#128046;",
        "&#128047;",
      ];
      var randomItem = items[Math.floor(Math.random() * items.length)];
      return randomItem;
    },
  },
  async mounted() {
    try {
      this.labels = await getLabels();
      // console.log(this.labels);
    } catch (e) {
      this.$message.error("获取标签列表失败：" + e);
    }
  },
};
</script>

<style>
</style>