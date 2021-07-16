import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// elui
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          name = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`;
        },
      }]
    })
  ],
  resolve: {
    alias: {
      // 'vue$': 'vue/dist/vue.esm-bundler.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
      // 'vue$': 'vue/dist/vue.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://192.168.43.165',
        changeOrigin: true,
        rewrite: p => p.replace(/^\/api/, '')
      }
    },
    host: '0.0.0.0'
  },
  build: {
		rollupOptions: {
			output: {
				//解决打包时Some chunks are larger警告
				// manualChunks(id) {
				// 	if (id.includes('node_modules')) {
				// 		return id.toString().split('node_modules/')[1].split('/')[0].toString();
				// 	}
				// }
			}
		}
	}
})
