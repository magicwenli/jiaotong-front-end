<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-09 09:30:22
 * @LastEditTime : 2021-07-09 10:02:54
 * @Description  : 
 * @FilePath     : /front-end/src/components/Post.vue
-->

<template>
  <div class="flex flex-col">
    <div class="flex flex-row mt-4">
      <a class="px-8">
        <i class="fas fa-times text-3xl"></i>
      </a>
      <div class="flex-grow my-auto">
        <h2 class="text-gray-900 text-lg">发布动态</h2>
      </div>
      <a class="px-8">
        <i class="far fa-plus-square text-3xl text-green-600"></i>
      </a>
    </div>
    <div class="m-2">
      <form action="#" method="POST">
        <div>
          <label for="about" class="text-sm font-medium text-gray-700 hidden">
            About
          </label>
          <div class="mt-1">
            <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="分享你此刻的想法..."/>
          </div>
          <p class="mt-2 text-sm text-gray-500">
            <a href="#" class="text-indigo-500">提示性文字</a>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>