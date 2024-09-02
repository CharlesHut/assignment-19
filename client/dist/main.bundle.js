(()=>{"use strict";var n={16:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"/* app shell CSS */\n:root {\n  --primary: #31a9e1;\n  --gray: #ececec;\n  --whitesmoke: #f5f5f5;\n  --dark: #222;\n  --monoaki: #272822;\n  --navbar-height: 50px;\n}\n\nbody {\n  margin: 0;\n  background-color: var(--monoaki);\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n}\n\nh1 {\n  font-size: 22px;\n}\n\n#navbar {\n  height: var(--navbar-height);\n  background-color: var(--primary);\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: white;\n  font-size: 22px;\n  font-weight: 550;\n  letter-spacing: 0.9px;\n}\n\n.navbar-brand img {\n  padding-top: 10px;\n}\n\n.loading-spinner {\n  animation-duration: 0.75s;\n  animation-iteration-count: infinite;\n  animation-name: rotate-forever;\n  animation-timing-function: linear;\n  height: 30px;\n  width: 30px;\n  border: 3px solid var(--primary);\n  border-right-color: transparent;\n  border-radius: 50%;\n}\n\n.loading-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: calc(100vh - var(--navbar-height));\n}\n\n#buttonInstall.hidden {\n  display: none;\n}\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.app-update {\n  display: none;\n  position: absolute;\n  right: 10px;\n}\n\n.app-update.show {\n  display: block;\n}\n\n.nav-btn {\n  margin: 25px;\n}\n\n.btn {\n  text-align: center;\n  display: inline-block;\n  padding: 0.5rem 1.2rem;\n  margin: 0;\n  text-decoration: none;\n  font-size: 1rem;\n  border-radius: 0.3rem;\n  border: 1px solid transparent;\n  outline: none;\n  color: #1a1a1a;\n  background-color: #aeaeae;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n\n.btn:hover {\n  background-color: #cecece;\n  cursor: pointer;\n}\n\n.btn.btn-squared {\n  border-radius: 0;\n}\n\n.btn.btn-sm {\n  font-size: 0.85rem;\n  padding: 0.3rem 0.9rem;\n}\n\n.btn.btn-lg {\n  font-size: 1.25rem;\n  padding: 0.8rem 1.4rem;\n}\n\n.btn.btn-block {\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.btn.btn-primary {\n  background-color: #2d3e50;\n  color: #d9e9e8;\n}\n\n.btn.btn-primary:hover {\n  background-color: #57779a;\n}\n\n.btn.btn-danger {\n  background-color: #e64c66;\n  color: #ffffff;\n}\n\n.btn.btn-danger:hover {\n  background-color: #ee8294;\n}\n\n.btn.btn-info {\n  background-color: #1bbc9b;\n  color: #ffffff;\n}\n\n.btn.btn-info:hover {\n  background-color: #31e1bd;\n}\n\n.btn.btn-light {\n  background-color: #d9e9e8;\n  color: #1a1a1a;\n}\n\n.btn.btn-light:hover {\n  background-color: #84b8b4;\n}\n\n.btn.btn-dark {\n  background-color: #1a1a1a;\n  color: #d9e9e8;\n}\n\n.btn.btn-dark:hover {\n  background-color: #5f5f5f;\n}\n\n.btn.btn-white {\n  background-color: #ffffff;\n  color: #1a1a1a;\n}\n\n.btn.btn-white:hover {\n  background-color: #cccccc;\n}\n\n.btn.btn-black {\n  background-color: #000000;\n  color: #ffffff;\n}\n\n.btn.btn-black:hover {\n  background-color: #666666;\n}\n\n.btn.btn-link {\n  background-color: #1b89bc;\n  color: #ffffff;\n}\n\n.btn.btn-link:hover {\n  background-color: #31a9e1;\n}\n\n@media only screen and (max-width: 600px) {\n  .nav-btn {\n    display: none;\n  }\n\n  .navbar-brand {\n    display: none;\n  }\n\n  #navbar {\n    justify-content: center;\n  }\n\n  h1 {\n    font-size: 18px;\n  }\n}\n",""]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],u=r.base?c[0]+r.base:c[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var f=t(l),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var v=o(p,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:v,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),u=0;u<a.length;u++){var d=t(a[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;try{self["workbox:window:6.5.4"]&&_()}catch(r){}function r(n,e){return new Promise((function(t){var r=new MessageChannel;r.port1.onmessage=function(n){t(n.data)},n.postMessage(e,[r.port2])}))}function o(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function a(n,e){var t;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=function(n,e){if(n){if("string"==typeof n)return o(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=n[Symbol.iterator]()).next.bind(t)}try{self["workbox:core:6.5.4"]&&_()}catch(r){}var i=function(){var n=this;this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))};function s(n,e){var t=location.href;return new URL(n,t).href===new URL(e,t).href}var c=function(n,e){this.type=n,Object.assign(this,e)};function u(n,e,t){return t?e?e(n):n:(n&&n.then||(n=Promise.resolve(n)),e?n.then(e):n)}function d(){}var l={type:"SKIP_WAITING"};function f(n,e){if(!e)return n&&n.then?n.then(d):Promise.resolve()}var p=function(n){var e,t;function o(e,t){var r,o;return void 0===t&&(t={}),(r=n.call(this)||this).nn={},r.tn=0,r.rn=new i,r.en=new i,r.on=new i,r.un=0,r.an=new Set,r.cn=function(){var n=r.fn,e=n.installing;r.tn>0||!s(e.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=e,n.removeEventListener("updatefound",r.cn)):(r.hn=e,r.an.add(e),r.rn.resolve(e)),++r.tn,e.addEventListener("statechange",r.ln)},r.ln=function(n){var e=r.fn,t=n.target,o=t.state,a=t===r.vn,i={sw:t,isExternal:a,originalEvent:n};!a&&r.mn&&(i.isUpdate=!0),r.dispatchEvent(new c(o,i)),"installed"===o?r.wn=self.setTimeout((function(){"installed"===o&&e.waiting===t&&r.dispatchEvent(new c("waiting",i))}),200):"activating"===o&&(clearTimeout(r.wn),a||r.en.resolve(t))},r.dn=function(n){var e=r.hn,t=e!==navigator.serviceWorker.controller;r.dispatchEvent(new c("controlling",{isExternal:t,originalEvent:n,sw:e,isUpdate:r.mn})),t||r.on.resolve(e)},r.gn=(o=function(n){var e=n.data,t=n.ports,o=n.source;return u(r.getSW(),(function(){r.an.has(o)&&r.dispatchEvent(new c("message",{data:e,originalEvent:n,ports:t,sw:o}))}))},function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];try{return Promise.resolve(o.apply(this,n))}catch(n){return Promise.reject(n)}}),r.sn=e,r.nn=t,navigator.serviceWorker.addEventListener("message",r.gn),r}t=n,(e=o).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var a,d=o.prototype;return d.register=function(n){var e=(void 0===n?{}:n).immediate,t=void 0!==e&&e;try{var r=this;return function(n,e){var t=n();return t&&t.then?t.then(e):e()}((function(){if(!t&&"complete"!==document.readyState)return f(new Promise((function(n){return window.addEventListener("load",n)})))}),(function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.yn=r.pn(),u(r.bn(),(function(n){r.fn=n,r.yn&&(r.hn=r.yn,r.en.resolve(r.yn),r.on.resolve(r.yn),r.yn.addEventListener("statechange",r.ln,{once:!0}));var e=r.fn.waiting;return e&&s(e.scriptURL,r.sn.toString())&&(r.hn=e,Promise.resolve().then((function(){r.dispatchEvent(new c("waiting",{sw:e,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.dn),r.fn}))}))}catch(n){return Promise.reject(n)}},d.update=function(){try{return this.fn?f(this.fn.update()):void 0}catch(n){return Promise.reject(n)}},d.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},d.messageSW=function(n){try{return u(this.getSW(),(function(e){return r(e,n)}))}catch(n){return Promise.reject(n)}},d.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&r(this.fn.waiting,l)},d.pn=function(){var n=navigator.serviceWorker.controller;return n&&s(n.scriptURL,this.sn.toString())?n:void 0},d.bn=function(){try{var n=this;return function(n,e){try{var t=n()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}((function(){return u(navigator.serviceWorker.register(n.sn,n.nn),(function(e){return n.un=performance.now(),e}))}),(function(n){throw n}))}catch(n){return Promise.reject(n)}},(a=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}(o.prototype,a),o}(function(){function n(){this.Pn=new Map}var e=n.prototype;return e.addEventListener=function(n,e){this.Sn(n).add(e)},e.removeEventListener=function(n,e){this.Sn(n).delete(e)},e.dispatchEvent=function(n){n.target=this;for(var e,t=a(this.Sn(n.type));!(e=t()).done;)(0,e.value)(n)},e.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}());const v=(n,e)=>e.some((e=>n instanceof e));let h,b;const g=new WeakMap,m=new WeakMap,y=new WeakMap,w=new WeakMap,k=new WeakMap;let x={get(n,e,t){if(n instanceof IDBTransaction){if("done"===e)return m.get(n);if("objectStoreNames"===e)return n.objectStoreNames||y.get(n);if("store"===e)return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return E(n[e])},set:(n,e,t)=>(n[e]=t,!0),has:(n,e)=>n instanceof IDBTransaction&&("done"===e||"store"===e)||e in n};function S(n){return"function"==typeof n?(e=n)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(b||(b=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...n){return e.apply(j(this),n),E(g.get(this))}:function(...n){return E(e.apply(j(this),n))}:function(n,...t){const r=e.call(j(this),n,...t);return y.set(r,n.sort?n.sort():[n]),E(r)}:(n instanceof IDBTransaction&&function(n){if(m.has(n))return;const e=new Promise(((e,t)=>{const r=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),r()},a=()=>{t(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)}));m.set(n,e)}(n),v(n,h||(h=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(n,x):n);var e}function E(n){if(n instanceof IDBRequest)return function(n){const e=new Promise(((e,t)=>{const r=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(E(n.result)),r()},a=()=>{t(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",a)}));return e.then((e=>{e instanceof IDBCursor&&g.set(e,n)})).catch((()=>{})),k.set(e,n),e}(n);if(w.has(n))return w.get(n);const e=S(n);return e!==n&&(w.set(n,e),k.set(e,n)),e}const j=n=>k.get(n);function I(n,e,{blocked:t,upgrade:r,blocking:o,terminated:a}={}){const i=indexedDB.open(n,e),s=E(i);return r&&i.addEventListener("upgradeneeded",(n=>{r(E(i.result),n.oldVersion,n.newVersion,E(i.transaction))})),t&&i.addEventListener("blocked",(()=>t())),s.then((n=>{a&&n.addEventListener("close",(()=>a())),o&&n.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),s}const L=["get","getKey","getAll","getAllKeys","count"],P=["put","add","delete","clear"],D=new Map;function M(n,e){if(!(n instanceof IDBDatabase)||e in n||"string"!=typeof e)return;if(D.get(e))return D.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,o=P.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!L.includes(t))return;const a=async function(n,...e){const a=this.transaction(n,o?"readwrite":"readonly");let i=a.store;return r&&(i=i.index(e.shift())),(await Promise.all([i[t](...e),o&&a.done]))[0]};return D.set(e,a),a}var B;B=x,x={...B,get:(n,e,t)=>M(n,e)||B.get(n,e,t),has:(n,e)=>!!M(n,e)||B.has(n,e)},(async()=>{I("jate",1,{upgrade(n){n.objectStoreNames.contains("jate")?console.log("jate database already exists"):(n.createObjectStore("jate",{keyPath:"id",autoIncrement:!0}),console.log("jate database created"))}})})();var T=t(72),A=t.n(T),C=t(825),W=t.n(C),O=t(659),U=t.n(O),N=t(56),R=t.n(N),z=t(540),q=t.n(z),F=t(113),H=t.n(F),K=t(16),V={};V.styleTagTransform=H(),V.setAttributes=R(),V.insert=U().bind(null,"head"),V.domAPI=W(),V.insertStyleElement=q(),A()(K.A,V),K.A&&K.A.locals&&K.A.locals;const G=document.querySelector("#main");G.innerHTML="",void 0===new class{constructor(){const n=localStorage.getItem("content");if("undefined"==typeof CodeMirror)throw new Error("CodeMirror is not loaded");this.editor=CodeMirror(document.querySelector("#main"),{value:"",mode:"javascript",theme:"monokai",lineNumbers:!0,lineWrapping:!0,autofocus:!0,indentUnit:2,tabSize:2}),(async()=>{console.log("GET from the database");const n=(await I("jate",1)).transaction("jate","readonly").objectStore("jate").getAll(),e=await n;return console.log("Result from the database:",e),e})().then((e=>{console.info("Loaded data from IndexedDB, injecting into editor"),this.editor.setValue(e||n||"\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n")})),this.editor.on("change",(()=>{localStorage.setItem("content",this.editor.getValue())})),this.editor.on("blur",(()=>{console.log("The editor has lost focus"),(async n=>{console.log("PUT to the database");const e=(await I("jate",1)).transaction("jate","readwrite").objectStore("jate").put({id:1,value:n}),t=await e;console.log("🚀 - data saved to the database",t)})(localStorage.getItem("content"))}))}}&&(()=>{const n=document.createElement("div");n.classList.add("spinner"),n.innerHTML='\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  ',G.appendChild(n)})(),"serviceWorker"in navigator?new p("/src-sw.js").register():console.error("Service workers are not supported in this browser.")})();