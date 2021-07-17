<template>
  <el-card :body-style="{ padding: '0.5rem' }">
    <template #header>
      <div class="header">
        <b>{{ total }}条评论</b>
        <el-button class="button" type="text">按钮</el-button>
      </div>
    </template>
    <div v-if="comments.length">
      <div v-for="(comment, k) in comments" :key="k">
        <div class="title">
          <div class="user">
            <el-image class="avatar" :src="emailHash(comment.secretId)" lazy />
            <div>
              <div>{{ comment.secretId == muid ? "洞主" : comment.secretId }}</div>
              <div>{{ formatTime(comment.postedTime) }}</div>
            </div>
          </div>
          <div>{{ comment.floorId }}楼</div>
        </div>
        <div class="content">{{ comment.content }}</div>
        <div class="buttons">
          <el-button class="button button-off" type="text">
            <i class="far fa-thumbs-up"></i> {{ comment.commentLike || '赞' }}
          </el-button>
          <el-button
            class="button button-off"
            type="text"
            @click="reply(comment.floorId)">
            <i class="fas fa-reply"></i> {{ comment.floorId == replyFloor ? "收起" : "" }}回复
          </el-button>
          <el-button class="button button-off" type="text">
            <i class="far fa-thumbs-down"></i> {{ comment.commentDislike || '踩' }}
          </el-button>
        </div>
        <div v-if="comment.floorId == replyFloor" class="submit">
          <el-input
            ref="input"
            type="textarea"
            :rows="1"
            autosize
            size="medium"
            :placeholder="'回复' + comment.floorId + '楼'"
            v-model="replyText" />
          <el-button class="submit-button" size="medium" type="primary">回复</el-button>
        </div>
        <el-divider />
      </div>
    </div>
    <div v-else>
      <div>暂无评论</div>
      <el-divider />
    </div>
    <el-pagination
      layout="prev, pager, next"
      :page-size="pageSize"
      :total="total"
      :current-page="page"
      @current-change="turn" />
    <div class="submit">
      <el-input
        type="textarea"
        :rows="1"
        autosize
        size="medium"
        placeholder="发布评论"
        v-model="commentText" />
      <el-button class="submit-button" size="medium" type="primary">发布</el-button>
    </div>
  </el-card>
</template>

<script>
import { getCommentsOfPost } from "../utils/api/comments.js";
import formatTime from "../utils/TimeFormater.vue";
import md5 from "js-md5";

export default {
  props: {
    pid: Number,
    muid: String,
  },
  data() {
    return {
      comments: [],
      pageSize: 10,
      total: 0,
      page: 1,
      commentText: "",
      replyFloor: 0,
      replyText: "",
    };
  },
  methods: {
    async loadComments() {
      try {
        const data = await getCommentsOfPost(this.pid, 1, 10);
        console.log('xxx')
        console.log(data)
        this.comments = data.slice(0, 5);
        this.comments.push({
          content: "Hello world!",
          postedTime: "2021-01-01 00:00:00",
          floorId: -1,
          info: [{ likes: 100, dislikes: 100 }],
          secretId: this.muid,
        });
        this.total = data.length;
      } catch (e) {
        this.$message.error("获取评论列表失败：" + e);
      }
    },
    async turn(page) {
      this.page = page;
      await this.loadComments();
    },
    formatTime(time) {
      return formatTime(new Date(time).getTime() / 1000);
    },
    emailHash(email) {
      return (
        import.meta.env.VITE_GRAVATAR_URL +
        md5(email) +
        "?d=" +
        import.meta.env.VITE_GRAVATAR_TYPE
      );
    },
    reply(floor) {
      this.replyText = "";
      if (this.replyFloor == floor) {
        this.replyFloor = 0;
      } else {
        this.replyFloor = floor;
      }
    },
  },
  async mounted() {
    await this.loadComments();
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.button-off,
.button-off:focus {
  color: #404040;
}

.button-off:hover {
  color: #808080;
}

.button-off:active {
  color: #aaaaaa;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user {
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 14px;
}

.avatar {
  margin-right: 15px;
  width: 40px;
  height: 40px;
  border-radius: 10px;
}

.content {
  margin-top: 10px;
  text-align: left;
}

.buttons {
  margin-top: 10px;
  display: flex;
}

.submit {
  margin-top: 20px;
  display: flex;
}

.submit-button {
  margin-left: 20px;
}
</style>
