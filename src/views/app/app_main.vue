<template>
  <div id="app" class="wrap">
    <el-row v-if="log_display_id==='output-small'">
      <el-col :span="14">
        <div class="content">
          <div id="input" class="input-card">
            <div class="input_title">
              <input type="button" value="源代码"/>
              <!--                <div id="app-entrance">应用入口:/{{form.app_name}}/main.py</div>-->

              <el-button id="run" type="primary" @click="submit_code">运行</el-button>
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
      <el-col :span="10">
        <div class="input-card" id="app-info">
          <el-form ref="form" :model="form" label-width="8vw" label-position="left">
            <el-form-item label="应用名称">
              <el-input v-model="form.app_name" v-bind:disabled="disable_appname"/>
            </el-form-item>

            <el-form-item label="运行镜像">
              <el-select v-model="form.image_name" placeholder="请选择">
                <el-option
                  v-for="item in images_list"
                  :key="item"
                  :label="item"
                  :value="item"
                  :disabled="item.disabled"
                />
              </el-select>
            </el-form-item>

            <el-form-item label="运行指令">
              <el-input v-model="form.run_command"/>
            </el-form-item>
            <el-form-item label="运行超时(s)">
              <el-input v-model="form.timeout"/>
            </el-form-item>

            <el-row>
              <el-col :span="14">
                <el-form-item label="访问外网能力">
                  <el-switch v-model="form.use_network"/>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-popover placement="right" width="400" trigger="click">
                  <el-radio-group v-model="form.network">
                    <el-radio-button label="bridge"></el-radio-button>
                    <el-radio-button label="host"></el-radio-button>
                    <el-radio-button label="none"></el-radio-button>
                  </el-radio-group>
                  <el-button slot="reference">配置网络</el-button>
                </el-popover>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="14">
                <el-form-item label="自定义应用性能">
                  <el-switch v-model="form.use_network"/>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-popover placement="left" width="800" trigger="click">
                  <div class="popover">
                    <el-form-item label="CPU数量">
                      <el-input-number
                        v-model="form.cpu_count"
                        controls-position="right"
                        :min="1"
                        :max="10"
                      ></el-input-number>
                    </el-form-item>
                    <el-form-item label="cpu百分比">
                      <el-slider
                        v-model="form.cpu_percent"
                        :step="25"
                        :marks="marks"
                        show-stops
                      >
                      </el-slider>
                    </el-form-item>

                    <el-form-item label="内存占用">
                      <el-radio-group v-model="form.mem_limit">
                        <el-radio-button label="128m"></el-radio-button>
                        <el-radio-button label="256m"></el-radio-button>
                        <el-radio-button label="512m"></el-radio-button>
                        <el-radio-button label="1g"></el-radio-button>
                        <el-radio-button label="2g"></el-radio-button>
                      </el-radio-group>
                    </el-form-item>
                  </div>
                  <el-button slot="reference">配置性能</el-button>
                </el-popover>
              </el-col>
            </el-row>
          </el-form>
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
import 'codemirror/mode/python/python.js'
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
import { app_submit, getApp_info } from '@/api/application'
import { notice } from '@/utils/notice'
import { getName } from '@/api/image'

const setting = require('@/settings')
export default {
  name: 'app_main',
  components: { codemirror },
  props: {},
  data() {
    const code = setting.tens_code
    return {
      code,
      response_info: '',
      envi_value: '',
      disable_appname: false,
      log_display_id: 'output-small',
      form: {
        app_name: '',
        image_name: '',
        run_command: '',
        run_type: 'first',
        app_type: '',
        timeout: '',
        use_network: false,
        network: 'none',
        cpu_count: 1,
        cpu_percent: 100,
        mem_limit: ''
      },
      marks: {
        0: '0%',
        25: '25%',
        50: '50%',
        75: '75%',
        100: '100%'
      },
      images_list: [
        'tensorflow-flask'
      ],
      cmOption: {
        autoCloseBrackets: true,
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        mode: 'text/x-python',
        theme: 'base16-light',
        matchBrackets: true, // 括号匹配
        lineWrapping: true, // 自动换行
        lint: true,
        hint: true// 代码提示
      }
    }
  },
  created: function() {
    //todo 判断url 是否调用appinfo
    getName().then((response) => {
      this.images_list = response.data.res
    })
    if (this.$route.query.run_type === 'modified') {
      this.info_init(this.$route.query.app_name)
    }
    this.socketIO.on('print_log', (msg) => {
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
    // setTimeout(() => {
    //   if (this.socketIO.connected) {
    //     notice(this, '成功', '服务器连接成功', 'success')
    //   }
    // }, 500) //todo 可以改用watch
  },
  methods: {
    info_init(app_name) {
      getApp_info({ app_name: app_name }).then((response) => {
        this.disable_appname = true
        this.form = response.data.res
        this.form.run_type = 'modified'
        this.code = response.data.res.code
      })
    },
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

      app_submit({
        code: this.code,
        app_name: this.form.app_name,
        image_name: this.form.image_name,
        run_command: this.form.run_command,
        run_type: this.form.run_type,
        app_type: this.form.app_type,
        timeout: this.form.timeout,
        network: this.form.network
      })
        .then((response) => {
          if (response.data.status == 1) {
            // notice(this, '成功', '运行成功', 'success')
          }
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
