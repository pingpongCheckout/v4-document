(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{762:function(t,e,a){"use strict";a.r(e);var l=a(12),i=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"查询拒付记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询拒付记录"}},[t._v("#")]),t._v(" 查询拒付记录")]),t._v(" "),e("p",[t._v("A chargeback is the reversal of a transaction, typically initiated by a cardholder who disputes a transaction on their credit card.")]),t._v(" "),e("h2",{attrs:{id:"chargebacktype"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chargebacktype"}},[t._v("#")]),t._v(" chargebackType")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("chargebackType")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("desc")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("retrieval")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("retrieval")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("1st_chargeback")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The first Chargeback")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("2nd_chargeback")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Second Chargeback")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("chargeback_reversal")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Chargeback Reversal")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("pre_arbitration")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Preparing for Arbitration")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("arbitration")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Arbitration")])])])]),t._v(" "),e("h2",{attrs:{id:"chargebackstatus"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chargebackstatus"}},[t._v("#")]),t._v(" chargebackStatus")]),t._v(" "),e("p",[t._v("1 is the initial state; 3, 4, and 5 are intermediate states; while 6, 7, 8, and 9 are final states.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("序号")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("chargebackStatus")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("desc")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("desc")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("pending")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The merchant has not yet processed the chargeback/retrieval request.")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("initial state")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("processed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The merchant has submitted the documentation.")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("intermediate states")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("expired")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The merchant has failed to respond within the given timeframe.")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("intermediate states")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("waiver_appeal")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v('The merchant clicked on the "Abandon Appeal" button, or a chargeback that resulted from not responding to a retrieval request.')]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("intermediate states")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("revoked")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Acquiring bank's chargeback document, chargeback reversal.")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("final states")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("7")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("success")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Received acquiring bank's document, appeal successful.")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("final states")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("failed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Received acquiring bank's document, appeal unsuccessful.")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("final states")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("9")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("refunded")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The merchant has issued a full refund during chargeback/retrieval process.")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("final states")])])])]),t._v(" "),e("h2",{attrs:{id:"request-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-url"}},[t._v("#")]),t._v(" Request Url")]),t._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("https://{host}/v2/chargeback\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"request-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-parameters"}},[t._v("#")]),t._v(" Request Parameters")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("div",[e("el-tag",{attrs:{type:"danger",effect:"dark"}},[t._v("Parameter required attribute description:Mandatory (M), optional (O), conditional (C) ")]),t._v(" "),e("el-tag",{attrs:{effect:"dark"}},[t._v("POST")]),t._v(" "),e("el-tag",{attrs:{effect:"dark"}},[t._v("JSON")])],1),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter field")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Reduired")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("accId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PingPong merchant store ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("queryType")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NEW/UPDATE")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("startDate")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Chargeback generation time/update time dimension, query start time, format yyyy-mm-dd.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("endDate")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Chargeback generation time/update time dimension, query end time, format yyyy-mm-dd.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("chargebackType")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("O")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("chargebackType")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("chargebackStatus")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("O")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("chargebackStatus")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("page")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Integer")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("O")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("page， 1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("pagesize")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Integer")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("O")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number of Rows, Maximum Limit 1000.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("signType")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String(32)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("signType，"),e("code",[t._v("SHA256``MD5")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("sign")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String(256)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("sign")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("version")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string(64)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1.0，")])])])]),t._v(" "),e("h2",{attrs:{id:"response-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-parameters"}},[t._v("#")]),t._v(" Response Parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Field Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Required")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("clientId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PingPong  merchant ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("totalSize")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of records.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("data")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("[data]")])])])]),t._v(" "),e("h3",{attrs:{id:"data-i"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-i"}},[t._v("#")]),t._v(" data[i] :")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Field Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("accId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PingPong merchant store ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("chargebackId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("chargebackId")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("chargebackType")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("chargebackType")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("chargebackStatus")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("chargebackStatus")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("chargebackAmount")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("amount")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("chargebackCurrency")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("currency")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("reasonType")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("reasonType")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("reasonCode")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("reasonCode")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("reasonDescription")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Description corresponding to chargeback reason.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("createDate")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("createDate")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("updateDate")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("updateDate")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("appealDate")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("appealDate")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("cardNo")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Card number, masked to show only the first 6 and last 4 digits.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("cardScheme")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Card Network")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("cardholderName")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Cardholder name.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("transactionTime")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("transactionTime")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("transactionId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("PingPong transaction serial number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("merchantTransactionId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Merchant website order serial number, the unique identifier of the order, which can be used for subsequent order inquiries and reconciliation")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("amount")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("amount")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("currency")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("currency")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("registerUserEmail")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("email")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("shippingphoneNo")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("shippingphoneNo")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("shippingLastName")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("shippingLastName")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("shippingFirstName")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("shippingFirstName")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("storeUrl")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("storeUrl")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("goodsName")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("goodsName")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);