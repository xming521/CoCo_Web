<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" min-min-width="70">
        <template slot-scope="scope">
          {{ scope.row.container_id }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="应用名称" min-width="100">
        <template slot-scope="scope">
          {{ scope.row.app_name }}
        </template>
      </el-table-column>
      <el-table-column label="镜像名称" min-width="100" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.image_name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="上次运行时间" min-width="150"
        align="center"
        prop="created_at"

      >
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.start_time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="结束时间" min-width="150"
        align="center"
        prop="created_at"

      >
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.over_time }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="状态" min-width="100">
        <template slot-scope="scope">
          {{ scope.row.status |statusFilter }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="日志"  min-width="100">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="success"
            @click="getlog(scope.row.app_name,scope.row.container_id)"
          >查看日志
          </el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-drawer
      :with-header="false"
      :visible.sync="drawer"
      :direction="direction"
    >

      <el-row>
        <el-col :span="12">
          <h2 style="margin: 35px 0 0 30px">日志</h2>
        </el-col>
        <el-col :span="12">
          <el-button
            style="margin: 25px 0 0 100px"
            size="large"
            type="success"
            @click="downloadFile"
          >下载日志
          </el-button
          >
        </el-col>
      </el-row>
      <el-card class="log-card" shadow="hover">
        <el-scrollbar>
          <div id="log-content">
            {{ this.log }}
          </div>
        </el-scrollbar>
      </el-card>
      <el-backtop target="#log-content"></el-backtop>
    </el-drawer>
  </div>


</template>

<script>
import { getContainerr_list, getApp_log } from '@/api/application'
import axios from 'axios'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        137: '超时',
        136: '手动停止',
        0: '完成',
        1: '错误',
        2: '路径错误'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      drawer: false,
      direction: 'rtl',
      current: [],
      log: ''
    }
  },
  created() {
    this.fetchData(this.$route.query.app_name)
  },
  methods: {
    fetchData(app_name) {
      this.listLoading = true
      getContainerr_list({ app_name: app_name }).then((response) => {
        this.list = response.data.items
        this.listLoading = false

      })
    },
    getlog(app_name, container_id) {
      this.current = [app_name, container_id]
      getApp_log({
        app_name: app_name,
        container_id: container_id
      }).then((response) => {
        this.log = response.data.res
        this.drawer = true
        this.listLoading = false
      })
    },
    downloadFile() {

      axios.post('/download_log', { app_name: this.current[0], container_id: this.current[1] }, {
        baseURL: process.env.VUE_APP_BASE_API,
        responseType: 'blob'
      }).then(res => {
        let blob = new Blob([res.data])
        if (window.navigator.msSaveOrOpenBlob) {
          navigator.msSaveBlob(blob, this.current[0] + '-' + this.current[1])
        } else {
          let link = document.createElement('a')
          let evt = document.createEvent('HTMLEvents')
          evt.initEvent('click', false, false)
          link.href = URL.createObjectURL(blob)
          link.download = this.current[0] + '-' + this.current[1]
          link.style.display = 'none'
          document.body.appendChild(link)
          link.click()
          window.URL.revokeObjectURL(link.href)
        }
      })

    }
  }
}
</script>


<style scoped>


.log-card {
  margin: 30px 20px 50px 20px;
  height: auto;
  max-height: 90vw;
  white-space: pre-line !important;
  border: 3px solid #d6d6d6;
}

#log-content {
  height: 75vh;

}


</style>
