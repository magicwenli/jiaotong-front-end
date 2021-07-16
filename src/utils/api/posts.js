import request from '../API.vue'

function getPostsByTag(page, page_size, tags, orderby) {
  page = page || 1;
  page_size = page_size || 10;
  orderby = orderby || 'time';

  return request({
    url: '/show_posts',
    method: 'get',
    params: { page, page_size, tags, orderby }
  })
}


function createPost(body) {
  return request({
    url: '/create_posts',
    method: 'post',
    data: body
  })
}


export {
  getPostsByTag,
  createPost,
}
