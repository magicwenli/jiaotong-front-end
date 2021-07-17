import {request} from '../API.vue'

export function register(email, password, verCode) {
  return request({
    url: '/users/reg',
    method: 'post',
    data: { email, password, verCode }
  })
}

export function sendVerCode(email) {
  return request({
    url: '/users/send_vercode',
    method: 'post',
    data: { email }
  })
}

export function login(email, password) {
  return request({
    url: '/users/login',
    method: 'post',
    data: { email, password }
  })
}

export function updatePassword(oldPassword, newPassword) {
  return request({
    url: '/users/update_password',
    method: 'post',
    data: { oldPassword, newPassword }
  })
}

export function findPassword(email, verCode, newPassword) {
  return request({
    url: '/users/find_password',
    method: 'post',
    data: { email, verCode, newPassword }
  })
}
