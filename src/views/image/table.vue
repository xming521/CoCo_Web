<template>
  <div class="app-container">
    <!-- Form -->
    <el-button type="primary" @click="dialogFormVisible = true" style="margin-bottom: 40px">拉取镜像</el-button>

    <el-dialog title="拉取镜像" :visible.sync="dialogFormVisible">
      <el-form element-loading-text="Loading" v-loading="listLoading">
        <el-input placeholder="请输入镜像名称" v-model="image_name">
          <template slot="prepend">docker pull</template>
        </el-input>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>

    <el-table
      v-loading="listLoading"
      :data="images"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" min-width="15%">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="镜像名称" min-width="20%">
        <template slot-scope="scope">
          <el-link type="primary">{{ scope.row.name }}</el-link>
        </template>
      </el-table-column>
      <el-table-column label="标签" min-width="15%" align="center">
        <template slot-scope="scope">
          {{ scope.row.tag }}
        </template>
      </el-table-column>
      <el-table-column label="创建时间" min-width="20%" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.create_time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="大小" min-width="10%" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.size }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" min-width="20%" label="操作">
        <template slot-scope="scope">

          <el-button
            size="small"
            type="danger"
            icon="el-icon-delete-solid"
            @click="handleDelete(scope.$index, scope.row)"
          >删除
          </el-button
          >

        </template>
      </el-table-column>
    </el-table>
  </div>


</template>

<script>
import { image_pull, getList, delete_images } from '@/api/image'

export default {
  name: 'table',
  data() {
    return {
      listLoading: true,
      disr: false,
      diss: false,
      dialogFormVisible: false,
      image_name: '',
      images: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then((response) => {
        this.images = response.data.res
        this.listLoading = false
      })
    },
    show_dialog() {
      this.listLoading = true
    },
    submit() {
      image_pull({ image_name: this.image_name }).then((response) => {
        this.dialogFormVisible = false
        this.fetchData()
      })
    },
    handleDelete(index, row) {
      delete_images({ name: row.name }).then((response) => {
        this.fetchData()
      })
    }

  }
}
</script>

<style scoped>

</style>
