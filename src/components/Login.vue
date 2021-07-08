<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-08 15:59:03
 * @LastEditTime : 2021-07-08 16:20:17
 * @Description  : 
 * @FilePath     : /front-end/src/components/Login.Vue
-->


<template>
  <div class="flex items-center justify-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-4">
      <div>
        <img class="mx-auto h-12 w-16" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
        <div>
          <h2 class="mt-6 text-center text-2xl font-extrabold text-gray-900">
            登录
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Welcome
          </p>
        </div>
      </div>
      <form class="mt-6 space-y-4" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

            Sign in
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