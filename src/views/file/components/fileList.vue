<template>
  <div class="file-list" @click="fileOtherClick">
    <div class="file-list-top">
      <el-button size="medium" type="primary" @click.stop="uploadFile">上传文件<i class="el-icon-upload el-icon--right"></i>
      </el-button>
      <el-button size="medium" type="primary" @click="downloadFile">下载文件<i class="el-icon-download el-icon--right"></i>
      </el-button>
      <el-button size="medium" @click="createFolder">新建目录</el-button>
      <el-button size="medium" type="danger" icon="el-icon-delete" :disabled="canCallBack"
                 @click.stop="deleteResource"
      >删除
      </el-button>
      <el-button size="medium" @click="listFile">刷新</el-button>
    </div>
    <el-breadcrumb class="file-crumb" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="item in breadcrumbItem"
                          style="cursor: pointer !important;"
      >
        <a @click.stop="breadcrumbClick(item.path)">{{ item.name }}</a>
      </el-breadcrumb-item>
      <span v-if="breadcrumbItem.length>1"
            @click.stop="breadcrumbClick(breadcrumbItem[breadcrumbItem.length-2].path)"
            class="no-select" style="float: right;cursor: pointer;margin-right: 4px;"
      >
                <i class="el-icon-back"/>返回
            </span>
    </el-breadcrumb>
    <!--80是顶部和底部的大概高度，顶部的button固定为small-->
    <div class="file-list-center" :style="{height: (height-100) +'px'}">
      <file-item :file="file" @click.stop.native="fileClick(file,index,$event)" v-for="(file,index) in fileList"
                 @dblclick.stop.native="fileDBClick(file,index,$event)"
                 @contextmenu.prevent.native="openMenu(file,$event)"
                 :class="{'file-item-checked':checkSelected(file.name)}"
      >
      </file-item>
      <ul v-show="menuVisible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
        <li>打开</li>
        <li>复制链接</li>
        <li @click="deleteResource">删除</li>
        <li>属性</li>
      </ul>
      <!--文件列表为空-->
      <div v-if="this.fileList.length===0" class="no-file">
        <i class="el-icon-upload" style="font-size: 67px;color: #C0C4CC;"></i>
        <p>暂无文件，点击上传吧~</p>
        <el-tag size="small" style="cursor: pointer" @click.stop="uploadFile">上传文件</el-tag>
      </div>
    </div>
    <div class="file-list-tip">
      <span v-if="fileSelectedList.length===0">{{ fileList.length }}项</span>
      <span v-if="fileSelectedList.length>0">已选中{{ fileSelectedList.length }}项</span>
      <template v-if="fileSelectedList.length===1">
        <span>，信息:</span>
        <span v-if="fileSelectedList[0].size&&fileSelectedList[0].size>0"
        >大小:{{ formatFileSize(fileSelectedList[0].size) }}</span>
        <span>修改时间:{{ fileSelectedList[0].updateTime }}</span>
      </template>
      <el-button v-if="callback" @click.stop="selectedCallBack" :disabled="canCallBack" class="callback-btn"
                 type="primary"
                 size="small"
      >确认选择
      </el-button>
    </div>
    <!--创建文件夹-->
    <create-folder :parent-path="currentPath" :dialog-visible="createFolderVisible"
                   @close="createFolderVisible = false" @created="listFile"
    />
    <!--上传文件-->
    <upload-file :parent-path="currentPath" :dialog-visible="uploadFileVisible"
                 @uploaded="listFile"
                 @close="uploadFileVisible = false"
    />
  </div>
</template>

<script>

import { formatFileSize } from '@/utils/file'
import createFolder from './createFolder'
import uploadFile from './uploadFile'
import fileApi from '@/api/file'
import FileItem from './fileItem'
import axios from 'axios'

export default {
  name: 'fileList',
  components: { FileItem, createFolder, uploadFile },
  props: {
    height: {
      type: Number,
      default: 300
    },
    callback: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menuVisible: false,
      single: true,
      left: 0,
      top: 0,
      createFolderVisible: false,
      uploadFileVisible: false,
      currentPath: '/',
      fileList: [],
      fileSelectedList: [],
      rightClickFile: null,
      confirmDelete: false
    }
  },
  computed: {
    checkSelected() {
      return function(name) {
        let exist = false
        for (let i = 0; i < this.fileSelectedList.length; i++) {
          if (this.fileSelectedList[i].name === name) {
            exist = true
            break
          }
        }
        return exist
      }
    },
    canCallBack() {
      return this.fileSelectedList.length === 0
    },
    breadcrumbItem() {
      let result = []
      let items = this.currentPath.split('/')
      for (let i = 0; i < items.length; i++) {
        if (i === 0) {
          result.push({
            path: '/',
            name: '根目录'
          })
        } else if (items[i] && items[i] !== '') {
          result.push({
            path: items.slice(0, i + 1).join('/'),
            name: items[i]
          })
        }
      }
      return result
    }
  },
  watch: {
    menuVisible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    },
    fileSelectedList(value) {
      if (value.length > 0) {
        document.body.addEventListener('click', this.fileOtherClick)
      } else {
        document.body.removeEventListener('click', this.fileOtherClick)
      }
    },
    $route() {
      this.init()
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    formatFileSize,
    init() {
      if (this.$router.currentRoute.query.filePath) {
        this.currentPath = this.$router.currentRoute.query.filePath
        this.currentPath = this.breadcrumbItem[this.breadcrumbItem.length - 1].path
      } else {
        this.currentPath = '/'
      }
      this.listFile()
    },
    listFile() {
      fileApi.listFile({ path: this.currentPath }).then(res => {
        this.fileList = res.data.res.files || []
      })
    },
    downloadFile() {
      if (this.fileSelectedList.length === 1) {
        let fileName = this.fileSelectedList[0].name
        let res = `${this.currentPath}/${this.fileSelectedList[0].name}`
        axios.post('/download_file', { path: res }, {
          baseURL: process.env.VUE_APP_BASE_API,
          responseType: 'blob'
        }).then(res => {
          let blob = new Blob([res.data])
          if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveBlob(blob, fileName)
          } else {
            let link = document.createElement('a')
            let evt = document.createEvent('HTMLEvents')
            evt.initEvent('click', false, false)
            link.href = URL.createObjectURL(blob)
            link.download = fileName
            link.style.display = 'none'
            document.body.appendChild(link)
            link.click()
            window.URL.revokeObjectURL(link.href)
          }
        })
      } else {
        this.$message({
          type: 'error',
          message: '请选中单个文件'
        })
      }

    },
    fileClick(file, index, event) {
      this.menuVisible = false
      if (event.ctrlKey) {
        this.fileCtrlClick(file, index)
      } else {
        this.fileSelectedList = []
        let temp = JSON.parse(JSON.stringify(file))
        temp.index = index
        this.fileSelectedList.push(temp)
      }
    },
    fileDBClick(file, index, event) {
      this.menuVisible = false
      this.fileSelectedList = []
      if (file.dir) {
        if (this.currentPath.endsWith('/')) {
          this.breadcrumbClick(this.currentPath + file.name)
        } else {
          this.breadcrumbClick(this.currentPath + '/' + file.name)
        }
      }
    },
    breadcrumbClick(path) {
      if (path !== this.$router.currentRoute.query.filePath) {
        this.$router.push({
          query: {
            filePath: path
          }
        })
        this.currentPath = path
        this.listFile()
      }
    },
    fileCtrlClick(file, index) {
      let exist = false
      for (let i = 0; i < this.fileSelectedList.length; i++) {
        if (this.fileSelectedList[i].index === index) {
          exist = true
          this.fileSelectedList.splice(i, 1)
          break
        }
      }
      if (!exist) {
        let temp = JSON.parse(JSON.stringify(file))
        temp.index = index
        this.fileSelectedList.push(temp)
      }
    },
    fileOtherClick() {
      if (!this.confirmDelete) {
        this.fileSelectedList.splice(0)
      }
    },
    selectedCallBack() {
      this.$emit('callback', JSON.parse(JSON.stringify(this.fileSelectedList.filter(item => !item.dir))))
    },
    deleteResource() {
      this.confirmDelete = true
      this.$confirm('此操作将永久删除该资源, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let source = []
        this.fileSelectedList.forEach(item => {
          source.push(`${this.currentPath}/${item.name}`)
        })
        if (this.rightClickFile) {
          source.push(`${this.currentPath}/${this.rightClickFile.name}`)
          this.rightClickFile = null
        }
        fileApi.deleteResource({ paths: Array.from(new Set(source)) }).then(res => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.fileSelectedList = []
          this.listFile()
        })
        this.confirmDelete = false
      }).catch(() => {
        this.confirmDelete = false
      })
    },
    uploadFile() {
      this.uploadFileVisible = true
    },
    createFolder() {
      this.createFolderVisible = true
    },
    openMenu(file, e) {
      if (!this.checkFileExistList(file)) {
        this.fileSelectedList = []
      }
      this.rightClickFile = file
      const menuMinWidth = 105
      const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
      const offsetWidth = this.$el.offsetWidth // container width
      const maxLeft = offsetWidth - menuMinWidth // left boundary
      const left = e.clientX - offsetLeft + 15 // 15: margin right

      if (left > maxLeft) {
        this.left = maxLeft
      } else {
        this.left = left
      }

      this.top = e.clientY - 180
      this.menuVisible = true
    },
    closeMenu() {
      this.menuVisible = false
    },
    checkFileExistList(file) {
      for (let i = 0; i < this.fileSelectedList.length; i++) {
        if (file.name === this.fileSelectedList[i].name) {
          return true
        }
      }
      return false
    }
  }
}
</script>
<style lang="scss" scoped>
.file-list {
  height: 100%;
  position: relative;

  .file-list-top {

  }

  .file-crumb {
    line-height: 14px;
    overflow: hidden;
    margin-top: 15px;

    ///deep/ .el-breadcrumb__item {
    //
    //}
  }

  .file-list-center {
    margin: 10px 0;
    overflow-y: auto;
    box-sizing: border-box;
    position: relative;

    .file-item-checked {
      border: 1px solid #1ed0ff;
      padding: 9px 9px 0 9px;
      border-radius: 1px;
      background: #daf5ff;
    }

    .no-file {
      width: 100%;
      position: absolute;
      top: 10%;
      text-align: center;

      p {
        font-size: 13px;
      }
    }
  }

  .file-list-tip {
    position: relative;
    padding-left: 5px;
    font-size: 14px;
    color: #ababce;

    > span {
      margin-right: 5px;
      line-height: 26px;
    }

    .callback-btn {
      position: absolute;
      right: 10px;
    }
  }
}

.contextmenu {
  margin: 0;
  background: #fff;
  z-index: 3000;
  position: absolute;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);

  li {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;

    &:hover {
      background: #eee;
    }
  }
}
</style>
