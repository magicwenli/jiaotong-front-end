<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-06 14:09:40
 * @LastEditTime : 2021-07-08 09:22:21
 * @Description  :  
 * @FilePath     : /front-end/src/components/Banner.vue
-->
<template>
  <nav
    @click.prevent
    class="flex flex-row px-4 -py-2 flex-nowrap overflow-scroll"
  >
    <a
      v-for="label in labels"
      :key="label.id"
      :href="label.url"
      @click="makeActive(label.id)"
      class="flex-none active:bg-green-300 active:text-white px-4"
    >
      {{ label.name }}
    </a>
  </nav>
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
