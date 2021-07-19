<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-07 16:01:04
 * @LastEditTime : 2021-07-17 09:37:19
 * @Description  : 
 * @FilePath     : /front-end/src/utils/API.vue
-->

<script>
import axios from 'axios';
import qs from 'qs';
import router from './Route';
import store from '../store';
import { ElMessage } from 'element-plus';

const _request = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    withCredentials: true
});

_request.interceptors.response.use(res => {
    if (res.data.state == 200) {
        return res.data.data;
    } else {
        if (res.data.state == 403) {
            ElMessage({ showClose: true, message: '登录已失效，请重新登录' });
            store.dispatch('login/userLogin', false);
            router.push('/login');
        }
        return Promise.reject(res.data.message);
    }
}, e => {
    if (e.response) {
        return Promise.reject('服务器响应错误状态码：' + e.response.status);
    }
    return Promise.reject('网络错误');
});

export function request(opt) {
    if (opt.data != null) {
        opt.data = qs.stringify(opt.data);
    }
    return _request(opt);
}

export function requestForm(opt) {
    const data = new FormData();
    for (const k in opt.data) {
        data.append(k, opt.data[k]);
    }
    opt.data = data;
    return _request(opt);
}
</script>