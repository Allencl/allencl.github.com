"use strict";(self["webpackChunkcaptain"]=self["webpackChunkcaptain"]||[]).push([[350],{3350:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var l=a(3396);const o={class:"text-h6 text--primary"},i=(0,l._)("strong",{style:{color:"#FF3D00"}},"时间（分钟）",-1);function r(e,t,a,r,n,u){const c=(0,l.up)("v-icon"),m=(0,l.up)("v-text-field"),d=(0,l.up)("v-col"),s=(0,l.up)("v-switch"),p=(0,l.up)("v-row"),f=(0,l.up)("v-card-text"),h=(0,l.up)("v-card");return(0,l.wg)(),(0,l.j4)(h,{"max-width":"763"},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{style:{position:"relative"}},{default:(0,l.w5)((()=>[(0,l._)("p",o,[(0,l.Wm)(c,{style:{"font-size":"18px","margin-bottom":"4px","margin-right":"6px"}},{default:(0,l.w5)((()=>[(0,l.Uk)("mdi-bell-badge")])),_:1}),(0,l.Uk)(" 1小时循环提醒 ")]),(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{cols:"4"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{modelValue:e.time,"onUpdate:modelValue":[t[0]||(t[0]=t=>e.time=t),u.changeNumber],density:"compact",variant:"solo-inverted",clearable:"",type:"number"},{label:(0,l.w5)((()=>[(0,l._)("span",null,[i,(0,l.Wm)(c,{icon:"mdi-align-horizontal-right"})])])),_:1},8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,l.Wm)(d,{cols:"4"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{modelValue:e.active,"onUpdate:modelValue":[t[1]||(t[1]=t=>e.active=t),u.changeSwitch],color:"success","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})}var n={components:{},data:()=>({time:55,showNo:!1,active:!1,intervalBox:void 0}),created(){this.active="true"==localStorage.getItem("bufferSwitch001"),this.time=Number(localStorage.getItem("bufferNumber001")||"55")},methods:{changeSwitch(e){localStorage.setItem("bufferSwitch001",String(e))},changeNumber(e){e&&localStorage.setItem("bufferNumber001",String(e.trim()))}}},u=a(89);const c=(0,u.Z)(n,[["render",r]]);var m=c}}]);
//# sourceMappingURL=chunk.350.1685638392544.js.map