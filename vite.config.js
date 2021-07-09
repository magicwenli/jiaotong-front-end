import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents, {
  AntDesignVueResolver,
} from 'vite-plugin-components';
import path from 'path'
import fs from 'fs'
import lessToJS from 'less-vars-to-js'

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './config/variables.less'), 'utf8')
)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: [
        AntDesignVueResolver({
          importLess: true
        }),
      ]
    }),
  ],
  resolve: {
    alias: {
      // 'vue$': 'vue/dist/vue.esm-bundler.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
      // 'vue$': 'vue/dist/vue.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
    }
  },
  css:{
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
        modifyVars: themeVariables
      }
    }
  }
})
