import { request, requestForm } from '../API.vue'

export function getPostsByTag(page, page_size, tags, orderby) {
  page = page || 1;
  page_size = page_size || 10;
  orderby = orderby || 'time';

  if (tags === "null") {
    return request({
      url: '/post/show_posts',
      method: 'get',
      params: { page, page_size, orderby }
    })
  } else {
    return request({
      url: '/post/show_posts',
      method: 'get',
      params: { page, page_size, tags, orderby }
    })
  }
}

export function getFavPosts(page, page_size, orderby) {
  page = page || 1;
  page_size = page_size || 10;
  orderby = orderby || 'time';

  return request({
    url: '/post/show_favorites',
    method: 'get',
    params: { page, page_size, orderby }
  })
}

export function searchPosts(key, page, page_size, tags, orderby) {
  page = page || 1;
  page_size = page_size || 10;
  orderby = orderby || 'time';
  tags = tags || ""

  if (key === "") {
    if (tags === "") {
      return request({
        url: '/post/search_post',
        method: 'get',
        params: { page, page_size, orderby }
      })
    } else {
      return request({
        url: '/post/search_post',
        method: 'get',
        params: { page, page_size, tags, orderby }
      })
    }
  } else {
    if (tags === "") {
      return request({
        url: '/post/search_post',
        method: 'get',
        params: { key, page, page_size, orderby }
      })
    } else {
      return request({
        url: '/post/search_post',
        method: 'get',
        params: { key, page, page_size, tags, orderby }
      })
    }
  }
}

export function createPost(postContent, labelsString, picture) {
  return requestForm({
    url: '/post/create_post',
    method: 'post',
    data: { postContent, labelsString, picture }
  })
}

export function deletePost(pid) {
  return request({
    url: '/post/delete_post',
    method: 'post',
    data: { pid }
  })
}

export function likePost(pid) {
  return request({
    url: '/post/give_like_post',
    method: 'post',
    data: { pid }
  })
}

export function viewPost(pid) {
  return request({
    url: '/post/give_view_post',
    method: 'post',
    data: { pid }
  })
}

export function createFav(pid) {
  return request({
    url: '/post/create_favorite',
    method: 'post',
    data: { pid }
  })
}

export function deleteFav(pid) {
  return request({
    url: '/post/delete_favorite',
    method: 'post',
    data: { pid }
  })
}

export function createReport(pid, reasons) {
  return request({
    url: '/post/create_report',
    method: 'post',
    data: { pid, reasons }
  })
}

export function getLabels() {
  return request({
    url: 'labels/show_labels',
    method: 'get'
  })
}
