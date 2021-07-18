<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-09 21:20:15
 * @LastEditTime : 2021-07-18 16:35:27
 * @Description  : 
 * @FilePath     : /front-end/src/views/_Base.vue
-->

<template>
  <div class="bg-color-7">
    <div class="mx-auto md:max-w-3/4 lg:max-w-1/2" style="min-height: 85vh;">
      <div class="flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-4">
          <div class="flex-initial">
            <h2 class="text-center text-2xl font-extrabold text-color-1">
              <slot name="headline">
                <a class="fas fa-sign-in-alt text-color-1" />&ensp; 登录
              </slot>
            </h2>
            <p class="mt-2 text-center text-sm text-color-2">
              <slot name="tips">Welcome</slot>
            </p>
          </div>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>