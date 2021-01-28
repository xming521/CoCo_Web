import request from '@/utils/request'

const fileApi = {
  listFile: params => request({
    url: '/file_list',
    method: 'get',
    params
  }),
  createFolder: data => request({
    url: `system/file/folder`,
    method: 'post',
    data
  }),
  deleteResource: data => request({
    url: `system/file`,
    method: 'delete',
    data
  })
}

export default fileApi
