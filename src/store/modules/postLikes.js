/*
 * @Author       : magicwenli
 * @Date         : 2021-07-17 10:17:34
 * @LastEditTime : 2021-07-17 11:21:18
 * @Description  : 
 * @FilePath     : /front-end/src/store/modules/postLikes.js
 */

// 1. get liked post
// 2. set like for some posts
// 3. cancel like for some posts



const state = () => ({
    postLikes: [],
})

// getters
const getters = {
    // // 获取like状态
    // postLiked: (state) => {
    //     return state.postLikes.filter(postLike => postLike.liked)
    // }
}

const mutations = {
    setLike(state, pid) {
        state.postLikes.push({ "pid": pid, liked: true })
    },
    hasPost(state, pid) {
        state.postLikes.forEach(post => {
            if (post.pid === pid) {
                console.log("true");
                return true
            }
        });
        return false
    },
    toggleLike(state, pid) {
        for (var post in state.postLikes) {
            if (post.pid === pid) {
                post.liked = !post.liked
            }
        }
    }
}

const actions = {
    //点赞或者添加到点赞过的post列表
    likePost({ commit }, pid) {
        if (commit("hasPost", pid)) {
            commit("toggleLike", pid)
        } else {
            commit("setLike", pid)
        }
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}