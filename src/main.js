import { createApp } from 'vue'
import App from './App.vue'
import router from "./utils/Route";
import { createStore } from 'vuex'
import './css/index.css'
import store from "./store";

import {
    ElButton,
    ElCard,
    ElCheckbox,
    ElCheckboxButton,
    ElCheckboxGroup,
    ElDivider,
    ElFooter,
    ElForm,
    ElFormItem,
    ElHeader,
    ElIcon,
    ElImage,
    ElInput,
    ElInputNumber,
    ElLink,
    ElOption,
    ElOptionGroup,
    ElPageHeader,
    ElPagination,
    ElRadio,
    ElRadioButton,
    ElRadioGroup,
    ElScrollbar,
    ElSelect,
    ElSlider,
    ElTabs,
    ElTag,
    ElUpload,
    ElInfiniteScroll,
    ElLoading,
    ElMessage,
    ElMessageBox,
    ElNotification,
} from 'element-plus';

const components = [
    ElButton,
    ElCard,
    ElCheckbox,
    ElCheckboxButton,
    ElCheckboxGroup,
    ElDivider,
    ElFooter,
    ElForm,
    ElFormItem,
    ElHeader,
    ElIcon,
    ElImage,
    ElInput,
    ElInputNumber,
    ElLink,
    ElOption,
    ElOptionGroup,
    ElPageHeader,
    ElPagination,
    ElRadio,
    ElRadioButton,
    ElRadioGroup,
    ElScrollbar,
    ElSelect,
    ElSlider,
    ElTabs,
    ElTag,
    ElUpload,
]

const plugins = [
    ElInfiniteScroll,
    ElLoading,
    ElMessage,
    ElMessageBox,
    ElNotification,
]




const app = createApp(App)


components.forEach(component => {
    app.component(component.name, component)
})

plugins.forEach(plugin => {
    app.use(plugin)
})

// 将 store 实例作为插件安装
app.use(store)

import { getLoginStatus } from './utils/api/users.js'

router.beforeEach(async (to, from, next) => {
    if (store.state.login.isFirst) {
        store.dispatch('login/leaveFirst')
        try {
            await getLoginStatus()
            store.dispatch('login/userLogin', true)
            next()
        } catch (e) {
            next({ path: '/login' })
        }
        return
    }
    //获取用户登录成功后储存的登录标志
    // let getFlag = localStorage.getItem("Flag");
    //如果登录标志存在且为isLogin，即用户已登录
    // if (getFlag === "isLogin") {
    if (store.state.login.isLogin) {
        //设置vuex登录状态为已登录
        // store.state.isLogin = true

        //如果已登录，还想想进入登录注册界面，则定向回首页
        if (!to.meta.isLogin) {
            //iViewUi友好提示
            ElMessage({ showClose: true, message: "用户已登录" });
            next({
                path: '/'
            })
        } else {
            next()
        }
        //如果登录标志不存在，即未登录
    } else {
        //用户想进入需要登录的页面，则定向回登录界面
        if (to.meta.isLogin) {
            next({
                path: '/login',
            })
            //iViewUi友好提示
            ElMessage({
                showClose: true,
                message: "请先登录",
                type: "error",
            })
            //用户进入无需登录的界面，则跳转继续
        } else {
            next()
        }
    }
});
router.afterEach(route => {
    window.scroll(0, 0);
});

app.use(router)
app.mount('#app')
