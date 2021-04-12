<template>
  <div class="flow-menu" ref="tool" style="border-top: 2px solid #dcdfe6;padding-top: 4vh">
    <el-form>
      <el-row>
        <el-col :span="16">
          <el-form-item label="选择应用" style="margin-left: 10vw;">
            <el-select v-model="cur_app_name" placeholder="请选择">
              <el-option
                v-for="item in app_list"
                :key="item"
                :label="item"
                :value="item"
                :disabled="item.disabled"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-button @click="add_node" type="primary">添加至调用链</el-button>
        </el-col>
      </el-row>

    </el-form>

  </div>
</template>
<script>
import draggable from 'vuedraggable'

const { getAppName } = require('@/api/role')

var mousePosition = {
  left: -1,
  top: -1
}

export default {
  data() {
    return {
      activeNames: '1',
      app_list: [],
      app_count: 0,
      cur_app_name: '',
      node_info: {
        id: '11',
        type: 'timer',
        name: '应用',
        ico: 'el-icon-menu',
        // 自定义覆盖样式
        style: {}
      },
      // draggable配置参数参考 https://www.cnblogs.com/weixin186/p/10108679.html
      draggableOptions: {
        preventOnFilter: false,
        sort: false,
        disabled: false,
        ghostClass: 'tt',
        // 不使用H5原生的配置
        forceFallback: true
        // 拖拽的时候样式
        // fallbackClass: 'flow-node-draggable'
      },
      // 默认打开的左侧菜单的id
      defaultOpeneds: ['1', '2'],
      menuList: [
        {
          id: '1',
          type: 'group',
          name: '开始节点',
          ico: 'el-icon-video-play',
          open: true,
          children: [
            {
              id: '11',
              type: 'timer',
              name: '数据接入',
              ico: 'el-icon-time',
              // 自定义覆盖样式
              style: {}
            }, {
              id: '12',
              type: 'task',
              name: '接口调用',
              ico: 'el-icon-odometer',
              // 自定义覆盖样式
              style: {}
            }
          ]
        },
        {
          id: '2',
          type: 'group',
          name: '结束节点',
          ico: 'el-icon-video-pause',
          open: true,
          children: [
            {
              id: '21',
              type: 'end',
              name: '流程结束',
              ico: 'el-icon-caret-right',
              // 自定义覆盖样式
              style: {}
            }, {
              id: '22',
              type: 'over',
              name: '数据清理',
              ico: 'el-icon-shopping-cart-full',
              // 自定义覆盖样式
              style: {}
            }
          ]
        }
      ],
      nodeMenu: {}
    }
  },
  components: {
    draggable
  },
  created() {
    getAppName().then((response) => {
      this.app_list = response.data.res
    })
  },
  methods: {
    //todo
    add_node() {
      this.node_info.name = this.cur_app_name
      this.node_info.id = this.cur_app_name
      this.app_count++
      this.$emit('addNode', this.node_info, this.app_count)
    },
    // 拖拽开始时触发
    move(evt, a, b, c) {
      var type = evt.item.attributes.type.nodeValue
      console.log(evt.item.attributes.type.nodeValue)
      this.nodeMenu = this.getMenuByType(type)
    },
    // 拖拽结束时触发
    end(evt, e) {
      this.$emit('addNode', this.nodeMenu, mousePosition)
    },
    // 是否是火狐浏览器
    isFirefox() {
      var userAgent = navigator.userAgent
      if (userAgent.indexOf('Firefox') > -1) {
        return true
      }
      return false
    }
  }
}
</script>
