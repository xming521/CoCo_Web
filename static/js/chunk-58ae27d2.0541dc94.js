(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58ae27d2"],{"0eef":function(t,e,a){"use strict";a("2f01")},11834:function(t,e,a){},"1a9a":function(t,e,a){"use strict";a("224b")},"20ea":function(t,e,a){t.exports=a.p+"static/img/CPU.6617ca79.png"},"224b":function(t,e,a){},2459:function(t,e,a){t.exports=a.p+"static/img/mem.01c0f575.png"},"2f01":function(t,e,a){},9406:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"dashboard-container"},[o("el-row",[o("el-col",{attrs:{span:8}},[o("div",{staticClass:"grid-content "},[o("el-card",{staticClass:"box-card c1"},[o("el-col",{attrs:{span:16}},[o("h1",[t._v("应用总数")]),o("router-link",{attrs:{to:{name:"app"}}},[o("el-link",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"card-link",attrs:{"element-loading-background":"transparent"}},[t._v(t._s(t.info.app_count)+" ")])],1)],1),o("el-col",{attrs:{span:8}},[o("div",{staticClass:"grid-content bg-purple"},[o("div",{staticClass:"box"},[o("img",{staticClass:"d-icon",staticStyle:{"padding-top":"20px"},attrs:{src:a("de78")}})])])])],1)],1)]),o("el-col",{attrs:{span:8}},[o("div",{staticClass:"grid-content "},[o("el-card",{staticClass:"box-card c2"},[o("el-col",{attrs:{span:16}},[o("div",{staticClass:"grid-content bg-purple"},[o("h1",[t._v("运行中")]),o("router-link",{attrs:{to:{name:"app"}}},[o("el-link",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"card-link",attrs:{"element-loading-background":"transparent"}},[t._v(" "+t._s(t.info.app_run_count)+" ")])],1)],1)]),o("el-col",{attrs:{span:8}},[o("div",{staticClass:"grid-content bg-purple"},[o("div",{staticClass:"box"},[o("img",{staticClass:"d-icon",staticStyle:{"padding-top":"25px"},attrs:{src:a("a176")}})])])])],1)],1)]),o("el-col",{attrs:{span:8}},[o("div",{staticClass:"grid-content "},[o("el-card",{staticClass:"box-card c3"},[o("el-col",{attrs:{span:16}},[o("div",{staticClass:"grid-content bg-purple"},[o("h1",[t._v("镜像")]),o("router-link",{attrs:{to:{name:"image/table"}}},[o("el-link",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"card-link",attrs:{"element-loading-background":"transparent"}},[t._v(" "+t._s(t.info.image_count)+" ")])],1)],1)]),o("el-col",{attrs:{span:8}},[o("div",{staticClass:"grid-content bg-purple"},[o("div",{staticClass:"box"},[o("img",{staticClass:"d-icon",staticStyle:{"padding-top":"30px"},attrs:{src:a("997e")}})])])])],1)],1)])],1),o("el-row",[o("el-col",{attrs:{span:8}},[o("el-card",{staticClass:"box-card-all"},[o("h2",[t._v("性能监控")]),o("el-col",{attrs:{span:16}},[o("gauge-chart",{staticClass:"real-chart",attrs:{chart_data:t.realtime_info.cpu}})],1),o("el-col",{attrs:{span:8}},[o("div",{staticClass:"real-icon-box"},[o("el-col",[o("img",{staticClass:"d-icon-realtime",attrs:{src:a("20ea")}})]),o("el-col",[o("div",{staticClass:"real_text"},[t._v(" "+t._s(t.realtime_info.cpu+"%"))])])],1)]),o("el-col",{attrs:{span:16}},[o("gauge-chart",{staticClass:"real-chart",attrs:{chart_data:t.realtime_info.mem}})],1),o("el-col",{attrs:{span:8}},[o("div",{staticClass:"real-icon-box"},[o("el-col",[o("img",{staticClass:"d-icon-realtime",attrs:{src:a("2459")}})]),o("el-col",[o("div",{staticClass:"real_text"},[t._v(" "+t._s(t.realtime_info.memoryUsed)+"G/"+t._s(t.realtime_info.memoryTotal)+"G")])])],1)]),o("el-col",{attrs:{span:16}},[o("gauge-chart",{staticClass:"real-chart",attrs:{chart_data:t.realtime_info.disk}})],1),o("el-col",{attrs:{span:8}},[o("div",{staticClass:"real-icon-box"},[o("el-col",[o("img",{staticClass:"d-icon-realtime",attrs:{src:a("f6dc")}})]),o("el-col",[o("div",{staticClass:"real_text"},[t._v(" "+t._s(t.realtime_info.diskUsed)+"G/"+t._s(t.realtime_info.diskTotal)+"G")])])],1)])],1)],1),o("el-col",{attrs:{span:9}},[o("el-card",{staticClass:"box-card-all"},[o("h2",[t._v("最近任务")]),o("transaction-table",{staticStyle:{"margin-top":"-2vh"},attrs:{recent_event:t.recent}})],1)],1),o("el-col",{attrs:{span:7}},[o("el-card",{staticClass:"box-card-all"},[o("todo-list")],1)],1)],1)],1)},s=[],i=a("b775");function n(t){return Object(i["a"])({url:"/dashboard/getinfo",method:"get",params:t})}var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"todoapp"},[a("header",{staticClass:"header"},[a("input",{staticClass:"new-todo",attrs:{autocomplete:"off",placeholder:"Todo List"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)}}})]),a("section",{directives:[{name:"show",rawName:"v-show",value:t.todos.length,expression:"todos.length"}],staticClass:"main"},[a("input",{staticClass:"toggle-all",attrs:{id:"toggle-all",type:"checkbox"},domProps:{checked:t.allChecked},on:{change:function(e){return t.toggleAll({done:!t.allChecked})}}}),a("label",{attrs:{for:"toggle-all"}}),a("ul",{staticClass:"todo-list"},t._l(t.filteredTodos,(function(e,o){return a("todo",{key:o,attrs:{todo:e},on:{toggleTodo:t.toggleTodo,editTodo:t.editTodo,deleteTodo:t.deleteTodo}})})),1)]),a("footer",{directives:[{name:"show",rawName:"v-show",value:t.todos.length,expression:"todos.length"}],staticClass:"footer"},[a("span",{staticClass:"todo-count"},[a("strong",[t._v(t._s(t.remaining))]),t._v(" "+t._s(t._f("pluralize")(t.remaining,"item"))+" left ")]),a("ul",{staticClass:"filters"},t._l(t.filters,(function(e,o){return a("li",{key:o},[a("a",{class:{selected:t.visibility===o},on:{click:function(e){e.preventDefault(),t.visibility=o}}},[t._v(t._s(t._f("capitalize")(o)))])])})),0)])])},r=[],c=(a("a623"),a("4de4"),a("4160"),a("c975"),a("fb6a"),a("a434"),a("498a"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"todo",class:{completed:t.todo.done,editing:t.editing}},[a("div",{staticClass:"view"},[a("input",{staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:t.todo.done},on:{change:function(e){return t.toggleTodo(t.todo)}}}),a("label",{domProps:{textContent:t._s(t.todo.text)},on:{dblclick:function(e){t.editing=!0}}}),a("button",{staticClass:"destroy",on:{click:function(e){return t.deleteTodo(t.todo)}}})]),a("input",{directives:[{name:"show",rawName:"v-show",value:t.editing,expression:"editing"},{name:"focus",rawName:"v-focus",value:t.editing,expression:"editing"}],staticClass:"edit",domProps:{value:t.todo.text},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doneEdit(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancelEdit(e)}],blur:t.doneEdit}})])}),d=[],u={name:"Todo",directives:{focus:function(t,e,a){var o=e.value,s=a.context;o&&s.$nextTick((function(){t.focus()}))}},props:{todo:{type:Object,default:function(){return{}}}},data:function(){return{editing:!1}},methods:{deleteTodo:function(t){this.$emit("deleteTodo",t)},editTodo:function(t){var e=t.todo,a=t.value;this.$emit("editTodo",{todo:e,value:a})},toggleTodo:function(t){this.$emit("toggleTodo",t)},doneEdit:function(t){var e=t.target.value.trim(),a=this.todo;e?this.editing&&(this.editTodo({todo:a,value:e}),this.editing=!1):this.deleteTodo({todo:a})},cancelEdit:function(t){t.target.value=this.todo.text,this.editing=!1}}},f=u,p=a("2877"),h=Object(p["a"])(f,c,d,!1,null,null,null),g=h.exports,m="todos",v={all:function(t){return t},active:function(t){return t.filter((function(t){return!t.done}))},completed:function(t){return t.filter((function(t){return t.done}))}},_=[{text:"star this repository",done:!1},{text:"fork this repository",done:!1},{text:"follow author",done:!1},{text:"vue-element-admin",done:!0},{text:"vue",done:!0},{text:"element-ui",done:!0},{text:"axios",done:!0},{text:"webpack",done:!0}],C={components:{Todo:g},filters:{pluralize:function(t,e){return 1===t?e:e+"s"},capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},data:function(){return{visibility:"all",filters:v,todos:_}},computed:{allChecked:function(){return this.todos.every((function(t){return t.done}))},filteredTodos:function(){return v[this.visibility](this.todos)},remaining:function(){return this.todos.filter((function(t){return!t.done})).length}},methods:{setLocalStorage:function(){window.localStorage.setItem(m,JSON.stringify(this.todos))},addTodo:function(t){var e=t.target.value;e.trim()&&(this.todos.push({text:e,done:!1}),this.setLocalStorage()),t.target.value=""},toggleTodo:function(t){t.done=!t.done,this.setLocalStorage()},deleteTodo:function(t){this.todos.splice(this.todos.indexOf(t),1),this.setLocalStorage()},editTodo:function(t){var e=t.todo,a=t.value;e.text=a,this.setLocalStorage()},clearCompleted:function(){this.todos=this.todos.filter((function(t){return!t.done})),this.setLocalStorage()},toggleAll:function(t){var e=this,a=t.done;this.todos.forEach((function(t){t.done=a,e.setLocalStorage()}))}}},b=C,x=(a("1a9a"),Object(p["a"])(b,l,r,!1,null,null,null)),k=x.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{staticStyle:{width:"100%","padding-top":"15px"},attrs:{data:t.list}},[a("el-table-column",{attrs:{label:"Task名称","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"table-name"},[t._v(" "+t._s(t._f("orderNoFilter")(e.row.app_name))+" ")])]}}])}),a("el-table-column",{attrs:{label:"状态",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.row;return[a("el-tag",{attrs:{type:t._f("statusFilter")(o.status)}},[t._v(" "+t._s(o.status)+" ")])]}}])})],1)},y=[],T={filters:{statusFilter:function(t){var e={success:"success",error:"danger",stopped:"info"};return e[t]},orderNoFilter:function(t){return t.substring(0,30)}},props:{recent_event:{required:!0}},watch:{recent_event:{deep:!0,handler:function(t){this.list=t}}},data:function(){return{list:this.recent_event}},created:function(){},methods:{}},S=T,O=(a("966b"),Object(p["a"])(S,w,y,!1,null,"32f1d490",null)),L=O.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},N=[],$=(a("a9e3"),a("313e"));a("817d");var j;j={series:[{type:"gauge",startAngle:220,endAngle:-400,min:0,max:100,splitNumber:4,itemStyle:{color:"#58D9F9",shadowColor:"rgba(0,138,255,0.45)",shadowBlur:10,shadowOffsetX:2,shadowOffsetY:2},progress:{show:!0,width:10},pointer:{icon:"path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",length:"75%",width:10,offsetCenter:[0,"5%"]},axisLine:{roundCap:!0,lineStyle:{width:10}},axisTick:{show:!1},splitLine:{length:5,lineStyle:{width:3,color:"#999"}},axisLabel:{distance:15,color:"#999",fontSize:15},title:{show:!1},detail:{show:!1}}],dataset:{source:[[56]]},grid:{left:"75%"}};var D={props:{className:{type:String,default:"chart"},width:{type:String,default:"25vh"},height:{type:String,default:"25vh"},chart_data:{type:Number,required:!0}},watch:{chart_data:{deep:!0,handler:function(t){this.setOptions(t)}}},data:function(){return{chart:null}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=$["init"](this.$el),this.chart.setOption(j)},setOptions:function(t){this.chart.setOption({dataset:{source:[[t]]}})}}},z=D,A=Object(p["a"])(z,E,N,!1,null,null,null),F=A.exports,P=(a("cfa9"),{name:"Dashboard",components:{TodoList:k,TransactionTable:L,gaugeChart:F},data:function(){return{listLoading:!0,info:{},realtime_info:{cpu:5,mem:70,disk:50},recent:[],loading:!0}},created:function(){var t=this;this.fetchData(),this.socketIO.on("dashboard",(function(e){t.realtime_info=e.data}))},methods:{fetchData:function(){var t=this;n().then((function(e){t.recent=e.data.res.recent_event,t.loading=!1,t.info=e.data.res}))}}}),G=P,U=(a("0eef"),Object(p["a"])(G,o,s,!1,null,"ae8273d4",null));e["default"]=U.exports},"966b":function(t,e,a){"use strict";a("11834")},"997e":function(t,e,a){t.exports=a.p+"static/img/docker.dd0ec767.png"},a176:function(t,e,a){t.exports=a.p+"static/img/app2.60c4d371.png"},de78:function(t,e,a){t.exports=a.p+"static/img/app1.bb755f5d.png"},f6dc:function(t,e,a){t.exports=a.p+"static/img/disk.0cfb2292.png"}}]);