<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-08 19:46:02
 * @LastEditTime : 2021-07-08 20:12:42
 * @Description  : 
 * @FilePath     : /front-end/src/components/SignupCheck.vue
-->

<template>
  <div class="flex items-center justify-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-4">
      <div class="flex-initial">
        <h2 class="text-center text-2xl font-extrabold text-gray-900">
          <a class="far fa-paper-plane" />&ensp;
          确认邮件已发送
        </h2>
        <p class="mt-2 text-left text-lg text-gray-800" style="text-indent: 2em">
          请检查您的邮箱<span class="text-indigo-600">{{ " 123@456.com " }}</span>。
        </p>
      </div>
      <form class="mt-6 space-y-2" action="#" method="POST">
        <p class="text-center text-lg text-gray-800">
          没有收到？
        </p>
        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            重新发送
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>