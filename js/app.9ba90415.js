(function(){"use strict";var n={9412:function(n,e,t){var r=t(9242),u=t(3396);const o={class:"keys"},i=(0,u._)("span",null,null,-1);function a(n,e,t,a,s,c){return(0,u.wg)(),(0,u.iD)("main",null,[(0,u.wy)((0,u._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=n=>s.curentnumber=n)},null,512),[[r.nr,s.curentnumber]]),(0,u._)("div",o,[(0,u._)("button",{class:"op__key",onClick:e[1]||(e[1]=n=>c.clearitem())},"C"),(0,u._)("button",{class:"op__key",onClick:e[2]||(e[2]=n=>c.pluseminusnumber())},"+/-"),(0,u._)("button",{class:"op__key",onClick:e[3]||(e[3]=n=>c.operationitem("%"))},"%"),(0,u._)("button",{class:"op__key",onClick:e[4]||(e[4]=n=>c.operationitem("/"))},"/"),(0,u._)("button",{class:"num__key",onClick:e[5]||(e[5]=n=>c.addnumber("7"))},"7"),(0,u._)("button",{class:"num__key",onClick:e[6]||(e[6]=n=>c.addnumber("8"))},"8"),(0,u._)("button",{class:"num__key",onClick:e[7]||(e[7]=n=>c.addnumber("9"))},"9"),(0,u._)("button",{class:"op__key",onClick:e[8]||(e[8]=n=>c.operationitem("*"))},"x"),(0,u._)("button",{class:"num__key",onClick:e[9]||(e[9]=n=>c.addnumber("4"))},"4"),(0,u._)("button",{class:"num__key",onClick:e[10]||(e[10]=n=>c.addnumber("5"))},"5"),(0,u._)("button",{class:"num__key",onClick:e[11]||(e[11]=n=>c.addnumber("6"))},"6"),(0,u._)("button",{class:"op__key",onClick:e[12]||(e[12]=n=>c.operationitem("-"))},"-"),(0,u._)("button",{class:"num__key",onClick:e[13]||(e[13]=n=>c.addnumber("1"))},"1"),(0,u._)("button",{class:"num__key",onClick:e[14]||(e[14]=n=>c.addnumber("2"))},"2"),(0,u._)("button",{class:"num__key",onClick:e[15]||(e[15]=n=>c.addnumber("3"))},"3"),(0,u._)("button",{class:"op__key",onClick:e[16]||(e[16]=n=>c.operationitem("+"))},"+"),i,(0,u._)("button",{class:"num__key",onClick:e[17]||(e[17]=n=>c.addnumber("0"))},"0"),(0,u._)("button",{class:"num__key",onClick:e[18]||(e[18]=n=>c.adddot())},"."),(0,u._)("button",{class:"eq__key",onClick:e[19]||(e[19]=n=>c.equal())},"=")])])}var s={name:"App",data(){return{curentnumber:"",prevnumber:"",dataoperation:""}},methods:{addnumber(n){0==this.curentnumber&&0==n||(this.curentnumber+=n)},adddot(){this.curentnumber.includes(".")||(this.curentnumber+=".")},operationitem(n){console.log(n),this.prevnumber=this.curentnumber,this.curentnumber="",this.dataoperation=n},clearitem(){this.curentnumber=""},pluseminusnumber(){parseFloat(this.curentnumber)>0?this.curentnumber="-"+this.curentnumber:this.curentnumber=this.curentnumber.substring(1)},equal(){switch(this.dataoperation){case"+":this.curentnumber=parseFloat(this.prevnumber)+parseFloat(this.curentnumber);break;case"-":this.curentnumber=parseFloat(this.prevnumber)-parseFloat(this.curentnumber);break;case"/":this.curentnumber=parseFloat(this.prevnumber)/parseFloat(this.curentnumber);break;case"*":this.curentnumber=parseFloat(this.prevnumber)*parseFloat(this.curentnumber);break;case"%":this.curentnumber=parseFloat(this.prevnumber)%parseFloat(this.curentnumber);break}this.curentnumber=this.curentnumber.toString()}}},c=t(89);const l=(0,c.Z)(s,[["render",a]]);var b=l;(0,r.ri)(b).mount("#app")}},e={};function t(r){var u=e[r];if(void 0!==u)return u.exports;var o=e[r]={exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,function(){var n=[];t.O=function(e,r,u,o){if(!r){var i=1/0;for(l=0;l<n.length;l++){r=n[l][0],u=n[l][1],o=n[l][2];for(var a=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(t.O).every((function(n){return t.O[n](r[s])}))?r.splice(s--,1):(a=!1,o<i&&(i=o));if(a){n.splice(l--,1);var c=u();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=n.length;l>0&&n[l-1][2]>o;l--)n[l]=n[l-1];n[l]=[r,u,o]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,r){var u,o,i=r[0],a=r[1],s=r[2],c=0;if(i.some((function(e){return 0!==n[e]}))){for(u in a)t.o(a,u)&&(t.m[u]=a[u]);if(s)var l=s(t)}for(e&&e(r);c<i.length;c++)o=i[c],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return t.O(l)},r=self["webpackChunkcalculator_pro"]=self["webpackChunkcalculator_pro"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(9412)}));r=t.O(r)})();
//# sourceMappingURL=app.9ba90415.js.map