"use strict";(self["webpackChunkcaptain"]=self["webpackChunkcaptain"]||[]).push([[164],{1164:function(e,t,i){i.r(t),i.d(t,{default:function(){return W}});var r=i(3396);function o(e,t,i,o,a,l){const u=(0,r.up)("MoudlePage2");return(0,r.wg)(),(0,r.j4)(u)}const a={class:"text-h6 text--primary"},l={style:{padding:"0px 16px"}},u=(0,r._)("strong",{style:{color:"#2E7D32"}},"price start",-1),p=(0,r._)("strong",{style:{color:"#FF3D00"}},"price over",-1);function s(e,t,i,o,s,n){const c=(0,r.up)("v-icon"),d=(0,r.up)("v-btn"),m=(0,r.up)("v-card-text"),v=(0,r.up)("v-select"),f=(0,r.up)("v-col"),y=(0,r.up)("v-text-field"),k=(0,r.up)("v-row"),g=(0,r.up)("v-form"),h=(0,r.up)("v-card");return(0,r.wg)(),(0,r.j4)(h,{"max-width":"763"},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{style:{position:"relative"}},{default:(0,r.w5)((()=>[(0,r._)("p",a,[(0,r.Wm)(c,{style:{"font-size":"18px","margin-bottom":"4px","margin-right":"6px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("mdi-align-vertical-distribute")])),_:1}),(0,r.Uk)(" Profit ")]),(0,r.Wm)(d,{style:{position:"absolute",top:"10px",right:"16px"},variant:"outlined",color:"teal",onClick:e.submit},{default:(0,r.w5)((()=>[(0,r.Uk)("submit")])),_:1},8,["onClick"])])),_:1}),(0,r._)("div",l,[(0,r.Wm)(g,{ref:"form"},{default:(0,r.w5)((()=>[(0,r.Wm)(k,null,{default:(0,r.w5)((()=>[(0,r.Wm)(f,{cols:"2"},{default:(0,r.w5)((()=>[(0,r.Wm)(v,{modelValue:e.select,"onUpdate:modelValue":[t[0]||(t[0]=t=>e.select=t),e.selectChange],items:e.items,label:"ratio",variant:"solo-inverted",density:"compact"},null,8,["modelValue","items","onUpdate:modelValue"])])),_:1}),(0,r.Wm)(f,{cols:"4"},{default:(0,r.w5)((()=>[(0,r.Wm)(y,{modelValue:e.priceStart,"onUpdate:modelValue":t[1]||(t[1]=t=>e.priceStart=t),density:"compact",variant:"solo-inverted",clearable:"",type:"number",rules:[e=>!!e||"price start is required"],required:""},{label:(0,r.w5)((()=>[(0,r._)("span",null,[u,(0,r.Wm)(c,{icon:"mdi-align-horizontal-left"})])])),_:1},8,["modelValue","rules"])])),_:1}),(0,r.Wm)(f,{cols:"4"},{default:(0,r.w5)((()=>[(0,r.Wm)(y,{modelValue:e.priceOver,"onUpdate:modelValue":t[2]||(t[2]=t=>e.priceOver=t),density:"compact",variant:"solo-inverted",clearable:"",type:"number",rules:[e=>!!e||"price over is required"],required:""},{label:(0,r.w5)((()=>[(0,r._)("span",null,[p,(0,r.Wm)(c,{icon:"mdi-align-horizontal-right"})])])),_:1},8,["modelValue","rules"])])),_:1})])),_:1})])),_:1},512)])])),_:1})}var n=i(3495),c=(0,r.aZ)({data:()=>({select:null,priceStart:void 0,priceOver:void 0,items:["3","4","5","6","7","8","9","10","11","12","13"]}),created(){this.initHandle()},methods:{initHandle(){this.select=localStorage.getItem("bufferComputerRatio")||"7"},selectChange(e){localStorage.setItem("bufferComputerRatio",String(e))},async submit(){const{valid:e}=await this.$refs.form.validate(),{select:t,priceStart:i,priceOver:o}=this;if(this.dialog=!1,this.textResult="",e){const e=Number(i),a=Number(o),l=(i.toString().split(".")[1]||"").length,u=Math.abs(e-a)*Number(t),p=l?u.toFixed(l):u;if(e>a){const t=Number(p)+Number(e),i=l?t.toFixed(l):t;n.Z.success({title:"Result",content:(0,r.h)("h1",i)})}if(e<a){const t=Number(e)-Number(p),i=l?t.toFixed(l):t;n.Z.success({title:"Result",content:(0,r.h)("h1",i)})}}}}}),d=i(89);const m=(0,d.Z)(c,[["render",s]]);var v=m,f=i(7139);const y={class:"text-h6 text--primary"},k={style:{padding:"0px 16px"}},g={key:1,style:{color:"#8BC34A"}},h={key:2,style:{color:"#FF5722"}},w={key:3},P={key:4,style:{color:"#FFC107"}},b={key:5,style:{color:"#8BC34A"}},_={key:6,style:{color:"#00BCD4"}};function C(e,t,i,o,a,l){const u=(0,r.up)("v-icon"),p=(0,r.up)("v-card-text"),s=(0,r.up)("a-input-number"),n=(0,r.up)("v-btn"),c=(0,r.up)("a-table"),d=(0,r.up)("v-card");return(0,r.wg)(),(0,r.j4)(d,{class:"computer-card-1"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{style:{position:"relative"}},{default:(0,r.w5)((()=>[(0,r._)("p",y,[(0,r.Wm)(u,{style:{"font-size":"18px","margin-bottom":"4px","margin-right":"6px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("mdi-desktop-classic")])),_:1}),(0,r.Uk)(" FXCM ")])])),_:1}),(0,r._)("div",k,[(0,r.Wm)(c,{columns:e.columns,"data-source":e.data,pagination:!1,size:"small"},{headerCell:(0,r.w5)((({column:e})=>["close"===e.key?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r._)("strong",null,(0,f.zw)(e.title),1),(0,r.Wm)(u,{color:"#FF5722",icon:"mdi-close-outline"})],64)):(0,r.kq)("",!0),"priceStart"===e.key?((0,r.wg)(),(0,r.iD)("strong",g,(0,f.zw)(e.title),1)):(0,r.kq)("",!0),"priceOver"===e.key?((0,r.wg)(),(0,r.iD)("strong",h,(0,f.zw)(e.title),1)):(0,r.kq)("",!0),"profitRatio"===e.key?((0,r.wg)(),(0,r.iD)("span",w,(0,f.zw)(e.title),1)):(0,r.kq)("",!0),"profitPrice"===e.key?((0,r.wg)(),(0,r.iD)(r.HY,{key:4},[(0,r._)("strong",null,(0,f.zw)(e.title),1),(0,r.Wm)(u,{color:"#8BC34A",icon:"mdi-emoticon-cool"})],64)):(0,r.kq)("",!0),"profit"===e.key?((0,r.wg)(),(0,r.iD)(r.HY,{key:5},[(0,r._)("strong",null,(0,f.zw)(e.title),1),(0,r.Wm)(u,{color:"#00BCD4",icon:"mdi-currency-usd"})],64)):(0,r.kq)("",!0),"amount"===e.key?((0,r.wg)(),(0,r.iD)(r.HY,{key:6},[(0,r._)("strong",null,(0,f.zw)(e.title),1),(0,r.Wm)(u,{color:"#FFC107",icon:"mdi-database"})],64)):(0,r.kq)("",!0),"computer"===e.key?((0,r.wg)(),(0,r.iD)(r.HY,{key:7},[(0,r._)("strong",null,(0,f.zw)(e.title),1),(0,r.Wm)(u,{color:"#00BCD4",icon:"mdi-desktop-classic"})],64)):(0,r.kq)("",!0)])),bodyCell:(0,r.w5)((({column:e,record:t})=>["close"===e.key?((0,r.wg)(),(0,r.j4)(s,{key:0,style:{width:"130px"},onChange:e=>this.valueChange(e,t),value:t.valueClose,"onUpdate:value":e=>t.valueClose=e,min:5,max:1e3,step:5},null,8,["onChange","value","onUpdate:value"])):(0,r.kq)("",!0),"priceStart"===e.key?((0,r.wg)(),(0,r.j4)(s,{key:1,style:{width:"130px"},onChange:e=>this.valueChange(e,t),value:t.valuePriceStart,"onUpdate:value":e=>t.valuePriceStart=e,precision:t._precision,step:t.step},null,8,["onChange","value","onUpdate:value","precision","step"])):(0,r.kq)("",!0),"priceOver"===e.key?((0,r.wg)(),(0,r.j4)(s,{key:2,style:{width:"130px"},onChange:e=>this.valueChange(e,t),value:t.valuePriceOver,"onUpdate:value":e=>t.valuePriceOver=e,precision:t._precision,step:t.step},null,8,["onChange","value","onUpdate:value","precision","step"])):(0,r.kq)("",!0),"profitRatio"===e.key?((0,r.wg)(),(0,r.j4)(s,{key:3,style:{width:"80px"},onChange:e=>this.valueChange(e,t),value:t.profitRatio,"onUpdate:value":e=>t.profitRatio=e,min:7,max:100,step:1},null,8,["onChange","value","onUpdate:value"])):(0,r.kq)("",!0),"amount"===e.key?((0,r.wg)(),(0,r.iD)("strong",P,(0,f.zw)(t.amount),1)):(0,r.kq)("",!0),"profitPrice"===e.key?((0,r.wg)(),(0,r.iD)("strong",b,(0,f.zw)(t.profitPrice),1)):(0,r.kq)("",!0),"profit"===e.key?((0,r.wg)(),(0,r.iD)("strong",_,(0,f.zw)(t.profit),1)):(0,r.kq)("",!0),"computer"===e.key?((0,r.wg)(),(0,r.j4)(n,{key:7,onClick:e=>this.valueChange(e,t),density:"compact",color:"#00BCD4",style:{color:"#fff"},icon:"mdi-desktop-classic"},null,8,["onClick"])):(0,r.kq)("",!0)])),_:1},8,["columns","data-source"])])])),_:1})}var x=(0,r.aZ)({data:()=>({columns:[{title:"Type",dataIndex:"type",key:"type",width:100},{title:"Close",dataIndex:"close",key:"close",width:160},{title:"Price Start",dataIndex:"priceStart",key:"priceStart",width:160},{title:"Price Over",dataIndex:"priceOver",key:"priceOver",width:160},{title:"Profit Ratio",dataIndex:"profitRatio",key:"profitRatio",width:130},{title:"Amount",dataIndex:"amount",key:"amount",width:120},{title:"Profit Price",dataIndex:"profitPrice",key:"profitPrice",width:130},{title:"Profit",dataIndex:"profit",key:"profit",width:130},{title:"Computer",dataIndex:"computer",key:"computer"}],data:[{type:"XAU",_baseMultiple:1,_precision:2,step:1,valueClose:10,valuePriceStart:1990,valuePriceOver:1980,profitRatio:7,profitPrice:0,profit:0,amount:0},{type:"XAG",_baseMultiple:1,_precision:3,step:.001,valueClose:10,valuePriceStart:23.35,valuePriceOver:23.19,profitRatio:7,profitPrice:0,profit:0,amount:0},{type:"USOii",_baseMultiple:10,_precision:3,step:.001,valueClose:10,valuePriceStart:67.814,valuePriceOver:67.36,profitRatio:7,profitPrice:0,profit:0,amount:0},{type:"NA100",_baseMultiple:.1,_precision:2,step:.01,valueClose:10,valuePriceStart:14246.38,valuePriceOver:14206.88,profitRatio:7,profitPrice:0,profit:0,amount:0},{type:"spx500",_baseMultiple:1,_precision:2,step:.01,valueClose:10,valuePriceStart:4140.35,valuePriceOver:4130.35,profitRatio:7,profitPrice:0,profit:0,amount:0},{type:"us30",_baseMultiple:.1,_precision:2,step:.01,valueClose:10,valuePriceStart:33622.5,valuePriceOver:33569.5,profitRatio:7,profitPrice:0,profit:0,amount:0},{type:"us2000",_baseMultiple:1,_precision:2,step:.01,valueClose:10,valuePriceStart:1755.16,valuePriceOver:1746.16,profitRatio:7,profitPrice:0,profit:0,amount:0},{type:"ger30",_baseMultiple:.1,_precision:2,step:.01,valueClose:10,valuePriceStart:15799.68,valuePriceOver:15778.84,profitRatio:7,profitPrice:0,profit:0,amount:0},{type:"eustx50",_baseMultiple:.1,_precision:2,step:.01,valueClose:10,valuePriceStart:4319.95,valuePriceOver:4300.84,profitRatio:7,profitPrice:0,profit:0,amount:0},{type:"fra40",_baseMultiple:.1,_precision:2,step:.01,valueClose:10,valuePriceStart:7367.39,valuePriceOver:7372.77,profitRatio:7,profitPrice:0,profit:0,amount:0},{type:"uk100",_baseMultiple:.1,_precision:2,step:.01,valueClose:10,valuePriceStart:7755.6,valuePriceOver:7730.6,profitRatio:7,profitPrice:0,profit:0,amount:0},{type:"jpn225",_baseMultiple:.01,_precision:2,step:.01,valueClose:10,valuePriceStart:29093.3,valuePriceOver:29063.3,profitRatio:7,profitPrice:0,profit:0,amount:0},{type:"hkg33",_baseMultiple:.1,_precision:2,step:.01,valueClose:10,valuePriceStart:19430.8,valuePriceOver:19410.8,profitRatio:7,profitPrice:0,profit:0,amount:0}]}),created(){},methods:{valueChange(e,t){e&&this.computerFunc(t)},computerFunc(e){const{type:t}=e;this.computerXAU(t,e)},computerXAU(e,t){const{valuePriceStart:i,valuePriceOver:r,valueClose:o,profitRatio:a,_precision:l,_baseMultiple:u}=t,p=Math.abs(Number(i)-Number(r)),s=Number(o/p/u).toFixed(3),n=Number(p*a).toFixed(l);this.data.map((t=>{t.type==e&&(t.amount=s,t.profitPrice=(Number(i)>Number(r)?Number(i)+Number(n):Number(i)-Number(n)).toFixed(l),t.profit=Number(Number(n)*s*u).toFixed(0))}))}}});const S=(0,d.Z)(x,[["render",C]]);var O=S,R={components:{MoudlePage1:v,MoudlePage2:O},data:()=>({})};const U=(0,d.Z)(R,[["render",o]]);var W=U}}]);
//# sourceMappingURL=chunk.164.1685638284316.js.map