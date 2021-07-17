<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-06 14:09:40
 * @LastEditTime : 2021-07-17 15:08:15
 * @Description  :  
 * @FilePath     : /front-end/src/components/Banner.vue
-->
<template>
  <div class="bg-color-12">
    <div class="mx-auto md:max-w-3/4 lg:max-w-1/2">
      <nav @click.prevent class="flex flex-row flex-nowrap overflow-auto">
        <div
          v-for="label in labels"
          :key="label.id"
          class="flex-none text-color-1 px-4 p-4 h-full"
        >
          <router-link
            :to="'/t/'+label.name"
            class="tracking-wider"
          >
            {{ label.name }}
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { getLabels } from "../utils/api/posts";

export default {
  data() {
    return {
      active: 1,
      labels: [],
    };
  },
  // Functions we will be using.
  methods: {
    makeActive: function (id) {
      // When a model is changed, the view will be automatically updated.
      this.active = id;
      console.log(id);
    },
  },
  async mounted(){
    try {
      this.labels = await getLabels()
    } catch (e) {
      this.$message.error('获取标签列表失败：' + e)
    }
  }
};
</script>

<style>
</style>
