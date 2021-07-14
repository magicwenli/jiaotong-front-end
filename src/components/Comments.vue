<template>
  <el-card>
    <template #header>
      <div class="header">
        <b>{{ total }}条评论</b>
        <el-button class="button" type="text">按钮</el-button>
      </div>
    </template>
    <div v-if="comments.length">
      <div v-for="(comment, k) in comments" :key="k">
        <div>{{ comment.content }}</div>
        <el-divider/>
      </div>
    </div>
    <div v-else>
      <div>暂无评论</div>
      <el-divider/>
    </div>
    <el-pagination layout="prev, pager, next" :page-size="pageSize" :total="total" :current-page="page" @current-change="turn"/>
    <div class="submit">
      <el-input placeholder="请输入评论内容..."/>
      <el-button class="submit-button" type="primary">发布</el-button>
    </div>
  </el-card>
</template>

<script>
import { getCommentsOfPost } from '../utils/api/comments.js'

export default {
  props: {
    pid: Number
  },
  data() {
    return {
      comments: [],
      pageSize: 10,
      total: 0,
      page: 1
    }
  },
  methods: {
    async loadComments() {
      try {
        const data = await getCommentsOfPost(this.pid, 1, 10)
        this.comments = data[0].comments
        this.total = data[0].comments.length
      } catch (e) {
        this.$message.error('获取评论列表失败：' + e)
      }
    },
    async turn(page) {
      this.page = page
      await this.loadComments()
    }
  },
  async mounted() {
    await this.loadComments()
  }
}
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

.submit {
  margin-top: 20px;
  display: flex;
}

.submit-button {
  margin-left: 20px;
}
</style>
