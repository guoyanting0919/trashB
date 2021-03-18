(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-281a2db5"],{"0bc0":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"individualList"}},[a("el-dialog",{attrs:{"close-on-click-modal":!1,title:"個資同意書複製",visible:t.copyVisible,width:"50%"},on:{"update:visible":function(e){t.copyVisible=e}}},[a("el-form",{attrs:{"label-width":"150px"}},[a("el-form-item",{attrs:{label:"個資同意書名稱"}},[a("el-input",{model:{value:t.copyData.Name,callback:function(e){t.$set(t.copyData,"Name",e)},expression:"copyData.Name"}})],1)],1),a("div",{staticClass:"formButtonList"},[a("el-button",{attrs:{type:"primary"},on:{click:t.toCopy}},[t._v("複製個資同意書")])],1)],1),a("el-dialog",{attrs:{"close-on-click-modal":!1,title:"預覽",visible:t.preveiwVisible,width:"50%"},on:{"update:visible":function(e){t.preveiwVisible=e}}},[a("div",{staticClass:"showPreview",domProps:{innerHTML:t._s(t.previewData)}})]),a("HeaderBox",{attrs:{buttonList:t.buttonList,searchLoading:t.searchLoading},on:{searchHandler:t.searchHandler,handleAddOrEdit:t.handleAddOrEdit}}),a("div",{staticClass:"mainTable"},[t.individualData?a("div",{staticClass:"tableContainer mt-5"},[a("el-table",{staticStyle:{width:"100%"},attrs:{"header-cell-class-name":"tableHeader",data:t.individualData,"empty-text":"暫無資料","default-sort":{prop:"date",order:"descending"}},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"Name",label:"個資同意書名稱",sortable:""}}),a("el-table-column",{attrs:{width:"300",prop:"emit",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"outline",attrs:{size:"mini"},on:{click:function(a){return t.preview(e.row)}}},[t._v("預覽")]),a("el-button",{staticClass:"outline",attrs:{size:"mini"},on:{click:function(a){return t.copy(e.row)}}},[t._v("複製")]),t.hasBtn("btnEdit")&&e.row.UnitCode?a("el-button",{staticClass:"outline",attrs:{size:"mini"},on:{click:function(a){return t.handleAddOrEdit("edit",e.row)}}},[t._v("編輯")]):t._e(),t.hasBtn("btnDelete")&&e.row.UnitCode?a("el-button",{staticClass:"outline",attrs:{type:"danger",size:"mini"},on:{click:function(a){return t.deleteHandler(e.row)}}},[t._v("刪除")]):t._e()]}}],null,!1,3062475182)})],1)],1):t._e()]),a("Page",{attrs:{now:t.currentPage,count:t.list.pageCount,rightPage:5,leftPage:5},on:{changePage:t.getIndividual}}),a("el-dialog",{attrs:{"close-on-click-modal":!1,"custom-class":"addOrEditDialog",title:t.addOrEdit,visible:t.addOrEditDialog},on:{"update:visible":function(e){t.addOrEditDialog=e}}},[a("ValidationObserver",{ref:"obs"},[a("div",{staticClass:"inputBox",staticStyle:{"margin-top":"3rem"}},[a("p",{staticClass:"inputTitle"},[t._v("個資同意書名稱")]),a("ValidationProvider",{attrs:{name:"請輸入表單名稱!!",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors,i=e.classes;return[a("el-input",{class:i,staticStyle:{width:"300px"},attrs:{placeholder:"請輸入表單名稱"},model:{value:t.listNameInput,callback:function(e){t.listNameInput=e},expression:"listNameInput"}}),n[0]?a("span",{staticClass:"validateSpan"},[t._v(t._s(n[0]))]):t._e()]}}])})],1),a("div",{staticClass:"inputBox"},[a("p",{staticClass:"inputTitle"},[t._v("個資同意書內容")]),a("ValidationProvider",{attrs:{name:"請輸入表單內容!!",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("Ck",{model:{value:t.form.FormSummary,callback:function(e){t.$set(t.form,"FormSummary",e)},expression:"form.FormSummary"}}),n[0]?a("span",{staticClass:"validateSpan"},[t._v(t._s(n[0]))]):t._e()]}}])})],1)]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addOrEditDialog=!1}}},[t._v("取 消")]),"新增"===t.addOrEdit?a("el-button",{attrs:{type:"primary"},on:{click:t.addHandler}},[t._v("新 增")]):a("el-button",{attrs:{type:"primary"},on:{click:t.editHandler}},[t._v("編 輯")])],1)],1)],1)},i=[],r=a("a34a"),o=a.n(r),s=a("97d4"),l=a("9973"),c=a("c1df"),d=a.n(c),u=a("cc6e");function p(t,e,a,n,i,r,o){try{var s=t[r](o),l=s.value}catch(c){return void a(c)}s.done?e(l):Promise.resolve(l).then(n,i)}function h(t){return function(){var e=this,a=arguments;return new Promise((function(n,i){var r=t.apply(e,a);function o(t){p(r,n,i,o,s,"next",t)}function s(t){p(r,n,i,o,s,"throw",t)}o(void 0)}))}}var f={name:"UserRoles",components:{HeaderBox:s["a"],Page:l["a"],Ck:u["a"]},data:function(){return{list:"",form:{FormSummary:"",UnitCode:""},copyData:"",copyVisible:!1,previewData:"",preveiwVisible:!1,addOrEditDialog:!1,listNameInput:"",roleStatusSelect:"",listCk:"",buttonList:[],keyWordInput:"",individualData:"",currentPage:1,totalCount:"",pageSize:"",searchLoading:!1,addLoading:!1,editLoading:!1,addOrEdit:"新增",editId:""}},computed:{individualDataFilter:function(){var t=this.individualData;return t.map((function(t){t.CreateTime=d()(t.CreateTime).format("YYYY-MM-DD")})),t},userInfo:function(){return JSON.parse(window.localStorage.getItem("user"))}},methods:{getButtonList:function(t,e){var a=this,n=this,i=[];return e.forEach((function(e){if(t&&e.path){var r=t.toLowerCase();if(e.path&&e.path.toLowerCase()===r)return i=e.children,void(n.buttonList=i);e.children&&a.getButtonList(r,e.children)}})),i},hasBtn:function(t){return this.buttonList.some((function(e){return e.iconCls==t}))},handleAddOrEdit:function(t){var e=arguments,a=this;return h(o.a.mark((function n(){var i,r;return o.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=e.length>1&&void 0!==e[1]?e[1]:"",r=a,!r.$refs.obs){n.next=5;break}return n.next=5,r.$refs.obs.reset();case 5:r.listNameInput="",r.form.FormSummary="",r.roleStatusSelect=!0,r.addOrEdit="新增","add"===t?r.addOrEditDialog=!0:(console.log(i),r.addOrEdit="編輯",r.addOrEditDialog=!0,r.listNameInput=i.Name,r.form.FormSummary=i.Contents,r.form.UnitCode=i.UnitCode,r.editId=i.Id);case 10:case"end":return n.stop()}}),n)})))()},addHandler:function(){var t=this;return h(o.a.mark((function e(){var a,n,i,r,s,l;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t,e.next=3,a.$refs.obs.validate();case 3:n=e.sent,n?(a.addLoading=!0,i=a.listNameInput,r=a.form.FormSummary,s=t.userInfo.UnitCode,l={Name:i,Contents:r,UnitCode:s},a.$api.PostIndividualStatementModule(l).then((function(t){a.getIndividual(),console.log(t),a.addOrEditDialog=!1,a.addLoading=!1,a.$alertM.fire({icon:"success",title:"表單 ".concat(name," 添加成功 ! ")})}))):a.$alertM.fire({icon:"error",title:"請確認欄位是否正確填寫"});case 5:case"end":return e.stop()}}),e)})))()},searchHandler:function(t){var e=t.page,a=t.key,n=this;n.searchLoading=!0,n.keyWordInput=a;var i={key:a,page:e};n.$api.GetIndividualStatementModule(i).then((function(t){console.log(t),n.totalCount=t.data.response.dataCount,n.pageSize=t.data.response.PageSize,n.individualData=t.data.response.data,n.searchLoading=!1,n.currentPage=1}))},deleteHandler:function(t){var e=this;console.log(t),e.$swal({title:"刪除提示",text:"確認刪除表單 ".concat(t.Name," ?"),icon:"warning",showCancelButton:!0,confirmButtonColor:"#2f3e52",cancelButtonColor:"#522f2f",confirmButtonText:"確定",cancelButtonText:"取消"}).then((function(a){if(a.value){var n={id:t.Id};e.$api.DeleteIndividualStatementModule(n).then((function(t){e.getIndividual(),e.$alertT.fire({icon:t.data.success?"success":"error",title:"表單 ".concat(t.data.msg)})}))}else e.$alertT.fire({icon:"info",title:"已取消刪除"})}))},editHandler:function(){var t=this;return h(o.a.mark((function e(){var a,n,i,r,s,l,c;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t,e.next=3,a.$refs.obs.validate();case 3:n=e.sent,n?(a.editLoading=!0,i=a.editId,r=a.listNameInput,s=a.form.FormSummary,l=a.form.UnitCode,c={Id:i,Name:r,Contents:s,UnitCode:l},a.$api.PutIndividualStatementModule(c).then((function(e){a.getIndividual(),t.addOrEditDialog=!1,a.editLoading=!1,a.$alertM.fire({icon:"success",title:"表單 ".concat(r," 更新成功 ! ")})}))):a.$alertM.fire({icon:"error",title:"請確認欄位是否正確填寫"});case 5:case"end":return e.stop()}}),e)})))()},handleSelectionChange:function(t){this.multipleSelection=t},getIndividual:function(){var t=arguments,e=this;return h(o.a.mark((function a(){var n,i,r;return o.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:1,t.length>1?t[1]:void 0,i=e,r={key:i.keyWordInput,page:n},a.next=6,i.$api.GetIndividualStatementModule(r).then((function(t){i.totalCount=t.data.response.dataCount,i.pageSize=t.data.response.PageSize,i.individualData=t.data.response.data,i.list=t.data.response,i.currentPage=n,i.$store.dispatch("loadingHandler",!1)}));case 6:case"end":return a.stop()}}),a)})))()},copy:function(t){this.copyData=JSON.parse(JSON.stringify(t)),this.copyData.UnitCode=this.userInfo.UnitCode,this.copyVisible=!0},toCopy:function(){var t=this;return h(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.PostIndividualStatementModule(t.copyData).then((function(e){t.getIndividual()}));case 2:t.copyVisible=!1;case 3:case"end":return e.stop()}}),e)})))()},preview:function(t){this.previewData=t.Contents,this.preveiwVisible=!0}},mounted:function(){var t=this;return h(o.a.mark((function e(){var a;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$store.dispatch("loadingHandler",!0),a=JSON.parse(window.localStorage.router)?JSON.parse(window.localStorage.router):[],t.getButtonList(t.$route.path,a),e.next=5,t.getIndividual();case 5:t.$store.dispatch("loadingHandler",!1);case 6:case"end":return e.stop()}}),e)})))()}},m=f,v=(a("4ab2"),a("2877")),g=Object(v["a"])(m,n,i,!1,null,null,null);e["default"]=g.exports},"4ab2":function(t,e,a){"use strict";var n=a("fb04"),i=a.n(n);i.a},"97d4":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"headerBox"}},[a("div",{staticClass:"searchBox"},[t.showDatePicker?a("el-date-picker",{staticClass:"datePicker",attrs:{type:"daterange","range-separator":"~","start-placeholder":"開始時間","end-placeholder":"結束時間"},on:{change:t.setSearchDate},model:{value:t.searchDate,callback:function(e){t.searchDate=e},expression:"searchDate"}}):t._e(),t.hasBtn("btnSearch")&&!t.isEvent?a("el-input",{staticClass:"keyWordInput",attrs:{placeholder:"請輸入關鍵字"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.setSearchHandler(e)}},model:{value:t.keyWordInput,callback:function(e){t.keyWordInput=e},expression:"keyWordInput"}}):t._e(),t.hasBtn("btnSearch")&&t.isEvent?a("el-input",{staticClass:"keyWordInput",attrs:{placeholder:"請輸入關鍵字"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.setSearchHandlerDate(e)}},model:{value:t.keyWordInput,callback:function(e){t.keyWordInput=e},expression:"keyWordInput"}}):t._e(),t.hasBtn("btnSearch")&&!t.isEvent?a("el-button",{staticClass:"searchBtn",attrs:{loading:t.searchLoading,type:"primary"},on:{click:t.setSearchHandler}},[t._v("搜尋")]):t._e(),t.hasBtn("btnSearch")&&t.isEvent?a("el-button",{staticClass:"searchBtn",attrs:{loading:t.searchLoading,type:"primary"},on:{click:t.setSearchHandlerDate}},[t._v("搜尋")]):t._e(),t.hasBtn("btnAdd")?a("el-button",{staticClass:"addBtn",attrs:{type:"primary"},on:{click:function(e){return t.setHandleAddOrEdit("add")}}},[t._v("新增")]):t._e(),t.hasBtn("btnEdit")&&t.isEvent?a("el-button",{staticClass:"changeBtn",attrs:{type:"primary"},on:{click:t.setChangeHandler}},[t._v("批次替換")]):t._e(),t.hasBtn("btnImport")?a("el-button",{staticClass:"importBtn",attrs:{type:"primary"},on:{click:t.setImportHandler}},[t._v("匯入")]):t._e(),t.hasBtn("btnExport")?a("el-button",{staticClass:"exportBtn",attrs:{type:"primary"},on:{click:t.setExportHandler}},[t._v("匯出")]):t._e()],1)])},i=[],r=a("c1df"),o=a.n(r),s={name:"HeaderBox",data:function(){return{keyWordInput:"",changeDialogVisible:!1,importDialogVisible:!1,searchDate:""}},props:{buttonList:{type:Array,required:!0,default:[]},showDatePicker:{type:Boolean,default:!1,required:!1},searchLoading:{type:Boolean,default:!1,required:!1},isEvent:{type:Boolean,default:!1,required:!1}},methods:{hasBtn:function(t){return this.buttonList.some((function(e){return e.iconCls==t}))},setHandleAddOrEdit:function(t){this.$emit("handleAddOrEdit",t)},setChangeHandler:function(){this.$emit("changeHandler")},setSearchDate:function(){this.$emit("getSearchDate",this.searchDate)},setSearchHandler:function(){var t=this,e=1,a=t.keyWordInput;t.$emit("searchHandler",{page:e,key:a})},setExportHandler:function(){var t=this,e=t.keyWordInput;if(null!==t.searchDate&&t.searchDate){var a=o()(t.searchDate[0]).format("YYYY-MM-DD"),n=o()(t.searchDate[1]).format("YYYY-MM-DD");t.$emit("exportHandler",{key:e,startDate:a,endDate:n})}else{var i="",r="";t.$emit("exportHandler",{key:e,startDate:i,endDate:r})}},setImportHandler:function(){this.$emit("importHandler",!0)},setSearchHandlerDate:function(){var t=this,e=1,a=t.keyWordInput;if(console.log(t.searchDate),null!==t.searchDate&&t.searchDate){console.log("y");var n=o()(t.searchDate[0]).format("YYYY-MM-DD"),i=o()(t.searchDate[1]).format("YYYY-MM-DD");t.$emit("searchHandlerDate",{page:e,key:a,startDate:n,endDate:i})}else{console.log("n");var r="",s="";t.$emit("searchHandlerDate",{page:e,key:a,startDate:r,endDate:s})}}}},l=s,c=a("2877"),d=Object(c["a"])(l,n,i,!1,null,null,null);e["a"]=d.exports},9973:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[t._l(t.pList,(function(e,n){return[e>0&&e<=t.count?a("div",{key:n,staticClass:"pageD",class:{pageDonc:e==t.now},on:{click:function(a){return t.goTo(e)}}},[t._v(t._s(e))]):t._e()]})),t.now?a("select",{domProps:{value:t.now},on:{change:function(e){return t.goTo(e.target.value)}}},t._l(t.count,(function(e,n){return a("option",{key:n,domProps:{value:e}},[t._v(t._s(e+" / "+t.count))])})),0):t._e()],2)},i=[],r={props:["now","count","rightPage","leftPage"],data:function(){return{}},computed:{pList:function(){for(var t=[],e=this.now-this.leftPage;e<=this.now+this.rightPage;e++)t.push(e);return t}},methods:{goTo:function(t){this.$emit("changePage",t)}}},o=r,s=a("2877"),l=Object(s["a"])(o,n,i,!1,null,null,null);e["a"]=l.exports},a34a:function(t,e,a){t.exports=a("96cf")},c297:function(t,e,a){"use strict";var n=a("e3ff"),i=a.n(n);i.a},cc6e:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{width:t.width},attrs:{id:"ckComp"}},[a("ckeditor",{attrs:{value:t.value},on:{input:t.updata}})],1)},i=[],r={name:"Ck",props:["value","width"],data:function(){return{ckContent:""}},methods:{updata:function(t){this.$emit("input",t)}}},o=r,s=(a("c297"),a("2877")),l=Object(s["a"])(o,n,i,!1,null,null,null);e["a"]=l.exports},e3ff:function(t,e,a){},fb04:function(t,e,a){}}]);
//# sourceMappingURL=chunk-281a2db5.c2681552.js.map