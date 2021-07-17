import {request} from '../API.vue'

export function likeComment(cid) {
  return request({
    url: 'comments/like',
    method: 'post',
    data: { cid }
  })
}

export function dislikeComment(cid) {
  return request({
    url: 'comments/dislike',
    method: 'post',
    data: { cid }
  })
}

export function createComment(pid, content) {
  return request({
    url: 'comments/post_comment',
    method: 'post',
    data: { pid, content }
  })
}

export function deleteComment(cid) {
  return request({
    url: 'comments/delete_comment',
    method: 'post',
    data: { cid }
  })
}

export function getCommentsOfPost(pid, page, page_size) {
  return request({
    url: 'comments/show_comments',
    method: 'get',
    params: { pid, page, page_size }
  })
}
