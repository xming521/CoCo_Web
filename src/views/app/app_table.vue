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
      <el-table-column align="center" label="ID" width="70">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <!--      <el-table-column align="center" label="容器ID" width="150">-->
      <!--        <template slot-scope="scope">-->
      <!--          {{ scope.row.container_id }}-->
      <!--        </template>-->
      <!--      </el-table-column>-->
      <el-table-column align="center" label="App名称" width="200">
        <template slot-scope="scope">
          <el-link type="primary">{{ scope.row.app_name }}</el-link>
        </template>
      </el-table-column>
      <el-table-column label="镜像" width="200" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.image_name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="类型" width="180" align="center">
        <template slot-scope="scope">
          {{ scope.row.type }}
        </template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="状态"
        width="125"
        align="center"
      >
        <template slot-scope="scope">
          <el-tag class="status-tags" :type="scope.row.status | statusFilter" effect="dark">
            <i v-bind:class="scope.row.status | statusFilter2"></i>
            {{ scope.row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="created_at"
        label="上次运行时间"
        width="200"
      >
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ '   ' + scope.row.start_time }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="success"
            @click="handleEdit(scope.$index, scope.row)"
            v-bind:disabled="scope.row.status == 'running' ? true : false"
          >启动
          </el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            v-bind:disabled="scope.row.status == 'stopped' ? true : false"
          >停止
          </el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getApp_start, getApp_stop, getList } from '@/api/application'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        running: 'success',
        stopped: 'info'
      }
      return statusMap[status]
    },
    statusFilter2(status) {
      const statusMap = {
        running: 'el-icon-success',
        stopped: 'el-icon-error'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      disr: false,
      diss: false,
      app
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then((response) => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    fetchData2(app_name) {
      getApp_start({ app_name: app_name }).then((response) => {
        this.fetchData()
      })
    },
    fetchData3(app_name) {
      getApp_stop({ app_name: app_name }).then((response) => {
        this.fetchData()
      })
    },
    handleEdit(index, row) {
      this.fetchData2(row.app_name)
    },
    handleDelete(index, row) {
      this.fetchData3(row.app_name)
    }
  }
}
</script>

<style lang="scss" scoped>
.status-tags {
  font-size: 14.5px;
}

.editor-slide-upload {
  ::v-deep .el-upload {
    width: 100% !important;
  }

  ::v-deep .el-upload-dragger {
    width: 100% !important;
  }
}
</style>