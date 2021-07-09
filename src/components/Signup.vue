<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-08 19:46:02
 * @LastEditTime : 2021-07-09 14:37:10
 * @Description  : 
 * @FilePath     : /front-end/src/components/Signup.vue
-->

<template>
  <div class="flex items-center justify-center bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-4">
      <div class="flex-initial">
        <h2 class="text-center text-2xl font-extrabold text-gray-900">
          <a class="fas fa-user-plus" />&ensp;
          注册
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Welcome
        </p>
      </div>
      <form class="mt-6 space-y-4" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="su-email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="su-password" name="password" type="password" autocomplete="current-password" required minlength="8" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
          <div>
            <label for="password" class="sr-only">Retype Password</label>
            <input id="su-re-password" name="re-password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Retype Password" />
          </div>
        </div>

        <div class="mt-2">
          <label for="nickname" class="sr-only">Nickname</label>
          <input id="su-nickname" name="nickname" type="text" autocomplete="nickname" minlength="2" maxlength="10" required class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Nickname" />
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            注册
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