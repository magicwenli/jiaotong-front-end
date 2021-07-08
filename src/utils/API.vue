<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-07 16:01:04
 * @LastEditTime : 2021-07-08 15:41:31
 * @Description  : 
 * @FilePath     : /front-end/src/utils/API.vue
-->

<script>
import axios from 'axios';

export default axios.create({
    baseURL: `http://124.70.111.3:7300/mock/60e6ab6c579b09002106eded`,
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': "JWT " + localStorage.getItem('token')
    },
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    withCredentials: true
});
</script>