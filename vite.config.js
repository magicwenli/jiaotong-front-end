import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents, {
  AntDesignVueResolver,
} from 'vite-plugin-components';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: [
        AntDesignVueResolver(),
      ]
    }),
  ],
  resolve: {
    alias: {
      // 'vue$': 'vue/dist/vue.esm-bundler.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
      // 'vue$': 'vue/dist/vue.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
    }
  },
})
