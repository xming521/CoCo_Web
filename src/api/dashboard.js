import request from '@/utils/request'

export function getsys_info(params) {
  return request({
    url: '/dashboard/getinfo',
    method: 'get',
    params
  })
}

export function getrec_info(params) {
  // return request({
  //   url: '',
  //   method: 'get',
  //   params
  // })
}
