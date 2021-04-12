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
      <el-table-column align="center" label="ID" min-width="5%">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="App名称" min-width="15%">
        <template slot-scope="scope">
          <router-link :to="{name: 'app_modify', query: {app_name:scope.row.app_name, run_type: 'modified' }}">
            <el-link type="primary">{{ scope.row.app_name }}</el-link>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column label="镜像" min-width="20%" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.image_name }}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="13%" label="状态"
                       class-name="status-col"
                       align="center"
      >
        <template slot-scope="scope">
          <el-tag class="status-tags" :type="scope.row.status | statusFilter" effect="dark">
            <i v-bind:class="scope.row.status | statusFilter2"></i>
            {{ scope.row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column min-width="18%" label="上次运行时间"
                       align="center"
                       prop="created_at"
      >
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ '   ' + scope.row.start_time }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" min-width="29%">
        <template slot-scope="scope">
          <el-button
            size="small"
            type="success"
            @click="app_start(scope.$index, scope.row)"
            v-bind:disabled="scope.row.status == 'running' ? true : false"
          >启动
          </el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="app_stop(scope.$index, scope.row)"
            v-bind:disabled="['stopped','success','error'].includes(scope.row.status)"
          >停止
          </el-button
          >

          <el-button size="small" type="danger" icon="el-icon-delete" @click="app_delete(scope.$index, scope.row)">删除
          </el-button>


          <router-link style="margin-left: 1vw" :to="{name: 'container_table', query: {app_name:scope.row.app_name }}">
            <el-link type="primary">运行记录</el-link>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getApp_start, getApp_stop, getList, getApp_delete } from '@/api/application'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        running: 'success',
        stopped: 'info',
        success: 'success',
        error: 'danger'
      }
      return statusMap[status]
    },
    statusFilter2(status) {
      const statusMap = {
        running: 'el-icon-loading',
        stopped: 'el-icon-error',
        success: 'el-icon-success',
        error: 'el-icon-warning'
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
    this.fetch_apptable()
    let that = this
    this.$root.$on('refresh_apptable', function() {
      that.fetch_apptable()
    })//监听外部刷新表格 socketio用 注意监听直接this 只能监听这个组件的emit 所以要挂root上
  },
  methods: {
    fetch_apptable() {
      this.listLoading = true
      getList().then((response) => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    app_start(index, row) {
      getApp_start({ app_name: row.app_name }).then((response) => {
        this.fetch_apptable()
      })
    },
    app_stop(index, row) {
      getApp_stop({ app_name: row.app_name }).then((response) => {
        this.fetch_apptable()
      })
    },
    app_delete(index, row) {
      this.$confirm('此操作将永久删除该应用, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        getApp_delete({ app_name: row.app_name }).then((response) => {
          this.fetch_apptable()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.status-tags {
  width: 6vw;
  font-size: 14.5px;
}

.status-tags .el-tag {
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
