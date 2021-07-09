import { createApp } from 'vue'
import App from './App.vue'
import "tailwindcss/tailwind.css"
import router from "./utils/Route";

const app = createApp(App)
app
    .use(router)
    .mount('#app')
