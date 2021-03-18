(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-428a73be"],{2433:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"FormModelList"}},[n("el-dialog",{attrs:{"close-on-click-modal":!1,title:"表單預覽",visible:t.dialogVisiblePreview,width:"50%"},on:{"update:visible":function(e){t.dialogVisiblePreview=e}}},[t.FormRow.FormDtlDTO&&t.FormRow.FormDtlDTO.length>0?n("FormModelTable",{attrs:{data:t.FormRow.FormDtlDTO}}):t._e()],1),n("el-dialog",{attrs:{"close-on-click-modal":!1,title:"表單複製",visible:t.copyVisible,width:"50%"},on:{"update:visible":function(e){t.copyVisible=e}}},[n("el-form",{attrs:{"label-width":"80px"}},[n("el-form-item",{attrs:{label:"表單名稱"}},[n("el-input",{model:{value:t.FormRow.FormName,callback:function(e){t.$set(t.FormRow,"FormName",e)},expression:"FormRow.FormName"}})],1)],1),n("h2",[t._v("表單預覽")]),t.FormRow.FormDtlDTO&&t.FormRow.FormDtlDTO.length>0?n("FormModelTable",{attrs:{data:t.FormRow.FormDtlDTO}}):t._e(),n("div",{staticClass:"formButtonList"},[n("el-button",{attrs:{type:"primary"},on:{click:t.toCopy}},[t._v("複製表單")])],1)],1),n("div",{staticClass:"buttonList"},[n("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"請輸入關鍵字"},on:{change:t.toSearch},model:{value:t.search.key,callback:function(e){t.$set(t.search,"key",e)},expression:"search.key"}}),n("el-button",{ref:"search",attrs:{type:"primary"},on:{click:t.toSearch}},[t._v("搜尋")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.$router.push({name:"FormModelEdit"})}}},[t._v("新增")]),n("el-button",{attrs:{type:"danger"},on:{click:t.batchDel}},[t._v("批量刪除")])],1),n("div",{staticClass:"tableD"},[n("el-table",{staticStyle:{width:"100%"},attrs:{"header-cell-class-name":"tableHeader",data:t.list.data},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),n("el-table-column",{attrs:{label:"報名表名稱",prop:"FormName","min-width":"90",sortable:""}}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"iconList"},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"預覽",placement:"top","open-delay":500}},[n("div",{staticClass:"iconListD",on:{click:function(n){return t.preview(e.row.Id)}}},[n("i",{staticClass:"el-icon-view"})])]),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"複製",placement:"top","open-delay":500}},[n("div",{staticClass:"iconListD",on:{click:function(n){return t.copy(e.row)}}},[n("i",{staticClass:"el-icon-document-copy"})])])," "!=e.row.UnitCode?n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"編輯",placement:"top","open-delay":500}},[n("div",{staticClass:"iconListD",on:{click:function(n){return t.$router.push({name:"FormModelEdit",query:{Id:e.row.Id}})}}},[n("i",{staticClass:"myicon-edit"})])]):t._e()," "!=e.row.UnitCode?n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"刪除",placement:"top","open-delay":500}},[n("div",{staticClass:"iconListD",on:{click:function(n){return t.del(e.row.Id)}}},[n("i",{staticClass:"myicon-delete"})])]):t._e()],1)]}}])})],1)],1),n("Page",{attrs:{now:t.search.page,count:t.list.pageCount,rightPage:5,leftPage:5},on:{changePage:t.changePage}})],1)},r=[],o=n("a34a"),i=n.n(o),s=n("9973"),c=n("64fe");function l(t,e,n,a,r,o,i){try{var s=t[o](i),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(a,r)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var o=t.apply(e,n);function i(t){l(o,a,r,i,s,"next",t)}function s(t){l(o,a,r,i,s,"throw",t)}i(void 0)}))}}var d={data:function(){return{buttonList:[],search:{page:1,key:""},list:[],changeList:[],FormRow:"",dialogVisiblePreview:!1,copyVisible:!1,form:"",blank:{Name:"",Description:"",Enabled:!0}}},components:{Page:s["a"],FormModelTable:c["a"]},created:function(){var t=this;return u(i.a.mark((function e(){var n;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$store.dispatch("loadingHandler",!0),n=JSON.parse(window.localStorage.router)?JSON.parse(window.localStorage.router):[],t.getButtonList(t.$route.path,n),e.next=5,t.getData(t.search);case 5:t.$store.dispatch("loadingHandler",!1);case 6:case"end":return e.stop()}}),e)})))()},methods:{getData:function(t){var e=this;return u(i.a.mark((function n(){return i.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.$store.dispatch("loadingHandler",!0),n.next=3,e.$api.GetForm(t).then((function(t){return t.data.response}));case 3:e.list=n.sent,e.$store.dispatch("loadingHandler",!1);case 5:case"end":return n.stop()}}),n)})))()},getButtonList:function(t,e){var n=this,a=this,r=[];return e.forEach((function(e){if(t&&e.path){var o=t.toLowerCase();if(e.path&&e.path.toLowerCase()===o)return r=e.children,void(a.buttonList=r);e.children&&n.getButtonList(o,e.children)}})),r},hasBtn:function(t){return this.buttonList.some((function(e){return e.iconCls==t}))},toSearch:function(){this.changePage(1)},changePage:function(t){this.search.page=t,this.getData(this.search)},del:function(t){var e=arguments,n=this;return u(i.a.mark((function a(){var r,o,s;return i.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=!(e.length>1&&void 0!==e[1])||e[1],!r){a.next=5;break}if(o=confirm("確定刪除?"),o){a.next=5;break}return a.abrupt("return",0);case 5:return n.$store.dispatch("loadingHandler",!0),s={Id:t},a.next=9,n.$api.DeleteForm(s).then((function(t){t.data.success&&r&&n.getData(n.search)}));case 9:n.$store.dispatch("loadingHandler",!1);case 10:case"end":return a.stop()}}),a)})))()},handleSelectionChange:function(t){this.changeList=t},batchDel:function(){var t=this;return u(i.a.mark((function e(){var n,a;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=confirm("確定批量刪除?"),n){e.next=3;break}return e.abrupt("return",0);case 3:e.t0=i.a.keys(t.changeList);case 4:if((e.t1=e.t0()).done){e.next=10;break}return a=e.t1.value,e.next=8,t.del(t.changeList[a].Id,!1);case 8:e.next=4;break;case 10:t.getData(t.search);case 11:case"end":return e.stop()}}),e)})))()},preview:function(t){var e=this;return u(i.a.mark((function n(){var a;return i.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.$store.dispatch("loadingHandler",!0),a={Id:t},n.next=4,e.$api.GetFormById(a).then((function(t){return t.data.response}));case 4:e.FormRow=n.sent,e.dialogVisiblePreview=!e.dialogVisiblePreview,e.$store.dispatch("loadingHandler",!1);case 7:case"end":return n.stop()}}),n)})))()},copy:function(t){var e=this;return u(i.a.mark((function n(){var a,r;return i.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a={Id:t.Id},r=window.localStorage.user?JSON.parse(window.localStorage.user):null,e.$store.dispatch("loadingHandler",!0),e.copyVisible=!0,n.next=6,e.$api.GetFormById(a).then((function(t){return t.data.response}));case 6:e.FormRow=n.sent,e.FormRow.FormName+=" - Copy",e.FormRow.UnitCode=r.UnitCode,e.$store.dispatch("loadingHandler",!1);case 10:case"end":return n.stop()}}),n)})))()},toCopy:function(){var t=this;return u(i.a.mark((function e(){var n;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$store.dispatch("loadingHandler",!0),e.next=3,t.$api.PostForm(t.FormRow).then((function(t){return t.data}));case 3:return n=e.sent,t.$alertM.fire({icon:n.success?"success":"error",title:n.msg}),e.next=7,t.getData(t.search);case 7:t.copyVisible=!1;case 8:case"end":return e.stop()}}),e)})))()}}},p=d,h=n("2877"),f=Object(h["a"])(p,a,r,!1,null,null,null);e["default"]=f.exports},"46ac":function(t,e,n){"use strict";var a=n("8eb8"),r=n.n(a);r.a},"64fe":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%"}},t._l(t.list,(function(e,a){return n("el-row",{key:a,attrs:{gutter:16}},[n("el-col",[n("div",{staticClass:"el-col-item"},[t._v(t._s(e.ColumnName))]),n("formComp",{ref:"Row",refInFor:!0,attrs:{formData:e}})],1)],1)})),1)},r=[],o=n("571b"),i={components:{formComp:o["a"]},props:{data:{type:Array,default:[]}},watch:{data:{handler:function(t){this.list=t,console.log(this.list),this.$forceUpdate()},deep:!0,immediate:!0}},data:function(){return{list:[]}},computed:{getMax:function(){var t=[];this.list.map((function(e){t.push(e.CRow)}));var e=t.reduce((function(t,e){return Math.max(t,e)}));return e}},methods:{getRow:function(t){return console.log("getRow",this.list.filter((function(e){return e.CRow===t}))),this.list.filter((function(e){return e.CRow===t}))},showRow:function(){var t={};for(var e in this.$refs.Row)t["Row"+e]=this.$refs.Row[e].getValue;return Object.values(t)}},created:function(){},mounted:function(){}},s=i,c=(n("46ac"),n("2877")),l=Object(c["a"])(s,a,r,!1,null,null,null);e["a"]=l.exports},"8eb8":function(t,e,n){},9973:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[t._l(t.pList,(function(e,a){return[e>0&&e<=t.count?n("div",{key:a,staticClass:"pageD",class:{pageDonc:e==t.now},on:{click:function(n){return t.goTo(e)}}},[t._v(t._s(e))]):t._e()]})),t.now?n("select",{domProps:{value:t.now},on:{change:function(e){return t.goTo(e.target.value)}}},t._l(t.count,(function(e,a){return n("option",{key:a,domProps:{value:e}},[t._v(t._s(e+" / "+t.count))])})),0):t._e()],2)},r=[],o={props:["now","count","rightPage","leftPage"],data:function(){return{}},computed:{pList:function(){for(var t=[],e=this.now-this.leftPage;e<=this.now+this.rightPage;e++)t.push(e);return t}},methods:{goTo:function(t){this.$emit("changePage",t)}}},i=o,s=n("2877"),c=Object(s["a"])(i,a,r,!1,null,null,null);e["a"]=c.exports},a34a:function(t,e,n){t.exports=n("96cf")}}]);
//# sourceMappingURL=chunk-428a73be.2b4a9d94.js.map