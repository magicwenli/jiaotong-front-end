import {request,requestForm} from '../API.vue'

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
  //body: FormData
  return requestForm({
    url: '/create_posts',
    method: 'post',
    data: body
  })
}


export {
  getPostsByTag,
  createPost,
}
