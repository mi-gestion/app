var gm=Object.defineProperty;var ym=(n,e,t)=>e in n?gm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Il=(n,e,t)=>ym(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const bm="modulepreload",vm=function(n,e){return new URL(n,e).href},Tl={},O=function(e,t,s){let i=Promise.resolve();if(t&&t.length>0){let o=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),d=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));i=o(t.map(h=>{if(h=vm(h,s),h in Tl)return;Tl[h]=!0;const m=h.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(!!s)for(let L=l.length-1;L>=0;L--){const P=l[L];if(P.href===h&&(!m||P.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${g}`))return;const T=document.createElement("link");if(T.rel=m?"stylesheet":bm,m||(T.as="script"),T.crossOrigin="",T.href=h,d&&T.setAttribute("nonce",d),document.head.appendChild(T),m)return new Promise((L,P)=>{T.addEventListener("load",L),T.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})},Yn=(n,e,t)=>{const s=n[e];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((i,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e+(e.split("/").length!==t?". Note that variables only represent file names one level deep.":""))))})},Ve={string:{icon:"🔡",shortLabel:"Abc",longLabel:"Texto Corto",spanEV:6,spanP:6,color:"primary",settings:{width:!0,visibility:!0,api:!0,style:!0}},text:{icon:"💬",shortLabel:"Texto",longLabel:"Texto Largo",spanEV:12,spanP:12,color:"primary",settings:{width:!0,visibility:!0,api:!0,style:!0}},select:{icon:"❓",shortLabel:"select",longLabel:"Opciones",spanEV:6,spanP:6,color:"primary",settings:{width:!0,visibility:!0,style:!0}},number:{icon:"🔢",shortLabel:"Num",longLabel:"Campo Numérico",spanEV:4,spanP:4,color:"success",settings:{width:!0,visibility:!0,api:!0,calculation:!0,style:!0}},currency:{icon:"💲",shortLabel:"Moneda",longLabel:"Importe / Moneda",spanEV:4,spanP:4,color:"success",settings:{width:!0,visibility:!0,api:!0,calculation:!0,style:!0}},percentage:{icon:"%",shortLabel:"%",longLabel:"Porcentaje",spanEV:4,spanP:4,color:"success",settings:{width:!0,visibility:!0,api:!0,calculation:!0,style:!0}},date:{icon:"📆",shortLabel:"Fecha",longLabel:"Fecha",spanEV:4,spanP:4,color:"info",settings:{width:!0,visibility:!0,style:!0}},email:{icon:"📧",shortLabel:"Email",longLabel:"Correo Electrónico",spanEV:6,spanP:6,color:"info",settings:{width:!0,visibility:!0,style:!0}},url:{icon:"🔗",shortLabel:"Link",longLabel:"Enlace Web / URL",spanEV:6,spanP:6,color:"info",settings:{width:!0,visibility:!0,style:!0}},boolean:{icon:"🔘",shortLabel:"Check",longLabel:"Interruptor Si/No",spanEV:4,spanP:4,color:"warning",settings:{width:!0,visibility:!0,style:!0}},password:{icon:"🔑",shortLabel:"Pass",longLabel:"Contraseña",spanEV:6,spanP:6,color:"warning",settings:{width:!0,visibility:!0}},table:{icon:"📋",shortLabel:"Tabla",longLabel:"Tabla de Datos",spanEV:12,spanP:12,color:"light",settings:{width:!0,visibility:!0}},chart:{icon:"📊",shortLabel:"Gráfico",longLabel:"Gráfico Visual",spanEV:12,spanP:12,color:"light",settings:{width:!0,visibility:!0}},section:{icon:"🗂️",shortLabel:"Sección",longLabel:"Sección / División",spanEV:12,spanP:12,color:"dark",settings:{width:!0,visibility:!0,style:!0}}},_m=()=>{};var Al={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},wm=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],l=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ad={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,l=o?n[i+1]:0,c=i+2<n.length,d=c?n[i+2]:0,h=r>>2,m=(r&3)<<4|l>>4;let g=(l&15)<<2|d>>6,E=d&63;c||(E=64,o||(g=64)),s.push(t[h],t[m],t[g],t[E])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(od(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):wm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const m=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||l==null||d==null||m==null)throw new Em;const g=r<<2|l>>4;if(s.push(g),d!==64){const E=l<<4&240|d>>2;if(s.push(E),m!==64){const T=d<<6&192|m;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Em extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Im=function(n){const e=od(n);return ad.encodeByteArray(e,!0)},wi=function(n){return Im(n).replace(/\./g,"")},ld=function(n){try{return ad.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=()=>Tm().__FIREBASE_DEFAULTS__,Sm=()=>{if(typeof process>"u"||typeof Al>"u")return;const n=Al.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Cm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ld(n[1]);return e&&JSON.parse(e)},Gi=()=>{try{return _m()||Am()||Sm()||Cm()}catch(n){`${n}`;return}},cd=n=>{var e,t;return(t=(e=Gi())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Pm=n=>{const e=cd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},dd=()=>{var n;return(n=Gi())==null?void 0:n.config},ud=n=>{var e;return(e=Gi())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hd(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[wi(JSON.stringify(t)),wi(JSON.stringify(o)),""].join(".")}const cn={};function Lm(){const n={prod:[],emulator:[]};for(const e of Object.keys(cn))cn[e]?n.emulator.push(e):n.prod.push(e);return n}function km(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Sl=!1;function pd(n,e){if(typeof window>"u"||typeof document>"u"||!ks(window.location.host)||cn[n]===e||cn[n]||Sl)return;cn[n]=e;function t(g){return`__firebase__banner__${g}`}const s="__firebase__banner",r=Lm().prod.length>0;function o(){const g=document.getElementById(s);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,E){g.setAttribute("width","24"),g.setAttribute("id",E),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function d(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Sl=!0,o()},g}function h(g,E){g.setAttribute("id",E),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=km(s),E=t("text"),T=document.getElementById(E)||document.createElement("span"),L=t("learnmore"),P=document.getElementById(L)||document.createElement("a"),M=t("preprendIcon"),F=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const B=g.element;l(B),h(P,L);const ee=d();c(F,M),B.append(F,T,P,ee),document.body.appendChild(B)}r?(T.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,T.innerText="Preview backend running in this workspace."),T.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Vm(){var e;const n=(e=Gi())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Mm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Om(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Nm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $m(){const n=Ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Fm(){return!Vm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bm(){try{return typeof indexedDB=="object"}catch{return!1}}function Um(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm="FirebaseError";class ut extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=jm,Object.setPrototypeOf(this,ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,In.prototype.create)}}class In{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Hm(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ut(i,l,s)}}function Hm(n,e){return n.replace(qm,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const qm=/\{\$([^}]+)}/g;function zm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Xt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Cl(r)&&Cl(o)){if(!Xt(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Cl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function sn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function nn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Gm(n,e){const t=new Wm(n,e);return t.subscribe.bind(t)}class Wm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Km(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Fr),i.error===void 0&&(i.error=Fr),i.complete===void 0&&(i.complete=Fr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Km(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Fr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(n){return n&&n._delegate?n._delegate:n}class Zt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new xm;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ym(e))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qt){return this.instances.has(e)}getOptions(e=Qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Jm(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Qt){return this.component?this.component.multipleInstances?e:Qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jm(n){return n===Qt?void 0:n}function Ym(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Qm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const Zm={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},ef=K.INFO,tf={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},sf=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=tf[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ro{constructor(e){this.name=e,this._logLevel=ef,this._logHandler=sf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const nf=(n,e)=>e.some(t=>n instanceof t);let Pl,xl;function rf(){return Pl||(Pl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function of(){return xl||(xl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const md=new WeakMap,Xr=new WeakMap,fd=new WeakMap,Br=new WeakMap,Lo=new WeakMap;function af(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(xt(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&md.set(t,n)}).catch(()=>{}),Lo.set(e,n),e}function lf(n){if(Xr.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Xr.set(n,e)}let Zr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||fd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function cf(n){Zr=n(Zr)}function df(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Ur(this),e,...t);return fd.set(s,e.sort?e.sort():[e]),xt(s)}:of().includes(n)?function(...e){return n.apply(Ur(this),e),xt(md.get(this))}:function(...e){return xt(n.apply(Ur(this),e))}}function uf(n){return typeof n=="function"?df(n):(n instanceof IDBTransaction&&lf(n),nf(n,rf())?new Proxy(n,Zr):n)}function xt(n){if(n instanceof IDBRequest)return af(n);if(Br.has(n))return Br.get(n);const e=uf(n);return e!==n&&(Br.set(n,e),Lo.set(e,n)),e}const Ur=n=>Lo.get(n);function hf(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),l=xt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(xt(o.result),c.oldVersion,c.newVersion,xt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const pf=["get","getKey","getAll","getAllKeys","count"],mf=["put","add","delete","clear"],jr=new Map;function Rl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(jr.get(e))return jr.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=mf.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||pf.includes(t)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let d=c.store;return s&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),i&&c.done]))[0]};return jr.set(e,r),r}cf(n=>({...n,get:(e,t,s)=>Rl(e,t)||n.get(e,t,s),has:(e,t)=>!!Rl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(gf(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function gf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const eo="@firebase/app",Ll="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new Ro("@firebase/app"),yf="@firebase/app-compat",bf="@firebase/analytics-compat",vf="@firebase/analytics",_f="@firebase/app-check-compat",wf="@firebase/app-check",Ef="@firebase/auth",If="@firebase/auth-compat",Tf="@firebase/database",Af="@firebase/data-connect",Sf="@firebase/database-compat",Cf="@firebase/functions",Pf="@firebase/functions-compat",xf="@firebase/installations",Rf="@firebase/installations-compat",Lf="@firebase/messaging",kf="@firebase/messaging-compat",Df="@firebase/performance",Vf="@firebase/performance-compat",Mf="@firebase/remote-config",Of="@firebase/remote-config-compat",Nf="@firebase/storage",$f="@firebase/storage-compat",Ff="@firebase/firestore",Bf="@firebase/ai",Uf="@firebase/firestore-compat",jf="firebase",Hf="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to="[DEFAULT]",qf={[eo]:"fire-core",[yf]:"fire-core-compat",[vf]:"fire-analytics",[bf]:"fire-analytics-compat",[wf]:"fire-app-check",[_f]:"fire-app-check-compat",[Ef]:"fire-auth",[If]:"fire-auth-compat",[Tf]:"fire-rtdb",[Af]:"fire-data-connect",[Sf]:"fire-rtdb-compat",[Cf]:"fire-fn",[Pf]:"fire-fn-compat",[xf]:"fire-iid",[Rf]:"fire-iid-compat",[Lf]:"fire-fcm",[kf]:"fire-fcm-compat",[Df]:"fire-perf",[Vf]:"fire-perf-compat",[Mf]:"fire-rc",[Of]:"fire-rc-compat",[Nf]:"fire-gcs",[$f]:"fire-gcs-compat",[Ff]:"fire-fst",[Uf]:"fire-fst-compat",[Bf]:"fire-vertex","fire-js":"fire-js",[jf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new Map,zf=new Map,so=new Map;function kl(n,e){try{n.container.addComponent(e)}catch(t){at.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ts(n){const e=n.name;if(so.has(e))return at.debug(`There were multiple attempts to register component ${e}.`),!1;so.set(e,n);for(const t of Ei.values())kl(t,n);for(const t of zf.values())kl(t,n);return!0}function ko(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $e(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rt=new In("app","Firebase",Gf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=Hf;function gd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:to,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw Rt.create("bad-app-name",{appName:String(i)});if(t||(t=dd()),!t)throw Rt.create("no-options");const r=Ei.get(i);if(r){if(Xt(t,r.options)&&Xt(s,r.config))return r;throw Rt.create("duplicate-app",{appName:i})}const o=new Xm(i);for(const c of so.values())o.addComponent(c);const l=new Wf(t,s,o);return Ei.set(i,l),l}function yd(n=to){const e=Ei.get(n);if(!e&&n===to&&dd())return gd();if(!e)throw Rt.create("no-app",{appName:n});return e}function Lt(n,e,t){let s=qf[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),at.warn(o.join(" "));return}Ts(new Zt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf="firebase-heartbeat-database",Qf=1,fn="firebase-heartbeat-store";let Hr=null;function bd(){return Hr||(Hr=hf(Kf,Qf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(fn)}catch(t){console.warn(t)}}}}).catch(n=>{throw Rt.create("idb-open",{originalErrorMessage:n.message})})),Hr}async function Jf(n){try{const t=(await bd()).transaction(fn),s=await t.objectStore(fn).get(vd(n));return await t.done,s}catch(e){if(e instanceof ut)at.warn(e.message);else{const t=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});at.warn(t.message)}}}async function Dl(n,e){try{const s=(await bd()).transaction(fn,"readwrite");await s.objectStore(fn).put(e,vd(n)),await s.done}catch(t){if(t instanceof ut)at.warn(t.message);else{const s=Rt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});at.warn(s.message)}}}function vd(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf=1024,Xf=30;class Zf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new tg(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Vl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>Xf){const o=sg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){at.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Vl(),{heartbeatsToSend:s,unsentEntries:i}=eg(this._heartbeatsCache.heartbeats),r=wi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return at.warn(t),""}}}function Vl(){return new Date().toISOString().substring(0,10)}function eg(n,e=Yf){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ml(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ml(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class tg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bm()?Um().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Jf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Dl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Dl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ml(n){return wi(JSON.stringify({version:2,heartbeats:n})).length}function sg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(n){Ts(new Zt("platform-logger",e=>new ff(e),"PRIVATE")),Ts(new Zt("heartbeat",e=>new Zf(e),"PRIVATE")),Lt(eo,Ll,n),Lt(eo,Ll,"esm2020"),Lt("fire-js","")}ng("");var Ol=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kt,_d;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function b(){}b.prototype=y.prototype,_.F=y.prototype,_.prototype=new b,_.prototype.constructor=_,_.D=function(I,w,S){for(var v=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)v[Re-2]=arguments[Re];return y.prototype[w].apply(I,v)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,y,b){b||(b=0);const I=Array(16);if(typeof y=="string")for(var w=0;w<16;++w)I[w]=y.charCodeAt(b++)|y.charCodeAt(b++)<<8|y.charCodeAt(b++)<<16|y.charCodeAt(b++)<<24;else for(w=0;w<16;++w)I[w]=y[b++]|y[b++]<<8|y[b++]<<16|y[b++]<<24;y=_.g[0],b=_.g[1],w=_.g[2];let S=_.g[3],v;v=y+(S^b&(w^S))+I[0]+3614090360&4294967295,y=b+(v<<7&4294967295|v>>>25),v=S+(w^y&(b^w))+I[1]+3905402710&4294967295,S=y+(v<<12&4294967295|v>>>20),v=w+(b^S&(y^b))+I[2]+606105819&4294967295,w=S+(v<<17&4294967295|v>>>15),v=b+(y^w&(S^y))+I[3]+3250441966&4294967295,b=w+(v<<22&4294967295|v>>>10),v=y+(S^b&(w^S))+I[4]+4118548399&4294967295,y=b+(v<<7&4294967295|v>>>25),v=S+(w^y&(b^w))+I[5]+1200080426&4294967295,S=y+(v<<12&4294967295|v>>>20),v=w+(b^S&(y^b))+I[6]+2821735955&4294967295,w=S+(v<<17&4294967295|v>>>15),v=b+(y^w&(S^y))+I[7]+4249261313&4294967295,b=w+(v<<22&4294967295|v>>>10),v=y+(S^b&(w^S))+I[8]+1770035416&4294967295,y=b+(v<<7&4294967295|v>>>25),v=S+(w^y&(b^w))+I[9]+2336552879&4294967295,S=y+(v<<12&4294967295|v>>>20),v=w+(b^S&(y^b))+I[10]+4294925233&4294967295,w=S+(v<<17&4294967295|v>>>15),v=b+(y^w&(S^y))+I[11]+2304563134&4294967295,b=w+(v<<22&4294967295|v>>>10),v=y+(S^b&(w^S))+I[12]+1804603682&4294967295,y=b+(v<<7&4294967295|v>>>25),v=S+(w^y&(b^w))+I[13]+4254626195&4294967295,S=y+(v<<12&4294967295|v>>>20),v=w+(b^S&(y^b))+I[14]+2792965006&4294967295,w=S+(v<<17&4294967295|v>>>15),v=b+(y^w&(S^y))+I[15]+1236535329&4294967295,b=w+(v<<22&4294967295|v>>>10),v=y+(w^S&(b^w))+I[1]+4129170786&4294967295,y=b+(v<<5&4294967295|v>>>27),v=S+(b^w&(y^b))+I[6]+3225465664&4294967295,S=y+(v<<9&4294967295|v>>>23),v=w+(y^b&(S^y))+I[11]+643717713&4294967295,w=S+(v<<14&4294967295|v>>>18),v=b+(S^y&(w^S))+I[0]+3921069994&4294967295,b=w+(v<<20&4294967295|v>>>12),v=y+(w^S&(b^w))+I[5]+3593408605&4294967295,y=b+(v<<5&4294967295|v>>>27),v=S+(b^w&(y^b))+I[10]+38016083&4294967295,S=y+(v<<9&4294967295|v>>>23),v=w+(y^b&(S^y))+I[15]+3634488961&4294967295,w=S+(v<<14&4294967295|v>>>18),v=b+(S^y&(w^S))+I[4]+3889429448&4294967295,b=w+(v<<20&4294967295|v>>>12),v=y+(w^S&(b^w))+I[9]+568446438&4294967295,y=b+(v<<5&4294967295|v>>>27),v=S+(b^w&(y^b))+I[14]+3275163606&4294967295,S=y+(v<<9&4294967295|v>>>23),v=w+(y^b&(S^y))+I[3]+4107603335&4294967295,w=S+(v<<14&4294967295|v>>>18),v=b+(S^y&(w^S))+I[8]+1163531501&4294967295,b=w+(v<<20&4294967295|v>>>12),v=y+(w^S&(b^w))+I[13]+2850285829&4294967295,y=b+(v<<5&4294967295|v>>>27),v=S+(b^w&(y^b))+I[2]+4243563512&4294967295,S=y+(v<<9&4294967295|v>>>23),v=w+(y^b&(S^y))+I[7]+1735328473&4294967295,w=S+(v<<14&4294967295|v>>>18),v=b+(S^y&(w^S))+I[12]+2368359562&4294967295,b=w+(v<<20&4294967295|v>>>12),v=y+(b^w^S)+I[5]+4294588738&4294967295,y=b+(v<<4&4294967295|v>>>28),v=S+(y^b^w)+I[8]+2272392833&4294967295,S=y+(v<<11&4294967295|v>>>21),v=w+(S^y^b)+I[11]+1839030562&4294967295,w=S+(v<<16&4294967295|v>>>16),v=b+(w^S^y)+I[14]+4259657740&4294967295,b=w+(v<<23&4294967295|v>>>9),v=y+(b^w^S)+I[1]+2763975236&4294967295,y=b+(v<<4&4294967295|v>>>28),v=S+(y^b^w)+I[4]+1272893353&4294967295,S=y+(v<<11&4294967295|v>>>21),v=w+(S^y^b)+I[7]+4139469664&4294967295,w=S+(v<<16&4294967295|v>>>16),v=b+(w^S^y)+I[10]+3200236656&4294967295,b=w+(v<<23&4294967295|v>>>9),v=y+(b^w^S)+I[13]+681279174&4294967295,y=b+(v<<4&4294967295|v>>>28),v=S+(y^b^w)+I[0]+3936430074&4294967295,S=y+(v<<11&4294967295|v>>>21),v=w+(S^y^b)+I[3]+3572445317&4294967295,w=S+(v<<16&4294967295|v>>>16),v=b+(w^S^y)+I[6]+76029189&4294967295,b=w+(v<<23&4294967295|v>>>9),v=y+(b^w^S)+I[9]+3654602809&4294967295,y=b+(v<<4&4294967295|v>>>28),v=S+(y^b^w)+I[12]+3873151461&4294967295,S=y+(v<<11&4294967295|v>>>21),v=w+(S^y^b)+I[15]+530742520&4294967295,w=S+(v<<16&4294967295|v>>>16),v=b+(w^S^y)+I[2]+3299628645&4294967295,b=w+(v<<23&4294967295|v>>>9),v=y+(w^(b|~S))+I[0]+4096336452&4294967295,y=b+(v<<6&4294967295|v>>>26),v=S+(b^(y|~w))+I[7]+1126891415&4294967295,S=y+(v<<10&4294967295|v>>>22),v=w+(y^(S|~b))+I[14]+2878612391&4294967295,w=S+(v<<15&4294967295|v>>>17),v=b+(S^(w|~y))+I[5]+4237533241&4294967295,b=w+(v<<21&4294967295|v>>>11),v=y+(w^(b|~S))+I[12]+1700485571&4294967295,y=b+(v<<6&4294967295|v>>>26),v=S+(b^(y|~w))+I[3]+2399980690&4294967295,S=y+(v<<10&4294967295|v>>>22),v=w+(y^(S|~b))+I[10]+4293915773&4294967295,w=S+(v<<15&4294967295|v>>>17),v=b+(S^(w|~y))+I[1]+2240044497&4294967295,b=w+(v<<21&4294967295|v>>>11),v=y+(w^(b|~S))+I[8]+1873313359&4294967295,y=b+(v<<6&4294967295|v>>>26),v=S+(b^(y|~w))+I[15]+4264355552&4294967295,S=y+(v<<10&4294967295|v>>>22),v=w+(y^(S|~b))+I[6]+2734768916&4294967295,w=S+(v<<15&4294967295|v>>>17),v=b+(S^(w|~y))+I[13]+1309151649&4294967295,b=w+(v<<21&4294967295|v>>>11),v=y+(w^(b|~S))+I[4]+4149444226&4294967295,y=b+(v<<6&4294967295|v>>>26),v=S+(b^(y|~w))+I[11]+3174756917&4294967295,S=y+(v<<10&4294967295|v>>>22),v=w+(y^(S|~b))+I[2]+718787259&4294967295,w=S+(v<<15&4294967295|v>>>17),v=b+(S^(w|~y))+I[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(w+(v<<21&4294967295|v>>>11))&4294967295,_.g[2]=_.g[2]+w&4294967295,_.g[3]=_.g[3]+S&4294967295}s.prototype.v=function(_,y){y===void 0&&(y=_.length);const b=y-this.blockSize,I=this.C;let w=this.h,S=0;for(;S<y;){if(w==0)for(;S<=b;)i(this,_,S),S+=this.blockSize;if(typeof _=="string"){for(;S<y;)if(I[w++]=_.charCodeAt(S++),w==this.blockSize){i(this,I),w=0;break}}else for(;S<y;)if(I[w++]=_[S++],w==this.blockSize){i(this,I),w=0;break}}this.h=w,this.o+=y},s.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;y=this.o*8;for(var b=_.length-8;b<_.length;++b)_[b]=y&255,y/=256;for(this.v(_),_=Array(16),y=0,b=0;b<4;++b)for(let I=0;I<32;I+=8)_[y++]=this.g[b]>>>I&255;return _};function r(_,y){var b=l;return Object.prototype.hasOwnProperty.call(b,_)?b[_]:b[_]=y(_)}function o(_,y){this.h=y;const b=[];let I=!0;for(let w=_.length-1;w>=0;w--){const S=_[w]|0;I&&S==y||(b[w]=S,I=!1)}this.g=b}var l={};function c(_){return-128<=_&&_<128?r(_,function(y){return new o([y|0],y<0?-1:0)}):new o([_|0],_<0?-1:0)}function d(_){if(isNaN(_)||!isFinite(_))return m;if(_<0)return P(d(-_));const y=[];let b=1;for(let I=0;_>=b;I++)y[I]=_/b|0,b*=4294967296;return new o(y,0)}function h(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return P(h(_.substring(1),y));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const b=d(Math.pow(y,8));let I=m;for(let S=0;S<_.length;S+=8){var w=Math.min(8,_.length-S);const v=parseInt(_.substring(S,S+w),y);w<8?(w=d(Math.pow(y,w)),I=I.j(w).add(d(v))):(I=I.j(b),I=I.add(d(v)))}return I}var m=c(0),g=c(1),E=c(16777216);n=o.prototype,n.m=function(){if(L(this))return-P(this).m();let _=0,y=1;for(let b=0;b<this.g.length;b++){const I=this.i(b);_+=(I>=0?I:4294967296+I)*y,y*=4294967296}return _},n.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(T(this))return"0";if(L(this))return"-"+P(this).toString(_);const y=d(Math.pow(_,6));var b=this;let I="";for(;;){const w=ee(b,y).g;b=M(b,w.j(y));let S=((b.g.length>0?b.g[0]:b.h)>>>0).toString(_);if(b=w,T(b))return S+I;for(;S.length<6;)S="0"+S;I=S+I}},n.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function T(_){if(_.h!=0)return!1;for(let y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function L(_){return _.h==-1}n.l=function(_){return _=M(this,_),L(_)?-1:T(_)?0:1};function P(_){const y=_.g.length,b=[];for(let I=0;I<y;I++)b[I]=~_.g[I];return new o(b,~_.h).add(g)}n.abs=function(){return L(this)?P(this):this},n.add=function(_){const y=Math.max(this.g.length,_.g.length),b=[];let I=0;for(let w=0;w<=y;w++){let S=I+(this.i(w)&65535)+(_.i(w)&65535),v=(S>>>16)+(this.i(w)>>>16)+(_.i(w)>>>16);I=v>>>16,S&=65535,v&=65535,b[w]=v<<16|S}return new o(b,b[b.length-1]&-2147483648?-1:0)};function M(_,y){return _.add(P(y))}n.j=function(_){if(T(this)||T(_))return m;if(L(this))return L(_)?P(this).j(P(_)):P(P(this).j(_));if(L(_))return P(this.j(P(_)));if(this.l(E)<0&&_.l(E)<0)return d(this.m()*_.m());const y=this.g.length+_.g.length,b=[];for(var I=0;I<2*y;I++)b[I]=0;for(I=0;I<this.g.length;I++)for(let w=0;w<_.g.length;w++){const S=this.i(I)>>>16,v=this.i(I)&65535,Re=_.i(w)>>>16,Ht=_.i(w)&65535;b[2*I+2*w]+=v*Ht,F(b,2*I+2*w),b[2*I+2*w+1]+=S*Ht,F(b,2*I+2*w+1),b[2*I+2*w+1]+=v*Re,F(b,2*I+2*w+1),b[2*I+2*w+2]+=S*Re,F(b,2*I+2*w+2)}for(_=0;_<y;_++)b[_]=b[2*_+1]<<16|b[2*_];for(_=y;_<2*y;_++)b[_]=0;return new o(b,0)};function F(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function B(_,y){this.g=_,this.h=y}function ee(_,y){if(T(y))throw Error("division by zero");if(T(_))return new B(m,m);if(L(_))return y=ee(P(_),y),new B(P(y.g),P(y.h));if(L(y))return y=ee(_,P(y)),new B(P(y.g),y.h);if(_.g.length>30){if(L(_)||L(y))throw Error("slowDivide_ only works with positive integers.");for(var b=g,I=y;I.l(_)<=0;)b=re(b),I=re(I);var w=X(b,1),S=X(I,1);for(I=X(I,2),b=X(b,2);!T(I);){var v=S.add(I);v.l(_)<=0&&(w=w.add(b),S=v),I=X(I,1),b=X(b,1)}return y=M(_,w.j(y)),new B(w,y)}for(w=m;_.l(y)>=0;){for(b=Math.max(1,Math.floor(_.m()/y.m())),I=Math.ceil(Math.log(b)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),S=d(b),v=S.j(y);L(v)||v.l(_)>0;)b-=I,S=d(b),v=S.j(y);T(S)&&(S=g),w=w.add(S),_=M(_,v)}return new B(w,_)}n.B=function(_){return ee(this,_).h},n.and=function(_){const y=Math.max(this.g.length,_.g.length),b=[];for(let I=0;I<y;I++)b[I]=this.i(I)&_.i(I);return new o(b,this.h&_.h)},n.or=function(_){const y=Math.max(this.g.length,_.g.length),b=[];for(let I=0;I<y;I++)b[I]=this.i(I)|_.i(I);return new o(b,this.h|_.h)},n.xor=function(_){const y=Math.max(this.g.length,_.g.length),b=[];for(let I=0;I<y;I++)b[I]=this.i(I)^_.i(I);return new o(b,this.h^_.h)};function re(_){const y=_.g.length+1,b=[];for(let I=0;I<y;I++)b[I]=_.i(I)<<1|_.i(I-1)>>>31;return new o(b,_.h)}function X(_,y){const b=y>>5;y%=32;const I=_.g.length-b,w=[];for(let S=0;S<I;S++)w[S]=y>0?_.i(S+b)>>>y|_.i(S+b+1)<<32-y:_.i(S+b);return new o(w,_.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,_d=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=h,kt=o}).apply(typeof Ol<"u"?Ol:typeof self<"u"?self:typeof window<"u"?window:{});var Xn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wd,rn,Ed,oi,no,Id,Td,Ad;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xn=="object"&&Xn];for(var u=0;u<a.length;++u){var p=a[u];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=t(this);function i(a,u){if(u)e:{var p=s;a=a.split(".");for(var f=0;f<a.length-1;f++){var A=a[f];if(!(A in p))break e;p=p[A]}a=a[a.length-1],f=p[a],u=u(f),u!=f&&u!=null&&e(p,a,{configurable:!0,writable:!0,value:u})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(u){var p=[],f;for(f in u)Object.prototype.hasOwnProperty.call(u,f)&&p.push([f,u[f]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function l(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function c(a,u,p){return a.call.apply(a.bind,arguments)}function d(a,u,p){return d=c,d.apply(null,arguments)}function h(a,u){var p=Array.prototype.slice.call(arguments,1);return function(){var f=p.slice();return f.push.apply(f,arguments),a.apply(this,f)}}function m(a,u){function p(){}p.prototype=u.prototype,a.Z=u.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(f,A,C){for(var k=Array(arguments.length-2),W=2;W<arguments.length;W++)k[W-2]=arguments[W];return u.prototype[A].apply(f,k)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function E(a){const u=a.length;if(u>0){const p=Array(u);for(let f=0;f<u;f++)p[f]=a[f];return p}return[]}function T(a,u){for(let f=1;f<arguments.length;f++){const A=arguments[f];var p=typeof A;if(p=p!="object"?p:A?Array.isArray(A)?"array":p:"null",p=="array"||p=="object"&&typeof A.length=="number"){p=a.length||0;const C=A.length||0;a.length=p+C;for(let k=0;k<C;k++)a[p+k]=A[k]}else a.push(A)}}class L{constructor(u,p){this.i=u,this.j=p,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function P(a){o.setTimeout(()=>{throw a},0)}function M(){var a=_;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class F{constructor(){this.h=this.g=null}add(u,p){const f=B.get();f.set(u,p),this.h?this.h.next=f:this.g=f,this.h=f}}var B=new L(()=>new ee,a=>a.reset());class ee{constructor(){this.next=this.g=this.h=null}set(u,p){this.h=u,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let re,X=!1,_=new F,y=()=>{const a=Promise.resolve(void 0);re=()=>{a.then(b)}};function b(){for(var a;a=M();){try{a.h.call(a.g)}catch(p){P(p)}var u=B;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}X=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,u),o.removeEventListener("test",p,u)}catch{}return a})();function v(a){return/^[\s\xa0]*$/.test(a)}function Re(a,u){w.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}m(Re,w),Re.prototype.init=function(a,u){const p=this.type=a.type,f=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(p=="mouseover"?u=a.fromElement:p=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Re.Z.h.call(this)},Re.prototype.h=function(){Re.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ht="closure_listenable_"+(Math.random()*1e6|0),$p=0;function Fp(a,u,p,f,A){this.listener=a,this.proxy=null,this.src=u,this.type=p,this.capture=!!f,this.ha=A,this.key=++$p,this.da=this.fa=!1}function On(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Nn(a,u,p){for(const f in a)u.call(p,a[f],f,a)}function Bp(a,u){for(const p in a)u.call(void 0,a[p],p,a)}function Ea(a){const u={};for(const p in a)u[p]=a[p];return u}const Ia="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ta(a,u){let p,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(p in f)a[p]=f[p];for(let C=0;C<Ia.length;C++)p=Ia[C],Object.prototype.hasOwnProperty.call(f,p)&&(a[p]=f[p])}}function $n(a){this.src=a,this.g={},this.h=0}$n.prototype.add=function(a,u,p,f,A){const C=a.toString();a=this.g[C],a||(a=this.g[C]=[],this.h++);const k=gr(a,u,f,A);return k>-1?(u=a[k],p||(u.fa=!1)):(u=new Fp(u,this.src,C,!!f,A),u.fa=p,a.push(u)),u};function fr(a,u){const p=u.type;if(p in a.g){var f=a.g[p],A=Array.prototype.indexOf.call(f,u,void 0),C;(C=A>=0)&&Array.prototype.splice.call(f,A,1),C&&(On(u),a.g[p].length==0&&(delete a.g[p],a.h--))}}function gr(a,u,p,f){for(let A=0;A<a.length;++A){const C=a[A];if(!C.da&&C.listener==u&&C.capture==!!p&&C.ha==f)return A}return-1}var yr="closure_lm_"+(Math.random()*1e6|0),br={};function Aa(a,u,p,f,A){if(Array.isArray(u)){for(let C=0;C<u.length;C++)Aa(a,u[C],p,f,A);return null}return p=Pa(p),a&&a[Ht]?a.J(u,p,l(f)?!!f.capture:!1,A):Up(a,u,p,!1,f,A)}function Up(a,u,p,f,A,C){if(!u)throw Error("Invalid event type");const k=l(A)?!!A.capture:!!A;let W=_r(a);if(W||(a[yr]=W=new $n(a)),p=W.add(u,p,f,k,C),p.proxy)return p;if(f=jp(),p.proxy=f,f.src=a,f.listener=p,a.addEventListener)S||(A=k),A===void 0&&(A=!1),a.addEventListener(u.toString(),f,A);else if(a.attachEvent)a.attachEvent(Ca(u.toString()),f);else if(a.addListener&&a.removeListener)a.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return p}function jp(){function a(p){return u.call(a.src,a.listener,p)}const u=Hp;return a}function Sa(a,u,p,f,A){if(Array.isArray(u))for(var C=0;C<u.length;C++)Sa(a,u[C],p,f,A);else f=l(f)?!!f.capture:!!f,p=Pa(p),a&&a[Ht]?(a=a.i,C=String(u).toString(),C in a.g&&(u=a.g[C],p=gr(u,p,f,A),p>-1&&(On(u[p]),Array.prototype.splice.call(u,p,1),u.length==0&&(delete a.g[C],a.h--)))):a&&(a=_r(a))&&(u=a.g[u.toString()],a=-1,u&&(a=gr(u,p,f,A)),(p=a>-1?u[a]:null)&&vr(p))}function vr(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Ht])fr(u.i,a);else{var p=a.type,f=a.proxy;u.removeEventListener?u.removeEventListener(p,f,a.capture):u.detachEvent?u.detachEvent(Ca(p),f):u.addListener&&u.removeListener&&u.removeListener(f),(p=_r(u))?(fr(p,a),p.h==0&&(p.src=null,u[yr]=null)):On(a)}}}function Ca(a){return a in br?br[a]:br[a]="on"+a}function Hp(a,u){if(a.da)a=!0;else{u=new Re(u,this);const p=a.listener,f=a.ha||a.src;a.fa&&vr(a),a=p.call(f,u)}return a}function _r(a){return a=a[yr],a instanceof $n?a:null}var wr="__closure_events_fn_"+(Math.random()*1e9>>>0);function Pa(a){return typeof a=="function"?a:(a[wr]||(a[wr]=function(u){return a.handleEvent(u)}),a[wr])}function Ee(){I.call(this),this.i=new $n(this),this.M=this,this.G=null}m(Ee,I),Ee.prototype[Ht]=!0,Ee.prototype.removeEventListener=function(a,u,p,f){Sa(this,a,u,p,f)};function Pe(a,u){var p,f=a.G;if(f)for(p=[];f;f=f.G)p.push(f);if(a=a.M,f=u.type||u,typeof u=="string")u=new w(u,a);else if(u instanceof w)u.target=u.target||a;else{var A=u;u=new w(f,a),Ta(u,A)}A=!0;let C,k;if(p)for(k=p.length-1;k>=0;k--)C=u.g=p[k],A=Fn(C,f,!0,u)&&A;if(C=u.g=a,A=Fn(C,f,!0,u)&&A,A=Fn(C,f,!1,u)&&A,p)for(k=0;k<p.length;k++)C=u.g=p[k],A=Fn(C,f,!1,u)&&A}Ee.prototype.N=function(){if(Ee.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const p=a.g[u];for(let f=0;f<p.length;f++)On(p[f]);delete a.g[u],a.h--}}this.G=null},Ee.prototype.J=function(a,u,p,f){return this.i.add(String(a),u,!1,p,f)},Ee.prototype.K=function(a,u,p,f){return this.i.add(String(a),u,!0,p,f)};function Fn(a,u,p,f){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let A=!0;for(let C=0;C<u.length;++C){const k=u[C];if(k&&!k.da&&k.capture==p){const W=k.listener,me=k.ha||k.src;k.fa&&fr(a.i,k),A=W.call(me,f)!==!1&&A}}return A&&!f.defaultPrevented}function qp(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=d(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function xa(a){a.g=qp(()=>{a.g=null,a.i&&(a.i=!1,xa(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class zp extends I{constructor(u,p){super(),this.m=u,this.l=p,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:xa(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fs(a){I.call(this),this.h=a,this.g={}}m(Fs,I);var Ra=[];function La(a){Nn(a.g,function(u,p){this.g.hasOwnProperty(p)&&vr(u)},a),a.g={}}Fs.prototype.N=function(){Fs.Z.N.call(this),La(this)},Fs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Er=o.JSON.stringify,Gp=o.JSON.parse,Wp=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function ka(){}function Da(){}var Bs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ir(){w.call(this,"d")}m(Ir,w);function Tr(){w.call(this,"c")}m(Tr,w);var qt={},Va=null;function Bn(){return Va=Va||new Ee}qt.Ia="serverreachability";function Ma(a){w.call(this,qt.Ia,a)}m(Ma,w);function Us(a){const u=Bn();Pe(u,new Ma(u))}qt.STAT_EVENT="statevent";function Oa(a,u){w.call(this,qt.STAT_EVENT,a),this.stat=u}m(Oa,w);function xe(a){const u=Bn();Pe(u,new Oa(u,a))}qt.Ja="timingevent";function Na(a,u){w.call(this,qt.Ja,a),this.size=u}m(Na,w);function js(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function Hs(){this.g=!0}Hs.prototype.ua=function(){this.g=!1};function Kp(a,u,p,f,A,C){a.info(function(){if(a.g)if(C){var k="",W=C.split("&");for(let te=0;te<W.length;te++){var me=W[te].split("=");if(me.length>1){const ge=me[0];me=me[1];const We=ge.split("_");k=We.length>=2&&We[1]=="type"?k+(ge+"="+me+"&"):k+(ge+"=redacted&")}}}else k=null;else k=C;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+u+`
`+p+`
`+k})}function Qp(a,u,p,f,A,C,k){a.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+u+`
`+p+`
`+C+" "+k})}function ls(a,u,p,f){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Yp(a,p)+(f?" "+f:"")})}function Jp(a,u){a.info(function(){return"TIMEOUT: "+u})}Hs.prototype.info=function(){};function Yp(a,u){if(!a.g)return u;if(!u)return null;try{const C=JSON.parse(u);if(C){for(a=0;a<C.length;a++)if(Array.isArray(C[a])){var p=C[a];if(!(p.length<2)){var f=p[1];if(Array.isArray(f)&&!(f.length<1)){var A=f[0];if(A!="noop"&&A!="stop"&&A!="close")for(let k=1;k<f.length;k++)f[k]=""}}}}return Er(C)}catch{return u}}var Un={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},$a={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Fa;function Ar(){}m(Ar,ka),Ar.prototype.g=function(){return new XMLHttpRequest},Fa=new Ar;function qs(a){return encodeURIComponent(String(a))}function Xp(a){var u=1;a=a.split(":");const p=[];for(;u>0&&a.length;)p.push(a.shift()),u--;return a.length&&p.push(a.join(":")),p}function pt(a,u,p,f){this.j=a,this.i=u,this.l=p,this.S=f||1,this.V=new Fs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ba}function Ba(){this.i=null,this.g="",this.h=!1}var Ua={},Sr={};function Cr(a,u,p){a.M=1,a.A=Hn(Ge(u)),a.u=p,a.R=!0,ja(a,null)}function ja(a,u){a.F=Date.now(),jn(a),a.B=Ge(a.A);var p=a.B,f=a.S;Array.isArray(f)||(f=[String(f)]),tl(p.i,"t",f),a.C=0,p=a.j.L,a.h=new Ba,a.g=vl(a.j,p?u:null,!a.u),a.P>0&&(a.O=new zp(d(a.Y,a,a.g),a.P)),u=a.V,p=a.g,f=a.ba;var A="readystatechange";Array.isArray(A)||(A&&(Ra[0]=A.toString()),A=Ra);for(let C=0;C<A.length;C++){const k=Aa(p,A[C],f||u.handleEvent,!1,u.h||u);if(!k)break;u.g[k.key]=k}u=a.J?Ea(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),Us(),Kp(a.i,a.v,a.B,a.l,a.S,a.u)}pt.prototype.ba=function(a){a=a.target;const u=this.O;u&&gt(a)==3?u.j():this.Y(a)},pt.prototype.Y=function(a){try{if(a==this.g)e:{const W=gt(this.g),me=this.g.ya(),te=this.g.ca();if(!(W<3)&&(W!=3||this.g&&(this.h.h||this.g.la()||ll(this.g)))){this.K||W!=4||me==7||(me==8||te<=0?Us(3):Us(2)),Pr(this);var u=this.g.ca();this.X=u;var p=Zp(this);if(this.o=u==200,Qp(this.i,this.v,this.B,this.l,this.S,W,u),this.o){if(this.U&&!this.L){t:{if(this.g){var f,A=this.g;if((f=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(f)){var C=f;break t}}C=null}if(a=C)ls(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,xr(this,a);else{this.o=!1,this.m=3,xe(12),zt(this),zs(this);break e}}if(this.R){a=!0;let ge;for(;!this.K&&this.C<p.length;)if(ge=em(this,p),ge==Sr){W==4&&(this.m=4,xe(14),a=!1),ls(this.i,this.l,null,"[Incomplete Response]");break}else if(ge==Ua){this.m=4,xe(15),ls(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else ls(this.i,this.l,ge,null),xr(this,ge);if(Ha(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),W!=4||p.length!=0||this.h.h||(this.m=1,xe(16),a=!1),this.o=this.o&&a,!a)ls(this.i,this.l,p,"[Invalid Chunked Response]"),zt(this),zs(this);else if(p.length>0&&!this.W){this.W=!0;var k=this.j;k.g==this&&k.aa&&!k.P&&(k.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Nr(k),k.P=!0,xe(11))}}else ls(this.i,this.l,p,null),xr(this,p);W==4&&zt(this),this.o&&!this.K&&(W==4?fl(this.j,this):(this.o=!1,jn(this)))}else mm(this.g),u==400&&p.indexOf("Unknown SID")>0?(this.m=3,xe(12)):(this.m=0,xe(13)),zt(this),zs(this)}}}catch{}finally{}};function Zp(a){if(!Ha(a))return a.g.la();const u=ll(a.g);if(u==="")return"";let p="";const f=u.length,A=gt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return zt(a),zs(a),"";a.h.i=new o.TextDecoder}for(let C=0;C<f;C++)a.h.h=!0,p+=a.h.i.decode(u[C],{stream:!(A&&C==f-1)});return u.length=0,a.h.g+=p,a.C=0,a.h.g}function Ha(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function em(a,u){var p=a.C,f=u.indexOf(`
`,p);return f==-1?Sr:(p=Number(u.substring(p,f)),isNaN(p)?Ua:(f+=1,f+p>u.length?Sr:(u=u.slice(f,f+p),a.C=f+p,u)))}pt.prototype.cancel=function(){this.K=!0,zt(this)};function jn(a){a.T=Date.now()+a.H,qa(a,a.H)}function qa(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=js(d(a.aa,a),u)}function Pr(a){a.D&&(o.clearTimeout(a.D),a.D=null)}pt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Jp(this.i,this.B),this.M!=2&&(Us(),xe(17)),zt(this),this.m=2,zs(this)):qa(this,this.T-a)};function zs(a){a.j.I==0||a.K||fl(a.j,a)}function zt(a){Pr(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,La(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function xr(a,u){try{var p=a.j;if(p.I!=0&&(p.g==a||Rr(p.h,a))){if(!a.L&&Rr(p.h,a)&&p.I==3){try{var f=p.Ba.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Kn(p),Gn(p);else break e;Or(p),xe(18)}}else p.xa=A[1],0<p.xa-p.K&&A[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=js(d(p.Va,p),6e3));Wa(p.h)<=1&&p.ta&&(p.ta=void 0)}else Wt(p,11)}else if((a.L||p.g==a)&&Kn(p),!v(u))for(A=p.Ba.g.parse(u),u=0;u<A.length;u++){let te=A[u];const ge=te[0];if(!(ge<=p.K))if(p.K=ge,te=te[1],p.I==2)if(te[0]=="c"){p.M=te[1],p.ba=te[2];const We=te[3];We!=null&&(p.ka=We,p.j.info("VER="+p.ka));const Kt=te[4];Kt!=null&&(p.za=Kt,p.j.info("SVER="+p.za));const yt=te[5];yt!=null&&typeof yt=="number"&&yt>0&&(f=1.5*yt,p.O=f,p.j.info("backChannelRequestTimeoutMs_="+f)),f=p;const bt=a.g;if(bt){const Jn=bt.g?bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jn){var C=f.h;C.g||Jn.indexOf("spdy")==-1&&Jn.indexOf("quic")==-1&&Jn.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Lr(C,C.h),C.h=null))}if(f.G){const $r=bt.g?bt.g.getResponseHeader("X-HTTP-Session-Id"):null;$r&&(f.wa=$r,ne(f.J,f.G,$r))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),f=p;var k=a;if(f.na=bl(f,f.L?f.ba:null,f.W),k.L){Ka(f.h,k);var W=k,me=f.O;me&&(W.H=me),W.D&&(Pr(W),jn(W)),f.g=k}else pl(f);p.i.length>0&&Wn(p)}else te[0]!="stop"&&te[0]!="close"||Wt(p,7);else p.I==3&&(te[0]=="stop"||te[0]=="close"?te[0]=="stop"?Wt(p,7):Mr(p):te[0]!="noop"&&p.l&&p.l.qa(te),p.A=0)}}Us(4)}catch{}}var tm=class{constructor(a,u){this.g=a,this.map=u}};function za(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ga(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Wa(a){return a.h?1:a.g?a.g.size:0}function Rr(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Lr(a,u){a.g?a.g.add(u):a.h=u}function Ka(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}za.prototype.cancel=function(){if(this.i=Qa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Qa(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const p of a.g.values())u=u.concat(p.G);return u}return E(a.i)}var Ja=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sm(a,u){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const f=a[p].indexOf("=");let A,C=null;f>=0?(A=a[p].substring(0,f),C=a[p].substring(f+1)):A=a[p],u(A,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function mt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof mt?(this.l=a.l,Gs(this,a.j),this.o=a.o,this.g=a.g,Ws(this,a.u),this.h=a.h,kr(this,sl(a.i)),this.m=a.m):a&&(u=String(a).match(Ja))?(this.l=!1,Gs(this,u[1]||"",!0),this.o=Ks(u[2]||""),this.g=Ks(u[3]||"",!0),Ws(this,u[4]),this.h=Ks(u[5]||"",!0),kr(this,u[6]||"",!0),this.m=Ks(u[7]||"")):(this.l=!1,this.i=new Js(null,this.l))}mt.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Qs(u,Ya,!0),":");var p=this.g;return(p||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Qs(u,Ya,!0),"@"),a.push(qs(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Qs(p,p.charAt(0)=="/"?rm:im,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Qs(p,am)),a.join("")},mt.prototype.resolve=function(a){const u=Ge(this);let p=!!a.j;p?Gs(u,a.j):p=!!a.o,p?u.o=a.o:p=!!a.g,p?u.g=a.g:p=a.u!=null;var f=a.h;if(p)Ws(u,a.u);else if(p=!!a.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var A=u.h.lastIndexOf("/");A!=-1&&(f=u.h.slice(0,A+1)+f)}if(A=f,A==".."||A==".")f="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){f=A.lastIndexOf("/",0)==0,A=A.split("/");const C=[];for(let k=0;k<A.length;){const W=A[k++];W=="."?f&&k==A.length&&C.push(""):W==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),f&&k==A.length&&C.push("")):(C.push(W),f=!0)}f=C.join("/")}else f=A}return p?u.h=f:p=a.i.toString()!=="",p?kr(u,sl(a.i)):p=!!a.m,p&&(u.m=a.m),u};function Ge(a){return new mt(a)}function Gs(a,u,p){a.j=p?Ks(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Ws(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function kr(a,u,p){u instanceof Js?(a.i=u,lm(a.i,a.l)):(p||(u=Qs(u,om)),a.i=new Js(u,a.l))}function ne(a,u,p){a.i.set(u,p)}function Hn(a){return ne(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ks(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Qs(a,u,p){return typeof a=="string"?(a=encodeURI(a).replace(u,nm),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function nm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ya=/[#\/\?@]/g,im=/[#\?:]/g,rm=/[#\?]/g,om=/[#\?@]/g,am=/#/g;function Js(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Gt(a){a.g||(a.g=new Map,a.h=0,a.i&&sm(a.i,function(u,p){a.add(decodeURIComponent(u.replace(/\+/g," ")),p)}))}n=Js.prototype,n.add=function(a,u){Gt(this),this.i=null,a=cs(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(u),this.h+=1,this};function Xa(a,u){Gt(a),u=cs(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Za(a,u){return Gt(a),u=cs(a,u),a.g.has(u)}n.forEach=function(a,u){Gt(this),this.g.forEach(function(p,f){p.forEach(function(A){a.call(u,A,f,this)},this)},this)};function el(a,u){Gt(a);let p=[];if(typeof u=="string")Za(a,u)&&(p=p.concat(a.g.get(cs(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)p=p.concat(a[u]);return p}n.set=function(a,u){return Gt(this),this.i=null,a=cs(this,a),Za(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=el(this,a),a.length>0?String(a[0]):u):u};function tl(a,u,p){Xa(a,u),p.length>0&&(a.i=null,a.g.set(cs(a,u),E(p)),a.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let f=0;f<u.length;f++){var p=u[f];const A=qs(p);p=el(this,p);for(let C=0;C<p.length;C++){let k=A;p[C]!==""&&(k+="="+qs(p[C])),a.push(k)}}return this.i=a.join("&")};function sl(a){const u=new Js;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function cs(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function lm(a,u){u&&!a.j&&(Gt(a),a.i=null,a.g.forEach(function(p,f){const A=f.toLowerCase();f!=A&&(Xa(this,f),tl(this,A,p))},a)),a.j=u}function cm(a,u){const p=new Hs;if(o.Image){const f=new Image;f.onload=h(ft,p,"TestLoadImage: loaded",!0,u,f),f.onerror=h(ft,p,"TestLoadImage: error",!1,u,f),f.onabort=h(ft,p,"TestLoadImage: abort",!1,u,f),f.ontimeout=h(ft,p,"TestLoadImage: timeout",!1,u,f),o.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=a}else u(!1)}function dm(a,u){const p=new Hs,f=new AbortController,A=setTimeout(()=>{f.abort(),ft(p,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:f.signal}).then(C=>{clearTimeout(A),C.ok?ft(p,"TestPingServer: ok",!0,u):ft(p,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),ft(p,"TestPingServer: error",!1,u)})}function ft(a,u,p,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(p)}catch{}}function um(){this.g=new Wp}function Dr(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Dr,ka),Dr.prototype.g=function(){return new qn(this.i,this.h)};function qn(a,u){Ee.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(qn,Ee),n=qn.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,Xs(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ys(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Xs(this)),this.g&&(this.readyState=3,Xs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;nl(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function nl(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ys(this):Xs(this),this.readyState==3&&nl(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Ys(this))},n.Na=function(a){this.g&&(this.response=a,Ys(this))},n.ga=function(){this.g&&Ys(this)};function Ys(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Xs(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var p=u.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=u.next();return a.join(`\r
`)};function Xs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(qn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function il(a){let u="";return Nn(a,function(p,f){u+=f,u+=":",u+=p,u+=`\r
`}),u}function Vr(a,u,p){e:{for(f in p){var f=!1;break e}f=!0}f||(p=il(p),typeof a=="string"?p!=null&&qs(p):ne(a,u,p))}function ae(a){Ee.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(ae,Ee);var hm=/^https?$/i,pm=["POST","PUT"];n=ae.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,p,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Fa.g(),this.g.onreadystatechange=g(d(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(C){rl(this,C);return}if(a=p||"",p=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)p.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const C of f.keys())p.set(C,f.get(C));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(p.keys()).find(C=>C.toLowerCase()=="content-type"),A=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(pm,u,void 0)>=0)||f||A||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,k]of p)this.g.setRequestHeader(C,k);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(C){rl(this,C)}};function rl(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,ol(a),zn(a)}function ol(a){a.A||(a.A=!0,Pe(a,"complete"),Pe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Pe(this,"complete"),Pe(this,"abort"),zn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zn(this,!0)),ae.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?al(this):this.Xa())},n.Xa=function(){al(this)};function al(a){if(a.h&&typeof r<"u"){if(a.v&&gt(a)==4)setTimeout(a.Ca.bind(a),0);else if(Pe(a,"readystatechange"),gt(a)==4){a.h=!1;try{const C=a.ca();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var p;if(!(p=u)){var f;if(f=C===0){let k=String(a.D).match(Ja)[1]||null;!k&&o.self&&o.self.location&&(k=o.self.location.protocol.slice(0,-1)),f=!hm.test(k?k.toLowerCase():"")}p=f}if(p)Pe(a,"complete"),Pe(a,"success");else{a.o=6;try{var A=gt(a)>2?a.g.statusText:""}catch{A=""}a.l=A+" ["+a.ca()+"]",ol(a)}}finally{zn(a)}}}}function zn(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,u||Pe(a,"ready");try{p.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function gt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return gt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Gp(u)}};function ll(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function mm(a){const u={};a=(a.g&&gt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<a.length;f++){if(v(a[f]))continue;var p=Xp(a[f]);const A=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const C=u[A]||[];u[A]=C,C.push(p)}Bp(u,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zs(a,u,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||u}function cl(a){this.za=0,this.i=[],this.j=new Hs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Zs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Zs("baseRetryDelayMs",5e3,a),this.Za=Zs("retryDelaySeedMs",1e4,a),this.Ta=Zs("forwardChannelMaxRetries",2,a),this.va=Zs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new za(a&&a.concurrentRequestLimit),this.Ba=new um,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=cl.prototype,n.ka=8,n.I=1,n.connect=function(a,u,p,f){xe(0),this.W=a,this.H=u||{},p&&f!==void 0&&(this.H.OSID=p,this.H.OAID=f),this.F=this.X,this.J=bl(this,null,this.W),Wn(this)};function Mr(a){if(dl(a),a.I==3){var u=a.V++,p=Ge(a.J);if(ne(p,"SID",a.M),ne(p,"RID",u),ne(p,"TYPE","terminate"),en(a,p),u=new pt(a,a.j,u),u.M=2,u.A=Hn(Ge(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=u.A,p=!0),p||(u.g=vl(u.j,null),u.g.ea(u.A)),u.F=Date.now(),jn(u)}yl(a)}function Gn(a){a.g&&(Nr(a),a.g.cancel(),a.g=null)}function dl(a){Gn(a),a.v&&(o.clearTimeout(a.v),a.v=null),Kn(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Wn(a){if(!Ga(a.h)&&!a.m){a.m=!0;var u=a.Ea;re||y(),X||(re(),X=!0),_.add(u,a),a.D=0}}function fm(a,u){return Wa(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=js(d(a.Ea,a,u),gl(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const A=new pt(this,this.j,a);let C=this.o;if(this.U&&(C?(C=Ea(C),Ta(C,this.U)):C=this.U),this.u!==null||this.R||(A.J=C,C=null),this.S)e:{for(var u=0,p=0;p<this.i.length;p++){t:{var f=this.i[p];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(u+=f,u>4096){u=p;break e}if(u===4096||p===this.i.length-1){u=p+1;break e}}u=1e3}else u=1e3;u=hl(this,A,u),p=Ge(this.J),ne(p,"RID",a),ne(p,"CVER",22),this.G&&ne(p,"X-HTTP-Session-Id",this.G),en(this,p),C&&(this.R?u="headers="+qs(il(C))+"&"+u:this.u&&Vr(p,this.u,C)),Lr(this.h,A),this.Ra&&ne(p,"TYPE","init"),this.S?(ne(p,"$req",u),ne(p,"SID","null"),A.U=!0,Cr(A,p,null)):Cr(A,p,u),this.I=2}}else this.I==3&&(a?ul(this,a):this.i.length==0||Ga(this.h)||ul(this))};function ul(a,u){var p;u?p=u.l:p=a.V++;const f=Ge(a.J);ne(f,"SID",a.M),ne(f,"RID",p),ne(f,"AID",a.K),en(a,f),a.u&&a.o&&Vr(f,a.u,a.o),p=new pt(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),u&&(a.i=u.G.concat(a.i)),u=hl(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Lr(a.h,p),Cr(p,f,u)}function en(a,u){a.H&&Nn(a.H,function(p,f){ne(u,f,p)}),a.l&&Nn({},function(p,f){ne(u,f,p)})}function hl(a,u,p){p=Math.min(a.i.length,p);const f=a.l?d(a.l.Ka,a.l,a):null;e:{var A=a.i;let W=-1;for(;;){const me=["count="+p];W==-1?p>0?(W=A[0].g,me.push("ofs="+W)):W=0:me.push("ofs="+W);let te=!0;for(let ge=0;ge<p;ge++){var C=A[ge].g;const We=A[ge].map;if(C-=W,C<0)W=Math.max(0,A[ge].g-100),te=!1;else try{C="req"+C+"_"||"";try{var k=We instanceof Map?We:Object.entries(We);for(const[Kt,yt]of k){let bt=yt;l(yt)&&(bt=Er(yt)),me.push(C+Kt+"="+encodeURIComponent(bt))}}catch(Kt){throw me.push(C+"type="+encodeURIComponent("_badmap")),Kt}}catch{f&&f(We)}}if(te){k=me.join("&");break e}}k=void 0}return a=a.i.splice(0,p),u.G=a,k}function pl(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;re||y(),X||(re(),X=!0),_.add(u,a),a.A=0}}function Or(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=js(d(a.Da,a),gl(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,ml(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=js(d(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,xe(10),Gn(this),ml(this))};function Nr(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function ml(a){a.g=new pt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=Ge(a.na);ne(u,"RID","rpc"),ne(u,"SID",a.M),ne(u,"AID",a.K),ne(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&ne(u,"TO",a.ia),ne(u,"TYPE","xmlhttp"),en(a,u),a.u&&a.o&&Vr(u,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Hn(Ge(u)),p.u=null,p.R=!0,ja(p,a)}n.Va=function(){this.C!=null&&(this.C=null,Gn(this),Or(this),xe(19))};function Kn(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function fl(a,u){var p=null;if(a.g==u){Kn(a),Nr(a),a.g=null;var f=2}else if(Rr(a.h,u))p=u.G,Ka(a.h,u),f=1;else return;if(a.I!=0){if(u.o)if(f==1){p=u.u?u.u.length:0,u=Date.now()-u.F;var A=a.D;f=Bn(),Pe(f,new Na(f,p)),Wn(a)}else pl(a);else if(A=u.m,A==3||A==0&&u.X>0||!(f==1&&fm(a,u)||f==2&&Or(a)))switch(p&&p.length>0&&(u=a.h,u.i=u.i.concat(p)),A){case 1:Wt(a,5);break;case 4:Wt(a,10);break;case 3:Wt(a,6);break;default:Wt(a,2)}}}function gl(a,u){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*u}function Wt(a,u){if(a.j.info("Error code "+u),u==2){var p=d(a.bb,a),f=a.Ua;const A=!f;f=new mt(f||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Gs(f,"https"),Hn(f),A?cm(f.toString(),p):dm(f.toString(),p)}else xe(2);a.I=0,a.l&&a.l.pa(u),yl(a),dl(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),xe(2)):(this.j.info("Failed to ping google.com"),xe(1))};function yl(a){if(a.I=0,a.ja=[],a.l){const u=Qa(a.h);(u.length!=0||a.i.length!=0)&&(T(a.ja,u),T(a.ja,a.i),a.h.i.length=0,E(a.i),a.i.length=0),a.l.oa()}}function bl(a,u,p){var f=p instanceof mt?Ge(p):new mt(p);if(f.g!="")u&&(f.g=u+"."+f.g),Ws(f,f.u);else{var A=o.location;f=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;const C=new mt(null);f&&Gs(C,f),u&&(C.g=u),A&&Ws(C,A),p&&(C.h=p),f=C}return p=a.G,u=a.wa,p&&u&&ne(f,p,u),ne(f,"VER",a.ka),en(a,f),f}function vl(a,u,p){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new ae(new Dr({ab:p})):new ae(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function _l(){}n=_l.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Qn(){}Qn.prototype.g=function(a,u){return new De(a,u)};function De(a,u){Ee.call(this),this.g=new cl(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!v(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!v(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new ds(this)}m(De,Ee),De.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},De.prototype.close=function(){Mr(this.g)},De.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Er(a),a=p);u.i.push(new tm(u.Ya++,a)),u.I==3&&Wn(u)},De.prototype.N=function(){this.g.l=null,delete this.j,Mr(this.g),delete this.g,De.Z.N.call(this)};function wl(a){Ir.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const p in u){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}m(wl,Ir);function El(){Tr.call(this),this.status=1}m(El,Tr);function ds(a){this.g=a}m(ds,_l),ds.prototype.ra=function(){Pe(this.g,"a")},ds.prototype.qa=function(a){Pe(this.g,new wl(a))},ds.prototype.pa=function(a){Pe(this.g,new El)},ds.prototype.oa=function(){Pe(this.g,"b")},Qn.prototype.createWebChannel=Qn.prototype.g,De.prototype.send=De.prototype.o,De.prototype.open=De.prototype.m,De.prototype.close=De.prototype.close,Ad=function(){return new Qn},Td=function(){return Bn()},Id=qt,no={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Un.NO_ERROR=0,Un.TIMEOUT=8,Un.HTTP_ERROR=6,oi=Un,$a.COMPLETE="complete",Ed=$a,Da.EventType=Bs,Bs.OPEN="a",Bs.CLOSE="b",Bs.ERROR="c",Bs.MESSAGE="d",Ee.prototype.listen=Ee.prototype.J,rn=Da,ae.prototype.listenOnce=ae.prototype.K,ae.prototype.getLastError=ae.prototype.Ha,ae.prototype.getLastErrorCode=ae.prototype.ya,ae.prototype.getStatus=ae.prototype.ca,ae.prototype.getResponseJson=ae.prototype.La,ae.prototype.getResponseText=ae.prototype.la,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Fa,wd=ae}).apply(typeof Xn<"u"?Xn:typeof self<"u"?self:typeof window<"u"?window:{});const Nl="@firebase/firestore",$l="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ae.UNAUTHENTICATED=new Ae(null),Ae.GOOGLE_CREDENTIALS=new Ae("google-credentials-uid"),Ae.FIRST_PARTY=new Ae("first-party-uid"),Ae.MOCK_USER=new Ae("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vs="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new Ro("@firebase/firestore");function us(){return es.logLevel}function V(n,...e){if(es.logLevel<=K.DEBUG){const t=e.map(Do);es.debug(`Firestore (${Vs}): ${n}`,...t)}}function lt(n,...e){if(es.logLevel<=K.ERROR){const t=e.map(Do);es.error(`Firestore (${Vs}): ${n}`,...t)}}function As(n,...e){if(es.logLevel<=K.WARN){const t=e.map(Do);es.warn(`Firestore (${Vs}): ${n}`,...t)}}function Do(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Sd(n,s,t)}function Sd(n,e,t){let s=`FIRESTORE (${Vs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw lt(s),new Error(s)}function Z(n,e,t,s){let i="Unexpected state";typeof t=="string"?i=t:s=t,n||Sd(e,i,s)}function G(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends ut{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ig{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ae.UNAUTHENTICATED)))}shutdown(){}}class rg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class og{constructor(e){this.t=e,this.currentUser=Ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Z(this.o===void 0,42304);let s=this.i;const i=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let r=new rt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new rt,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const c=r;e.enqueueRetryable((async()=>{await c.promise,await i(this.currentUser)}))},l=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new rt)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Z(typeof s.accessToken=="string",31837,{l:s}),new Cd(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string",2055,{h:e}),new Ae(e)}}class ag{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class lg{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new ag(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ae.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Fl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cg{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$e(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Z(this.o===void 0,3512);const s=r=>{r.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>s(r)))};const i=r=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>i(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?i(r):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Fl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Z(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Fl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=dg(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%62))}return s}}function Q(n,e){return n<e?-1:n>e?1:0}function io(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const i=n.charAt(s),r=e.charAt(s);if(i!==r)return qr(i)===qr(r)?Q(i,r):qr(i)?1:-1}return Q(n.length,e.length)}const ug=55296,hg=57343;function qr(n){const e=n.charCodeAt(0);return e>=ug&&e<=hg}function Ss(n,e,t){return n.length===e.length&&n.every(((s,i)=>t(s,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="__name__";class Ke{constructor(e,t,s){t===void 0?t=0:t>e.length&&H(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&H(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ke.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ke?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=Ke.compareSegments(e.get(i),t.get(i));if(r!==0)return r}return Q(e.length,t.length)}static compareSegments(e,t){const s=Ke.isNumericId(e),i=Ke.isNumericId(t);return s&&!i?-1:!s&&i?1:s&&i?Ke.extractNumericId(e).compare(Ke.extractNumericId(t)):io(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return kt.fromString(e.substring(4,e.length-2))}}class se extends Ke{construct(e,t,s){return new se(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new D(x.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((i=>i.length>0)))}return new se(t)}static emptyPath(){return new se([])}}const pg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _e extends Ke{construct(e,t,s){return new _e(e,t,s)}static isValidIdentifier(e){return pg.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_e.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bl}static keyField(){return new _e([Bl])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new D(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new D(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new D(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(s+=l,i++):(r(),i++)}if(r(),o)throw new D(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _e(t)}static emptyPath(){return new _e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(se.fromString(e))}static fromName(e){return new N(se.fromString(e).popFirst(5))}static empty(){return new N(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new se(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(n,e,t){if(!t)throw new D(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function mg(n,e,t,s){if(e===!0&&s===!0)throw new D(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ul(n){if(!N.isDocumentKey(n))throw new D(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function jl(n){if(N.isDocumentKey(n))throw new D(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function xd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Wi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":H(12329,{type:typeof n})}function He(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new D(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Wi(n);throw new D(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(n,e){const t={typeString:n};return e&&(t.value=e),t}function An(n,e){if(!xd(n))throw new D(x.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const i=e[s].typeString,r="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const o=n[s];if(i&&typeof o!==i){t=`JSON field '${s}' must be a ${i}.`;break}if(r!==void 0&&o!==r.value){t=`Expected '${s}' field to equal '${r.value}'`;break}}if(t)throw new D(x.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=-62135596800,ql=1e6;class ie{static now(){return ie.fromMillis(Date.now())}static fromDate(e){return ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*ql);return new ie(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Hl)throw new D(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ql}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(An(e,ie._jsonSchema))return new ie(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Hl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ie._jsonSchemaVersion="firestore/timestamp/1.0",ie._jsonSchema={type:pe("string",ie._jsonSchemaVersion),seconds:pe("number"),nanoseconds:pe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{static fromTimestamp(e){return new z(e)}static min(){return new z(new ie(0,0))}static max(){return new z(new ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=-1;function fg(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=z.fromTimestamp(s===1e9?new ie(t+1,0):new ie(t,s));return new Vt(i,N.empty(),e)}function gg(n){return new Vt(n.readTime,n.key,gn)}class Vt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Vt(z.min(),N.empty(),gn)}static max(){return new Vt(z.max(),N.empty(),gn)}}function yg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=N.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==bg)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&H(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R(((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):R.reject(t)}static resolve(e){return new R(((t,s)=>{t(e)}))}static reject(e){return new R(((t,s)=>{s(e)}))}static waitFor(e){return new R(((t,s)=>{let i=0,r=0,o=!1;e.forEach((l=>{++i,l.next((()=>{++r,o&&r===i&&t()}),(c=>s(c)))})),o=!0,r===i&&t()}))}static or(e){let t=R.resolve(!1);for(const s of e)t=t.next((i=>i?R.resolve(i):s()));return t}static forEach(e,t){const s=[];return e.forEach(((i,r)=>{s.push(t.call(this,i,r))})),this.waitFor(s)}static mapArray(e,t){return new R(((s,i)=>{const r=e.length,o=new Array(r);let l=0;for(let c=0;c<r;c++){const d=c;t(e[d]).next((h=>{o[d]=h,++l,l===r&&s(o)}),(h=>i(h)))}}))}static doWhile(e,t){return new R(((s,i)=>{const r=()=>{e()===!0?t().next((()=>{r()}),i):s()};r()}))}}function _g(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Os(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ki.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=-1;function Qi(n){return n==null}function Ii(n){return n===0&&1/n==-1/0}function wg(n){return typeof n=="number"&&Number.isInteger(n)&&!Ii(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="";function Eg(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=zl(e)),e=Ig(n.get(t),e);return zl(e)}function Ig(n,e){let t=e;const s=n.length;for(let i=0;i<s;i++){const r=n.charAt(i);switch(r){case"\0":t+="";break;case Rd:t+="";break;default:t+=r}}return t}function zl(n){return n+Rd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Bt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ld(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,t){this.comparator=e,this.root=t||ve.EMPTY}insert(e,t){return new oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zn(this.root,e,this.comparator,!0)}}class Zn{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??ve.RED,this.left=i??ve.EMPTY,this.right=r??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new ve(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ve.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw H(43730,{key:this.key,value:this.value});if(this.right.isRed())throw H(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw H(27949);return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw H(57766)}get value(){throw H(16141)}get color(){throw H(16727)}get left(){throw H(29726)}get right(){throw H(36894)}copy(e,t,s,i,r){return this}insert(e,t,s){return new ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Wl(this.data.getIterator())}getIteratorFrom(e){return new Wl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new fe(this.comparator);return t.data=e,t}}class Wl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.fields=e,e.sort(_e.comparator)}static empty(){return new Ne([])}unionWith(e){let t=new fe(_e.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Ne(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ss(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new kd("Invalid base64 string: "+r):r}})(e);return new we(t)}static fromUint8Array(e){const t=(function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r})(e);return new we(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}we.EMPTY_BYTE_STRING=new we("");const Tg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mt(n){if(Z(!!n,39018),typeof n=="string"){let e=0;const t=Tg.exec(n);if(Z(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:le(n.seconds),nanos:le(n.nanos)}}function le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ot(n){return typeof n=="string"?we.fromBase64String(n):we.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="server_timestamp",Vd="__type__",Md="__previous_value__",Od="__local_write_time__";function Oo(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Vd])==null?void 0:s.stringValue)===Dd}function Ji(n){const e=n.mapValue.fields[Md];return Oo(e)?Ji(e):e}function yn(n){const e=Mt(n.mapValue.fields[Od].timestampValue);return new ie(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,t,s,i,r,o,l,c,d,h){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=d,this.isUsingEmulator=h}}const Ti="(default)";class bn{constructor(e,t){this.projectId=e,this.database=t||Ti}static empty(){return new bn("","")}get isDefaultDatabase(){return this.database===Ti}isEqual(e){return e instanceof bn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="__type__",Sg="__max__",ei={mapValue:{}},$d="__vector__",Ai="value";function Nt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Oo(n)?4:Pg(n)?9007199254740991:Cg(n)?10:11:H(28295,{value:n})}function tt(n,e){if(n===e)return!0;const t=Nt(n);if(t!==Nt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return yn(n).isEqual(yn(e));case 3:return(function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Mt(i.timestampValue),l=Mt(r.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,r){return Ot(i.bytesValue).isEqual(Ot(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,r){return le(i.geoPointValue.latitude)===le(r.geoPointValue.latitude)&&le(i.geoPointValue.longitude)===le(r.geoPointValue.longitude)})(n,e);case 2:return(function(i,r){if("integerValue"in i&&"integerValue"in r)return le(i.integerValue)===le(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=le(i.doubleValue),l=le(r.doubleValue);return o===l?Ii(o)===Ii(l):isNaN(o)&&isNaN(l)}return!1})(n,e);case 9:return Ss(n.arrayValue.values||[],e.arrayValue.values||[],tt);case 10:case 11:return(function(i,r){const o=i.mapValue.fields||{},l=r.mapValue.fields||{};if(Gl(o)!==Gl(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!tt(o[c],l[c])))return!1;return!0})(n,e);default:return H(52216,{left:n})}}function vn(n,e){return(n.values||[]).find((t=>tt(t,e)))!==void 0}function Cs(n,e){if(n===e)return 0;const t=Nt(n),s=Nt(e);if(t!==s)return Q(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return(function(r,o){const l=le(r.integerValue||r.doubleValue),c=le(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(n,e);case 3:return Kl(n.timestampValue,e.timestampValue);case 4:return Kl(yn(n),yn(e));case 5:return io(n.stringValue,e.stringValue);case 6:return(function(r,o){const l=Ot(r),c=Ot(o);return l.compareTo(c)})(n.bytesValue,e.bytesValue);case 7:return(function(r,o){const l=r.split("/"),c=o.split("/");for(let d=0;d<l.length&&d<c.length;d++){const h=Q(l[d],c[d]);if(h!==0)return h}return Q(l.length,c.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,o){const l=Q(le(r.latitude),le(o.latitude));return l!==0?l:Q(le(r.longitude),le(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Ql(n.arrayValue,e.arrayValue);case 10:return(function(r,o){var g,E,T,L;const l=r.fields||{},c=o.fields||{},d=(g=l[Ai])==null?void 0:g.arrayValue,h=(E=c[Ai])==null?void 0:E.arrayValue,m=Q(((T=d==null?void 0:d.values)==null?void 0:T.length)||0,((L=h==null?void 0:h.values)==null?void 0:L.length)||0);return m!==0?m:Ql(d,h)})(n.mapValue,e.mapValue);case 11:return(function(r,o){if(r===ei.mapValue&&o===ei.mapValue)return 0;if(r===ei.mapValue)return 1;if(o===ei.mapValue)return-1;const l=r.fields||{},c=Object.keys(l),d=o.fields||{},h=Object.keys(d);c.sort(),h.sort();for(let m=0;m<c.length&&m<h.length;++m){const g=io(c[m],h[m]);if(g!==0)return g;const E=Cs(l[c[m]],d[h[m]]);if(E!==0)return E}return Q(c.length,h.length)})(n.mapValue,e.mapValue);default:throw H(23264,{he:t})}}function Kl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);const t=Mt(n),s=Mt(e),i=Q(t.seconds,s.seconds);return i!==0?i:Q(t.nanos,s.nanos)}function Ql(n,e){const t=n.values||[],s=e.values||[];for(let i=0;i<t.length&&i<s.length;++i){const r=Cs(t[i],s[i]);if(r)return r}return Q(t.length,s.length)}function Ps(n){return ro(n)}function ro(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Mt(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ot(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return N.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",i=!0;for(const r of t.values||[])i?i=!1:s+=",",s+=ro(r);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${ro(t.fields[o])}`;return i+"}"})(n.mapValue):H(61005,{value:n})}function ai(n){switch(Nt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ji(n);return e?16+ai(e):16;case 5:return 2*n.stringValue.length;case 6:return Ot(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((i,r)=>i+ai(r)),0)})(n.arrayValue);case 10:case 11:return(function(s){let i=0;return Bt(s.fields,((r,o)=>{i+=r.length+ai(o)})),i})(n.mapValue);default:throw H(13486,{value:n})}}function Jl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function oo(n){return!!n&&"integerValue"in n}function No(n){return!!n&&"arrayValue"in n}function Yl(n){return!!n&&"nullValue"in n}function Xl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function li(n){return!!n&&"mapValue"in n}function Cg(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Nd])==null?void 0:s.stringValue)===$d}function dn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Bt(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=dn(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=dn(n.arrayValue.values[t]);return e}return{...n}}function Pg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Sg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.value=e}static empty(){return new ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!li(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=dn(t)}setAll(e){let t=_e.emptyPath(),s={},i=[];e.forEach(((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,s,i),s={},i=[],t=l.popLast()}o?s[l.lastSegment()]=dn(o):i.push(l.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());li(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];li(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){Bt(t,((i,r)=>e[i]=r));for(const i of s)delete e[i]}clone(){return new ke(dn(this.value))}}function Fd(n){const e=[];return Bt(n.fields,((t,s)=>{const i=new _e([t]);if(li(s)){const r=Fd(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)})),new Ne(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,t,s,i,r,o,l){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Se(e,0,z.min(),z.min(),z.min(),ke.empty(),0)}static newFoundDocument(e,t,s,i){return new Se(e,1,t,z.min(),s,i,0)}static newNoDocument(e,t){return new Se(e,2,t,z.min(),z.min(),ke.empty(),0)}static newUnknownDocument(e,t){return new Se(e,3,t,z.min(),z.min(),ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Se(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,t){this.position=e,this.inclusive=t}}function Zl(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=N.comparator(N.fromName(o.referenceValue),t.key):s=Cs(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function ec(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!tt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t="asc"){this.field=e,this.dir=t}}function xg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{}class he extends Bd{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Lg(e,t,s):t==="array-contains"?new Vg(e,s):t==="in"?new Mg(e,s):t==="not-in"?new Og(e,s):t==="array-contains-any"?new Ng(e,s):new he(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new kg(e,s):new Dg(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Cs(t,this.value)):t!==null&&Nt(this.value)===Nt(t)&&this.matchesComparison(Cs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qe extends Bd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new qe(e,t)}matches(e){return Ud(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ud(n){return n.op==="and"}function jd(n){return Rg(n)&&Ud(n)}function Rg(n){for(const e of n.filters)if(e instanceof qe)return!1;return!0}function ao(n){if(n instanceof he)return n.field.canonicalString()+n.op.toString()+Ps(n.value);if(jd(n))return n.filters.map((e=>ao(e))).join(",");{const e=n.filters.map((t=>ao(t))).join(",");return`${n.op}(${e})`}}function Hd(n,e){return n instanceof he?(function(s,i){return i instanceof he&&s.op===i.op&&s.field.isEqual(i.field)&&tt(s.value,i.value)})(n,e):n instanceof qe?(function(s,i){return i instanceof qe&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce(((r,o,l)=>r&&Hd(o,i.filters[l])),!0):!1})(n,e):void H(19439)}function qd(n){return n instanceof he?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ps(t.value)}`})(n):n instanceof qe?(function(t){return t.op.toString()+" {"+t.getFilters().map(qd).join(" ,")+"}"})(n):"Filter"}class Lg extends he{constructor(e,t,s){super(e,t,s),this.key=N.fromName(s.referenceValue)}matches(e){const t=N.comparator(e.key,this.key);return this.matchesComparison(t)}}class kg extends he{constructor(e,t){super(e,"in",t),this.keys=zd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Dg extends he{constructor(e,t){super(e,"not-in",t),this.keys=zd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function zd(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>N.fromName(s.referenceValue)))}class Vg extends he{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return No(t)&&vn(t.arrayValue,this.value)}}class Mg extends he{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&vn(this.value.arrayValue,t)}}class Og extends he{constructor(e,t){super(e,"not-in",t)}matches(e){if(vn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!vn(this.value.arrayValue,t)}}class Ng extends he{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!No(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>vn(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,t=null,s=[],i=[],r=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=l,this.Te=null}}function tc(n,e=null,t=[],s=[],i=null,r=null,o=null){return new $g(n,e,t,s,i,r,o)}function $o(n){const e=G(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>ao(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(r){return r.field.canonicalString()+r.dir})(s))).join(","),Qi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Ps(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Ps(s))).join(",")),e.Te=t}return e.Te}function Fo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!xg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Hd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ec(n.startAt,e.startAt)&&ec(n.endAt,e.endAt)}function lo(n){return N.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t=null,s=[],i=[],r=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Fg(n,e,t,s,i,r,o,l){return new Sn(n,e,t,s,i,r,o,l)}function Bo(n){return new Sn(n)}function sc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Gd(n){return n.collectionGroup!==null}function un(n){const e=G(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new fe(_e.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new Ci(r,s))})),t.has(_e.keyField().canonicalString())||e.Ie.push(new Ci(_e.keyField(),s))}return e.Ie}function Qe(n){const e=G(n);return e.Ee||(e.Ee=Bg(e,un(n))),e.Ee}function Bg(n,e){if(n.limitType==="F")return tc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const r=i.dir==="desc"?"asc":"desc";return new Ci(i.field,r)}));const t=n.endAt?new Si(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Si(n.startAt.position,n.startAt.inclusive):null;return tc(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function co(n,e){const t=n.filters.concat([e]);return new Sn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function uo(n,e,t){return new Sn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Yi(n,e){return Fo(Qe(n),Qe(e))&&n.limitType===e.limitType}function Wd(n){return`${$o(Qe(n))}|lt:${n.limitType}`}function hs(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((i=>qd(i))).join(", ")}]`),Qi(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((i=>Ps(i))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((i=>Ps(i))).join(",")),`Target(${s})`})(Qe(n))}; limitType=${n.limitType})`}function Xi(n,e){return e.isFoundDocument()&&(function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):N.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)})(n,e)&&(function(s,i){for(const r of un(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0})(n,e)&&(function(s,i){return!(s.startAt&&!(function(o,l,c){const d=Zl(o,l,c);return o.inclusive?d<=0:d<0})(s.startAt,un(s),i)||s.endAt&&!(function(o,l,c){const d=Zl(o,l,c);return o.inclusive?d>=0:d>0})(s.endAt,un(s),i))})(n,e)}function Ug(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Kd(n){return(e,t)=>{let s=!1;for(const i of un(n)){const r=jg(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function jg(n,e,t){const s=n.field.isKeyField()?N.comparator(e.key,t.key):(function(r,o,l){const c=o.data.field(r),d=l.data.field(r);return c!==null&&d!==null?Cs(c,d):H(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return H(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Bt(this.inner,((t,s)=>{for(const[i,r]of s)e(i,r)}))}isEmpty(){return Ld(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=new oe(N.comparator);function ct(){return Hg}const Qd=new oe(N.comparator);function on(...n){let e=Qd;for(const t of n)e=e.insert(t.key,t);return e}function Jd(n){let e=Qd;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Jt(){return hn()}function Yd(){return hn()}function hn(){return new is((n=>n.toString()),((n,e)=>n.isEqual(e)))}const qg=new oe(N.comparator),zg=new fe(N.comparator);function J(...n){let e=zg;for(const t of n)e=e.add(t);return e}const Gg=new fe(Q);function Wg(){return Gg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ii(e)?"-0":e}}function Xd(n){return{integerValue:""+n}}function Kg(n,e){return wg(e)?Xd(e):Uo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(){this._=void 0}}function Qg(n,e,t){return n instanceof Pi?(function(i,r){const o={fields:{[Vd]:{stringValue:Dd},[Od]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Oo(r)&&(r=Ji(r)),r&&(o.fields[Md]=r),{mapValue:o}})(t,e):n instanceof _n?eu(n,e):n instanceof wn?tu(n,e):(function(i,r){const o=Zd(i,r),l=nc(o)+nc(i.Ae);return oo(o)&&oo(i.Ae)?Xd(l):Uo(i.serializer,l)})(n,e)}function Jg(n,e,t){return n instanceof _n?eu(n,e):n instanceof wn?tu(n,e):t}function Zd(n,e){return n instanceof xi?(function(s){return oo(s)||(function(r){return!!r&&"doubleValue"in r})(s)})(e)?e:{integerValue:0}:null}class Pi extends Zi{}class _n extends Zi{constructor(e){super(),this.elements=e}}function eu(n,e){const t=su(e);for(const s of n.elements)t.some((i=>tt(i,s)))||t.push(s);return{arrayValue:{values:t}}}class wn extends Zi{constructor(e){super(),this.elements=e}}function tu(n,e){let t=su(e);for(const s of n.elements)t=t.filter((i=>!tt(i,s)));return{arrayValue:{values:t}}}class xi extends Zi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function nc(n){return le(n.integerValue||n.doubleValue)}function su(n){return No(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Yg(n,e){return n.field.isEqual(e.field)&&(function(s,i){return s instanceof _n&&i instanceof _n||s instanceof wn&&i instanceof wn?Ss(s.elements,i.elements,tt):s instanceof xi&&i instanceof xi?tt(s.Ae,i.Ae):s instanceof Pi&&i instanceof Pi})(n.transform,e.transform)}class Xg{constructor(e,t){this.version=e,this.transformResults=t}}class Be{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Be}static exists(e){return new Be(void 0,e)}static updateTime(e){return new Be(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ci(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class er{}function nu(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new jo(n.key,Be.none()):new Cn(n.key,n.data,Be.none());{const t=n.data,s=ke.empty();let i=new fe(_e.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ut(n.key,s,new Ne(i.toArray()),Be.none())}}function Zg(n,e,t){n instanceof Cn?(function(i,r,o){const l=i.value.clone(),c=rc(i.fieldTransforms,r,o.transformResults);l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):n instanceof Ut?(function(i,r,o){if(!ci(i.precondition,r))return void r.convertToUnknownDocument(o.version);const l=rc(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(iu(i)),c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):(function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function pn(n,e,t,s){return n instanceof Cn?(function(r,o,l,c){if(!ci(r.precondition,o))return l;const d=r.value.clone(),h=oc(r.fieldTransforms,c,o);return d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null})(n,e,t,s):n instanceof Ut?(function(r,o,l,c){if(!ci(r.precondition,o))return l;const d=oc(r.fieldTransforms,c,o),h=o.data;return h.setAll(iu(r)),h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((m=>m.field)))})(n,e,t,s):(function(r,o,l){return ci(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(n,e,t)}function ey(n,e){let t=null;for(const s of n.fieldTransforms){const i=e.data.field(s.field),r=Zd(s.transform,i||null);r!=null&&(t===null&&(t=ke.empty()),t.set(s.field,r))}return t||null}function ic(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Ss(s,i,((r,o)=>Yg(r,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Cn extends er{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ut extends er{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function iu(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function rc(n,e,t){const s=new Map;Z(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,l=e.data.field(r.field);s.set(r.field,Jg(o,l,t[i]))}return s}function oc(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,Qg(r,o,e))}return s}class jo extends er{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ty extends er{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Zg(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=pn(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=pn(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Yd();return this.mutations.forEach((i=>{const r=e.get(i.key),o=r.overlayedDocument;let l=this.applyToLocalView(o,r.mutatedFields);l=t.has(i.key)?null:l;const c=nu(o,l);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(z.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),J())}isEqual(e){return this.batchId===e.batchId&&Ss(this.mutations,e.mutations,((t,s)=>ic(t,s)))&&Ss(this.baseMutations,e.baseMutations,((t,s)=>ic(t,s)))}}class Ho{constructor(e,t,s,i){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=i}static from(e,t,s){Z(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let i=(function(){return qg})();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Ho(e,t,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue,Y;function ry(n){switch(n){case x.OK:return H(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return H(15467,{code:n})}}function ru(n){if(n===void 0)return lt("GRPC error has no .code"),x.UNKNOWN;switch(n){case ue.OK:return x.OK;case ue.CANCELLED:return x.CANCELLED;case ue.UNKNOWN:return x.UNKNOWN;case ue.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case ue.INTERNAL:return x.INTERNAL;case ue.UNAVAILABLE:return x.UNAVAILABLE;case ue.UNAUTHENTICATED:return x.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case ue.NOT_FOUND:return x.NOT_FOUND;case ue.ALREADY_EXISTS:return x.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return x.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case ue.ABORTED:return x.ABORTED;case ue.OUT_OF_RANGE:return x.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return x.UNIMPLEMENTED;case ue.DATA_LOSS:return x.DATA_LOSS;default:return H(39323,{code:n})}}(Y=ue||(ue={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=new kt([4294967295,4294967295],0);function ac(n){const e=oy().encode(n),t=new _d;return t.update(e),new Uint8Array(t.digest())}function lc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new kt([t,s],0),new kt([i,r],0)]}class qo{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new an(`Invalid padding: ${t}`);if(s<0)throw new an(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new an(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new an(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=kt.fromNumber(this.ge)}ye(e,t,s){let i=e.add(t.multiply(kt.fromNumber(s)));return i.compare(ay)===1&&(i=new kt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=ac(e),[s,i]=lc(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);if(!this.we(o))return!1}return!0}static create(e,t,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new qo(r,i,t);return s.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const t=ac(e),[s,i]=lc(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);this.Se(o)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class an extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,Pn.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new tr(z.min(),i,new oe(Q),ct(),J())}}class Pn{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Pn(s,t,J(),J(),J())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t,s,i){this.be=e,this.removedTargetIds=t,this.key=s,this.De=i}}class ou{constructor(e,t){this.targetId=e,this.Ce=t}}class au{constructor(e,t,s=we.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class cc{constructor(){this.ve=0,this.Fe=dc(),this.Me=we.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=J(),t=J(),s=J();return this.Fe.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:H(38017,{changeType:r})}})),new Pn(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=dc()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Z(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class ly{constructor(e){this.Ge=e,this.ze=new Map,this.je=ct(),this.Je=ti(),this.He=ti(),this.Ye=new oe(Q)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:H(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,s=e.Ce.count,i=this.ot(t);if(i){const r=i.target;if(lo(r))if(s===0){const o=new N(r.path);this.et(t,o,Se.newNoDocument(o,z.min()))}else Z(s===1,20013,{expectedCount:s});else{const o=this._t(t);if(o!==s){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(t);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=t;let o,l;try{o=Ot(s).toUint8Array()}catch(c){if(c instanceof kd)return As("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new qo(o,i,r)}catch(c){return As(c instanceof an?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let i=0;return s.forEach((r=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.et(t,r,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((r,o)=>{const l=this.ot(o);if(l){if(r.current&&lo(l.target)){const c=new N(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Se.newNoDocument(c,e))}r.Be&&(t.set(o,r.ke()),r.qe())}}));let s=J();this.He.forEach(((r,o)=>{let l=!0;o.forEachWhile((c=>{const d=this.ot(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(s=s.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const i=new tr(e,t,this.Ye,this.je,s);return this.je=ct(),this.Je=ti(),this.He=ti(),this.Ye=new oe(Q),i}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new cc,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new fe(Q),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new fe(Q),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new cc),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ti(){return new oe(N.comparator)}function dc(){return new oe(N.comparator)}const cy={asc:"ASCENDING",desc:"DESCENDING"},dy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},uy={and:"AND",or:"OR"};class hy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ho(n,e){return n.useProto3Json||Qi(e)?e:{value:e}}function Ri(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lu(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function py(n,e){return Ri(n,e.toTimestamp())}function Je(n){return Z(!!n,49232),z.fromTimestamp((function(t){const s=Mt(t);return new ie(s.seconds,s.nanos)})(n))}function zo(n,e){return po(n,e).canonicalString()}function po(n,e){const t=(function(i){return new se(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function cu(n){const e=se.fromString(n);return Z(mu(e),10190,{key:e.toString()}),e}function mo(n,e){return zo(n.databaseId,e.path)}function zr(n,e){const t=cu(e);if(t.get(1)!==n.databaseId.projectId)throw new D(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new D(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new N(uu(t))}function du(n,e){return zo(n.databaseId,e)}function my(n){const e=cu(n);return e.length===4?se.emptyPath():uu(e)}function fo(n){return new se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function uu(n){return Z(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function uc(n,e,t){return{name:mo(n,e),fields:t.value.mapValue.fields}}function fy(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:H(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=(function(d,h){return d.useProto3Json?(Z(h===void 0||typeof h=="string",58123),we.fromBase64String(h||"")):(Z(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),we.fromUint8Array(h||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(d){const h=d.code===void 0?x.UNKNOWN:ru(d.code);return new D(h,d.message||"")})(o);t=new au(s,i,r,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=zr(n,s.document.name),r=Je(s.document.updateTime),o=s.document.createTime?Je(s.document.createTime):z.min(),l=new ke({mapValue:{fields:s.document.fields}}),c=Se.newFoundDocument(i,r,o,l),d=s.targetIds||[],h=s.removedTargetIds||[];t=new di(d,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=zr(n,s.document),r=s.readTime?Je(s.readTime):z.min(),o=Se.newNoDocument(i,r),l=s.removedTargetIds||[];t=new di([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=zr(n,s.document),r=s.removedTargetIds||[];t=new di([],r,i,null)}else{if(!("filter"in e))return H(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new iy(i,r),l=s.targetId;t=new ou(l,o)}}return t}function gy(n,e){let t;if(e instanceof Cn)t={update:uc(n,e.key,e.value)};else if(e instanceof jo)t={delete:mo(n,e.key)};else if(e instanceof Ut)t={update:uc(n,e.key,e.data),updateMask:Ay(e.fieldMask)};else{if(!(e instanceof ty))return H(16599,{Vt:e.type});t={verify:mo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(r,o){const l=o.transform;if(l instanceof Pi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof _n)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof wn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof xi)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw H(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(i,r){return r.updateTime!==void 0?{updateTime:py(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:H(27497)})(n,e.precondition)),t}function yy(n,e){return n&&n.length>0?(Z(e!==void 0,14353),n.map((t=>(function(i,r){let o=i.updateTime?Je(i.updateTime):Je(r);return o.isEqual(z.min())&&(o=Je(r)),new Xg(o,i.transformResults||[])})(t,e)))):[]}function by(n,e){return{documents:[du(n,e.path)]}}function vy(n,e){const t={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=du(n,i);const r=(function(d){if(d.length!==0)return pu(qe.create(d,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const o=(function(d){if(d.length!==0)return d.map((h=>(function(g){return{field:ps(g.field),direction:Ey(g.dir)}})(h)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=ho(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:i}}function _y(n){let e=my(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){Z(s===1,65062);const h=t.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];t.where&&(r=(function(m){const g=hu(m);return g instanceof qe&&jd(g)?g.getFilters():[g]})(t.where));let o=[];t.orderBy&&(o=(function(m){return m.map((g=>(function(T){return new Ci(ms(T.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(T.direction))})(g)))})(t.orderBy));let l=null;t.limit&&(l=(function(m){let g;return g=typeof m=="object"?m.value:m,Qi(g)?null:g})(t.limit));let c=null;t.startAt&&(c=(function(m){const g=!!m.before,E=m.values||[];return new Si(E,g)})(t.startAt));let d=null;return t.endAt&&(d=(function(m){const g=!m.before,E=m.values||[];return new Si(E,g)})(t.endAt)),Fg(e,i,o,r,l,"F",c,d)}function wy(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function hu(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ms(t.unaryFilter.field);return he.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=ms(t.unaryFilter.field);return he.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ms(t.unaryFilter.field);return he.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ms(t.unaryFilter.field);return he.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return H(61313);default:return H(60726)}})(n):n.fieldFilter!==void 0?(function(t){return he.create(ms(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return H(58110);default:return H(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return qe.create(t.compositeFilter.filters.map((s=>hu(s))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return H(1026)}})(t.compositeFilter.op))})(n):H(30097,{filter:n})}function Ey(n){return cy[n]}function Iy(n){return dy[n]}function Ty(n){return uy[n]}function ps(n){return{fieldPath:n.canonicalString()}}function ms(n){return _e.fromServerFormat(n.fieldPath)}function pu(n){return n instanceof he?(function(t){if(t.op==="=="){if(Xl(t.value))return{unaryFilter:{field:ps(t.field),op:"IS_NAN"}};if(Yl(t.value))return{unaryFilter:{field:ps(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Xl(t.value))return{unaryFilter:{field:ps(t.field),op:"IS_NOT_NAN"}};if(Yl(t.value))return{unaryFilter:{field:ps(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ps(t.field),op:Iy(t.op),value:t.value}}})(n):n instanceof qe?(function(t){const s=t.getFilters().map((i=>pu(i)));return s.length===1?s[0]:{compositeFilter:{op:Ty(t.op),filters:s}}})(n):H(54877,{filter:n})}function Ay(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function mu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t,s,i,r=z.min(),o=z.min(),l=we.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Pt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.yt=e}}function Cy(n){const e=_y({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?uo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(){this.Cn=new xy}addToCollectionParentIndex(e,t){return this.Cn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(Vt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(Vt.min())}updateCollectionGroup(e,t,s){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class xy{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new fe(se.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new fe(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},fu=41943040;class Le{static withCacheSize(e){return new Le(e,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le.DEFAULT_COLLECTION_PERCENTILE=10,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Le.DEFAULT=new Le(fu,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Le.DISABLED=new Le(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new xs(0)}static cr(){return new xs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc="LruGarbageCollector",Ry=1048576;function mc([n,e],[t,s]){const i=Q(n,t);return i===0?Q(e,s):i}class Ly{constructor(e){this.Ir=e,this.buffer=new fe(mc),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();mc(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ky{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){V(pc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Os(t)?V(pc,"Ignoring IndexedDB error during garbage collection: ",t):await Ms(t)}await this.Vr(3e5)}))}}class Dy{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return R.resolve(Ki.ce);const s=new Ly(t);return this.mr.forEachTarget(e,(i=>s.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>s.Ar(i))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(hc)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hc):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,i,r,o,l,c,d;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i)))).next((m=>(s=m,l=Date.now(),this.removeTargets(e,s,t)))).next((m=>(r=m,c=Date.now(),this.removeOrphanedDocuments(e,s)))).next((m=>(d=Date.now(),us()<=K.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${r} targets in `+(c-l)+`ms
	Removed ${m} documents in `+(d-c)+`ms
Total Duration: ${d-h}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:m}))))}}function Vy(n,e){return new Dy(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(){this.changes=new is((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Se.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?R.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(s=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(s!==null&&pn(s.mutation,i,Ne.empty(),ie.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,J()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=J()){const i=Jt();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,s).next((r=>{let o=on();return r.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const s=Jt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,J())))}populateOverlays(e,t,s){const i=[];return s.forEach((r=>{t.has(r)||i.push(r)})),this.documentOverlayCache.getOverlays(e,i).next((r=>{r.forEach(((o,l)=>{t.set(o,l)}))}))}computeViews(e,t,s,i){let r=ct();const o=hn(),l=(function(){return hn()})();return t.forEach(((c,d)=>{const h=s.get(d.key);i.has(d.key)&&(h===void 0||h.mutation instanceof Ut)?r=r.insert(d.key,d):h!==void 0?(o.set(d.key,h.mutation.getFieldMask()),pn(h.mutation,d,h.mutation.getFieldMask(),ie.now())):o.set(d.key,Ne.empty())})),this.recalculateAndSaveOverlays(e,r).next((c=>(c.forEach(((d,h)=>o.set(d,h))),t.forEach(((d,h)=>l.set(d,new Oy(h,o.get(d)??null)))),l)))}recalculateAndSaveOverlays(e,t){const s=hn();let i=new oe(((o,l)=>o-l)),r=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const l of o)l.keys().forEach((c=>{const d=t.get(c);if(d===null)return;let h=s.get(c)||Ne.empty();h=l.applyToLocalView(d,h),s.set(c,h);const m=(i.get(l.batchId)||J()).add(c);i=i.insert(l.batchId,m)}))})).next((()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),d=c.key,h=c.value,m=Yd();h.forEach((g=>{if(!r.has(g)){const E=nu(t.get(g),s.get(g));E!==null&&m.set(g,E),r=r.add(g)}})),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return R.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,i){return(function(o){return N.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Gd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,i):this.getDocumentsMatchingCollectionQuery(e,t,s,i)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next((r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):R.resolve(Jt());let l=gn,c=r;return o.next((d=>R.forEach(d,((h,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),r.get(h)?R.resolve():this.remoteDocumentCache.getEntry(e,h).next((g=>{c=c.insert(h,g)}))))).next((()=>this.populateOverlays(e,d,r))).next((()=>this.computeViews(e,c,d,J()))).next((h=>({batchId:l,changes:Jd(h)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new N(t)).next((s=>{let i=on();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,i){const r=t.collectionGroup;let o=on();return this.indexManager.getCollectionParents(e,r).next((l=>R.forEach(l,(c=>{const d=(function(m,g){return new Sn(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(t,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,d,s,i).next((h=>{h.forEach(((m,g)=>{o=o.insert(m,g)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,r,i)))).next((o=>{r.forEach(((c,d)=>{const h=d.getKey();o.get(h)===null&&(o=o.insert(h,Se.newInvalidDocument(h)))}));let l=on();return o.forEach(((c,d)=>{const h=r.get(c);h!==void 0&&pn(h.mutation,d,Ne.empty(),ie.now()),Xi(t,d)&&(l=l.insert(c,d))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return R.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:Je(i.createTime)}})(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(i){return{name:i.name,query:Cy(i.bundledQuery),readTime:Je(i.readTime)}})(t)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(){this.overlays=new oe(N.comparator),this.qr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Jt();return R.forEach(t,(i=>this.getOverlay(e,i).next((r=>{r!==null&&s.set(i,r)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((i,r)=>{this.St(e,t,r)})),R.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.qr.get(s);return i!==void 0&&(i.forEach((r=>this.overlays=this.overlays.remove(r))),this.qr.delete(s)),R.resolve()}getOverlaysForCollection(e,t,s){const i=Jt(),r=t.length+1,o=new N(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,d=c.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return R.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new oe(((d,h)=>d-h));const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>s){let h=r.get(d.largestBatchId);h===null&&(h=Jt(),r=r.insert(d.largestBatchId,h)),h.set(d.getKey(),d)}}const l=Jt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((d,h)=>l.set(d,h))),!(l.size()>=i)););return R.resolve(l)}St(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(s.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ny(t,s));let r=this.qr.get(t);r===void 0&&(r=J(),this.qr.set(t,r)),this.qr.set(t,r.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(){this.sessionToken=we.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.Qr=new fe(be.$r),this.Ur=new fe(be.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new be(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new be(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new N(new se([])),s=new be(t,e),i=new be(t,e+1),r=[];return this.Ur.forEachInRange([s,i],(o=>{this.Gr(o),r.push(o.key)})),r}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new N(new se([])),s=new be(t,e),i=new be(t,e+1);let r=J();return this.Ur.forEachInRange([s,i],(o=>{r=r.add(o.key)})),r}containsKey(e){const t=new be(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class be{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return N.comparator(e.key,t.key)||Q(e.Yr,t.Yr)}static Kr(e,t){return Q(e.Yr,t.Yr)||N.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new fe(be.$r)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sy(r,t,s,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new be(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,t){return R.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.ei(s),r=i<0?0:i;return R.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?Mo:this.tr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new be(t,0),i=new be(t,Number.POSITIVE_INFINITY),r=[];return this.Zr.forEachInRange([s,i],(o=>{const l=this.Xr(o.Yr);r.push(l)})),R.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new fe(Q);return t.forEach((i=>{const r=new be(i,0),o=new be(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([r,o],(l=>{s=s.add(l.Yr)}))})),R.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;N.isDocumentKey(r)||(r=r.child(""));const o=new be(new N(r),0);let l=new fe(Q);return this.Zr.forEachWhile((c=>{const d=c.key.path;return!!s.isPrefixOf(d)&&(d.length===i&&(l=l.add(c.Yr)),!0)}),o),R.resolve(this.ti(l))}ti(e){const t=[];return e.forEach((s=>{const i=this.Xr(s);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){Z(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return R.forEach(t.mutations,(i=>{const r=new be(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new be(t,0),i=this.Zr.firstAfterOrEqual(s);return R.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e){this.ri=e,this.docs=(function(){return new oe(N.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return R.resolve(s?s.document.mutableCopy():Se.newInvalidDocument(t))}getEntries(e,t){let s=ct();return t.forEach((i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Se.newInvalidDocument(i))})),R.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=ct();const o=t.path,l=new N(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:d,value:{document:h}}=c.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||yg(gg(h),s)<=0||(i.has(h.key)||Xi(t,h))&&(r=r.insert(h.key,h.mutableCopy()))}return R.resolve(r)}getAllFromCollectionGroup(e,t,s,i){H(9500)}ii(e,t){return R.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new Hy(this)}getSize(e){return R.resolve(this.size)}}class Hy extends My{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(s)})),R.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e){this.persistence=e,this.si=new is((t=>$o(t)),Fo),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.oi=0,this._i=new Go,this.targetCount=0,this.ai=xs.ur()}forEachTarget(e,t){return this.si.forEach(((s,i)=>t(i))),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),R.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new xs(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.Pr(t),R.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.si.forEach(((o,l)=>{l.sequenceNumber<=t&&s.get(l.targetId)===null&&(this.si.delete(o),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)})),R.waitFor(r).next((()=>i))}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return R.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),R.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((o=>{r.push(i.markPotentiallyOrphaned(e,o))})),R.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return R.resolve(s)}containsKey(e,t){return R.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,t){this.ui={},this.overlays={},this.ci=new Ki(0),this.li=!1,this.li=!0,this.hi=new By,this.referenceDelegate=e(this),this.Pi=new qy(this),this.indexManager=new Py,this.remoteDocumentCache=(function(i){return new jy(i)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new Sy(t),this.Ii=new $y(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Fy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new Uy(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){V("MemoryPersistence","Starting transaction:",e);const i=new zy(this.ci.next());return this.referenceDelegate.Ei(),s(i).next((r=>this.referenceDelegate.di(i).next((()=>r)))).toPromise().then((r=>(i.raiseOnCommittedEvent(),r)))}Ai(e,t){return R.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class zy extends vg{constructor(e){super(),this.currentSequenceNumber=e}}class Wo{constructor(e){this.persistence=e,this.Ri=new Go,this.Vi=null}static mi(e){return new Wo(e)}get fi(){if(this.Vi)return this.Vi;throw H(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),R.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((i=>this.fi.add(i.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((r=>this.fi.add(r.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.fi,(s=>{const i=N.fromPath(s);return this.gi(e,i).next((r=>{r||t.removeEntry(i,z.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return R.or([()=>R.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Li{constructor(e,t){this.persistence=e,this.pi=new is((s=>Eg(s.path)),((s,i)=>s.isEqual(i))),this.garbageCollector=Vy(this,t)}static mi(e,t){return new Li(e,t)}Ei(){}di(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((i=>s+i))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return R.forEach(this.pi,((s,i)=>this.br(e,s,i).next((r=>r?R.resolve():t(i)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.ii(e,(o=>this.br(e,o,t).next((l=>{l||(s++,r.removeEntry(o,z.min()))})))).next((()=>r.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),R.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),R.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ai(e.data.value)),t}br(e,t,s){return R.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return R.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=i}static As(e,t){let s=J(),i=J();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Ko(e,t.fromCache,s,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Fm()?8:_g(Ce())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,i){const r={result:null};return this.ys(e,t).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ws(e,t,i,s).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new Gy;return this.Ss(e,t,o).next((l=>{if(r.result=l,this.Vs)return this.bs(e,t,o,l.size)}))})).next((()=>r.result))}bs(e,t,s,i){return s.documentReadCount<this.fs?(us()<=K.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",hs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),R.resolve()):(us()<=K.DEBUG&&V("QueryEngine","Query:",hs(t),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.gs*i?(us()<=K.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",hs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qe(t))):R.resolve())}ys(e,t){if(sc(t))return R.resolve(null);let s=Qe(t);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=uo(t,null,"F"),s=Qe(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((r=>{const o=J(...r);return this.ps.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,s).next((c=>{const d=this.Ds(t,l);return this.Cs(t,d,o,c.readTime)?this.ys(e,uo(t,null,"F")):this.vs(e,d,t,c)}))))})))))}ws(e,t,s,i){return sc(t)||i.isEqual(z.min())?R.resolve(null):this.ps.getDocuments(e,s).next((r=>{const o=this.Ds(t,r);return this.Cs(t,o,s,i)?R.resolve(null):(us()<=K.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),hs(t)),this.vs(e,o,t,fg(i,gn)).next((l=>l)))}))}Ds(e,t){let s=new fe(Kd(e));return t.forEach(((i,r)=>{Xi(e,r)&&(s=s.add(r))})),s}Cs(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ss(e,t,s){return us()<=K.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",hs(t)),this.ps.getDocumentsMatchingQuery(e,t,Vt.min(),s)}vs(e,t,s,i){return this.ps.getDocumentsMatchingQuery(e,s,i).next((r=>(t.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="LocalStore",Ky=3e8;class Qy{constructor(e,t,s,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new oe(Q),this.xs=new is((r=>$o(r)),Fo),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ny(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function Jy(n,e,t,s){return new Qy(n,e,t,s)}async function yu(n,e){const t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next((r=>(i=r,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((r=>{const o=[],l=[];let c=J();for(const d of i){o.push(d.batchId);for(const h of d.mutations)c=c.add(h.key)}for(const d of r){l.push(d.batchId);for(const h of d.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(s,c).next((d=>({Ls:d,removedBatchIds:o,addedBatchIds:l})))}))}))}function Yy(n,e){const t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const i=e.batch.keys(),r=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,c,d,h){const m=d.batch,g=m.keys();let E=R.resolve();return g.forEach((T=>{E=E.next((()=>h.getEntry(c,T))).next((L=>{const P=d.docVersions.get(T);Z(P!==null,48541),L.version.compareTo(P)<0&&(m.applyToRemoteDocument(L,d),L.isValidDocument()&&(L.setReadTime(d.commitVersion),h.addEntry(L)))}))})),E.next((()=>l.mutationQueue.removeMutationBatch(c,m)))})(t,s,e,r).next((()=>r.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let c=J();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(c=c.add(l.batch.mutations[d].key));return c})(e)))).next((()=>t.localDocuments.getDocuments(s,i)))}))}function bu(n){const e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function Xy(n,e){const t=G(n),s=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const l=[];e.targetChanges.forEach(((h,m)=>{const g=i.get(m);if(!g)return;l.push(t.Pi.removeMatchingKeys(r,h.removedDocuments,m).next((()=>t.Pi.addMatchingKeys(r,h.addedDocuments,m))));let E=g.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(m)!==null?E=E.withResumeToken(we.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):h.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(h.resumeToken,s)),i=i.insert(m,E),(function(L,P,M){return L.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=Ky?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0})(g,E,h)&&l.push(t.Pi.updateTargetData(r,E))}));let c=ct(),d=J();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(r,h))})),l.push(Zy(r,o,e.documentUpdates).next((h=>{c=h.ks,d=h.qs}))),!s.isEqual(z.min())){const h=t.Pi.getLastRemoteSnapshotVersion(r).next((m=>t.Pi.setTargetsMetadata(r,r.currentSequenceNumber,s)));l.push(h)}return R.waitFor(l).next((()=>o.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,c,d))).next((()=>c))})).then((r=>(t.Ms=i,r)))}function Zy(n,e,t){let s=J(),i=J();return t.forEach((r=>s=s.add(r))),e.getEntries(n,s).next((r=>{let o=ct();return t.forEach(((l,c)=>{const d=r.get(l);c.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(z.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):V(Qo,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",c.version)})),{ks:o,qs:i}}))}function eb(n,e){const t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Mo),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function tb(n,e){const t=G(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let i;return t.Pi.getTargetData(s,e).next((r=>r?(i=r,R.resolve(i)):t.Pi.allocateTargetId(s).next((o=>(i=new Pt(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,i).next((()=>i)))))))})).then((s=>{const i=t.Ms.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function go(n,e,t){const s=G(n),i=s.Ms.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,(o=>s.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!Os(o))throw o;V(Qo,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.xs.delete(i.target)}function fc(n,e,t){const s=G(n);let i=z.min(),r=J();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,d,h){const m=G(c),g=m.xs.get(h);return g!==void 0?R.resolve(m.Ms.get(g)):m.Pi.getTargetData(d,h)})(s,o,Qe(e)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{r=c}))})).next((()=>s.Fs.getDocumentsMatchingQuery(o,e,t?i:z.min(),t?r:J()))).next((l=>(sb(s,Ug(e),l),{documents:l,Qs:r})))))}function sb(n,e,t){let s=n.Os.get(e)||z.min();t.forEach(((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)})),n.Os.set(e,s)}class gc{constructor(){this.activeTargetIds=Wg()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nb{constructor(){this.Mo=new gc,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new gc,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc="ConnectivityMonitor";class bc{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){V(yc,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){V(yc,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si=null;function yo(){return si===null?si=(function(){return 268435456+Math.round(2147483648*Math.random())})():si++,"0x"+si.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="RestConnection",rb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ob{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${i}`,this.Wo=this.databaseId.database===Ti?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Go(e,t,s,i,r){const o=yo(),l=this.zo(e,t.toUriEncodedString());V(Gr,`Sending RPC '${e}' ${o}:`,l,s);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,i,r);const{host:d}=new URL(l),h=ks(d);return this.Jo(e,l,c,s,h).then((m=>(V(Gr,`Received RPC '${e}' ${o}: `,m),m)),(m=>{throw As(Gr,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",s),m}))}Ho(e,t,s,i,r,o){return this.Go(e,t,s,i,r)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Vs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,r)=>e[r]=i)),s&&s.headers.forEach(((i,r)=>e[r]=i))}zo(e,t){const s=rb[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="WebChannelConnection";class lb extends ob{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,i,r){const o=yo();return new Promise(((l,c)=>{const d=new wd;d.setWithCredentials(!0),d.listenOnce(Ed.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case oi.NO_ERROR:const m=d.getResponseJson();V(Ie,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case oi.TIMEOUT:V(Ie,`RPC '${e}' ${o} timed out`),c(new D(x.DEADLINE_EXCEEDED,"Request time out"));break;case oi.HTTP_ERROR:const g=d.getStatus();if(V(Ie,`RPC '${e}' ${o} failed with status:`,g,"response text:",d.getResponseText()),g>0){let E=d.getResponseJson();Array.isArray(E)&&(E=E[0]);const T=E==null?void 0:E.error;if(T&&T.status&&T.message){const L=(function(M){const F=M.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(F)>=0?F:x.UNKNOWN})(T.status);c(new D(L,T.message))}else c(new D(x.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new D(x.UNAVAILABLE,"Connection failed."));break;default:H(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{V(Ie,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(i);V(Ie,`RPC '${e}' ${o} sending request:`,i),d.send(t,"POST",h,s,15)}))}T_(e,t,s){const i=yo(),r=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ad(),l=Td(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const h=r.join("");V(Ie,`Creating RPC '${e}' stream ${i}: ${h}`,c);const m=o.createWebChannel(h,c);this.I_(m);let g=!1,E=!1;const T=new ab({Yo:P=>{E?V(Ie,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(g||(V(Ie,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),V(Ie,`RPC '${e}' stream ${i} sending:`,P),m.send(P))},Zo:()=>m.close()}),L=(P,M,F)=>{P.listen(M,(B=>{try{F(B)}catch(ee){setTimeout((()=>{throw ee}),0)}}))};return L(m,rn.EventType.OPEN,(()=>{E||(V(Ie,`RPC '${e}' stream ${i} transport opened.`),T.o_())})),L(m,rn.EventType.CLOSE,(()=>{E||(E=!0,V(Ie,`RPC '${e}' stream ${i} transport closed`),T.a_(),this.E_(m))})),L(m,rn.EventType.ERROR,(P=>{E||(E=!0,As(Ie,`RPC '${e}' stream ${i} transport errored. Name:`,P.name,"Message:",P.message),T.a_(new D(x.UNAVAILABLE,"The operation could not be completed")))})),L(m,rn.EventType.MESSAGE,(P=>{var M;if(!E){const F=P.data[0];Z(!!F,16349);const B=F,ee=(B==null?void 0:B.error)||((M=B[0])==null?void 0:M.error);if(ee){V(Ie,`RPC '${e}' stream ${i} received error:`,ee);const re=ee.status;let X=(function(b){const I=ue[b];if(I!==void 0)return ru(I)})(re),_=ee.message;X===void 0&&(X=x.INTERNAL,_="Unknown error status: "+re+" with message "+ee.message),E=!0,T.a_(new D(X,_)),m.close()}else V(Ie,`RPC '${e}' stream ${i} received:`,F),T.u_(F)}})),L(l,Id.STAT_EVENT,(P=>{P.stat===no.PROXY?V(Ie,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===no.NOPROXY&&V(Ie,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{T.__()}),0),T}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Wr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(n){return new hy(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,t,s=1e3,i=1.5,r=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=i,this.R_=r,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-s);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc="PersistentStream";class _u{constructor(e,t,s,i,r,o,l,c){this.Mi=e,this.S_=s,this.b_=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new vu(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(lt(t.toString()),lt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,i])=>{this.D_===t&&this.G_(s,i)}),(s=>{e((()=>{const i=new D(x.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(i)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{s((()=>this.z_(i)))})),this.stream.onMessage((i=>{s((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return V(vc,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(V(vc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class cb extends _u{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=fy(this.serializer,e),s=(function(r){if(!("targetChange"in r))return z.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?z.min():o.readTime?Je(o.readTime):z.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=fo(this.serializer),t.addTarget=(function(r,o){let l;const c=o.target;if(l=lo(c)?{documents:by(r,c)}:{query:vy(r,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=lu(r,o.resumeToken);const d=ho(r,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(z.min())>0){l.readTime=Ri(r,o.snapshotVersion.toTimestamp());const d=ho(r,o.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,e);const s=wy(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=fo(this.serializer),t.removeTarget=e,this.q_(t)}}class db extends _u{constructor(e,t,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Z(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Z(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=yy(e.writeResults,e.commitTime),s=Je(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=fo(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>gy(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{}class hb extends ub{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new D(x.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Go(e,po(t,s),i,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new D(x.UNKNOWN,r.toString())}))}Ho(e,t,s,i,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Ho(e,po(t,s),i,o,l,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(x.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class pb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(lt(t),this.aa=!1):V("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="RemoteStore";class mb{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=r,this.Aa.Oo((o=>{s.enqueueAndForget((async()=>{rs(this)&&(V(ts,"Restarting streams for network reachability change."),await(async function(c){const d=G(c);d.Ea.add(4),await xn(d),d.Ra.set("Unknown"),d.Ea.delete(4),await nr(d)})(this))}))})),this.Ra=new pb(s,i)}}async function nr(n){if(rs(n))for(const e of n.da)await e(!0)}async function xn(n){for(const e of n.da)await e(!1)}function wu(n,e){const t=G(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Zo(t)?Xo(t):Ns(t).O_()&&Yo(t,e))}function Jo(n,e){const t=G(n),s=Ns(t);t.Ia.delete(e),s.O_()&&Eu(t,e),t.Ia.size===0&&(s.O_()?s.L_():rs(t)&&t.Ra.set("Unknown"))}function Yo(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ns(n).Y_(e)}function Eu(n,e){n.Va.Ue(e),Ns(n).Z_(e)}function Xo(n){n.Va=new ly({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Ns(n).start(),n.Ra.ua()}function Zo(n){return rs(n)&&!Ns(n).x_()&&n.Ia.size>0}function rs(n){return G(n).Ea.size===0}function Iu(n){n.Va=void 0}async function fb(n){n.Ra.set("Online")}async function gb(n){n.Ia.forEach(((e,t)=>{Yo(n,e)}))}async function yb(n,e){Iu(n),Zo(n)?(n.Ra.ha(e),Xo(n)):n.Ra.set("Unknown")}async function bb(n,e,t){if(n.Ra.set("Online"),e instanceof au&&e.state===2&&e.cause)try{await(async function(i,r){const o=r.cause;for(const l of r.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))})(n,e)}catch(s){V(ts,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ki(n,s)}else if(e instanceof di?n.Va.Ze(e):e instanceof ou?n.Va.st(e):n.Va.tt(e),!t.isEqual(z.min()))try{const s=await bu(n.localStore);t.compareTo(s)>=0&&await(function(r,o){const l=r.Va.Tt(o);return l.targetChanges.forEach(((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const h=r.Ia.get(d);h&&r.Ia.set(d,h.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,d)=>{const h=r.Ia.get(c);if(!h)return;r.Ia.set(c,h.withResumeToken(we.EMPTY_BYTE_STRING,h.snapshotVersion)),Eu(r,c);const m=new Pt(h.target,c,d,h.sequenceNumber);Yo(r,m)})),r.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(s){V(ts,"Failed to raise snapshot:",s),await ki(n,s)}}async function ki(n,e,t){if(!Os(e))throw e;n.Ea.add(1),await xn(n),n.Ra.set("Offline"),t||(t=()=>bu(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{V(ts,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await nr(n)}))}function Tu(n,e){return e().catch((t=>ki(n,t,e)))}async function ir(n){const e=G(n),t=$t(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Mo;for(;vb(e);)try{const i=await eb(e.localStore,s);if(i===null){e.Ta.length===0&&t.L_();break}s=i.batchId,_b(e,i)}catch(i){await ki(e,i)}Au(e)&&Su(e)}function vb(n){return rs(n)&&n.Ta.length<10}function _b(n,e){n.Ta.push(e);const t=$t(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Au(n){return rs(n)&&!$t(n).x_()&&n.Ta.length>0}function Su(n){$t(n).start()}async function wb(n){$t(n).ra()}async function Eb(n){const e=$t(n);for(const t of n.Ta)e.ea(t.mutations)}async function Ib(n,e,t){const s=n.Ta.shift(),i=Ho.from(s,e,t);await Tu(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await ir(n)}async function Tb(n,e){e&&$t(n).X_&&await(async function(s,i){if((function(o){return ry(o)&&o!==x.ABORTED})(i.code)){const r=s.Ta.shift();$t(s).B_(),await Tu(s,(()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i))),await ir(s)}})(n,e),Au(n)&&Su(n)}async function _c(n,e){const t=G(n);t.asyncQueue.verifyOperationInProgress(),V(ts,"RemoteStore received new credentials");const s=rs(t);t.Ea.add(3),await xn(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await nr(t)}async function Ab(n,e){const t=G(n);e?(t.Ea.delete(2),await nr(t)):e||(t.Ea.add(2),await xn(t),t.Ra.set("Unknown"))}function Ns(n){return n.ma||(n.ma=(function(t,s,i){const r=G(t);return r.sa(),new cb(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(n.datastore,n.asyncQueue,{Xo:fb.bind(null,n),t_:gb.bind(null,n),r_:yb.bind(null,n),H_:bb.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Zo(n)?Xo(n):n.Ra.set("Unknown")):(await n.ma.stop(),Iu(n))}))),n.ma}function $t(n){return n.fa||(n.fa=(function(t,s,i){const r=G(t);return r.sa(),new db(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:wb.bind(null,n),r_:Tb.bind(null,n),ta:Eb.bind(null,n),na:Ib.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await ir(n)):(await n.fa.stop(),n.Ta.length>0&&(V(ts,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,l=new ea(e,t,o,i,r);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ta(n,e){if(lt("AsyncQueue",`${e}: ${n}`),Os(n))return new D(x.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{static emptySet(e){return new gs(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||N.comparator(t.key,s.key):(t,s)=>N.comparator(t.key,s.key),this.keyedMap=on(),this.sortedSet=new oe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof gs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new gs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this.ga=new oe(N.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):H(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Rs{constructor(e,t,s,i,r,o,l,c,d){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach((l=>{o.push({type:0,doc:l})})),new Rs(e,t,gs.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class Cb{constructor(){this.queries=Ec(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const i=G(t),r=i.queries;i.queries=Ec(),r.forEach(((o,l)=>{for(const c of l.Sa)c.onError(s)}))})(this,new D(x.ABORTED,"Firestore shutting down"))}}function Ec(){return new is((n=>Wd(n)),Yi)}async function Cu(n,e){const t=G(n);let s=3;const i=e.query;let r=t.queries.get(i);r?!r.ba()&&e.Da()&&(s=2):(r=new Sb,s=e.Da()?0:1);try{switch(s){case 0:r.wa=await t.onListen(i,!0);break;case 1:r.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const l=ta(o,`Initialization of query '${hs(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,r),r.Sa.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&sa(t)}async function Pu(n,e){const t=G(n),s=e.query;let i=3;const r=t.queries.get(s);if(r){const o=r.Sa.indexOf(e);o>=0&&(r.Sa.splice(o,1),r.Sa.length===0?i=e.Da()?0:1:!r.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Pb(n,e){const t=G(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const l of o.Sa)l.Fa(i)&&(s=!0);o.wa=i}}s&&sa(t)}function xb(n,e,t){const s=G(n),i=s.queries.get(e);if(i)for(const r of i.Sa)r.onError(t);s.queries.delete(e)}function sa(n){n.Ca.forEach((e=>{e.next()}))}var bo,Ic;(Ic=bo||(bo={})).Ma="default",Ic.Cache="cache";class xu{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Rs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==bo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this.key=e}}class Lu{constructor(e){this.key=e}}class Rb{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=J(),this.mutatedKeys=J(),this.eu=Kd(e),this.tu=new gs(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new wc,i=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((h,m)=>{const g=i.get(h),E=Xi(this.query,m)?m:null,T=!!g&&this.mutatedKeys.has(g.key),L=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let P=!1;g&&E?g.data.isEqual(E.data)?T!==L&&(s.track({type:3,doc:E}),P=!0):this.su(g,E)||(s.track({type:2,doc:E}),P=!0,(c&&this.eu(E,c)>0||d&&this.eu(E,d)<0)&&(l=!0)):!g&&E?(s.track({type:0,doc:E}),P=!0):g&&!E&&(s.track({type:1,doc:g}),P=!0,(c||d)&&(l=!0)),P&&(E?(o=o.add(E),r=L?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{tu:o,iu:s,Cs:l,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,i){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((h,m)=>(function(E,T){const L=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H(20277,{Rt:P})}};return L(E)-L(T)})(h.type,m.type)||this.eu(h.doc,m.doc))),this.ou(s),i=i??!1;const l=t&&!i?this._u():[],c=this.Xa.size===0&&this.current&&!i?1:0,d=c!==this.Za;return this.Za=c,o.length!==0||d?{snapshot:new Rs(this.query,e.tu,r,o,e.mutatedKeys,c===0,d,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new wc,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=J(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new Lu(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new Ru(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=J();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Rs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const na="SyncEngine";class Lb{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class kb{constructor(e){this.key=e,this.hu=!1}}class Db{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new is((l=>Wd(l)),Yi),this.Iu=new Map,this.Eu=new Set,this.du=new oe(N.comparator),this.Au=new Map,this.Ru=new Go,this.Vu={},this.mu=new Map,this.fu=xs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Vb(n,e,t=!0){const s=Nu(n);let i;const r=s.Tu.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.lu()):i=await ku(s,e,t,!0),i}async function Mb(n,e){const t=Nu(n);await ku(t,e,!0,!1)}async function ku(n,e,t,s){const i=await tb(n.localStore,Qe(e)),r=i.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let l;return s&&(l=await Ob(n,e,r,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&wu(n.remoteStore,i),l}async function Ob(n,e,t,s,i){n.pu=(m,g,E)=>(async function(L,P,M,F){let B=P.view.ru(M);B.Cs&&(B=await fc(L.localStore,P.query,!1).then((({documents:_})=>P.view.ru(_,B))));const ee=F&&F.targetChanges.get(P.targetId),re=F&&F.targetMismatches.get(P.targetId)!=null,X=P.view.applyChanges(B,L.isPrimaryClient,ee,re);return Ac(L,P.targetId,X.au),X.snapshot})(n,m,g,E);const r=await fc(n.localStore,e,!0),o=new Rb(e,r.Qs),l=o.ru(r.documents),c=Pn.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),d=o.applyChanges(l,n.isPrimaryClient,c);Ac(n,t,d.au);const h=new Lb(e,t,o);return n.Tu.set(e,h),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function Nb(n,e,t){const s=G(n),i=s.Tu.get(e),r=s.Iu.get(i.targetId);if(r.length>1)return s.Iu.set(i.targetId,r.filter((o=>!Yi(o,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await go(s.localStore,i.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(i.targetId),t&&Jo(s.remoteStore,i.targetId),vo(s,i.targetId)})).catch(Ms)):(vo(s,i.targetId),await go(s.localStore,i.targetId,!0))}async function $b(n,e){const t=G(n),s=t.Tu.get(e),i=t.Iu.get(s.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Jo(t.remoteStore,s.targetId))}async function Fb(n,e,t){const s=Gb(n);try{const i=await(function(o,l){const c=G(o),d=ie.now(),h=l.reduce(((E,T)=>E.add(T.key)),J());let m,g;return c.persistence.runTransaction("Locally write mutations","readwrite",(E=>{let T=ct(),L=J();return c.Ns.getEntries(E,h).next((P=>{T=P,T.forEach(((M,F)=>{F.isValidDocument()||(L=L.add(M))}))})).next((()=>c.localDocuments.getOverlayedDocuments(E,T))).next((P=>{m=P;const M=[];for(const F of l){const B=ey(F,m.get(F.key).overlayedDocument);B!=null&&M.push(new Ut(F.key,B,Fd(B.value.mapValue),Be.exists(!0)))}return c.mutationQueue.addMutationBatch(E,d,M,l)})).next((P=>{g=P;const M=P.applyToLocalDocumentSet(m,L);return c.documentOverlayCache.saveOverlays(E,P.batchId,M)}))})).then((()=>({batchId:g.batchId,changes:Jd(m)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),(function(o,l,c){let d=o.Vu[o.currentUser.toKey()];d||(d=new oe(Q)),d=d.insert(l,c),o.Vu[o.currentUser.toKey()]=d})(s,i.batchId,t),await Rn(s,i.changes),await ir(s.remoteStore)}catch(i){const r=ta(i,"Failed to persist write");t.reject(r)}}async function Du(n,e){const t=G(n);try{const s=await Xy(t.localStore,e);e.targetChanges.forEach(((i,r)=>{const o=t.Au.get(r);o&&(Z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?Z(o.hu,14607):i.removedDocuments.size>0&&(Z(o.hu,42227),o.hu=!1))})),await Rn(t,s,e)}catch(s){await Ms(s)}}function Tc(n,e,t){const s=G(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.Tu.forEach(((r,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)})),(function(o,l){const c=G(o);c.onlineState=l;let d=!1;c.queries.forEach(((h,m)=>{for(const g of m.Sa)g.va(l)&&(d=!0)})),d&&sa(c)})(s.eventManager,e),i.length&&s.Pu.H_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Bb(n,e,t){const s=G(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.Au.get(e),r=i&&i.key;if(r){let o=new oe(N.comparator);o=o.insert(r,Se.newNoDocument(r,z.min()));const l=J().add(r),c=new tr(z.min(),new Map,new oe(Q),o,l);await Du(s,c),s.du=s.du.remove(r),s.Au.delete(e),ia(s)}else await go(s.localStore,e,!1).then((()=>vo(s,e,t))).catch(Ms)}async function Ub(n,e){const t=G(n),s=e.batch.batchId;try{const i=await Yy(t.localStore,e);Mu(t,s,null),Vu(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Rn(t,i)}catch(i){await Ms(i)}}async function jb(n,e,t){const s=G(n);try{const i=await(function(o,l){const c=G(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let h;return c.mutationQueue.lookupMutationBatch(d,l).next((m=>(Z(m!==null,37113),h=m.keys(),c.mutationQueue.removeMutationBatch(d,m)))).next((()=>c.mutationQueue.performConsistencyCheck(d))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(d,h,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,h))).next((()=>c.localDocuments.getDocuments(d,h)))}))})(s.localStore,e);Mu(s,e,t),Vu(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Rn(s,i)}catch(i){await Ms(i)}}function Vu(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Mu(n,e,t){const s=G(n);let i=s.Vu[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),s.Vu[s.currentUser.toKey()]=i}}function vo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||Ou(n,s)}))}function Ou(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Jo(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),ia(n))}function Ac(n,e,t){for(const s of t)s instanceof Ru?(n.Ru.addReference(s.key,e),Hb(n,s)):s instanceof Lu?(V(na,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||Ou(n,s.key)):H(19791,{wu:s})}function Hb(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(V(na,"New document in limbo: "+t),n.Eu.add(s),ia(n))}function ia(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new N(se.fromString(e)),s=n.fu.next();n.Au.set(s,new kb(t)),n.du=n.du.insert(t,s),wu(n.remoteStore,new Pt(Qe(Bo(t.path)),s,"TargetPurposeLimboResolution",Ki.ce))}}async function Rn(n,e,t){const s=G(n),i=[],r=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((l,c)=>{o.push(s.pu(c,e,t).then((d=>{var h;if((d||t)&&s.isPrimaryClient){const m=d?!d.fromCache:(h=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(d){i.push(d);const m=Ko.As(c.targetId,d);r.push(m)}})))})),await Promise.all(o),s.Pu.H_(i),await(async function(c,d){const h=G(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>R.forEach(d,(g=>R.forEach(g.Es,(E=>h.persistence.referenceDelegate.addReference(m,g.targetId,E))).next((()=>R.forEach(g.ds,(E=>h.persistence.referenceDelegate.removeReference(m,g.targetId,E)))))))))}catch(m){if(!Os(m))throw m;V(Qo,"Failed to update sequence numbers: "+m)}for(const m of d){const g=m.targetId;if(!m.fromCache){const E=h.Ms.get(g),T=E.snapshotVersion,L=E.withLastLimboFreeSnapshotVersion(T);h.Ms=h.Ms.insert(g,L)}}})(s.localStore,r))}async function qb(n,e){const t=G(n);if(!t.currentUser.isEqual(e)){V(na,"User change. New user:",e.toKey());const s=await yu(t.localStore,e);t.currentUser=e,(function(r,o){r.mu.forEach((l=>{l.forEach((c=>{c.reject(new D(x.CANCELLED,o))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Rn(t,s.Ls)}}function zb(n,e){const t=G(n),s=t.Au.get(e);if(s&&s.hu)return J().add(s.key);{let i=J();const r=t.Iu.get(e);if(!r)return i;for(const o of r){const l=t.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function Nu(n){const e=G(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Du.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Bb.bind(null,e),e.Pu.H_=Pb.bind(null,e.eventManager),e.Pu.yu=xb.bind(null,e.eventManager),e}function Gb(n){const e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ub.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jb.bind(null,e),e}class Di{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sr(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Jy(this.persistence,new Wy,e.initialUser,this.serializer)}Cu(e){return new gu(Wo.mi,this.serializer)}Du(e){return new nb}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Di.provider={build:()=>new Di};class Wb extends Di{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Z(this.persistence.referenceDelegate instanceof Li,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new ky(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Le.withCacheSize(this.cacheSizeBytes):Le.DEFAULT;return new gu((s=>Li.mi(s,t)),this.serializer)}}class _o{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Tc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=qb.bind(null,this.syncEngine),await Ab(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Cb})()}createDatastore(e){const t=sr(e.databaseInfo.databaseId),s=(function(r){return new lb(r)})(e.databaseInfo);return(function(r,o,l,c){return new hb(r,o,l,c)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,i,r,o,l){return new mb(s,i,r,o,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Tc(this.syncEngine,t,0)),(function(){return bc.v()?new bc:new ib})())}createSyncEngine(e,t){return(function(i,r,o,l,c,d,h){const m=new Db(i,r,o,l,c,d);return h&&(m.gu=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const r=G(i);V(ts,"RemoteStore shutting down."),r.Ea.add(5),await xn(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}_o.provider={build:()=>new _o};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):lt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="FirestoreClient";class Kb{constructor(e,t,s,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=Ae.UNAUTHENTICATED,this.clientId=Vo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,(async o=>{V(Ft,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(V(Ft,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=ta(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Kr(n,e){n.asyncQueue.verifyOperationInProgress(),V(Ft,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async i=>{s.isEqual(i)||(await yu(e.localStore,i),s=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Sc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Qb(n);V(Ft,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>_c(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,i)=>_c(e.remoteStore,i))),n._onlineComponents=e}async function Qb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(Ft,"Using user provided OfflineComponentProvider");try{await Kr(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===x.FAILED_PRECONDITION||i.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;As("Error using user provided cache. Falling back to memory cache: "+t),await Kr(n,new Di)}}else V(Ft,"Using default OfflineComponentProvider"),await Kr(n,new Wb(void 0));return n._offlineComponents}async function Fu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(Ft,"Using user provided OnlineComponentProvider"),await Sc(n,n._uninitializedComponentsProvider._online)):(V(Ft,"Using default OnlineComponentProvider"),await Sc(n,new _o))),n._onlineComponents}function Jb(n){return Fu(n).then((e=>e.syncEngine))}async function Bu(n){const e=await Fu(n),t=e.eventManager;return t.onListen=Vb.bind(null,e.syncEngine),t.onUnlisten=Nb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Mb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=$b.bind(null,e.syncEngine),t}function Yb(n,e,t={}){const s=new rt;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,l,c,d){const h=new $u({next:g=>{h.Nu(),o.enqueueAndForget((()=>Pu(r,m)));const E=g.docs.has(l);!E&&g.fromCache?d.reject(new D(x.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&g.fromCache&&c&&c.source==="server"?d.reject(new D(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new xu(Bo(l.path),h,{includeMetadataChanges:!0,qa:!0});return Cu(r,m)})(await Bu(n),n.asyncQueue,e,t,s))),s.promise}function Xb(n,e,t={}){const s=new rt;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,l,c,d){const h=new $u({next:g=>{h.Nu(),o.enqueueAndForget((()=>Pu(r,m))),g.fromCache&&c.source==="server"?d.reject(new D(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new xu(l,h,{includeMetadataChanges:!0,qa:!0});return Cu(r,m)})(await Bu(n),n.asyncQueue,e,t,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="firestore.googleapis.com",Pc=!0;class xc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new D(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ju,this.ssl=Pc}else this.host=e.host,this.ssl=e.ssl??Pc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=fu;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ry)throw new D(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uu(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new D(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new D(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new D(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,i){return s.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rr{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new ig;switch(s.type){case"firstParty":return new lg(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new D(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Cc.get(t);s&&(V("ComponentProvider","Removing Datastore"),Cc.delete(t),s.terminate())})(this),Promise.resolve()}}function Zb(n,e,t,s={}){var d;n=He(n,rr);const i=ks(e),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;i&&(hd(`https://${l}`),pd("Firestore",!0)),r.host!==ju&&r.host!==l&&As("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...r,host:l,ssl:i,emulatorOptions:s};if(!Xt(c,o)&&(n._setSettings(c),s.mockUserToken)){let h,m;if(typeof s.mockUserToken=="string")h=s.mockUserToken,m=Ae.MOCK_USER;else{h=Rm(s.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const g=s.mockUserToken.sub||s.mockUserToken.user_id;if(!g)throw new D(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Ae(g)}n._authCredentials=new rg(new Cd(h,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new $s(this.firestore,e,this._query)}}class ce{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ce(this.firestore,e,this._key)}toJSON(){return{type:ce._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(An(t,ce._jsonSchema))return new ce(e,s||null,new N(se.fromString(t.referencePath)))}}ce._jsonSchemaVersion="firestore/documentReference/1.0",ce._jsonSchema={type:pe("string",ce._jsonSchemaVersion),referencePath:pe("string")};class Dt extends $s{constructor(e,t,s){super(e,t,Bo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ce(this.firestore,null,new N(e))}withConverter(e){return new Dt(this.firestore,e,this._path)}}function Vi(n,e,...t){if(n=de(n),Pd("collection","path",e),n instanceof rr){const s=se.fromString(e,...t);return jl(s),new Dt(n,null,s)}{if(!(n instanceof ce||n instanceof Dt))throw new D(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(se.fromString(e,...t));return jl(s),new Dt(n.firestore,null,s)}}function Me(n,e,...t){if(n=de(n),arguments.length===1&&(e=Vo.newId()),Pd("doc","path",e),n instanceof rr){const s=se.fromString(e,...t);return Ul(s),new ce(n,null,new N(s))}{if(!(n instanceof ce||n instanceof Dt))throw new D(x.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(se.fromString(e,...t));return Ul(s),new ce(n.firestore,n instanceof Dt?n.converter:null,new N(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="AsyncQueue";class Lc{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new vu(this,"async_queue_retry"),this._c=()=>{const s=Wr();s&&V(Rc,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Wr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Wr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new rt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Os(e))throw e;V(Rc,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,lt("INTERNAL UNHANDLED ERROR: ",kc(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=ea.createAndSchedule(this,e,t,s,(r=>this.hc(r)));return this.tc.push(i),i}uc(){this.nc&&H(47125,{Pc:kc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function kc(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class os extends rr{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new Lc,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Lc(e),this._firestoreClient=void 0,await e}}}function ev(n,e){const t=typeof n=="object"?n:yd(),s=typeof n=="string"?n:Ti,i=ko(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Pm("firestore");r&&Zb(i,...r)}return i}function ra(n){if(n._terminated)throw new D(x.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||tv(n),n._firestoreClient}function tv(n){var s,i,r;const e=n._freezeSettings(),t=(function(l,c,d,h){return new Ag(l,c,d,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Uu(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)})(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((r=e.localCache)!=null&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Kb(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fe(we.fromBase64String(e))}catch(t){throw new D(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Fe(we.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Fe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(An(e,Fe._jsonSchema))return Fe.fromBase64String(e.bytes)}}Fe._jsonSchemaVersion="firestore/bytes/1.0",Fe._jsonSchema={type:pe("string",Fe._jsonSchemaVersion),bytes:pe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ye._jsonSchemaVersion}}static fromJSON(e){if(An(e,Ye._jsonSchema))return new Ye(e.latitude,e.longitude)}}Ye._jsonSchemaVersion="firestore/geoPoint/1.0",Ye._jsonSchema={type:pe("string",Ye._jsonSchemaVersion),latitude:pe("number"),longitude:pe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Xe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(An(e,Xe._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Xe(e.vectorValues);throw new D(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xe._jsonSchemaVersion="firestore/vectorValue/1.0",Xe._jsonSchema={type:pe("string",Xe._jsonSchemaVersion),vectorValues:pe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=/^__.*__$/;class nv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ut(e,this.data,this.fieldMask,t,this.fieldTransforms):new Cn(e,this.data,t,this.fieldTransforms)}}class Hu{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ut(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function qu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H(40011,{Ac:n})}}class aa{constructor(e,t,s,i,r,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Rc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new aa({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Mi(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(qu(this.Ac)&&sv.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class iv{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||sr(e)}Cc(e,t,s,i=!1){return new aa({Ac:e,methodName:t,Dc:s,path:_e.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ar(n){const e=n._freezeSettings(),t=sr(n._databaseId);return new iv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function zu(n,e,t,s,i,r={}){const o=n.Cc(r.merge||r.mergeFields?2:0,e,t,i);la("Data must be an object, but it was:",o,s);const l=Gu(s,o);let c,d;if(r.merge)c=new Ne(o.fieldMask),d=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const m of r.mergeFields){const g=wo(e,m,t);if(!o.contains(g))throw new D(x.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Ku(h,g)||h.push(g)}c=new Ne(h),d=o.fieldTransforms.filter((m=>c.covers(m.field)))}else c=null,d=o.fieldTransforms;return new nv(new ke(l),c,d)}class lr extends oa{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lr}}function rv(n,e,t,s){const i=n.Cc(1,e,t);la("Data must be an object, but it was:",i,s);const r=[],o=ke.empty();Bt(s,((c,d)=>{const h=ca(e,c,t);d=de(d);const m=i.yc(h);if(d instanceof lr)r.push(h);else{const g=Ln(d,m);g!=null&&(r.push(h),o.set(h,g))}}));const l=new Ne(r);return new Hu(o,l,i.fieldTransforms)}function ov(n,e,t,s,i,r){const o=n.Cc(1,e,t),l=[wo(e,s,t)],c=[i];if(r.length%2!=0)throw new D(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<r.length;g+=2)l.push(wo(e,r[g])),c.push(r[g+1]);const d=[],h=ke.empty();for(let g=l.length-1;g>=0;--g)if(!Ku(d,l[g])){const E=l[g];let T=c[g];T=de(T);const L=o.yc(E);if(T instanceof lr)d.push(E);else{const P=Ln(T,L);P!=null&&(d.push(E),h.set(E,P))}}const m=new Ne(d);return new Hu(h,m,o.fieldTransforms)}function av(n,e,t,s=!1){return Ln(t,n.Cc(s?4:3,e))}function Ln(n,e){if(Wu(n=de(n)))return la("Unsupported field value:",e,n),Gu(n,e);if(n instanceof oa)return(function(s,i){if(!qu(i.Ac))throw i.Sc(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,i){const r=[];let o=0;for(const l of s){let c=Ln(l,i.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}})(n,e)}return(function(s,i){if((s=de(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Kg(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=ie.fromDate(s);return{timestampValue:Ri(i.serializer,r)}}if(s instanceof ie){const r=new ie(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ri(i.serializer,r)}}if(s instanceof Ye)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Fe)return{bytesValue:lu(i.serializer,s._byteString)};if(s instanceof ce){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:zo(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof Xe)return(function(o,l){return{mapValue:{fields:{[Nd]:{stringValue:$d},[Ai]:{arrayValue:{values:o.toArray().map((d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return Uo(l.serializer,d)}))}}}}}})(s,i);throw i.Sc(`Unsupported field value: ${Wi(s)}`)})(n,e)}function Gu(n,e){const t={};return Ld(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bt(n,((s,i)=>{const r=Ln(i,e.mc(s));r!=null&&(t[s]=r)})),{mapValue:{fields:t}}}function Wu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ie||n instanceof Ye||n instanceof Fe||n instanceof ce||n instanceof oa||n instanceof Xe)}function la(n,e,t){if(!Wu(t)||!xd(t)){const s=Wi(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function wo(n,e,t){if((e=de(e))instanceof or)return e._internalPath;if(typeof e=="string")return ca(n,e);throw Mi("Field path arguments must be of type string or ",n,!1,void 0,t)}const lv=new RegExp("[~\\*/\\[\\]]");function ca(n,e,t){if(e.search(lv)>=0)throw Mi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new or(...e.split("."))._internalPath}catch{throw Mi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Mi(n,e,t,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new D(x.INVALID_ARGUMENT,l+n+c)}function Ku(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(da("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class cv extends Qu{data(){return super.data()}}function da(n,e){return typeof e=="string"?ca(n,e):e instanceof or?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new D(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ua{}class uv extends ua{}function Eo(n,e,...t){let s=[];e instanceof ua&&s.push(e),s=s.concat(t),(function(r){const o=r.filter((c=>c instanceof ha)).length,l=r.filter((c=>c instanceof cr)).length;if(o>1||o>0&&l>0)throw new D(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const i of s)n=i._apply(n);return n}class cr extends uv{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new cr(e,t,s)}_apply(e){const t=this._parse(e);return Ju(e._query,t),new $s(e.firestore,e.converter,co(e._query,t))}_parse(e){const t=ar(e.firestore);return(function(r,o,l,c,d,h,m){let g;if(d.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new D(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Vc(m,h);const T=[];for(const L of m)T.push(Dc(c,r,L));g={arrayValue:{values:T}}}else g=Dc(c,r,m)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Vc(m,h),g=av(l,o,m,h==="in"||h==="not-in");return he.create(d,h,g)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ui(n,e,t){const s=e,i=da("where",n);return cr._create(i,s,t)}class ha extends ua{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ha(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:qe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,r){let o=i;const l=r.getFlattenedFilters();for(const c of l)Ju(o,c),o=co(o,c)})(e._query,t),new $s(e.firestore,e.converter,co(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Dc(n,e,t){if(typeof(t=de(t))=="string"){if(t==="")throw new D(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gd(e)&&t.indexOf("/")!==-1)throw new D(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(se.fromString(t));if(!N.isDocumentKey(s))throw new D(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Jl(n,new N(s))}if(t instanceof ce)return Jl(n,t._key);throw new D(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wi(t)}.`)}function Vc(n,e){if(!Array.isArray(n)||n.length===0)throw new D(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ju(n,e){const t=(function(i,r){for(const o of i)for(const l of o.getFlattenedFilters())if(r.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new D(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class hv{convertValue(e,t="none"){switch(Nt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ot(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw H(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Bt(e,((i,r)=>{s[i]=this.convertValue(r,t)})),s}convertVectorValue(e){var s,i,r;const t=(r=(i=(s=e.fields)==null?void 0:s[Ai].arrayValue)==null?void 0:i.values)==null?void 0:r.map((o=>le(o.doubleValue)));return new Xe(t)}convertGeoPoint(e){return new Ye(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ji(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(yn(e));default:return null}}convertTimestamp(e){const t=Mt(e);return new ie(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=se.fromString(e);Z(mu(s),9688,{name:e});const i=new bn(s.get(1),s.get(3)),r=new N(s.popFirst(5));return i.isEqual(t)||lt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class ln{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yt extends Qu{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new hi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(da("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Yt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Yt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Yt._jsonSchema={type:pe("string",Yt._jsonSchemaVersion),bundleSource:pe("string","DocumentSnapshot"),bundleName:pe("string"),bundle:pe("string")};class hi extends Yt{data(e={}){return super.data(e)}}class ys{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ln(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new hi(this._firestore,this._userDataWriter,s.key,s,new ln(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((l=>{const c=new hi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ln(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>r||l.type!==3)).map((l=>{const c=new hi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ln(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,h=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:pv(l.type),doc:c,oldIndex:d,newIndex:h}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ys._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Vo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],i=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),s.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),i.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function pv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(n){n=He(n,ce);const e=He(n.firestore,os);return Yb(ra(e),n._key).then((t=>fv(e,n,t)))}ys._jsonSchemaVersion="firestore/querySnapshot/1.0",ys._jsonSchema={type:pe("string",ys._jsonSchemaVersion),bundleSource:pe("string","QuerySnapshot"),bundleName:pe("string"),bundle:pe("string")};class Xu extends hv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ce(this.firestore,null,t)}}function Io(n){n=He(n,$s);const e=He(n.firestore,os),t=ra(e),s=new Xu(e);return dv(n._query),Xb(t,n._query).then((i=>new ys(e,s,n,i)))}function To(n,e,t){n=He(n,ce);const s=He(n.firestore,os),i=Yu(n.converter,e);return dr(s,[zu(ar(s),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Be.none())])}function Mc(n,e,t,...s){n=He(n,ce);const i=He(n.firestore,os),r=ar(i);let o;return o=typeof(e=de(e))=="string"||e instanceof or?ov(r,"updateDoc",n._key,e,t,s):rv(r,"updateDoc",n._key,e),dr(i,[o.toMutation(n._key,Be.exists(!0))])}function mi(n){return dr(He(n.firestore,os),[new jo(n._key,Be.none())])}function mv(n,e){const t=He(n.firestore,os),s=Me(n),i=Yu(n.converter,e);return dr(t,[zu(ar(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,Be.exists(!1))]).then((()=>s))}function dr(n,e){return(function(s,i){const r=new rt;return s.asyncQueue.enqueueAndForget((async()=>Fb(await Jb(s),i,r))),r.promise})(ra(n),e)}function fv(n,e,t){const s=t.docs.get(e._key),i=new Xu(n);return new Yt(n,i,e._key,s,new ln(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){Vs=i})(Ds),Ts(new Zt("firestore",((s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),l=new os(new og(s.getProvider("auth-internal")),new cg(o,s.getProvider("app-check-internal")),(function(d,h){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new D(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bn(d.options.projectId,h)})(o,i),o);return r={useFetchStreams:t,...r},l._setSettings(r),l}),"PUBLIC").setMultipleInstances(!0)),Lt(Nl,$l,e),Lt(Nl,$l,"esm2020")})();var gv="firebase",yv="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt(gv,yv,"app");function Zu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bv=Zu,eh=new In("auth","Firebase",Zu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new Ro("@firebase/auth");function vv(n,...e){Oi.logLevel<=K.WARN&&Oi.warn(`Auth (${Ds}): ${n}`,...e)}function fi(n,...e){Oi.logLevel<=K.ERROR&&Oi.error(`Auth (${Ds}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(n,...e){throw pa(n,...e)}function Ze(n,...e){return pa(n,...e)}function th(n,e,t){const s={...bv(),[e]:t};return new In("auth","Firebase",s).create(e,{appName:n.name})}function ot(n){return th(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pa(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return eh.create(n,...e)}function U(n,e,...t){if(!n)throw pa(e,...t)}function nt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw fi(e),new Error(e)}function dt(n,e){n||nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function _v(){return Oc()==="http:"||Oc()==="https:"}function Oc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_v()||Om()||"connection"in navigator)?navigator.onLine:!0}function Ev(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t){this.shortDelay=e,this.longDelay=t,dt(t>e,"Short delay should be less than long delay!"),this.isMobile=Dm()||Nm()}get(){return wv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(n,e){dt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Av=new kn(3e4,6e4);function ht(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function st(n,e,t,s,i={}){return nh(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const l=Tn({key:n.config.apiKey,...o}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:c,...r};return Mm()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&ks(n.emulatorConfig.host)&&(d.credentials="include"),sh.fetch()(await ih(n,n.config.apiHost,t,l),d)})}async function nh(n,e,t){n._canInitEmulator=!1;const s={...Iv,...e};try{const i=new Cv(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ni(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ni(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ni(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ni(n,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw th(n,h,d);ze(n,h)}}catch(i){if(i instanceof ut)throw i;ze(n,"network-request-failed",{message:String(i)})}}async function Dn(n,e,t,s,i={}){const r=await st(n,e,t,s,i);return"mfaPendingCredential"in r&&ze(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function ih(n,e,t,s){const i=`${e}${t}?${s}`,r=n,o=r.config.emulator?ma(n.config,i):`${n.config.apiScheme}://${i}`;return Tv.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function Sv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Cv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Ze(this.auth,"network-request-failed")),Av.get())})}}function ni(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=Ze(n,e,s);return i.customData._tokenResponse=t,i}function Nc(n){return n!==void 0&&n.enterprise!==void 0}class Pv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Sv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function xv(n,e){return st(n,"GET","/v2/recaptchaConfig",ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rv(n,e){return st(n,"POST","/v1/accounts:delete",e)}async function Ni(n,e){return st(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Lv(n,e=!1){const t=de(n),s=await t.getIdToken(e),i=fa(s);U(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:mn(Qr(i.auth_time)),issuedAtTime:mn(Qr(i.iat)),expirationTime:mn(Qr(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Qr(n){return Number(n)*1e3}function fa(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return fi("JWT malformed, contained fewer than 3 sections"),null;try{const i=ld(t);return i?JSON.parse(i):(fi("Failed to decode base64 JWT payload"),null)}catch(i){return fi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $c(n){const e=fa(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ut&&kv(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function kv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=mn(this.lastLoginAt),this.creationTime=mn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $i(n){var m;const e=n.auth,t=await n.getIdToken(),s=await Ls(n,Ni(e,{idToken:t}));U(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const r=(m=i.providerUserInfo)!=null&&m.length?rh(i.providerUserInfo):[],o=Mv(n.providerData,r),l=n.isAnonymous,c=!(n.email&&i.passwordHash)&&!(o!=null&&o.length),d=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new So(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,h)}async function Vv(n){const e=de(n);await $i(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Mv(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function rh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ov(n,e){const t=await nh(n,{},async()=>{const s=Tn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=await ih(n,i,"/v1/token",`key=${r}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:s};return n.emulatorConfig&&ks(n.emulatorConfig.host)&&(c.credentials="include"),sh.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Nv(n,e){return st(n,"POST","/v2/accounts:revokeToken",ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$c(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=$c(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await Ov(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new bs;return s&&(U(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(U(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bs,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ue{constructor({uid:e,auth:t,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new Dv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new So(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ls(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Lv(this,e)}reload(){return Vv(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ue({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await $i(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($e(this.auth.app))return Promise.reject(ot(this.auth));const e=await this.getIdToken();return await Ls(this,Rv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,i=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,l=t.tenantId??void 0,c=t._redirectEventId??void 0,d=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:E,providerData:T,stsTokenManager:L}=t;U(m&&L,e,"internal-error");const P=bs.fromJSON(this.name,L);U(typeof m=="string",e,"internal-error"),vt(s,e.name),vt(i,e.name),U(typeof g=="boolean",e,"internal-error"),U(typeof E=="boolean",e,"internal-error"),vt(r,e.name),vt(o,e.name),vt(l,e.name),vt(c,e.name),vt(d,e.name),vt(h,e.name);const M=new Ue({uid:m,auth:e,email:i,emailVerified:g,displayName:s,isAnonymous:E,photoURL:o,phoneNumber:r,tenantId:l,stsTokenManager:P,createdAt:d,lastLoginAt:h});return T&&Array.isArray(T)&&(M.providerData=T.map(F=>({...F}))),c&&(M._redirectEventId=c),M}static async _fromIdTokenResponse(e,t,s=!1){const i=new bs;i.updateFromServerResponse(t);const r=new Ue({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await $i(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];U(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?rh(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),l=new bs;l.updateFromIdToken(s);const c=new Ue({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new So(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,d),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=new Map;function it(n){dt(n instanceof Function,"Expected a class definition");let e=Fc.get(n);return e?(dt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Fc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oh.type="NONE";const Bc=oh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(n,e,t){return`firebase:${n}:${e}:${t}`}class vs{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=gi(this.userKey,i.apiKey,r),this.fullPersistenceKey=gi("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ni(this.auth,{idToken:e}).catch(()=>{});return t?Ue._fromGetAccountInfoResponse(this.auth,t,e):null}return Ue._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new vs(it(Bc),e,s);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let r=i[0]||it(Bc);const o=gi(s,e.config.apiKey,e.name);let l=null;for(const d of t)try{const h=await d._get(o);if(h){let m;if(typeof h=="string"){const g=await Ni(e,{idToken:h}).catch(()=>{});if(!g)break;m=await Ue._fromGetAccountInfoResponse(e,g,h)}else m=Ue._fromJSON(e,h);d!==r&&(l=m),r=d;break}}catch{}const c=i.filter(d=>d._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new vs(r,e,s):(r=c[0],l&&await r._set(o,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==r)try{await d._remove(o)}catch{}})),new vs(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ah(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hh(e))return"Blackberry";if(ph(e))return"Webos";if(lh(e))return"Safari";if((e.includes("chrome/")||ch(e))&&!e.includes("edge/"))return"Chrome";if(uh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ah(n=Ce()){return/firefox\//i.test(n)}function lh(n=Ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ch(n=Ce()){return/crios\//i.test(n)}function dh(n=Ce()){return/iemobile/i.test(n)}function uh(n=Ce()){return/android/i.test(n)}function hh(n=Ce()){return/blackberry/i.test(n)}function ph(n=Ce()){return/webos/i.test(n)}function ga(n=Ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function $v(n=Ce()){var e;return ga(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Fv(){return $m()&&document.documentMode===10}function mh(n=Ce()){return ga(n)||uh(n)||ph(n)||hh(n)||/windows phone/i.test(n)||dh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(n,e=[]){let t;switch(n){case"Browser":t=Uc(Ce());break;case"Worker":t=`${Uc(Ce())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ds}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,l)=>{try{const c=e(r);o(c)}catch(c){l(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uv(n,e={}){return st(n,"GET","/v2/passwordPolicy",ht(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=6;class Hv{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??jv,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jc(this),this.idTokenSubscription=new jc(this),this.beforeStateQueue=new Bv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=it(t)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await vs.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ni(this,{idToken:e}),s=await Ue._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if($e(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $i(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ev()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($e(this.app))return Promise.reject(ot(this));const t=e?de(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $e(this.app)?Promise.reject(ot(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $e(this.app)?Promise.reject(ot(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(it(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Uv(this),t=new Hv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new In("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Nv(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&it(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await vs.create(this,[it(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if($e(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&vv(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function jt(n){return de(n)}class jc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gm(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ur={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zv(n){ur=n}function gh(n){return ur.loadJS(n)}function Gv(){return ur.recaptchaEnterpriseScript}function Wv(){return ur.gapiScript}function Kv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Qv{constructor(){this.enterprise=new Jv}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Jv{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Yv="recaptcha-enterprise",yh="NO_RECAPTCHA";class Xv{constructor(e){this.type=Yv,this.auth=jt(e)}async verify(e="verify",t=!1){async function s(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,l)=>{xv(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new Pv(c);return r.tenantId==null?r._agentRecaptchaConfig=d:r._tenantRecaptchaConfigs[r.tenantId]=d,o(d.siteKey)}}).catch(c=>{l(c)})})}function i(r,o,l){const c=window.grecaptcha;Nc(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(d=>{o(d)}).catch(()=>{o(yh)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Qv().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(l=>{if(!t&&Nc(window.grecaptcha))i(l,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Gv();c.length!==0&&(c+=l),gh(c).then(()=>{i(l,r,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function Hc(n,e,t,s=!1,i=!1){const r=new Xv(n);let o;if(i)o=yh;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Fi(n,e,t,s,i){var r;if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Hc(n,e,t,t==="getOobCode");return s(n,o)}else return s(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){`${t}`;const l=await Hc(n,e,t,t==="getOobCode");return s(n,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(n,e){const t=ko(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(Xt(r,e??{}))return i;ze(i,"already-initialized")}return t.initialize({options:e})}function e_(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(it);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function t_(n,e,t){const s=jt(n);U(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=bh(e),{host:o,port:l}=s_(e),c=l===null?"":`:${l}`,d={url:`${r}//${o}${c}/`},h=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){U(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),U(Xt(d,s.config.emulator)&&Xt(h,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=h,s.settings.appVerificationDisabledForTesting=!0,ks(o)?(hd(`${r}//${o}${c}`),pd("Auth",!0)):n_()}function bh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function s_(n){const e=bh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:qc(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:qc(o)}}}function qc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function n_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,t){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}async function i_(n,e){return st(n,"POST","/v1/accounts:update",e)}async function r_(n,e){return st(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o_(n,e){return Dn(n,"POST","/v1/accounts:signInWithPassword",ht(n,e))}async function vh(n,e){return st(n,"POST","/v1/accounts:sendOobCode",ht(n,e))}async function a_(n,e){return vh(n,e)}async function l_(n,e){return vh(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c_(n,e){return Dn(n,"POST","/v1/accounts:signInWithEmailLink",ht(n,e))}async function d_(n,e){return Dn(n,"POST","/v1/accounts:signInWithEmailLink",ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends ya{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new En(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new En(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fi(e,t,"signInWithPassword",o_);case"emailLink":return c_(e,{email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fi(e,s,"signUpPassword",r_);case"emailLink":return d_(e,{idToken:t,email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(n,e){return Dn(n,"POST","/v1/accounts:signInWithIdp",ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="http://localhost";class ss extends ya{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=t;if(!s||!i)return null;const o=new ss(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return _s(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,_s(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_s(e,t)}buildRequest(){const e={requestUri:u_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Tn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function p_(n){const e=sn(nn(n)).link,t=e?sn(nn(e)).deep_link_id:null,s=sn(nn(n)).deep_link_id;return(s?sn(nn(s)).link:null)||s||t||e||n}class ba{constructor(e){const t=sn(nn(e)),s=t.apiKey??null,i=t.oobCode??null,r=h_(t.mode??null);U(s&&i&&r,"argument-error"),this.apiKey=s,this.operation=r,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=p_(e);try{return new ba(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.providerId=as.PROVIDER_ID}static credential(e,t){return En._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=ba.parseLink(t);return U(s,"argument-error"),En._fromEmailAndCode(e,s.code,s.tenantId)}}as.PROVIDER_ID="password";as.EMAIL_PASSWORD_SIGN_IN_METHOD="password";as.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends _h{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends Vn{constructor(){super("facebook.com")}static credential(e){return ss._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.FACEBOOK_SIGN_IN_METHOD="facebook.com";It.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Vn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ss._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Tt.credential(t,s)}catch{return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com";Tt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Vn{constructor(){super("github.com")}static credential(e){return ss._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch{return null}}}At.GITHUB_SIGN_IN_METHOD="github.com";At.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Vn{constructor(){super("twitter.com")}static credential(e,t){return ss._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return St.credential(t,s)}catch{return null}}}St.TWITTER_SIGN_IN_METHOD="twitter.com";St.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m_(n,e){return Dn(n,"POST","/v1/accounts:signUp",ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await Ue._fromIdTokenResponse(e,s,i),o=zc(s);return new ns({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=zc(s);return new ns({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function zc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends ut{constructor(e,t,s,i){super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Bi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new Bi(e,t,s,i)}}function wh(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Bi._fromErrorAndOperation(n,r,e,s):r})}async function f_(n,e,t=!1){const s=await Ls(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ns._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eh(n,e,t=!1){const{auth:s}=n;if($e(s.app))return Promise.reject(ot(s));const i="reauthenticate";try{const r=await Ls(n,wh(s,i,e,n),t);U(r.idToken,s,"internal-error");const o=fa(r.idToken);U(o,s,"internal-error");const{sub:l}=o;return U(n.uid===l,s,"user-mismatch"),ns._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ze(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ih(n,e,t=!1){if($e(n.app))return Promise.reject(ot(n));const s="signIn",i=await wh(n,s,e),r=await ns._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function g_(n,e){return Ih(jt(n),e)}async function y_(n,e){return Eh(de(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Th(n){const e=jt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function b_(n,e,t){const s=jt(n);await Fi(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",l_)}async function v_(n,e,t){if($e(n.app))return Promise.reject(ot(n));const s=jt(n),o=await Fi(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",m_).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Th(n),c}),l=await ns._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(l.user),l}function __(n,e,t){return $e(n.app)?Promise.reject(ot(n)):g_(de(n),as.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Th(n),s})}async function w_(n,e){const t=de(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:r}=await a_(t.auth,i);r!==n.email&&await n.reload()}function E_(n,e){return I_(de(n),null,e)}async function I_(n,e,t){const{auth:s}=n,r={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(r.password=t);const o=await Ls(n,i_(s,r));await n._updateTokensIfNecessary(o,!0)}function T_(n,e,t,s){return de(n).onIdTokenChanged(e,t,s)}function A_(n,e,t){return de(n).beforeAuthStateChanged(e,t)}function S_(n,e,t,s){return de(n).onAuthStateChanged(e,t,s)}function Gc(n){return de(n).signOut()}const Ui="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ui,"1"),this.storage.removeItem(Ui),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=1e3,P_=10;class Sh extends Ah{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Fv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,P_):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},C_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sh.type="LOCAL";const x_=Sh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch extends Ah{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ch.type="SESSION";const Ph=Ch;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new hr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const l=Array.from(o).map(async d=>d(t.origin,r)),c=await R_(l);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((l,c)=>{const d=va("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(g.data.response);break;default:clearTimeout(h),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return window}function k_(n){et().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(){return typeof et().WorkerGlobalScope<"u"&&typeof et().importScripts=="function"}async function D_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function V_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function M_(){return xh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="firebaseLocalStorageDb",O_=1,ji="firebaseLocalStorage",Lh="fbase_key";class Mn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function pr(n,e){return n.transaction([ji],e?"readwrite":"readonly").objectStore(ji)}function N_(){const n=indexedDB.deleteDatabase(Rh);return new Mn(n).toPromise()}function Co(){const n=indexedDB.open(Rh,O_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(ji,{keyPath:Lh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(ji)?e(s):(s.close(),await N_(),e(await Co()))})})}async function Wc(n,e,t){const s=pr(n,!0).put({[Lh]:e,value:t});return new Mn(s).toPromise()}async function $_(n,e){const t=pr(n,!1).get(e),s=await new Mn(t).toPromise();return s===void 0?null:s.value}function Kc(n,e){const t=pr(n,!0).delete(e);return new Mn(t).toPromise()}const F_=800,B_=3;class kh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Co(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>B_)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hr._getInstance(M_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await D_(),!this.activeServiceWorker)return;this.sender=new L_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||V_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Co();return await Wc(e,Ui,"1"),await Kc(e,Ui),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Wc(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>$_(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Kc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=pr(i,!1).getAll();return new Mn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),F_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kh.type="LOCAL";const U_=kh;new kn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(n,e){return e?it(e):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a extends ya{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _s(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _s(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _s(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function H_(n){return Ih(n.auth,new _a(n),n.bypassAuthState)}function q_(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),Eh(t,new _a(n),n.bypassAuthState)}async function z_(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),f_(t,new _a(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return H_;case"linkViaPopup":case"linkViaRedirect":return z_;case"reauthViaPopup":case"reauthViaRedirect":return q_;default:ze(this.auth,"internal-error")}}resolve(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=new kn(2e3,1e4);class fs extends Dh{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,fs.currentPopupAction&&fs.currentPopupAction.cancel(),fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const e=va();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,G_.get())};e()}}fs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_="pendingRedirect",yi=new Map;class K_ extends Dh{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=yi.get(this.auth._key());if(!e){try{const s=await Q_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}yi.set(this.auth._key(),e)}return this.bypassAuthState||yi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Q_(n,e){const t=X_(e),s=Y_(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function J_(n,e){yi.set(n._key(),e)}function Y_(n){return it(n._redirectPersistence)}function X_(n){return gi(W_,n.config.apiKey,n.name)}async function Z_(n,e,t=!1){if($e(n.app))return Promise.reject(ot(n));const s=jt(n),i=j_(s,e),o=await new K_(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=600*1e3;class tw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Vh(e)){const i=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Ze(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ew&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qc(e))}saveEventToCache(e){this.cachedEventUids.add(Qc(e)),this.lastProcessedEventTime=Date.now()}}function Qc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Vh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nw(n,e={}){return st(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rw=/^https?/;async function ow(n){if(n.config.emulator)return;const{authorizedDomains:e}=await nw(n);for(const t of e)try{if(aw(t))return}catch{}ze(n,"unauthorized-domain")}function aw(n){const e=Ao(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!rw.test(t))return!1;if(iw.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=new kn(3e4,6e4);function Jc(){const n=et().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function cw(n){return new Promise((e,t)=>{var i,r,o;function s(){Jc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jc(),t(Ze(n,"network-request-failed"))},timeout:lw.get()})}if((r=(i=et().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=et().gapi)!=null&&o.load)s();else{const l=Kv("iframefcb");return et()[l]=()=>{gapi.load?s():t(Ze(n,"network-request-failed"))},gh(`${Wv()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw bi=null,e})}let bi=null;function dw(n){return bi=bi||cw(n),bi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=new kn(5e3,15e3),hw="__/auth/iframe",pw="emulator/auth/iframe",mw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gw(n){const e=n.config;U(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ma(e,pw):`https://${n.config.authDomain}/${hw}`,s={apiKey:e.apiKey,appName:n.name,v:Ds},i=fw.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${Tn(s).slice(1)}`}async function yw(n){const e=await dw(n),t=et().gapi;return U(t,n,"internal-error"),e.open({where:document.body,url:gw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mw,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ze(n,"network-request-failed"),l=et().setTimeout(()=>{r(o)},uw.get());function c(){et().clearTimeout(l),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vw=500,_w=600,ww="_blank",Ew="http://localhost";class Yc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Iw(n,e,t,s=vw,i=_w){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c={...bw,width:s.toString(),height:i.toString(),top:r,left:o},d=Ce().toLowerCase();t&&(l=ch(d)?ww:t),ah(d)&&(e=e||Ew,c.scrollbars="yes");const h=Object.entries(c).reduce((g,[E,T])=>`${g}${E}=${T},`,"");if($v(d)&&l!=="_self")return Tw(e||"",l),new Yc(null);const m=window.open(e||"",l,h);U(m,n,"popup-blocked");try{m.focus()}catch{}return new Yc(m)}function Tw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw="__/auth/handler",Sw="emulator/auth/handler",Cw=encodeURIComponent("fac");async function Xc(n,e,t,s,i,r){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Ds,eventId:i};if(e instanceof _h){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",zm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,m]of Object.entries({}))o[h]=m}if(e instanceof Vn){const h=e.getScopes().filter(m=>m!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await n._getAppCheckToken(),d=c?`#${Cw}=${encodeURIComponent(c)}`:"";return`${Pw(n)}?${Tn(l).slice(1)}${d}`}function Pw({config:n}){return n.emulator?ma(n,Sw):`https://${n.authDomain}/${Aw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="webStorageSupport";class xw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ph,this._completeRedirectFn=Z_,this._overrideRedirectResult=J_}async _openPopup(e,t,s,i){var o;dt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await Xc(e,t,s,Ao(),i);return Iw(e,r,va())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await Xc(e,t,s,Ao(),i);return k_(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(dt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await yw(e),s=new tw(e);return t.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Jr,{type:Jr},i=>{var o;const r=(o=i==null?void 0:i[0])==null?void 0:o[Jr];r!==void 0&&t(!!r),ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ow(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return mh()||lh()||ga()}}const Rw=xw;var Zc="@firebase/auth",ed="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Dw(n){Ts(new Zt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fh(n)},d=new qv(s,i,r,c);return e_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ts(new Zt("auth-internal",e=>{const t=jt(e.getProvider("auth").getImmediate());return(s=>new Lw(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(Zc,ed,kw(n)),Lt(Zc,ed,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw=300,Mw=ud("authIdTokenMaxAge")||Vw;let td=null;const Ow=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Mw)return;const i=t==null?void 0:t.token;td!==i&&(td=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Nw(n=yd()){const e=ko(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Zv(n,{popupRedirectResolver:Rw,persistence:[U_,x_,Ph]}),s=ud("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=Ow(r.toString());A_(t,o,()=>o(t.currentUser)),T_(t,l=>o(l))}}const i=cd("auth");return i&&t_(t,`http://${i}`),t}function $w(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}zv({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=Ze("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",$w().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Dw("Browser");const Fw={apiKey:"AIzaSyAqD9Bl309zNbCL9GzNGgbFndb4JM2zRBg",authDomain:"docengine-prod.firebaseapp.com",projectId:"docengine-prod",storageBucket:"docengine-prod.firebasestorage.app",messagingSenderId:"28491837614",appId:"1:28491837614:web:9b486e57ad1f5088d03d3f"},Mh=gd(Fw),Te=ev(Mh),Et=Nw(Mh),ye={masterKey:null,async generateKey(n){const e=new TextEncoder,t=await crypto.subtle.importKey("raw",e.encode(n),"PBKDF2",!1,["deriveKey"]);return await crypto.subtle.deriveKey({name:"PBKDF2",salt:e.encode("DocEngine_Static_Salt"),iterations:1e5,hash:"SHA-256"},t,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])},async setMasterKey(n){this.masterKey=await this.generateKey(n)},async encryptData(n,e=null){const t=e||this.masterKey;if(!t)throw new Error("Frase maestra no inicializada.");const s=new TextEncoder,i=crypto.getRandomValues(new Uint8Array(12)),r=await crypto.subtle.encrypt({name:"AES-GCM",iv:i},t,s.encode(JSON.stringify(n)));return{ciphertext:btoa(String.fromCharCode(...new Uint8Array(r))),iv:btoa(String.fromCharCode(...i))}},async decryptData(n){if(!this.masterKey)throw new Error("Frase maestra no inicializada.");try{if(!n||!n.iv||!n.ciphertext)throw new Error("El objeto cifrado está incompleto o corrupto.");const e=l=>{if(typeof l!="string")return"";let c=l.replace(/[\s\n\r]/g,"");for(c=c.replace(/-/g,"+").replace(/_/g,"/");c.length%4;)c+="=";return c},t=e(n.iv),s=e(n.ciphertext),i=new Uint8Array(atob(t).split("").map(l=>l.charCodeAt(0))),r=new Uint8Array(atob(s).split("").map(l=>l.charCodeAt(0))),o=await crypto.subtle.decrypt({name:"AES-GCM",iv:i},this.masterKey,r);return JSON.parse(new TextDecoder().decode(o))}catch(e){if(e.name==="InvalidCharacterError")console.error("[CRYPTO] Error de formato Base64. IV Recibido:",n.iv);else if(e.name==="OperationError")throw e;throw console.error("[CRYPTO] Fallo técnico al decodificar:",e),e}}},Ct={getCurrentUser(){return Et.currentUser},onAuthStateChanged(n){return S_(Et,n)},async login(n,e){try{const s=(await __(Et,n,e)).user;if(!s.emailVerified)throw await Gc(Et),new Error("Debes verificar tu correo electrónico antes de entrar.");return s}catch(t){throw console.error("[AUTH] Error:",t.code),t.message.includes("verificar tu correo")?t:new Error("Credenciales inválidas o error de conexión.")}},async signup(n,e){try{const s=(await v_(Et,n,e)).user;return await w_(s),await To(Me(Te,"users",s.uid),{email:n,createdAt:new Date().toISOString(),emailVerified:!1}),s}catch(t){throw new Error("Error en registro: "+t.message)}},async logout(){return Gc(Et)}},j={_toastContainer:null,init(){this._injectToastContainer(),this._injectModals()},toast(n,e="success"){this._toastContainer||this.init();const t=`toast-${Date.now()}`,i=`
      <div id="${t}" class="toast align-items-center text-bg-light border-0 shadow-sm mb-2" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body d-flex align-items-center gap-2 fw-medium">
            <i class="fa-solid ${e==="success"?"fa-check-circle text-success":e==="danger"?"fa-circle-exclamation text-danger":"fa-info-circle text-info"} fs-5"></i>
            ${n}
          </div>
          <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    `;this._toastContainer.insertAdjacentHTML("beforeend",i);const r=document.getElementById(t),o=new bootstrap.Toast(r,{delay:3500});r.addEventListener("hidden.bs.toast",()=>r.remove()),o.show()},confirm(n,e){return document.getElementById("ds-modal-confirm")||this.init(),new Promise(t=>{document.getElementById("ds-confirm-title").innerText=n,document.getElementById("ds-confirm-msg").innerHTML=e;const s=document.getElementById("ds-modal-confirm"),i=new bootstrap.Modal(s),r=document.getElementById("ds-btn-confirm-ok"),o=document.getElementById("ds-btn-confirm-cancel"),l=()=>{r.onclick=null,o.onclick=null,s.removeEventListener("hidden.bs.modal",c)},c=()=>{l(),t(!1)};r.onclick=()=>{i.hide(),l(),t(!0)},o.onclick=()=>{i.hide(),l(),t(!1)},s.addEventListener("hidden.bs.modal",c),i.show()})},promptPassword(n,e){return document.getElementById("ds-modal-password")||this.init(),new Promise(t=>{document.getElementById("ds-pwd-title").innerText=n,document.getElementById("ds-pwd-msg").innerText=e;const s=document.getElementById("ds-pwd-input");s.value="";const i=document.getElementById("ds-modal-password"),r=new bootstrap.Modal(i);document.getElementById("ds-btn-pwd-ok");const o=document.getElementById("ds-btn-pwd-cancel"),l=document.getElementById("ds-pwd-form"),c=()=>{l.onsubmit=null,o.onclick=null,i.removeEventListener("hidden.bs.modal",d)},d=()=>{c(),t(null)};l.onsubmit=h=>{h.preventDefault();const m=s.value.trim();r.hide(),c(),t(m===""?null:m)},o.onclick=()=>{r.hide(),c(),t(null)},i.addEventListener("hidden.bs.modal",d),r.show(),i.addEventListener("shown.bs.modal",()=>s.focus(),{once:!0})})},_injectToastContainer(){document.getElementById("ds-toast-container")||(this._toastContainer=document.createElement("div"),this._toastContainer.id="ds-toast-container",this._toastContainer.className="toast-container position-fixed bottom-0 end-0 p-3",this._toastContainer.style.zIndex="1090",document.body.appendChild(this._toastContainer))},_injectModals(){if(document.getElementById("ds-modal-confirm"))return;document.body.insertAdjacentHTML("beforeend",`
      <!-- Modal Confirmación -->
      <div class="modal fade" id="ds-modal-confirm" tabindex="-1" aria-hidden="true" style="z-index: 1100;">
        <div class="modal-dialog modal-dialog-centered modal-sm">
          <div class="modal-content shadow">
            <div class="modal-header border-0 pb-0">
              <h5 class="modal-title fw-bold text-danger" id="ds-confirm-title">Confirmar</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-secondary" id="ds-confirm-msg">¿Estás seguro?</div>
            <div class="modal-footer border-0 pt-0">
              <button type="button" class="btn btn-light" id="ds-btn-confirm-cancel">Cancelar</button>
              <button type="button" class="btn btn-danger px-4" id="ds-btn-confirm-ok">Sí, proceder</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal Contraseña -->
      <div class="modal fade" id="ds-modal-password" tabindex="-1" aria-hidden="true" style="z-index: 1100;">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content shadow border-warning">
            <div class="modal-header text-bg-warning border-0">
              <h5 class="modal-title fw-bold" id="ds-pwd-title"><i class="fa-solid fa-lock me-2"></i>Seguridad</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form id="ds-pwd-form">
              <div class="modal-body">
                <p class="text-secondary mb-3" id="ds-pwd-msg">Ingrese su contraseña:</p>
                <div class="input-group mb-3">
                  <span class="input-group-text bg-light"><i class="fa-solid fa-key"></i></span>
                  <input type="text" class="form-control form-control-lg" id="ds-pwd-input" placeholder="Frase Maestra" required autocomplete="current-password">
                </div>
              </div>
              <div class="modal-footer border-0 bg-light">
                <button type="button" class="btn btn-outline-secondary" id="ds-btn-pwd-cancel">Cancelar</button>
                <button type="submit" class="btn btn-warning px-4 fw-bold">Desbloquear</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `)}},q={get _masterKey(){return ye.masterKey},async initDB(){return!0},authenticate(n,e){return Ct.login(n,e)},signup(n,e){return Ct.signup(n,e)},logout(){return ye.masterKey=null,Ct.logout()},getCurrentUser(){return Ct.getCurrentUser()},onAuthStateChanged(n){return Ct.onAuthStateChanged(n)},async setMasterKey(n){return ye.setMasterKey(n)},async encryptData(n){return ye.encryptData(n)},async decryptData(n){return ye.decryptData(n)},async save(n,e){const t=this.getCurrentUser();if(!t&&n!=="users")throw new Error("Usuario no autenticado.");const s=JSON.parse(JSON.stringify(e));if(s.userId=t?t.uid:n==="users"?s.id:null,s.isEncrypted&&s.content){if(!ye.masterKey)throw new Error("Imposible guardar: Documento requiere cifrado pero no hay Llave Maestra.");s.content=await ye.encryptData(s.content)}!s.isEncrypted&&s.content&&Array.isArray(s.content)&&s.content.forEach(i=>{if(Array.isArray(i.value)&&i.value.length>0&&Array.isArray(i.value[0])){const r={};i.value.forEach((o,l)=>{r[l]=o}),i.value=r,i.storageMode="nested_map"}});try{return await To(Me(Te,n,s.id),s),!0}catch(i){throw console.error("Error Firestore:",i),new Error("Error al guardar en la nube: "+i.message)}},async getOne(n,e){if(!e)return null;const t=n==="doc";t&&`${n}${e}`;try{const s=Me(Te,n,e),i=await pi(s);if(!i.exists())return t&&console.warn("[STORAGE-DEBUG] Documento no existe en Firebase."),null;let r={id:i.id,...i.data()};if(r.isEncrypted&&r.content){if(!ye.masterKey)return t&&console.warn("[STORAGE-DEBUG] ⚠️ No hay llave maestra en memoria. Retornando bloqueo."),{...r,content:null,decryptionError:!0};try{const o=await ye.decryptData(r.content);let l={...r,content:o,decryptionError:!1};return this._hydrateDocument(l)}catch(o){return t&&console.error("[STORAGE-DEBUG] ⛔ Error al descifrar (Llave incorrecta o datos corruptos):",o),{...r,content:null,decryptionError:!0}}}return this._hydrateDocument(r)}catch(s){throw console.error(`[STORAGE-DEBUG] Error obteniendo ${n}/${e}:`,s),s}},async getAll(n){const e=this.getCurrentUser();if(!e)return[];try{const t=Eo(Vi(Te,n),ui("userId","==",e.uid)),s=await Io(t),i=[];for(const r of s.docs){let o=r.data();if(o.isEncrypted&&ye.masterKey)try{o.content=await ye.decryptData(o.content)}catch{o.decryptionError=!0}o=this._hydrateDocument(o),i.push(o)}return i.sort((r,o)=>o.id.localeCompare(r.id))}catch(t){return console.error("[STORAGE] Error getAll:",t),[]}},async delete(n,e){try{await mi(Me(Te,n,e))}catch{throw new Error("No se pudo eliminar el documento.")}},_hydrateDocument(n){return n&&Array.isArray(n.content)&&n.content.forEach(e=>{e.storageMode==="nested_map"&&e.value&&typeof e.value=="object"&&(e.value=Object.keys(e.value).sort((t,s)=>Number(t)-Number(s)).map(t=>e.value[t]),delete e.storageMode)}),n},async hasSecurityConfigured(){const n=this.getCurrentUser();return n?(await pi(Me(Te,"security",n.uid))).exists():!1},async saveSecurityVerifier(n){const e=this.getCurrentUser();if(!e)throw console.error("[STORAGE] Error: Intento de guardar verificado sin sesión activa."),new Error("No hay una sesión de usuario activa.");try{return await To(Me(Te,"security",e.uid),{userId:e.uid,verifier:n,updatedAt:new Date().toISOString()}),!0}catch(t){throw console.error("[STORAGE] Error guardando verificado:",t),t}},async changeMasterPhrase(n,e){n&&n.length;try{const t=await this.verifyMasterPhrase(n);if(!t)throw console.error("[STORAGE-DEBUG] ⛔ La verificación retornó FALSE. Lanzando error..."),new Error("La frase maestra anterior es incorrecta.");const s=this.getCurrentUser();await ye.setMasterKey(e);const i=await ye.encryptData({check:"VERIFIED"});return await this.saveSecurityVerifier(i),!0}catch(t){throw console.error("[STORAGE-DEBUG] ❌ Error en changeMasterPhrase:",t),t}},async hardResetSecurity(){const n=this.getCurrentUser();if(!n)throw new Error("No hay sesión activa.");try{const e=Eo(Vi(Te,"doc"),ui("userId","==",n.uid),ui("isEncrypted","==",!0)),t=await Io(e),s=[];`${t.size}`,t.forEach(r=>{s.push(mi(r.ref))}),await Promise.all(s);const i=Me(Te,"security",n.uid);return await mi(i),ye.masterKey=null,!0}catch(e){throw console.error("[STORAGE] Error en Hard Reset:",e),new Error("No se pudo completar el borrado masivo: "+e.message)}},async verifyMasterPhrase(n){const e=this.getCurrentUser();if(!e)return console.error("[VERIFY] Error: No hay sesión de usuario activa."),!1;try{e.uid;const t=Me(Te,"security",e.uid),s=await pi(t);if(!s.exists())return console.error("[VERIFY] Fallo: No existe configuración de seguridad en la base de datos."),console.warn("Posible causa: Es un entorno nuevo y no se ha ejecutado el 'Setup' inicial."),!1;const i=s.data();if(!i||!i.verifier)return console.error("[VERIFY] Fallo: El documento existe pero no tiene el campo 'verifier'."),!1;const{verifier:r}=i,o=ye.masterKey;try{await ye.setMasterKey(n);const l=await ye.decryptData(r);return l&&l.check==="VERIFIED"?!0:(console.warn("[VERIFY] Descifrado exitoso pero el contenido no coincide."),!1)}catch{return console.warn("[VERIFY] La frase es incorrecta (Error de descifrado)."),ye.masterKey=o,!1}}catch(t){return console.error("[VERIFY] ⛔ ERROR DE SISTEMA CRÍTICO:",t),j.toast("Error de conexión o sistema: "+t.message,"danger"),!1}}},vi={validatePassword(n){return/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(n)},async signup(n,e){if(!this.validatePassword(e))throw new Error("La contraseña no cumple los requisitos.");try{return await q.signup(n,e),{requiresVerification:!0}}catch(t){throw console.error("Error en Auth.signup:",t),t.message.includes("email-already-in-use")?new Error("Este correo ya está registrado."):t}},async login(n,e){return await q.authenticate(n,e)},async recoverPassword(n){if(!n)throw new Error("Por favor ingresa tu correo electrónico.");try{return await b_(Et,n),!0}catch(e){let t="Error al enviar correo.";throw e.code==="auth/user-not-found"&&(t="No existe cuenta con este correo."),e.code==="auth/invalid-email"&&(t="El correo no es válido."),new Error(t)}}},Oh={container:document.getElementById("auth-container"),appContent:document.getElementById("app-content"),renderLogin(){const n=document.getElementById("user-none"),e=document.getElementById("pass-none");n&&(n.style.display="none"),e&&(e.style.display="none"),this.appContent&&(this.appContent.style.display="none"),this.container&&(this.container.style.display="block");const t=document.getElementById("theme-link").getAttribute("href"),s=`./src/views/manual.html?theme=${encodeURIComponent(t)}`;this.container.innerHTML=`
        <div class="container d-flex justify-content-center align-items-center vh-100">
            <div class="card shadow-lg p-4" style="width: 400px;">
                <h3 class="text-center mb-4"><i class="fa-solid fa-shield-halved text-primary"></i> Acceso</h3>
                
                <ul class="nav nav-tabs mb-3">
                    <li class="nav-item"><button class="nav-link active" data-bs-toggle="tab" data-bs-target="#l-pane">Login</button></li>
                    <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#s-pane">Registro</button></li>
                </ul>

                <div class="tab-content">
                    <div class="tab-pane fade show active" id="l-pane">
                        <div class="input-group mb-3">
                            <span class="input-group-text bg-white text-muted"><i class="fa-solid fa-envelope"></i></span>
                            <input autocomplete="off" spellcheck="false" type="email" id="email-l" class="form-control" placeholder="Correo electrónico">
                        </div>
                        <div class="input-group mb-2">
                            <span class="input-group-text bg-white text-muted"><i class="fa-solid fa-lock"></i></span>
                            <input autocomplete="off" spellcheck="false" type="password" id="pass-l" class="form-control" placeholder="Contraseña">
                            <button class="btn btn-outline-secondary toggle-password" type="button" data-target="pass-l"><i class="fa-solid fa-eye"></i></button>
                        </div>
                        
                        <div class="text-end mb-3">
                            <a href="#" id="btn-forgot" class="small text-decoration-none text-primary fw-bold">¿Olvidaste tu contraseña?</a>
                        </div>

                        <button id="btn-login" class="btn btn-primary w-100 fw-bold">Entrar</button>
                    </div>

                    <div class="tab-pane fade" id="s-pane">
                        <div class="input-group mb-2">
                            <span class="input-group-text bg-white text-muted"><i class="fa-solid fa-envelope"></i></span>
                            <input autocomplete="off" spellcheck="false" type="email" id="email-s" class="form-control" placeholder="Correo">
                        </div>
                        <div class="input-group mb-2">
                            <span class="input-group-text bg-white text-muted"><i class="fa-solid fa-lock"></i></span>
                            <input autocomplete="off" spellcheck="false" type="password" id="pass-s" class="form-control" placeholder="Contraseña">
                            <button class="btn btn-outline-secondary toggle-password" type="button" data-target="pass-s"><i class="fa-solid fa-eye"></i></button>
                        </div>
                        <small class="text-muted d-block mb-3" style="font-size: 0.75rem;">
                          <i class="fa-solid fa-circle-info me-1"></i>Requisito: 8+ car., 1 Mayúscula, 1 Número y 1 Símbolo (@, #, $, %, &).
                        </small>
                        <button id="btn-signup" class="btn btn-success w-100 fw-bold">Crear Cuenta</button>
                    </div>
                </div>

                <div id="auth-err" class="alert alert-danger mt-3 small shadow-sm border-0" style="display:none;"></div>
                <div id="auth-success" class="alert alert-success mt-3 small shadow-sm border-0" style="display:none;"></div>

                <div class="text-center mt-4 pt-3 border-top">
                    <a href="#" class="text-decoration-none text-body small" data-bs-toggle="modal" data-bs-target="#modal-app-info">
                        <i class="fa-solid fa-circle-question me-1"></i>¿Qué es DocEngine?
                    </a>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modal-app-info" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title"><i class="fa-solid fa-sitemap me-2"></i>¿Cómo funciona mis datos?</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                <div class="modal-body bg-light">
                    <div class="container-fluid p-0">
                        
                        <div class="card shadow-sm mb-4 border-0">
                            <div class="card-header bg-white pt-3 border-bottom-0">
                                <h5 class="card-title text-primary fw-bold mb-0">1. Tus Documentos y Formularios</h5>
                            </div>
                            <div class="card-body">
                                <p class="text-secondary small mb-3">
                                    Imagina que DocEngine es tu oficina digital. Aquí es donde creas las facturas, reportes y llenas formularios.
                                </p>
                                
                                <div class="d-flex flex-column flex-md-row justify-content-between align-items-center bg-white p-3 rounded border text-center">
                                    
                                    <div class="position-relative p-2">
                                        <div class="display-6 text-primary mb-2"><i class="fa-solid fa-pen-ruler"></i></div>
                                        <div class="fw-bold">Tú Diseñas</div>
                                        <div class="small text-muted">Creas la plantilla</div>
                                    </div>

                                    <div class="d-none d-md-block fs-4 text-muted"><i class="fa-solid fa-arrow-right"></i></div>
                                    <div class="d-block d-md-none fs-4 text-muted my-2"><i class="fa-solid fa-arrow-down"></i></div>

                                    <div class="position-relative p-2">
                                        <div class="display-6 text-success mb-2"><i class="fa-solid fa-keyboard"></i></div>
                                        <div class="fw-bold">Tú Escribes</div>
                                        <div class="small text-muted">Llenas los datos</div>
                                    </div>

                                    <div class="d-none d-md-block fs-4 text-muted"><i class="fa-solid fa-arrow-right"></i></div>
                                    <div class="d-block d-md-none fs-4 text-muted my-2"><i class="fa-solid fa-arrow-down"></i></div>

                                    <div class="card bg-warning bg-opacity-10 border-warning" style="min-width: 180px;">
                                        <div class="card-body p-2">
                                            <div class="display-6 text-warning mb-2"><i class="fa-solid fa-cloud"></i></div>
                                            <div class="fw-bold">La Nube de Datos</div>
                                            <div class="small text-muted">Tu archivador digital</div>
                                            <div class="badge bg-warning text-dark mt-1"><i class="fa-solid fa-lock me-1"></i>Puede ir Cifrado</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card shadow-sm mb-4 border-0">
                            <div class="card-header bg-white pt-3 border-bottom-0">
                                <h5 class="card-title text-dark fw-bold mb-0">2. Tus Fotos y Archivos Pesados</h5>
                            </div>
                            <div class="card-body">
                                <p class="text-secondary small mb-3">
                                    Para que la aplicación sea rápida, no guardamos las fotos pesadas junto con los papeles. Las guardamos en una "Bóveda Blindada" separada (usamos tecnología GitHub segura).
                                </p>

                                <div class="d-flex flex-column flex-md-row justify-content-between align-items-center bg-dark text-white p-3 rounded text-center">
                                    
                                    <div class="position-relative p-2">
                                        <div class="display-6 text-info mb-2"><i class="fa-solid fa-images"></i></div>
                                        <div class="fw-bold">Tus Archivos</div>
                                        <div class="small text-white-50">Fotos, Audios, PDFs</div>
                                    </div>

                                    <div class="d-none d-md-block fs-4 text-white-50"><i class="fa-solid fa-arrow-right"></i></div>
                                    <div class="d-block d-md-none fs-4 text-white-50 my-2"><i class="fa-solid fa-arrow-down"></i></div>

                                    <div class="position-relative p-2">
                                        <div class="display-6 text-white mb-2"><i class="fa-solid fa-user-shield"></i></div>
                                        <div class="fw-bold">Verificación</div>
                                        <div class="small text-white-50">¿Eres realmente tú?</div>
                                    </div>

                                    <div class="d-none d-md-block fs-4 text-white-50"><i class="fa-solid fa-arrow-right"></i></div>
                                    <div class="d-block d-md-none fs-4 text-white-50 my-2"><i class="fa-solid fa-arrow-down"></i></div>

                                    <div class="card bg-secondary border-light" style="min-width: 180px;">
                                        <div class="card-body p-2">
                                            <div class="display-6 text-white mb-2"><i class="fa-solid fa-box-archive"></i></div>
                                            <div class="fw-bold">Bóveda Privada</div>
                                            <div class="badge bg-light text-dark mt-1">Acceso Restringido</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card shadow-sm border-0 border-start border-5 border-success">
                            <div class="card-body">
                                <h5 class="card-title text-success fw-bold mb-3"><i class="fa-solid fa-shield-halved me-2"></i>Tu Llave Maestra: Lo más importante</h5>
                                
                                <p class="text-secondary small mb-3">
                                    Nosotros guardamos tus cajas fuertes, <strong>pero solo tú tienes la llave para abrirlas</strong>. 
                                </p>

                                <div class="d-flex align-items-center justify-content-center bg-white border p-3 rounded">
                                    <div class="text-center me-3">
                                        <i class="fa-solid fa-user-lock fs-1 text-secondary"></i>
                                        <div class="small fw-bold mt-1">TÚ</div>
                                    </div>
                                    
                                    <div class="fs-4 text-muted mx-2">
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </div>

                                    <div class="text-center p-2 bg-warning bg-opacity-10 border border-warning rounded mx-2">
                                        <i class="fa-solid fa-key text-warning fs-3"></i>
                                        <div class="x-small fw-bold text-dark mt-1">Tu Llave Real</div>
                                        <div class="x-small text-danger fw-bold">(Nunca sale de tu PC)</div>
                                    </div>

                                    <div class="fs-4 text-muted mx-2">
                                        <i class="fa-solid fa-not-equal"></i>
                                    </div>

                                    <div class="text-center p-2 bg-success bg-opacity-10 border border-success rounded mx-2">
                                        <i class="fa-solid fa-fingerprint text-success fs-3"></i>
                                        <div class="x-small fw-bold text-success">Copia de Seguridad</div>
                                        <div class="x-small text-muted">(Lo que tenemos nosotros)</div>
                                    </div>
                                </div>
                                
                                <div class="alert alert-warning d-flex align-items-center mt-3 mb-0 p-2 small" role="alert">
                                    <i class="fa-solid fa-triangle-exclamation fs-4 me-3"></i>
                                    <div>
                                        <strong>¡Ojo!</strong> Como nosotros solo tenemos la "huella digital" y no la llave real, <strong>si pierdes tu Frase Maestra, no podremos recuperar tus documentos cifrados.</strong> Anótala en un lugar seguro.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
                <div class="modal-footer bg-light p-2 justify-content-between">
                  <a href="${s}" target="_blank" class="btn btn-outline-secondary btn-sm">
                    <i class="fa-solid fa-book me-2"></i>Ver Manual Completo
                  </a>
                  <button type="button" class="btn btn-primary fw-bold" data-bs-dismiss="modal">¡Entendido, todo claro!</button>
                </div>
            </div>
        </div>
    </div>`,this._bindAuthEvents()},_bindAuthEvents(){const n=document.getElementById("btn-login");n&&(n.onclick=async()=>{const s=document.getElementById("email-l").value.trim(),i=document.getElementById("pass-l").value;if(!s||!i)return this._showError("Ingrese correo y contraseña.");try{await q.authenticate(s,i),location.reload()}catch(r){this._showError(r.message)}});const e=document.getElementById("btn-signup");e&&(e.onclick=async()=>{const s=document.getElementById("email-s").value.trim(),i=document.getElementById("pass-s").value;if(!vi.validatePassword(i))return this._showError("La contraseña no cumple los requisitos.");const r=e.innerHTML;e.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Creando...',e.disabled=!0;try{await vi.signup(s,i),this._showSuccess(`
              <b>¡Cuenta creada!</b><br>
              Hemos enviado un enlace de confirmación a <b>${s}</b>.<br>
              Por favor verifícalo antes de iniciar sesión.
            `),document.getElementById("email-s").value="",document.getElementById("pass-s").value=""}catch(o){this._showError(o.message)}finally{e.innerHTML=r,e.disabled=!1}});const t=document.getElementById("btn-forgot");t&&(t.onclick=async s=>{s.preventDefault();const i=document.getElementById("email-l"),r=i.value.trim();if(!r)return i.classList.add("is-invalid"),i.focus(),this._showError("Escribe tu correo en el campo de Login para enviarte el enlace.");i.classList.remove("is-invalid");const o=t.innerHTML;t.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i> Enviando...',t.style.pointerEvents="none";try{await vi.recoverPassword(r),this._showSuccess(`<b>¡Enviado!</b> Revisa tu correo ${r} para restablecer la clave.`)}catch(l){this._showError(l.message)}finally{t.innerHTML=o,t.style.pointerEvents="auto"}})},initLogout(){const n=document.getElementById("btn-logout-link");n&&(n.onclick=async e=>{e.preventDefault();try{await q.logout(),window.location.href=window.location.pathname}catch(t){console.error("Error al cerrar sesión:",t)}})},_showError(n){const e=document.getElementById("auth-err"),t=document.getElementById("auth-success");e&&(e.innerHTML=`<i class="fa-solid fa-triangle-exclamation me-1"></i> ${n}`,e.style.display="block"),t&&(t.style.display="none")},_showSuccess(n){const e=document.getElementById("auth-err"),t=document.getElementById("auth-success");t&&(t.innerHTML=n,t.style.display="block"),e&&(e.style.display="none")}},Po={async saveTemplate(n){if(!n.title.trim())throw new Error("Título obligatorio");if(n.elements.length===0)throw new Error("Diseño vacío");n.updatedAt=new Date().toISOString(),await q.save("tpl",n)},async deleteTemplate(n){await q.delete("tpl",n)},async loadTemplates(){return await q.getAll("tpl")}};class Bw{constructor(e){this.tableBody=e.tableBody,this.tableHeaders=e.tableHeaders,this.paginationContainer=e.paginationContainer,this.renderRowHTML=e.renderRowHTML,this.extractSearchString=e.extractSearchString,this.onRenderComplete=e.onRenderComplete,this.customSort=e.customSort,this.dummyRowHTML=e.dummyRowHTML,this.marginBot=e.marginBot!==void 0?e.marginBot:40,this.data=[],this.state={currentPage:1,itemsPerPage:10,totalPages:1,searchTerm:"",filters:{},sortColumn:"updatedAt",sortAsc:!1},this._resizeTimer=null,this._bindWindowResize(),this._bindHeaders(),this._bindPaginationEvents()}setData(e){this.data=e||[],this.state.currentPage=1,this.render()}setSearchTerm(e){this.state.searchTerm=this._normalizeText(e),this.state.currentPage=1,this.render()}setFilter(e,t){this.state.filters[e]=t,this.state.currentPage=1,this.render()}setSort(e){this.state.sortColumn===e?this.state.sortAsc=!this.state.sortAsc:(this.state.sortColumn=e,this.state.sortAsc=!0),this.state.currentPage=1,this._updateHeaderIcons(),this.render()}_bindHeaders(){if(!this.tableHeaders)return;this.tableHeaders.querySelectorAll(".sortable").forEach(t=>{t.style.cursor="pointer",t.addEventListener("click",()=>{const s=t.dataset.column;s&&this.setSort(s)})}),this._updateHeaderIcons()}_updateHeaderIcons(){if(!this.tableHeaders)return;this.tableHeaders.querySelectorAll(".sortable").forEach(t=>{let s=t.querySelector("i");s||(s=document.createElement("i"),t.appendChild(s));const i=t.dataset.column;s.className="fa-solid fa-sort text-muted ms-1 opacity-50",this.state.sortColumn===i&&(s.className=this.state.sortAsc?"fa-solid fa-sort-up text-primary ms-1":"fa-solid fa-sort-down text-primary ms-1")})}_processData(){let e=[...this.data];if(Object.entries(this.state.filters).forEach(([t,s])=>{s&&s!=="all"&&(e=e.filter(i=>i[t]===s))}),this.state.searchTerm){const t=this.state.searchTerm.split(/\s+/).filter(s=>s.length>0);e=e.filter(s=>{const i=this._normalizeText(this.extractSearchString(s));return t.every(r=>i.includes(r))})}return this.state.sortColumn&&e.sort((t,s)=>{if(this.customSort)return this.customSort(t,s,this.state);let i=t[this.state.sortColumn],r=s[this.state.sortColumn];return this.state.sortColumn.toLowerCase().includes("date")||this.state.sortColumn.includes("At")?(i=new Date(i||0).getTime(),r=new Date(r||0).getTime()):(i=this._normalizeText(i),r=this._normalizeText(r)),i<r?this.state.sortAsc?-1:1:i>r?this.state.sortAsc?1:-1:0}),e}render(){if(!this.tableBody)return;const e=this._processData();this.state.totalPages=Math.max(1,Math.ceil(e.length/this.state.itemsPerPage)),this.state.currentPage>this.state.totalPages&&(this.state.currentPage=1);const t=(this.state.currentPage-1)*this.state.itemsPerPage,s=e.slice(t,t+this.state.itemsPerPage);if(this._renderPaginationControls(e.length),s.length===0){this.tableBody.innerHTML='<tr><td colspan="100%" class="text-center p-4 text-muted">No se encontraron coincidencias.</td></tr>';return}this.tableBody.innerHTML=s.map(i=>this.renderRowHTML(i)).join(""),this.onRenderComplete&&this.onRenderComplete(this.tableBody,s)}_renderPaginationControls(e){this.paginationContainer&&(this.paginationContainer.innerHTML=`
      <button class="btn btn-sm btn-outline-secondary btn-prev-page" ${this.state.currentPage===1?"disabled":""}><i class="fa-solid fa-chevron-left pointer-events-none"></i></button>
      <span class="small fw-bold px-1">Pág ${this.state.currentPage} de ${this.state.totalPages}</span>
      <button class="btn btn-sm btn-outline-secondary btn-next-page" ${this.state.currentPage===this.state.totalPages?"disabled":""}><i class="fa-solid fa-chevron-right pointer-events-none"></i></button>
      <span class="badge bg-primary rounded-pill ms-2">${e} en total</span>
    `)}_bindPaginationEvents(){this.paginationContainer&&this.paginationContainer.addEventListener("click",e=>{const t=e.target.closest("button");t&&(t.classList.contains("btn-prev-page")&&this.state.currentPage>1?(this.state.currentPage--,this.render()):t.classList.contains("btn-next-page")&&this.state.currentPage<this.state.totalPages&&(this.state.currentPage++,this.render()))})}calculatePaginationSpace(){if(!this.tableBody)return;let e=55;if(this.dummyRowHTML){const r=document.createElement("tr");r.style.visibility="hidden",r.innerHTML=this.dummyRowHTML,this.tableBody.appendChild(r),e=r.getBoundingClientRect().height||55,this.tableBody.removeChild(r)}const t=this.tableBody.getBoundingClientRect().top,s=t>0?t:250,i=window.innerHeight-s-this.marginBot;this.state.itemsPerPage=Math.max(5,Math.floor(i/e))}_bindWindowResize(){window.addEventListener("resize",()=>{clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>{this.tableBody&&this.tableBody.offsetParent!==null&&(this.calculatePaginationSpace(),this.render())},300)})}_normalizeText(e){return(e||"").toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}}const sd={handlers:{},currentTemplates:[],currentSort:{column:"updatedAt",asc:!1},currentCategoryFilter:"all",currentPage:1,itemsPerPage:10,totalPages:1,init(n){this.handlers=n;const e=document.getElementById("designer-list-view");e&&(e.innerHTML=this.getBaseHTML(),this.cacheDOM(),this.calculatePaginationSpace(),this.bindEvents())},getBaseHTML(){return`
      <div class="position-relative">
        <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <h2><i class="fa-solid fa-pen-ruler text-danger"></i> Gestor de Plantillas</h2>
            <div class="d-flex gap-2">
                <!-- REFACTOR: Cambiado style="display: none;" por la clase d-none de Bootstrap -->
                <input type="file" id="input-import-tpl" accept=".json" class="d-none">
                <button class="btn btn-outline-dark shadow-sm" id="btn-import-tpl">
                    <i class="fa-solid fa-file-import me-2"></i> Importar
                </button>
                <button class="btn btn-primary shadow-sm" id="btn-go-create-tpl">
                    <i class="fa-solid fa-plus me-2"></i> Nueva Plantilla
                </button>
            </div>
        </div>

        <!-- Tabla Estándar -->
        <div class="card shadow-sm">
          <div class="card-header d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div id="tpl-pagination-controls" class="d-flex align-items-center gap-2">
               <span class="fw-bold">Plantillas (Cargando...)</span>
            </div>
            <div class="row g-2 align-items-center justify-content-end">
              <!-- Contenedor dinámico para el select de categorías -->
              <div class="col-auto" id="tpl-category-filter-container">
                <select id="tpl-category-select" class="form-select">
                  <option value="">Todas las categorías</option>
                </select>
              </div>
              
              <div class="col-auto">
                <div class="input-group">
                  <span class="input-group-text bg-white"><i class="fa-solid fa-magnifying-glass"></i></span>
                  <input type="text" id="tpl-search-input" class="form-control" placeholder="Buscar... (ej. factura base)" autocomplete="off">
                </div>
              </div>
            </div>
          </div>
          <div class="card-body p-0">
            <div class="table-responsive">
              <table class="table table-hover align-middle mb-0">
                <thead class="table-light">
                  <tr>
                    <th class="cursor-pointer sortable" data-column="category">Categoría <i class="fa-solid fa-sort text-muted ms-1"></i></th>
                    <th class="cursor-pointer sortable" data-column="title">Título de la Plantilla <i class="fa-solid fa-sort text-muted ms-1"></i></th>
                    <th class="text-end">Acciones</th>
                  </tr>
                </thead>
                <tbody id="tpl-table-body">
                  <tr><td colspan="3" class="text-center p-3">Cargando plantillas...</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `},cacheDOM(){this.tableBody=document.getElementById("tpl-table-body"),this.pagination=document.getElementById("tpl-pagination-controls"),this.searchInput=document.getElementById("tpl-search-input"),this.btnCreate=document.getElementById("btn-go-create-tpl"),this.btnImport=document.getElementById("btn-import-tpl"),this.inputFile=document.getElementById("input-import-tpl"),this.categoryContainer=document.getElementById("tpl-category-filter-container")},renderCategoryFilter(){if(!this.categoryContainer)return;const n=[...new Set(this.currentTemplates.map(e=>e.category||"General"))];if(n.length>1){const e=`<option value="all" ${this.currentCategoryFilter==="all"?"selected":""}>Todas las categorías</option>`+n.sort().map(t=>`<option value="${t}" ${this.currentCategoryFilter===t?"selected":""}>${t}</option>`).join("");this.categoryContainer.innerHTML=`
        <select id="tpl-category-select" class="form-select">
          ${e}
        </select>
      `,document.getElementById("tpl-category-select").addEventListener("change",t=>{this.currentCategoryFilter=t.target.value,this.currentPage=1,this.renderTable()})}else this.categoryContainer.innerHTML="",this.currentCategoryFilter="all"},calculatePaginationSpace(){if(!this.tableBody)return;const n=document.createElement("tr");n.style.visibility="hidden",n.innerHTML=`
      <td class="text-center fs-4">📄</td>
      <td><span class="badge bg-secondary bg-opacity-10 text-body-secondary border border-secondary border-opacity-25 px-2 py-1">General</span></td>
      <td>
        <div class="fw-bold text-nowrap">Test</div>
        <div class="text-muted small text-truncate" style="max-width: 250px;">Desc</div>
      </td>
      <td class="text-muted small text-nowrap">01/01/2026</td>
      <td class="text-end text-nowrap"><button class="btn btn-sm btn-outline-success"><i class="fa-solid fa-file-circle-plus"></i></button></td>
    `,this.tableBody.appendChild(n);const e=n.getBoundingClientRect().height||65;this.tableBody.removeChild(n);const t=this.tableBody.getBoundingClientRect().top,s=t>0?t:250,r=window.innerHeight-s-90;this.itemsPerPage=Math.max(5,Math.floor(r/e))},normalizeText(n){return(n||"").toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()},bindEvents(){this.btnCreate&&(this.btnCreate.onclick=()=>this.handlers.onNavigateToEditor()),this.btnImport&&this.inputFile&&(this.btnImport.onclick=()=>this.inputFile.click(),this.inputFile.onchange=e=>this._handleImport(e)),this.searchInput.addEventListener("input",()=>{this.currentPage=1,this.renderTable()}),document.querySelectorAll(".sortable").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.column;this.currentSort.asc=this.currentSort.column===t?!this.currentSort.asc:!0,this.currentSort.column=t,document.querySelectorAll(".sortable i").forEach(s=>s.className="fa-solid fa-sort text-muted ms-1"),e.querySelector("i").className=this.currentSort.asc?"fa-solid fa-sort-up ms-1":"fa-solid fa-sort-down ms-1",this.currentPage=1,this.renderTable()})}),this.pagination.addEventListener("click",e=>{const t=e.target.closest("button");if(t!=null&&t.classList.contains("btn-prev-page")&&this.currentPage>1)this.currentPage--;else if(t!=null&&t.classList.contains("btn-next-page")&&this.currentPage<this.totalPages)this.currentPage++;else return;this.renderTable()});let n;window.addEventListener("resize",()=>{clearTimeout(n),n=setTimeout(()=>{const e=document.getElementById("designer-list-view");e&&e.style.display!=="none"&&(this.calculatePaginationSpace(),this.renderTable())},300)})},async render(){try{this.currentTemplates=await q.getAll("tpl"),this.calculatePaginationSpace(),this.renderCategoryFilter(),this.renderTable()}catch(n){this.tableBody.innerHTML=`<tr><td colspan="3" class="text-danger text-center">Error cargando lista: ${n.message}</td></tr>`}},renderTable(){if(this.currentTemplates.length===0){this.tableBody.innerHTML='<tr><td colspan="3" class="text-center p-3 text-muted">No hay plantillas creadas aún.</td></tr>',this.pagination.innerHTML='<span class="fw-bold">Mis Plantillas (0)</span>';return}let n=this.currentTemplates;this.currentCategoryFilter&&this.currentCategoryFilter!=="all"&&(n=n.filter(i=>(i.category||"General")===this.currentCategoryFilter));const e=this.normalizeText(this.searchInput.value).split(/\s+/).filter(i=>i.length>0);e.length>0&&(n=n.filter(i=>e.every(r=>this.normalizeText(`${i.title} ${i.category} ${i.description||""}`).includes(r)))),this.currentSort.column&&n.sort((i,r)=>{let o=i[this.currentSort.column],l=r[this.currentSort.column];return this.currentSort.column==="updatedAt"?(o=new Date(o||0).getTime(),l=new Date(l||0).getTime()):(o=this.normalizeText(o),l=this.normalizeText(l)),o<l?this.currentSort.asc?-1:1:o>l?this.currentSort.asc?1:-1:0}),this.totalPages=Math.max(1,Math.ceil(n.length/this.itemsPerPage)),this.currentPage>this.totalPages&&(this.currentPage=1);const t=(this.currentPage-1)*this.itemsPerPage,s=n.slice(t,t+this.itemsPerPage);if(this.pagination.innerHTML=`
      <button class="btn btn-sm btn-outline-secondary btn-prev-page" ${this.currentPage===1?"disabled":""}><i class="fa-solid fa-chevron-left"></i></button>
      <span class="small fw-bold px-1">Pág ${this.currentPage} de ${this.totalPages}</span>
      <button class="btn btn-sm btn-outline-secondary btn-next-page" ${this.currentPage===this.totalPages?"disabled":""}><i class="fa-solid fa-chevron-right"></i></button>
      <span class="badge bg-primary rounded-pill ms-2">${n.length} en total</span>
    `,s.length===0){this.tableBody.innerHTML='<tr><td colspan="3" class="text-center p-3 text-muted">No se encontraron coincidencias.</td></tr>';return}this.tableBody.innerHTML=s.map(i=>(i.updatedAt&&new Date(i.updatedAt).toLocaleDateString(),`
        <tr>
          <td><span class="badge bg-secondary bg-opacity-10 text-body-secondary border border-secondary border-opacity-25 px-2 py-1">${i.category||"General"}</span></td>
          <td>
            <div class="d-flex align-items-center">
              <div class="fs-4 me-3 text-center" style="width: 32px;">
                ${i.icon||"📄"}
              </div>
              <div style="min-width: 0;">
                <div class="fw-bold text-nowrap text-truncate">
                   ${i.title} 
                  ${i.encrypted?'<i class="fa-solid fa-lock text-primary ms-1" title="Cifrada"></i>':""}
                </div>
                <div class="text-muted small text-truncate" style="max-width: 250px;">
                  ${i.description||"Sin descripción"}
                </div>
              </div>
            </div>
          </td>
          <td class="text-end text-nowrap">
              <button class="btn btn-sm btn-outline-success btn-create-doc me-1" data-id="${i.id}" title="Crear Documento">
                 <i class="fa-solid fa-file-circle-plus"></i>
              </button>
              <button class="btn btn-sm btn-outline-primary btn-edit me-1" data-id="${i.id}" title="Editar Plantilla">
                  <i class="fa-solid fa-pen"></i>
              </button>
              <button class="btn btn-sm btn-outline-secondary btn-export me-1" data-id="${i.id}" title="Descargar JSON">
                  <i class="fa-solid fa-download"></i>
              </button>
              <button class="btn btn-sm btn-danger btn-del" data-id="${i.id}" title="Eliminar Plantilla">
                  <i class="fa-solid fa-trash"></i>
              </button>
          </td>
        </tr>
      `)).join(""),this._bindListActions(s)},_bindListActions(n){this.tableBody.querySelectorAll(".btn-create-doc").forEach(e=>{e.onclick=()=>{window.dispatchEvent(new CustomEvent("create-doc-from-template",{detail:{tplId:e.dataset.id}}))}}),this.tableBody.querySelectorAll(".btn-edit").forEach(e=>{e.onclick=()=>this.handlers.onEditTemplate(e.dataset.id)}),this.tableBody.querySelectorAll(".btn-del").forEach(e=>{e.onclick=async()=>{await j.confirm("Eliminar Plantilla","¿Estás seguro de eliminar esta plantilla? Se borrarán sus documentos vinculados.")&&(await Po.deleteTemplate(e.dataset.id),this.currentTemplates.length-1<=(this.currentPage-1)*this.itemsPerPage&&this.currentPage>1&&this.currentPage--,j.toast("Plantilla eliminada exitosamente","success"),this.render())}}),this.tableBody.querySelectorAll(".btn-export").forEach(e=>{e.onclick=()=>{const t=n.find(s=>s.id===e.dataset.id);t&&this._downloadJSON(t)}})},_downloadJSON(n){const e=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),t=URL.createObjectURL(e),s=document.createElement("a");s.href=t;const i=n.title.replace(/[^a-z0-9]/gi,"_").toLowerCase();s.download=`tpl_${i}_${n.id}.json`,s.click(),URL.revokeObjectURL(t)},_handleImport(n){const e=n.target.files[0];if(!e)return;const t=new FileReader;t.onload=async s=>{try{const i=JSON.parse(s.target.result);if(!i.title||!Array.isArray(i.elements))throw new Error("Plantilla inválida");i.id=`tpl_${Date.now()}`,i.title=`${i.title} (Importada)`,i.updatedAt=new Date().toISOString(),await Po.saveTemplate(i),j.toast("Plantilla importada correctamente.","success"),this.render()}catch(i){j.toast("Error al importar: "+i.message,"danger")}n.target.value=""},t.readAsText(e)}},wa={dragSrcEl:null,init(n,e=null,t=null){n.setAttribute("draggable","false"),n.addEventListener("mousedown",s=>{if(e){const i=s.target.closest(e);n.setAttribute("draggable",i?"true":"false")}else n.setAttribute("draggable","true")}),n.addEventListener("mouseup",()=>{n.setAttribute("draggable","false")}),n.addEventListener("dragstart",s=>this._handleDragStart(s,n)),n.addEventListener("dragend",s=>this._handleDragEnd(s,n)),n.addEventListener("dragover",s=>this._handleDragOver(s,n)),n.addEventListener("dragenter",s=>this._handleDragEnter(s,n)),n.addEventListener("dragleave",s=>this._handleDragLeave(s,n)),n.addEventListener("drop",s=>this._handleDrop(s,n,t))},_handleDragStart(n,e){if(e.getAttribute("draggable")==="false"){n.preventDefault();return}this.dragSrcEl=e,n.dataTransfer.effectAllowed="move",n.dataTransfer.setData("text/plain",""),e.classList.add("opacity-50","border-primary")},_handleDragEnd(n,e){e.classList.remove("opacity-50","border-primary"),e.setAttribute("draggable","false"),this._cleanStyles(e.parentElement)},_handleDragOver(n,e){return n.preventDefault&&n.preventDefault(),n.dataTransfer.dropEffect="move",!1},_handleDragEnter(n,e){this.dragSrcEl!==e&&e.classList.add("border-top-primary-3")},_handleDragLeave(n,e){e.classList.remove("border-top-primary-3")},_handleDrop(n,e,t){if(n.stopPropagation&&n.stopPropagation(),e.classList.remove("bg-light","border-top-primary-3"),this.dragSrcEl&&this.dragSrcEl!==e&&this.dragSrcEl.parentNode===e.parentNode){const s=e.parentNode,i=e.getBoundingClientRect(),r=n.clientY-i.top,o=e.clientHeight/2;r>o?s.insertBefore(this.dragSrcEl,e.nextSibling):s.insertBefore(this.dragSrcEl,e),t&&t()}return!1},_cleanStyles(n){n&&Array.from(n.children).forEach(e=>{e.classList.remove("bg-light","border-top-primary-3")})}},ii={handlers:{},currentId:null,init(n){this.handlers=n,this.cacheDOM(),this.renderSidebar(),this.bindEvents()},cacheDOM(){this.container=document.getElementById("designer-editor-view"),this.canvas=document.getElementById("designer-canvas"),this.titleInput=document.getElementById("tpl-title"),this.descInput=document.getElementById("tpl-description"),this.relatedDocsInput=document.getElementById("tpl-related-docs"),this.catInput=document.getElementById("tpl-category"),this.iconInput=document.getElementById("tpl-icon"),this.encInput=document.getElementById("tpl-encrypted"),this.btnSave=document.getElementById("btn-save-template"),this.btnBack=document.getElementById("btn-back-tpl-list")},bindEvents(){this.btnBack.onclick=()=>this.handlers.onBack(),this.btnSave.onclick=()=>this.save(),this.catInput&&(this.catInput.onchange=n=>{const e=n.target.options[n.target.selectedIndex].dataset.icon;this.iconInput.value=e})},renderSidebar(){const n=document.getElementById("tpl-elements");n.innerHTML=Object.entries(Ve).map(([e,t])=>`<button class="btn btn-light border-0 shadow-sm flex-fill px-4 py-2" id="add-${e}">
             <span class="d-block h5 mb-0">${t.icon}</span>
             <span class="small fw-bold">${t.longLabel}</span>
         </button>`).join(""),Object.keys(Ve).forEach(e=>{document.getElementById(`add-${e}`).onclick=()=>{const t=document.createElement(`setting-${e}`);this._addToCanvas(t)}})},_addToCanvas(n){const e=document.createElement("div");e.className="designer-item-wrapper d-flex align-items-stretch mb-2 text-bg-light border rounded shadow-sm",e.innerHTML=`
      <!-- ELIMINADO: style="width: 40px;" -->
      <!-- AÑADIDO: px-3 y flex-shrink-0 -->
      <div class="drag-handle bg-light border-end d-flex align-items-center justify-content-center cursor-grab px-3 flex-shrink-0">
        <i class="fa-solid fa-grip-vertical text-muted"></i>
      </div>
      <div class="flex-grow-1 p-2 w-100" id="comp-content" style="min-width: 0;"></div>
      <button class="btn btn-link text-danger align-self-center mx-2 btn-del-comp flex-shrink-0"><i class="fa-solid fa-trash-can"></i></button>
    `,e.querySelector("#comp-content").appendChild(n),e.querySelector(".btn-del-comp").onclick=()=>e.remove(),wa.init(e,".drag-handle"),this.canvas.appendChild(e)},async load(n){const e=await q.getOne("tpl",n);e&&(this.currentId=e.id,this.titleInput.value=e.title,this.descInput.value=e.description||"",this.relatedDocsInput.value=e.relatedDocIds||"",this.catInput.value=e.category,this.iconInput.value=e.icon,this.encInput.checked=!!e.encrypted,this.canvas.innerHTML="",e.elements.forEach(t=>{const s=document.createElement(t.tag);s.setData&&s.setData(t),this._addToCanvas(s)}))},reset(){this.currentId=null,this.canvas.innerHTML="",this.titleInput.value="",this.descInput.value="",this.relatedDocsInput.value="",this.encInput.checked=!1},async save(){const e=Array.from(this.canvas.querySelectorAll(".designer-item-wrapper")).map(s=>{const i=s.querySelector("#comp-content");return i?i.firstElementChild:null}).filter(s=>s&&typeof s.getData=="function"),t={id:this.currentId||`tpl_${Date.now()}`,title:this.titleInput.value.trim(),description:this.descInput.value,relatedDocIds:this.relatedDocsInput.value.trim(),category:this.catInput.value,icon:this.iconInput.value,encrypted:this.encInput.checked,elements:e.map(s=>s.getData())};try{await Po.saveTemplate(t),j.toast("Plantilla guardada correctamente","success"),this.handlers.onSaveSuccess()}catch(s){j.toast("Error al guardar: "+s.message,"danger")}},getAvailableVariables(n,e=null){const t=[];if(this.canvas.querySelectorAll("setting-number, setting-currency, setting-percentage").forEach(i=>{if(!i.closest("setting-table")&&typeof i.getData=="function"){const r=i.getData();t.push({id:r.id,title:r.title||"(Sin Título)",type:"general"})}}),n==="table"&&e){const i=document.getElementById(e);if(i&&typeof i.getData=="function"){const r=i.getData();r.columns&&r.columns.forEach(o=>{["setting-number","setting-currency","setting-percentage"].includes(o.tag)&&t.push({id:o.id,title:`[Col] ${o.title}`,type:"column"})})}}return n==="general"&&this.canvas.querySelectorAll("setting-table").forEach(r=>{const o=r.getData();o.columns&&o.columns.forEach(l=>{l.total&&t.push({id:`TOTAL_${r.id}_${l.id}`,title:`SUM: ${o.title} > ${l.title}`,type:"total"})})}),t}},Hi={init(){sd.init({onNavigateToEditor:()=>this.showEditor(),onEditTemplate:n=>{this.showEditor(),ii.load(n)}}),ii.init({onBack:()=>this.showList(),onSaveSuccess:()=>{this.showList(),this.renderList()}}),this.renderList()},renderList(){sd.render()},showEditor(){document.getElementById("designer-list-view").classList.add("d-none"),document.getElementById("designer-editor-view").classList.remove("d-none"),ii.reset()},showList(){document.getElementById("designer-list-view").classList.remove("d-none"),document.getElementById("designer-editor-view").classList.add("d-none")},getAvailableVariables(n,e){return ii.getAvailableVariables(n,e)}},tn={handlers:{},currentDocs:[],currentTemplates:[],init(n){this.handlers=n;const e=document.getElementById("doc-list-view");if(!e){console.error("❌ [DocumentList] Error crítico: No se encontró #doc-list-view en el DOM.");return}e.innerHTML=this.getBaseHTML(),this.cacheDOM(),this.initTableEngine(),this.bindEvents()},getBaseHTML(){return`
      <div class="position-relative">
        <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <h2><i class="fa-solid fa-file-lines text-primary"></i> Gestor de Documentos</h2>
            <button class="btn btn-primary shadow-sm" id="btn-go-create-doc">
                <i class="fa-solid fa-plus me-2"></i> Nuevo Documento
            </button>
        </div>

        <div class="card shadow-sm">
          <div class="card-header d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div id="doc-pagination-controls" class="d-flex align-items-center gap-2">
               <span class="fw-bold">Mis Documentos (Cargando...)</span>
            </div>
            
            <div class="d-flex gap-2 align-items-center flex-grow-1 justify-content-end" style="max-width: 550px;">
              <select id="doc-template-filter" class="form-select" style="max-width: 200px;">
                <option value="">Todas las plantillas</option>
              </select>
              <div class="input-group" style="max-width: 350px;">
                <span class="input-group-text bg-white"><i class="fa-solid fa-magnifying-glass"></i></span>
                <input type="text" id="doc-search-input" class="form-control" placeholder="Buscar... (ej. reporte)" autocomplete="off">
              </div>
            </div>
          </div>
          <div class="card-body p-0">
            <div class="table-responsive">
              <table class="table table-hover align-middle mb-0">
                <thead class="table-light" id="doc-table-head">
                  <tr>
                    <th class="sortable" data-column="templateTitle">Plantilla Base</th>
                    <th class="sortable" data-column="title">Título del Documento</th>
                    <th class="text-end">Acciones</th>
                  </tr>
                </thead>
                <tbody id="doc-table-body">
                  <tr><td colspan="3" class="text-center p-3">Cargando documentos...</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `},cacheDOM(){this.container=document.getElementById("doc-list-view"),this.tableBody=document.getElementById("doc-table-body"),this.tableHead=document.getElementById("doc-table-head"),this.pagination=document.getElementById("doc-pagination-controls"),this.searchInput=document.getElementById("doc-search-input"),this.templateFilter=document.getElementById("doc-template-filter"),this.btnCreate=document.getElementById("btn-go-create-doc")},initTableEngine(){this.tableEngine=new Bw({tableBody:this.tableBody,tableHeaders:this.tableHead,paginationContainer:this.pagination,dummyRowHTML:`
        <td><span class="badge bg-secondary px-2 py-1">Plantilla</span></td>
        <td><div class="fw-bold">Test</div></td>
        <td class="text-end"><button class="btn btn-sm btn-outline-primary"><i class="fa-solid fa-eye"></i></button></td>
      `,marginBot:40,extractSearchString:n=>`${n.title} ${n.templateTitle||""}`,renderRowHTML:n=>this._renderRow(n),onRenderComplete:(n,e)=>this._bindListActions(n,e)})},bindEvents(){this.btnCreate&&(this.btnCreate.onclick=()=>{this.handlers.onNavigateToDesigner&&this.handlers.onNavigateToDesigner()}),this.searchInput.addEventListener("input",n=>{this.tableEngine.setSearchTerm(n.target.value)}),this.templateFilter&&this.templateFilter.addEventListener("change",n=>{this.tableEngine.setFilter("templateId",n.target.value)})},async render(){try{this.currentDocs=await q.getAll("doc")||[],this.currentTemplates=await q.getAll("tpl")||[],this.populateTemplateFilter(),this.tableEngine.calculatePaginationSpace(),this.tableEngine.setData(this.currentDocs)}catch(n){this.tableBody&&(this.tableBody.innerHTML=`<tr><td colspan="3" class="text-danger text-center">Error cargando documentos: ${n.message}</td></tr>`)}},populateTemplateFilter(){if(!this.templateFilter)return;const n=this.templateFilter.value,e=new Set(this.currentDocs.map(i=>i.templateId)),t=this.currentTemplates.filter(i=>e.has(i.id)).sort((i,r)=>i.title.localeCompare(r.title,void 0,{sensitivity:"base"}));let s='<option value="">Todas las plantillas</option>';t.forEach(i=>{const r=i.icon||"📄";s+=`<option value="${i.id}">${r} ${i.title}</option>`}),this.templateFilter.innerHTML=s,t.some(i=>i.id===n)?this.templateFilter.value=n:this.templateFilter.value=""},_renderRow(n){let e="";n.isEncrypted&&(e=q._masterKey&&!n.decryptionError?'<span class="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 ms-2" title="Desbloqueado"><i class="fa-solid fa-lock-open"></i></span>':'<span class="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 ms-2" title="Cifrado"><i class="fa-solid fa-lock"></i></span>');const t=this.currentTemplates.find(i=>i.id===n.templateId);return`
      <tr>
        <td>
          <span class="badge bg-secondary bg-opacity-10 text-body-secondary border border-secondary border-opacity-25 px-2 py-1">
            <span class="me-1 fs-6">${t&&t.icon?t.icon:"📄"}</span>${n.templateTitle||"General"}
          </span>
        </td>
        <td>
           <div class="fw-bold text-nowrap d-flex align-items-center">
               ${n.title} ${e}
           </div>
        </td>
        <td class="text-end text-nowrap">
            <button class="btn btn-sm btn-outline-primary btn-view-doc me-1" data-id="${n.id}" title="Visualizar">
               <i class="fa-solid fa-eye"></i>
            </button>
            <button class="btn btn-sm btn-outline-secondary btn-copy-id me-1" data-id="${n.id}" title="Copiar ID">
               <i class="fa-regular fa-copy"></i>
            </button>
            <button class="btn btn-sm btn-danger btn-del-doc" data-id="${n.id}" title="Eliminar Documento">
               <i class="fa-solid fa-trash"></i>
            </button>
        </td>
      </tr>
    `},_bindListActions(n){n.querySelectorAll(".btn-view-doc").forEach(e=>{e.onclick=()=>this.handlers.onViewDocument(e.dataset.id)}),n.querySelectorAll(".btn-del-doc").forEach(e=>{e.onclick=async()=>{await j.confirm("Eliminar Documento","¿Estás seguro de eliminar este documento definitivamente? Esta acción no se puede deshacer.")&&(await q.delete("doc",e.dataset.id),j.toast("Documento eliminado correctamente","success"),this.render())}}),n.querySelectorAll(".btn-copy-id").forEach(e=>{e.onclick=async t=>{t.stopPropagation();const s=e.dataset.id,i=e.querySelector("i");try{await navigator.clipboard.writeText(s);const r=i.className;i.className="fa-solid fa-check text-success",setTimeout(()=>{i.className=r},1500)}catch(r){console.error("Error al copiar ID:",r),alert("No se pudo copiar el ID al portapapeles.")}}})},show(){this.container&&(this.container.style.display="block"),this.render()},hide(){this.container&&(this.container.style.display="none")}},ri={async print(n,e){let t=await q.getOne("doc",n);if(!t)return alert("Documento no encontrado.");if(t.isEncrypted&&t.decryptionError)return alert("El documento está bloqueado. Desbloquéelo en el visor primero.");const s=await q.getOne("tpl",t.templateId);if(!s)return alert("La plantilla base no se encuentra.");let i=document.getElementById("print-iframe");i||(i=document.createElement("iframe"),i.id="print-iframe",i.style.position="fixed",i.style.left="-10000px",i.style.top="0",i.style.width="100%",i.style.height="100%",document.body.appendChild(i));const r=i.contentWindow.document,o=new Date(t.date).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"});let l="";for(let c=1;c<=12;c++){const d=c/12*100;l+=`.col-${c} { width: ${d}%; } `}r.open(),r.write(`
        <html>
          <head>
            <title>${t.title}</title>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
            <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"><\/script>
            <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0/dist/chartjs-plugin-datalabels.min.js"><\/script>
            <style>
              body { background: white; font-family: sans-serif; margin: 0; padding: 20px; }
              .print-header { display: flex; justify-content: space-between; padding-bottom: 20px; margin-bottom: 20px; border-bottom: 2px solid #dee2e6; }
              
              .row { display: flex; flex-wrap: wrap; margin: 0 -4px; }
              [class^="col-"] { padding: 4px; box-sizing: border-box; }
              
              ${l}

              h1 { margin: 0; font-size: 1.5rem; color: #212529; }
              p { margin: 0; color: #6c757d; }
            </style>
          </head>
          <body>
            <div class="print-header">
              <div><h1>${t.title}</h1><p>${s.title}</p></div>
              <div style="text-align:right"><div>${o}</div><div style="font-weight:bold; font-size: 0.8rem; text-transform: uppercase;">${e}</div></div>
            </div>
            <div class="row" id="print-content"></div>
          </body>
        </html>
    `),r.close(),i.onload=()=>{const c=r.getElementById("print-content");s.elements.forEach(d=>{if(d.hidePrint)return;const h=t.content.find(P=>P.fieldId===d.id);if(d.tag==="setting-section"){const P=r.createElement("div");P.className="col-12 mt-3 mb-2",P.innerHTML=`<h4 style="border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-bottom: 10px;">${d.title}</h4>`,c.appendChild(P);return}if(!h)return;const m=h.value,g=d.tag.replace("setting-","printer-"),E=document.createElement(g);E.setAttribute("title",d.title),d.currency&&E.setAttribute("currency",d.currency),d.options&&E.setAttribute("options",d.options),d.columns&&E.setAttribute("columns",JSON.stringify(d.columns)),E.setAttribute("edit-value",Array.isArray(m)?JSON.stringify(m):m),E.setAttribute("type",e);const T=d.spanP||12;E.setAttribute("span-print",T),h.bold&&E.setAttribute("bold",""),h.italic&&E.setAttribute("italic",""),E.setAttribute("color",h.color||"black");const L=r.createElement("div");L.className=`col-${T}`,L.appendChild(E),c.appendChild(L)}),setTimeout(()=>{i.contentWindow.focus(),i.contentWindow.print()},500)}},async copyToWhatsApp(n){let e=await q.getOne("doc",n);if(!e)return alert("Error recuperando documento.");if(e.isEncrypted&&e.decryptionError)return alert("El documento está cifrado. Debe abrirlo primero en el visor.");const t=await q.getOne("tpl",e.templateId);let s=`*${e.title.toUpperCase()}*
_${t.title}_
📅 ${new Date(e.date).toLocaleDateString()}
------------------------------
`;t.elements.forEach(i=>{if(i.hideWhatsapp)return;if(i.tag==="setting-section"){s+=`
*--- ${i.title.toUpperCase()} ---*
`;return}const r=e.content.find(d=>d.fieldId===i.id);if(!r)return;const o=r.value,l=i.tag.replace("setting-","viewer-"),c=document.createElement(l);if(i.currency&&c.setAttribute("currency",i.currency),i.columns&&(c.columns=i.columns),c.setAttribute("title",i.title),c.setAttribute("edit-value",typeof o=="object"?JSON.stringify(o):o),l==="viewer-table"&&i.columns&&(c.columns=i.columns,c.rows=Array.isArray(o)?o:[]),typeof c.getWhatsapp=="function"){const d=c.getWhatsapp();d&&d.trim()!==""&&(s+=d+`
`)}}),s+=`
_Generado con DocEngine_`,navigator.clipboard.writeText(s).then(()=>alert(`📋 ¡Contenido copiado al portapapeles!
Listo para pegar en WhatsApp.`)).catch(()=>alert("Error al acceder al portapapeles."))}},_i={handlers:{},currentDocId:null,init(n){this.handlers=n,this.cacheDOM()},cacheDOM(){this.container=document.getElementById("doc-editor-view"),this.canvas=document.getElementById("document-canvas"),this.titleInput=document.getElementById("doc-title-input"),this.headerActions=this.container.querySelector(".d-flex.gap-2"),this.backBtn=document.getElementById("btn-back-doc-list")},async render(n){if(!n)return;`${n}`;let e=await q.getOne("doc",n);if(!e)return alert("El documento no existe.");if(e.isEncrypted&&(e.isEncrypted,e.decryptionError,e.content),e.isEncrypted&&e.decryptionError){const s=await j.promptPassword("Acceso Seguro Requerido","Este documento está cifrado. Ingrese su Frase Maestra para visualizarlo:");if(!s)return this.handlers.onBack();try{if(`${s.length}`,await q.setMasterKey(s),e=await q.getOne("doc",n),e.decryptionError,e.content,e.decryptionError)return console.error("[VIEWER-DEBUG] ⛔ FALLO: El Storage devolvió error de descifrado nuevamente."),j.toast("Frase incorrecta. Acceso denegado.","danger"),this.handlers.onBack();j.toast("Documento descifrado con éxito","success")}catch(i){return console.error("[VIEWER-DEBUG] ❌ ERROR CRÍTICO durante el desbloqueo:",i),j.toast("Error del sistema al intentar desbloquear.","danger"),this.handlers.onBack()}}const t=await q.getOne("tpl",e.templateId);if(!t)return alert("La plantilla base no se encuentra.");this.currentDocId=e.id,this.titleInput.value=e.title,this.titleInput.readOnly=!0,this._renderHeaderActions(e),this.backBtn.onclick=()=>this.handlers.onBack(),this.canvas.innerHTML="",this._renderContent(e,t,this.canvas)},async renderReadOnly(n,e){e.innerHTML='<div class="text-center p-5"><i class="fa-solid fa-spinner fa-spin fa-2x text-secondary"></i></div>';let t=await q.getOne("doc",n);if(!t){e.innerHTML='<div class="alert alert-danger">Documento no encontrado o eliminado.</div>';return}if(t.isEncrypted&&t.decryptionError){e.innerHTML='<div class="alert alert-warning"><i class="fa-solid fa-lock me-2"></i>Este documento está cifrado. Desbloquéelo desde la lista principal para verlo.</div>';return}const s=await q.getOne("tpl",t.templateId);if(!s){e.innerHTML='<div class="alert alert-warning">La plantilla de este documento no existe.</div>';return}e.innerHTML="";const i=`_modal_${Math.floor(Math.random()*1e3)}`;this._renderContent(t,s,e,i)},_renderContent(n,e,t,s=""){e.elements.some(r=>r.tag==="setting-section")?(t.classList.add("has-sections","p-0","bg-transparent","shadow-none"),this._renderStructuredView(n,e,t,s)):(t.classList.remove("has-sections","p-0","bg-transparent","shadow-none"),this._renderFlatView(n,e,t))},_renderFlatView(n,e,t){n.content&&n.content.forEach(s=>{const i=e.elements.find(o=>o.id===s.fieldId);if(!i)return;const r=this._createViewerComponent(i,s);t.appendChild(r)})},_renderStructuredView(n,e,t,s=""){const i=[];let r={title:"Principal",elements:[]};e.elements.forEach(d=>{if(d.tag==="setting-section")(r.elements.length>0||r.title!=="Principal")&&i.push(r),r={title:d.title||"Sección",elements:[]};else{const h=n.content.find(m=>m.fieldId===d.id);h&&r.elements.push({def:d,data:h})}}),i.push(r);const o=`nav-viewer-${n.id}${s}`;let l=`<ul class="nav nav-tabs nav-tabs-custom d-none d-md-flex no-print mb-0" id="${o}" role="tablist">`,c=`<div class="tab-content tab-content-custom" id="${o}Content">`;i.forEach((d,h)=>{const m=`view-sec-${h}-${n.id}${s}`,g=h===0;l+=`
        <li class="nav-item" role="presentation">
          <button class="nav-link ${g?"active":""}" data-bs-toggle="tab" data-bs-target="#v-tab-${m}" type="button">
            ${d.title}
          </button>
        </li>`,c+=`
        <div class="tab-pane fade ${g?"show active":""}" id="v-tab-${m}" role="tabpanel">
          <div class="accordion-header-mobile d-md-none no-print mb-2" data-bs-toggle="collapse" data-bs-target="#v-coll-${m}">
             <div class="d-flex justify-content-between align-items-center p-3 bg-light border rounded shadow-sm">
                <span class="fw-bold text-primary text-uppercase small">${d.title}</span>
                <i class="fa-solid fa-chevron-down text-muted small"></i>
             </div>
          </div>
          <div id="v-coll-${m}" class="collapse d-md-block ${g?"show":""}">
            <div class="row g-3 p-3 bg-light border rounded-bottom shadow-sm"></div>
          </div>
        </div>`}),t.innerHTML=l+"</ul>"+c+"</div>",i.forEach((d,h)=>{const m=`view-sec-${h}-${n.id}${s}`,g=t.querySelector(`#v-coll-${m} .row`);d.elements.forEach(E=>{const T=this._createViewerComponent(E.def,E.data);g.appendChild(T)})})},_createViewerComponent(n,e){const t=n.tag.replace("setting-","viewer-"),s=document.createElement(t);return n.currency&&s.setAttribute("currency",n.currency),n.options&&s.setAttribute("options",n.options),s.setData&&s.setData({...e,value:e.value,title:n.title,spanEV:n.spanEV,columns:n.columns||[],currency:n.currency,options:n.options}),s},_renderHeaderActions(n){this.headerActions&&(this.headerActions.innerHTML=`
        <button id="btn-edit-mode" class="btn btn-warning shadow-sm"><i class="fa-solid fa-pen"></i> Editar</button>
        <button id="btn-whatsapp" class="btn btn-success shadow-sm text-bg-success"><i class="fa-brands fa-whatsapp"></i> WhatsApp</button>
        <div class="dropdown d-inline-block">
             <button class="btn btn-secondary dropdown-toggle shadow-sm" type="button" data-bs-toggle="dropdown">
                <i class="fa-solid fa-print"></i> Imprimir
             </button>
             <ul class="dropdown-menu dropdown-menu-end shadow">
                <li><a class="dropdown-item" href="#" id="print-v"><i class="fa-solid fa-eye me-2"></i>Visual</a></li>
                <li><a class="dropdown-item" href="#" id="print-c"><i class="fa-solid fa-compress me-2"></i>Compacto</a></li>
                <li><a class="dropdown-item" href="#" id="print-f"><i class="fa-solid fa-book-open-reader me-2"></i>Fácil Lectura</a></li>
             </ul>
        </div>`,document.getElementById("btn-edit-mode").onclick=()=>this.handlers.onEdit(n.id),document.getElementById("btn-whatsapp").onclick=()=>ri.copyToWhatsApp(n.id),document.getElementById("print-v").onclick=e=>{e.preventDefault(),ri.print(n.id,"Visual")},document.getElementById("print-c").onclick=e=>{e.preventDefault(),ri.print(n.id,"Compacto")},document.getElementById("print-f").onclick=e=>{e.preventDefault(),ri.print(n.id,"Facil Lectura")})}},Uw={container:null,init(n){n&&(this.container=n,this._bindEvents(),setTimeout(()=>this.run(),200))},run(){if(!this.container)return;const n=Array.from(this.container.querySelectorAll("[is-calculated]"));n.length!==0&&n.forEach(e=>{const t=e.getAttribute("formula");if(t)try{const s=t.replace(/@\{([^}]+)\}/g,(r,o)=>this._getVariableValue(o)),i=new Function(`"use strict"; return (${s})`)();if(isFinite(i)&&!isNaN(i)){const r=e.querySelector("input");if(r){const o=Math.round(i*100)/100;r.value!=o&&(r.value=o,e.setAttribute("edit-value",o),r.dispatchEvent(new Event("input",{bubbles:!0})))}}}catch(s){console.warn(`[CalculationEngine] Error en ${e.id}:`,s.message)}})},_getVariableValue(n){if(n.startsWith("TOTAL_")){const s=document.getElementById(n);return s&&parseFloat(s.dataset.rawValue)||0}const e=document.getElementById(`input-${n}`);if(!e)return 0;let t=e.value;return typeof t=="string"&&(t=t.replace(/,/g,".")),parseFloat(t)||0},_bindEvents(){this.container.addEventListener("input",n=>{n.target.readOnly||this.run()}),this.container.addEventListener("table-change",()=>{setTimeout(()=>this.run(),50)}),this.container.addEventListener("paste",()=>{setTimeout(()=>this.run(),50)})}},Yr={handlers:{},currentDocId:null,currentTplId:null,init(n){this.handlers=n,this.cacheDOM()},cacheDOM(){this.container=document.getElementById("doc-editor-view"),this.canvas=document.getElementById("document-canvas"),this.titleInput=document.getElementById("doc-title-input"),this.headerActions=document.querySelector("#doc-editor-view .d-flex.gap-2"),this.backBtn=document.getElementById("btn-back-doc-list")},async loadForCreation(n){const e=await q.getOne("tpl",n);if(!e)return alert("Error: La plantilla seleccionada no existe."),this.handlers.onBack();if(e.encrypted&&!q._masterKey){const s=prompt(`🔒 ACCESO SEGURO REQUERIDO

Ha seleccionado una plantilla para documentos cifrados.
Ingrese su Frase Maestra para habilitar el editor:`);if(!s)return this.handlers.onBack();if(!await q.verifyMasterPhrase(s))return alert("⛔ Frase incorrecta. No tiene permiso para usar esta plantilla."),this.handlers.onBack()}this.currentDocId=null,this.currentTplId=n,this.titleInput.value="",this.titleInput.readOnly=!1;const t=document.getElementById("doc-template-selector");t&&(t.style.display="none"),await this.renderCanvas(n,[]),this.setupSaveButton("Guardar Documento")},async loadForEditing(n){const e=await q.getOne("doc",n);e&&(this.currentDocId=n,this.currentTplId=e.templateId,this.titleInput.value=e.title,this.titleInput.readOnly=!1,await this.renderCanvas(e.templateId,e.content),this.setupSaveButton("Guardar Cambios"))},async renderCanvas(n,e){const t=await q.getOne("tpl",n);if(!t)return;this.canvas.innerHTML="",t.elements.filter(r=>r.tag==="setting-section").length>0?(this.canvas.classList.add("has-sections","p-0","bg-transparent","shadow-none"),this._renderStructuredUI(t.elements,e)):(this.canvas.classList.remove("has-sections","p-0","bg-transparent","shadow-none"),t.elements.forEach(r=>{const o=this._createComponent(r,e);this.canvas.appendChild(o)})),Uw.init(this.canvas)},_renderStructuredUI(n,e){const t=[];let s={title:"Principal",elements:[]};n.forEach(l=>{l.tag==="setting-section"?((s.elements.length>0||s.title!=="Principal")&&t.push(s),s={title:l.title||"Sección",elements:[]}):s.elements.push(l)}),t.push(s);const i=`nav-tabs-${this.currentTplId}`;let r=`<ul class="nav nav-tabs nav-tabs-custom d-none d-md-flex no-print mb-0" id="${i}" role="tablist">`,o=`<div class="tab-content tab-content-custom" id="${i}Content">`;t.forEach((l,c)=>{const d=`sec-${c}-${this.currentTplId}`,h=c===0;r+=`
        <li class="nav-item" role="presentation">
          <button class="nav-link ${h?"active":""}" data-bs-toggle="tab" data-bs-target="#tab-pane-${d}" type="button">
            ${l.title}
          </button>
        </li>`,o+=`
        <div class="tab-pane fade ${h?"show active":""} group-pane" id="tab-pane-${d}" role="tabpanel">
          <div class="accordion-header-mobile d-md-none no-print mb-2" data-bs-toggle="collapse" data-bs-target="#collapse-${d}">
             <div class="d-flex justify-content-between align-items-center p-3 bg-light border rounded shadow-sm">
                <span class="fw-bold text-primary text-uppercase small">${l.title}</span>
                <i class="fa-solid fa-chevron-down text-muted small"></i>
             </div>
          </div>
          <div id="collapse-${d}" class="collapse d-md-block ${h?"show":""}">
            <div class="row g-3 p-3 bg-light border rounded-bottom shadow-sm">
               </div>
          </div>
        </div>`}),this.canvas.innerHTML=r+"</ul>"+o+"</div>",t.forEach((l,c)=>{const d=`sec-${c}-${this.currentTplId}`,h=this.canvas.querySelector(`#collapse-${d} .row`);l.elements.forEach(m=>{const g=this._createComponent(m,e);h.appendChild(g)})})},_createComponent(n,e){const t=n.tag.replace("setting-","editor-"),s=document.createElement(t);s.setAttribute("field-id",n.id),n.formula&&s.setAttribute("formula",n.formula),n.isCalculated&&s.setAttribute("is-calculated","true");const i=e.find(l=>l.fieldId===n.id),r=i?i.value:"",o={id:n.id,title:n.title,spanEV:n.spanEV||12,options:n.options,value:r,bold:i?i.bold:!1,italic:i?i.italic:!1,color:i?i.color:"black",columns:n.columns,currency:n.currency,formula:n.formula,isCalculated:n.isCalculated,prependRows:n.prependRows,apiUrl:n.apiUrl,apiPath:n.apiPath};return s.setData&&s.setData(o),s},setupSaveButton(n){this.headerActions.innerHTML=`<button id="btn-save-document" class="btn btn-primary"><i class="fa-solid fa-save"></i> ${n}</button>`,document.getElementById("btn-save-document").onclick=()=>this.save(),this.backBtn.onclick=()=>this.handlers.onBack()},async save(){const n=document.getElementById("btn-save-document"),e=this.titleInput.value.trim();if(!e){this.titleInput.classList.add("is-invalid","border-danger"),this.titleInput.scrollIntoView({behavior:"smooth",block:"center"}),this.titleInput.focus(),alert("⚠️ Imposible Guardar: El documento requiere un Título.");return}const t=n.innerHTML;n.disabled=!0,n.innerHTML='<i class="fa-solid fa-circle-notch fa-spin me-2"></i>Guardando...';try{const s=this.currentDocId||`doc_${Date.now()}`,i=await q.getOne("tpl",this.currentTplId),r=Array.from(this.canvas.querySelectorAll("[field-id]")),o=[];let l=!0;if(r.forEach(d=>{typeof d.validate=="function"&&!d.validate()&&(l=!1),typeof d.getData=="function"&&o.push(d.getData())}),!l)throw new Error("Revise los campos marcados en rojo.");const c={id:s,title:e,templateId:this.currentTplId,templateTitle:i?i.title:"Desconocida",date:new Date().toISOString(),updatedAt:new Date().toISOString(),content:o,isEncrypted:i&&i.encrypted||!1};await q.save("doc",c),this.handlers.onSave()}catch(s){alert("Error al guardar: "+s.message),n&&(n.disabled=!1,n.innerHTML=t)}}},ws={init(){tn.init({onViewDocument:async n=>{tn.hide(),this.showEditorView(),await _i.render(n)},onNavigateToDesigner:()=>{const n=document.getElementById("nav-designer");n?n.click():alert("Navegue al diseñador para crear una plantilla.")}}),_i.init({onEdit:async n=>{await Yr.loadForEditing(n),await this._checkAndRenderRelatedDocs(n,!1)},onBack:()=>{this.showListView()}}),Yr.init({onSave:()=>{this.showListView()},onBack:()=>{this.showListView()}}),this.renderList()},renderList(){this.showListView(),tn.render()},async createFromTemplate(n){tn.hide(),this.showEditorView(),await Yr.loadForCreation(n),await this._checkAndRenderRelatedDocs(n,!0)},async _checkAndRenderRelatedDocs(n,e){let t;if(e)t=await q.getOne("tpl",n);else{const s=await q.getOne("doc",n);s&&(t=await q.getOne("tpl",s.templateId))}if(t&&t.relatedDocIds){const s=t.relatedDocIds.split(",").map(i=>i.trim()).filter(i=>i);s.length>0&&this._renderRelatedBar(s)}},async _renderRelatedBar(n){this._clearRelatedBar();const e=document.createElement("div");e.id="related-docs-wrapper",e.className="no-print",e.style.position="fixed",e.style.bottom="20px",e.style.left="20px",e.style.zIndex="1050",e.style.display="flex",e.style.flexDirection="column",e.style.alignItems="flex-start";const t=document.createElement("button");t.className="btn btn-primary shadow rounded-pill d-flex align-items-center gap-2 px-3 py-2",t.innerHTML=`
      <i class="fa-solid fa-link"></i> 
      <span class="fw-bold">Ref</span>
      <span class="badge bg-white text-primary rounded-pill">${n.length}</span>
    `,t.title="Ver documentos relacionados";const s=document.createElement("div");s.className="bg-white shadow rounded border border-primary border-opacity-25 p-2 d-none",s.style.position="absolute",s.style.minWidth="250px",s.style.maxWidth="300px",s.style.maxHeight="300px",s.style.overflowY="auto",s.style.transition="all 0.2s ease";const i=document.createElement("div");i.className="d-flex flex-column gap-1";let r=0;for(const o of n){const l=await q.getOne("doc",o);if(l){r++;const c=document.createElement("button");c.className="btn btn-sm btn-light text-start text-truncate w-100 border-0",c.innerHTML=`<i class="fa-regular fa-file-lines me-2 text-muted"></i> ${l.title}`,c.title=l.title,c.onclick=()=>{this._toggleDrawer(s,t,!1);const d=document.getElementById("modal-related-doc"),h=document.getElementById("modal-related-body");new bootstrap.Modal(d).show(),_i.renderReadOnly(l.id,h)},i.appendChild(c)}}s.appendChild(i),r!==0&&(t.onclick=o=>{o.stopPropagation(),s.classList.contains("d-none")?(this._positionDrawer(e,s),s.classList.remove("d-none"),t.classList.remove("rounded-pill"),t.classList.add("rounded-start")):this._toggleDrawer(s,t,!1)},e.appendChild(s),e.appendChild(t),document.body.appendChild(e))},_toggleDrawer(n,e,t){t?n.classList.remove("d-none"):(n.classList.add("d-none"),e.classList.add("rounded-pill"),e.classList.remove("rounded-start"))},_positionDrawer(n,e){const t=n.getBoundingClientRect(),s=260,r=window.innerWidth-t.right;e.style.top="",e.style.bottom="",e.style.left="",e.style.right="",r>s?(e.style.left="100%",e.style.bottom="0",e.style.marginLeft="10px"):(e.style.bottom="100%",e.style.left="0",e.style.marginBottom="10px")},_clearRelatedBar(){const n=document.getElementById("related-docs-wrapper");n&&n.remove();const e=document.getElementById("related-docs-bar");e&&e.remove()},showListView(){this._clearRelatedBar();const n=document.getElementById("doc-list-view"),e=document.getElementById("doc-editor-view");n&&(n.style.display="block"),e&&(e.style.display="none"),tn.render()},showEditorView(){this._clearRelatedBar();const n=document.getElementById("doc-list-view"),e=document.getElementById("doc-editor-view");n&&(n.style.display="none"),e&&(e.style.display="block")}},nd={async exportData(){try{const n=await q.getAll("tpl"),e=await q.getAll("doc"),t={templates:n,documents:e,exportDate:new Date().toISOString(),version:"2.0 (Firebase)"},s=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),i=URL.createObjectURL(s),r=document.createElement("a");r.href=i,r.download=`respaldo_mg_cloud_${new Date().toISOString().slice(0,10)}.json`,r.click(),URL.revokeObjectURL(i),j.toast("Respaldo exportado correctamente","success")}catch(n){console.error("Error exportando:",n),j.toast("Error al generar el respaldo: "+n.message,"danger")}},async importData(n){const e=new FileReader;e.onload=async t=>{try{const s=JSON.parse(t.target.result);if(!s.templates&&!s.documents&&!s.tpl&&!s.doc)throw new Error("Formato de archivo no reconocido.");const i=s.templates||[],r=s.documents||[];let o=0;for(const c of i)c.updatedAt||(c.updatedAt=new Date().toISOString()),await q.save("tpl",c),o++;let l=0;for(const c of r)await q.save("doc",c),l++;j.toast(`Proceso finalizado. Plantillas: ${o} | Documentos: ${l}. Recargando...`,"success"),setTimeout(()=>{location.reload()},2500)}catch(s){console.error(s),j.toast("Error crítico al importar: "+s.message,"danger")}},e.readAsText(n)}},Es={renderSetupModal(){document.body.insertAdjacentHTML("beforeend",`
      <div class="modal fade" id="modal-setup-security" data-bs-backdrop="static" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0 shadow-lg">
            <div class="modal-header text-bg-dark">
              <h5 class="modal-title"><i class="fa-solid fa-key me-2"></i>Seguridad de Alta Privacidad</h5>
            </div>
            <div class="modal-body p-4">
              <p class="text-dark fw-bold">Configure su Frase Maestra:</p>
              <p class="text-muted small">
                Esta frase es su llave de cifrado. <strong>No se almacena en ninguna base de datos</strong>. 
                Si la pierde, los documentos cifrados serán irrecuperables.
              </p>
              
              <div class="mb-3">
                <label class="small fw-bold">Escriba su Frase (Mínimo 15 caracteres):</label>
                <textarea id="setup-master-phrase" 
                          class="form-control font-monospace border-primary shadow-none" 
                          rows="2"
                          autocomplete="off" 
                          autocorrect="off" 
                          autocapitalize="none" 
                          spellcheck="false"
                          placeholder="Ej: El sol brilla intensamente sobre la montaña azul..."></textarea>
                <div class="form-text text-primary" style="font-size: 0.7rem;">
                    <i class="fa-solid fa-info-circle"></i> Los gestores de contraseñas no detectarán este campo.
                </div>
              </div>

              <div id="setup-error" class="text-danger small mb-0" style="display:none;"></div>
            </div>
            <div class="modal-footer border-0 pt-0">
              <button id="btn-save-security" class="btn btn-dark w-100 py-2 fw-bold">
                ACTIVAR CIFRADO LOCAL
              </button>
            </div>
          </div>
        </div>
      </div>
    `);const e=document.getElementById("modal-setup-security"),t=new bootstrap.Modal(e);t.show(),document.getElementById("btn-save-security").onclick=async()=>{const s=document.getElementById("setup-master-phrase").value.trim(),i=document.getElementById("setup-error");if(s.length<15){i.textContent="La frase debe tener al menos 15 caracteres para garantizar la seguridad.",i.style.display="block";return}try{await q.setMasterKey(s);const r=await q.encryptData({check:"VERIFIED"});await q.saveSecurityVerifier(r),t.hide(),e.remove(),j.toast("¡Cifrado activado! Ahora puede crear plantillas con protección de datos.","success")}catch(r){console.error("Error al inicializar seguridad:",r),i.textContent="Error al inicializar el motor de seguridad.",i.style.display="block"}}},renderChangePhraseUI(n){const e=`
      <div class="card border-primary shadow-sm mb-4">
        <div class="card-header text-bg-primary small fw-bold">
          <i class="fa-solid fa-key me-1"></i> Cambiar Frase Maestra
        </div>
        <div class="card-body">
          <p class="text-muted" style="font-size: 0.75rem;">
            Si conoces tu frase actual, úsala aquí para actualizarla sin perder datos.
          </p>
          
          <div class="mb-2">
            <label class="small fw-bold">Frase Maestra Anterior:</label>
            <input autocomplete="off" spellcheck="false" type="password" id="old-phrase" class="form-control form-control-sm shadow-none">
            <button class="btn btn-sm btn-outline-secondary border-0 position-absolute end-0 top-0 mt-4 me-3 toggle-pass" data-target="old-phrase" style="z-index:5;"><i class="fa-solid fa-eye"></i></button>
          </div>
          
          <div class="mb-3 position-relative">
            <label class="small fw-bold">Nueva Frase Maestra:</label>
            <input autocomplete="off" spellcheck="false" type="password" id="new-phrase" class="form-control form-control-sm shadow-none" placeholder="Mínimo 15 caracteres">
          </div>

          <div id="reencrypt-progress" class="progress mb-3" style="display:none; height: 10px;">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="width: 0%"></div>
          </div>

          <button id="btn-reencrypt" class="btn btn-primary btn-sm w-100 fw-bold">
            Actualizar Frase y Re-Cifrar Datos
          </button>
        </div>
      </div>

      <div class="card border-danger shadow-sm">
        <div class="card-header bg-danger text-white small fw-bold d-flex justify-content-between align-items-center">
            <span><i class="fa-solid fa-radiation me-1"></i> Zona de Peligro</span>
            <span class="badge bg-white text-danger">Irreversible</span>
        </div>
        <div class="card-body">
            <h6 class="text-danger fw-bold small">¿Olvidaste tu Frase Maestra?</h6>
            <p class="small text-muted mb-3">
                Debido a la arquitectura de "Cero Conocimiento", <strong>no podemos recuperar tu frase</strong>. 
                La única opción es reiniciar tu configuración de seguridad.
            </p>
            
            <div class="alert alert-warning d-flex align-items-start small p-2" role="alert">
                <i class="fa-solid fa-triangle-exclamation me-2 mt-1"></i>
                <div>
                    <strong>Advertencia:</strong> Al realizar esta acción, perderás acceso permanentemente a todos los documentos que estén cifrados actualmente. Se volverán ilegibles.
                </div>
            </div>

            <button id="btn-hard-reset-toggle" class="btn btn-outline-danger btn-sm w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseResetParams">
                Entiendo los riesgos, quiero reiniciar
            </button>

            <div class="collapse mt-3" id="collapseResetParams">
                <div class="card card-body bg-danger-subtle border-0">
                    <label class="small fw-bold text-danger mb-1">Escribe "ELIMINAR" para confirmar:</label>
                    <input type="text" id="reset-confirm-input" class="form-control form-control-sm mb-2" placeholder="ELIMINAR" autocomplete="off">
                    <button id="btn-execute-reset" class="btn btn-danger btn-sm w-100 fw-bold" disabled>
                        <i class="fa-solid fa-trash-can me-1"></i> BORRAR LLAVES Y REINICIAR
                    </button>
                </div>
            </div>
        </div>
      </div>
    `;n.innerHTML=e,this._bindReencryptLogic(),this._bindHardResetLogic()},_bindReencryptLogic(){const n=document.getElementById("btn-reencrypt");n&&(n.onclick=async()=>{const e=document.getElementById("old-phrase").value.trim(),t=document.getElementById("new-phrase").value.trim();if(!e||t.length<15)return j.toast("La nueva frase debe tener al menos 15 caracteres y debes ingresar la anterior.","warning");if(await j.confirm("Confirmar Cambio","¿Estás seguro de que deseas cambiar tu Frase Maestra? Este proceso actualizará tus datos de seguridad."))try{n.disabled=!0,n.innerHTML='<i class="fa-solid fa-sync fa-spin me-1"></i> Procesando...',document.getElementById("reencrypt-progress").style.display="flex",await q.changeMasterPhrase(e,t),j.toast("¡Éxito! Frase actualizada. Recargando...","success"),setTimeout(()=>location.reload(),2e3)}catch(i){console.error(i),j.toast("Error: "+i.message,"danger"),n.disabled=!1,n.innerHTML="Actualizar Frase y Re-Cifrar Datos",document.getElementById("reencrypt-progress").style.display="none"}})},_bindHardResetLogic(){const n=document.getElementById("reset-confirm-input"),e=document.getElementById("btn-execute-reset");!n||!e||(n.addEventListener("input",t=>{t.target.value==="ELIMINAR"?e.disabled=!1:e.disabled=!0}),e.onclick=async()=>{if(await j.confirm("ÚLTIMA ADVERTENCIA","Esta acción no se puede deshacer. Tus documentos cifrados actuales se perderán para siempre."))try{e.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i> Reiniciando...',await q.hardResetSecurity(),j.toast("Sistema de seguridad reiniciado. La página se recargará...","success"),setTimeout(()=>window.location.reload(),3e3)}catch(s){console.error(s),j.toast("Error al reiniciar seguridad: "+s.message,"danger"),e.innerHTML='<i class="fa-solid fa-trash-can me-1"></i> BORRAR LLAVES Y REINICIAR'}})}},Oe={async validateCredentials(n,e){if(!(await fetch("https://api.github.com/user",{headers:{Authorization:`Bearer ${e}`,Accept:"application/vnd.github.v3+json"}})).ok)throw new Error("Credenciales inválidas o token sin permisos.");return!0},async getUserRepos(n){const t=await fetch("https://api.github.com/user/repos?per_page=100&sort=updated",{headers:{Authorization:`Bearer ${n}`,Accept:"application/vnd.github.v3+json"}});if(!t.ok)throw new Error("No se pudieron cargar los repositorios de GitHub.");const i=(await t.json()).map(o=>({name:o.name,isPrivate:o.private,hasPages:o.has_pages,owner:o.owner.login})),r=i.map(async o=>{if(o.hasPages&&!o.isPrivate)try{const l=await fetch(`https://api.github.com/repos/${o.owner}/${o.name}/pages`,{headers:{Authorization:`Bearer ${n}`,Accept:"application/vnd.github.v3+json"}});if(l.ok){const c=await l.json();o.pagesUrl=c.html_url}}catch{console.warn(`No se pudo obtener el site de ${o.name}`)}});return await Promise.all(r),i},async uploadFile(n,e,t,s,i){const r=await this._toBase64(e),o=t.replace(/^\//,"").replace(/\/$/,""),l=o?`${o}/${s}`:s,c=`https://api.github.com/repos/${n.githubUser}/${i}/contents/${l}`,d={message:`Subido desde DocEngine: ${s}`,content:r},h=await fetch(c,{method:"PUT",headers:{Authorization:`Bearer ${n.githubToken}`,"Content-Type":"application/json"},body:JSON.stringify(d)});if(!h.ok){const m=await h.json();throw new Error(m.message||"Error al subir archivo a GitHub")}return await h.json()},async deleteFile(n,e,t,s){const i=`https://api.github.com/repos/${n.githubUser}/${s}/contents/${e}`,r={message:"Eliminado desde DocEngine",sha:t};if(!(await fetch(i,{method:"DELETE",headers:{Authorization:`Bearer ${n.githubToken}`,"Content-Type":"application/json"},body:JSON.stringify(r)})).ok)throw new Error("Error al eliminar archivo de GitHub");return!0},_toBase64(n){return new Promise((e,t)=>{const s=new FileReader;s.readAsDataURL(n),s.onload=()=>e(s.result.split(",")[1]),s.onerror=i=>t(i)})},async fetchSecureFile(n,e,t){const s=`https://api.github.com/repos/${n.githubUser}/${t}/contents/${e}`,i=await fetch(s,{headers:{Authorization:`Bearer ${n.githubToken}`,Accept:"application/vnd.github.v3.raw"}});if(!i.ok)throw new Error(`Error descargando archivo (${i.status})`);return await i.blob()}},je={async saveUserConfig(n,e){const t=Me(Te,"users",n);await Mc(t,{githubConfig:e}).catch(async s=>{throw console.error("Error guardando config github",s),s})},async getUserConfig(n){const e=Me(Te,"users",n),t=await pi(e);return t.exists()&&t.data().githubConfig||null},async addFileRecord(n){const e=Vi(Te,"github_files");return(await mv(e,n)).id},async listFiles(n){const e=Vi(Te,"github_files"),t=Eo(e,ui("userId","==",n)),s=await Io(t),i=[];return s.forEach(r=>{i.push({id:r.id,...r.data()})}),i},async deleteFileRecord(n){await mi(Me(Te,"github_files",n))},async updateLastUsedSettings(n,e,t){const s=Me(Te,"users",n);await Mc(s,{"githubConfig.lastUsedRepo":e,"githubConfig.lastUsedFolder":t}).catch(i=>console.error("Error actualizando última config",i))}},Nh={init(){this.container=document.getElementById("view-settings"),this.render()},render(){const n=document.getElementById("theme-link").getAttribute("href"),e=`./src/views/manual.html?theme=${encodeURIComponent(n)}`;this.container.innerHTML=`
      <div class="container py-4">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h3 class="fw-bold text-body-secondary"><i class="fa-solid fa-gears me-2"></i>Configuración</h3>
            <div class="card shadow-sm border-info mb-4">
              <div class="card-body d-flex align-items-center justify-content-between bg-info bg-opacity-10">
                  <div class="d-flex align-items-center">
                      <div class="bg-white p-2 rounded-circle me-3 text-info border border-info">
                          <i class="fa-solid fa-book-open fs-4"></i>
                      </div>
                      <div>
                          <h6 class="fw-bold mb-0 text-dark">Manual de Usuario</h6>
                          <small class="text-muted">Dudas sobre plantillas, seguridad o GitHub.</small>
                      </div>
                  </div>
                  <a href="${e}" target="_blank" class="btn btn-info text-white fw-bold">
                    <i class="fa-solid fa-arrow-up-right-from-square me-2"></i>Abrir Manual
                </a>
              </div>
          </div>
        </div>

        <div class="row g-4">
            <div class="col-md-6">
                
                <div class="card shadow-sm border-0 mb-4">
                    <div class="card-header text-bg-dark fw-bold py-3">
                        <i class="fa-solid fa-sliders me-2 text-bg-dark"></i>Preferencias Generales
                    </div>
                    <div class="card-body">
                        <div class="mb-3">
                            <label class="small text-muted fw-bold">Tema Visual (Bootswatch API)</label>
                            <div class="input-group">
                                <span class="input-group-text"><i class="fa-solid fa-palette"></i></span>
                                <select id="cfg-theme-api" class="form-select form-select-sm">
                                    <option value="" disabled selected>Cargando temas...</option>
                                </select>
                            </div>
                            <div class="form-text small mb-3">Selecciona un estilo para cambiar la apariencia inmediatamente.</div>
                        </div>
                        <label class="small text-muted fw-bold">Máximo Caracteres Whatsapp (MCW)</label>
                        <div class="input-group mb-2">
                            <span class="input-group-text border-end-0"><i class="fa-brands fa-whatsapp text-success"></i></span>
                            <input autocomplete="off" spellcheck="false" type="number" id="cfg-mcw" class="form-control border-start-0" placeholder="35">
                        </div>
                        <div class="form-text small mb-3">Si una tabla supera este ancho, se enviará como lista para facilitar la lectura en móviles.</div>
                        <button id="btn-save-prefs" class="btn btn-dark w-100 btn-sm">Guardar Preferencias (MCW)</button>
                    </div>
                </div>

                <div class="card shadow-sm border-0 mb-4">
                    <div class="card-header bg-warning fw-bold py-3"><i class="fa-solid fa-user-shield me-2 text-bg-warning"></i>Seguridad de Acceso</div>
                    <div class="card-body">
                        <div class="mb-3">
                            <label class="small text-muted">Contraseña Actual</label>
                            <input autocomplete="off" spellcheck="false" type="password" id="current-pass" class="form-control form-control-sm">
                        </div>
                        <div class="mb-3">
                            <label class="small text-muted">Nueva Contraseña</label>
                            <input autocomplete="off" spellcheck="false" type="password" id="new-pass" class="form-control form-control-sm">
                        </div>
                        <button id="btn-change-pass" class="btn btn-warning w-100 btn-sm fw-bold">Actualizar Clave de Acceso</button>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                
                <div id="security-config-wrapper" class="mb-4"></div>

                <div id="github-settings-wrapper"></div>

                <div class="card shadow-sm border-0 mt-4">
                    <div class="card-header text-bg-primary fw-bold py-3"><i class="fa-solid fa-database me-2 text-bg-primary"></i>Datos y Respaldos</div>
                    <div class="card-body">
                        <button id="btn-export" class="btn btn-outline-primary w-100 mb-3">
                            <i class="fa-solid fa-download me-2"></i>Descargar Respaldo Completo (.json)
                        </button>
                        
                        <div class="border-top pt-3">
                            <label class="small text-muted fw-bold mb-2">Restaurar Datos</label>
                            <input autocomplete="off" spellcheck="false" type="file" id="import-file" class="form-control form-control-sm" accept=".json">
                            <div class="form-text small mt-1 text-danger"><i class="fa-solid fa-exclamation-triangle me-1"></i>Esto sobrescribirá los datos actuales.</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    `,this._bindEvents(),this._loadCurrentPrefs(),this._initThemeLoader();const t=document.getElementById("security-config-wrapper");Es&&Es.renderChangePhraseUI&&Es.renderChangePhraseUI(t),this.renderGithubSettings("github-settings-wrapper")},_initThemeLoader(){const n=document.getElementById("cfg-theme-api"),e=localStorage.getItem("doc_engine_theme_url");fetch("https://bootswatch.com/api/5.json").then(t=>t.json()).then(t=>{const s=t.themes;n.innerHTML="";const i=document.createElement("option");i.value="default",i.textContent="Default (Bootstrap Standard)",(!e||e.includes("bootstrap.min.css")&&!e.includes("bootswatch"))&&(i.selected=!0),n.append(i),s.forEach((r,o)=>{const l=document.createElement("option");l.value=o,l.textContent=r.name+(r.description?` (${r.description})`:"");const c=r.cssCdn||r.css;e===c&&(l.selected=!0),n.append(l)}),n.addEventListener("change",r=>{let o="";if(r.target.value==="default")o="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";else{const l=s[r.target.value];o=l.cssCdn||l.css}this._applyThemeWithPreload(o,n)})}).catch(t=>{console.error("Error cargando temas:",t),n.innerHTML="<option disabled>Error de conexión</option>"})},_applyThemeWithPreload(n,e){e.options[e.selectedIndex].text,e.disabled=!0;const t=document.createElement("div");t.style.cssText=`
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(255,255,255,0.8); z-index: 9999;
        display: flex; justify-content: center; align-items: center;
        transition: opacity 0.3s ease; opacity: 0;
        backdrop-filter: blur(2px);
      `,t.innerHTML='<div class="spinner-border text-primary" role="status"></div>',document.body.appendChild(t),requestAnimationFrame(()=>{t.style.opacity="1"});const s=document.createElement("link");s.rel="stylesheet",s.href=n,s.onload=()=>{document.getElementById("theme-link").setAttribute("href",n),localStorage.setItem("doc_engine_theme_url",n),setTimeout(()=>{e.disabled=!1,t.style.opacity="0",setTimeout(()=>{t.remove(),s.remove()},300)},200)},s.onerror=()=>{j.toast("Error al descargar el tema seleccionado.","danger"),e.disabled=!1,t.remove(),s.remove()},document.head.appendChild(s)},_bindEvents(){document.getElementById("btn-save-prefs").onclick=()=>{const e=document.getElementById("cfg-mcw").value||"35";localStorage.setItem("doc_engine_mcw",e),j.toast("Preferencias guardadas.","success")},document.getElementById("btn-export").onclick=()=>nd.exportData(),document.getElementById("import-file").onchange=e=>{e.target.files.length>0&&nd.importData(e.target.files[0])};const n=document.getElementById("btn-change-pass");n.onclick=async()=>{const e=document.getElementById("current-pass").value,t=document.getElementById("new-pass").value;if(!e||!t)return j.toast("Complete ambos campos.","warning");if(!vi.validatePassword(t))return j.toast("La contraseña no cumple requisitos (8+ chars, Mayús, Num).","warning");const s=n.innerHTML;n.disabled=!0,n.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Procesando...';try{const i=Et.currentUser;if(!i)throw new Error("Sin sesión.");const r=as.credential(i.email,e);await y_(i,r),await E_(i,t),j.toast("Contraseña actualizada correctamente.","success"),document.getElementById("current-pass").value="",document.getElementById("new-pass").value=""}catch(i){console.error(i),j.toast(i.code==="auth/wrong-password"?"Contraseña actual incorrecta.":"Error: "+i.message,"danger")}finally{n.disabled=!1,n.innerHTML=s}}},_loadCurrentPrefs(){const n=localStorage.getItem("doc_engine_mcw");document.getElementById("cfg-mcw").value=n||"35"},renderGithubSettings(n){const e=document.getElementById(n);if(!e)return;const t=`
      <div class="card mb-4 mt-4">
        <div class="card-header bg-dark text-white">
          <i class="fa-brands fa-github"></i> Integración GitHub (Cuenta)
        </div>
        <div class="card-body">
          <p class="small text-muted">Configura tu cuenta para acceder a todos tus repositorios.</p>
          <form id="github-config-form">
            <div class="mb-3">
              <label class="form-label">Usuario GitHub</label>
              <input autocomplete="off" spellcheck="false" type="text" id="set-gh-user" class="form-control" placeholder="Ej: miusuario" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Personal Access Token (Classic)</label>
              <input autocomplete="off" spellcheck="false" type="password" id="set-gh-token" class="form-control" placeholder="ghp_xxxxxxxxxxxx" required>
              <div class="form-text">El token debe tener permisos de <code>repo</code> completo.</div>
            </div>
            <div id="gh-config-msg" class="mb-2"></div>
            <button type="submit" class="btn btn-primary">
              <i class="fa-solid fa-check"></i> Verificar y Guardar
            </button>
            <button type="button" id="btn-gh-disconnect" class="btn btn-outline-danger d-none">Desconectar</button>
          </form>
        </div>
      </div>
    `,s=document.createElement("div");s.innerHTML=t,e.appendChild(s);let i=null;const r=Ct.getCurrentUser();r&&je.getUserConfig(r.uid).then(o=>{o&&(document.getElementById("set-gh-user").value=o.githubUser||"",document.getElementById("set-gh-token").value=o.githubToken||"",i=o.lastUsedRepo||null,document.getElementById("btn-gh-disconnect").classList.remove("d-none"))}),document.getElementById("github-config-form").addEventListener("submit",async o=>{o.preventDefault();const l=document.getElementById("gh-config-msg"),c=o.target.querySelector('button[type="submit"]'),d=document.getElementById("set-gh-user").value.trim(),h=document.getElementById("set-gh-token").value.trim();try{c.disabled=!0,l.innerHTML='<span class="text-info">Verificando cuenta...</span>',await Oe.validateCredentials(d,h),await je.saveUserConfig(r.uid,{githubUser:d,githubToken:h,lastUsedRepo:i}),l.innerHTML='<span class="text-success fw-bold">¡Conexión Exitosa! Recarga la página para ver el menú.</span>',window.location.reload()}catch(m){l.innerHTML=`<span class="text-danger">Error: ${m.message}</span>`}finally{c.disabled=!1}}),document.getElementById("btn-gh-disconnect").addEventListener("click",async()=>{await j.confirm("Desvincular Cuenta","¿Estás seguro de que deseas desvincular tu cuenta de GitHub?")&&(await je.saveUserConfig(r.uid,null),j.toast("Cuenta desvinculada exitosamente. Recargando...","info"),setTimeout(()=>window.location.reload(),1500))})}},id={getBaseHTML(){return`
      <div class="position-relative">
        <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <h2><i class="fa-brands fa-github"></i> Gestor de Archivos GitHub</h2>
            <button class="btn btn-primary shadow-sm" data-bs-toggle="modal" data-bs-target="#ghUploadModal">
                <i class="fa-solid fa-cloud-arrow-up me-2"></i> Subir Nuevo Archivo
            </button>
        </div>

        <!-- Tabla de Archivos -->
        <div class="card shadow-sm">
          <div class="card-header d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div id="gh-pagination-controls" class="d-flex align-items-center gap-2">
               <span class="fw-bold">Mis Archivos (Cargando...)</span>
            </div>
            
            <div class="row g-2 align-items-center justify-content-end flex-grow-1">
              <div class="col-auto">
                <select id="gh-filter-repo" class="form-select d-none"></select>
              </div>
              <div class="col-auto">
                <select id="gh-filter-folder" class="form-select d-none"></select>
              </div>
              <div class="col-auto">
                <div class="input-group input-group-sm">
                  <span class="input-group-text bg-white"><i class="fa-solid fa-magnifying-glass"></i></span>
                  <input type="text" id="gh-search-input" class="form-control" placeholder="Buscar..." autocomplete="off">
                </div>
              </div>
            </div>
          </div>
          <div class="card-body p-0">
            <div class="table-responsive">
              <table class="table table-hover">
                <thead class="table-light">
                  <tr>
                    <th class="cursor-pointer sortable" data-column="title">Título del Archivo <i class="fa-solid fa-sort text-muted ms-1"></i></th>
                    <th class="text-end">Acciones</th>
                  </tr>
                </thead>
                <tbody id="gh-files-list">
                  <tr><td colspan="2" class="text-center p-3 text-muted">Cargando archivos...</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal para Subir Archivos -->
      <div class="modal fade" id="ghUploadModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-primary text-white">
              <h5 class="modal-title"><i class="fa-solid fa-cloud-arrow-up me-2"></i> Subir Archivo</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <form id="gh-upload-form" class="row g-3">
                <div class="col-md-6">
                  <label class="form-label small fw-bold text-muted mb-1">Repositorio</label>
                  <select id="gh-repo" class="form-select" required>
                    <option value="" disabled selected>Cargando repos...</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label class="form-label small fw-bold text-muted mb-1">Carpeta</label>
                  <input autocomplete="off" spellcheck="false" type="text" id="gh-folder" class="form-control" placeholder="Ej: media (opcional)">
                </div>

                <div class="col-12">
                  <label class="form-label small fw-bold text-muted mb-1">Archivos</label>
                  <input autocomplete="off" spellcheck="false" type="file" id="gh-file" class="form-control" multiple required>
                </div>
                
                <div class="col-12 d-none" id="gh-batch-preview-container">
                  <label class="form-label small fw-bold text-muted mb-1">Archivos a subir (Modifica el título si lo deseas)</label>
                  
                  <div id="gh-batch-preview-list" class="list-group mb-2 border rounded" style="max-height: 45vh; overflow-y: auto; overflow-x: hidden; scrollbar-width: thin;"></div>
                  
                  <div style="min-height: 36px;">
                    <div class="progress mt-3 shadow-sm d-none" style="height: 20px;" id="gh-upload-progress-container">
                      <div id="gh-upload-progress-bar" class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
                    </div>
                  </div>
                </div>

                <div class="col-12 text-end mt-4">
                  <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancelar</button>
                  <button type="submit" class="btn btn-success" id="gh-btn-upload">Subir Todos</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal para Copiar Archivos -->
      <div class="modal fade" id="ghCopyModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-warning text-dark">
              <h5 class="modal-title"><i class="fa-solid fa-copy me-2"></i> Copiar Archivo</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <form id="gh-copy-form" class="row g-3">
                <input type="hidden" id="gh-copy-orig-path">
                <input type="hidden" id="gh-copy-orig-repo">
                <input type="hidden" id="gh-copy-orig-filename">

                <div class="col-md-6">
                  <label class="form-label small fw-bold text-muted mb-1">Repositorio Destino</label>
                  <select id="gh-copy-repo" class="form-select" required>
                    <option value="" disabled selected>Cargando repos...</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label class="form-label small fw-bold text-muted mb-1">Carpeta Destino</label>
                  <input autocomplete="off" spellcheck="false" type="text" id="gh-copy-folder" class="form-control" placeholder="Ej: media">
                </div>
                <div class="col-12">
                  <label class="form-label small fw-bold text-muted mb-1">Título</label>
                  <input autocomplete="off" spellcheck="false" type="text" id="gh-copy-new-title" class="form-control" required>
                </div>
                <div class="col-12">
                  <label class="form-label small fw-bold text-muted mb-1">Tiempo de Expiración</label>
                  <select id="gh-copy-timer" class="form-select">
                    <option value="0" selected>Siempre (Sin expiración)</option>
                    <option value="15">15 Minutos</option>
                    <option value="60">1 Hora</option>
                    <option value="480">8 Horas</option>
                  </select>
                  <div class="form-text">Si seleccionas un tiempo, el archivo copiado se eliminará automáticamente.</div>
                </div>
                <div class="col-12 text-end mt-4">
                  <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancelar</button>
                  <button type="submit" class="btn btn-warning" id="gh-btn-copy">Confirmar Copia</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Modales Multimedia -->
      <div class="modal fade" id="ghImageModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="ghImageModalLabel">Vista Previa</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body text-center bg-light position-relative d-flex align-items-center justify-content-center" style="min-height: 200px;">
              <div id="gh-loading-img" class="spinner-border text-primary d-none" role="status"></div>
              <img id="gh-preview-img" src="" class="img-fluid rounded shadow-sm d-none" style="max-height: 70vh;">
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="ghPdfModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="ghPdfModalLabel">Vista Previa PDF</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body text-center bg-light position-relative d-flex align-items-center justify-content-center p-0" style="height: 80vh;">
              <div id="gh-loading-pdf" class="spinner-border text-danger d-none" role="status"></div>
              <iframe id="gh-preview-pdf" src="" class="w-100 h-100 border-0 d-none"></iframe>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal para Previsualizar Video -->
      <div class="modal fade" id="ghVideoModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-dark text-white">
              <h5 class="modal-title" id="ghVideoModalLabel">Vista Previa</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body text-center bg-black position-relative d-flex align-items-center justify-content-center p-0" style="min-height: 250px;">
              <div id="gh-loading-video" class="spinner-border text-light d-none" role="status"></div>
              <video id="gh-preview-video" controls class="w-100 d-none" style="max-height: 75vh;"></video>
            </div>
          </div>
        </div>
      </div>

      <div id="gh-audio-container" class="card shadow-lg border-0 position-fixed bottom-0 end-0 m-3 d-none" style="z-index: 1050; width: 320px;">
        <div class="card-header bg-dark text-white d-flex justify-content-between align-items-center py-2">
          <small class="fw-bold text-truncate" id="gh-audio-title" style="max-width: 240px;">Cargando...</small>
          <button type="button" class="btn-close btn-close-white btn-sm" id="gh-close-audio"></button>
        </div>
        <div class="card-body bg-secondary p-2 text-center">
            <div id="gh-loading-audio" class="spinner-border spinner-border-sm text-light mb-2 d-none"></div>
            <audio id="gh-audio-player" controls class="w-100" style="height: 30px;"></audio>
        </div>
      </div>
    `},injectStyles(){const n=document.createElement("style");n.innerHTML=".cursor-pointer { cursor: pointer; user-select: none; }",document.head.appendChild(n)}},wt={setupListeners(){var n,e,t;(n=document.getElementById("ghPdfModal"))==null||n.addEventListener("hidden.bs.modal",()=>{const s=document.getElementById("gh-preview-pdf");s.src&&(URL.revokeObjectURL(s.src.split("#")[0]),s.src="")}),(e=document.getElementById("ghVideoModal"))==null||e.addEventListener("hidden.bs.modal",()=>{const s=document.getElementById("gh-preview-video");s.pause(),s.src&&(URL.revokeObjectURL(s.src),s.src="")}),(t=document.getElementById("gh-close-audio"))==null||t.addEventListener("click",()=>{const s=document.getElementById("gh-audio-player");s.pause(),s.src="",document.getElementById("gh-audio-container").classList.add("d-none")})},async viewImage(n,e){const{path:t,title:s,repo:i}=e,r=document.getElementById("ghImageModal"),o=document.getElementById("gh-preview-img"),l=document.getElementById("gh-loading-img");document.getElementById("ghImageModalLabel").textContent=s,o.classList.add("d-none"),l.classList.remove("d-none");const c=new bootstrap.Modal(r);c.show();try{const d=await Oe.fetchSecureFile(n,t,i);o.src=URL.createObjectURL(d),o.onload=()=>{l.classList.add("d-none"),o.classList.remove("d-none")}}catch(d){j.toast("Error cargando imagen: "+d.message,"danger"),c.hide()}},async viewVideo(n,e){const{path:t,title:s,repo:i}=e,r=document.getElementById("ghVideoModal"),o=document.getElementById("gh-preview-video"),l=document.getElementById("gh-loading-video");document.getElementById("ghVideoModalLabel").textContent=s,o.classList.add("d-none"),l.classList.remove("d-none");const c=new bootstrap.Modal(r);c.show();try{const d=await Oe.fetchSecureFile(n,t,i);o.src=URL.createObjectURL(d),l.classList.add("d-none"),o.classList.remove("d-none"),o.play().catch(h=>console.log("Autoplay bloqueado por el navegador",h))}catch(d){j.toast("Error cargando video: "+d.message,"danger"),c.hide()}},async viewPdf(n,e){const{path:t,title:s,repo:i}=e,r=document.getElementById("ghPdfModal"),o=document.getElementById("gh-preview-pdf"),l=document.getElementById("gh-loading-pdf");document.getElementById("ghPdfModalLabel").textContent=s,o.classList.add("d-none"),l.classList.remove("d-none");const c=new bootstrap.Modal(r);c.show();try{const d=await Oe.fetchSecureFile(n,t,i),h=new Blob([d],{type:"application/pdf"});o.src=URL.createObjectURL(h)+"#toolbar=0&navpanes=0",o.onload=()=>{l.classList.add("d-none"),o.classList.remove("d-none")}}catch(d){j.toast("Error cargando PDF: "+d.message,"danger"),c.hide()}},async playAudio(n,e){const{path:t,title:s,repo:i}=e,r=document.getElementById("gh-audio-container"),o=document.getElementById("gh-audio-player"),l=document.getElementById("gh-loading-audio");r.classList.remove("d-none"),document.getElementById("gh-audio-title").textContent="Cargando "+s+"...",l.classList.remove("d-none"),o.classList.add("d-none"),o.pause();try{const c=await Oe.fetchSecureFile(n,t,i);o.src=URL.createObjectURL(c),o.classList.remove("d-none"),l.classList.add("d-none"),document.getElementById("gh-audio-title").textContent=s,o.play().catch(d=>console.log("Autoplay bloqueado",d))}catch(c){j.toast("Error cargando audio: "+c.message,"danger"),r.classList.add("d-none")}},async downloadFile(n,e,t){const{path:s,name:i,repo:r}=e,o=t.innerHTML;t.disabled=!0,t.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>';try{const l=await Oe.fetchSecureFile(n,s,r),c=URL.createObjectURL(l),d=document.createElement("a");d.href=c,d.download=i,document.body.appendChild(d),d.click(),document.body.removeChild(d),setTimeout(()=>URL.revokeObjectURL(c),1e3)}catch(l){j.toast("Error en la descarga: "+l.message,"danger")}finally{t.disabled=!1,t.innerHTML=o}},async openPdfMobile(n,e,t){const{path:s,repo:i}=e,r=t.innerHTML,o=window.open("","_blank");o&&o.document.write("<h3 style='font-family: sans-serif; text-align: center; margin-top: 20%; color: #555;'>Cargando documento seguro...</h3>"),t.disabled=!0,t.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>';try{const l=await Oe.fetchSecureFile(n,s,i),c=new Blob([l],{type:"application/pdf"}),d=URL.createObjectURL(c);o?o.location.href=d:window.location.href=d,setTimeout(()=>URL.revokeObjectURL(d),6e4)}catch(l){o&&o.close(),j.toast("Error abriendo el documento: "+l.message,"danger")}finally{t.disabled=!1,t.innerHTML=r}},copyLink(n){navigator.clipboard.writeText(n).then(()=>j.toast("Enlace público copiado al portapapeles.","success")).catch(()=>j.toast("No se pudo copiar el enlace.","danger"))}},rd={handleFileSelection(n){const e=n.target.files,t=document.getElementById("gh-batch-preview-container"),s=document.getElementById("gh-batch-preview-list");if(s.innerHTML="",e.length===0){t.classList.add("d-none");return}t.classList.remove("d-none"),Array.from(e).forEach((i,r)=>{const o=i.name.substring(0,i.name.lastIndexOf("."))||i.name,l=document.createElement("div");l.className="list-group-item bg-light p-2",l.innerHTML=`
        <div class="d-flex align-items-center mb-1">
          <i class="fa-regular fa-file me-2 text-secondary"></i>
          <span class="small fw-bold text-truncate" style="max-width: 70%;">${i.name}</span>
          <span class="badge bg-secondary ms-auto">${(i.size/(1024*1024)).toFixed(2)} MB</span>
        </div>
        <input type="text" class="form-control form-control-sm gh-batch-title" data-index="${r}" value="${o}" required placeholder="Título para este archivo">
      `,s.appendChild(l)})},async processSingleFileUpload(n,e,t,s,i,r,o){const l=e.replace(/[^a-z0-9]/gi,"_").toLowerCase()+"."+n.name.split(".").pop(),c=await Oe.uploadFile(o.config,n,t,l,s);await je.addFileRecord({userId:r.uid,title:e,folder:t,fileName:l,originalName:n.name,path:c.content.path,sha:c.content.sha,htmlUrl:c.content.html_url,downloadUrl:c.content.download_url,createdAt:new Date().toISOString(),repoName:s,isPrivate:i})},async handleUpload(n,e,t){var L;n.preventDefault();const s=document.getElementById("gh-btn-upload"),i=document.getElementById("gh-repo"),r=i.value,o=i.options[i.selectedIndex].dataset.isPrivate==="true",l=document.getElementById("gh-folder").value.trim()||"root",c=document.getElementById("gh-file"),d=c.files;if(d.length===0||!r)return;const h=15,m=h*1024*1024;for(let P of d)if(P.size>m){const M=(P.size/1048576).toFixed(2);j.toast(`El archivo ${P.name} pesa ${M} MB. El límite es de ${h} MB.`,"warning");return}const g=document.querySelectorAll(".gh-batch-title"),E=document.getElementById("gh-upload-progress-container"),T=document.getElementById("gh-upload-progress-bar");try{s.disabled=!0,E.classList.remove("d-none"),T.style.width="0%",T.textContent="0%",T.classList.remove("bg-danger"),T.classList.add("bg-success");let P=0;const M=d.length;for(let F=0;F<M;F++){const B=d[F],ee=g[F].value.trim()||B.name;s.innerHTML=`<i class="fa-solid fa-spinner fa-spin"></i> Subiendo (${F+1}/${M})...`,await this.processSingleFileUpload(B,ee,l,r,o,e,t),P++;const re=Math.round(P/M*100);T.style.width=`${re}%`,T.textContent=`${re}%`}await je.updateLastUsedSettings(e.uid,r,l),t.config.lastUsedRepo=r,t.config.lastUsedFolder=l,c.value="",document.getElementById("gh-batch-preview-container").classList.add("d-none"),E.classList.add("d-none"),(L=bootstrap.Modal.getInstance(document.getElementById("ghUploadModal")))==null||L.hide(),j.toast(`Se subieron ${M} archivo(s) correctamente.`,"success"),t.currentPage=1,t.loadFilesList(e.uid)}catch(P){j.toast("Error en la subida por lotes: "+P.message,"danger"),T.classList.replace("bg-success","bg-danger")}finally{s.disabled=!1,s.innerHTML="Subir Todos"}}},xo={async handleCopy(n,e,t){var L;n.preventDefault();const s=document.getElementById("gh-btn-copy"),i=document.getElementById("gh-copy-orig-path").value,r=document.getElementById("gh-copy-orig-repo").value,o=document.getElementById("gh-copy-orig-filename").value,l=document.getElementById("gh-copy-repo"),c=l.value,d=l.options[l.selectedIndex].dataset.isPrivate==="true",h=document.getElementById("gh-copy-folder").value.trim()||"root",m=document.getElementById("gh-copy-new-title").value.trim(),g=parseInt(document.getElementById("gh-copy-timer").value),E=o.split(".").pop(),T=m.replace(/[^a-z0-9]/gi,"_").toLowerCase()+"."+E;try{s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Copiando...';const P=await Oe.fetchSecureFile(t.config,i,r),M=await Oe.uploadFile(t.config,P,h,T,c),F=g>0?Date.now()+g*60*1e3:null;await je.addFileRecord({userId:e.uid,title:m,folder:h,fileName:T,originalName:o,path:M.content.path,sha:M.content.sha,htmlUrl:M.content.html_url,downloadUrl:M.content.download_url,createdAt:new Date().toISOString(),repoName:c,isPrivate:d,expiresAt:F}),(L=bootstrap.Modal.getInstance(document.getElementById("ghCopyModal")))==null||L.hide(),j.toast(`Archivo copiado correctamente${F?" (Con autodestrucción)":""}.`,"success"),t.currentPage=1,t.loadFilesList(e.uid)}catch(P){j.toast("Error en la copia: "+P.message,"danger")}finally{s.disabled=!1,s.innerHTML="Confirmar Copia"}},async handleDelete(n,e,t){if(await j.confirm("Eliminar Archivo","¿Estás seguro de eliminar este archivo permanentemente?"))try{await Oe.deleteFile(t.config,e.path,e.sha,e.repo),await je.deleteFileRecord(e.id),t.currentFiles.length-1<=(t.currentPage-1)*t.itemsPerPage&&t.currentPage>1&&t.currentPage--,t.loadFilesList(n),j.toast("Archivo eliminado.","success")}catch(i){j.toast("Error eliminando: "+i.message,"danger")}},async handleSilentDelete(n,e){try{await Oe.deleteFile(e.config,n.path,n.sha,n.repoName),await je.deleteFileRecord(n.id),`${n.fileName}`}catch(t){console.error(`Error al eliminar archivo expirado: ${n.fileName}`,t)}}},_t={setupListeners(n,e){var s,i;let t;document.getElementById("gh-search-input").addEventListener("input",()=>{clearTimeout(t),t=setTimeout(()=>{n.currentPage=1,this.renderTable(n,e.uid)},300)}),(s=document.getElementById("gh-filter-repo"))==null||s.addEventListener("change",()=>{n.currentPage=1,this.renderTable(n,e.uid)}),(i=document.getElementById("gh-filter-folder"))==null||i.addEventListener("change",()=>{n.currentPage=1,this.renderTable(n,e.uid)}),document.querySelectorAll(".sortable").forEach(r=>{r.addEventListener("click",()=>{const o=r.dataset.column;n.currentSort.asc=n.currentSort.column===o?!n.currentSort.asc:!0,n.currentSort.column=o,document.querySelectorAll(".sortable i").forEach(l=>l.className="fa-solid fa-sort text-muted ms-1"),r.querySelector("i").className=n.currentSort.asc?"fa-solid fa-sort-up ms-1":"fa-solid fa-sort-down ms-1",n.currentPage=1,this.renderTable(n,e.uid)})}),document.getElementById("gh-pagination-controls").addEventListener("click",r=>{const o=r.target.closest("button");if(o!=null&&o.classList.contains("btn-prev-page")&&n.currentPage>1)n.currentPage--;else if(o!=null&&o.classList.contains("btn-next-page")&&n.currentPage<n.totalPages)n.currentPage++;else return;this.renderTable(n,e.uid)})},buildFilters(n){const e=document.getElementById("gh-filter-repo"),t=document.getElementById("gh-filter-folder");if(!e||!t)return;const s=[...new Set(n.currentFiles.map(l=>l.repoName))].filter(Boolean),i=[...new Set(n.currentFiles.map(l=>l.folder))].filter(Boolean),r=e.value,o=t.value;s.length>1?(e.innerHTML='<option value="">📁 Todos los Repos</option>'+s.map(l=>`<option value="${l}">${l}</option>`).join(""),e.value=s.includes(r)?r:"",e.classList.remove("d-none")):(e.classList.add("d-none"),e.value=""),i.length>1?(t.innerHTML='<option value="">📂 Todas las Carpetas</option>'+i.map(l=>`<option value="${l}">${l}</option>`).join(""),t.value=i.includes(o)?o:"",t.classList.remove("d-none")):(t.classList.add("d-none"),t.value="")},calculatePaginationSpace(n){const e=document.getElementById("gh-files-list");if(!e)return;const t=document.createElement("tr");t.style.visibility="hidden",t.innerHTML=`
      <td><span class="badge bg-success mb-1">Repo</span></td>
      <td class="fw-bold text-nowrap"><i class="fa-regular fa-image me-2"></i> Test File</td>
      <td class="text-end"><button class="btn btn-sm btn-danger"><i class="fa-solid fa-trash"></i></button></td>
    `,e.appendChild(t);const s=t.getBoundingClientRect().height||50;e.removeChild(t);const i=e.getBoundingClientRect().top,r=i>0?i:250,o=window.innerHeight-r-40;n.itemsPerPage=Math.max(5,Math.floor(o/s))},renderTable(n,e){var g,E;const t=document.getElementById("gh-files-list"),s=document.getElementById("gh-pagination-controls"),i=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);if(n.currentFiles.length===0){t.innerHTML='<tr><td colspan="2" class="text-center p-3 text-muted">No hay archivos subidos aún.</td></tr>',s.innerHTML='<span class="fw-bold">Mis Archivos (0)</span>';return}const r=n.normalizeText(document.getElementById("gh-search-input").value).split(/\s+/).filter(T=>T.length>0),o=(g=document.getElementById("gh-filter-repo"))==null?void 0:g.value,l=(E=document.getElementById("gh-filter-folder"))==null?void 0:E.value;let c=n.currentFiles;o&&(c=c.filter(T=>T.repoName===o)),l&&(c=c.filter(T=>T.folder===l)),r.length>0&&(c=c.filter(T=>r.every(L=>n.normalizeText(`${T.title} ${T.folder} ${T.fileName}`).includes(L)))),c.sort((T,L)=>{if(T.repoName<L.repoName)return-1;if(T.repoName>L.repoName)return 1;if(T.folder<L.folder)return-1;if(T.folder>L.folder)return 1;if(n.currentSort.column){let P=n.normalizeText(T[n.currentSort.column]||""),M=n.normalizeText(L[n.currentSort.column]||"");if(P<M)return n.currentSort.asc?-1:1;if(P>M)return n.currentSort.asc?1:-1}return 0}),n.totalPages=Math.max(1,Math.ceil(c.length/n.itemsPerPage)),n.currentPage>n.totalPages&&(n.currentPage=1);const d=c.slice((n.currentPage-1)*n.itemsPerPage,n.currentPage*n.itemsPerPage);if(s.innerHTML=`
      <button class="btn btn-sm btn-outline-secondary btn-prev-page" ${n.currentPage===1?"disabled":""}><i class="fa-solid fa-chevron-left"></i></button>
      <span class="small fw-bold px-1">Pág ${n.currentPage} de ${n.totalPages}</span>
      <button class="btn btn-sm btn-outline-secondary btn-next-page" ${n.currentPage===n.totalPages?"disabled":""}><i class="fa-solid fa-chevron-right"></i></button>
      <span class="badge bg-primary rounded-pill ms-2">${c.length} en total</span>
    `,d.length===0){t.innerHTML='<tr><td colspan="2" class="text-center p-3 text-muted">No se encontraron coincidencias con los filtros actuales.</td></tr>';return}let h="",m=null;d.forEach(T=>{const L=`${T.repoName}-${T.folder}`;if(m!==L){m=L;const b=T.isPrivate?"fa-lock text-danger":"fa-globe text-success";h+=`
          <tr class="table-secondary">
            <td colspan="2" class="py-2 px-3 small fw-bold text-dark text-uppercase letter-spacing-1">
              <i class="fa-solid ${b} me-1"></i> ${T.repoName}
              <i class="fa-solid fa-chevron-right mx-2 text-muted" style="font-size: 0.8em;"></i>
              <i class="fa-regular fa-folder-open text-primary me-1"></i> ${T.folder}
            </td>
          </tr>
        `}const P=T.fileName.split(".").pop().toLowerCase(),M=["jpg","jpeg","png","gif","webp","svg"].includes(P),F=["mp3","wav","ogg","m4a"].includes(P),B=P==="pdf",ee=["mp4","webm","ogg","mov"].includes(P);let re=M?'<i class="fa-regular fa-image text-primary me-2"></i>':F?'<i class="fa-solid fa-music text-info me-2"></i>':B?'<i class="fa-solid fa-file-pdf text-danger me-2"></i>':ee?'<i class="fa-solid fa-video text-success me-2"></i>':`<span class="text-muted small fw-normal me-2">(${P})</span>`;const X=`data-id="${T.id}" data-sha="${T.sha}" data-path="${T.path}" data-title="${T.title}" data-repo="${T.repoName}" data-folder="${T.folder}" data-filename="${T.fileName}"`;let _="";if(M?_+=`<button class="btn btn-sm btn-outline-primary btn-view-img me-1" ${X}><i class="fa-regular fa-eye"></i></button>`:F?_+=`<button class="btn btn-sm btn-outline-info btn-play-audio me-1" ${X}><i class="fa-solid fa-play"></i></button>`:B?_+=`<button class="btn btn-sm btn-outline-danger ${i?"btn-open-pdf-mobile":"btn-view-pdf"} me-1" ${X}><i class="fa-solid ${i?"fa-arrow-up-right-from-square":"fa-file-pdf"}"></i></button>`:ee&&(_+=`<button class="btn btn-sm btn-outline-success btn-play-video me-1" ${X}><i class="fa-solid fa-video"></i></button>`),_+=`<button class="btn btn-sm btn-outline-warning btn-copy-trigger me-1" ${X} title="Copiar Archivo"><i class="fa-solid fa-copy"></i></button>`,_+=`<button class="btn btn-sm btn-outline-secondary btn-download-gh me-1" ${X} data-name="${T.originalName||T.fileName}"><i class="fa-solid fa-download"></i></button>`,!T.isPrivate){const b=n.repoPages[T.repoName],I=b?(b.endsWith("/")?b:b+"/")+(T.path.startsWith("/")?T.path.substring(1):T.path):T.htmlUrl;_+=`<button class="btn btn-sm ${b?"btn-outline-success":"btn-outline-secondary"} btn-copy-link me-1" data-url="${I}"><i class="fa-solid ${b?"fa-link":"fa-github"}"></i></button>`}_+=`<button class="btn btn-sm btn-danger btn-delete-gh" ${X}><i class="fa-solid fa-trash"></i></button>`;const y=T.expiresAt?'<span class="badge bg-warning text-dark ms-2"><i class="fa-regular fa-clock"></i> Temporal</span>':"";h+=`
        <tr>
          <td class="fw-bold text-nowrap ps-4">
            ${re}${T.title} ${y}
          </td>
          <td class="text-end text-nowrap">
            ${_}
          </td>
        </tr>
      `}),t.innerHTML=h,this.attachTableListeners(n,e)},attachTableListeners(n,e){document.querySelectorAll(".btn-copy-trigger").forEach(t=>{t.addEventListener("click",()=>{document.getElementById("gh-copy-orig-path").value=t.dataset.path,document.getElementById("gh-copy-orig-repo").value=t.dataset.repo,document.getElementById("gh-copy-orig-filename").value=t.dataset.filename,document.getElementById("gh-copy-folder").value=t.dataset.folder,document.getElementById("gh-copy-new-title").value=t.dataset.title+" (Copia)",document.getElementById("gh-copy-repo").value=t.dataset.repo,new bootstrap.Modal(document.getElementById("ghCopyModal")).show()})}),document.querySelectorAll(".btn-view-img").forEach(t=>t.addEventListener("click",()=>wt.viewImage(n.config,t.dataset))),document.querySelectorAll(".btn-view-pdf").forEach(t=>t.addEventListener("click",()=>wt.viewPdf(n.config,t.dataset))),document.querySelectorAll(".btn-play-audio").forEach(t=>t.addEventListener("click",()=>wt.playAudio(n.config,t.dataset))),document.querySelectorAll(".btn-download-gh").forEach(t=>t.addEventListener("click",()=>wt.downloadFile(n.config,t.dataset,t))),document.querySelectorAll(".btn-open-pdf-mobile").forEach(t=>t.addEventListener("click",()=>wt.openPdfMobile(n.config,t.dataset,t))),document.querySelectorAll(".btn-copy-link").forEach(t=>t.addEventListener("click",()=>wt.copyLink(t.dataset.url))),document.querySelectorAll(".btn-delete-gh").forEach(t=>t.addEventListener("click",()=>xo.handleDelete(e,t.dataset,n))),document.querySelectorAll(".btn-play-video").forEach(t=>t.addEventListener("click",()=>wt.viewVideo(n.config,t.dataset)))}},jw={config:null,repoPages:{},currentFiles:[],currentSort:{column:"createdAt",asc:!1},currentPage:1,itemsPerPage:20,totalPages:1,async init(n){const e=document.getElementById(n);if(!e)return;const t=Ct.getCurrentUser();if(!t)return;if(this.config=await je.getUserConfig(t.uid),!this.config){e.innerHTML='<div class="alert alert-warning">No hay configuración de GitHub detectada. Ve a Configuración.</div>';return}e.innerHTML=id.getBaseHTML(),id.injectStyles(),wt.setupListeners(),this.config.lastUsedFolder&&(document.getElementById("gh-folder").value=this.config.lastUsedFolder),document.getElementById("gh-upload-form").addEventListener("submit",i=>rd.handleUpload(i,t,this)),document.getElementById("gh-copy-form").addEventListener("submit",i=>xo.handleCopy(i,t,this)),document.getElementById("gh-file").addEventListener("change",i=>rd.handleFileSelection(i)),_t.setupListeners(this,t),_t.calculatePaginationSpace(this);let s;window.addEventListener("resize",()=>{clearTimeout(s),s=setTimeout(()=>{const i=document.getElementById(n);i&&!i.classList.contains("d-none")&&i.style.display!=="none"&&(_t.calculatePaginationSpace(this),_t.renderTable(this,t.uid))},300)}),this.populateRepos(),this.loadFilesList(t.uid)},normalizeText(n){return(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()},async loadFilesList(n){const e=document.getElementById("gh-files-list");try{const t=await je.listFiles(n),s=Date.now(),i=[];for(const r of t)r.expiresAt&&s>r.expiresAt?xo.handleSilentDelete(r,this):i.push(r);this.currentFiles=i,_t.buildFilters(this),_t.calculatePaginationSpace(this),_t.renderTable(this,n)}catch(t){e.innerHTML=`<tr><td colspan="4" class="text-danger text-center">Error cargando lista: ${t.message}</td></tr>`}},async populateRepos(){const n=document.getElementById("gh-repo"),e=document.getElementById("gh-copy-repo");try{const t=await Oe.getUserRepos(this.config.githubToken);if(n.innerHTML="",e.innerHTML="",this.repoPages={},t.forEach(s=>{const i=document.createElement("option");i.value=s.name,i.textContent=`${s.isPrivate?"🔒":"🌐"} ${s.name}`,i.dataset.isPrivate=s.isPrivate,s.pagesUrl&&(this.repoPages[s.name]=s.pagesUrl);const r=i.cloneNode(!0);this.config.lastUsedRepo===s.name&&(i.selected=!0),n.appendChild(i),e.appendChild(r)}),!n.value&&n.options.length>0&&(n.selectedIndex=0),!e.value&&e.options.length>0&&(e.selectedIndex=0),this.currentFiles.length>0){const s=Ct.getCurrentUser();s&&_t.renderTable(this,s.uid)}}catch(t){n.innerHTML=e.innerHTML="<option disabled>Error cargando repositorios</option>",console.error(t)}}};async function Hw(){const e=Object.keys(Ve).flatMap(t=>[Yn(Object.assign({"./components/boolean/setting-boolean.js":()=>O(()=>Promise.resolve().then(()=>Zw),void 0,import.meta.url),"./components/chart/setting-chart.js":()=>O(()=>Promise.resolve().then(()=>eE),void 0,import.meta.url),"./components/currency/setting-currency.js":()=>O(()=>Promise.resolve().then(()=>tE),void 0,import.meta.url),"./components/date/setting-date.js":()=>O(()=>Promise.resolve().then(()=>sE),void 0,import.meta.url),"./components/email/setting-email.js":()=>O(()=>Promise.resolve().then(()=>nE),void 0,import.meta.url),"./components/number/setting-number.js":()=>O(()=>Promise.resolve().then(()=>iE),void 0,import.meta.url),"./components/password/setting-password.js":()=>O(()=>Promise.resolve().then(()=>rE),void 0,import.meta.url),"./components/percentage/setting-percentage.js":()=>O(()=>Promise.resolve().then(()=>oE),void 0,import.meta.url),"./components/section/setting-section.js":()=>O(()=>Promise.resolve().then(()=>aE),void 0,import.meta.url),"./components/select/setting-select.js":()=>O(()=>Promise.resolve().then(()=>lE),void 0,import.meta.url),"./components/string/setting-string.js":()=>O(()=>Promise.resolve().then(()=>cE),void 0,import.meta.url),"./components/table/setting-table.js":()=>O(()=>Promise.resolve().then(()=>dE),void 0,import.meta.url),"./components/text/setting-text.js":()=>O(()=>Promise.resolve().then(()=>uE),void 0,import.meta.url),"./components/url/setting-url.js":()=>O(()=>Promise.resolve().then(()=>hE),void 0,import.meta.url)}),`./components/${t}/setting-${t}.js`,4),Yn(Object.assign({"./components/boolean/editor-boolean.js":()=>O(()=>Promise.resolve().then(()=>pE),void 0,import.meta.url),"./components/chart/editor-chart.js":()=>O(()=>Promise.resolve().then(()=>mE),void 0,import.meta.url),"./components/currency/editor-currency.js":()=>O(()=>Promise.resolve().then(()=>gE),void 0,import.meta.url),"./components/date/editor-date.js":()=>O(()=>Promise.resolve().then(()=>yE),void 0,import.meta.url),"./components/email/editor-email.js":()=>O(()=>Promise.resolve().then(()=>bE),void 0,import.meta.url),"./components/number/editor-number.js":()=>O(()=>Promise.resolve().then(()=>fE),void 0,import.meta.url),"./components/password/editor-password.js":()=>O(()=>Promise.resolve().then(()=>vE),void 0,import.meta.url),"./components/percentage/editor-percentage.js":()=>O(()=>Promise.resolve().then(()=>_E),void 0,import.meta.url),"./components/section/editor-section.js":()=>O(()=>Promise.resolve().then(()=>wE),void 0,import.meta.url),"./components/select/editor-select.js":()=>O(()=>Promise.resolve().then(()=>EE),void 0,import.meta.url),"./components/string/editor-string.js":()=>O(()=>Promise.resolve().then(()=>IE),void 0,import.meta.url),"./components/table/editor-table.js":()=>O(()=>Promise.resolve().then(()=>TE),void 0,import.meta.url),"./components/text/editor-text.js":()=>O(()=>Promise.resolve().then(()=>AE),void 0,import.meta.url),"./components/url/editor-url.js":()=>O(()=>Promise.resolve().then(()=>SE),void 0,import.meta.url)}),`./components/${t}/editor-${t}.js`,4),Yn(Object.assign({"./components/boolean/viewer-boolean.js":()=>O(()=>Promise.resolve().then(()=>CE),void 0,import.meta.url),"./components/chart/viewer-chart.js":()=>O(()=>Promise.resolve().then(()=>PE),void 0,import.meta.url),"./components/currency/viewer-currency.js":()=>O(()=>Promise.resolve().then(()=>xE),void 0,import.meta.url),"./components/date/viewer-date.js":()=>O(()=>Promise.resolve().then(()=>RE),void 0,import.meta.url),"./components/email/viewer-email.js":()=>O(()=>Promise.resolve().then(()=>LE),void 0,import.meta.url),"./components/number/viewer-number.js":()=>O(()=>Promise.resolve().then(()=>kE),void 0,import.meta.url),"./components/password/viewer-password.js":()=>O(()=>Promise.resolve().then(()=>DE),void 0,import.meta.url),"./components/percentage/viewer-percentage.js":()=>O(()=>Promise.resolve().then(()=>VE),void 0,import.meta.url),"./components/section/viewer-section.js":()=>O(()=>Promise.resolve().then(()=>ME),void 0,import.meta.url),"./components/select/viewer-select.js":()=>O(()=>Promise.resolve().then(()=>OE),void 0,import.meta.url),"./components/string/viewer-string.js":()=>O(()=>Promise.resolve().then(()=>NE),void 0,import.meta.url),"./components/table/viewer-table.js":()=>O(()=>Promise.resolve().then(()=>$E),void 0,import.meta.url),"./components/text/viewer-text.js":()=>O(()=>Promise.resolve().then(()=>FE),void 0,import.meta.url),"./components/url/viewer-url.js":()=>O(()=>Promise.resolve().then(()=>BE),void 0,import.meta.url)}),`./components/${t}/viewer-${t}.js`,4),Yn(Object.assign({"./components/boolean/printer-boolean.js":()=>O(()=>Promise.resolve().then(()=>UE),void 0,import.meta.url),"./components/chart/printer-chart.js":()=>O(()=>Promise.resolve().then(()=>jE),void 0,import.meta.url),"./components/currency/printer-currency.js":()=>O(()=>Promise.resolve().then(()=>HE),void 0,import.meta.url),"./components/date/printer-date.js":()=>O(()=>Promise.resolve().then(()=>qE),void 0,import.meta.url),"./components/email/printer-email.js":()=>O(()=>Promise.resolve().then(()=>zE),void 0,import.meta.url),"./components/number/printer-number.js":()=>O(()=>Promise.resolve().then(()=>GE),void 0,import.meta.url),"./components/password/printer-password.js":()=>O(()=>Promise.resolve().then(()=>WE),void 0,import.meta.url),"./components/percentage/printer-percentage.js":()=>O(()=>Promise.resolve().then(()=>KE),void 0,import.meta.url),"./components/section/printer-section.js":()=>O(()=>Promise.resolve().then(()=>QE),void 0,import.meta.url),"./components/select/printer-select.js":()=>O(()=>Promise.resolve().then(()=>JE),void 0,import.meta.url),"./components/string/printer-string.js":()=>O(()=>Promise.resolve().then(()=>YE),void 0,import.meta.url),"./components/table/printer-table.js":()=>O(()=>Promise.resolve().then(()=>XE),void 0,import.meta.url),"./components/text/printer-text.js":()=>O(()=>Promise.resolve().then(()=>ZE),void 0,import.meta.url),"./components/url/printer-url.js":()=>O(()=>Promise.resolve().then(()=>eI),void 0,import.meta.url)}),`./components/${t}/printer-${t}.js`,4)]);try{await Promise.all(e)}catch(t){console.error("[ERROR] APP: Fallo cargando componentes:",t)}}document.addEventListener("DOMContentLoaded",async()=>{const n=document.getElementById("theme-link"),e=localStorage.getItem("doc_engine_theme_url"),t="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";n&&(n.onerror=()=>{console.error("[THEME] ❌ Error. Revertiendo a Default."),n.href=t,localStorage.setItem("doc_engine_theme_url",t)},n.href=e&&e.includes("http")?e:t);try{await q.initDB()}catch(s){console.error("[ERROR] APP: Error de inicialización:",s);return}await Hw(),Ww(),q.onAuthStateChanged(async s=>{s?(s.email,await qw(s)):(document.getElementById("app-content").style.display="none",Oh.renderLogin())})});async function qw(n){document.getElementById("user-none").style.display="block",document.getElementById("pass-none").style.display="block",document.getElementById("auth-container").style.display="none",document.getElementById("app-content").style.display="block";const e=document.getElementById("user-display-name");e&&(e.innerHTML=`<i class="fa-solid fa-user-check me-2 text-success"></i>${n.email}`),Oh.initLogout(),Hi.init(),ws.init(),Nh.init(),!await q.hasSecurityConfigured()&&Es&&Es.renderSetupModal&&Es.renderSetupModal(),await je.getUserConfig(n.uid)&&zw(),Gw(),Is("documents"),window._eventCreateDocRegistered||(window.addEventListener("create-doc-from-template",i=>{Is("documents"),ws.createFromTemplate(i.detail.tplId)}),window._eventCreateDocRegistered=!0)}function zw(){const n=document.querySelector(".navbar-nav.me-auto");if(document.getElementById("nav-github"))return;const e=document.createElement("li");e.className="nav-item",e.innerHTML=`
    <a class="nav-link px-3 text-bg-primary" href="#" id="nav-github">
      <i class="fa-brands fa-github me-1"></i> Archivos GitHub
    </a>
  `,n.appendChild(e),document.getElementById("nav-github").addEventListener("click",t=>{t.preventDefault(),Is("github"),jw.init("view-github")})}function Gw(){document.getElementById("nav-designer").onclick=n=>{n.preventDefault(),Is("designer")},document.getElementById("nav-documents").onclick=n=>{n.preventDefault(),Is("documents")},document.getElementById("nav-settings").onclick=n=>{n.preventDefault(),Is("settings")}}function Is(n){const e={designer:document.getElementById("view-designer"),documents:document.getElementById("view-documents"),settings:document.getElementById("view-settings"),github:document.getElementById("view-github")},t={designer:document.getElementById("nav-designer"),documents:document.getElementById("nav-documents"),settings:document.getElementById("nav-settings"),github:document.getElementById("nav-github")};Object.values(e).forEach(s=>{s&&(s.style.display="none")}),Object.values(t).forEach(s=>{s&&s.classList.remove("active"),s&&(s.style.fontWeight="normal")}),e[n]&&(e[n].style.display="block"),t[n]&&(t[n].classList.add("active"),t[n].style.fontWeight="bold"),n==="designer"&&Hi.renderList(),n==="documents"&&ws.renderList(),n==="settings"&&Nh.render()}function Ww(){document.addEventListener("click",t=>{const s=t.target.closest(".toggle-password");if(s){t.preventDefault();const i=document.getElementById(s.dataset.target),r=s.querySelector("i");if(i&&r){const o=i.type==="password";i.type=o?"text":"password",r.classList.toggle("fa-eye",!o),r.classList.toggle("fa-eye-slash",o)}}});const n=document.querySelector(".navbar"),e=document.querySelector(".app-container");n&&e&&new ResizeObserver(s=>{for(let i of s){const r=n.offsetHeight;e.style.marginTop=`${r+30}px`,document.getElementById("doc-list-view")&&window.getComputedStyle(document.getElementById("doc-list-view")).display!=="none"&&setTimeout(()=>{ws&&ws.renderList&&ws.renderList()},250)}}).observe(n)}const Kw=n=>class extends n{getCommonStyles(){const e=this.hasAttribute("bold"),t=this.hasAttribute("italic"),s=this.getAttribute("color")||"inherit";return`font-weight: ${e?"bold":"normal"};
        font-style: ${t?"italic":"normal"};
        color: ${s};`}renderStyleControls(e=[]){const t=this.hasAttribute("bold"),s=this.hasAttribute("italic"),i=this.getAttribute("color")||"black",r=!e.includes("bold"),o=!e.includes("italic"),l=!e.includes("color");let c="";(r||o)&&(c=`
          <li><h6 class="dropdown-header small text-uppercase fw-bold opacity-50">Formato</h6></li>
          <li class="px-3 py-1">
              <div class="btn-group w-100 shadow-sm">
                  ${r?`<button class="btn btn-sm btn-outline-secondary ${t?"active":""}" id="btn-b-${this.id}" title="Negrita"><i class="fa-solid fa-bold"></i></button>`:""}
                  ${o?`<button class="btn btn-sm btn-outline-secondary ${s?"active":""}" id="btn-i-${this.id}" title="Itálica"><i class="fa-solid fa-italic"></i></button>`:""}
              </div>
          </li>
          <li><hr class="dropdown-divider"></li>
        `);let d="";return l&&(d=`
          <li><h6 class="dropdown-header small text-uppercase fw-bold opacity-50">Color de texto</h6></li>
          <li class="px-2">
              <div class="d-flex flex-wrap gap-1 justify-content-center p-1" id="color-grid-${this.id}">
                  ${["black","red","blue","green","gray"].map(h=>`<button class="btn btn-sm rounded-circle p-0 border ${i===h?"border-dark":"border-light"}" data-color="${h}" style="background-color: ${h}; width: 22px; height: 22px;" title="${h}"></button>`).join("")}
              </div>
          </li>
          <li><hr class="dropdown-divider"></li>
        `),`
          <div class="dropdown">
            <button class="btn btn-sm btn-light text-body-secondary border-0 shadow-none" type="button" id="btn-opts-${this.id}" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end shadow-lg border-0" style="min-width: 180px; font-size: 0.85rem;">
                ${c}
                ${d}
                <li><h6 class="dropdown-header small text-uppercase fw-bold opacity-50">Utilidades</h6></li>
                <li>
                    <button class="dropdown-item d-flex align-items-center gap-2 py-2" id="btn-copy-${this.id}">
                        <i class="fa-regular fa-copy text-muted" style="width:16px"></i> Copiar valor
                    </button>
                </li>
                <li>
                    <button class="dropdown-item d-flex align-items-center gap-2 py-2" id="btn-paste-${this.id}">
                        <i class="fa-solid fa-paste text-muted" style="width:16px"></i> Pegar valor
                    </button>
                </li>
            </ul>
          </div>
        `}_attachStyleEventListeners(e){e&&e.addEventListener("input",()=>{this._isInternalUpdate=!0,this.setAttribute("edit-value",e.value),this._isInternalUpdate=!1});const t=this.querySelector(`#btn-opts-${this.id}`);t&&(t.addEventListener("show.bs.dropdown",()=>{const r=this.closest(".card");r&&(r.style.overflow="visible")}),t.addEventListener("hidden.bs.dropdown",()=>{const r=this.closest(".card");r&&(r.style.overflow="hidden")}));const s=(r,o)=>{const l=this.querySelector(`#${r}-${this.id}`);l&&(l.onclick=c=>{c.preventDefault(),o(c)})};s("btn-b",()=>{this._isInternalUpdate=!0,this.toggleAttribute("bold"),this._isInternalUpdate=!1,this.render()}),s("btn-i",()=>{this._isInternalUpdate=!0,this.toggleAttribute("italic"),this._isInternalUpdate=!1,this.render()});const i=this.querySelector(`#color-grid-${this.id}`);i&&i.querySelectorAll("button").forEach(r=>{r.onclick=o=>{o.preventDefault(),this._isInternalUpdate=!0,this.setAttribute("color",r.dataset.color),this._isInternalUpdate=!1,this.render()}}),s("btn-copy",()=>{const r=this.querySelector(`#btn-copy-${this.id}`),o=r.innerHTML;let l="";if(typeof this.getData=="function"){const c=this.getData();l=typeof c.value=="object"?JSON.stringify(c.value):c.value||""}else l=this.getAttribute("edit-value")||"";sessionStorage.setItem("doc_clipboard_value",l),r.innerHTML='<i class="fa-solid fa-check text-success" style="width:16px"></i> ¡Copiado!',setTimeout(()=>{r.innerHTML=o},1200)}),s("btn-paste",()=>{const r=this.querySelector(`#btn-paste-${this.id}`),o=sessionStorage.getItem("doc_clipboard_value");if(o!==null){typeof this.setData=="function"?this.setData({value:o}):this.setAttribute("edit-value",o);const l=r.innerHTML;r.innerHTML='<i class="fa-solid fa-check text-primary" style="width:16px"></i> ¡Pegado!',setTimeout(()=>{r.innerHTML=l},1200)}})}};class Qw{constructor(e,t=""){this.container=e,this.tokens=[],this.availableVars=[],this.draggedIndex=null,this._parseFormulaString(t),this._initDragEvents(),this.render()}setContextVariables(e){this.availableVars=e||[],this.render()}addToken(e,t,s){this.tokens.push({type:e,value:t,label:s||t}),this.render()}removeToken(e){this.tokens.splice(e,1),this.render()}clear(){this.tokens=[],this.render()}getFormulaString(){return this.tokens.map(e=>e.type==="var"?`@{${e.value}}`:e.value).join(" ")}validate(){if(this.tokens.some(s=>s.type==="var"&&!this.availableVars.find(i=>i.id===s.value)))return{valid:!1,msg:"Existen variables no válidas (rojas). Elimínalas para continuar."};if(this.tokens.length===0)return{valid:!1,msg:"La fórmula está vacía."};const t=this.tokens.map(s=>s.type==="var"?"1":s.value).join(" ");try{if(/[^0-9+\-*/().\s]/.test(t))throw new Error("Caracteres no permitidos");const s=new Function(`return ${t}`)();if(isNaN(s)||!isFinite(s))throw new Error("Resultado matemático inválido");return{valid:!0,msg:"Fórmula válida."}}catch(s){return{valid:!1,msg:"Error de sintaxis: "+s.message}}}_parseFormulaString(e){if(!e)return;const t=/@\{([^}]+)\}|([0-9]+(\.[0-9]+)?)|([+\-*/()])|([a-zA-Z0-9_]+)/g;let s;for(;(s=t.exec(e))!==null;)s[1]?this.tokens.push({type:"var",value:s[1],label:s[1]}):s[0].trim()&&this.tokens.push({type:"op",value:s[0],label:s[0]})}render(){if(this.container.innerHTML="",this.container.className="formula-editor-container",this.tokens.length===0){this.container.innerHTML='<span class="text-muted opacity-50 small fst-italic w-100 text-center user-select-none">Arrastra variables u operadores aquí...</span>';return}this.tokens.forEach((e,t)=>{const s=document.createElement("div");s.className=`formula-token ${e.type}`,s.draggable=!0;let i=e.label;if(e.type==="var"){const o=this.availableVars.find(l=>l.id===e.value);o?i=o.title:(s.classList.add("broken"),i=`¿${e.value}?`,s.title="Variable no encontrada"),s.innerHTML=`<i class="fa-solid fa-cube me-1 opacity-50 small"></i>${i}`}else s.innerHTML=i;const r=document.createElement("span");r.className="btn-del-token",r.innerHTML='<i class="fa-solid fa-trash"></i>',r.onclick=o=>{o.stopPropagation(),this.removeToken(t)},s.appendChild(r),this._addDragEvents(s,t),this.container.appendChild(s)})}_addDragEvents(e,t){e.addEventListener("dragstart",s=>{this.draggedIndex=t,s.dataTransfer.effectAllowed="move",setTimeout(()=>e.classList.add("dragging"),0)}),e.addEventListener("dragend",()=>{this.draggedIndex=null,e.classList.remove("dragging"),this.container.querySelectorAll(".formula-token").forEach(s=>s.classList.remove("drop-target-active"))}),e.addEventListener("dragover",s=>{s.preventDefault(),e.classList.add("drop-target-active")}),e.addEventListener("dragleave",()=>e.classList.remove("drop-target-active")),e.addEventListener("drop",s=>{if(s.preventDefault(),e.classList.remove("drop-target-active"),this.draggedIndex===null||this.draggedIndex===t)return;const i=this.tokens.splice(this.draggedIndex,1)[0];let r=t;this.draggedIndex<t&&r--,this.tokens.splice(r,0,i),this.render()})}_initDragEvents(){this.container.addEventListener("dragover",e=>e.preventDefault()),this.container.addEventListener("drop",e=>{if(e.preventDefault(),e.target===this.container&&this.draggedIndex!==null){const t=this.tokens.splice(this.draggedIndex,1)[0];this.tokens.push(t),this.render()}})}}const Jw=n=>class extends n{isCalculable(){const e=this.tagName.toLowerCase().split("-")[1];return["number","currency","percentage"].includes(e)}getFormulaSettingsHTML(){if(!this.isCalculable())return"";this.hasAttribute("table");const e=this.hasAttribute("is-calculated");return`
      
        <div id="formula-msg-${this.id}" class="alert alert-danger d-none p-1 small mb-2 text-center"></div>

        <div class="d-flex align-items-center justify-content-between mb-2">
            <span class="small text-muted fw-bold">Editor de Fórmula</span>
            <span class="badge ${e?"bg-success":"bg-secondary"}">
                ${e?"Activa":"Inactiva"}
            </span>
        </div>

        <div id="formula-widget-${this.id}" class="border rounded bg-white p-2 mb-3 shadow-sm" style="min-height: 60px;"></div>

        <label class="small text-muted fw-bold mb-1">Variables Disponibles</label>
        <div id="formula-vars-${this.id}" class="d-flex flex-wrap gap-2 mb-3 p-2 border rounded bg-light" style="max-height: 120px; overflow-y: auto;">
            <span class="text-muted small w-100 text-center">Cargando variables...</span>
        </div>

        <label class="small text-muted fw-bold mb-1">Operadores y Constantes</label>
        <div class="bg-light p-2 border rounded">
            <div class="d-flex gap-1 flex-wrap justify-content-center mb-2">
                ${["+","-","*","/","(",")"].map(t=>`<button type="button" class="btn btn-sm btn-white border shadow-sm btn-op-formula" data-op="${t}">${t}</button>`).join("")}
            </div>
            <div class="input-group input-group-sm">
                <input autocomplete="off" spellcheck="false" type="number" class="form-control" id="formula-manual-${this.id}" placeholder="Número (ej: 0.16)">
                <button type="button" class="btn btn-outline-secondary" id="btn-add-manual-${this.id}">Agregar</button>
            </div>
        </div>
      `}initFormulaWidget(e){if(!this.isCalculable())return;const t=e.querySelector(`#formula-widget-${this.id}`);if(!t)return;const s=this._gatherCalculationVariables(),i=this.getAttribute("formula")||"";this._tempFormulaWidget=new Qw(t,i),this._tempFormulaWidget.setContextVariables(s);const r=e.querySelector(`#formula-vars-${this.id}`);r.innerHTML="",s.length===0?r.innerHTML='<span class="text-muted small fst-italic text-center w-100">No hay variables disponibles en este contexto.</span>':s.forEach(c=>{const d=document.createElement("button");d.type="button";const h=c.type==="column";d.className=`btn btn-xs ${h?"btn-white border-primary text-primary":"btn-light border-info text-info"} border shadow-sm small`,d.style.fontSize="0.7rem",d.innerHTML=`<i class="fa-solid ${h?"fa-table-columns":"fa-cube"} me-1 opacity-50"></i>${c.title}`,d.onclick=()=>this._tempFormulaWidget.addToken("var",c.id,c.title),r.appendChild(d)}),e.querySelectorAll(".btn-op-formula").forEach(c=>{c.onclick=()=>this._tempFormulaWidget.addToken("op",c.dataset.op,c.innerText)});const o=e.querySelector(`#btn-add-manual-${this.id}`),l=e.querySelector(`#formula-manual-${this.id}`);o&&l&&(o.onclick=()=>{l.value&&(this._tempFormulaWidget.addToken("op",l.value,l.value),l.value="",l.focus())})}saveFormulaChanges(){if(!this._tempFormulaWidget)return{valid:!0};const e=this._tempFormulaWidget.validate(),t=this._tempFormulaWidget.getFormulaString();if(!e.valid&&t.trim().length>0){const s=document.getElementById(`formula-msg-${this.id}`);return s&&(s.textContent=e.msg,s.classList.remove("d-none")),{valid:!1}}return this.setAttribute("formula",t),t.trim().length>0?this.setAttribute("is-calculated","true"):this.removeAttribute("is-calculated"),this._tempFormulaWidget=null,{valid:!0}}_gatherCalculationVariables(){const e=this.hasAttribute("table");let t=[];if(e){this.closest(".designer-item-wrapper"),t=[...Hi.getAvailableVariables("general")];const s=this.closest(".modal-body");s&&s.querySelectorAll("setting-number, setting-currency, setting-percentage").forEach(r=>{r.id!==this.id&&t.push({id:r.id,title:`[Col] ${r.getAttribute("title")||"Sin título"}`,type:"column"})})}else t=Hi.getAvailableVariables("general");return t.filter(s=>s.id!==this.id)}},Yw=n=>class extends n{async _initApiFetch(e=!1){const t=this.getAttribute("api-url"),s=this.getAttribute("id")||this.id;if(!t)return;if(!e&&this._hasValue&&this._hasValue()){`${s}`;return}`${s}`;let i=null;const r=async o=>{if(!o.ok)throw new Error(`Status ${o.status}`);let l=await o.json();if(l.contents)try{return JSON.parse(l.contents)}catch{return l.contents}return l};try{const o=await fetch(t);i=await r(o)}catch{if(console.warn("[API] Fallo directo. Intentando Proxy..."),t.includes("corsproxy.io")){this._markError();return}else try{const l="https://corsproxy.io/?"+encodeURIComponent(t),c=await fetch(l);i=await r(c)}catch(l){console.error("[API] Error total:",l),this._markError();return}}if(i){const o=this.getAttribute("api-path");if(Array.isArray(i))this._openApiSelectionModal(i,o);else{const l=o?this._resolvePath(i,o):i;this._applyApiValue(l)}}}_resolvePath(e,t){return t.split(".").reduce((s,i)=>s&&s[i],e)}_applyApiValue(e){this.setAttribute("edit-value",e),this.render&&this.render(),this.dispatchEvent(new Event("input",{bubbles:!0}))}_markError(){const e=this.querySelector("input, select, textarea");e&&(e.classList.add("is-invalid"),e.title="Error de conexión API")}_hasValue(){const e=this.getAttribute("edit-value");return e!==null&&e!==""&&e!=="---"}_openApiSelectionModal(e,t){var l;const s=`modal-api-${this.id}`;(l=document.getElementById(s))==null||l.remove();const i=`
      <div class="modal fade" id="${s}" tabindex="-1" data-bs-backdrop="static">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0 shadow-lg">
            <div class="modal-header text-bg-dark py-2">
              <h6 class="modal-title small fw-bold"><i class="fa-solid fa-cloud-arrow-down me-2"></i>Selección API</h6>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body p-3 bg-light">
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm mb-3 shadow-none" 
                     id="search-${this.id}" placeholder="Filtrar resultados...">
              <div class="list-group shadow-sm overflow-y-auto" id="list-${this.id}" style="max-height: 300px;">
                ${this._renderApiListItems(e,t)}
              </div>
            </div>
          </div>
        </div>
      </div>`;document.body.insertAdjacentHTML("beforeend",i);const r=document.getElementById(s),o=new bootstrap.Modal(r);o.show(),r.querySelector(`#search-${this.id}`).oninput=c=>{const d=c.target.value.toLowerCase().split(" ").filter(m=>m),h=e.filter(m=>{const g=Object.values(m).join(" ").toLowerCase();return d.every(E=>g.includes(E))});r.querySelector(`#list-${this.id}`).innerHTML=this._renderApiListItems(h,t),this._bindApiListClicks(r,o)},this._bindApiListClicks(r,o),r.addEventListener("hidden.bs.modal",()=>r.remove())}_renderApiListItems(e,t){return e.map(s=>{const i=t?this._resolvePath(s,t):"Seleccionar",r=Object.entries(s).slice(0,3).map(([o,l])=>`<span class="badge bg-white text-dark border me-1 fw-normal">${o}: <b>${l}</b></span>`).join("");return`
        <button class="list-group-item list-group-item-action border-light" data-value="${i}">
          <div class="d-flex justify-content-between align-items-center">
            <div class="small text-truncate me-2">${r}</div>
            <i class="fa-solid fa-chevron-right text-muted small"></i>
          </div>
        </button>`}).join("")}_bindApiListClicks(e,t){e.querySelectorAll(".list-group-item").forEach(s=>{s.onclick=()=>{this._applyApiValue(s.dataset.value),t.hide()}})}renderApiRefreshButton(){return this.getAttribute("api-url")?`
        <button class="btn btn-sm btn-outline-info ms-2 p-0" 
                id="refresh-api-${this.id}"
                title="Actualizar desde API"
                style="width: 24px; height: 24px; font-size: 0.8rem;">
          <i class="fa-solid fa-cloud-arrow-down"></i>
        </button>
      `:""}},Xw=n=>class extends n{getSettingsMenuButtonHTML(){const e=this.tagName.toLowerCase().split("-")[1];return`
        <button type="button" class="btn btn-sm btn-link ${`text-bg-${Ve[e].color}`} p-0 ms-2 btn-open-settings" style="text-decoration: none;">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
      `}bindSettingsEvents(){const e=this.querySelector(".btn-open-settings");e&&(e.onclick=t=>{t.preventDefault(),t.stopPropagation(),this._openSettingsModal()})}_openSettingsModal(){var o;const e=this.tagName.toLowerCase().split("-")[1],t=this.hasAttribute("table"),s=((o=Ve[e])==null?void 0:o.settings)||{width:!0,visibility:!0},i={spanEV:this.getAttribute("span-edit-viewer")||this.spanEV||12,spanP:this.getAttribute("span-print")||this.spanP||12,hidePrint:this.hasAttribute("hide-print"),hideWhatsapp:this.hasAttribute("hide-whatsapp"),apiUrl:this.getAttribute("api-url")||"",apiPath:this.getAttribute("api-path")||"",align:this.getAttribute("alignment")||"left",total:this.hasAttribute("total")};let r="";if(s.visibility&&(r+=this._buildAccordionItem("vis","Visibilidad",!0,`
            <div class="row g-3">
                <div class="col-6">
                    <div class="form-check form-switch">
                        <input autocomplete="off" spellcheck="false" class="form-check-input" type="checkbox" id="modal-hide-print" ${i.hidePrint?"checked":""}>
                        <label class="form-check-label small">Ocultar al Imprimir</label>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-check form-switch">
                        <input autocomplete="off" spellcheck="false" class="form-check-input" type="checkbox" id="modal-hide-whatsapp" ${i.hideWhatsapp?"checked":""}>
                        <label class="form-check-label small">Ocultar en WhatsApp</label>
                    </div>
                </div>
            </div>
        `)),s.width||s.style){const l=s.width?`
            <div class="row g-2 mb-2">
                <div class="col-6">
                    <label class="small text-muted">Ancho Pantalla</label>
                    <input autocomplete="off" spellcheck="false" type="number" class="form-control form-control-sm" id="modal-span-ev" value="${i.spanEV}" min="1" max="12">
                </div>
                <div class="col-6">
                    <label class="small text-muted">Ancho Impresión</label>
                    <input autocomplete="off" spellcheck="false" type="number" class="form-control form-control-sm" id="modal-span-p" value="${i.spanP}" min="1" max="12">
                </div>
            </div>`:"",c=t?`
            <div class="mb-0">
                 <label class="small text-muted">Alineación</label>
                 <select class="form-select form-select-sm" id="modal-align">
                    <option value="left" ${i.align==="left"?"selected":""}>Izquierda</option>
                    <option value="center" ${i.align==="center"?"selected":""}>Centro</option>
                    <option value="right" ${i.align==="right"?"selected":""}>Derecha</option>
                 </select>
            </div>`:"";r+=this._buildAccordionItem("design","Diseño y Ancho",!1,l+c)}if(s.api&&(r+=this._buildAccordionItem("api","Auto-Completar (API)",!1,`
            <div class="mb-2">
                <label class="small text-muted">URL Endpoint</label>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm" id="modal-api-url" value="${i.apiUrl}">
            </div>
            <div>
                <label class="small text-muted">Ruta JSON (ej: data.precio)</label>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm font-monospace" id="modal-api-path" value="${i.apiPath}">
            </div>
        `)),s.calculation){const l=this.getFormulaSettingsHTML?this.getFormulaSettingsHTML():"",c=t?`<div class="form-check form-switch mb-3 border-bottom pb-2">
                <input autocomplete="off" spellcheck="false" class="form-check-input" type="checkbox" id="modal-total" ${i.total?"checked":""}>
                <label class="form-check-label small fw-bold">Sumar en Totales</label>
        </div>`:"";r+=this._buildAccordionItem("calc","Cálculos y Fórmulas",!1,c+l)}this._renderAndShowModal(r)}_buildAccordionItem(e,t,s,i){return`
        <div class="accordion-item">
            <h2 class="accordion-header" id="heading-${e}">
            <button class="accordion-button ${s?"":"collapsed"} py-2 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${e}">
                <span class="fw-bold small text-info">${t}</span>
            </button>
            </h2>
            <div id="collapse-${e}" class="accordion-collapse collapse ${s?"show":""}" data-bs-parent="#settingsAccordion">
            <div class="accordion-body bg-light p-3">
                ${i}
            </div>
            </div>
        </div>`}_renderAndShowModal(e){const t=document.getElementById("advanced-settings-modal");t&&t.remove();const s=`
        <div class="modal fade" id="advanced-settings-modal" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header py-2">
                <h5 class="modal-title fs-6 fw-bold"><i class="fa-solid fa-sliders me-2"></i>Configuración: ${this.getAttribute("title")||"Campo"}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body p-0">
                 <div class="accordion accordion-flush" id="settingsAccordion">
                    ${e}
                 </div>
              </div>
              <div class="modal-footer py-1 bg-light">
                <button type="button" class="btn btn-sm btn-primary fw-bold" id="btn-save-settings">Guardar Cambios</button>
              </div>
            </div>
          </div>
        </div>`;document.body.insertAdjacentHTML("beforeend",s);const i=document.getElementById("advanced-settings-modal"),r=new bootstrap.Modal(i);r.show(),i.addEventListener("shown.bs.modal",()=>{this.initFormulaWidget&&this.initFormulaWidget(i)}),document.getElementById("btn-save-settings").onclick=()=>{this._saveSettingsFromModal()&&r.hide()}}_saveSettingsFromModal(){const e=i=>{var r;return(r=document.getElementById(i))==null?void 0:r.value},t=i=>{var r;return(r=document.getElementById(i))==null?void 0:r.checked};if(this.saveFormulaChanges&&!this.saveFormulaChanges().valid)return!1;this.setInternalUpdate(!0),t("modal-hide-print")?this.setAttribute("hide-print",""):this.removeAttribute("hide-print"),t("modal-hide-whatsapp")?this.setAttribute("hide-whatsapp",""):this.removeAttribute("hide-whatsapp"),document.getElementById("modal-span-ev")&&(this.setAttribute("span-edit-viewer",e("modal-span-ev")),this.setAttribute("span-print",e("modal-span-p")),this.setAttribute("alignment",e("modal-align"))),document.getElementById("modal-api-url")&&(this.setAttribute("api-url",e("modal-api-url")),this.setAttribute("api-path",e("modal-api-path")));const s=document.getElementById("modal-total");return s&&(s.checked?this.setAttribute("total",""):this.removeAttribute("total")),this.setInternalUpdate(!1),this.render(),!0}};class $ extends Yw(Xw(Jw(Kw(HTMLElement)))){constructor(){super(),this._isInternalUpdate=!1}connectedCallback(){this._ensureId(),this._loadMetadata(),this.render(),this._initApiFetch&&setTimeout(()=>this._initApiFetch(),100),this._attachApiRefreshEvents(),this.addEventListener("dblclick",e=>{this.tagName.startsWith("EDITOR-")||(e.preventDefault(),e.stopPropagation(),this._handleDoubleClickCopy(e))})}static get observedAttributes(){return["title","options","currency","span-edit-viewer","span-print","edit-value","bold","italic","color","alignment","total","formula","is-calculated","hide-print","hide-whatsapp","api-url","api-path"]}attributeChangedCallback(e,t,s){this._isInternalUpdate||t!==s&&this.render()}getData(){const e=this.tagName.toLowerCase();return e.startsWith("setting-")?{tag:e,id:this.id,title:this.getAttribute("title")||"",spanEV:this.getAttribute("span-edit-viewer")||this.spanEV||"12",spanP:this.getAttribute("span-print")||this.spanP||"12",alignment:this.getAttribute("alignment")||"left",total:this.hasAttribute("total"),formula:this.getAttribute("formula"),isCalculated:this.hasAttribute("is-calculated"),hidePrint:this.hasAttribute("hide-print"),hideWhatsapp:this.hasAttribute("hide-whatsapp"),apiUrl:this.getAttribute("api-url")||"",apiPath:this.getAttribute("api-path")||"",options:this.getAttribute("options")||"",currency:this.getAttribute("currency")||"$"}:{id:this.id,fieldId:this.getAttribute("field-id")||"",value:this.getAttribute("edit-value")||"",bold:this.hasAttribute("bold"),italic:this.hasAttribute("italic"),color:this.getAttribute("color")||"black"}}setData(e){this._isInternalUpdate=!0,e.id&&(this.id=e.id),e.fieldId&&this.setAttribute("field-id",e.fieldId),["title","options","currency","alignment","api-url","api-path","formula","color"].forEach(i=>{const r=e[i]||e[this._toCamel(i)];r&&this.setAttribute(i,r)}),e.spanEV&&this.setAttribute("span-edit-viewer",e.spanEV),e.spanP&&this.setAttribute("span-print",e.spanP),e.value!==void 0&&this.setAttribute("edit-value",e.value);const s={total:e.total,bold:e.bold,italic:e.italic,"hide-print":e.hidePrint,"hide-whatsapp":e.hideWhatsapp,"is-calculated":e.isCalculated};Object.entries(s).forEach(([i,r])=>{r?this.setAttribute(i,r===!0?"":r):this.removeAttribute(i)}),this._isInternalUpdate=!1,this.render()}renderViewerStructure(e){if(this.hasAttribute("table"))return e;const t=this.getAttribute("title")||"Sin Título",s=this.getAttribute("span-edit-viewer")||this.spanEV||"12";return this.className=`col-md-${s} mb-3`,`
      <div class="viewer-container">
        <label class="d-block small text-muted text-uppercase fw-semibold" style="font-size: 0.7rem;">
            ${t}
        </label>
        ${e}
      </div>`}renderPrinterStructure(e,t){if(this.hasAttribute("table"))return e;const s=this.getAttribute("title")||"",i={Compacto:{m:"2px",p:"1px",b:"1px dotted #dee2e6",f:"0.70rem"},Visual:{m:"10px",p:"10px",b:"2px solid #dee2e6",f:"0.70rem"},"Facil Lectura":{m:"2px",p:"1px",b:"1px solid #000",f:"1rem"}},r=i[t]||i.Visual;return`
      <div style="margin-bottom: ${r.m}; border-bottom: ${r.b}; padding-bottom: ${r.p}; page-break-inside: avoid;">
          <div style="color: #6c757d; text-transform: uppercase; font-weight: 700; font-size: ${r.f}; line-height: 1.1;">${s}</div>
          ${e}
      </div>`}_ensureId(){if(!this.id){const e=this.tagName.toLowerCase().split("-")[0],t=Math.random().toString(36).substr(2,9);this.id=`${e}_${t}`}}_loadMetadata(){const e=this.tagName.toLowerCase().split("-")[1];Ve[e]&&(this.icon=Ve[e].icon,this.shortLabel=Ve[e].shortLabel,this.longLabel=Ve[e].longLabel,this.spanEV=Ve[e].spanEV,this.spanP=Ve[e].spanP,this.uiColor=Ve[e].color||"secondary")}_toCamel(e){return e.replace(/-./g,t=>t[1].toUpperCase())}setInternalUpdate(e){this._isInternalUpdate=e}_attachApiRefreshEvents(){const e=this.querySelector(`#refresh-api-${this.id}`);e&&this._initApiFetch&&(e.onclick=async t=>{t.preventDefault(),t.stopPropagation();const s=e.querySelector("i");if(s){const i=s.className;s.className="fa-solid fa-spinner fa-spin",e.disabled=!0;try{await this._initApiFetch(!0)}finally{s.className=i,e.disabled=!1}}})}render(){this.innerHTML=""}async _handleDoubleClickCopy(e){try{let s=this.getData().value;if(typeof s=="object"&&s!==null&&(s=JSON.stringify(s)),!s&&s!==0&&s!=="0")return;sessionStorage.setItem("doc_clipboard_value",s);try{await navigator.clipboard.writeText(s)}catch{console.warn("No se pudo copiar al portapapeles del sistema, pero sí al interno.")}this._showFloatingFeedback(e.pageX,e.pageY)}catch(t){console.error("Error al copiar:",t)}}_showFloatingFeedback(e,t){const s=document.createElement("div");s.textContent="¡Copiado!",s.style.position="absolute",s.style.left=`${e}px`,s.style.top=`${t-20}px`,s.style.background="#198754",s.style.color="white",s.style.padding="2px 8px",s.style.borderRadius="4px",s.style.fontSize="0.75rem",s.style.pointerEvents="none",s.style.zIndex="9999",s.style.boxShadow="0 2px 5px rgba(0,0,0,0.2)",s.style.opacity="1",s.style.transition="all 0.8s ease-out",s.style.transform="translate(-50%, 0)",document.body.appendChild(s),requestAnimationFrame(()=>{s.style.top=`${t-40}px`,s.style.opacity="0"}),setTimeout(()=>{document.body.contains(s)&&document.body.removeChild(s)},800)}}class $h extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="col-12">
            <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
            <div class="input-group input-group-sm">
                <span class="input-group-text border-end-0"><i class="fa-solid fa-toggle-on text-muted"></i></span>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                       value="${e}" data-prop="title" placeholder="Ej: ¿Acepta términos?">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this.setAttribute("title",s.target.value)}}}customElements.define("setting-boolean",$h);const Zw=Object.freeze(Object.defineProperty({__proto__:null,SettingBoolean:$h},Symbol.toStringTag,{value:"Module"}));class Fh extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor||"info"} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        
        <div class="card-body p-3">
          <div class="row g-3">
            <div class="col-12">
              <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Gráfico *</label>
              <div class="input-group input-group-sm">
                <span class="input-group-text border-end-0"><i class="fa-solid fa-chart-simple text-muted"></i></span>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                       value="${e}" data-prop="title" placeholder="Ej: Ventas Mensuales">
              </div>
              <div class="form-text small text-muted mt-1">
                <i class="fa-solid fa-info-circle me-1"></i> La configuración de datos (Series, Ejes, Tablas) se realiza en el editor del documento.
              </div>
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-chart",Fh);const eE=Object.freeze(Object.defineProperty({__proto__:null,SettingChart:Fh},Symbol.toStringTag,{value:"Module"}));class Bh extends ${render(){const e=this.getAttribute("title")||"",t=this.getAttribute("currency")||"$",s=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="row g-2">
            <div class="col-8">
              <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm ${s}" 
                     value="${e}" data-prop="title" placeholder="Ej: Precio Unitario">
            </div>
            <div class="col-4">
              <label class="form-label small fw-semibold text-body-secondary mb-1">Moneda</label>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm text-center fw-bold" 
                     value="${t}" data-prop="currency" placeholder="$">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=i=>{this._isInternalUpdate=!0;const r=i.target.value;this.setAttribute("title",r),this._isInternalUpdate=!1,i.target.classList.toggle("is-invalid",r.trim()==="")},this.querySelector('input[data-prop="currency"]').oninput=i=>{this._isInternalUpdate=!0;const r=i.target.value;this.setAttribute("currency",r),this._isInternalUpdate=!1,i.target.classList.toggle("is-invalid",r.trim()==="")}}}customElements.define("setting-currency",Bh);const tE=Object.freeze(Object.defineProperty({__proto__:null,SettingCurrency:Bh},Symbol.toStringTag,{value:"Module"}));class Uh extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header bg-${this.uiColor} text-dark d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="col-12">
            <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text border-end-0"><i class="fa-solid fa-calendar-day text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Fecha de Nacimiento">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-date",Uh);const sE=Object.freeze(Object.defineProperty({__proto__:null,SettingDate:Uh},Symbol.toStringTag,{value:"Module"}));class jh extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="row g-3">
            <div class="col-12">
              <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
              <div class="input-group input-group-sm">
                <span class="input-group-text border-end-0"><i class="fa-solid fa-envelope text-muted"></i></span>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                      value="${e}" data-prop="title" placeholder="Ej: Correo Corporativo">
              </div>
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-email",jh);const nE=Object.freeze(Object.defineProperty({__proto__:null,SettingEmail:jh},Symbol.toStringTag,{value:"Module"}));class Hh extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="row g-3">
            <div class="col-12">
                <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
                <div class="input-group input-group-sm">
                    <span class="input-group-text border-end-0"><i class="fa-solid fa-hashtag text-muted"></i></span>
                    <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                           value="${e}" data-prop="title" placeholder="Ej: Edad o Cantidad">
                </div>
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-number",Hh);const iE=Object.freeze(Object.defineProperty({__proto__:null,SettingNumber:Hh},Symbol.toStringTag,{value:"Module"}));class qh extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header bg-${this.uiColor} text-dark d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="col-12">
            <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text border-end-0"><i class="fa-solid fa-lock text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Clave de Acceso">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-password",qh);const rE=Object.freeze(Object.defineProperty({__proto__:null,SettingPassword:qh},Symbol.toStringTag,{value:"Module"}));class zh extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="col-12">
            <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text border-end-0"><i class="fa-solid fa-percent text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Impuesto o Descuento">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-percentage",zh);const oE=Object.freeze(Object.defineProperty({__proto__:null,SettingPercentage:zh},Symbol.toStringTag,{value:"Module"}));class Gh extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="row g-3">
            <div class="col-12">
              <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
              <div class="input-group input-group-sm">
                <span class="input-group-text border-end-0"><i class="fa-solid fa-font text-muted"></i></span>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                       value="${e}" data-prop="title" placeholder="Ej: Nombre Completo">
              </div>
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-section",Gh);const aE=Object.freeze(Object.defineProperty({__proto__:null,SettingSection:Gh},Symbol.toStringTag,{value:"Module"}));class Wh extends ${render(){const e=this.getAttribute("title")||"",t=this.getAttribute("options")||"",s=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="row g-2">
            <div class="col-12">
              <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm ${s}" 
                     value="${e}" data-prop="title" placeholder="Ej: Estado Civil">
            </div>
            <div class="col-12 mt-2">
              <label class="form-label small fw-semibold text-body-secondary mb-1">Opciones (separadas por coma) *</label>
              <textarea class="form-control form-control-sm" data-prop="options" rows="2" 
                        placeholder="Soltero, Casado, Divorciado">${t}</textarea>
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelectorAll("input, textarea").forEach(i=>{i.oninput=r=>{this._isInternalUpdate=!0;const o=r.target.dataset.prop;this.setAttribute(o,r.target.value),this._isInternalUpdate=!1,o==="title"&&r.target.classList.toggle("is-invalid",r.target.value.trim()==="")}})}}customElements.define("setting-select",Wh);const lE=Object.freeze(Object.defineProperty({__proto__:null,SettingSelect:Wh},Symbol.toStringTag,{value:"Module"}));class Kh extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="row g-3">
            <div class="col-12">
              <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
              <div class="input-group input-group-sm">
                <span class="input-group-text border-end-0"><i class="fa-solid fa-font text-muted"></i></span>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                       value="${e}" data-prop="title" placeholder="Ej: Nombre Completo">
              </div>
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-string",Kh);const cE=Object.freeze(Object.defineProperty({__proto__:null,SettingString:Kh},Symbol.toStringTag,{value:"Module"}));class Qh extends ${constructor(){super(),this._tempColumnsData=[]}setData(e){e.columns&&(this._tempColumnsData=e.columns),e.prependRows?this.setAttribute("prepend-rows",""):this.removeAttribute("prepend-rows"),super.setData(e),this._updateCounter()}getData(){const e=super.getData();return e.columns=this._tempColumnsData,e.prependRows=this.hasAttribute("prepend-rows"),e}render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"",s=this._tempColumnsData?this._tempColumnsData.length:0,i=this.hasAttribute("prepend-rows");this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75"><i class="fa-solid fa-table"></i></span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        
        <div class="card-body p-3">
          
          <div class="mb-3">
            <div class="d-flex justify-content-between align-items-end mb-1">
                <label class="form-label small fw-semibold text-body-secondary mb-0">Título de la Tabla *</label>
                
                <div class="form-check form-switch mb-0" title="Si se activa, los nuevos registros se agregan arriba">
                    <input class="form-check-input cursor-pointer" type="checkbox" id="check-prepend-${this.id}" data-prop="prepend-rows" ${i?"checked":""}>
                    <label class="form-check-label small fw-bold text-muted cursor-pointer" for="check-prepend-${this.id}" style="font-size: 0.75rem;">
                        Insertar filas al inicio
                    </label>
                </div>
            </div>

            <div class="input-group input-group-sm">
              <span class="input-group-text border-end-0"><i class="fa-solid fa-heading text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Tabla de Items">
            </div>
          </div>

          <div class="alert alert-light border d-flex justify-content-between align-items-center p-2 mb-0">
            <div class="small fw-bold text-body">
                <i class="fa-solid fa-columns text-body-secondary me-2"></i>
                <span id="col-counter-${this.id}">${s} columna${s!==1?"s":""} definida${s!==1?"s":""}</span>
            </div>
            <button class="btn btn-sm btn-outline-primary shadow-sm" id="btn-config-${this.id}">
                <i class="fa-solid fa-gear me-1"></i> Configurar Columnas
            </button>
          </div>
          
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=o=>{this._isInternalUpdate=!0;const l=o.target.value;this.setAttribute("title",l),this._isInternalUpdate=!1,o.target.classList.toggle("is-invalid",l.trim()==="")},this.querySelector(`#btn-config-${this.id}`).onclick=()=>this._openConfigModal();const r=this.querySelector('input[data-prop="prepend-rows"]');r&&(r.onchange=o=>{o.target.checked?this.setAttribute("prepend-rows",""):this.removeAttribute("prepend-rows")})}getExtraSettingsHTML(){const e=this.getAttribute("span-edit-viewer")||"12",t=this.getAttribute("span-print")||"12",s=this.hasAttribute("prepend-rows");return`
      <div class="mt-3 border-top pt-2">
        <a class="text-decoration-none small fw-bold text-primary d-flex align-items-center" 
           data-bs-toggle="collapse" href="#extra-${this.id}" role="button" style="font-size: 0.7rem;">
          <i class="fa-solid fa-sliders me-1"></i> MÁS CONFIGURACIÓN
        </a>
        <div class="collapse" id="extra-${this.id}">
          
          <div class="p-2 bg-light border rounded mb-2 mt-2">
            <div class="form-check form-switch mb-0">
                <input autocomplete="off" spellcheck="false" class="form-check-input" type="checkbox" 
                       id="check-prepend-${this.id}" data-prop="prepend-rows" ${s?"checked":""}>
                <label class="form-check-label small fw-bold text-body cursor-pointer" for="check-prepend-${this.id}" style="font-size: 0.75rem;">
                    Agregar items al inicio (Arriba)
                </label>
            </div>
            <div class="form-text text-muted" style="font-size: 0.65rem;">
                Por defecto se agregan al final. Actívelo para orden cronológico inverso.
            </div>
          </div>

          <div class="row g-2">
            <div class="col-6">
              <label class="form-label mb-0 text-muted" style="font-size: 0.65rem;">Editor (2-12)</label>
              <input autocomplete="off" spellcheck="false" type="number" class="form-control form-control-sm text-center" 
                     value="${e}" data-prop="span-edit-viewer" min="2" max="12">
            </div>
            <div class="col-6">
              <label class="form-label mb-0 text-muted" style="font-size: 0.65rem;">Impresión (2-12)</label>
              <input autocomplete="off" spellcheck="false" type="number" class="form-control form-control-sm text-center" 
                     value="${t}" data-prop="span-print" min="2" max="12">
            </div>
          </div>
        </div>
      </div>
    `}_attachRealTimeValidation(){const e=this.querySelector('input[data-prop="title"]');e&&e.addEventListener("input",t=>{const s=t.target.value;this._isInternalUpdate=!0,this.setAttribute("title",s),this._isInternalUpdate=!1,t.target.classList.toggle("is-invalid",s.trim()==="")})}_updateCounter(){const e=this.querySelector(`#col-counter-${this.id}`);if(e){const t=this._tempColumnsData.length;e.innerText=`${t} columna${t!==1?"s":""} definida${t!==1?"s":""}`}}_openConfigModal(){const e=`modal-tbl-${this.id}`,t=document.getElementById(e);t&&t.remove();const i=`
      
      <style>
        .designer-item-wrapper.gu-mirror, 
        .designer-item-wrapper.is-dragging,
        .draggable-mirror {
            z-index: 1060 !important; 
        }
        .modal-body {
            overflow-x: hidden;
        }
      </style>
    
      <div class="modal fade" id="${e}" tabindex="-1" data-bs-backdrop="static">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content border-0 shadow">
            
            <div class="modal-header bg-light py-2 border-bottom">
              <h6 class="modal-title fw-bold text-body-secondary"><i class="fa-solid fa-table-columns me-2"></i>Configurar Columnas</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            
            <div class="modal-body bg-light p-3">
                <div id="col-container-${this.id}" class="d-flex flex-column gap-2" style="min-height: 150px;">
                    </div>
            </div>

            <div class="modal-footer bg-dark p-2 d-block">
                <div class="row align-items-center g-2">
                    <div class="col-md-9">
                        <div class="small text-white-50 mb-1 fw-bold text-uppercase" style="font-size: 0.65rem;">Agregar Elemento</div>
                        <div class="d-flex gap-2 overflow-x-auto pb-1" id="toolbox-${this.id}">
                            </div>
                    </div>
                    <div class="col-md-3 border-start border-secondary ps-3">
                         <button type="button" class="btn btn-success w-100 shadow-sm fw-bold" id="btn-finish-${this.id}" data-bs-dismiss="modal">
                            <i class="fa-solid fa-check me-1"></i> Guardar
                         </button>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",i);const r=document.getElementById(`toolbox-${this.id}`);Object.entries(Ve).forEach(([d,h])=>{if(d==="table")return;const m=document.createElement("button");m.className="btn btn-light border-0 shadow-sm p-1 flex-grow-1 d-flex flex-column align-items-center justify-content-center",m.style.minWidth="60px",m.title=h.longLabel,m.innerHTML=`
            <span class="d-block h6 mb-0 text-primary">${h.icon}</span> 
            <span class="d-block text-dark text-truncate" style="font-size: 0.65rem; font-weight: 700;">${h.shortLabel}</span>
        `,m.onclick=()=>this._addChildComponent(d),r.appendChild(m)});const o=document.getElementById(`col-container-${this.id}`);this._tempColumnsData&&this._tempColumnsData.length>0?this._tempColumnsData.forEach(d=>{const h=this._createWrapper(d.tag.replace("setting-","")),m=h.querySelector(d.tag);m&&m.setData&&(m.setAttribute("table",""),m.setData(d)),o.appendChild(h)}):o.innerHTML=`<div id="empty-msg" class="text-center text-muted py-5 small border rounded border-dashed text-bg-light opacity-75">
        <i>La tabla está vacía.<br>Seleccione elementos abajo para comenzar.</i></div>`;const l=document.getElementById(e),c=new bootstrap.Modal(l);c.show(),l.addEventListener("hidden.bs.modal",()=>{this._saveColumnsFromDOM(o),this._updateCounter(),c.dispose(),l.remove()})}_addChildComponent(e){const t=document.getElementById(`col-container-${this.id}`),s=t.querySelector("#empty-msg");s&&s.remove();const i=this._createWrapper(e);t.appendChild(i),i.scrollIntoView({behavior:"smooth",block:"center"})}_createWrapper(e){const t=document.createElement("div");t.className="designer-item-wrapper d-flex align-items-stretch mb-2 text-bg-light border rounded shadow-sm",t.innerHTML=`
      <div class="drag-handle bg-light border-end d-flex align-items-center justify-content-center cursor-grab" style="width: 40px;">
        <i class="fa-solid fa-grip-vertical text-muted"></i>
      </div>
      <div class="flex-grow-1 p-2" id="child-container-${this.id}"></div>
      <div class="d-flex align-items-center px-2 border-start">
        <button class="btn btn-link text-danger p-0 btn-del-col"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    `;const s=document.createElement(`setting-${e}`);return s.setAttribute("table",""),t.querySelector(`#child-container-${this.id}`).appendChild(s),t.querySelector(".btn-del-col").onclick=()=>t.remove(),wa.init(t,".drag-handle"),t}_saveColumnsFromDOM(e){const t=[];e.querySelectorAll("*").forEach(i=>{i.tagName.toLowerCase().startsWith("setting-")&&typeof i.getData=="function"&&t.push(i.getData())}),this._tempColumnsData=t}}customElements.define("setting-table",Qh);const dE=Object.freeze(Object.defineProperty({__proto__:null,SettingTable:Qh},Symbol.toStringTag,{value:"Module"}));class Jh extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 text-dark">${this.icon}</span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="col-12">
            <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
            <div class="input-group input-group-sm">
              <span class="input-group-text border-end-0"><i class="fa-solid fa-align-left text-muted"></i></span>
              <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                     value="${e}" data-prop="title" placeholder="Ej: Observaciones Generales">
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-text",Jh);const uE=Object.freeze(Object.defineProperty({__proto__:null,SettingText:Jh},Symbol.toStringTag,{value:"Module"}));class Yh extends ${render(){const e=this.getAttribute("title")||"",t=e.trim()===""?"is-invalid":"";this.innerHTML=`
      <div class="card mb-4 border-0 shadow-sm overflow-hidden">
        <div class="card-header text-bg-${this.uiColor} d-flex justify-content-between align-items-center py-2 px-3">
          <div class="d-flex align-items-center">
            <span class="me-2 opacity-75"><i class="fa-solid fa-link"></i></span>
            <h6 class="mb-0 fw-bold small text-uppercase tracking-wider">${this.longLabel}</h6>
          </div>
          ${this.getSettingsMenuButtonHTML()}
        </div>
        <div class="card-body p-3">
          <div class="row g-3">
            <div class="col-12">
              <label class="form-label small fw-semibold text-body-secondary mb-1">Título del Campo *</label>
              <div class="input-group input-group-sm">
                <span class="input-group-text border-end-0"><i class="fa-solid fa-heading text-muted"></i></span>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 ${t}" 
                       value="${e}" data-prop="title" placeholder="Ej: Sitio Web Oficial">
              </div>
            </div>
          </div>
        </div>
      </div>
    `,this.bindSettingsEvents(),this.querySelector('input[data-prop="title"]').oninput=s=>{this._isInternalUpdate=!0;const i=s.target.value;this.setAttribute("title",i),this._isInternalUpdate=!1,s.target.classList.toggle("is-invalid",i.trim()==="")}}}customElements.define("setting-url",Yh);const hE=Object.freeze(Object.defineProperty({__proto__:null,SettingUrl:Yh},Symbol.toStringTag,{value:"Module"}));class Xh extends ${render(){const e=this.getAttribute("title")||"Seleccionar",t=this.getAttribute("edit-value")==="true";this.getAttribute("span-edit-viewer");const s=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3 d-flex align-items-center justify-content-between">
          <label class="form-check-label fw-bold text-body small mb-0">
            <i class="fa-solid fa-toggle-on me-1 text-${this.uiColor}"></i> ${e}
          </label>
          <div class="form-check form-switch">
            <input autocomplete="off" spellcheck="false" class="form-check-input" type="checkbox" id="check-${this.id}" 
                   ${t?"checked":""} style="cursor:pointer">
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(s),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector('input[type="checkbox"]');e.onchange=()=>{this.setAttribute("edit-value",e.checked.toString())}}}customElements.define("editor-boolean",Xh);const pE=Object.freeze(Object.defineProperty({__proto__:null,EditorBoolean:Xh},Symbol.toStringTag,{value:"Module"}));class Zh extends ${constructor(){super(),this._tempConfig={},this.chartInstance=null}render(){const e=this.getAttribute("title")||"Gráfico",t=this.getAttribute("edit-value");let s={type:"column",source:"manual",series:[]};try{t&&(s=JSON.parse(t))}catch{}const r={column:"fa-chart-column",bar:"fa-chart-bar",line:"fa-chart-line",pie:"fa-chart-pie"}[s.type]||"fa-chart-simple",o=`chart-editor-${this.id}`,l=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <label class="form-label fw-bold text-body small mb-0">
              <i class="fa-solid ${r} me-1 text-${this.uiColor}"></i> ${e}
            </label>
            ${this.renderStyleControls(["bold","italic","color"])} 
          </div>

          <!-- CONTENEDOR DEL GRÁFICO -->
          <div style="position: relative; height: 250px; width: 100%;">
            <canvas id="${o}"></canvas>
          </div>

          <button class="btn btn-outline-primary btn-sm w-100 mt-3" id="btn-cfg-${this.id}">
            <i class="fa-solid fa-gear me-1"></i> Configurar Gráfico
          </button>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(l);const c={addEventListener:()=>{},value:""};if(this._attachStyleEventListeners(c),this.querySelector(`#btn-cfg-${this.id}`).onclick=()=>this._openConfigModal(s),t&&s.series&&s.series.length>0)setTimeout(()=>{this._renderChart(o,s)},200);else{const d=this.querySelector(`#${o}`);if(d){const h=d.getContext("2d");h.fillStyle="#f8f9fa",h.fillRect(0,0,d.width,d.height),h.fillStyle="#6c757d",h.font="14px Arial",h.textAlign="center",h.fillText('Haga clic en "Configurar Gráfico" para añadir datos',d.width/2,d.height/2)}}}_renderChart(e,t){const s=document.getElementById(e);if(!s)return;this.chartInstance&&(this.chartInstance.destroy(),this.chartInstance=null);const{labels:i,datasets:r}=this._processData(t);if(!r.length||!window.Chart)return;window.ChartDataLabels&&Chart.register(window.ChartDataLabels);const o=t.type==="pie"?"pie":t.type==="line"?"line":"bar",l=t.type==="bar"?"y":"x",c=s.parentElement;let d=350;if(t.type==="bar"){const h=100+i.length*45;d=Math.max(350,h)}else t.type==="pie"&&(d=400);c.style.height=`${d}px`;try{this.chartInstance=new Chart(s,{type:o,data:{labels:i,datasets:r},options:{indexAxis:l,responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"bottom",labels:{font:{size:10}}},datalabels:{display:t.type!=="pie",color:"#000",font:{weight:"bold",size:9},formatter:h=>Math.round(h*100)/100,anchor:"end",align:l==="y"?"end":"top"}}}})}catch(h){console.error("Error al renderizar gráfico en editor:",h)}}_processData(e){let t=[],s=[];const i=[{bg:"rgba(54, 162, 235, 0.7)",border:"rgba(54, 162, 235, 1)"},{bg:"rgba(255, 99, 132, 0.7)",border:"rgba(255, 99, 132, 1)"},{bg:"rgba(75, 192, 192, 0.7)",border:"rgba(75, 192, 192, 1)"},{bg:"rgba(255, 206, 86, 0.7)",border:"rgba(255, 206, 86, 1)"},{bg:"rgba(153, 102, 255, 0.7)",border:"rgba(153, 102, 255, 1)"}];if(e.source==="manual")t=(e.manualLabels||"").split(",").map(r=>r.trim()).filter(r=>r),Array.isArray(e.series)&&(s=e.series.map((r,o)=>{const l=i[o%i.length],c=(r.data||"").split(",").map(d=>parseFloat(d)||0);return{label:r.name||`Serie ${o+1}`,data:c,backgroundColor:e.type==="pie"&&c.length>0?i.slice(0,Math.min(c.length,i.length)).map(d=>d.bg):l.bg,borderColor:e.type==="pie"&&c.length>0?i.slice(0,Math.min(c.length,i.length)).map(d=>d.border):l.border,borderWidth:1}}).filter(r=>r.data.length>0));else if(e.source==="table"&&e.tableId){const r=document.querySelector(`editor-table[field-id="${e.tableId}"]`);r&&r.rows&&r.rows.length>0?(e.labelColumnId?t=r.rows.map(o=>{const l=o.find(c=>c.fieldId===e.labelColumnId);return l?String(l.value):""}):t=r.rows.map((o,l)=>`${l+1}`),Array.isArray(e.series)&&(s=e.series.map((o,l)=>{const c=i[l%i.length],d=r.rows.map(h=>{const m=h.find(E=>E.fieldId===o.columnId),g=String(m?m.value:"0").replace(/[^0-9.-]/g,"");return parseFloat(g)||0});return{label:o.name||`Serie ${l+1}`,data:d,backgroundColor:e.type==="pie"?i.map(h=>h.bg):c.bg,borderColor:e.type==="pie"?i.map(h=>h.border):c.border,borderWidth:1}}))):(t=["Sin Datos"],s=[{label:"Esperando datos...",data:[0],backgroundColor:"#e9ecef",borderColor:"#ced4da",borderWidth:1}])}return{labels:t,datasets:s}}_openConfigModal(e){var c;this._tempConfig=JSON.parse(JSON.stringify(e)),this._tempConfig.series||(this._tempConfig.series=[]),this._tempConfig.manualLabels||(this._tempConfig.manualLabels="");const t=`modal-chart-${this.id}`;(c=document.getElementById(t))==null||c.remove();const s=`
      <div class="modal fade" id="${t}" tabindex="-1" data-bs-backdrop="static">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header text-bg-primary py-2">
              <h6 class="modal-title fw-bold"><i class="fa-solid fa-chart-simple me-2"></i>Configurar Gráfico</h6>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body bg-light p-4">
                
                <div class="row g-3 mb-3">
                    <div class="col-md-6">
                        <label class="form-label small fw-bold">Tipo de Gráfico</label>
                        <select class="form-select form-select-sm" id="cfg-type-${this.id}">
                            <option value="column">Columnas (Vertical)</option>
                            <option value="bar">Barras (Horizontal)</option>
                            <option value="line">Líneas</option>
                            <option value="pie">Circular (Pie)</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label small fw-bold">Fuente de Datos</label>
                        <div class="btn-group w-100" role="group">
                            <input autocomplete="off" spellcheck="false" type="radio" class="btn-check" name="src-${this.id}" id="src-manual-${this.id}" value="manual">
                            <label class="btn btn-outline-secondary btn-sm" for="src-manual-${this.id}"><i class="fa-solid fa-keyboard me-1"></i> Manual</label>

                            <input autocomplete="off" spellcheck="false" type="radio" class="btn-check" name="src-${this.id}" id="src-table-${this.id}" value="table">
                            <label class="btn btn-outline-secondary btn-sm" for="src-table-${this.id}"><i class="fa-solid fa-table me-1"></i> Tabla</label>
                        </div>
                    </div>
                </div>

                <hr>

                <div id="cfg-area-${this.id}"></div>

            </div>
            <div class="modal-footer p-2 bg-light">
                <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-success btn-sm px-4" id="btn-save-${this.id}">
                    <i class="fa-solid fa-check me-1"></i> Guardar Configuración
                </button>
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",s);const i=document.getElementById(t),r=new bootstrap.Modal(i),o=document.getElementById(`cfg-type-${this.id}`);o.value=this._tempConfig.type,document.getElementById(`src-${this._tempConfig.source}-${this.id}`).checked=!0,this._renderDynamicArea(this._tempConfig.source),o.onchange=d=>{this._tempConfig.type=d.target.value,this._tempConfig.series=[],this._renderDynamicArea(this._tempConfig.source)},document.querySelectorAll(`input[name="src-${this.id}"]`).forEach(d=>d.onchange=h=>{this._tempConfig.source=h.target.value,this._tempConfig.series=[],this._renderDynamicArea(h.target.value)}),document.getElementById(`btn-save-${this.id}`).onclick=()=>{this._collectDataBeforeSave(),this.setAttribute("edit-value",JSON.stringify(this._tempConfig)),this.render(),r.hide()},i.addEventListener("hidden.bs.modal",()=>i.remove()),r.show()}_renderDynamicArea(e){const t=document.getElementById(`cfg-area-${this.id}`);t.innerHTML="",e==="manual"?this._renderManualConfig(t):this._renderTableConfig(t)}_renderManualConfig(e){const t=this._tempConfig.type==="pie";e.innerHTML+=`
        <div class="mb-3">
            <label class="form-label small fw-bold">Etiquetas (Eje X) / Categorías</label>
            <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm" 
                   id="input-labels-${this.id}" 
                   value="${this._tempConfig.manualLabels||""}" 
                   placeholder="Ej: Enero, Febrero, Marzo">
            <div class="form-text small">Separadas por coma.</div>
        </div>
    `,e.innerHTML+=`
        <div class="d-flex justify-content-between align-items-center mb-2">
            <label class="form-label small fw-bold mb-0">Series de Datos</label>
            ${!t||this._tempConfig.series.length===0?`<button class="btn btn-xs btn-outline-primary" id="btn-add-serie-${this.id}"><i class="fa-solid fa-plus"></i> Agregar Serie</button>`:""}
        </div>
        <div id="series-list-${this.id}" class="d-flex flex-column gap-2"></div>
    `;const s=e.querySelector(`#series-list-${this.id}`);(()=>{s.innerHTML="",this._tempConfig.series.forEach((o,l)=>{const c=document.createElement("div");c.className="input-group input-group-sm",c.innerHTML=`
                <input autocomplete="off" spellcheck="false" type="text" class="form-control" placeholder="Nombre Serie" value="${o.name||""}" onchange="this.dataset.val = this.value">
                <input autocomplete="off" spellcheck="false" type="text" class="form-control w-50" placeholder="Valores (10, 20, 30...)" value="${o.data||""}" onchange="this.dataset.val = this.value">
                <button class="btn btn-outline-danger btn-del-serie"><i class="fa-solid fa-trash"></i></button>
            `;const d=c.querySelectorAll("input");d[0].oninput=h=>this._tempConfig.series[l].name=h.target.value,d[1].oninput=h=>this._tempConfig.series[l].data=h.target.value,c.querySelector(".btn-del-serie").onclick=()=>{this._tempConfig.series.splice(l,1),this._renderDynamicArea("manual")},s.appendChild(c)})})();const r=e.querySelector(`#btn-add-serie-${this.id}`);r&&(r.onclick=()=>{this._tempConfig.series.push({name:t?"Datos":"",data:""}),this._renderDynamicArea("manual")}),e.querySelector(`#input-labels-${this.id}`).oninput=o=>{this._tempConfig.manualLabels=o.target.value}}_renderTableConfig(e){const t=document.getElementById("document-canvas"),s=Array.from(t.querySelectorAll("editor-table"));if(s.length===0){e.innerHTML='<div class="alert alert-warning small"><i class="fa-solid fa-exclamation-triangle"></i> No hay tablas disponibles en este documento. Agrega una tabla primero.</div>';return}let i='<option value="">-- Seleccionar Tabla --</option>';s.forEach(l=>{let c=l.getAttribute("title")||`Tabla ${l.getAttribute("field-id")}`;if(l.getData){const h=l.getData();h.title&&(c=h.title)}const d=this._tempConfig.tableId===l.getAttribute("field-id")?"selected":"";i+=`<option value="${l.getAttribute("field-id")}" ${d}>${c}</option>`}),e.innerHTML+=`
        <div class="mb-3">
            <label class="form-label small fw-bold">Origen de Datos</label>
            <select class="form-select form-select-sm" id="select-table-${this.id}">
                ${i}
            </select>
        </div>
        <div id="table-cols-area-${this.id}"></div>
    `;const r=e.querySelector(`#select-table-${this.id}`),o=()=>{const l=this._tempConfig.tableId,c=e.querySelector(`#table-cols-area-${this.id}`);if(c.innerHTML="",!l)return;const d=s.find(P=>P.getAttribute("field-id")===l);if(!d||!d.columns)return;const h=d.columns,m=h.filter(P=>["setting-number","setting-currency","setting-percentage"].includes(P.tag));let g='<option value="">-- (Fila #) --</option>';h.forEach(P=>{const M=this._tempConfig.labelColumnId===P.id?"selected":"";g+=`<option value="${P.id}" ${M}>${P.title}</option>`}),c.innerHTML+=`
            <div class="mb-3">
                <label class="form-label small fw-bold">Etiquetas (Eje X)</label>
                <select class="form-select form-select-sm" id="select-label-col-${this.id}">
                    ${g}
                </select>
            </div>
        `;const E=this._tempConfig.type==="pie";c.innerHTML+=`
             <div class="d-flex justify-content-between align-items-center mb-2">
                <label class="form-label small fw-bold mb-0">Series (Columnas Numéricas)</label>
                ${!E||this._tempConfig.series.length===0?`<button class="btn btn-xs btn-outline-primary" id="btn-add-tbl-serie-${this.id}"><i class="fa-solid fa-plus"></i> Agregar</button>`:""}
            </div>
            <div id="tbl-series-list-${this.id}" class="d-flex flex-column gap-2"></div>
        `;const T=c.querySelector(`#tbl-series-list-${this.id}`);this._tempConfig.series.forEach((P,M)=>{let F='<option value="">-- Seleccionar Columna --</option>';m.forEach(re=>{const X=P.columnId===re.id?"selected":"";F+=`<option value="${re.id}" ${X}>${re.title}</option>`});const B=document.createElement("div");B.className="input-group input-group-sm",B.innerHTML=`
                <span class="input-group-text bg-white"><i class="fa-solid fa-chart-area text-muted"></i></span>
                <select class="form-select">${F}</select>
                <button class="btn btn-outline-danger btn-del-tbl-serie"><i class="fa-solid fa-trash"></i></button>
            `;const ee=B.querySelector("select");ee.onchange=re=>{const X=re.target.value,_=m.find(y=>y.id===X);this._tempConfig.series[M].columnId=X,this._tempConfig.series[M].name=_?_.title:"Serie "+(M+1)},B.querySelector(".btn-del-tbl-serie").onclick=()=>{this._tempConfig.series.splice(M,1),o()},T.appendChild(B)});const L=c.querySelector(`#btn-add-tbl-serie-${this.id}`);L&&(L.onclick=()=>{this._tempConfig.series.push({name:"",columnId:""}),o()}),c.querySelector(`#select-label-col-${this.id}`).onchange=P=>{this._tempConfig.labelColumnId=P.target.value}};this._tempConfig.tableId&&o(),r.onchange=l=>{this._tempConfig.tableId=l.target.value,this._tempConfig.series=[],this._tempConfig.labelColumnId="",o()}}_collectDataBeforeSave(){if(this._tempConfig.source==="manual"){const e=document.getElementById(`input-labels-${this.id}`);e&&(this._tempConfig.manualLabels=e.value)}else if(this._tempConfig.source==="table"&&this._tempConfig.tableId){const e=document.querySelector(`editor-table[field-id="${this._tempConfig.tableId}"]`);if(e&&e.rows){if(this._tempConfig.labelColumnId){const t=e.rows.map(s=>{const i=s.find(r=>r.fieldId===this._tempConfig.labelColumnId);return i?String(i.value).replace(/,/g," "):""});this._tempConfig.manualLabels=t.join(", ")}else this._tempConfig.manualLabels=e.rows.map((t,s)=>s+1).join(", ");this._tempConfig.series.forEach(t=>{const s=e.rows.map(i=>{const r=i.find(l=>l.fieldId===t.columnId),o=String(r?r.value:"0").replace(/[^0-9.-]/g,"");return parseFloat(o)||0});t.data=s.join(", ")})}}}}customElements.define("editor-chart",Zh);const mE=Object.freeze(Object.defineProperty({__proto__:null,EditorChart:Zh},Symbol.toStringTag,{value:"Module"}));class mr extends ${_applyApiValue(e){const t=parseFloat(e);isNaN(t)?console.warn("[EditorNumber] Valor API ignorado (no numérico):",e):super._applyApiValue(t)}_hasValue(){const e=this.getAttribute("edit-value");return e!==null&&e!==""}render(){const e=this.getAttribute("title")||"Número",t=this.getAttribute("edit-value")||"",s=this.getCommonStyles(),i=this.hasAttribute("is-calculated"),r=this.getAttribute("api-url")?this.renderApiRefreshButton():"",o=`form-control form-control-sm shadow-none ${i?"bg-light text-muted":""}`,l=i?"readonly":"",c=i?"Calculado...":"0.00",d=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-hashtag me-1 text-${this.uiColor}"></i> ${e}
                ${i?'<span class="badge bg-secondary ms-2" style="font-size:0.6rem">AUTO</span>':""}
              </label>
              ${r}
            </div>
            ${i?"":this.renderStyleControls()} 
          </div>
          <input autocomplete="off" spellcheck="false" type="number" class="${o}" 
                 id="input-${this.id}" value="${t}" style="${s}" 
                 placeholder="${c}"
                 ${l}>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(d),i||this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);e&&(this._attachStyleEventListeners(e),this._setupArithmeticLogic(e))}_setupArithmeticLogic(e){const t=()=>{let s=e.value.trim();if(s!=="")try{const i=s.replace(/,/g,"."),r=new Function(`"use strict"; return (${i})`)();!isNaN(r)&&isFinite(r)&&(e.value=r,this.setAttribute("edit-value",r),e.dispatchEvent(new Event("input",{bubbles:!0})))}catch{console.warn("Cálculo fallido.")}};e.onfocus=()=>{e.type="text"},e.onkeydown=s=>{s.key==="Enter"&&(s.preventDefault(),t())},e.onblur=()=>{t(),isNaN(parseFloat(e.value))||(e.type="number")}}}customElements.define("editor-number",mr);const fE=Object.freeze(Object.defineProperty({__proto__:null,EditorNumber:mr},Symbol.toStringTag,{value:"Module"}));class ep extends mr{render(){const e=this.getAttribute("title")||"Importe",t=this.getAttribute("edit-value")||"",s=this.getAttribute("currency")||"$",i=this.getCommonStyles(),r=this.hasAttribute("is-calculated"),o=`form-control shadow-none border-1 ${r?"bg-light text-muted":""}`,l=r?"readonly":"",c=this.getAttribute("api-url")?this.renderApiRefreshButton():"",d=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-money-bill-wave me-1 text-${this.uiColor}"></i> ${e}
                ${r?'<span class="badge bg-secondary ms-2" style="font-size:0.6rem">AUTO</span>':""}
              </label>
              ${c}
            </div>
            ${r?"":this.renderStyleControls()}
          </div>
          <div class="input-group input-group-sm">
            <span class="input-group-text fw-bold text-success border-1">${s}</span>
            <input autocomplete="off" spellcheck="false" type="number" class="${o}" 
                   id="input-${this.id}" value="${t}" style="${i}" 
                   placeholder="0.00"
                   ${l}>
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(d),r||this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);e&&(this._attachStyleEventListeners(e),this._setupArithmeticLogic(e))}}customElements.define("editor-currency",ep);const gE=Object.freeze(Object.defineProperty({__proto__:null,EditorCurrency:ep},Symbol.toStringTag,{value:"Module"})),zi=class zi extends ${render(){const e=this.getAttribute("title")||"Campo",t=this.getAttribute("edit-value")||zi.getToday(),s=this.getCommonStyles(),i=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <label class="form-label fw-bold text-body small mb-0">
              <i class="fa-solid fa-calendar-days me-1 text-${this.uiColor}"></i> ${e}
            </label>
            ${this.renderStyleControls()}
          </div>
          <input autocomplete="off" spellcheck="false" type="date" class="form-control form-control-sm shadow-none border-1" 
                 id="input-${this.id}" value="${t}" style="${s}">
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(i),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e)}};Il(zi,"getToday",()=>new Date().toISOString().split("T")[0]);let qi=zi;customElements.define("editor-date",qi);const yE=Object.freeze(Object.defineProperty({__proto__:null,EditorDate:qi},Symbol.toStringTag,{value:"Module"}));class tp extends ${render(){const e=this.getAttribute("title")||"Email",t=this.getAttribute("edit-value")||"",s=this.getCommonStyles(),i=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <label class="form-label fw-bold text-body small mb-0">
              <i class="fa-solid fa-at me-1 text-${this.uiColor}"></i> ${e}
            </label>
            ${this.renderStyleControls()} 
          </div>
          <input autocomplete="off" spellcheck="false" type="email" class="form-control form-control-sm shadow-none border-1" 
                 id="input-${this.id}" value="${t}" style="${s}" placeholder="usuario@ejemplo.com">
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(i),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e)}}customElements.define("editor-email",tp);const bE=Object.freeze(Object.defineProperty({__proto__:null,EditorEmail:tp},Symbol.toStringTag,{value:"Module"}));class sp extends ${render(){const e=this.getAttribute("title")||"Contraseña",t=this.getAttribute("edit-value")||"",s=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <label class="form-label fw-bold text-body small mb-2">
            <i class="fa-solid fa-key me-1 text-${this.uiColor}"></i> ${e}
          </label>
          <div class="input-group input-group-sm shadow-none">
            <input autocomplete="off" spellcheck="false" type="password" class="form-control border-1 shadow-none" 
                   id="input-${this.id}" value="${t}" placeholder="Ingrese contraseña...">
            <button class="btn btn-outline-secondary toggle-password" type="button" data-target="input-${this.id}">
              <i class="fa-solid fa-eye"></i>
            </button>
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(s),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);e.oninput=()=>{this._isInternalUpdate=!0,this.setAttribute("edit-value",e.value),this._isInternalUpdate=!1}}}customElements.define("editor-password",sp);const vE=Object.freeze(Object.defineProperty({__proto__:null,EditorPassword:sp},Symbol.toStringTag,{value:"Module"}));class np extends mr{render(){const e=this.getAttribute("title")||"Porcentaje",t=this.getAttribute("edit-value")||"",s=this.getCommonStyles(),i=this.hasAttribute("is-calculated"),r=this.getAttribute("api-url")?this.renderApiRefreshButton():"",o=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-percent me-1 text-${this.uiColor}"></i> ${e}
                ${i?'<span class="badge bg-secondary ms-2" style="font-size:0.6rem">AUTO</span>':""}
              </label>
              ${r}
            </div>
            ${i?"":this.renderStyleControls()}
          </div>
          <div class="input-group input-group-sm">
            <input autocomplete="off" spellcheck="false" type="number" class="form-control shadow-none ${i?"bg-light text-muted":""}" 
                   id="input-${this.id}" value="${t}" style="${s}" 
                   placeholder="0.00"
                   ${i?"readonly":""}>
            <span class="input-group-text fw-bold text-primary border-1">%</span>
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(o),i||this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e),this._setupArithmeticLogic(e)}}customElements.define("editor-percentage",np);const _E=Object.freeze(Object.defineProperty({__proto__:null,EditorPercentage:np},Symbol.toStringTag,{value:"Module"}));class ip extends ${render(){const e=this.getAttribute("title")||"Seleccionar";this.innerHTML=`<strong mt-3>${e}</strong><hr>`}}customElements.define("editor-section",ip);const wE=Object.freeze(Object.defineProperty({__proto__:null,EditorSection:ip},Symbol.toStringTag,{value:"Module"}));class rp extends ${render(){const e=this.getAttribute("title")||"Seleccione...",t=this.getAttribute("edit-value")||"",i=(this.getAttribute("options")||"").split(",").map(c=>c.trim()).filter(c=>c!==""),r=this.getCommonStyles(),o=this.getAttribute("api-url")?this.renderApiRefreshButton():"",l=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-caret-down me-1 text-${this.uiColor}"></i> ${e}
              </label>
              ${o}
            </div>
            ${this.renderStyleControls()} 
          </div>
          <select class="form-select form-select-sm shadow-none" id="input-${this.id}" style="${r}">
            <option value="" ${t===""?"selected":""}>Seleccione una opción...</option>
            ${i.map(c=>`<option value="${c}" ${t===c?"selected":""}>${c}</option>`).join("")}
          </select>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(l),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e),e.onchange=()=>this.setAttribute("edit-value",e.value)}}customElements.define("editor-select",rp);const EE=Object.freeze(Object.defineProperty({__proto__:null,EditorSelect:rp},Symbol.toStringTag,{value:"Module"}));class op extends ${render(){const e=this.getAttribute("title")||"Campo",t=this.getAttribute("edit-value")||"",s=this.getCommonStyles(),i=this.getAttribute("api-url")?this.renderApiRefreshButton():"",r=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-font text-${this.uiColor}"></i> ${e}
              </label>
              ${i}
            </div>
            ${this.renderStyleControls()} 
          </div>
          <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm shadow-none border-1" 
                 id="input-${this.id}" value="${t}" style="${s}" placeholder="Ingrese texto...">
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(r),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e)}}customElements.define("editor-string",op);const IE=Object.freeze(Object.defineProperty({__proto__:null,EditorString:op},Symbol.toStringTag,{value:"Module"}));class ap extends ${constructor(){super(),this.columns=[],this.rows=[],this._searchTerm="",this._sortFieldId=null,this._sortAsc=!0}setData(e){if(e.columns&&(this.columns=e.columns),e.prependRows?this.setAttribute("prepend-rows",""):this.removeAttribute("prepend-rows"),e.value)if(Array.isArray(e.value))this.rows=e.value;else if(typeof e.value=="string")try{this.rows=JSON.parse(e.value)}catch{this.rows=[]}else this.rows=[];else this.rows=[];super.setData(e)}getData(){const e=super.getData();return e.value=this.rows,e.prependRows=this.hasAttribute("prepend-rows"),e}_applyApiValue(e){let t=[];if(Array.isArray(e))t=e;else if(typeof e=="string")try{t=JSON.parse(e)}catch{t=[]}else typeof e=="object"&&e!==null&&(t=[e]);if(t.length===0)return;Array.isArray(t[0])?this.rows=t:this.rows=this._mapExternalDataToRows(t),this.setAttribute("edit-value",JSON.stringify(this.rows)),this._renderRows(),this._dispatchChange()}_mapExternalDataToRows(e){return e.map(t=>this.columns.map(s=>{let i=t[s.title];if(i===void 0){const r=Object.keys(t).find(o=>o.toLowerCase()===s.title.toLowerCase());r&&(i=t[r])}return i===void 0&&(i=t[s.id]),i==null&&(i=""),typeof i=="object"&&(i=JSON.stringify(i)),{fieldId:s.id,value:i}}))}render(){const e=this.getAttribute("title")||"Tabla de Datos",t=`
      <div class="card shadow-sm border-0">
        <div class="card-header bg-${this.uiColor} border-bottom-0 pt-3 px-3">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <h6 class="fw-bold text-primary mb-0"><i class="fa-solid fa-table me-2"></i>${e}</h6>
              <div class="d-flex gap-2 align-items-center">
                ${this.renderStyleControls(["bold","italic","color"])}
                <div class="btn-group shadow-sm">
                    <button class="btn btn-sm btn-outline-success" id="btn-export-${this.id}"><i class="fa-solid fa-download"></i></button>
                    <button class="btn btn-sm btn-outline-primary" id="btn-import-trigger-${this.id}"><i class="fa-solid fa-upload"></i></button>
                    <button class="btn btn-sm btn-primary" id="btn-add-${this.id}"><i class="fa-solid fa-plus me-1"></i> Agregar</button>
                </div>
              </div>
            </div>
            <div class="input-group input-group-sm">
                <span class="input-group-text border-end-0"><i class="fa-solid fa-search text-muted"></i></span>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 shadow-none" 
                       id="search-${this.id}" placeholder="Filtrar..." value="${this._searchTerm}">
            </div>
            <input autocomplete="off" spellcheck="false" type="file" id="file-import-${this.id}" accept=".csv" style="display: none;" />
        </div>

        <div class="card-body p-0">
            <div class="table-responsive">
                <table class="table table-hover table-striped align-middle mb-0">
                    <thead class="table-light text-body-secondary small text-uppercase">
                        <tr id="table-header-${this.id}"></tr>
                    </thead>
                    <tbody id="table-body-${this.id}"></tbody>
                    <tfoot id="table-footer-${this.id}" class="table-light fw-bold text-primary small"></tfoot>
                </table>
            </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(t),this._renderHeader(),this._renderRows(),this._attachEvents()}_attachEvents(){this._attachStyleEventListeners(null),this.querySelector(`#btn-add-${this.id}`).onclick=()=>this._openFormModal();const e=this.querySelector(`#search-${this.id}`);e.oninput=s=>{this._searchTerm=s.target.value,this._renderRows()},this.querySelector(`#btn-export-${this.id}`).onclick=()=>this._exportCSV();const t=this.querySelector(`#file-import-${this.id}`);this.querySelector(`#btn-import-trigger-${this.id}`).onclick=()=>t.click(),t.onchange=s=>this._importCSV(s)}_renderHeader(){const e=this.querySelector(`#table-header-${this.id}`);if(!e)return;let t='<th class="py-2 px-2 bg-light border-bottom text-center" style="width: 40px;">#</th>';this.columns.forEach(s=>{const i=s.alignment||"left",r=this._sortFieldId===s.id;let o='<i class="fa-solid fa-sort text-muted opacity-25 ms-1 small"></i>';r&&(o=this._sortAsc?'<i class="fa-solid fa-sort-up text-primary ms-1 small"></i>':'<i class="fa-solid fa-sort-down text-primary ms-1 small"></i>'),t+=`
      <th class="fw-bold px-3 py-2 border-bottom col-sortable" 
          data-col-id="${s.id}" 
          style="text-align: ${i}; cursor: pointer; user-select: none;">
          ${s.title} ${o}
      </th>`}),t+='<th class="text-end px-3 py-2 border-bottom" style="width: 100px;">Acciones</th>',e.innerHTML=t,e.querySelectorAll(".col-sortable").forEach(s=>{s.onclick=()=>{const i=s.dataset.colId;this._sortFieldId===i?this._sortAsc=!this._sortAsc:(this._sortFieldId=i,this._sortAsc=!0),this._renderHeader(),this._renderRows()}})}_renderRows(){const e=this.querySelector(`#table-body-${this.id}`);if(!e)return;if(e.innerHTML="",this._sortFieldId){const s=this.columns.find(r=>r.id===this._sortFieldId),i=s?["setting-number","setting-currency","setting-percentage"].includes(s.tag):!1;this.rows.sort((r,o)=>{const l=r.find(g=>g.fieldId===this._sortFieldId),c=o.find(g=>g.fieldId===this._sortFieldId);let d=l?l.value:"",h=c?c.value:"",m=0;return i?m=(parseFloat(d)||0)-(parseFloat(h)||0):m=String(d).localeCompare(String(h)),this._sortAsc?m:m*-1}),this._dispatchChange()}let t=this.rows.map((s,i)=>({data:s,originalIndex:i}));if(this._searchTerm.trim()){const s=this._searchTerm.toLowerCase().split(/\s+/).filter(i=>i);t=t.filter(i=>{const r=i.data.map(o=>String(o.value).toLowerCase()).join(" ");return s.every(o=>r.includes(o))})}t.forEach(s=>{const{data:i,originalIndex:r}=s,o=document.createElement("tr");o.setAttribute("data-original-index",r);const l=document.createElement("td"),c=!this._searchTerm&&!this._sortFieldId;c?(l.className="drag-handle text-center text-muted align-middle cursor-grab py-2",l.innerHTML='<i class="fa-solid fa-grip-vertical"></i>'):(l.className="text-center text-muted align-middle py-2 small opacity-50",l.innerHTML=this._searchTerm?'<i class="fa-solid fa-filter"></i>':'<i class="fa-solid fa-sort"></i>',l.title="Orden automático activo"),o.appendChild(l),this.columns.forEach(h=>{const m=document.createElement("td"),g=h.alignment||"left";m.className="px-3 py-2",m.style.textAlign=g;const E=i.find(M=>M.fieldId===h.id),T=h.tag.replace("setting-","viewer-"),L=document.createElement(T);L.setAttribute("table","");const P={...E,title:"",spanEV:12};L.setData&&L.setData(P),m.appendChild(L),o.appendChild(m)});const d=document.createElement("td");d.className="text-end px-3 py-2",d.innerHTML=`
            <div class="btn-group btn-group-sm">
                <button class="btn btn-light text-primary btn-edit-row" title="Editar"><i class="fa-solid fa-pen"></i></button>
                <button class="btn btn-light text-danger btn-del-row" title="Eliminar"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `,d.querySelector(".btn-edit-row").onclick=()=>this._openFormModal(r),d.querySelector(".btn-del-row").onclick=()=>{confirm("¿Eliminar este registro?")&&(this.rows.splice(r,1),this._renderRows(),this._dispatchChange())},o.appendChild(d),e.appendChild(o),c&&wa.init(o,".drag-handle",()=>this._handleReorder())}),this._renderFooter(t.map(s=>s.data))}_handleReorder(){const e=this.querySelector(`#table-body-${this.id}`),t=[];Array.from(e.querySelectorAll("tr")).forEach(i=>{const r=parseInt(i.getAttribute("data-original-index"));!isNaN(r)&&this.rows[r]&&t.push(this.rows[r])}),t.length===this.rows.length&&(this.rows=t)}_renderFooter(e){const t=this.querySelector(`#table-footer-${this.id}`);if(!t||(t.innerHTML="",!this.columns.some(r=>r.total)||!e||e.length===0))return;let i="<tr><td></td>";this.columns.forEach(r=>{const o=r.alignment||"left";let l="";if(r.total){const c=e.reduce((m,g)=>{const E=g.find(L=>L.fieldId===r.id),T=parseFloat(E?E.value:0);return m+(isNaN(T)?0:T)},0),h=`id="${`TOTAL_${this.id}_${r.id}`}" data-raw-value="${c}"`;if(r.tag==="setting-currency"){const m=r.currency||"$";l=`<span ${h}>${m} ${c.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}</span>`}else r.tag==="setting-percentage"?l=`<span ${h}>${c}%</span>`:l=`<span ${h}>${c}</span>`}i+=`<td class="px-3 py-2" style="text-align: ${o};">${l}</td>`}),i+="<td></td></tr>",t.innerHTML=i}_dispatchChange(){setTimeout(()=>{this.dispatchEvent(new CustomEvent("table-change",{bubbles:!0,detail:{tableId:this.id}}))},50)}_exportCSV(){if(this.rows.length===0)return alert("No hay datos para exportar.");let e=[];this.columns.forEach(c=>{c.tag==="setting-url"?(e.push(`"${c.title} (Texto)"`),e.push(`"${c.title} (URL)"`)):e.push(`"${c.title}"`)});const s=this.rows.map(c=>this.columns.map(d=>{const h=c.find(g=>g.fieldId===d.id);let m=h?h.value:"";if(d.tag==="setting-url"){let g="",E="";try{const T=JSON.parse(m);g=T.text||"",E=T.url||""}catch{}return{isUrl:!0,text:g,url:E}}return m=String(m).replace(/"/g,'""'),{isUrl:!1,val:m}})).map(c=>c.map(d=>d.isUrl?`"${d.text.replace(/"/g,'""')}","${d.url.replace(/"/g,'""')}"`:`"${d.val}"`).join(",")).join(`
`),i=e.join(",")+`
`+s,r=new Blob([i],{type:"text/csv;charset=utf-8;"}),o=URL.createObjectURL(r),l=document.createElement("a");l.setAttribute("href",o),l.setAttribute("download",`tabla_export_${Date.now()}.csv`),document.body.appendChild(l),l.click(),document.body.removeChild(l)}_importCSV(e){const t=e.target.files[0];if(!t)return;const s=new FileReader;s.onload=i=>{this._parseAndLoadCSV(i.target.result),e.target.value=""},s.readAsText(t)}_parseAndLoadCSV(e){const t=e.split(/\r?\n/).filter(o=>o.trim()!=="");if(t.length<2)return alert("El archivo CSV no tiene datos válidos.");const s=o=>{const l=[];let c=0,d=!1;for(let m=0;m<o.length;m++)if(o[m]==='"')d=!d;else if(o[m]===","&&!d){let g=o.substring(c,m);g.startsWith('"')&&g.endsWith('"')&&(g=g.slice(1,-1)),l.push(g.replace(/""/g,'"')),c=m+1}let h=o.substring(c);return h.startsWith('"')&&h.endsWith('"')&&(h=h.slice(1,-1)),l.push(h.replace(/""/g,'"')),l},i=[];this.columns.forEach(o=>{o.tag==="setting-url"?(i.push({colDef:o,type:"url-text"}),i.push({colDef:o,type:"url-url"})):i.push({colDef:o,type:"normal"})});const r=[];for(let o=1;o<t.length;o++){const l=s(t[o]);if(l.length!==i.length)continue;const c={};l.forEach((h,m)=>{const g=i[m];if(!g)return;const E=g.colDef.id;c[E]||(c[E]={fieldId:E,tag:g.colDef.tag}),g.type==="normal"?c[E].value=h:g.type==="url-text"?c[E].tempText=h:g.type==="url-url"&&(c[E].tempUrl=h)});const d=Object.values(c).map(h=>h.tag==="setting-url"?{fieldId:h.fieldId,value:JSON.stringify({text:h.tempText||"",url:h.tempUrl||""})}:{fieldId:h.fieldId,value:h.value});r.push(d)}r.length>0?(this.hasAttribute("prepend-rows")?this.rows=[...r.reverse(),...this.rows]:this.rows=[...this.rows,...r],this._renderRows(),this._dispatchChange(),alert(`Se importaron ${r.length} registros correctamente.`)):alert("No se pudieron importar registros. Verifique formato.")}_openFormModal(e=null){var d;const t=e!==null,s=`modal-form-${this.id}`;(d=document.getElementById(s))==null||d.remove();const i=`
      <div class="modal fade" id="${s}" tabindex="-1" data-bs-backdrop="static">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header text-bg-primary py-2">
              <h6 class="modal-title fw-bold">
                <i class="fa-solid ${t?"fa-pen-to-square":"fa-plus-circle"} me-2"></i>
                ${t?"Editar Registro":"Nuevo Registro"}
              </h6>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body p-4 bg-light">
                <div id="form-container-${this.id}" class="row g-3"></div>
            </div>
            <div class="modal-footer p-2">
                <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary btn-sm px-4" id="btn-save-row-${this.id}">
                    <i class="fa-solid fa-save me-1"></i> Guardar
                </button>
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",i);const r=document.getElementById(`form-container-${this.id}`);this.columns.forEach(h=>{const m=h.tag.replace("setting-","editor-"),g=document.createElement(m);g.setAttribute("table",""),g.setAttribute("field-id",h.id);let E={title:h.title,spanEV:12,options:h.options,currency:h.currency,formula:h.formula,isCalculated:h.isCalculated};if(t){const T=this.rows[e].find(L=>L.fieldId===h.id);T&&(E={...E,...T})}g.setData&&g.setData(E),r.appendChild(g)});const o=()=>{const h=Array.from(r.children);h.forEach(m=>{if(!m.hasAttribute("is-calculated"))return;const g=m.getAttribute("formula");if(g)try{const E=g.replace(/@\{([^}]+)\}/g,(L,P)=>{const M=h.find(B=>B.getAttribute("field-id")===P);if(M){const B=M.querySelector("input");if(B){const ee=B.value.replace(/,/g,".");return parseFloat(ee)||0}}const F=document.getElementById(`input-${P}`);if(F){const B=F.value.replace(/,/g,".");return parseFloat(B)||0}if(P.startsWith("TOTAL_")){const B=document.getElementById(P);return B&&parseFloat(B.dataset.rawValue)||0}return 0}),T=new Function(`"use strict"; return (${E})`)();if(isFinite(T)&&!isNaN(T)){const L=m.querySelector("input");if(L){const P=Math.round(T*100)/100;L.value=P,m.setAttribute("edit-value",P)}}}catch(E){console.warn("[Table Calculation Error]",E)}})};r.addEventListener("input",o),setTimeout(o,100);const l=document.getElementById(s),c=new bootstrap.Modal(l);c.show(),document.getElementById(`btn-save-row-${this.id}`).onclick=()=>{const m=Array.from(r.children).map(g=>{const E=g.getData();return E.fieldId=g.getAttribute("field-id"),E});t?this.rows[e]=m:this.hasAttribute("prepend-rows")?this.rows.unshift(m):this.rows.push(m),this._renderRows(),this._dispatchChange(),c.hide(),l.addEventListener("hidden.bs.modal",()=>l.remove())}}}customElements.define("editor-table",ap);const TE=Object.freeze(Object.defineProperty({__proto__:null,EditorTable:ap},Symbol.toStringTag,{value:"Module"}));class lp extends ${render(){const e=this.getAttribute("title")||"Campo",t=this.getAttribute("edit-value")||"",s=this.getCommonStyles(),i=this.getAttribute("api-url")?this.renderApiRefreshButton():"",r=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-align-left me-1 text-${this.uiColor}"></i> ${e}
              </label>
              ${i}
            </div>
            ${this.renderStyleControls()} 
          </div>
          <textarea class="form-control form-control-sm shadow-none border-1" 
                    id="input-${this.id}" rows="4" style="${s}" 
                    placeholder="Escriba el contenido de ${e}...">${t}</textarea>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(r),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#input-${this.id}`);this._attachStyleEventListeners(e)}}customElements.define("editor-text",lp);const AE=Object.freeze(Object.defineProperty({__proto__:null,EditorText:lp},Symbol.toStringTag,{value:"Module"}));class cp extends ${connectedCallback(){super.connectedCallback(),this._initApiFetch()}_applyApiValue(e){const t=this.getAttribute("edit-value");let s={url:"",text:""};try{t&&(s=JSON.parse(t))}catch{}s.url=e,this._isInternalUpdate=!0,this.setAttribute("edit-value",JSON.stringify(s)),this._isInternalUpdate=!1,this.render()}_hasValue(){const e=this.getAttribute("edit-value");if(!e)return!1;try{return JSON.parse(e).url!==""}catch{return!1}}render(){const e=this.getAttribute("title")||"Enlace",t=this.getAttribute("edit-value");let s={url:"",text:""};try{t&&(s=JSON.parse(t))}catch{}const i=this.getAttribute("api-url")?this.renderApiRefreshButton():"",r=`
      <div class="card border-0 shadow-sm border-start border-4 border-${this.uiColor} h-100">
        <div class="card-body p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
              <label class="form-label fw-bold text-body small mb-0 me-1">
                <i class="fa-solid fa-link me-1 text-${this.uiColor}"></i> ${e}
              </label>
              ${i}
            </div>
             ${this.renderStyleControls(["bold","italic","color"])} 
          </div>
          
          <div class="mb-2">
            <label class="small text-muted" style="font-size: 0.7rem;">Texto a mostrar</label>
            <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm shadow-none" 
                   id="text-${this.id}" value="${s.text}" placeholder="Ej: Visitar Google">
          </div>

          <div>
            <label class="small text-muted" style="font-size: 0.7rem;">Dirección Web (URL)</label>
            <input autocomplete="off" spellcheck="false" type="url" class="form-control form-control-sm shadow-none font-monospace text-primary" 
                   id="url-${this.id}" value="${s.url}" placeholder="https://...">
          </div>
        </div>
      </div>
    `;this.innerHTML=this.renderViewerStructure(r),this._attachEventListeners()}_attachEventListeners(){const e=this.querySelector(`#text-${this.id}`),t=this.querySelector(`#url-${this.id}`);this._attachStyleEventListeners(e);const s=()=>{this._isInternalUpdate=!0;const i=JSON.stringify({text:e.value,url:t.value});this.setAttribute("edit-value",i),this._isInternalUpdate=!1};e.oninput=s,t.oninput=s}}customElements.define("editor-url",cp);const SE=Object.freeze(Object.defineProperty({__proto__:null,EditorUrl:cp},Symbol.toStringTag,{value:"Module"}));class dp extends ${render(){this.getAttribute("edit-value");const e='<div class="py-1" style="color:green">SI</div>';this.innerHTML=this.renderViewerStructure(e)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value")==="true";return`*${e}:* ${t?"✅ SI":"❌ NO"}`}}customElements.define("viewer-boolean",dp);const CE=Object.freeze(Object.defineProperty({__proto__:null,ViewerBoolean:dp},Symbol.toStringTag,{value:"Module"}));class up extends ${constructor(){super(),this.chartInstance=null}render(){const e=this.getAttribute("edit-value");if(!e){this.innerHTML="";return}let t={};try{t=JSON.parse(e)}catch{return}const s=`chart-canvas-${this.id}`,i=`
      <div style="position: relative; height: 350px; width: 100%;">
        <canvas id="${s}"></canvas>
      </div>`;this.innerHTML=this.renderViewerStructure(i),setTimeout(()=>{this._buildChart(s,t)},100)}async _buildChart(e,t){const s=document.getElementById(e);if(!s)return;window.Chart||await O(()=>import("https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"),[],import.meta.url),window.ChartDataLabels||await O(()=>import("https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0"),[],import.meta.url),this.chartInstance&&this.chartInstance.destroy();const{labels:i,datasets:r}=this._processData(t);if(!r.length){console.warn("[ViewerChart] No hay datos para renderizar");return}let o="bar",l="x";t.type==="bar"?(o="bar",l="y"):t.type==="column"?(o="bar",l="x"):t.type==="line"?o="line":t.type==="pie"&&(o="pie");const c=s.parentElement;let d=350;if(o==="bar"&&l==="y"){const h=80+i.length*40;d=Math.max(350,h)}else o==="pie"&&(d=400);c&&(c.style.height=`${d}px`),Chart.register(ChartDataLabels),this.chartInstance=new Chart(s,{type:o,data:{labels:i,datasets:r},options:{indexAxis:l,responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"bottom"},datalabels:{color:h=>t.type==="pie"?"#fff":"#000",font:{weight:"bold",size:10},formatter:h=>Math.round(h*100)/100,display:h=>h.dataset.data[h.dataIndex]!==0,anchor:"end",align:l==="y"?"end":"top",offset:4}},scales:o==="pie"?{}:{y:{beginAtZero:!0},x:{beginAtZero:!0}}}})}_processData(e){let t=[],s=[];const i=[{bg:"rgba(54, 162, 235, 0.7)",border:"rgba(54, 162, 235, 1)"},{bg:"rgba(255, 99, 132, 0.7)",border:"rgba(255, 99, 132, 1)"},{bg:"rgba(75, 192, 192, 0.7)",border:"rgba(75, 192, 192, 1)"},{bg:"rgba(255, 206, 86, 0.7)",border:"rgba(255, 206, 86, 1)"},{bg:"rgba(153, 102, 255, 0.7)",border:"rgba(153, 102, 255, 1)"},{bg:"rgba(255, 159, 64, 0.7)",border:"rgba(255, 159, 64, 1)"}];return t=(e.manualLabels||"").split(",").map(r=>r.trim()).filter(r=>r!==""),Array.isArray(e.series)&&(s=e.series.map((r,o)=>{const l=i[o%i.length],c=(r.data||"").split(",").map(d=>parseFloat(d)||0);return{label:r.name||`Serie ${o+1}`,data:c,backgroundColor:e.type==="pie"?i.map(d=>d.bg):l.bg,borderColor:e.type==="pie"?i.map(d=>d.border):l.border,borderWidth:1}}).filter(r=>r.data.length>0)),{labels:t,datasets:s}}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value");if(!t)return"";let s=JSON.parse(t);const{labels:i,datasets:r}=this._processData(s);let o=`*📊 ${e}*
`;return r.length?(r.forEach(l=>{o+=`
*${l.label}*:
`,l.data.forEach((c,d)=>{o+=`- ${i[d]||"Item"}: ${c}
`})}),o):o+"_(Sin datos)_"}}customElements.define("viewer-chart",up);const PE=Object.freeze(Object.defineProperty({__proto__:null,ViewerChart:up},Symbol.toStringTag,{value:"Module"}));class hp extends ${render(){const e=parseFloat(this.getAttribute("edit-value"))||0,t=this.getAttribute("currency")||"$",s=this.getCommonStyles(),i=e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),r=`<div class="py-1" style="${s}"> 
          <span class="opacity-75 me-1">${t}</span>${i}
        </div>`;this.innerHTML=this.renderViewerStructure(r)}getWhatsapp(){const e=this.getAttribute("title"),t=parseFloat(this.getAttribute("edit-value")||0),s=this.getAttribute("currency")||"$",i=t.toLocaleString(void 0,{minimumFractionDigits:2});return`*${e}:* ${s} ${i}`}}customElements.define("viewer-currency",hp);const xE=Object.freeze(Object.defineProperty({__proto__:null,ViewerCurrency:hp},Symbol.toStringTag,{value:"Module"}));class pp extends ${render(){const e=this.getAttribute("edit-value"),t=this.getCommonStyles();let s="---";e&&(s=new Date(e+"T12:00:00").toLocaleDateString(void 0,{day:"2-digit",month:"short",year:"numeric"}));const i=`<div class="py-1" style="${t}">${s}</div>`;this.innerHTML=this.renderViewerStructure(i)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value"),s=t?new Date(t).toLocaleDateString():"";return`*${e}:* ${s}`}}customElements.define("viewer-date",pp);const RE=Object.freeze(Object.defineProperty({__proto__:null,ViewerDate:pp},Symbol.toStringTag,{value:"Module"}));class mp extends ${render(){const e=this.getAttribute("edit-value")||"---",t=this.getCommonStyles(),s=`<div class="py-1">
          <a href="mailto:${e}" class="text-primary text-decoration-none fw-bold" style="${t}">
            <i class="fa-regular fa-envelope me-1 small"></i>${e}
          </a>
        </div>`;this.innerHTML=this.renderViewerStructure(s)}}customElements.define("viewer-email",mp);const LE=Object.freeze(Object.defineProperty({__proto__:null,ViewerEmail:mp},Symbol.toStringTag,{value:"Module"}));class fp extends ${render(){const e=this.getAttribute("edit-value")||"---",s=`<div class="py-1" style="${this.getCommonStyles()}">${e}</div>`;this.innerHTML=this.renderViewerStructure(s)}}customElements.define("viewer-number",fp);const kE=Object.freeze(Object.defineProperty({__proto__:null,ViewerNumber:fp},Symbol.toStringTag,{value:"Module"}));class gp extends ${render(){const e=this.getAttribute("edit-value")||"",t=`<div class="d-flex align-items-center gap-2 py-1">
          <input autocomplete="off" spellcheck="false" type="password" class="form-control form-control-sm border-0 bg-transparent p-0 shadow-none fw-bold" 
                 id="val-${this.id}" value="${e}" readonly style="width: auto; min-width: 100px;">
          <div class="btn-group">
            <button class="btn btn-sm text-primary p-1 toggle-password" data-target="val-${this.id}" title="Ver/Ocultar">
              <i class="fa-solid fa-eye"></i>
            </button>
            <button class="btn btn-sm text-body-secondary p-1" id="btn-copy-${this.id}" title="Copiar">
              <i class="fa-solid fa-copy"></i>
            </button>
          </div>
        </div>`;this.innerHTML=this.renderViewerStructure(t),this.querySelector(`#btn-copy-${this.id}`).onclick=()=>{navigator.clipboard.writeText(e),alert("Copiado al portapapeles")}}getWhatsapp(){return`*${this.getAttribute("title")}:* ********`}}customElements.define("viewer-password",gp);const DE=Object.freeze(Object.defineProperty({__proto__:null,ViewerPassword:gp},Symbol.toStringTag,{value:"Module"}));class yp extends ${render(){const e=this.getAttribute("edit-value")||"0",s=`<div class="py-1" style="${this.getCommonStyles()}">${e}%</div>`;this.innerHTML=this.renderViewerStructure(s)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value")||"0";return`*${e}:* ${t}%`}}customElements.define("viewer-percentage",yp);const VE=Object.freeze(Object.defineProperty({__proto__:null,ViewerPercentage:yp},Symbol.toStringTag,{value:"Module"}));class bp extends ${render(){const e=this.getAttribute("title")||"Seleccionar";this.innerHTML=`<strong class="mt-3">${e}</strong><hr>`}}customElements.define("viewer-section",bp);const ME=Object.freeze(Object.defineProperty({__proto__:null,ViewerSection:bp},Symbol.toStringTag,{value:"Module"}));class vp extends ${render(){const e=this.getAttribute("edit-value")||"---",s=`<div class="py-1" style="${this.getCommonStyles()}">${e}</div>`;this.innerHTML=this.renderViewerStructure(s)}}customElements.define("viewer-select",vp);const OE=Object.freeze(Object.defineProperty({__proto__:null,ViewerSelect:vp},Symbol.toStringTag,{value:"Module"}));class _p extends ${render(){const e=this.getAttribute("edit-value")||"---",s=`<div class="py-1" style="${this.getCommonStyles()}">${e}</div>`;this.innerHTML=this.renderViewerStructure(s)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value")||"";return`*${e}:* ${t}`}}customElements.define("viewer-string",_p);const NE=Object.freeze(Object.defineProperty({__proto__:null,ViewerString:_p},Symbol.toStringTag,{value:"Module"}));class wp extends ${constructor(){super(),this.columns=[],this.rows=[],this._searchTerm="",this._sortFieldId=null,this._sortAsc=!0}setData(e){if(e.columns&&(this.columns=e.columns),e.value)if(Array.isArray(e.value))this.rows=e.value;else if(typeof e.value=="string")try{this.rows=JSON.parse(e.value)}catch{this.rows=[]}else this.rows=[];else this.rows=[];super.setData(e)}_isNumeric(e){return["setting-number","setting-currency","setting-percentage"].includes(e)}render(){const e=this.getAttribute("title")||"Tabla de Datos",t=this.getAttribute("span-edit-viewer")||"12";this.className=`col-md-${t} mb-4`,this.innerHTML=`
      <div class="viewer-container">
        <div class="d-flex justify-content-between align-items-end mb-2">
            <label class="d-block small text-muted text-uppercase fw-semibold mb-0" style="font-size: 0.7rem;">
                ${e}
            </label>
            
            <div class="input-group input-group-sm" style="width: 220px;">
                <span class="input-group-text border-end-0 text-muted ps-2 pe-1"><i class="fa-solid fa-search"></i></span>
                <input autocomplete="off" spellcheck="false" type="text" class="form-control form-control-sm border-start-0 shadow-none ps-1" 
                       id="search-${this.id}" placeholder="Filtrar..." value="${this._searchTerm}">
                ${this._searchTerm?`<button class="btn btn-outline-secondary border-start-0 text-muted" id="btn-clear-${this.id}"><i class="fa-solid fa-times"></i></button>`:""}
            </div>
        </div>
        
        <div class="card shadow-sm border-0 overflow-hidden">
            <div class="table-responsive">
                <table class="table table-striped table-hover align-middle mb-0">
                    <thead class=" text-body-secondary small text-uppercase">
                        <tr id="table-header-${this.id}"></tr>
                    </thead>
                    <tbody id="table-body-${this.id}"></tbody>
                    <tfoot id="table-footer-${this.id}" class=" fw-bold text-body small" style="border-top: 2px solid #dee2e6;"></tfoot>
                </table>
            </div>
            <div id="empty-state-${this.id}" class="text-center py-3 text-muted small bg-light" style="display:none;">
                Sin registros coincidentes.
            </div>
        </div>
      </div>
    `,this._renderHeader(),this._renderRows(),this._attachEvents()}getWhatsapp(){const e=this.getAttribute("title"),t=this.rows||[],s=(this.columns||[]).filter(d=>!d.hideWhatsapp);if(s.length===0)return`*${e}:* (Sin columnas visibles)`;if(t.length===0)return`*${e}:* (Sin datos)`;const i=parseInt(localStorage.getItem("doc_engine_mcw")||"35"),r=(d,h)=>{const m=d.find(E=>E.fieldId===h.id);let g=m?String(m.value):"";if((g==="null"||g==="undefined")&&(g=""),h.tag==="setting-currency")g=`$ ${parseFloat(g||0).toFixed(2)}`;else if(h.tag==="setting-percentage")g=`${g}%`;else if(h.tag==="setting-boolean")g=g==="true"?"SI":"NO";else if(h.tag==="setting-url")try{const E=JSON.parse(g);let T=E.url||"";if(T){T.startsWith("http")||(T="https://"+T);try{T=encodeURI(decodeURI(T))}catch{T=encodeURI(T)}}g=E.text?`${E.text} (${T})`:T}catch{}return g},o=s.map(d=>{let h=d.title.length;return t.forEach(m=>{const g=r(m,d);g.length>h&&(h=g.length)}),h}),l=o.reduce((d,h)=>d+h,0)+s.length*3;let c=`
*${e}*:
`;return l>i?t.forEach((d,h)=>{c+=`_Item ${h+1}_
`,s.forEach(m=>{const g=r(d,m);c+=`${m.title}: ${g}
`}),c+=`
`}):(c+="```\n",c+=s.map((d,h)=>d.title.padEnd(o[h])).join(" | ")+`
`,c+=s.map((d,h)=>"-".repeat(o[h])).join("-|-")+`
`,t.forEach(d=>{c+=s.map((h,m)=>r(d,h).padEnd(o[m])).join(" | ")+`
`}),c+="```\n"),c}_attachEvents(){const e=this.querySelector(`#search-${this.id}`);e.oninput=s=>{this._searchTerm=s.target.value,this._renderRows();const i=this.querySelector(`#btn-clear-${this.id}`);if(this._searchTerm&&!i){this.render();const r=this.querySelector(`#search-${this.id}`);r.focus(),r.setSelectionRange(r.value.length,r.value.length)}else!this._searchTerm&&i&&(this.render(),this.querySelector(`#search-${this.id}`).focus())};const t=this.querySelector(`#btn-clear-${this.id}`);t&&(t.onclick=()=>{this._searchTerm="",this.render()})}_renderHeader(){const e=this.querySelector(`#table-header-${this.id}`);if(e){if(this.columns.length===0){e.innerHTML='<th class="px-3 py-2">Sin Columnas Configuradas</th>';return}e.innerHTML="",this.columns.forEach(t=>{const s=document.createElement("th"),i=t.alignment||(this._isNumeric(t.tag)?"right":"left");s.className="fw-bold px-3 py-2 border-bottom text-nowrap user-select-none",s.style.textAlign=i==="right"?"right":i==="center"?"center":"left",s.style.cursor="pointer",s.title="Click para ordenar";let r='<i class="fa-solid fa-sort text-muted opacity-25 ms-1 small"></i>';this._sortFieldId===t.id&&(this._sortAsc?r='<i class="fa-solid fa-sort-up text-primary ms-1 small"></i>':r='<i class="fa-solid fa-sort-down text-primary ms-1 small"></i>'),s.innerHTML=`<span>${t.title}</span>${r}`,s.onclick=()=>{this._sortFieldId===t.id?this._sortAsc=!this._sortAsc:(this._sortFieldId=t.id,this._sortAsc=!0),this._renderHeader(),this._renderRows()},e.appendChild(s)})}}_renderRows(){const e=this.querySelector(`#table-body-${this.id}`),t=this.querySelector(`#empty-state-${this.id}`);if(!e)return;e.innerHTML="";let s=[...this.rows];if(this._searchTerm.trim()){const i=this._searchTerm.toLowerCase().split(/\s+/).filter(r=>r);s=s.filter(r=>{const o=r.map(l=>{let c=l.value;if(typeof c=="string"&&c.startsWith("{")&&c.includes('"url"'))try{c=JSON.parse(c).text}catch{}return String(c||"").toLowerCase()}).join(" ");return i.every(l=>o.includes(l))})}if(this._sortFieldId){const i=this.columns.find(o=>o.id===this._sortFieldId),r=i?this._isNumeric(i.tag):!1;s.sort((o,l)=>{const c=o.find(E=>E.fieldId===this._sortFieldId),d=l.find(E=>E.fieldId===this._sortFieldId);let h=c?c.value:"",m=d?d.value:"",g=0;if(r){const E=parseFloat(h)||0,T=parseFloat(m)||0;g=E-T}else{if(i&&i.tag==="setting-url"){try{h=JSON.parse(h).text||""}catch{}try{m=JSON.parse(m).text||""}catch{}}g=String(h).localeCompare(String(m))}return this._sortAsc?g:g*-1})}if(s.length===0){t&&(t.style.display="block"),this._renderFooter(s);return}t&&(t.style.display="none"),s.forEach(i=>{const r=document.createElement("tr");this.columns.forEach(o=>{const l=document.createElement("td"),c=o.alignment||(this._isNumeric(o.tag)?"right":"left");l.style.textAlign=c==="right"?"right":c==="center"?"center":"left",l.className="px-3 py-2";const d=i.find(E=>E.fieldId===o.id),h=o.tag.replace("setting-","viewer-"),m=document.createElement(h);m.setAttribute("table","");const g={...d,title:"",spanEV:12,options:o.options,currency:o.currency};m.setData&&m.setData(g),l.appendChild(m),r.appendChild(l)}),e.appendChild(r)}),this._renderFooter(s)}_renderFooter(e){const t=this.querySelector(`#table-footer-${this.id}`);if(!t||(t.innerHTML="",!this.columns.some(r=>r.total)||!e||e.length===0))return;let i="<tr>";this.columns.forEach(r=>{const o=r.alignment||(this._isNumeric(r.tag)?"right":"left"),l=o==="right"?"right":o==="center"?"center":"left";let c="";if(r.total){const d=e.reduce((h,m)=>{const g=m.find(T=>T.fieldId===r.id),E=parseFloat(g?g.value:0);return h+(isNaN(E)?0:E)},0);r.tag==="setting-currency"?c=`${r.currency||"$"} ${d.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`:r.tag==="setting-percentage"?c=`${d}%`:c=d}i+=`<td class="px-3 py-2" style="text-align: ${l};">${c}</td>`}),i+="</tr>",t.innerHTML=i}}customElements.define("viewer-table",wp);const $E=Object.freeze(Object.defineProperty({__proto__:null,ViewerTable:wp},Symbol.toStringTag,{value:"Module"}));class Ep extends ${render(){const e=this.getAttribute("edit-value")||"---",s=`<div class="py-1" style="${this.getCommonStyles()} white-space: pre-wrap;">${e}</div>`;this.innerHTML=this.renderViewerStructure(s)}getWhatsapp(){const e=this.getAttribute("title"),t=this.getAttribute("edit-value")||"";return`
*${e}*
> ${t.replace(/\n/g,`
> `)}
`}}customElements.define("viewer-text",Ep);const FE=Object.freeze(Object.defineProperty({__proto__:null,ViewerText:Ep},Symbol.toStringTag,{value:"Module"}));class Ip extends ${render(){const e=this.getAttribute("edit-value");let t={url:"#",text:"---"};try{e&&(t=JSON.parse(e))}catch{}let s=t.url||"#";s&&s!=="#"&&(s=s.trim(),s.startsWith("http")||(s="https://"+s));const i=this._checkExtension(s,["mp3","wav","ogg","m4a"]),r=this._checkExtension(s,["jpg","jpeg","png","gif","webp","svg"]),o=this._checkVideo(s),l=this._checkInternalDoc(s),c=`<div class="d-flex align-items-center gap-2 py-1">
          ${this._renderActionButton(i,r,o,l)}
          <a href="${s}" target="_blank" rel="noopener noreferrer" class="text-primary text-decoration-underline fw-bold text-truncate">
            <i class="fa-solid fa-arrow-up-right-from-square me-1 small"></i>${t.text||t.url||"---"}
          </a>
        </div>`;this.innerHTML=this.renderViewerStructure(c),this._attachEvents(s,t.text,i,r,o,l)}_checkExtension(e,t){if(!e||e==="#")return!1;const s=e.split("?")[0].toLowerCase();return t.some(i=>s.endsWith("."+i))}_checkVideo(e){if(!e||e==="#")return{isVideo:!1};const t=["mp4","webm","ogg","mov"],s=e.split("?")[0].toLowerCase();if(t.some(l=>s.endsWith("."+l)))return{isVideo:!0,type:"file"};const r=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,o=e.match(r);return o&&o[2].length===11?{isVideo:!0,type:"youtube",id:o[2]}:{isVideo:!1}}_checkInternalDoc(e){if(!e||e==="#")return null;const t=/\/document\/(doc_\d+)/,s=e.match(t);return s&&s[1]?{isInternal:!0,docId:s[1]}:null}_renderActionButton(e,t,s,i){if(i&&i.isInternal)return`<button class="btn btn-sm btn-outline-info rounded-circle shadow-sm btn-view-doc" style="width: 32px; height: 32px; padding: 0;" title="Ver Documento">
                <i class="fa-solid fa-file-contract"></i>
              </button>`;if(e)return`<button class="btn btn-sm btn-outline-success rounded-circle shadow-sm btn-play-audio" style="width: 32px; height: 32px; padding: 0;" title="Escuchar Audio">
                <i class="fa-solid fa-play"></i>
              </button>`;if(t)return`<button class="btn btn-sm btn-outline-primary rounded-circle shadow-sm btn-view-image" style="width: 32px; height: 32px; padding: 0;" title="Ver Imagen">
                <i class="fa-regular fa-image"></i>
              </button>`;if(s&&s.isVideo){const r=s.type==="youtube"?"fa-brands fa-youtube":"fa-solid fa-film";return`<button class="btn btn-sm ${s.type==="youtube"?"btn-outline-danger":"btn-outline-dark"} rounded-circle shadow-sm btn-view-video" style="width: 32px; height: 32px; padding: 0;" title="Ver Video">
                <i class="${r}"></i>
              </button>`}return""}_attachEvents(e,t,s,i,r,o){if(o&&o.isInternal){const l=this.querySelector(".btn-view-doc");l&&(l.onclick=()=>this._showDocModal(o.docId,t))}if(s){const l=this.querySelector(".btn-play-audio");l&&(l.onclick=()=>this._playAudio(e,t))}if(i){const l=this.querySelector(".btn-view-image");l&&(l.onclick=()=>this._showImageModal(e,t))}if(r&&r.isVideo){const l=this.querySelector(".btn-view-video");l&&(l.onclick=()=>this._showVideoModal(e,t,r))}}async _showDocModal(e,t){const s=document.getElementById("internal-doc-modal");s&&s.remove();const i="internal-doc-title-lbl",r=`
      <div class="modal fade" id="internal-doc-modal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable"> 
          <div class="modal-content border-0 shadow-lg">
            <div class="modal-header bg-light py-2">
                <h6 class="modal-title fw-bold text-primary text-truncate" id="${i}" style="max-width: 90%;">
                    <i class="fa-solid fa-file-contract me-2"></i>Cargando...
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body bg-light" id="internal-doc-body" style="min-height: 300px;">
                </div>
             ${t?`<div class="modal-footer py-1 bg-white small text-muted justify-content-start">${t}</div>`:""}
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",r);const o=document.getElementById("internal-doc-modal"),l=document.getElementById("internal-doc-body");new bootstrap.Modal(o).show();const d=_i.renderReadOnly(e,l);try{const h=await q.getOne("doc",e);if(h&&h.title){const m=document.getElementById(i);m&&(m.innerHTML=`<i class="fa-solid fa-file-contract me-2"></i>${h.title}`)}}catch(h){console.error("Error recuperando título:",h)}await d,o.addEventListener("hidden.bs.modal",()=>o.remove())}_showVideoModal(e,t,s){const i=document.getElementById("media-preview-modal");i&&i.remove();let r="";s.type==="youtube"?r=`
        <div class="ratio ratio-16x9 shadow rounded overflow-hidden">
            <iframe src="${`https://www.youtube.com/embed/${s.id}?autoplay=1`}" title="YouTube video" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>`:r=`
        <video controls autoplay class="w-100 rounded shadow" style="max-height: 85vh;">
            <source src="${e}">
            Tu navegador no soporta video.
        </video>`;const o=`
      <div class="modal fade" id="media-preview-modal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content border-0 shadow-lg bg-transparent">
            <div class="modal-body p-0 position-relative text-center">
              <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3 bg-dark p-2 rounded-circle opacity-75" data-bs-dismiss="modal" aria-label="Close" style="filter: invert(1);"></button>
              ${r}
              ${t?`<div class="mt-2 text-white fw-bold text-shadow">${t}</div>`:""}
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",o);const l=document.getElementById("media-preview-modal");new bootstrap.Modal(l).show(),l.addEventListener("hidden.bs.modal",()=>l.remove())}_playAudio(e,t){let s=document.getElementById("global-audio-player");if(!s){if(s=document.createElement("div"),s.id="global-audio-player",s.style.cssText=`
        position: fixed; bottom: 20px; right: 20px; z-index: 1050;
        background: white; padding: 10px 15px; border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15); 
        display: flex; flex-direction: column; gap: 5px;
        border: 1px solid #e9ecef; min-width: 300px; max-width: 400px;
        transition: all 0.3s ease; animation: slideIn 0.3s;
      `,!document.getElementById("audio-anim-style")){const o=document.createElement("style");o.id="audio-anim-style",o.innerHTML="@keyframes slideIn { from { transform: translateY(100px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }",document.head.appendChild(o)}document.body.appendChild(s)}s.innerHTML=`
      <div class="d-flex justify-content-between align-items-start mb-1">
        <div class="small fw-bold text-body text-truncate me-2" style="max-width: 280px;" title="${t}">
            <i class="fa-solid fa-music text-success me-2"></i>${t||"Audio Sin Título"}
        </div>
        <button class="btn btn-sm text-body-secondary p-0" id="close-audio" title="Cerrar" style="line-height: 1;">
            <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="d-flex align-items-center w-100">
          <div class="spinner-border text-primary spinner-border-sm me-2" role="status" id="audio-loading" style="display:none;"></div>
          <audio controls autoplay style="width: 100%; height: 30px; outline: none;" class="w-100">
            <source src="${e}" type="audio/mpeg">
          </audio>
      </div>
    `;const i=s.querySelector("audio"),r=s.querySelector("#audio-loading");i.onloadstart=()=>{r.style.display="block"},i.oncanplay=()=>{r.style.display="none"},i.load(),i.play().catch(o=>console.log("Autoplay bloqueado:",o)),s.querySelector("#close-audio").onclick=()=>s.remove()}_showImageModal(e,t){const s=document.getElementById("media-preview-modal");s&&s.remove();const i=`
      <div class="modal fade" id="media-preview-modal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content border-0 shadow-lg bg-transparent">
            <div class="modal-body p-0 position-relative text-center">
              <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3 bg-white p-2 rounded-circle opacity-100" data-bs-dismiss="modal" aria-label="Close"></button>
              <img src="${e}" class="img-fluid rounded shadow" style="max-height: 85vh;" alt="${t||"Vista previa"}">
              ${t?`<div class="mt-2 text-white fw-bold text-shadow">${t}</div>`:""}
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",i);const r=document.getElementById("media-preview-modal");new bootstrap.Modal(r).show(),r.addEventListener("hidden.bs.modal",()=>r.remove())}getWhatsapp(){const e=this.getAttribute("title");let t=this.getAttribute("edit-value");try{const s=JSON.parse(t);let i=s.url||"";if(i){i.startsWith("http")||(i="https://"+i);try{i=encodeURI(decodeURI(i))}catch{i=encodeURI(i)}}t=s.text?`${s.text} (${i})`:i}catch{}return`*${e}:* ${t}`}}customElements.define("viewer-url",Ip);const BE=Object.freeze(Object.defineProperty({__proto__:null,ViewerUrl:Ip},Symbol.toStringTag,{value:"Module"}));class Tp extends ${render(){const e=this.getAttribute("edit-value"),t=this.getAttribute("type")||"Visual",s=e==="true",o=`
        <div style="color: ${s?"#198754":"#dc3545"}; font-size: 1.1rem; padding: 2px 0; font-weight: bold;">
            ${s?"SÍ":"NO"}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(o,t)}}customElements.define("printer-boolean",Tp);const UE=Object.freeze(Object.defineProperty({__proto__:null,PrinterBoolean:Tp},Symbol.toStringTag,{value:"Module"}));class Ap extends ${constructor(){super(),this.chartInstance=null}connectedCallback(){super.connectedCallback(),setTimeout(()=>this._renderChart(),100)}render(){this.getAttribute("edit-value");const e=this.getAttribute("type")||"Visual",s=`
      <div style="width: 100%; height: 300px; page-break-inside: avoid;">
        <canvas id="${`print-chart-${this.id}`}"></canvas>
      </div>`;this.innerHTML=this.renderPrinterStructure(s,e)}async _renderChart(){const e=this.getAttribute("edit-value");if(!e)return;const t=`print-chart-${this.id}`,s=this.querySelector(`#${t}`);if(!s)return;let i;try{i=JSON.parse(e)}catch(l){console.error("Error parsing chart config:",l);return}window.Chart||await this._loadChartJS(),this.chartInstance&&this.chartInstance.destroy();const{labels:r,datasets:o}=this._processData(i);if(!o.length){this._drawPlaceholder(s,"Sin datos para mostrar");return}try{const l=i.type==="pie"?"pie":i.type==="line"?"line":"bar",c=i.type==="bar"?"y":"x",d=s.parentElement;let h=300;if(i.type==="bar"){const m=80+r.length*35;h=Math.max(300,m)}else i.type==="pie"&&(h=350);d&&(d.style.height=`${h}px`),this.chartInstance=new Chart(s,{type:l,data:{labels:r,datasets:o},options:{indexAxis:c,animation:!1,responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"bottom",labels:{font:{size:10}}},datalabels:{display:!0,color:"#000",font:{weight:"bold",size:9},formatter:m=>Math.round(m*100)/100,anchor:"end",align:c==="y"?"end":"top",offset:2}},scales:l==="pie"?{}:{y:{beginAtZero:!0,ticks:{font:{size:9}}},x:{beginAtZero:!0,ticks:{font:{size:9}}}}}})}catch(l){console.error("Error al renderizar gráfico para impresión:",l),this._drawPlaceholder(s,"Error al renderizar gráfico")}}_processData(e){let t=[],s=[];const i=[{bg:"rgba(54, 162, 235, 0.7)",border:"rgba(54, 162, 235, 1)"},{bg:"rgba(255, 99, 132, 0.7)",border:"rgba(255, 99, 132, 1)"},{bg:"rgba(75, 192, 192, 0.7)",border:"rgba(75, 192, 192, 1)"},{bg:"rgba(255, 206, 86, 0.7)",border:"rgba(255, 206, 86, 1)"}];return t=(e.manualLabels||"").split(",").map(r=>r.trim()).filter(r=>r!==""),Array.isArray(e.series)&&(s=e.series.map((r,o)=>{const l=i[o%i.length],c=(r.data||"").split(",").map(d=>parseFloat(d)||0);return{label:r.name||`Serie ${o+1}`,data:c,backgroundColor:e.type==="pie"?i.map(d=>d.bg):l.bg,borderColor:e.type==="pie"?i.map(d=>d.border):l.border,borderWidth:1}}).filter(r=>r.data.length>0)),{labels:t,datasets:s}}_drawPlaceholder(e,t){const s=e.getContext("2d");s.fillStyle="#f8f9fa",s.fillRect(0,0,e.width,e.height),s.fillStyle="#6c757d",s.font="14px Arial",s.textAlign="center",s.fillText(t,e.width/2,e.height/2)}async _loadChartJS(){return new Promise(e=>{if(window.Chart){e();return}const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js",t.onload=e,document.head.appendChild(t)})}}customElements.define("printer-chart",Ap);const jE=Object.freeze(Object.defineProperty({__proto__:null,PrinterChart:Ap},Symbol.toStringTag,{value:"Module"}));class Sp extends ${render(){const e=parseFloat(this.getAttribute("edit-value"))||0,t=this.getAttribute("currency")||"$",s=this.getAttribute("type")||"Visual",i=this.getCommonStyles(),r=e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),o=`
        <div style="${i} font-size: 1.05rem; padding: 2px 0;">
            <span style="opacity: 0.8; margin-right: 4px;">${t}</span>${r}
        </div>`;this.innerHTML=this.renderPrinterStructure(o,s)}}customElements.define("printer-currency",Sp);const HE=Object.freeze(Object.defineProperty({__proto__:null,PrinterCurrency:Sp},Symbol.toStringTag,{value:"Module"}));class Cp extends ${render(){const e=this.getAttribute("edit-value"),t=this.getAttribute("type")||"Visual",s=this.getCommonStyles();let i="---";e&&(i=new Date(e+"T12:00:00").toLocaleDateString(void 0,{day:"2-digit",month:"short",year:"numeric"}));const r=`
        <div style="${s} font-size: 1.05rem; padding: 2px 0;">
            ${i}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(r,t)}}customElements.define("printer-date",Cp);const qE=Object.freeze(Object.defineProperty({__proto__:null,PrinterDate:Cp},Symbol.toStringTag,{value:"Module"}));class Pp extends ${render(){const e=this.getAttribute("edit-value")||"---",t=this.getAttribute("type")||"Visual",i=`
        <div style="${this.getCommonStyles()} font-size: 1.05rem; word-break: break-all; padding: 2px 0;">
            ${e}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-email",Pp);const zE=Object.freeze(Object.defineProperty({__proto__:null,PrinterEmail:Pp},Symbol.toStringTag,{value:"Module"}));class xp extends ${render(){const e=this.getAttribute("edit-value")||"---",t=this.getAttribute("type")||"Visual",i=`
        <div style="${this.getCommonStyles()} font-size: 1.05rem; padding: 2px 0;">
            ${e}
        </div>`;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-number",xp);const GE=Object.freeze(Object.defineProperty({__proto__:null,PrinterNumber:xp},Symbol.toStringTag,{value:"Module"}));class Rp extends ${render(){const e=this.getAttribute("type")||"Visual",t='<div style="height: 1.5rem;"></div>';this.innerHTML=this.renderPrinterStructure(t,e)}}customElements.define("printer-password",Rp);const WE=Object.freeze(Object.defineProperty({__proto__:null,PrinterPassword:Rp},Symbol.toStringTag,{value:"Module"}));class Lp extends ${render(){const e=this.getAttribute("edit-value")||"0",t=this.getAttribute("type")||"Visual",s=this.getCommonStyles();let i="1.05rem";t==="Facil Lectura"&&(i="1.3rem");const r=`
      <div style="${s} font-size: ${i}; padding: 2px 0;">
          ${e}%
      </div>
    `;this.innerHTML=this.renderPrinterStructure(r,t)}}customElements.define("printer-percentage",Lp);const KE=Object.freeze(Object.defineProperty({__proto__:null,PrinterPercentage:Lp},Symbol.toStringTag,{value:"Module"}));class kp extends ${render(){const e=this.getAttribute("title");this.innerHTML=`<strong mt-3>${e}</strong><hr>`}}customElements.define("printer-section",kp);const QE=Object.freeze(Object.defineProperty({__proto__:null,PrinterSection:kp},Symbol.toStringTag,{value:"Module"}));class Dp extends ${render(){const e=this.getAttribute("edit-value")||"---",t=this.getAttribute("type")||"Visual",i=`
        <div style="${this.getCommonStyles()} font-size: 1.05rem; padding: 2px 0;">
            ${e}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-select",Dp);const JE=Object.freeze(Object.defineProperty({__proto__:null,PrinterSelect:Dp},Symbol.toStringTag,{value:"Module"}));class Vp extends ${render(){const e=this.getAttribute("edit-value")||"---",t=this.getAttribute("type")||"Visual",i=`
        <div style="${this.getCommonStyles()} font-size: 1.05rem; padding: 2px 0;">
            ${e}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-string",Vp);const YE=Object.freeze(Object.defineProperty({__proto__:null,PrinterString:Vp},Symbol.toStringTag,{value:"Module"}));class Mp extends ${render(){const e=this.getAttribute("edit-value"),t=this.getAttribute("columns");this.getAttribute("title");const s=this.getAttribute("type")||"Visual";let i=[],r=[];try{e&&(i=JSON.parse(e)),t&&(r=JSON.parse(t))}catch(g){console.warn("Error parseando tabla",g)}const o=r.filter(g=>!g.hidePrint),l=s==="Compacto",c=s==="Facil Lectura",d=`width: 100%; border-collapse: collapse; font-size: ${l?"0.70rem":c?"1rem":"0.0.70rem"};`,h=l||c?"1px":"10px",m=`
      <table style="${d}">
        <thead>
          <tr style="background-color: #f8f9fa;">
            ${o.map(g=>`
              <th style="padding: ${h}; border: 1px solid #dee2e6; text-align: ${g.alignment||"left"}; text-transform: uppercase; font-size: 0.7rem;">
                ${g.title}
              </th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${i.length>0?i.map((g,E)=>`
            <tr style="background-color: ${E%2===0?"#fff":"#fcfcfc"};">
               ${o.map(T=>{const L=g.find(P=>P.fieldId===T.id)||{};return`
                  <td style="padding: ${h}; border: 1px solid #dee2e6; text-align: ${T.alignment||"left"};">
                    ${this._generateCellHTML(T,L,s)}
                  </td>`}).join("")}
            </tr>
          `).join(""):`<tr><td colspan="${r.length}" style="text-align:center; padding: 20px;">--- Sin datos ---</td></tr>`}
        </tbody>
        <tfoot id="footer-${this.id}">
            ${this._renderTotalRow(i,r,h)}
        </tfoot>
      </table>
    `;this.innerHTML=this.renderPrinterStructure(m,s)}_renderTotalRow(e,t,s){return t.some(r=>r.total)?`<tr style="font-weight: bold; background: #eee;">
      ${t.map(r=>{let o="";if(r.total){const l=e.reduce((c,d)=>{const h=d.find(m=>m.fieldId===r.id);return c+(parseFloat(h==null?void 0:h.value)||0)},0);r.tag==="setting-currency"?o=`${r.currency||"$"} ${l.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`:o=l}return`<td style="padding: ${s}; border: 1px solid #dee2e6; text-align: ${r.alignment||"left"};">${o}</td>`}).join("")}
    </tr>`:""}_generateCellHTML(e,t,s){const i=e.tag.replace("setting-","printer-"),r=document.createElement(i);return r.setAttribute("table",""),r.setAttribute("type",s),r.setAttribute("edit-value",t.value||""),t.bold&&r.setAttribute("bold",""),t.italic&&r.setAttribute("italic",""),t.color&&r.setAttribute("color",t.color),e.currency&&r.setAttribute("currency",e.currency),r.outerHTML}}customElements.define("printer-table",Mp);const XE=Object.freeze(Object.defineProperty({__proto__:null,PrinterTable:Mp},Symbol.toStringTag,{value:"Module"}));class Op extends ${render(){const e=this.getAttribute("edit-value")||"",t=this.getAttribute("type")||"Visual",i=`
        <div style="${this.getCommonStyles()} line-height: 1.2; white-space: pre-wrap; text-align: left; font-size: 1.05rem;">
            ${e}
        </div>`;this.innerHTML=this.renderPrinterStructure(i,t)}}customElements.define("printer-text",Op);const ZE=Object.freeze(Object.defineProperty({__proto__:null,PrinterText:Op},Symbol.toStringTag,{value:"Module"}));class Np extends ${render(){const e=this.getAttribute("edit-value"),t=this.getAttribute("type")||"Visual";let s={url:"",text:"---"};try{e&&(s=JSON.parse(e))}catch{}let i=s.url||"";try{i&&(i=decodeURI(i))}catch{}const r=`
        <div style="font-size: 1.05rem; color: #000;">
            ${s.text||"---"}
        </div>
        <div style="font-size: 0.75rem; color: #888; font-family: monospace; margin-top: 2px; word-break: break-all;">
            ${i}
        </div>
    `;this.innerHTML=this.renderPrinterStructure(r,t)}}customElements.define("printer-url",Np);const eI=Object.freeze(Object.defineProperty({__proto__:null,PrinterUrl:Np},Symbol.toStringTag,{value:"Module"}));
