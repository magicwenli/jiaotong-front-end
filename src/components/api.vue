<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-07 16:01:04
 * @LastEditTime : 2021-07-07 16:01:56
 * @Description  : 
 * @FilePath     : /front-end/src/components/api.vue
-->

<script>
import axios from 'axios';

export default axios.create({
    baseURL: `http://localhost:7300/mock/60e5542ee0cf0a00212d9745`,
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': "JWT " + localStorage.getItem('token')
    },
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    withCredentials: true
});
</script>