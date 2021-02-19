<template>
  <div id="app">
    <router-view ref="router-view"/>
  </div>
</template>

<script>

import Vue from 'vue'
import { notice } from '@/utils/notice'
const io = require('socket.io-client')
let socket = io(process.env.VUE_APP_BASE_API, {
  path: '/ws/socket.io'
})
Vue.prototype.socketIO = socket
export default {
  name: 'App',
  mounted() {
    window.vue=this;
    this.socketIO.on('connect', () => {
      notice(this, '连接成功', '与服务器连接成功', 'success')
    })

    this.socketIO.on('disconnect', () => {
      notice(this, '连接断开', '与服务器连接断开', 'error')
    })

    socket.on('connect_error', () => {
      notice(this, '连接错误', '与服务器连接错误', 'error')
      setTimeout(() => {
        socket.connect()
      }, 500)
    })

    // 监听事件 server服务端需写server_response  不是内置的
    this.socketIO.on('push', (msg) => {
      console.log(msg.data)
      if (msg.data.type === 'error') {
        notice(this, msg.data.type, msg.data.text, msg.data.type, 3000)
      } else {
        notice(this, msg.data.type, msg.data.text, msg.data.type)
      }

      if (msg.data.refresh){
        setTimeout(() => {
          this.$root.$emit('refresh_apptable')
      }, 700)
      }
    })
  }
}
</script>
