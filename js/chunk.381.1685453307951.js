"use strict";(self["webpackChunkcaptain"]=self["webpackChunkcaptain"]||[]).push([[381],{3381:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var o=a(3396);const i={class:"text-h6 text--primary"},l=(0,o._)("strong",{style:{color:"#FF3D00"}},"时间（分钟）",-1);function n(e,t,a,n,s,c){const r=(0,o.up)("v-icon"),u=(0,o.up)("v-text-field"),m=(0,o.up)("v-col"),d=(0,o.up)("v-switch"),h=(0,o.up)("v-row"),p=(0,o.up)("v-card-text"),f=(0,o.up)("v-card");return(0,o.wg)(),(0,o.j4)(f,{"max-width":"763"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{style:{position:"relative"}},{default:(0,o.w5)((()=>[(0,o._)("p",i,[(0,o.Wm)(r,{style:{"font-size":"18px","margin-bottom":"4px","margin-right":"6px"}},{default:(0,o.w5)((()=>[(0,o.Uk)("mdi-bell-badge")])),_:1}),(0,o.Uk)(" 1小时循环提醒 ")]),(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{cols:"4"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{modelValue:e.time,"onUpdate:modelValue":[t[0]||(t[0]=t=>e.time=t),c.changeNumber],density:"compact",variant:"solo-inverted",clearable:"",type:"number"},{label:(0,o.w5)((()=>[(0,o._)("span",null,[l,(0,o.Wm)(r,{icon:"mdi-align-horizontal-right"})])])),_:1},8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,o.Wm)(m,{cols:"4"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{modelValue:e.active,"onUpdate:modelValue":[t[1]||(t[1]=t=>e.active=t),c.changeSwitch],color:"success","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})}var s={components:{},data:()=>({time:55,showNo:!1,active:!1,intervalBox:void 0}),created(){this.active="true"==localStorage.getItem("bufferSwitch001"),this.time=Number(localStorage.getItem("bufferNumber001")||"55"),this.$nextTick((()=>{clearInterval(this.intervalBox),this.intervalBox=setInterval((()=>{const e=(new Date).getMinutes();e==Number(this.time)?!this.showNo&&this.active&&this.messageFunc():this.showNo=!1}),1e4)}))},methods:{messageFunc(){const e=(new Date).getHours();this.showNo=!0,Notification.requestPermission().then((function(t){"denied"!==t?"default"!==t?new Notification(`小时循环! ${e+1}`,{requireInteraction:!0,tag:1,renotify:!0,image:a(3361)}):console.log("用户未授权"):console.log("用户拒绝")}))},changeSwitch(e){localStorage.setItem("bufferSwitch001",e)},changeNumber(e){localStorage.setItem("bufferNumber001",e)}}},c=a(89);const r=(0,c.Z)(s,[["render",n]]);var u=r},3361:function(e,t,a){e.exports=a.p+"img/sailboat.515b848c.png"}}]);
//# sourceMappingURL=chunk.381.1685453307951.js.map