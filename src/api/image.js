import request from '@/utils/request'

export function image_pull(params) {
  return request({
    url: '/image/pull',
    method: 'get',
    params
  })
}

export function getList(params) {
  return request({
    url: '/image/getlist',
    method: 'get',
    params
  })
}

export function delete_images(params) {
  return request({
    url: '/image/delete',
    method: 'get',
    params
  })
}
