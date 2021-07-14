import request from '../API.vue'

export function getCommentsOfPost(pid, page, limit) {
  return request({
    url: '/comments',
    method: 'get',
    params: { pid, page, limit }
  })
}
