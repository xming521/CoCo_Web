import request from '@/utils/request'

export function app_submit(data) {
  return request({
    url: '/app_submit',
    method: 'post',
    data
  })
}

export function getList(params) {
  return request({
    url: '/app_list',
    method: 'get',
    params
  })
}

export function getApp_start(params) {
  return request({
    url: '/app_start',
    method: 'get',
    params
  })
}

export function getApp_stop(params) {
  return request({
    url: '/app_stop',
    method: 'get',
    params
  })
}
