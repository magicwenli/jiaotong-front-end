<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-07 16:01:04
 * @LastEditTime : 2021-07-15 10:48:33
 * @Description  : 
 * @FilePath     : /front-end/src/utils/API.vue
-->

<script>
import axios from 'axios';

const request = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': "JWT " + localStorage.getItem('token')
    },
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    withCredentials: true
});

request.interceptors.response.use(res => {
    // if (res.data.state == 200) {
    //     return res.data.data;
    // } else {
    //     return Promise.reject(res.data.message);
    // }
    if (res.data.success == 1) {
        return res.data.data;
    } else {
        return Promise.reject('error');
    }
}, err => Promise.reject(err.message));

export default request;
</script>