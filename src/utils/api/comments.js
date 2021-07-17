import {request} from '../API.vue'

export function getCommentsOfPost(pid, page, page_size) {
  return request({
    url: '/show_comments',
    method: 'get',
    params: { pid, page, page_size }
  })
}
