<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-06 10:28:20
 * @LastEditTime : 2021-07-13 10:37:49
 * @Description  : 
 * @FilePath     : /front-end/src/components/NavBar.vue
-->

<template>
  <link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
  <div class="sticky top-0 z-10 px-8 pt-2 bg-white shadow-md">
    <nav class="flex flex-row justify-between -mb-px text-md text-gray-500 font-bold">
      <router-link to="/post" class="ml-4 py-3 no-underline hover:border-b-2 border-teal-500 tracking-wide text-teal-500">
        <i class="fa fa-tree"></i>
        <span class="pl-2">树洞</span>
      </router-link>
      <router-link to="/" class="flex-grow mx-2 py-3 no-underline border-b-2 border-transparent tracking-wide ">
        <span class="text-green-600">JiaoTong</span>
      </router-link>
      <router-link to="/userinfo" class="mr-4 py-3 no-underline border-b-2 border-transparent tracking-wide">
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