<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-07 16:01:04
 * @LastEditTime : 2021-07-08 15:41:31
 * @Description  : 
 * @FilePath     : /front-end/src/utils/API.vue
-->

<script>
import axios from 'axios';

const request = axios.create({
    baseURL: `http://124.70.111.3:7300/mock/60e6ab6c579b09002106eded/api`,
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