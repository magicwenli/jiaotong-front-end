<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-06 10:28:20
 * @LastEditTime : 2021-07-06 15:19:11
 * @Description  : 
 * @FilePath     : /front-end/src/components/NavBar.vue
-->

<template>
<link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
  <div class="px-8 pt-2 mb-4 bg-white shadow-md">
    <nav class="flex flex-row justify-between -mb-px text-md text-gray-500 font-bold">
      <a href="#" class="ml-4 py-3 no-underline border-b-2 border-teal-500 tracking-wide text-teal-500">
        <i class="fa fa-tree"></i>
        <span class="pl-2">树洞</span>
      </a>
      <a href="#" class="flex-grow mx-2 py-3 no-underline border-b-2 border-transparent tracking-wide ">
        <span class="text-green-600">JiaoTong</span>
      </a>
      <a href="#" class="mr-4 py-3 no-underline border-b-2 border-transparent tracking-wide ">
        <i class="fa fa-user-circle"></i>
        <span class="pl-2">我的</span>
      </a>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>