import request from '../API.vue'

export function getPostsByTag(tag, page, limit) {
  return request({
    url: '/posts',
    method: 'get',
    params: { tag, page, limit }
  })
}
