<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="Task名称" min-width="200">
      <template slot-scope="scope" >
        <div class="table-name">
          {{ scope.row.app_name | orderNoFilter }}
        </div>
      </template>
    </el-table-column>
    <!--    <el-table-column label="Price" width="195" align="center">-->
    <!--      <template slot-scope="scope">-->
    <!--        ¥{{ scope.row.price | toThousandFilter }}-->
    <!--      </template>-->
    <!--    </el-table-column>-->
    <el-table-column label="状态" width="150" align="center">
      <template slot-scope="{row}">
        <el-tag :type="row.status | statusFilter">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { getrec_info } from '@/api/dashboard'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        error: 'danger',
        stopped: 'info'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  props: {
    recent_event: {
      required: true
    }
  },
  watch: {
    recent_event: {
      deep: true,
      handler(val) {
        this.list = val
      }
    }
  },
  data() {
    return {
      list: this.recent_event
    }
  },
  created() {

  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.el-tag {
  zoom: 1.2;
}

.table-name {
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing:3px
}
</style>
