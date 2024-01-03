(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{473:function(e,t,i){},559:function(e,t,i){"use strict";i(473)},637:function(e,t,i){"use strict";i.r(t);i(36);var r={data:[{id:1,value:"captureDelayHours",type:"int",required:"M",desc:" <ul><li>0 indicates immediate capture</li><li>-1 indicates manual capture, which requires calling the Accept a Payment API again after a successful call <a href='/v4-document/pages/b110ca/' target='_blank'>Pre-Authorization Confirmation Interface</a> ,Not Supported for Local Payment</li></ul>"},{id:2,value:"timeExpire",type:"string(10)",required:"O",desc:"Order closing time, unit: seconds. Example value: 1683530496"},{id:3,value:"amount",type:"string(12)",required:"M",desc:"The transaction amount. Please refer to the appendix for details <a href='/v4-document/pages/3c0bdf/' target='_blank'>Transaction Currency</a>"},{id:4,value:"currency",type:"string(3)",required:"M",desc:"Transaction currency: three-digit currency in ISO 4217.  Please refer to the appendix for details  <a href='/v4-document/pages/3c0bdf/' target='_blank'>Appendix Transaction Currency</a>"},{id:5,value:"merchantTransactionId",type:"string(64)",required:"M",desc:"Merchant website order serial number, the unique identifier of the order, which can be used for subsequent order inquiries and reconciliation"},{id:6,value:"payResultUrl",type:"string(255)",required:"C",desc:"Merchant customizes the result URL for receiving redirection; The page displayed after payment"},{id:7,value:"notificationUrl",type:"string(255)",required:"O",desc:"Merchant-customized callback address for transaction result notification, PingPongCheckout will push the  result to that URL through POST method"},{id:8,value:"requestId",type:"string(64)",required:"M",desc:"Unique request number, globally unique"},{id:9,value:"remark",type:"string(255)",required:"O",desc:"Merchant extension fields, which can be used to specify specific parameters and will be returned in the response body as-is"},{id:10,value:"tradeCountry",type:"string(2)",required:"O",desc:"Used to specify the country for the PingPong checkout, defaults to the country supported by PingPong"},{id:11,value:"merchantSource",type:"string(64)",required:"O",desc:"If an e-commerce platform is integrating, this value needs to be confirmed with PingPong's technical team。"},{id:12,value:"shopperIP",type:"string(64)",required:"M",desc:"User's order IP, supporting  IPv4"},{id:13,value:"merchantUserId",type:"string(256)",required:"C",desc:"Member ID, the user's member ID on the merchant website. Applicable to quick payment scenarios. This field can be left blank if the user is a guest"},{id:14,value:"threeDSRequestData",type:"String",required:"C",desc:"3DS verification request parameters.<a href = '/v4-document/pages/c62136/'>Please refer to the 3DS Integration Guide for more details</a>",children:[{id:140,value:"executeThreeD",type:"String",required:"C",desc:"3DS verification execution strategy:\n<ul><li>Y - Force 3DS verification and use PingPongCheckout's 3DS</li><li>depends - Whether to perform 3DS verification is determined by PingPongCheckout's risk control decision</li><li>external - 3DS verification is required, but the 3DS parameters are collected by the merchant and executed by PingPong. Note: This option does not apply to the checkout</li></ul>"},{id:141,value:"authenticationValue",type:"String",required:"C",desc:"A unique identifier generated by the issuing bank for Visa, American Express, JCB, Diners Club, and Discover transactions after customer authentication. The original data is in base64 format. The value needs to be converted to the appropriate format."},{id:142,value:"acsTransactionId",type:"String",required:"C",desc:"A unique transaction identifier assigned by the ACS (Access Control Server) to identify an individual transaction."},{id:143,value:"veresEnrolled",type:"String",required:"C",desc:"veresEnrolled - The result of the registration check. This field can contain one of the following values:\n<li>Y - Card is enrolled or eligible for enrollment; you must perform authentication. Liability shift applies.</li><li>N - Card is not enrolled; authorization is required. Liability shift applies.</li><li>U - Unable to perform authentication for any reason. No liability shift.</li></ul>"},{id:144,value:"specificationVersion",type:"String",required:"C",desc:"This field contains the 3D Secure version used for processing the transaction. For example, 1.0.2 or 2.0.0."},{id:145,value:"directoryServerTransactionId",type:"String",required:"C",desc:"The directory server transaction ID generated by the Mastercard directory server during the authentication transaction and passed back to the merchant along with the authentication result."},{id:146,value:"threeDSServerTransactionId",type:"String",required:"C",desc:"A unique transaction identifier assigned by the 3DS server to identify an individual transaction."},{id:147,value:"paresStatus",type:"String",required:"C",desc:"The raw result of the authentication check. This field can contain one of the following values:\n<ul><li>A - Proof that an authentication attempt was generated</li><li>N - Customer authentication failed or canceled. Transaction is rejected</li><li>U - Authentication could not be completed for any reason</li><li>Y - Customer successfully passed authentication</li></ul>"},{id:148,value:"eci",type:"String",required:"C",desc:"For verification, only Visa, American Express, JCB return Electronic Commerce Indicator (ECI) for Diners Club and Discover transactions. This field is missing when authentication fails. It can have one of the following values:<ul><li>01 - Attempted authentication (Mastercard)</li><li>02 - Authentication successful (Mastercard)</li><li>05-Successful authentication (Visa, American Express, JCB, Diners Club, and Discover)</li><li>06 - Attempted authentication（Visa、American Express、JCB、Diners Club和Discover）</li></ul>"}]}]},a={data:()=>({tableData:[],http:null}),mounted(){this.initTableData()},methods:{tableRowClassName:({row:e,rowIndex:t})=>e.hasOwnProperty("id")?e.id%2==0?"warning-row":"success-row":"warning-row",initTableData(){this.tableData.push(...r.data)}}},n=(i(559),i(12)),s=Object(n.a)(a,(function(){var e=this,t=e._self._c;return t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"row-key":"id","row-class-name":e.tableRowClassName,"tree-props":{children:"children",hasChildren:"hasChildren"}}},[t("el-table-column",{attrs:{prop:"value",label:"attribute",sortable:"",width:"240"}}),e._v(" "),t("el-table-column",{attrs:{prop:"type",label:"type",sortable:"",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"required",label:"required",sortable:"",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"desc",sortable:"",label:"description"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("div",{domProps:{innerHTML:e._s(i.row.desc)}})]}}])})],1)}),[],!1,null,null,null);t.default=s.exports}}]);