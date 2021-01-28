import request from '@/utils/request'

export function easy_submit(data) {
  return request({
    url: '/easy_app/submit',
    method: 'post',
    data
  })
}
