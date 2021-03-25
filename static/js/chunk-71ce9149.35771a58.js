(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71ce9149"],{2543:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID","min-min-width":"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.container_id)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",label:"应用名称","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.app_name)+" ")]}}])}),n("el-table-column",{attrs:{label:"镜像名称","min-width":"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.image_name))])]}}])}),n("el-table-column",{attrs:{label:"上次运行时间","min-width":"150",align:"center",prop:"created_at"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),n("span",[t._v(t._s(e.row.start_time))])]}}])}),n("el-table-column",{attrs:{label:"结束时间","min-width":"150",align:"center",prop:"created_at"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),n("span",[t._v(t._s(e.row.over_time))])]}}])}),n("el-table-column",{attrs:{align:"center",label:"状态","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("statusFilter")(e.row.status))+" ")]}}])}),n("el-table-column",{attrs:{align:"center",label:"日志","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(n){return t.getlog(e.row.app_name,e.row.container_id)}}},[t._v("查看日志 ")])]}}])})],1),n("el-drawer",{attrs:{"with-header":!1,visible:t.drawer,direction:t.direction},on:{"update:visible":function(e){t.drawer=e}}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("h2",{staticStyle:{margin:"35px 0 0 30px"}},[t._v("日志")])]),n("el-col",{attrs:{span:12}},[n("el-button",{staticStyle:{margin:"25px 0 0 100px"},attrs:{size:"large",type:"success"},on:{click:t.downloadFile}},[t._v("下载日志 ")])],1)],1),n("el-card",{staticClass:"log-card",attrs:{shadow:"hover"}},[n("el-scrollbar",[n("div",{attrs:{id:"log-content"}},[t._v(" "+t._s(this.log)+" ")])])],1),n("el-backtop",{attrs:{target:"#log-content"}})],1)],1)},r=[],i=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("b255")),o=n("bc3a"),l=n.n(o),c={filters:{statusFilter:function(t){var e={137:"超时",136:"手动停止",0:"完成",1:"错误",2:"路径错误"};return e[t]}},data:function(){return{list:null,listLoading:!0,drawer:!1,direction:"rtl",current:[],log:""}},created:function(){this.fetchData(this.$route.query.app_name)},methods:{fetchData:function(t){var e=this;this.listLoading=!0,Object(i["f"])({app_name:t}).then((function(t){e.list=t.data.items,e.listLoading=!1}))},getlog:function(t,e){var n=this;this.current=[t,e],Object(i["c"])({app_name:t,container_id:e}).then((function(t){n.log=t.data.res,n.drawer=!0,n.listLoading=!1}))},downloadFile:function(){var t=this;l.a.post("/download_log",{app_name:this.current[0],container_id:this.current[1]},{baseURL:"http://47.94.199.65:8001",responseType:"blob"}).then((function(e){var n=new Blob([e.data]);if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(n,t.current[0]+"-"+t.current[1]);else{var a=document.createElement("a"),r=document.createEvent("HTMLEvents");r.initEvent("click",!1,!1),a.href=URL.createObjectURL(n),a.download=t.current[0]+"-"+t.current[1],a.style.display="none",document.body.appendChild(a),a.click(),window.URL.revokeObjectURL(a.href)}}))}}},s=c,u=(n("9cfb"),n("2877")),d=Object(u["a"])(s,a,r,!1,null,"4fc23ba4",null);e["default"]=d.exports},4506:function(t,e,n){},"9cfb":function(t,e,n){"use strict";n("4506")},b255:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"g",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return u}));var a=n("b775");function r(t){return Object(a["a"])({url:"/app_submit",method:"post",data:t})}function i(t){return Object(a["a"])({url:"/app_list",method:"get",params:t})}function o(t){return Object(a["a"])({url:"/app_start",method:"get",params:t})}function l(t){return Object(a["a"])({url:"/app_stop",method:"get",params:t})}function c(t){return Object(a["a"])({url:"/container_list",method:"get",params:t})}function s(t){return Object(a["a"])({url:"/app_getinfo",method:"get",params:t})}function u(t){return Object(a["a"])({url:"/app_getlog",method:"get",params:t})}}}]);