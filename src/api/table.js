import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/app_list',
    method: 'get',
    params
  })
}
