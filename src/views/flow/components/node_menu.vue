<template>
  <div class="flow-menu" ref="tool">

    <el-button @click="add_node" type="primary">主要按钮</el-button>
    <div v-for="menu  in  menuList" :key="menu.id">
      <span class="ef-node-pmenu" @click="menu.open = !menu.open"><i
        :class="{'el-icon-caret-bottom': menu.open,'el-icon-caret-right': !menu.open}"
      ></i>&nbsp;{{ menu.name }}</span>
      <ul v-show="menu.open" class="ef-node-menu-ul">
        <draggable @end="end" @start="move" v-model="menu.children" :options="draggableOptions">
          <li v-for="subMenu in menu.children" class="ef-node-menu-li" :key="subMenu.id" :type="subMenu.type">
            <i :class="subMenu.ico"></i> {{ subMenu.name }}
          </li>
        </draggable>
      </ul>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable'

var mousePosition = {
  left: -1,
  top: -1
}

export default {
  data() {
    return {
      activeNames: '1',
      node_info: {
        id: '11',
        type: 'timer',
        name: '应用',
        ico: 'el-icon-time',
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
  },
  methods: {
    //todo
    add_node() {
      this.nodeMenu = this.node_info
      this.$emit('addNode', this.nodeMenu, mousePosition)
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
