<template>
  <div id="app">
    <router-view/>
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

    setTimeout(() => {
      if (this.socketIO.connected) {
        notice(this, '成功', '服务器连接成功', 'success')
      }
    }, 500) //todo 可以改用watch

    // 监听事件 server服务端需写server_response  不是内置的
    this.socketIO.on('push', (msg) => {
      console.log(msg.data.type + msg.data.text)
      if (msg.data.type === 'error') {
        notice(this, msg.data.type, msg.data.text, msg.data.type, 0)
      } else {
        notice(this, msg.data.type, msg.data.text, msg.data.type)
      }
    })

  }
}
</script>
