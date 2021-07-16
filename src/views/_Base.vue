<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-09 21:20:15
 * @LastEditTime : 2021-07-16 09:20:58
 * @Description  : 
 * @FilePath     : /front-end/src/views/_Base.vue
-->

<template>
  <div class="bg-color-7">
    <div class="mx-auto md:max-w-3/4 lg:max-w-1/2">
      <div class="flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-4">
          <div class="flex-initial">
            <h2 class="text-center text-2xl font-extrabold text-color-1">
              <slot name="headline">
                <a class="fas fa-sign-in-alt" />&ensp; 登录
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