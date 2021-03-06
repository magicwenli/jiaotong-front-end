<template>
  <el-card :body-style="{ padding: '0.5rem' }" v-loading="loading">
    <template #header>
      <div class="header">
        <b>{{ total }}条评论</b>
      </div>
    </template>
    <div v-if="comments.length">
      <div v-for="comment in comments" :key="comment.cid">
        <div class="title">
          <div class="user">
            <el-image class="avatar" :src="emailHash(comment.secretUid)" lazy />
            <div>
              <div>{{ comment.secretUid == muid ? "洞主" : comment.secretUid.substr(0, 10) }}</div>
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
          <el-button class="submit-button" size="medium" type="primary" @click="publishReply(comment.floorId)">回复</el-button>
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
      <el-button class="submit-button" size="medium" type="primary" @click="publishComment">发布</el-button>
    </div>
  </el-card>
</template>

<script>
import { getCommentsOfPost, createComment } from "../utils/api/comments.js";
import formatTime from "../utils/TimeFormater.vue";
import md5 from "js-md5";

export default {
  props: {
    pid: Number,
    muid: String
  },
  data() {
    return {
      comments: [],
      pageSize: 10,
      page: 1,
      total: 0,
      commentText: "",
      replyFloor: 0,
      replyText: "",
      loading: false,
    };
  },
  methods: {
    async loadComments() {
      this.loading = true;
      try {
        const { total, list } = await getCommentsOfPost(this.pid, this.page, this.pageSize);
        this.total = total;
        this.comments = list;
        this.$emit('count', total);
      } catch (e) {
        this.$message.error("获取评论列表失败：" + e);
      }
      this.loading = false;
    },
    async turn(page) {
      this.page = page;
      await this.loadComments();
      this.$el.parentElement.scrollIntoView();
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
    async publishComment() {
      if (!this.commentText.length) {
        this.$message.error('评论不能为空');
        return;
      }
      this.loading = true;
      try {
        await createComment(this.pid, this.commentText);
      } catch (e) {
        this.$message.error('发送评论失败：' + e);
        this.loading = false;
        return;
      }
      this.loading = false;
      this.commentText = '';
      this.$message.success('发送评论成功');
      await this.loadComments();
    },
    async publishReply(floor) {
      if (!this.replyText.length) {
        this.$message.error('评论不能为空');
        return;
      }
      this.loading = true;
      try {
        await createComment(this.pid, '回复' + floor + '楼：' + this.replyText);
      } catch (e) {
        this.$message.error('发送评论失败：' + e);
        this.loading = false;
        return;
      }
      this.loading = false;
      this.reply(0);
      this.$message.success('发送评论成功');
      await this.loadComments();
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
