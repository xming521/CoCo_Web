(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e462891"],{"21fe":function(e,t,i){},"2d72":function(e,t,i){"use strict";i("21fe")},"326d":function(e,t,i){"use strict";i("5d77")},"4a33":function(e,t,i){},"5d77":function(e,t,i){},bf7b:function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-card",{staticStyle:{transition:"none !important"},style:{maxHeight:e.customTableHeight+"px"},attrs:{shadow:"never"}},[i("file-list",{attrs:{height:e.fileListHeight}})],1)},a=[],s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"file-list",on:{click:e.fileOtherClick}},[i("div",{staticClass:"file-list-top"},[i("el-button",{attrs:{size:"medium",type:"primary"},on:{click:function(t){return t.stopPropagation(),e.uploadFile(t)}}},[e._v("上传文件"),i("i",{staticClass:"el-icon-upload el-icon--right"})]),i("el-button",{attrs:{size:"medium",type:"primary"},on:{click:e.downloadFile}},[e._v("下载文件"),i("i",{staticClass:"el-icon-download el-icon--right"})]),i("el-button",{attrs:{size:"medium"},on:{click:e.createFolder}},[e._v("新建目录")]),i("el-button",{attrs:{size:"medium",type:"danger",icon:"el-icon-delete",disabled:e.canCallBack},on:{click:function(t){return t.stopPropagation(),e.deleteResource(t)}}},[e._v("删除 ")]),i("el-button",{attrs:{size:"medium"},on:{click:e.listFile}},[e._v("刷新")])],1),i("el-breadcrumb",{staticClass:"file-crumb",attrs:{"separator-class":"el-icon-arrow-right"}},[e._l(e.breadcrumbItem,(function(t){return i("el-breadcrumb-item",{staticStyle:{cursor:"pointer !important"}},[i("a",{on:{click:function(i){return i.stopPropagation(),e.breadcrumbClick(t.path)}}},[e._v(e._s(t.name))])])})),e.breadcrumbItem.length>1?i("span",{staticClass:"no-select",staticStyle:{float:"right",cursor:"pointer","margin-right":"4px"},on:{click:function(t){return t.stopPropagation(),e.breadcrumbClick(e.breadcrumbItem[e.breadcrumbItem.length-2].path)}}},[i("i",{staticClass:"el-icon-back"}),e._v("返回 ")]):e._e()],2),i("div",{staticClass:"file-list-center",style:{height:e.height-100+"px"}},[e._l(e.fileList,(function(t,l){return i("file-item",{class:{"file-item-checked":e.checkSelected(t.name)},attrs:{file:t},nativeOn:{click:function(i){return i.stopPropagation(),e.fileClick(t,l,i)},dblclick:function(i){return i.stopPropagation(),e.fileDBClick(t,l,i)},contextmenu:function(i){return i.preventDefault(),e.openMenu(t,i)}}})})),i("ul",{directives:[{name:"show",rawName:"v-show",value:e.menuVisible,expression:"menuVisible"}],staticClass:"contextmenu",style:{left:e.left+"px",top:e.top+"px"}},[i("li",[e._v("打开")]),i("li",[e._v("复制链接")]),i("li",{on:{click:e.deleteResource}},[e._v("删除")]),i("li",[e._v("属性")])]),0===this.fileList.length?i("div",{staticClass:"no-file"},[i("i",{staticClass:"el-icon-upload",staticStyle:{"font-size":"67px",color:"#C0C4CC"}}),i("p",[e._v("暂无文件，点击上传吧~")]),i("el-tag",{staticStyle:{cursor:"pointer"},attrs:{size:"small"},on:{click:function(t){return t.stopPropagation(),e.uploadFile(t)}}},[e._v("上传文件")])],1):e._e()],2),i("div",{staticClass:"file-list-tip"},[0===e.fileSelectedList.length?i("span",[e._v(e._s(e.fileList.length)+"项")]):e._e(),e.fileSelectedList.length>0?i("span",[e._v("已选中"+e._s(e.fileSelectedList.length)+"项")]):e._e(),1===e.fileSelectedList.length?[i("span",[e._v("，信息:")]),e.fileSelectedList[0].size&&e.fileSelectedList[0].size>0?i("span",[e._v("大小:"+e._s(e.formatFileSize(e.fileSelectedList[0].size)))]):e._e(),i("span",[e._v("修改时间:"+e._s(e.fileSelectedList[0].updateTime))])]:e._e(),e.callback?i("el-button",{staticClass:"callback-btn",attrs:{disabled:e.canCallBack,type:"primary",size:"small"},on:{click:function(t){return t.stopPropagation(),e.selectedCallBack(t)}}},[e._v("确认选择 ")]):e._e()],2),i("create-folder",{attrs:{"parent-path":e.currentPath,"dialog-visible":e.createFolderVisible},on:{close:function(t){e.createFolderVisible=!1},created:e.listFile}}),i("upload-file",{attrs:{"parent-path":e.currentPath,"dialog-visible":e.uploadFileVisible},on:{uploaded:e.listFile,close:function(t){e.uploadFileVisible=!1}}})],1)},n=[],r=(i("99af"),i("4de4"),i("4160"),i("a630"),i("a15b"),i("fb6a"),i("a434"),i("b0c0"),i("a9e3"),i("d3b7"),i("ac1f"),i("6062"),i("8a79"),i("3ca3"),i("1276"),i("159b"),i("ddb0"),i("2b3d"),i("baa5"),i("b680"),{audio:"/images/file/audio.svg",cad:"/images/file/cad.svg",collect:"/images/file/collect.svg",excel:"/images/file/excel.svg",exe:"/images/file/exe.svg",dir:"/images/file/dir.png",html:"/images/file/html.svg",png:"/images/file/image.svg",jpg:"/images/file/image.svg",jpeg:"/images/file/image.svg",gif:"/images/file/image.svg",bmp:"/images/file/image.svg",iso:"/images/file/iso.svg",other:"/images/file/other.svg",pdf:"/images/file/pdf.svg",ppt:"/images/file/ppt.svg",psd:"/images/file/psd.svg",recycle:"/images/file/recycle.svg",txt:"/images/file/txt.svg",mp4:"/images/file/video.svg",doc:"/images/file/word.svg",zip:"/images/file/zip.svg",rar:"/images/file/zip.svg","7z":"/images/file/zip.svg"});function o(e,t){if(0===e)return"0 Bytes";var i=1024,l=t||2,a=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],s=Math.floor(Math.log(e)/Math.log(i));return parseFloat((e/Math.pow(i,s)).toFixed(l))+" "+a[s]}function c(e){var t=r.other;if(e){var i=e.lastIndexOf(".");if(-1!==i){var l=e.substring(i+1,e.length);t=r[l]||t}}return t}function u(e){return/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(e)}var f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-dialog",{staticClass:"simple-dialog",attrs:{title:"新建目录",visible:e.tempVisible,width:"500px","close-on-press-escape":!1,"close-on-click-modal":!1,"append-to-body":""},on:{"update:visible":function(t){e.tempVisible=t},close:e.close}},[i("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{rules:e.rules,model:e.tempData,"label-width":"70px"}},[i("el-form-item",{attrs:{label:"目录名",prop:"folderName"}},[i("el-input",{attrs:{type:"text",placeholder:"请输入目录名",maxlength:"12","show-word-limit":""},model:{value:e.tempData.folderName,callback:function(t){e.$set(e.tempData,"folderName",t)},expression:"tempData.folderName"}})],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.close}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.createFolder("ruleForm")}}},[i("span",[e._v("立即创建")])])],1)],1)],1)},d=[],p=i("b775"),m={listFile:function(e){return Object(p["a"])({url:"/file_list",method:"get",params:e})},createFolder:function(e){return Object(p["a"])({url:"/create_dir",method:"post",data:e})},deleteResource:function(e){return Object(p["a"])({url:"/delete_file",method:"post",data:e})},downloadResource:function(e){return Object(p["a"])({url:"/download_file",method:"post",data:e})}},h=m,g={name:"createFolder",props:{dialogVisible:{type:Boolean,default:!1},parentPath:{type:String,default:"/"}},data:function(){return{tempVisible:!1,tempData:{folderName:""},rules:{folderName:[{required:!0,message:"请输入文件夹名称",trigger:"blur"},{min:1,max:12,message:"长度在 3 到 12 个字符",trigger:"blur"}]}}},watch:{dialogVisible:function(e){this.tempVisible=e}},methods:{createFolder:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;h.createFolder({path:t.parentPath,dir_name:t.tempData.folderName}).then((function(e){t.$message.success("创建成功"),t.close(),t.$emit("created")}))}))},close:function(){this.tempData.folderName="",this.$refs["ruleForm"].clearValidate(),this.$emit("close")}}},b=g,v=i("2877"),y=Object(v["a"])(b,f,d,!1,null,"935a535c",null),k=y.exports,L=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-dialog",{staticClass:"simple-dialog",attrs:{title:"上传文件",visible:e.tempVisible,width:"700px","close-on-press-escape":!1,"close-on-click-modal":!1,"append-to-body":""},on:{"update:visible":function(t){e.tempVisible=t},close:e.close}},[i("el-upload",{ref:"upload",class:{"editor-slide-upload":e.showDrag},attrs:{disabled:e.operation,action:"https://httpbin.org/post",drag:e.showDrag,multiple:"","on-change":e.onChange,limit:20,"show-file-list":!0,"auto-upload":!1}},[0===e.fileList.length?[i("i",{staticClass:"el-icon-upload"}),i("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，最多可选20个，或"),i("em",[e._v("点击上传")])])]:[i("el-button",{attrs:{slot:"trigger",disabled:e.operation,size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),i("el-button",{staticStyle:{"margin-left":"10px"},attrs:{disabled:e.operation,size:"small",type:"success"},on:{click:e.submitUpload}},[e._v("上传到服务器 ")]),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("最多可选20个")])]],2),i("div",{staticStyle:{"max-height":"300px","overflow-y":"auto","padding-right":"10px"}},[i("ul",{staticClass:"upload-file-list"},e._l(e.fileList,(function(t){return i("li",[i("p",{staticClass:"file-name"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.getTypeImgByFileName(t.data.name)||e.getTypeImgByFileName,expression:"getTypeImgByFileName(file.data.name)||getTypeImgByFileName"}],attrs:{alt:""}}),i("span",[e._v(e._s(t.data.name))])]),i("p",{staticClass:"file-size"},[e._v(e._s(e.formatFileSize(t.data.size)))]),i("p",{staticClass:"file-delete",class:{none:e.operation},on:{click:function(i){return e.fileDelete(t)}}},[i("i",{staticClass:"el-icon-close",attrs:{title:"移除"}})]),e.operation&&t.isTip?i("p",{staticClass:"file-tip"},[e._v(e._s(t.tip))]):e._e(),i("el-progress",{attrs:{"text-inside":!1,"stroke-width":56,percentage:t.percentage,"show-text":e.operation&&t.uploadedSize>0&&!t.isTip}})],1)})),0)])],1)],1)},_=[],C=i("b85c"),w=(i("96cf"),i("1da1")),F=i("bc3a"),S=i.n(F),x=i("8237"),P=i.n(x),z=(i("5f87"),{name:"uploadFile",props:{dialogVisible:{type:Boolean,default:!1},parentPath:{type:String,default:"/"}},computed:{showDrag:function(){return 0===this.fileList.length}},data:function(){return{multipart:!1,splitSize:2097152,bigFileSize:52428800,uploadPool:5,uploadingNum:0,operation:!1,tempVisible:!1,tempData:{folderName:""},fileList:[]}},watch:{dialogVisible:function(e){this.tempVisible=e}},mounted:function(){},methods:{formatFileSize:o,getTypeImgByFileName:c,submitUpload:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var i,l,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.operation){t.next=2;break}return t.abrupt("return");case 2:e.operation=!0,i=Object(C["a"])(e.fileList),t.prev=4,i.s();case 6:if((l=i.n()).done){t.next=14;break}return a=l.value,a.tip="连接中...",a.isTip=!0,t.next=12,e.uploadOne(a);case 12:t.next=6;break;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](4),i.e(t.t0);case 19:return t.prev=19,i.f(),t.finish(19);case 22:e.fileList=[],e.operation=!1,e.$emit("uploaded");case 25:case"end":return t.stop()}}),t,null,[[4,16,19,22]])})))()},uploadOne:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function i(){var l;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return l=new FormData,l.append("path",t.parentPath),l.append("file",e.data.raw),i.next=5,S.a.post("/file_upload",l,{baseURL:"http://47.94.199.65:8001",headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(t){e.isTip=!1,e.percentage=t.loaded/t.total*100|0,e.uploadedSize=t.loaded,t.loaded===t.total&&(e.isTip=!0,e.tip="数据接收中...")}}).then((function(){e.isTip=!1})).catch((function(){t.operation=!1}));case 5:case"end":return i.stop()}}),i)})))()},virtualSleep:function(){var e=this;return new Promise((function(t){var i=setInterval((function(){e.uploadingNum<e.uploadPool&&(clearInterval(i),t())}),100)}))},getUploadId:function(e){return P()(e.data.name+e.data.size)},onChange:function(e){if(!this.operation){var t={size:e.size,uploadedSize:0,percentage:0,isTip:!0,tip:"等待上传...",data:e};this.fileList.length>=20?this.$message.error("最多选择20个文件"):(this.fileList.push(t),this.$refs.upload.uploadFiles=[])}},fileDelete:function(e){for(var t=0;t<this.fileList.length;t++)if(e.data.uid===this.fileList[t].data.uid){this.fileList.splice(t,1);break}},close:function(){this.fileList=[],this.operation=!1,this.$emit("close")}}}),B=z,O=(i("c7be"),Object(v["a"])(B,L,_,!1,null,"3c9c9534",null)),T=O.exports,I=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"file-item"},[i("div",{staticClass:"file-head"},[e.checkImg(e.file.name)?i("el-image",{key:e.file.url,staticClass:"image",attrs:{src:e.file.url,fit:"contain","preview-src-list":[e.file.url],alt:e.file.name}}):i("el-image",{staticClass:"image",attrs:{src:e.file.dir?e.fileTypeImgList["dir"]:e.fileTypeImgList[e.file.suffix]||e.getTypeImgByFileName(e.file.name),fit:"contain",alt:e.file.name}})],1),i("div",{staticClass:"file-name"},[i("span",[e._v(e._s(e.file.name))])])])},V=[],N={name:"fileItem",props:{file:{type:Object,default:{}}},data:function(){return{fileTypeImgList:r}},methods:{getTypeImgByFileName:function(e){var t=this.fileTypeImgList.other;if(e){var i=e.lastIndexOf(".");if(-1!==i){var l=e.substring(i+1,e.length);t=this.fileTypeImgList[l]||t}}return t},checkImg:function(e){return u(e)}}},$=N,D=(i("326d"),Object(v["a"])($,I,V,!1,null,"37f418e5",null)),j=D.exports,R={name:"fileList",components:{FileItem:j,createFolder:k,uploadFile:T},props:{height:{type:Number,default:300},callback:{type:Boolean,default:!1}},data:function(){return{menuVisible:!1,single:!0,left:0,top:0,createFolderVisible:!1,uploadFileVisible:!1,currentPath:"/",fileList:[],fileSelectedList:[],rightClickFile:null,confirmDelete:!1}},computed:{checkSelected:function(){return function(e){for(var t=!1,i=0;i<this.fileSelectedList.length;i++)if(this.fileSelectedList[i].name===e){t=!0;break}return t}},canCallBack:function(){return 0===this.fileSelectedList.length},breadcrumbItem:function(){for(var e=[],t=this.currentPath.split("/"),i=0;i<t.length;i++)0===i?e.push({path:"/",name:"根目录"}):t[i]&&""!==t[i]&&e.push({path:t.slice(0,i+1).join("/"),name:t[i]});return e}},watch:{menuVisible:function(e){e?document.body.addEventListener("click",this.closeMenu):document.body.removeEventListener("click",this.closeMenu)},fileSelectedList:function(e){e.length>0?document.body.addEventListener("click",this.fileOtherClick):document.body.removeEventListener("click",this.fileOtherClick)},$route:function(){this.init()}},mounted:function(){this.init()},methods:{formatFileSize:o,init:function(){this.$router.currentRoute.query.filePath?(this.currentPath=this.$router.currentRoute.query.filePath,this.currentPath=this.breadcrumbItem[this.breadcrumbItem.length-1].path):this.currentPath="/",this.listFile()},listFile:function(){var e=this;h.listFile({path:this.currentPath}).then((function(t){e.fileList=t.data.res.files||[]}))},downloadFile:function(){if(1===this.fileSelectedList.length){var e=this.fileSelectedList[0].name,t="".concat(this.currentPath,"/").concat(this.fileSelectedList[0].name);S.a.post("/download_file",{path:t},{baseURL:"http://47.94.199.65:8001",responseType:"blob"}).then((function(t){var i=new Blob([t.data]);if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(i,e);else{var l=document.createElement("a"),a=document.createEvent("HTMLEvents");a.initEvent("click",!1,!1),l.href=URL.createObjectURL(i),l.download=e,l.style.display="none",document.body.appendChild(l),l.click(),window.URL.revokeObjectURL(l.href)}}))}else this.$message({type:"error",message:"请选中单个文件"})},fileClick:function(e,t,i){if(this.menuVisible=!1,i.ctrlKey)this.fileCtrlClick(e,t);else{this.fileSelectedList=[];var l=JSON.parse(JSON.stringify(e));l.index=t,this.fileSelectedList.push(l)}},fileDBClick:function(e,t,i){this.menuVisible=!1,this.fileSelectedList=[],e.dir&&(this.currentPath.endsWith("/")?this.breadcrumbClick(this.currentPath+e.name):this.breadcrumbClick(this.currentPath+"/"+e.name))},breadcrumbClick:function(e){e!==this.$router.currentRoute.query.filePath&&(this.$router.push({query:{filePath:e}}),this.currentPath=e,this.listFile())},fileCtrlClick:function(e,t){for(var i=!1,l=0;l<this.fileSelectedList.length;l++)if(this.fileSelectedList[l].index===t){i=!0,this.fileSelectedList.splice(l,1);break}if(!i){var a=JSON.parse(JSON.stringify(e));a.index=t,this.fileSelectedList.push(a)}},fileOtherClick:function(){this.confirmDelete||this.fileSelectedList.splice(0)},selectedCallBack:function(){this.$emit("callback",JSON.parse(JSON.stringify(this.fileSelectedList.filter((function(e){return!e.dir})))))},deleteResource:function(){var e=this;this.confirmDelete=!0,this.$confirm("此操作将永久删除该资源, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t=[];e.fileSelectedList.forEach((function(i){t.push("".concat(e.currentPath,"/").concat(i.name))})),e.rightClickFile&&(t.push("".concat(e.currentPath,"/").concat(e.rightClickFile.name)),e.rightClickFile=null),h.deleteResource({paths:Array.from(new Set(t))}).then((function(t){e.$message({type:"success",message:"删除成功"}),e.fileSelectedList=[],e.listFile()})),e.confirmDelete=!1})).catch((function(){e.confirmDelete=!1}))},uploadFile:function(){this.uploadFileVisible=!0},createFolder:function(){this.createFolderVisible=!0},openMenu:function(e,t){this.checkFileExistList(e)||(this.fileSelectedList=[]),this.rightClickFile=e;var i=105,l=this.$el.getBoundingClientRect().left,a=this.$el.offsetWidth,s=a-i,n=t.clientX-l+15;this.left=n>s?s:n,this.top=t.clientY-180,this.menuVisible=!0},closeMenu:function(){this.menuVisible=!1},checkFileExistList:function(e){for(var t=0;t<this.fileSelectedList.length;t++)if(e.name===this.fileSelectedList[t].name)return!0;return!1}}},E=R,M=(i("2d72"),Object(v["a"])(E,s,n,!1,null,"41376d3a",null)),H=M.exports,U={name:"fileBrowse",components:{fileList:H},data:function(){return{customTableHeight:200,fileListHeight:300}},mounted:function(){var e=this,t=this;window.onresize=function(){var i=104,l=document.body.clientHeight-i;e.fileListHeight=l-40,l<300&&(l=300,e.fileListHeight=300),t.customTableHeight=l},setTimeout((function(){var e=new Event("resize");window.dispatchEvent(e)}),105)},destroyed:function(){window.onresize=null},methods:{}},J=U,q=Object(v["a"])(J,l,a,!1,null,"6672023d",null);t["default"]=q.exports},c7be:function(e,t,i){"use strict";i("4a33")}}]);