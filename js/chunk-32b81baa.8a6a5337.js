(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32b81baa"],{"4aef":function(t,e,s){"use strict";var a=s("c6fa"),n=s.n(a);n.a},"7cf9":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"org"},[s("el-col",{staticClass:"toolbar roles",staticStyle:{margin:"0 1.5rem"},attrs:{span:8}},[s("el-card",{staticClass:"box-card",staticStyle:{width:"100%"}},[s("div",{staticClass:"authorityHeader",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("擁有組織 ")])]),s("div",{staticClass:"unitContainer"},t._l(t.CtrlUnits,(function(e){return s("div",{key:e.UntId,staticClass:"ctrlUnit",class:{selectedOrg:t.selectedOrg===e.UntId},on:{click:function(s){return t.handleSelectOrg(e.UntId)}}},[t._v(" "+t._s(e.UntNameFull)+" "),t.selectedOrg===e.UntId?s("i",{staticClass:"fas fa-check"}):t._e()])})),0)])],1),s("el-col",{staticClass:"toolbar roles",attrs:{span:12}},[s("el-card",{staticClass:"box-card",staticStyle:{width:"100%"}},[s("div",{staticClass:"authorityHeader",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("組織成員")]),s("el-button",{attrs:{size:"mini"},on:{click:t.handleDialog}},[t._v("新增")])],1),s("div",{staticClass:"memberContainer"},t._l(t.orgMembers,(function(e){return s("div",{key:e.Id,staticClass:"ctrlUnit"},[s("span",{staticStyle:{width:"150px",display:"inline-block"}},[t._v(" "+t._s(e.RealName)+"_"+t._s(e.LoginName))]),s("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(s){return t.handleDelete(e.Id)}}},[t._v("刪除")])],1)})),0)])],1),s("el-dialog",{attrs:{title:"新增成員",visible:t.addDialog,width:"30%"},on:{"update:visible":function(e){t.addDialog=e}}},[s("el-select",{attrs:{filterable:"",placeholder:"請選擇"},model:{value:t.memberId,callback:function(e){t.memberId=e},expression:"memberId"}},t._l(t.userList,(function(t){return s("el-option",{key:t.Id,attrs:{label:t.RealName+"_"+t.LoginName,value:t.Id}})})),1),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.addDialog=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v("確 定")])],1)],1)],1)},n=[],i={name:"org",data:function(){return{CtrlUnits:"",selectedOrg:"",memberId:"",orgMembers:"",userList:"",addDialog:!1}},methods:{getUnits:function(){var t=this,e=this;e.$api.GetUnits().then((function(e){var s=JSON.parse(localStorage.getItem("user")).CtrlUnits;t.CtrlUnits=e.data.filter((function(t){return s.includes(t.UntId)})),console.log(t.CtrlUnits)}))},handleSelectOrg:function(t){var e=this;this.selectedOrg=t;var s={Org:this.selectedOrg,Type:1};this.$api.GetAdminUserByOrgId(s).then((function(t){console.log(t.data.response),e.orgMembers=t.data.response}))},handleDialog:function(){var t=this;this.addDialog=!0;var e={Org:this.selectedOrg,Type:0};this.$api.GetAdminUserByOrgId(e).then((function(e){console.log(e.data.response),t.userList=e.data.response}))},handleAdd:function(){var t=this,e={userId:this.memberId,unitCode:this.selectedOrg};this.$api.PutAdminUserByOrgId(e).then((function(e){t.addDialog=!1,t.handleSelectOrg(t.selectedOrg)}))},handleDelete:function(t){var e=this,s={userId:t,unitCode:this.selectedOrg};this.$api.DeleteAdminUserByOrgId(s).then((function(t){e.handleSelectOrg(e.selectedOrg)}))}},mounted:function(){this.getUnits()}},l=i,r=(s("4aef"),s("2877")),o=Object(r["a"])(l,a,n,!1,null,"2fa95e81",null);e["default"]=o.exports},c6fa:function(t,e,s){}}]);
//# sourceMappingURL=chunk-32b81baa.8a6a5337.js.map