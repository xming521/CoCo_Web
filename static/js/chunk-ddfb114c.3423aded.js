(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ddfb114c"],{"06c5":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("a630"),n("fb6a"),n("b0c0"),n("d3b7"),n("25f0"),n("3ca3");var r=n("6b75");function a(e,t){if(e){if("string"===typeof e)return Object(r["a"])(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(e,t):void 0}}},"0ccb":function(e,t,n){var r=n("50c4"),a=n("1148"),i=n("1d80"),o=Math.ceil,c=function(e){return function(t,n,c){var l,s,u=String(i(t)),d=u.length,f=void 0===c?" ":String(c),h=r(n);return h<=d||""==f?u:(l=h-d,s=a.call(f,o(l/f.length)),s.length>l&&(s=s.slice(0,l)),e?u+s:s+u)}};e.exports={start:c(!1),end:c(!0)}},1148:function(e,t,n){"use strict";var r=n("a691"),a=n("1d80");e.exports="".repeat||function(e){var t=String(a(this)),n="",i=r(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(n+=t);return n}},"4d90":function(e,t,n){"use strict";var r=n("23e7"),a=n("0ccb").start,i=n("9a0c");r({target:"String",proto:!0,forced:i},{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(e,t,n){"use strict";var r=n("0366"),a=n("7b0b"),i=n("9bdd"),o=n("e95a"),c=n("50c4"),l=n("8418"),s=n("35a1");e.exports=function(e){var t,n,u,d,f,h,b=a(e),p="function"==typeof this?this:Array,m=arguments.length,v=m>1?arguments[1]:void 0,g=void 0!==v,y=s(b),w=0;if(g&&(v=r(v,m>2?arguments[2]:void 0,2)),void 0==y||p==Array&&o(y))for(t=c(b.length),n=new p(t);t>w;w++)h=g?v(b[w],w):b[w],l(n,w,h);else for(d=y.call(b),f=d.next,n=new p;!(u=f.call(d)).done;w++)h=g?i(d,v,[u.value,w],!0):u.value,l(n,w,h);return n.length=w,n}},"6b75":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},"9a0c":function(e,t,n){var r=n("342f");e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},a1df:function(e,t,n){},a630:function(e,t,n){var r=n("23e7"),a=n("4df4"),i=n("1c7e"),o=!i((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:o},{from:a})},b85c:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");var r=n("06c5");function a(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(r["a"])(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n["return"]||n["return"]()}finally{if(l)throw o}}}}},d78e:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-button",{attrs:{type:"primary"},on:{click:e.handleAddRole}},[e._v("创建角色")]),n("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.rolesList,border:""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.key)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",label:"角色名称",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.name)+" ")]}}])}),n("el-table-column",{attrs:{align:"header-center",label:"描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.description)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return e.handleEdit(t)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(n){return e.handleDelete(t)}}},[e._v("删除")])]}}])})],1),n("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"编辑角色":"创建角色"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-form",{attrs:{model:e.role,"label-width":"80px","label-position":"left"}},[n("el-form-item",{attrs:{label:"名称"}},[n("el-input",{attrs:{placeholder:"Role Name"},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}})],1),n("el-form-item",{attrs:{label:"描述"}},[n("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Role Description"},model:{value:e.role.description,callback:function(t){e.$set(e.role,"description",t)},expression:"role.description"}})],1),n("el-form-item",{attrs:{label:"应用访问权限"}},[n("el-tree",{ref:"tree",staticClass:"permission-tree",attrs:{data:e.routes,"show-checkbox":""}})],1)],1),n("div",{staticStyle:{"text-align":"right"}},[n("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("Cancel")]),n("el-button",{attrs:{type:"primary"},on:{click:e.confirmRole}},[e._v("Confirm")])],1)],1)],1)},a=[],i=(n("a4d3"),n("e01a"),n("99af"),n("4de4"),n("4160"),n("caad"),n("d81d"),n("a434"),n("b0c0"),n("2532"),n("159b"),n("5530")),o=n("6b75");function c(e){if(Array.isArray(e))return Object(o["a"])(e)}n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function l(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}var s=n("06c5");function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e){return c(e)||l(e)||Object(s["a"])(e)||u()}var f=n("b85c"),h=(n("96cf"),n("1da1")),b=n("df7c"),p=n.n(b);n("c975"),n("4d63"),n("ac1f"),n("25f0"),n("4d90"),n("5319"),n("1276");var m=n("b775");function v(){return Object(m["a"])({url:"/app_getname",method:"get"})}function g(){return Object(m["a"])({url:"/get_roles",method:"get"})}function y(e){return Object(m["a"])({url:"/vue-element-admin/role",method:"post",data:e})}function w(e,t){return Object(m["a"])({url:"/vue-element-admin/role/".concat(e),method:"put",data:t})}function k(e){return Object(m["a"])({url:"/vue-element-admin/role/".concat(e),method:"delete"})}var x={key:"",name:"用户",description:"开发者1",routes:[]},S={data:function(){return{role:Object.assign({},x),routes:[],rolesList:[],dialogVisible:!1,dialogType:"new",checkStrictly:!1,defaultProps:{children:"children",label:"title"}}},computed:{routesData:function(){return this.routes}},created:function(){this.getRoutes(),this.getRoles()},methods:{getRoutes:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:n=t.sent,e.routes=n.data.res.map((function(e){return{label:e}}));case 4:case"end":return t.stop()}}),t)})))()},getRoles:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:n=t.sent,e.rolesList=n.data;case 4:case"end":return t.stop()}}),t)})))()},generateRoutes:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r=[],a=Object(f["a"])(e);try{for(a.s();!(t=a.n()).done;){var i=t.value;if(!i.hidden){var o=this.onlyOneShowingChild(i.children,i);i.children&&o&&!i.alwaysShow&&(i=o);var c={path:p.a.resolve(n,i.path),title:i.meta&&i.meta.title};i.children&&(c.children=this.generateRoutes(i.children,c.path)),r.push(c)}}}catch(l){a.e(l)}finally{a.f()}return r},generateArr:function(e){var t=this,n=[];return e.forEach((function(e){if(n.push(e),e.children){var r=t.generateArr(e.children);r.length>0&&(n=[].concat(d(n),d(r)))}})),n},handleAddRole:function(){this.dialogType="new",this.dialogVisible=!0},handleEdit:function(e){this.dialogType="edit",this.dialogVisible=!0,this.checkStrictly=!0},handleDelete:function(e){var t=this,n=e.$index,r=e.row;this.$confirm("Confirm to remove the role?","Warning",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k(r.key);case 2:t.rolesList.splice(n,1),t.$message({type:"success",message:"Delete succed!"});case 4:case"end":return e.stop()}}),e)})))).catch((function(e){console.error(e)}))},generateTree:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r=arguments.length>2?arguments[2]:void 0,a=[],i=Object(f["a"])(e);try{for(i.s();!(t=i.n()).done;){var o=t.value,c=p.a.resolve(n,o.path);o.children&&(o.children=this.generateTree(o.children,c,r)),(r.includes(c)||o.children&&o.children.length>=1)&&a.push(o)}}catch(l){i.e(l)}finally{i.f()}return a},confirmRole:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var n,r,a,i,o,c,l,s,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n="edit"===e.dialogType,r=e.$refs.tree.getCheckedKeys(),e.role.routes=e.generateTree((void 0)(e.serviceRoutes),"/",r),!n){t.next=16;break}return t.next=6,w(e.role.key,e.role);case 6:a=0;case 7:if(!(a<e.rolesList.length)){t.next=14;break}if(e.rolesList[a].key!==e.role.key){t.next=11;break}return e.rolesList.splice(a,1,Object.assign({},e.role)),t.abrupt("break",14);case 11:a++,t.next=7;break;case 14:t.next=22;break;case 16:return t.next=18,y(e.role);case 18:i=t.sent,o=i.data,e.role.key=o.key,e.rolesList.push(e.role);case 22:c=e.role,l=c.description,s=c.key,u=c.name,e.dialogVisible=!1,e.$notify({title:"Success",dangerouslyUseHTMLString:!0,message:"\n            <div>Role Key: ".concat(s,"</div>\n            <div>Role Name: ").concat(u,"</div>\n            <div>Description: ").concat(l,"</div>\n          "),type:"success"});case 25:case"end":return t.stop()}}),t)})))()},onlyOneShowingChild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=null,r=e.filter((function(e){return!e.hidden}));return 1===r.length?(n=r[0],n.path=p.a.resolve(t.path,n.path),n):0===r.length&&(n=Object(i["a"])(Object(i["a"])({},t),{},{path:"",noShowingChildren:!0}),n)}}},j=S,O=(n("fb2b"),n("2877")),R=Object(O["a"])(j,r,a,!1,null,"4068852b",null);t["default"]=R.exports},fb2b:function(e,t,n){"use strict";n("a1df")}}]);