(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d6aa2fe"],{"01c6":function(t,e,r){},"685c":function(t,e,r){"use strict";r.d(e,"d",(function(){return o})),r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return s})),r.d(e,"a",(function(){return i}));var a=r("b775");function o(t){return Object(a["a"])({url:"/image/pull",method:"get",params:t})}function n(t){return Object(a["a"])({url:"/image/getlist",method:"get",params:t})}function s(t){return Object(a["a"])({url:"/image/getname",method:"get",params:t})}function i(t){return Object(a["a"])({url:"/image/delete",method:"get",params:t})}},7723:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrap",attrs:{id:"app"}},["output-small"===t.log_display_id?r("el-row",[r("el-col",{attrs:{span:14}},[r("div",{staticClass:"content"},[r("div",{staticClass:"input-card",attrs:{id:"input"}},[r("div",{staticClass:"input_title"},[r("input",{attrs:{type:"button",value:"源代码"}}),r("el-tag",{staticClass:"status-tags",staticStyle:{zoom:"1.2","margin-left":"16vw"},attrs:{type:t._f("statusFilter")(t.status),effect:"dark"}},[r("i",{class:t._f("statusFilter2")(t.status)}),t._v(" "+t._s(t.status)+" ")]),r("el-button",{attrs:{id:"run",type:"primary"},on:{click:t.submit_code}},[t._v("运行")])],1),r("div",{staticClass:"input_area"},[r("div",{staticClass:"codemirror",attrs:{id:"editor"}},[r("codemirror",{attrs:{options:t.cmOption},on:{input:t.onCmCodeChange},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1)])])])]),r("el-col",{attrs:{span:10}},[r("div",{staticClass:"input-card",attrs:{id:"app-info"}},[r("el-form",{ref:"form",attrs:{model:t.form,"label-width":"8vw","label-position":"left"}},[r("el-form-item",{attrs:{label:"应用名称"}},[r("el-input",{attrs:{disabled:t.disable_appname},model:{value:t.form.app_name,callback:function(e){t.$set(t.form,"app_name",e)},expression:"form.app_name"}})],1),r("el-form-item",{attrs:{label:"运行镜像"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.image_name,callback:function(e){t.$set(t.form,"image_name",e)},expression:"form.image_name"}},t._l(t.images_list,(function(t){return r("el-option",{key:t,attrs:{label:t,value:t,disabled:t.disabled}})})),1)],1),r("el-form-item",{attrs:{label:"运行指令"}},[r("el-input",{model:{value:t.form.run_command,callback:function(e){t.$set(t.form,"run_command",e)},expression:"form.run_command"}})],1),r("el-form-item",{attrs:{label:"运行超时(s)"}},[r("el-input",{model:{value:t.form.timeout,callback:function(e){t.$set(t.form,"timeout",e)},expression:"form.timeout"}})],1),r("el-row",[r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"访问外网能力"}},[r("el-switch",{model:{value:t.form.use_network,callback:function(e){t.$set(t.form,"use_network",e)},expression:"form.use_network"}})],1)],1),r("el-col",{attrs:{span:10}},[r("el-popover",{attrs:{placement:"right",width:"400",trigger:"click"}},[r("el-radio-group",{model:{value:t.form.network,callback:function(e){t.$set(t.form,"network",e)},expression:"form.network"}},[r("el-radio-button",{attrs:{label:"bridge"}}),r("el-radio-button",{attrs:{label:"host"}}),r("el-radio-button",{attrs:{label:"none"}})],1),r("el-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("配置网络")])],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"自定义应用性能"}},[r("el-switch",{model:{value:t.form.use_network,callback:function(e){t.$set(t.form,"use_network",e)},expression:"form.use_network"}})],1)],1),r("el-col",{attrs:{span:10}},[r("el-popover",{attrs:{placement:"left",width:"800",trigger:"click"}},[r("div",{staticClass:"popover"},[r("el-form-item",{attrs:{label:"CPU数量"}},[r("el-input-number",{attrs:{"controls-position":"right",min:1,max:10},model:{value:t.form.cpu_count,callback:function(e){t.$set(t.form,"cpu_count",e)},expression:"form.cpu_count"}})],1),r("el-form-item",{attrs:{label:"cpu百分比"}},[r("el-slider",{attrs:{step:25,marks:t.marks,"show-stops":""},model:{value:t.form.cpu_percent,callback:function(e){t.$set(t.form,"cpu_percent",e)},expression:"form.cpu_percent"}})],1),r("el-form-item",{attrs:{label:"内存占用"}},[r("el-radio-group",{model:{value:t.form.mem_limit,callback:function(e){t.$set(t.form,"mem_limit",e)},expression:"form.mem_limit"}},[r("el-radio-button",{attrs:{label:"128m"}}),r("el-radio-button",{attrs:{label:"256m"}}),r("el-radio-button",{attrs:{label:"512m"}}),r("el-radio-button",{attrs:{label:"1g"}}),r("el-radio-button",{attrs:{label:"2g"}})],1)],1)],1),r("el-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("配置性能")])],1)],1)],1)],1)],1)])],1):t._e(),r("el-row",[r("div",{staticClass:"input-card",attrs:{id:t.log_display_id}},[r("div",{staticClass:"input_title"},[r("input",{attrs:{type:"button",value:"运行结果"}}),r("el-button",{attrs:{type:"primary",icon:"el-icon-arrow-up"},on:{click:t.log_display}})],1),r("div",{staticClass:"out_area",attrs:{id:"result"}},[t._v(t._s(t.response_info))])])])],1)},o=[],n=(r("d3b7"),r("8f94")),s=(r("a7be"),r("db91"),r("cc10"),r("f6b6"),r("31c5"),r("10b2"),r("4ba6"),r("8c33"),r("7289"),r("2aed"),r("d72f"),r("b933"),r("0b6c"),r("9b74"),r("832b"),r("8822"),r("b255")),i=(r("cfa9"),r("685c")),l=r("83d6"),u={name:"app_main",components:{codemirror:n["codemirror"]},props:{},filters:{statusFilter:function(t){var e={running:"success",stopped:"info",success:"success",error:"danger"};return e[t]},statusFilter2:function(t){var e={running:"el-icon-loading",stopped:"el-icon-error",success:"el-icon-success",error:"el-icon-warning"};return e[t]}},data:function(){var t=l.test_code;return{code:t,response_info:"",status:"stopped",envi_value:"",disable_appname:!1,log_display_id:"output-small",form:{app_name:"",image_name:"",run_command:"",run_type:"first",app_type:"",timeout:"",use_network:!1,network:"none",cpu_count:1,cpu_percent:100,mem_limit:""},marks:{0:"0%",25:"25%",50:"50%",75:"75%",100:"100%"},images_list:["tensorflow-flask"],cmOption:{autoCloseBrackets:!0,tabSize:4,styleActiveLine:!0,lineNumbers:!0,line:!0,mode:"text/x-python",theme:"base16-light",matchBrackets:!0,lineWrapping:!0,lint:!0,hint:!0}}},created:function(){var t=this;Object(i["c"])().then((function(e){t.images_list=e.data.res})),"modified"===this.$route.query.run_type&&this.info_init(this.$route.query.app_name),this.socketIO.on("print_log",(function(e){if(e.app_name===t.form.app_name){var r=document.getElementById("result");r.scrollTop=88888888,console.log("msg",e),t.response_info=t.response_info+e.data,r.scrollTop=88888888}}))},updated:function(){var t=document.getElementById("result");t.scrollTop=88888888},mounted:function(){},methods:{info_init:function(t){var e=this;Object(s["getApp_info"])({app_name:t}).then((function(t){e.disable_appname=!0,e.form=t.data.res,e.status=t.data.res.status,e.form.run_type="modified",e.code=t.data.res.code}))},onCmCodeChange:function(t){this.code=t},log_display:function(){"output-small"===this.log_display_id?this.log_display_id="output-big":this.log_display_id="output-small"},submit_code:function(){var t=this;this.response_info="",Object(s["app_submit"])({code:this.code,app_name:this.form.app_name,image_name:this.form.image_name,run_command:this.form.run_command,run_type:this.form.run_type,app_type:this.form.app_type,timeout:this.form.timeout,network:this.form.network}).then((function(e){1===e.data.status&&(t.status="running")})).catch((function(e){console.log(e),t.errored=!0})).finally((function(e){return t.loading=!1}))}}},c=u,m=(r("bb94"),r("2877")),p=Object(m["a"])(c,a,o,!1,null,"e3ba2468",null);e["default"]=p.exports},b255:function(t,e,r){"use strict";r.r(e),r.d(e,"app_submit",(function(){return o})),r.d(e,"getList",(function(){return n})),r.d(e,"getApp_start",(function(){return s})),r.d(e,"getApp_stop",(function(){return i})),r.d(e,"getApp_delete",(function(){return l})),r.d(e,"getContainerr_list",(function(){return u})),r.d(e,"getApp_info",(function(){return c})),r.d(e,"getApp_log",(function(){return m})),r.d(e,"getApp_performance",(function(){return p}));var a=r("b775");function o(t){return Object(a["a"])({url:"/app_submit",method:"post",data:t})}function n(t){return Object(a["a"])({url:"/app_list",method:"get",params:t})}function s(t){return Object(a["a"])({url:"/app_start",method:"get",params:t})}function i(t){return Object(a["a"])({url:"/app_stop",method:"get",params:t})}function l(t){return Object(a["a"])({url:"/app_delete",method:"get",params:t})}function u(t){return Object(a["a"])({url:"/container_list",method:"get",params:t})}function c(t){return Object(a["a"])({url:"/app_getinfo",method:"get",params:t})}function m(t){return Object(a["a"])({url:"/app_getlog",method:"get",params:t})}function p(t){return Object(a["a"])({url:"/app_getperformance",method:"get",params:t})}},bb94:function(t,e,r){"use strict";r("01c6")}}]);