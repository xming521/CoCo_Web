(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f5759e6"],{"685c":function(t,e,o){"use strict";o.d(e,"d",(function(){return a})),o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return l}));var r=o("b775");function a(t){return Object(r["a"])({url:"/image/pull",method:"get",params:t})}function n(t){return Object(r["a"])({url:"/image/getlist",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/image/getname",method:"get",params:t})}function l(t){return Object(r["a"])({url:"/image/delete",method:"get",params:t})}},7723:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrap",attrs:{id:"app"}},["output-small"===t.log_display_id?o("el-row",[o("el-col",{attrs:{span:14}},[o("div",{staticClass:"content"},[o("div",{staticClass:"input-card",attrs:{id:"input"}},[o("div",{staticClass:"input_title"},[o("input",{attrs:{type:"button",value:"源代码"}}),o("el-button",{attrs:{id:"run",type:"primary"},on:{click:t.submit_code}},[t._v("运行")])],1),o("div",{staticClass:"input_area"},[o("div",{staticClass:"codemirror",attrs:{id:"editor"}},[o("codemirror",{attrs:{options:t.cmOption},on:{input:t.onCmCodeChange},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1)])])])]),o("el-col",{attrs:{span:10}},[o("div",{staticClass:"input-card",attrs:{id:"app-info"}},[o("el-form",{ref:"form",attrs:{model:t.form,"label-width":"8vw","label-position":"left"}},[o("el-form-item",{attrs:{label:"应用名称"}},[o("el-input",{attrs:{disabled:t.disable_appname},model:{value:t.form.app_name,callback:function(e){t.$set(t.form,"app_name",e)},expression:"form.app_name"}})],1),o("el-form-item",{attrs:{label:"运行镜像"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.image_name,callback:function(e){t.$set(t.form,"image_name",e)},expression:"form.image_name"}},t._l(t.images_list,(function(t){return o("el-option",{key:t,attrs:{label:t,value:t,disabled:t.disabled}})})),1)],1),o("el-form-item",{attrs:{label:"运行指令"}},[o("el-input",{model:{value:t.form.run_command,callback:function(e){t.$set(t.form,"run_command",e)},expression:"form.run_command"}})],1),o("el-form-item",{attrs:{label:"运行超时(s)"}},[o("el-input",{model:{value:t.form.timeout,callback:function(e){t.$set(t.form,"timeout",e)},expression:"form.timeout"}})],1),o("el-row",[o("el-col",{attrs:{span:14}},[o("el-form-item",{attrs:{label:"访问外网能力"}},[o("el-switch",{model:{value:t.form.use_network,callback:function(e){t.$set(t.form,"use_network",e)},expression:"form.use_network"}})],1)],1),o("el-col",{attrs:{span:10}},[o("el-popover",{attrs:{placement:"right",width:"400",trigger:"click"}},[o("el-radio-group",{model:{value:t.form.network,callback:function(e){t.$set(t.form,"network",e)},expression:"form.network"}},[o("el-radio-button",{attrs:{label:"bridge"}}),o("el-radio-button",{attrs:{label:"host"}}),o("el-radio-button",{attrs:{label:"none"}})],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("配置网络")])],1)],1)],1),o("el-row",[o("el-col",{attrs:{span:14}},[o("el-form-item",{attrs:{label:"自定义应用性能"}},[o("el-switch",{model:{value:t.form.use_network,callback:function(e){t.$set(t.form,"use_network",e)},expression:"form.use_network"}})],1)],1),o("el-col",{attrs:{span:10}},[o("el-popover",{attrs:{placement:"left",width:"800",trigger:"click"}},[o("div",{staticClass:"popover"},[o("el-form-item",{attrs:{label:"CPU数量"}},[o("el-input-number",{attrs:{"controls-position":"right",min:1,max:10},model:{value:t.form.cpu_count,callback:function(e){t.$set(t.form,"cpu_count",e)},expression:"form.cpu_count"}})],1),o("el-form-item",{attrs:{label:"cpu百分比"}},[o("el-slider",{attrs:{step:25,marks:t.marks,"show-stops":""},model:{value:t.form.cpu_percent,callback:function(e){t.$set(t.form,"cpu_percent",e)},expression:"form.cpu_percent"}})],1),o("el-form-item",{attrs:{label:"内存占用"}},[o("el-radio-group",{model:{value:t.form.mem_limit,callback:function(e){t.$set(t.form,"mem_limit",e)},expression:"form.mem_limit"}},[o("el-radio-button",{attrs:{label:"128m"}}),o("el-radio-button",{attrs:{label:"256m"}}),o("el-radio-button",{attrs:{label:"512m"}}),o("el-radio-button",{attrs:{label:"1g"}}),o("el-radio-button",{attrs:{label:"2g"}})],1)],1)],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("配置性能")])],1)],1)],1)],1)],1)])],1):t._e(),o("el-row",[o("div",{staticClass:"input-card",attrs:{id:t.log_display_id}},[o("div",{staticClass:"input_title"},[o("input",{attrs:{type:"button",value:"运行结果"}}),o("el-button",{attrs:{type:"primary",icon:"el-icon-arrow-up"},on:{click:t.log_display}})],1),o("div",{staticClass:"out_area",attrs:{id:"result"}},[t._v(t._s(t.response_info))])])])],1)},a=[],n=(o("d3b7"),o("8f94")),i=(o("a7be"),o("db91"),o("cc10"),o("f6b6"),o("31c5"),o("10b2"),o("4ba6"),o("8c33"),o("7289"),o("2aed"),o("d72f"),o("b933"),o("0b6c"),o("9b74"),o("832b"),o("8822"),o("b255")),l=(o("cfa9"),o("685c")),s=o("83d6"),u={name:"app_main",components:{codemirror:n["codemirror"]},props:{},data:function(){var t=s.tens_code;return{code:t,response_info:"",envi_value:"",disable_appname:!1,log_display_id:"output-small",form:{app_name:"",image_name:"",run_command:"",run_type:"first",app_type:"",timeout:"",use_network:!1,network:"none",cpu_count:1,cpu_percent:100,mem_limit:""},marks:{0:"0%",25:"25%",50:"50%",75:"75%",100:"100%"},images_list:["tensorflow-flask"],cmOption:{autoCloseBrackets:!0,tabSize:4,styleActiveLine:!0,lineNumbers:!0,line:!0,mode:"text/x-python",theme:"base16-light",matchBrackets:!0,lineWrapping:!0,lint:!0,hint:!0}}},created:function(){var t=this;Object(l["c"])().then((function(e){t.images_list=e.data.res})),"modified"===this.$route.query.run_type&&this.info_init(this.$route.query.app_name),this.socketIO.on("print_log",(function(e){var o=document.getElementById("result");o.scrollTop=88888888,console.log("msg",e),t.response_info=t.response_info+e.data,o.scrollTop=88888888}))},updated:function(){var t=document.getElementById("result");t.scrollTop=88888888},mounted:function(){},methods:{info_init:function(t){var e=this;Object(i["b"])({app_name:t}).then((function(t){e.disable_appname=!0,e.form=t.data.res,e.form.run_type="modified",e.code=t.data.res.code}))},onCmCodeChange:function(t){this.code=t},log_display:function(){"output-small"===this.log_display_id?this.log_display_id="output-big":this.log_display_id="output-small"},submit_code:function(){var t=this;this.response_info="",Object(i["a"])({code:this.code,app_name:this.form.app_name,image_name:this.form.image_name,run_command:this.form.run_command,run_type:this.form.run_type,app_type:this.form.app_type,timeout:this.form.timeout,network:this.form.network}).then((function(t){t.data.status})).catch((function(e){console.log(e),t.errored=!0})).finally((function(e){return t.loading=!1}))}}},c=u,m=(o("85d7"),o("2877")),p=Object(m["a"])(c,r,a,!1,null,"0c4862d1",null);e["default"]=p.exports},"85d7":function(t,e,o){"use strict";o("93fa")},"93fa":function(t,e,o){},b255:function(t,e,o){"use strict";o.d(e,"a",(function(){return a})),o.d(e,"g",(function(){return n})),o.d(e,"d",(function(){return i})),o.d(e,"e",(function(){return l})),o.d(e,"f",(function(){return s})),o.d(e,"b",(function(){return u})),o.d(e,"c",(function(){return c}));var r=o("b775");function a(t){return Object(r["a"])({url:"/app_submit",method:"post",data:t})}function n(t){return Object(r["a"])({url:"/app_list",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/app_start",method:"get",params:t})}function l(t){return Object(r["a"])({url:"/app_stop",method:"get",params:t})}function s(t){return Object(r["a"])({url:"/container_list",method:"get",params:t})}function u(t){return Object(r["a"])({url:"/app_getinfo",method:"get",params:t})}function c(t){return Object(r["a"])({url:"/app_getlog",method:"get",params:t})}}}]);