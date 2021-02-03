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
      <el-table-column align="center" label="ID" width="270">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="App名称" width="200">
        <template slot-scope="scope">
          <el-link type="primary">{{ scope.row.app_name }}</el-link>
        </template>
      </el-table-column>

      <el-table-column label="下次运行时间" width="180" align="center">
        <template slot-scope="scope">
          {{ scope.row.next_run_time }}
        </template>
      </el-table-column>

            <el-table-column label="触发器" width="230" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.trigger }}</span>
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
import { create, getList } from '@/api/scheduler'

export default {
  name:'index',
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
        this.list = response.data.res
        this.listLoading = false
      })
    },

  }
}
</script>

<style lang="scss" scoped>



</style>
