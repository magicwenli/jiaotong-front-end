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
        return Promise.reject(res.data.message);
    }
}, () => Promise.reject('网络错误'));

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