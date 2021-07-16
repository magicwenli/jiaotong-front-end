<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-06 10:28:20
 * @LastEditTime : 2021-07-16 09:59:45
 * @Description  : 
 * @FilePath     : /front-end/src/components/NavBar.vue
-->

<template>
  <link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
  <div class="sticky top-0 z-10 px-8 pt-2 bg-color-6 shadow-md">
    <nav class="flex flex-row justify-between -mb-px text-md font-bold">
      <router-link to="/post" class="ml-2 py-3 no-underline tracking-wide">
        <i class="fa fa-tree"></i>
        <span class="pl-2">树洞</span>
      </router-link>
      <router-link to="/" class="flex-grow mx-2 py-3 no-underline tracking-wide ">
        <span class="text-color-3">JiaoTong</span>
      </router-link>
      <router-link to="/userinfo" class="mr-2 py-3 no-underline tracking-wide">
        <i class="fa fa-user-circle"></i>
        <span class="pl-2">我的</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
</script>

<style>
</style>