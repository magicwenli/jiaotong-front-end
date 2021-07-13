import request from '../API.vue';

export function test() {
  return request({
    url: '/latest_copy',
    method: 'get'
  });
}
