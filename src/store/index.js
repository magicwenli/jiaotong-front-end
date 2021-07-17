/*
 * @Author       : magicwenli
 * @Date         : 2021-07-13 09:30:20
 * @LastEditTime : 2021-07-17 11:17:51
 * @Description  : 
 * @FilePath     : /front-end/src/store/index.js
 */
import { createStore, createLogger } from 'vuex'
import login from "./modules/login";
import postLike from "./modules/postLikes";

// const debug = process.env.NODE_ENV !== 'production'



export default createStore({
    modules: {
      login,
      postLike,
    },
    // strict: debug,
    // plugins: debug ? [createLogger()] : []
  })