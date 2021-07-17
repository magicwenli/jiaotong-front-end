/*
 * @Author       : magicwenli
 * @Date         : 2021-07-13 09:36:39
 * @LastEditTime : 2021-07-13 09:37:42
 * @Description  : 
 * @FilePath     : /front-end/store/modules/login.js
 */

const state = () => ({
    isLogin: false,
})

// getters
const getters = {
    //获取登录状态
    isLogin: state => state.isLogin,
}

const mutations = {
    //保存登录状态
    userStatus(state, flag) {
        state.isLogin = flag
    },
}

const actions = {
    //获取登录状态
    userLogin({ commit }, flag) {
        commit("userStatus", flag)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}