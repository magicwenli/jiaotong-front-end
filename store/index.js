/*
 * @Author       : magicwenli
 * @Date         : 2021-07-13 09:30:20
 * @LastEditTime : 2021-07-13 09:38:45
 * @Description  : 
 * @FilePath     : /front-end/store/index.js
 */
import { createStore, createLogger } from 'vuex'
import login from "./module/login";
// const debug = process.env.NODE_ENV !== 'production'



export default createStore({
    modules: {
      login,
    },
    // strict: debug,
    // plugins: debug ? [createLogger()] : []
  })