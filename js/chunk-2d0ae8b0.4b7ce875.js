(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ae8b0"],{"0b08":function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",[e.showCamera?t("WisQrcode",{on:{decode:e.decodeHandle,close:e.closeHandle}}):e._e(),t("div",{staticStyle:{padding:"12px 8px"}},[t("Row",{staticStyle:{"margin-bottom":"28px","margin-top":"12px"}},[t("i-col",{attrs:{span:"16"}},[t("Input",{staticStyle:{width:"100%","font-size":"12px"},attrs:{placeholder:"请扫描或输入单号",size:"small"},model:{value:e.valueInput,callback:function(a){e.valueInput=a},expression:"valueInput"}})],1),t("i-col",{staticStyle:{"text-align":"right"},attrs:{span:"8"}},[t("Button",{staticStyle:{"margin-right":"8px"},attrs:{type:"success",size:"small"},on:{click:e.readHandle}},[e._v("读取")]),t("Button",{attrs:{type:"info",size:"small"},on:{click:e.scanHandle}},[e._v("扫描")])],1)],1),t("h5",{staticStyle:{"text-align":"left","padding-bottom":"6px"}},[e._v("送货单信息")]),t("Form",{ref:"formInline",attrs:{model:e.formInline,rules:e.ruleInline,"label-colon":!0,"label-position":"top"}},[t("Row",[t("i-col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"送货单号"}},[t("Input",{attrs:{size:"small",disabled:""},model:{value:e.formInline.odd,callback:function(a){e.$set(e.formInline,"odd",a)},expression:"formInline.odd"}})],1)],1),t("i-col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"发货时间"}},[t("Input",{attrs:{size:"small",disabled:""},model:{value:e.formInline.deliverTime,callback:function(a){e.$set(e.formInline,"deliverTime",a)},expression:"formInline.deliverTime"}})],1)],1)],1),t("Row",[t("i-col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"供应商"}},[t("Input",{attrs:{size:"small",disabled:""},model:{value:e.formInline.principal,callback:function(a){e.$set(e.formInline,"principal",a)},expression:"formInline.principal"}})],1)],1),t("i-col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"到货时间"}},[t("Input",{attrs:{size:"small",disabled:""},model:{value:e.formInline.arrivalTime,callback:function(a){e.$set(e.formInline,"arrivalTime",a)},expression:"formInline.arrivalTime"}})],1)],1)],1),t("Row",[t("i-col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"卸货负责人"}},[t("Input",{attrs:{size:"small",disabled:""},model:{value:e.formInline.principal,callback:function(a){e.$set(e.formInline,"principal",a)},expression:"formInline.principal"}})],1)],1),t("i-col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"卸货口电话"}},[t("Input",{attrs:{size:"small",disabled:""},model:{value:e.formInline.phone,callback:function(a){e.$set(e.formInline,"phone",a)},expression:"formInline.phone"}})],1)],1)],1),t("Row",[t("i-col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"仓库"}},[t("Input",{attrs:{size:"small",disabled:""},model:{value:e.formInline.warehouse,callback:function(a){e.$set(e.formInline,"warehouse",a)},expression:"formInline.warehouse"}})],1)],1),t("i-col",{attrs:{span:"12"}},[t("FormItem",{attrs:{label:"状态"}},[t("Input",{attrs:{size:"small",disabled:""},model:{value:e.formInline.status,callback:function(a){e.$set(e.formInline,"status",a)},expression:"formInline.status"}})],1)],1)],1)],1),t("Table",{staticStyle:{"margin-top":"12px"},attrs:{size:"small",columns:e.columns,data:e.data}}),t("Affix",{attrs:{"offset-bottom":20}},[t("div",{staticStyle:{"text-align":"right","padding-right":"12px"}},[t("Button",{staticStyle:{padding:"0px","font-size":"12px",height:"42px",width:"42px"},attrs:{type:"primary",shape:"circle"},on:{click:e.handleSubmit}},[e._v(" 收货 ")])],1)])],1)],1)},n=[],i={data:function(){return{showCamera:!1,valueInput:"",formInline:{odd:"23322aqq",supplier:"供应商aaa",principal:"负责人",warehouse:"仓库",deliverTime:"2012-11-09",arrivalTime:"2013-01-09",phone:"18978546787",status:"待发货"},ruleInline:{},columns:[{title:"行号",key:"no"},{title:"物料信息",key:"name"},{title:"需求数量",key:"age"},{title:"发货数",key:"age"},{title:"收货数",key:"age"}],data:[{no:1,name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"},{no:2,name:"Jim Green",age:24,address:"London No. 1 Lake Park",date:"2016-10-01"},{no:3,name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",date:"2016-10-02"}]}},methods:{closeHandle:function(){this.showCamera=!1},decodeHandle:function(e){this.valueInput=e,this.showCamera=!1},readHandle:function(){this.valueInput},scanHandle:function(){this.showCamera=!0},handleSubmit:function(){}}},s=i,o=t("2877"),r=Object(o["a"])(s,l,n,!1,null,null,null);a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0ae8b0.4b7ce875.js.map