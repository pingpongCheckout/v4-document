(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{395:function(t,n,a){a(36),a(366),a(367),a(368);const e=a(403),i={sign:(t,n)=>{let a=["requestId","accId","clientId","merchantTransactionId","transactionId","amount","cardNum","currency","signType"],i=[],o=[];for(let n in t)a.includes(n)&&i.push(n);i=i.sort(),i.forEach(n=>{o[n]=t[n]}),console.log("current request data:",t),console.log("Key value pairs within the signature range：",o);let s=new URLSearchParams;i.forEach((function(t,n,a){s.append(t,o[t])}));let l=s.toString();l=n+l,console.log("signContent:",l);let c=e(l);return c=c.toString(),c=c.toUpperCase(),console.log("sign:",c),t.sign=c,c}};t.exports=i},423:function(t,n){},439:function(t,n,a){},525:function(t,n,a){"use strict";a(439)},659:function(t,n,a){"use strict";a.r(n);a(36),a(366),a(367),a(368),a(395);var e=a(403),i=a.n(e),o={name:"sign",mounted(){Promise.all([a.e(0),a.e(29)]).then(a.bind(null,680)).then(t=>{this.dynamicComponent=t.default})},data:()=>({dynamicComponent:null,signContent:"",sign:"",inputData:{accId:"2018092714313010016291",salt:"F78BC96A55548B2319EE68E0",jsonData:"",scope:["requestId","accId","clientId","merchantTransactionId","transactionId","amount","cardNum","currency","signType"]}}),methods:{triggerSign(){void 0!==this.inputData.jsonData&&""!==this.inputData.jsonData?(void 0!==this.inputData.jsonData&&""!==this.inputData.jsonData.accId&&void 0!==this.inputData.jsonData.accId&&(this.inputData.accId=this.inputData.jsonData.accId),this.signContent=this.getSignContent(this.inputData.jsonData),this.sign=this.getSign(this.signContent)):this.$message.error("请输入签名参数")},getSign(t){let n=i()(t);return n=n.toString(),n=n.toUpperCase(),console.log("sign:",n),n},getSignContent(t){let n=this.inputData.scope,a=[],e=[];for(let e in t)n.includes(e)&&a.push(e);a=a.sort(),a.forEach(n=>{e[n]=t[n]}),console.log("current request data:",t),console.log("Key value pairs within the signature range：",e);let i=new URLSearchParams;a.forEach((function(t,n,a){i.append(t,e[t])}));let o=i.toString();return o=this.inputData.salt+o,console.log("signContent:",o),o}}},s=(a(525),a(12)),l=Object(s.a)(o,(function(){var t=this,n=t._self._c;return n("div",[n("el-form",{attrs:{inline:!1,model:t.inputData,"label-width":"120px","label-suffix":":"}},[n("el-form-item",{attrs:{label:"accId"}},[n("el-input",{attrs:{placeholder:"请输入accId"},model:{value:t.inputData.accId,callback:function(n){t.$set(t.inputData,"accId",n)},expression:"inputData.accId"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"秘钥"}},[n("el-input",{attrs:{placeholder:"请输入salt"},model:{value:t.inputData.salt,callback:function(n){t.$set(t.inputData,"salt",n)},expression:"inputData.salt"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"签名范围"}},[t.dynamicComponent?n(t.dynamicComponent,{tag:"component",attrs:{mode:"code",lang:"zh"},model:{value:t.inputData.scope,callback:function(n){t.$set(t.inputData,"scope",n)},expression:"inputData.scope"}}):t._e()],1),t._v(" "),n("el-form-item",{attrs:{label:"签名参数"}},[t.dynamicComponent?n(t.dynamicComponent,{tag:"component",attrs:{mode:"code",lang:"zh",expandedOnStart:!0},model:{value:t.inputData.jsonData,callback:function(n){t.$set(t.inputData,"jsonData",n)},expression:"inputData.jsonData"}}):t._e()],1),t._v(" "),n("el-form-item",{attrs:{label:"签名"}},[n("div",[t._v(t._s(t.sign))])]),t._v(" "),n("el-form-item",{attrs:{label:"签名串"}},[n("div",[t._v(t._s(t.signContent))])])],1),t._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[n("el-button",{attrs:{type:"primary"},on:{click:t.triggerSign}},[t._v("获取签名")])],1)],1)}),[],!1,null,"7299e25a",null);n.default=l.exports}}]);