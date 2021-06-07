<template>
  <div class="app-container">
    <!-- Form -->
    <el-button type="primary" @click="fetchAppname" style="margin-bottom: 40px">创建计划任务</el-button>

    <el-dialog title="创建计划任务" :visible.sync="dialogFormVisible">
      <el-form :model="form" element-loading-text="Loading" v-loading="listLoading">

        <el-form-item label="应用名称" label-width="150px">
          <el-select v-model="form.app_name" placeholder="请选择">
            <el-option
              v-for="item in app_names"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="触发器类型" label-width="160px">
          <div>
            <el-radio v-model="form.type" label="interval" border>定时触发</el-radio>
            <el-radio v-model="form.type" label="cron" border>cron表达式</el-radio>
          </div>
        </el-form-item>

        <el-form-item label="触发间隔（每）" label-width="190px">
          <el-form :inline="true">
            <el-input v-model="form.param.seconds" class="input-mini"></el-input>
            <el-form-item label="秒" label-width="15px"></el-form-item>
            <el-input v-model="form.param.minutes" class="input-mini"></el-input>
            <el-form-item label="分"></el-form-item>
            <el-input v-model="form.param.hours" class="input-mini"></el-input>
            <el-form-item label="时"></el-form-item>
            <el-input v-model="form.param.days" class="input-mini"></el-input>
            <el-form-item label="天"></el-form-item>
          </el-form>

        </el-form-item>
        <el-form-item label="corn表达式" label-width="165px">
          <el-input style="width: 400px" v-model="form.param.crontab_expression" placeholder=""></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" min-width="25%">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="App名称" min-width="15%">
        <template slot-scope="scope">
          <el-link type="primary">{{ scope.row.app_name }}</el-link>
        </template>
      </el-table-column>
      <el-table-column label="下次运行时间" min-width="15%" align="center">
        <template slot-scope="scope">
          {{ scope.row.next_run_time }}
        </template>
      </el-table-column>
      <el-table-column label="触发器" min-width="20%" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.trigger }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" min-width="25%" label="操作">
        <template slot-scope="scope">
          <el-button
            size="small"
            type="success"
            v-bind:disabled="scope.row.status == 'running' ? true : false"
          >启动
          </el-button
          >
          <el-button
            size="small"
            type="danger"
            v-bind:disabled="scope.row.status == 'stopped' ? true : false"
          >停止
          </el-button
          >
          <el-button
            size="small"
            type="danger"
            icon="el-icon-delete-solid"
            @click="handleDelete(scope.$index, scope.row)"
          >删除
          </el-button
          >

        </template>
      </el-table-column >
    </el-table>
  </div>
</template>

<script>
import { create, getList, getName, delete_jobs } from '@/api/scheduler'

export default {
  name: 'index',
  data() {
    return {
      list: null,
      listLoading: true,
      disr: false,
      diss: false,
      dialogFormVisible: false,
      form: {
        app_name: '',
        type: '',
        param: {
          hours: 0,
          days: 0,
          minutes: 0,
          seconds: 0,
          crontab_expression: ''
        }
      },
      app_names: [],
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
    fetchAppname() {
      this.dialogFormVisible = true
      this.listLoading = true
      getName().then((response) => {
        this.app_names = response.data.res
        this.listLoading = false
      })
    },
    submit() {
      create(this.form).then((response) => {
        this.dialogFormVisible = false
        this.fetchData()
      })
    },
    handleDelete(index, row) {
      delete_jobs({ id: row.id }).then((response) => {
        this.fetchData()
      })
    }

  }
}
</script>

<style lang="scss" scoped>
.input-mini {
  width: 50px;
  margin-right: 15px;
}

</style>
