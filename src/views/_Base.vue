<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-09 21:20:15
 * @LastEditTime : 2021-07-09 21:33:18
 * @Description  : 
 * @FilePath     : /front-end/src/components/Base.vue
-->

<template>
  <div class="flex items-center justify-center bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-4">
      <div class="flex-initial">
        <h2 class="text-center text-2xl font-extrabold text-gray-900">
          <slot name="headline">
              <a class="fas fa-sign-in-alt" />&ensp;
              登录
          </slot>
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          <slot name="tips">Welcome</slot>
        </p>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
};
</script>