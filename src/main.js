import { createApp } from 'vue'
import App from './App.vue'
import "tailwindcss/tailwind.css"
import router from "./utils/Route";



createApp(App).use(router).mount('#app')
