(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38d344ea"],{"32cd":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID","min-width":"3%"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",label:"App名称","min-width":"17%"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:{name:"app_modify",query:{app_name:e.row.app_name,run_type:"modified"}}}},[n("el-link",{attrs:{type:"primary"}},[t._v(t._s(e.row.app_name))])],1)]}}])}),n("el-table-column",{attrs:{label:"镜像","min-width":"20%",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.image_name))])]}}])}),n("el-table-column",{attrs:{"min-width":"12%",label:"状态","class-name":"status-col",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{staticClass:"status-tags",attrs:{type:t._f("statusFilter")(e.row.status),effect:"dark"}},[n("i",{class:t._f("statusFilter2")(e.row.status)}),t._v(" "+t._s(e.row.status)+" ")])]}}])}),n("el-table-column",{attrs:{"min-width":"15%",label:"上次运行时间",align:"center",prop:"created_at"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),n("span",[t._v(t._s(" "+e.row.start_time))])]}}])}),n("el-table-column",{attrs:{align:"center",label:"操作","min-width":"33%"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"small",type:"success",disabled:"running"==e.row.status},on:{click:function(n){return t.app_start(e.$index,e.row)}}},[t._v("启动 ")]),n("el-button",{attrs:{size:"small",type:"danger",disabled:["stopped","success","error"].includes(e.row.status)},on:{click:function(n){return t.app_stop(e.$index,e.row)}}},[t._v("停止 ")]),n("el-button",{attrs:{size:"small",type:"danger",icon:"el-icon-delete"},on:{click:function(n){return t.app_delete(e.$index,e.row)}}},[t._v("删除 ")]),n("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-odometer"},on:{click:function(n){return t.app_performance(e.$index,e.row)}}},[t._v("性能监控 ")]),n("router-link",{staticStyle:{"margin-left":"1vw"},attrs:{to:{name:"container_table",query:{app_name:e.row.app_name}}}},[n("el-link",{attrs:{type:"primary"}},[t._v("运行记录")])],1)]}}])})],1),n("el-pagination",{staticStyle:{margin:"8vh 0 0 0vw"},attrs:{background:"",layout:"prev, pager, next",total:1}}),n("el-drawer",{attrs:{title:"性能监控",visible:t.drawer,direction:"btt",size:"92%","append-to-body":"false","custom-class":"custom-drawer"},on:{"update:visible":function(e){t.drawer=e},opened:t.open_chart,close:t.close_chart}},[n("div",{staticStyle:{width:"70vw",height:"50vh",margin:"10vh 0 0 8vw"},attrs:{id:"chart-container"}})])],1)},r=[],i=n("b255"),s=n("99afe"),o=n("b255"),c=o.getApp_performance,p={filters:{statusFilter:function(t){var e={running:"success",stopped:"info",success:"success",error:"danger"};return e[t]},statusFilter2:function(t){var e={running:"el-icon-loading",stopped:"el-icon-error",success:"el-icon-success",error:"el-icon-warning"};return e[t]}},data:function(){return{list:null,drawer:!1,chart_data:[],chart:null,listLoading:!0,disr:!1,diss:!1,app:app}},created:function(){this.fetch_apptable();var t=this;this.$root.$on("refresh_apptable",(function(){t.fetch_apptable()}))},methods:{fetch_apptable:function(){var t=this;this.listLoading=!0,Object(i["getList"])().then((function(e){t.list=e.data.items,t.listLoading=!1}))},app_start:function(t,e){var n=this;Object(i["getApp_start"])({app_name:e.app_name}).then((function(t){n.fetch_apptable()}))},app_stop:function(t,e){var n=this;Object(i["getApp_stop"])({app_name:e.app_name}).then((function(t){n.fetch_apptable()}))},app_delete:function(t,e){var n=this;this.$confirm("此操作将永久删除该应用, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){Object(i["getApp_delete"])({app_name:e.app_name}).then((function(t){n.fetch_apptable(),n.$message({type:"success",message:"删除成功!"})}))})).catch((function(){n.$message({type:"info",message:"已取消删除"})}))},app_performance:function(t,e){var n=this;c({app_name:e.app_name}).then((function(t){n.chart_data=t.data.res,n.drawer=!0}))},open_chart:function(){this.chart=new s["Line"]("chart-container",{data:this.chart_data,xField:"time",yField:"value",seriesField:"type",legend:{title:{text:"性能使用（百分比）",spacing:18,style:{fontSize:18,fontWeight:700}}},smooth:!0,animation:{appear:{animation:"path-in",duration:5e3}}}),this.chart.render()},close_chart:function(){this.chart_data=[],this.chart.destroy()}}},l=p,u=(n("436a"),n("2877")),d=Object(u["a"])(l,a,r,!1,null,"45da15d2",null);e["default"]=d.exports},"436a":function(t,e,n){"use strict";n("88c2")},"88c2":function(t,e,n){},b255:function(t,e,n){"use strict";n.r(e),n.d(e,"app_submit",(function(){return r})),n.d(e,"getList",(function(){return i})),n.d(e,"getApp_start",(function(){return s})),n.d(e,"getApp_stop",(function(){return o})),n.d(e,"getApp_delete",(function(){return c})),n.d(e,"getContainerr_list",(function(){return p})),n.d(e,"getApp_info",(function(){return l})),n.d(e,"getApp_log",(function(){return u})),n.d(e,"getApp_performance",(function(){return d}));var a=n("b775");function r(t){return Object(a["a"])({url:"/app_submit",method:"post",data:t})}function i(t){return Object(a["a"])({url:"/app_list",method:"get",params:t})}function s(t){return Object(a["a"])({url:"/app_start",method:"get",params:t})}function o(t){return Object(a["a"])({url:"/app_stop",method:"get",params:t})}function c(t){return Object(a["a"])({url:"/app_delete",method:"get",params:t})}function p(t){return Object(a["a"])({url:"/container_list",method:"get",params:t})}function l(t){return Object(a["a"])({url:"/app_getinfo",method:"get",params:t})}function u(t){return Object(a["a"])({url:"/app_getlog",method:"get",params:t})}function d(t){return Object(a["a"])({url:"/app_getperformance",method:"get",params:t})}}}]);