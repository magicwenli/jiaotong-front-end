<template>
  <el-card>
    <template #header>
      <div class="header">
        <b>X条评论</b>
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
    <div class="submit">
      <el-input placeholder="请输入评论内容..."/>
      <el-button class="submit-button" type="primary">发布</el-button>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      comments: [{ content: 'hello' }, { content: 'hello' }, { content: 'hello' }]
    }
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
  display: flex;
}

.submit-button {
  margin-left: 20px;
}
</style>
