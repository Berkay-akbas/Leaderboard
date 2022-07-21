"use strict";(self.webpackChunkleaderboard=self.webpackChunkleaderboard||[]).push([[179],{426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Mochiy+Pop+One&display=swap);"]),i.push([n.id,'*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  position: relative;\n  min-height: 100vh;\n  background: linear-gradient(-45deg, #cc461d, #74c726, #0a6383, #421475);\n  background-size: 400% 400%;\n  animation: gradient 15s ease infinite;\n  font-family: "Mochiy Pop One", sans-serif;\n}\n\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n.item:nth-child(even) {\n  background-color: rgb(221, 98, 98);\n}\n\n.item:nth-child(odd) {\n  background-color: rgb(212, 168, 118);\n}\n\n.title h1 {\n  font-size: 3rem;\n  padding: 2rem;\n  text-align: center;\n  color: azure;\n  -webkit-text-stroke: 1px red;\n}\n\n.main {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  padding: 2rem 9rem;\n  max-width: 75rem;\n  min-width: none;\n  margin: auto;\n}\n\n.user-input {\n  display: flex;\n  flex-direction: column;\n}\n\n.user-input * {\n  margin: 0.5rem;\n  padding: 0.5rem;\n}\n\n.recent {\n  display: flex;\n}\n\n.recent h2 {\n  font-size: 2rem;\n  color: azure;\n  -webkit-text-stroke: 1px red;\n}\n\nfooter {\n  background-color: yellow;\n  padding: 0.5rem;\n  justify-content: center;\n  position: absolute;\n  bottom: 0;\n  margin-top: 3rem;\n  width: 100%;\n  display: flex;\n}\n\n.fab {\n  color: black;\n  padding-left: 1rem;\n}\n\n.fab:hover {\n  transition: all 1s ease-in;\n  transform: rotate(360deg);\n}\n\n.user-input h2 {\n  font-size: 2rem;\n  padding-top: 0;\n  margin-top: 0;\n  color: azure;\n  -webkit-text-stroke: 1px red;\n}\n\n.score-list {\n  list-style: none;\n  border: 2px black solid;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.score-list li {\n  padding: 0.3rem;\n  color: rgb(43, 39, 39);\n}\n\n.refresh {\n  margin-left: 1rem;\n  border: 2px black solid;\n  background-color: blue;\n  width: 5rem;\n  border-radius: 15px;\n  box-shadow: 0 3px black;\n  cursor: pointer;\n  color: white;\n}\n\n.user-submit {\n  width: 5rem;\n  border: 2px black solid;\n  background-color: blueviolet;\n  margin-left: auto;\n  border-radius: 15px;\n  box-shadow: 0 3px black;\n  cursor: pointer;\n  color: white;\n}\n\n.user-input input {\n  border: 2px black solid;\n}\n\ninput::placeholder {\n  font-size: 1rem;\n  color: black;\n}\n\n.user-submit:hover {\n  background-color: yellow;\n  color: black;\n}\n.refresh:hover {\n  background-color: yellow;\n  color: black;\n}\n\n.user-submit:active {\n  background-color: #3e8e41;\n  box-shadow: 0 5px black;\n  transform: translateY(4px);\n}\n\n.refresh:active {\n  background-color: #3e8e41;\n  box-shadow: 0 5px #black;\n  transform: translateY(4px);\n}\n',""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=t(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var u=t(a[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},342:(n,e,t)=>{var r=t(379),o=t.n(r),a=t(795),i=t.n(a),s=t(569),c=t.n(s),l=t(565),u=t.n(l),d=t(216),p=t.n(d),m=t(589),f=t.n(m),h=t(426),b={};b.styleTagTransform=f(),b.setAttributes=u(),b.insert=c().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=p(),o()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals;class g{constructor(n,e){this.username=n,this.score=e}add(){const n=document.createElement("li");return n.classList.add("item"),n.innerHTML=`${this.username}: ${this.score}`,n}}const v=document.querySelector(".user-submit"),y=document.querySelector(".refresh"),x=document.querySelector(".user-name"),k=document.querySelector(".user-score"),w=document.querySelector(".score-list");v.addEventListener("click",(()=>{const n=new g(x.value,k.value).add();w.appendChild(n),(async(n,e)=>{try{const t=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/T4vDJJBOqBSz7SE2Xntv/scores/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:n,score:e})});await t.json()}catch(n){return null}})(x.value,k.value),x.value="",k.value=""}));const S=()=>{w.innerHTML="",(async()=>{try{const n=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/T4vDJJBOqBSz7SE2Xntv/scores/",{method:"GET"});return await n.json()}catch(n){return null}})().then((n=>{for(let e=0;e<n.result.length;e+=1){const t=document.createElement("li");t.classList.add("item"),t.innerHTML=`${n.result[e].user}: ${n.result[e].score}`,w.appendChild(t)}}))};y.addEventListener("click",S),window.onload=()=>{S()}}},n=>{n(n.s=342)}]);