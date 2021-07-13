<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-06 14:09:40
 * @LastEditTime : 2021-07-13 11:15:49
 * @Description  :  
 * @FilePath     : /front-end/src/components/Banner.vue
-->
<template>
  <div class="mx-auto md:max-w-3/4 lg:max-w-1/2">
    <nav @click.prevent class="flex flex-row flex-nowrap overflow-scroll">
      <div
        v-for="label in labels"
        :key="label.id"
        class="flex-none text-gray-900 px-4 p-4 h-full"
      >
        <router-link
          :to="label.url"
          @click="makeActive(label.id)"
          class="tracking-wider"
        >
          {{ label.name }}
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      labels: [
        {
          name: "最新",
          url: "/latest",
          id: 1,
        },
        {
          name: "二手",
          url: "/latest",
          id: 2,
        },
        {
          name: "学习",
          url: "/latest",
          id: 3,
        },
        {
          name: "分享",
          url: "/latest",
          id: 4,
        },
        {
          name: "失物招领",
          url: "/latest",
          id: 5,
        },
        {
          name: "Game",
          url: "/latest",
          id: 6,
        },
      ],
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
};
</script>

<style>
</style>
