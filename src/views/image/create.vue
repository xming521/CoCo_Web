<template>
  <div id="app" class="wrap">
    <el-row v-if="log_display_id==='output-small'">
      <el-col :span="24">
        <div class="content">
          <div id="input" class="input-card">
            <div class="input_title">
              DockerFile
              <el-button id="run" type="primary" @click="submit_code">构建镜像</el-button>
            </div>
            <div class="input_area">
              <div id="editor" class="codemirror">
                <!-- codemirror -->
                <codemirror
                  v-model="code"
                  :options="cmOption"
                  @input="onCmCodeChange"
                />
              </div>
            </div>
          </div>
        </div>
      </el-col>

    </el-row>
    <el-row>
      <div :id="log_display_id" class="input-card">
        <div class="input_title">
          <input type="button" value="运行结果"/>
          <el-button type="primary" icon="el-icon-arrow-up" @click="log_display"></el-button>

        </div>
        <div id="result" class="out_area">{{ response_info }}</div>
      </div>
    </el-row>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
// require styles
import 'codemirror/lib/codemirror.css'
// language
import 'codemirror/mode/dockerfile/dockerfile.js'

// theme css
import 'codemirror/theme/base16-light.css'
import 'codemirror/addon/hint/show-hint.css'
// require active-line.js
import 'codemirror/addon/selection/active-line.js'
import 'codemirror/addon/edit/closebrackets.js'
// keyMap
import 'codemirror/mode/clike/clike.js'
import 'codemirror/addon/edit/matchbrackets.js'
import 'codemirror/addon/comment/comment.js'
import 'codemirror/addon/dialog/dialog.js'
import 'codemirror/addon/dialog/dialog.css'
import 'codemirror/addon/search/searchcursor.js'
import 'codemirror/addon/search/search.js'
import 'codemirror/addon/hint/show-hint.js'
import 'codemirror/addon/hint/anyword-hint.js'
import 'codemirror/addon/lint/lint.js'
// socket
import { image_build } from '@/api/image'
import { notice } from '@/utils/notice'
import { getName } from '@/api/image'

const setting = require('@/settings')
export default {
  name: 'create',
  components: { codemirror },
  props: {},
  data() {
    const code = setting.docker_filecode
    return {
      code,
      response_info: '',
      envi_value: '',
      disable_appname: false,
      log_display_id: 'output-small',
      cmOption: {
        autoCloseBrackets: true,
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        mode: 'text/x-dockerfile',
        theme: 'base16-light',
        matchBrackets: true, // 括号匹配
        lineWrapping: true, // 自动换行
        lint: true,
        hint: true// 代码提示
      }
    }
  },
  created: function() {

    this.socketIO.on('dockerfile_log', (msg) => {
        var objDiv = document.getElementById('result')
        objDiv.scrollTop = 88888888
        console.log('msg', msg)
        // document.getElementById('result').scrollIntoView();
        this.response_info = this.response_info + msg.data
        objDiv.scrollTop = 88888888
        // objDiv.scrollTop = objDiv.scrollHeight;

    })
  },
  updated() {
    var objDiv = document.getElementById('result')
    objDiv.scrollTop = 88888888
  },
  mounted() {

  },
  methods: {
    onCmCodeChange(newCode) {
      this.code = newCode
    },
    log_display() {
      if (this.log_display_id === 'output-small') {
        this.log_display_id = 'output-big'
      } else {
        this.log_display_id = 'output-small'
      }
    },
    submit_code: function() {
      this.response_info = ''

      image_build({
        code: this.code,
      })
        .then((response) => {
        })
        .catch((error) => {
          console.log(error)
          this.errored = true
        })
        .finally((e) => (this.loading = false))
    }
  }
}
</script>

<style scoped>
#editor {
  font-size: 18px;
}

.input-card {
  height: 50vh;
  margin: 5vh 5vw 0vh 5vw;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.input_title {
  height: 7vh;
  /*background-color: #f5f5f5;*/
  /*border-bottom: 1px solid #ddd;*/
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
}

input[type="button"],
[type="submit"] {
  border: 1px solid #ddd;
  outline: none;
  width: 85px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #333333;
  border-radius: 5px;
  background: #fff;
}

.input_area {
  /*width: 650px;*/
  height: 43vh;
  box-sizing: border-box;
}

::v-deep .CodeMirror-wrap {
  height: 43vh !important;
}

::v-deep .el-form-item {
  margin-bottom: 2.5vh;
}

#output-small {
  margin-top: 5vh;
  height: 30vh;
  border-radius: 8px;
  overflow-y: scroll;
}

#output-big {
  margin-top: 5vh;
  height: 80vh;
  border-radius: 8px;
  z-index: 9999;
  overflow-y: scroll;
}

.out_area {
  padding: 0 0 10px 10px;
  white-space: pre-line;
  overflow-y: scroll;
  display: block;
  width: 99.5%;
  /*height: 23vh;*/
}

#app-info {
  padding: 3vh 2vw 5vh 2vw;
  margin-left: 5vw;
  margin-right: 5vw;
}

.cm-s-base16-light.CodeMirror {
  background: white !important;
}



::-webkit-scrollbar-track-piece {
  background-color: #ffffff;
  /*滚动条凹槽的颜色，还可以设置边框属性*/
}

::-webkit-scrollbar {
  width: 6px;
  /*滚动条的宽度*/
}

::-webkit-scrollbar-thumb {
  background-color: #dddddd;
  /*滚动条的设置*/
  background-clip: padding-box;
  min-height: 28px;
  border-radius: 50px;
}

.popover {
  margin: 35px;
}
</style>
