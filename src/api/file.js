import request from '@/utils/request'

const fileApi = {
  listFile: params => request({
    url: '/file_list',
    method: 'get',
    params
  }),
  createFolder: data => request({
    url: '/create_dir',
    method: 'post',
    data: data
  }),
  deleteResource: data => request({
    url: '/delete_file',
    method: 'post',
    data
  }),
  downloadResource: data => request({
    url: '/download_file',
    method: 'post',
    data
  })
}

export default fileApi
