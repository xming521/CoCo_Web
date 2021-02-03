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
