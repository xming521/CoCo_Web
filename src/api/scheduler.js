import request from '@/utils/request'

export function create(data) {
  return request({
    url: '/scheduler/create',
    method: 'post',
    data
  })
}

export function getList(params) {
  return request({
    url: '/scheduler/get_jobs',
    method: 'get',
    params
  })
}

export function getName(params) {
  return request({
    url: '/app_getname',
    method: 'get',
    params
  })
}

export function delete_jobs(params) {
  return request({
    url: '/scheduler/delete_jobs',
    method: 'get',
    params
  })
}
