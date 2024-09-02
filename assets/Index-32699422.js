import{d as L,l as ge,_ as ae,o as $,D as O,a as m,f as c,u as V,t as y,h as d,g as l,w as p,a5 as x,r as F,c as Ke}from"./index-3bb8d7f9.js";const D=/^[a-z0-9]+(-[a-z0-9]+)*$/,J=(e,t,n,r="")=>{const i=e.split(":");if(e.slice(0,1)==="@"){if(i.length<2||i.length>3)return null;r=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){const a=i.pop(),u=i.pop(),f={provider:i.length>0?i[0]:r,prefix:u,name:a};return t&&!U(f)?null:f}const o=i[0],s=o.split("-");if(s.length>1){const a={provider:r,prefix:s.shift(),name:s.join("-")};return t&&!U(a)?null:a}if(n&&r===""){const a={provider:r,prefix:"",name:o};return t&&!U(a,n)?null:a}return null},U=(e,t)=>e?!!((e.provider===""||e.provider.match(D))&&(t&&e.prefix===""||e.prefix.match(D))&&e.name.match(D)):!1,ze=Object.freeze({left:0,top:0,width:16,height:16}),W=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),X=Object.freeze({...ze,...W}),ne=Object.freeze({...X,body:"",hidden:!1});function Ge(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function be(e,t){const n=Ge(e,t);for(const r in ne)r in W?r in e&&!(r in n)&&(n[r]=W[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function We(e,t){const n=e.icons,r=e.aliases||Object.create(null),i=Object.create(null);function o(s){if(n[s])return i[s]=[];if(!(s in i)){i[s]=null;const a=r[s]&&r[s].parent,u=a&&o(a);u&&(i[s]=[a].concat(u))}return i[s]}return(t||Object.keys(n).concat(Object.keys(r))).forEach(o),i}function Je(e,t,n){const r=e.icons,i=e.aliases||Object.create(null);let o={};function s(a){o=be(r[a]||i[a],o)}return s(t),n.forEach(s),be(e,o)}function Ee(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(i=>{t(i,null),n.push(i)});const r=We(e);for(const i in r){const o=r[i];o&&(t(i,Je(e,i,o)),n.push(i))}return n}const Xe={provider:"",aliases:{},not_found:{},...ze};function ee(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Me(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!ee(e,Xe))return null;const n=t.icons;for(const i in n){const o=n[i];if(!i.match(D)||typeof o.body!="string"||!ee(o,ne))return null}const r=t.aliases||Object.create(null);for(const i in r){const o=r[i],s=o.parent;if(!i.match(D)||typeof s!="string"||!n[s]&&!r[s]||!ee(o,ne))return null}return t}const ve=Object.create(null);function Ye(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function M(e,t){const n=ve[e]||(ve[e]=Object.create(null));return n[t]||(n[t]=Ye(e,t))}function ue(e,t){return Me(t)?Ee(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function Ze(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let B=!1;function $e(e){return typeof e=="boolean"&&(B=e),B}function et(e){const t=typeof e=="string"?J(e,!0,B):e;if(t){const n=M(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function tt(e,t){const n=J(e,!0,B);if(!n)return!1;const r=M(n.provider,n.prefix);return Ze(r,n.name,t)}function nt(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),B&&!t&&!e.prefix){let i=!1;return Me(e)&&(e.prefix="",Ee(e,(o,s)=>{s&&tt(o,s)&&(i=!0)})),i}const n=e.prefix;if(!U({provider:t,prefix:n,name:"a"}))return!1;const r=M(t,n);return!!ue(r,e)}const Fe=Object.freeze({width:null,height:null}),Le=Object.freeze({...Fe,...W}),it=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ot=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function _e(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(it);if(r===null||!r.length)return e;const i=[];let o=r.shift(),s=ot.test(o);for(;;){if(s){const a=parseFloat(o);isNaN(a)?i.push(o):i.push(Math.ceil(a*t*n)/n)}else i.push(o);if(o=r.shift(),o===void 0)return i.join("");s=!s}}const rt=e=>e==="unset"||e==="undefined"||e==="none";function st(e,t){const n={...X,...e},r={...Le,...t},i={left:n.left,top:n.top,width:n.width,height:n.height};let o=n.body;[n,r].forEach(C=>{const v=[],g=C.hFlip,z=C.vFlip;let T=C.rotate;g?z?T+=2:(v.push("translate("+(i.width+i.left).toString()+" "+(0-i.top).toString()+")"),v.push("scale(-1 1)"),i.top=i.left=0):z&&(v.push("translate("+(0-i.left).toString()+" "+(i.height+i.top).toString()+")"),v.push("scale(1 -1)"),i.top=i.left=0);let A;switch(T<0&&(T-=Math.floor(T/4)*4),T=T%4,T){case 1:A=i.height/2+i.top,v.unshift("rotate(90 "+A.toString()+" "+A.toString()+")");break;case 2:v.unshift("rotate(180 "+(i.width/2+i.left).toString()+" "+(i.height/2+i.top).toString()+")");break;case 3:A=i.width/2+i.left,v.unshift("rotate(-90 "+A.toString()+" "+A.toString()+")");break}T%2===1&&(i.left!==i.top&&(A=i.left,i.left=i.top,i.top=A),i.width!==i.height&&(A=i.width,i.width=i.height,i.height=A)),v.length&&(o='<g transform="'+v.join(" ")+'">'+o+"</g>")});const s=r.width,a=r.height,u=i.width,f=i.height;let h,b;s===null?(b=a===null?"1em":a==="auto"?f:a,h=_e(b,u/f)):(h=s==="auto"?u:s,b=a===null?_e(h,f/u):a==="auto"?f:a);const w={},k=(C,v)=>{rt(v)||(w[C]=v.toString())};return k("width",h),k("height",b),w.viewBox=i.left.toString()+" "+i.top.toString()+" "+u.toString()+" "+f.toString(),{attributes:w,body:o}}const ct=/\sid="(\S+)"/g,lt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let at=0;function ut(e,t=lt){const n=[];let r;for(;r=ct.exec(e);)n.push(r[1]);if(!n.length)return e;const i="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(o=>{const s=typeof t=="function"?t(o):t+(at++).toString(),a=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+s+i+"$3")}),e=e.replace(new RegExp(i,"g"),""),e}const ie=Object.create(null);function dt(e,t){ie[e]=t}function oe(e){return ie[e]||ie[""]}function de(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const fe=Object.create(null),N=["https://api.simplesvg.com","https://api.unisvg.com"],K=[];for(;N.length>0;)N.length===1||Math.random()>.5?K.push(N.shift()):K.push(N.pop());fe[""]=de({resources:["https://api.iconify.design"].concat(K)});function ft(e,t){const n=de(t);return n===null?!1:(fe[e]=n,!0)}function pe(e){return fe[e]}const pt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let ye=pt();function ht(e,t){const n=pe(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let i=0;n.resources.forEach(s=>{i=Math.max(i,s.length)});const o=t+".json?icons=";r=n.maxURL-i-n.path.length-o.length}return r}function mt(e){return e===404}const gt=(e,t,n)=>{const r=[],i=ht(e,t),o="icons";let s={type:o,provider:e,prefix:t,icons:[]},a=0;return n.forEach((u,f)=>{a+=u.length+1,a>=i&&f>0&&(r.push(s),s={type:o,provider:e,prefix:t,icons:[]},a=u.length),s.icons.push(u)}),r.push(s),r};function bt(e){if(typeof e=="string"){const t=pe(e);if(t)return t.path}return"/"}const vt=(e,t,n)=>{if(!ye){n("abort",424);return}let r=bt(t.provider);switch(t.type){case"icons":{const o=t.prefix,a=t.icons.join(","),u=new URLSearchParams({icons:a});r+=o+".json?"+u.toString();break}case"custom":{const o=t.uri;r+=o.slice(0,1)==="/"?o.slice(1):o;break}default:n("abort",400);return}let i=503;ye(e+r).then(o=>{const s=o.status;if(s!==200){setTimeout(()=>{n(mt(s)?"abort":"next",s)});return}return i=501,o.json()}).then(o=>{if(typeof o!="object"||o===null){setTimeout(()=>{o===404?n("abort",o):n("next",i)});return}setTimeout(()=>{n("success",o)})}).catch(()=>{n("next",i)})},_t={prepare:gt,send:vt};function yt(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((i,o)=>i.provider!==o.provider?i.provider.localeCompare(o.provider):i.prefix!==o.prefix?i.prefix.localeCompare(o.prefix):i.name.localeCompare(o.name));let r={provider:"",prefix:"",name:""};return e.forEach(i=>{if(r.name===i.name&&r.prefix===i.prefix&&r.provider===i.provider)return;r=i;const o=i.provider,s=i.prefix,a=i.name,u=n[o]||(n[o]=Object.create(null)),f=u[s]||(u[s]=M(o,s));let h;a in f.icons?h=t.loaded:s===""||f.missing.has(a)?h=t.missing:h=t.pending;const b={provider:o,prefix:s,name:a};h.push(b)}),t}function Oe(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(i=>i.id!==t))})}function wt(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,i=e.prefix;t.forEach(o=>{const s=o.icons,a=s.pending.length;s.pending=s.pending.filter(u=>{if(u.prefix!==i)return!0;const f=u.name;if(e.icons[f])s.loaded.push({provider:r,prefix:i,name:f});else if(e.missing.has(f))s.missing.push({provider:r,prefix:i,name:f});else return n=!0,!0;return!1}),s.pending.length!==a&&(n||Oe([e],o.id),o.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),o.abort))})}))}let Pt=0;function xt(e,t,n){const r=Pt++,i=Oe.bind(null,n,r);if(!t.pending.length)return i;const o={id:r,icons:t,callback:e,abort:i};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(o)}),i}function It(e,t=!0,n=!1){const r=[];return e.forEach(i=>{const o=typeof i=="string"?J(i,t,n):i;o&&r.push(o)}),r}var St={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function kt(e,t,n,r){const i=e.resources.length,o=e.random?Math.floor(Math.random()*i):e.index;let s;if(e.random){let _=e.resources.slice(0);for(s=[];_.length>1;){const j=Math.floor(Math.random()*_.length);s.push(_[j]),_=_.slice(0,j).concat(_.slice(j+1))}s=s.concat(_)}else s=e.resources.slice(o).concat(e.resources.slice(0,o));const a=Date.now();let u="pending",f=0,h,b=null,w=[],k=[];typeof r=="function"&&k.push(r);function C(){b&&(clearTimeout(b),b=null)}function v(){u==="pending"&&(u="aborted"),C(),w.forEach(_=>{_.status==="pending"&&(_.status="aborted")}),w=[]}function g(_,j){j&&(k=[]),typeof _=="function"&&k.push(_)}function z(){return{startTime:a,payload:t,status:u,queriesSent:f,queriesPending:w.length,subscribe:g,abort:v}}function T(){u="failed",k.forEach(_=>{_(void 0,h)})}function A(){w.forEach(_=>{_.status==="pending"&&(_.status="aborted")}),w=[]}function Ue(_,j,q){const H=j!=="success";switch(w=w.filter(E=>E!==_),u){case"pending":break;case"failed":if(H||!e.dataAfterTimeout)return;break;default:return}if(j==="abort"){h=q,T();return}if(H){h=q,w.length||(s.length?Z():T());return}if(C(),A(),!e.random){const E=e.resources.indexOf(_.resource);E!==-1&&E!==e.index&&(e.index=E)}u="completed",k.forEach(E=>{E(q)})}function Z(){if(u!=="pending")return;C();const _=s.shift();if(_===void 0){if(w.length){b=setTimeout(()=>{C(),u==="pending"&&(A(),T())},e.timeout);return}T();return}const j={status:"pending",resource:_,callback:(q,H)=>{Ue(j,q,H)}};w.push(j),f++,b=setTimeout(Z,e.rotate),n(_,t,j.callback)}return setTimeout(Z),z}function qe(e){const t={...St,...e};let n=[];function r(){n=n.filter(a=>a().status==="pending")}function i(a,u,f){const h=kt(t,a,u,(b,w)=>{r(),f&&f(b,w)});return n.push(h),h}function o(a){return n.find(u=>a(u))||null}return{query:i,find:o,setIndex:a=>{t.index=a},getIndex:()=>t.index,cleanup:r}}function we(){}const te=Object.create(null);function Tt(e){if(!te[e]){const t=pe(e);if(!t)return;const n=qe(t),r={config:t,redundancy:n};te[e]=r}return te[e]}function At(e,t,n){let r,i;if(typeof e=="string"){const o=oe(e);if(!o)return n(void 0,424),we;i=o.send;const s=Tt(e);s&&(r=s.redundancy)}else{const o=de(e);if(o){r=qe(o);const s=e.resources?e.resources[0]:"",a=oe(s);a&&(i=a.send)}}return!r||!i?(n(void 0,424),we):r.query(t,i,n)().abort}const Pe="iconify2",R="iconify",Ne=R+"-count",xe=R+"-version",De=36e5,Ct=168;function re(e,t){try{return e.getItem(t)}catch{}}function he(e,t,n){try{return e.setItem(t,n),!0}catch{}}function Ie(e,t){try{e.removeItem(t)}catch{}}function se(e,t){return he(e,Ne,t.toString())}function ce(e){return parseInt(re(e,Ne))||0}const Y={local:!0,session:!0},Be={local:new Set,session:new Set};let me=!1;function jt(e){me=e}let Q=typeof window>"u"?{}:window;function Re(e){const t=e+"Storage";try{if(Q&&Q[t]&&typeof Q[t].length=="number")return Q[t]}catch{}Y[e]=!1}function Ve(e,t){const n=Re(e);if(!n)return;const r=re(n,xe);if(r!==Pe){if(r){const a=ce(n);for(let u=0;u<a;u++)Ie(n,R+u.toString())}he(n,xe,Pe),se(n,0);return}const i=Math.floor(Date.now()/De)-Ct,o=a=>{const u=R+a.toString(),f=re(n,u);if(typeof f=="string"){try{const h=JSON.parse(f);if(typeof h=="object"&&typeof h.cached=="number"&&h.cached>i&&typeof h.provider=="string"&&typeof h.data=="object"&&typeof h.data.prefix=="string"&&t(h,a))return!0}catch{}Ie(n,u)}};let s=ce(n);for(let a=s-1;a>=0;a--)o(a)||(a===s-1?(s--,se(n,s)):Be[e].add(a))}function He(){if(!me){jt(!0);for(const e in Y)Ve(e,t=>{const n=t.data,r=t.provider,i=n.prefix,o=M(r,i);if(!ue(o,n).length)return!1;const s=n.lastModified||-1;return o.lastModifiedCached=o.lastModifiedCached?Math.min(o.lastModifiedCached,s):s,!0})}}function zt(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in Y)Ve(r,i=>{const o=i.data;return i.provider!==e.provider||o.prefix!==e.prefix||o.lastModified===t});return!0}function Et(e,t){me||He();function n(r){let i;if(!Y[r]||!(i=Re(r)))return;const o=Be[r];let s;if(o.size)o.delete(s=Array.from(o).shift());else if(s=ce(i),!se(i,s+1))return;const a={cached:Math.floor(Date.now()/De),provider:e.provider,data:t};return he(i,R+s.toString(),JSON.stringify(a))}t.lastModified&&!zt(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function Se(){}function Mt(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,wt(e)}))}function $t(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,i=e.iconsToLoad;delete e.iconsToLoad;let o;if(!i||!(o=oe(n)))return;o.prepare(n,r,i).forEach(a=>{At(n,a,u=>{if(typeof u!="object")a.icons.forEach(f=>{e.missing.add(f)});else try{const f=ue(e,u);if(!f.length)return;const h=e.pendingIcons;h&&f.forEach(b=>{h.delete(b)}),Et(e,u)}catch(f){console.error(f)}Mt(e)})})}))}const Ft=(e,t)=>{const n=It(e,!0,$e()),r=yt(n);if(!r.pending.length){let u=!0;return t&&setTimeout(()=>{u&&t(r.loaded,r.missing,r.pending,Se)}),()=>{u=!1}}const i=Object.create(null),o=[];let s,a;return r.pending.forEach(u=>{const{provider:f,prefix:h}=u;if(h===a&&f===s)return;s=f,a=h,o.push(M(f,h));const b=i[f]||(i[f]=Object.create(null));b[h]||(b[h]=[])}),r.pending.forEach(u=>{const{provider:f,prefix:h,name:b}=u,w=M(f,h),k=w.pendingIcons||(w.pendingIcons=new Set);k.has(b)||(k.add(b),i[f][h].push(b))}),o.forEach(u=>{const{provider:f,prefix:h}=u;i[f][h].length&&$t(u,i[f][h])}),t?xt(t,r,o):Se};function Lt(e,t){const n={...e};for(const r in t){const i=t[r],o=typeof i;r in Fe?(i===null||i&&(o==="string"||o==="number"))&&(n[r]=i):o===typeof n[r]&&(n[r]=r==="rotate"?i%4:i)}return n}const Ot=/[\s,]+/;function qt(e,t){t.split(Ot).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Nt(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(i){for(;i<0;)i+=4;return i%4}if(n===""){const i=parseInt(e);return isNaN(i)?0:r(i)}else if(n!==e){let i=0;switch(n){case"%":i=25;break;case"deg":i=90}if(i){let o=parseFloat(e.slice(0,e.length-n.length));return isNaN(o)?0:(o=o/i,o%1===0?r(o):0)}}return t}function Dt(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function Bt(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Rt(e){return'url("data:image/svg+xml,'+Bt(e)+'")'}const ke={...Le,inline:!1},Vt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Ht={display:"inline-block"},le={backgroundColor:"currentColor"},Qe={backgroundColor:"transparent"},Te={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Ae={webkitMask:le,mask:le,background:Qe};for(const e in Ae){const t=Ae[e];for(const n in Te)t[e+n]=Te[n]}const G={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";G[e+"-flip"]=t,G[e.slice(0,1)+"-flip"]=t,G[e+"Flip"]=t});function Ce(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const je=(e,t)=>{const n=Lt(ke,t),r={...Vt},i=t.mode||"svg",o={},s=t.style,a=typeof s=="object"&&!(s instanceof Array)?s:{};for(let v in t){const g=t[v];if(g!==void 0)switch(v){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[v]=g===!0||g==="true"||g===1;break;case"flip":typeof g=="string"&&qt(n,g);break;case"color":o.color=g;break;case"rotate":typeof g=="string"?n[v]=Nt(g):typeof g=="number"&&(n[v]=g);break;case"ariaHidden":case"aria-hidden":g!==!0&&g!=="true"&&delete r["aria-hidden"];break;default:{const z=G[v];z?(g===!0||g==="true"||g===1)&&(n[z]=!0):ke[v]===void 0&&(r[v]=g)}}}const u=st(e,n),f=u.attributes;if(n.inline&&(o.verticalAlign="-0.125em"),i==="svg"){r.style={...o,...a},Object.assign(r,f);let v=0,g=t.id;return typeof g=="string"&&(g=g.replace(/-/g,"_")),r.innerHTML=ut(u.body,g?()=>g+"ID"+v++:"iconifyVue"),ge("svg",r)}const{body:h,width:b,height:w}=e,k=i==="mask"||(i==="bg"?!1:h.indexOf("currentColor")!==-1),C=Dt(h,{...f,width:b+"",height:w+""});return r.style={...o,"--svg":Rt(C),width:Ce(f.width),height:Ce(f.height),...Ht,...k?le:Qe,...a},ge("span",r)};$e(!0);dt("",_t);if(typeof document<"u"&&typeof window<"u"){He();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!nt(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const i=t[n];if(typeof i!="object"||!i||i.resources===void 0)continue;ft(n,i)||console.error(r)}catch{console.error(r)}}}}const Qt={...X,body:""},I=L({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(e,t){if(typeof e=="object"&&e!==null&&typeof e.body=="string")return this._name="",this.abortLoading(),{data:e};let n;if(typeof e!="string"||(n=J(e,!1,!0))===null)return this.abortLoading(),null;const r=et(n);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==e)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:e,abort:Ft([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==e&&(this._name=e,t&&t(e));const i=["iconify"];return n.prefix!==""&&i.push("iconify--"+n.prefix),n.provider!==""&&i.push("iconify--"+n.provider),{data:r,classes:i}}},render(){this.counter;const e=this.$attrs,t=this.iconMounted?this.getIcon(e.icon,e.onLoad):null;if(!t)return je(Qt,e);let n=e;return t.classes&&(n={...e,class:(typeof e.class=="string"?e.class+" ":"")+t.classes.join(" ")}),je({...X,...t.data},n)}}),Ut={name:"Pane1"},Kt=m("p",null,`
      A vel nisl magna ut faucibus condimentum quis parturient ipsum eu nec
      fusce ullamcorper dis luctus id egestas vestibulum a. Imperdiet augue
      adipiscing eu est ullamcorper parturient donec potenti parturient
      vestibulum class tincidunt scelerisque mus ultricies accumsan nullam
      consectetur at cursus vestibulum laoreet morbi. Fermentum himenaeos cras
      scelerisque fermentum parturient blandit blandit adipiscing est id metus
      at id suspendisse conubia auctor sociosqu a semper odio amet a arcu diam a
      dis. Mauris hendrerit a gravida dictum torquent scelerisque mi a in magnis
      nulla a litora a eleifend. Iaculis luctus condimentum nam vestibulum metus
      a quisque consequat massa augue a a venenatis parturient ut fringilla enim
      accumsan luctus parturient a condimentum sapien fermentum nibh. Netus odio
      sem nisi blandit adipiscing suspendisse senectus at erat eleifend laoreet
      donec lorem magnis habitant.
    `,-1),Gt=[Kt];function Wt(e,t,n,r,i,o){return $(),O("div",null,Gt)}const S=ae(Ut,[["render",Wt]]),Jt={name:"Pane2"},Xt=m("p",null,`
      Hac imperdiet vitae vestibulum dis ridiculus tempor nec a lacinia
      habitasse at a nullam semper massa a. In curae sit vestibulum condimentum
      molestie tellus condimentum a condimentum inceptos duis adipiscing
      parturient suspendisse tincidunt id vestibulum nunc faucibus primis
      praesent gravida eros in ullamcorper. Adipiscing adipiscing erat tortor
      inceptos scelerisque habitasse nisi sociosqu libero dui dis phasellus amet
      adipiscing mus nisl duis lectus accumsan pretium sem a maecenas
      suspendisse faucibus conubia.
    `,-1),Yt=m("p",null,`
      A aenean commodo dictum leo enim a sed sem porttitor potenti quisque
      platea fames adipiscing scelerisque nisl. Accumsan volutpat sociosqu
      ullamcorper est phasellus pretium parturient adipiscing condimentum
      parturient potenti parturient nullam parturient sed. Nisi adipiscing
      conubia habitasse class parturient duis hendrerit ullamcorper nunc
      scelerisque elit class a a habitasse non parturient enim vestibulum
      cubilia vestibulum. Nullam ac semper venenatis lobortis scelerisque
      vestibulum vestibulum consectetur rhoncus vel scelerisque ante a tortor
      lobortis at ullamcorper integer adipiscing.
    `,-1);function Zt(e,t,n,r,i,o){return $(),O("div",null,[Xt,c(),Yt])}const P=ae(Jt,[["render",Zt]]),en={name:"BasicUsage"},tn=L({...en,setup(e){const{t}=V();return(n,r)=>{const i=F("SshPre");return $(),O("section",null,[m("h2",null,y(d(t)("ui.tabbed-panel.basic-usage")),1),c(),m("section",null,[m("h3",null,y(d(t)("ui.tabbed-panel.position.top")),1),c(),l(i,{language:"html-vue"},{default:p(()=>[c(`
        <template>
          <TabbedPanel>
            <div title="Praesent" icon="mdi-light:home">
              ...
            </div>
            <div title="A ullamcorper eros" icon="mdi:cellphone-lock">
              ...
            </div>
          </TabbedPanel>
        </template>

        <script setup lang="ts">
        import { TabbedPanel } from "@dzangolab/vue3-ui";
        <\/script>
      `)]),_:1}),c(),l(d(x),null,{icon:p(o=>{var s;return[l(d(I),{icon:(s=o==null?void 0:o.props)==null?void 0:s.icon,height:"1.5rem"},null,8,["icon"])]}),default:p(()=>[c(),l(S,{title:"Praesent",icon:"mdi-light:home"}),c(),l(P,{title:"A ullamcorper eros",icon:"mdi:cellphone-lock"})]),_:1})]),c(),m("section",null,[m("h3",null,y(d(t)("ui.tabbed-panel.position.bottom")),1),c(),l(i,{language:"html-vue"},{default:p(()=>[c(`
        <template>
          <TabbedPanel position="bottom">
            <div title="Praesent" icon="mdi-light:home">
              ...
            </div>
            <div title="A ullamcorper eros" icon="mdi:cellphone-lock">
              ...
            </div>
          </TabbedPanel>
        </template>
        
        <script setup lang="ts">
        import { TabbedPanel } from "@dzangolab/vue3-ui";
        <\/script>
      `)]),_:1}),c(),l(d(x),{position:"bottom"},{icon:p(o=>{var s;return[l(d(I),{icon:(s=o==null?void 0:o.props)==null?void 0:s.icon,height:"1.5rem"},null,8,["icon"])]}),default:p(()=>[c(),l(S,{title:"Praesent",icon:"mdi-light:home"}),c(),l(P,{title:"A ullamcorper eros",icon:"mdi:cellphone-lock"})]),_:1})]),c(),m("section",null,[m("h3",null,y(d(t)("ui.tabbed-panel.position.left")),1),c(),l(i,{language:"html-vue"},{default:p(()=>[c(`
        <template>
          <TabbedPanel position="left">
            <div title="Praesent" icon="mdi-light:home">
              ...
            </div>
            <div title="A ullamcorper eros" icon="mdi:cellphone-lock">
              ...
            </div>
          </TabbedPanel>
        </template>

        <script setup lang="ts">
        import { TabbedPanel } from "@dzangolab/vue3-ui";
        <\/script>
      `)]),_:1}),c(),l(d(x),{position:"left"},{icon:p(o=>{var s;return[l(d(I),{icon:(s=o==null?void 0:o.props)==null?void 0:s.icon,height:"1.5rem"},null,8,["icon"])]}),default:p(()=>[c(),l(S,{title:"Praesent",icon:"mdi-light:home"}),c(),l(P,{title:"A ullamcorper eros",icon:"mdi:cellphone-lock"})]),_:1})]),c(),m("section",null,[m("h3",null,y(n.$t("ui.tabbed-panel.position.right")),1),c(),l(i,{language:"html-vue"},{default:p(()=>[c(`
        <template>
          <TabbedPanel position="right">
            <div title="Praesent" icon="mdi-light:home">
              ...
            </div>
            <div title="A ullamcorper eros" icon="mdi:cellphone-lock">
              ...
            </div>
          </TabbedPanel>
        </template>
        
        <script setup lang="ts">
        import { TabbedPanel } from "@dzangolab/vue3-ui";
        <\/script>
      `)]),_:1}),c(),l(d(x),{position:"right"},{icon:p(o=>{var s;return[l(d(I),{icon:(s=o==null?void 0:o.props)==null?void 0:s.icon,height:"1.5rem"},null,8,["icon"])]}),default:p(()=>[c(),l(S,{title:"Praesent",icon:"mdi-light:home"}),c(),l(P,{title:"A ullamcorper eros",icon:"mdi:cellphone-lock"})]),_:1})]),c(),m("section",null,[m("h3",null,y(n.$t("ui.tabbed-panel.no-title")),1),c(),l(i,{language:"html-vue"},{default:p(()=>[c(`
        <template>
          <TabbedPanel position="right">
            <div title="Praesent" icon="mdi-light:home">
              ...
            </div>
            <div title="A ullamcorper eros" icon="mdi:cellphone-lock">
              ...
            </div>
            <div>
              no title - element will be ignored
            </div>
          </TabbedPanel>
        </template>
        
        <script setup lang="ts">
        import { TabbedPanel } from "@dzangolab/vue3-ui";
        <\/script>
      `)]),_:1}),c(),l(d(x),null,{icon:p(o=>{var s;return[l(d(I),{icon:(s=o==null?void 0:o.props)==null?void 0:s.icon,height:"1.5rem"},null,8,["icon"])]}),default:p(()=>[c(),l(S,{title:"Praesent",icon:"mdi-light:home"}),c(),l(P,{title:"A ullamcorper eros",icon:"mdi:cellphone-lock"}),c(),l(P)]),_:1})])])}}}),nn={name:"Colorized"},on=L({...nn,setup(e){const{t}=V();return(n,r)=>{const i=F("SshPre");return $(),O("section",null,[m("h2",null,y(d(t)("ui.tabbed-panel.with-color")),1),c(),m("section",null,[m("h3",null,y(d(t)("ui.tabbed-panel.position.top")),1),c(),l(i,{language:"html-vue"},{default:p(()=>[c(`
        <template>
          <TabbedPanel class="colorized">
            <div title="Praesent" icon="mdi-light:home">
              ...
            </div>
            <div title="A ullamcorper eros" icon="mdi:cellphone-lock">
              ...
            </div>
          </TabbedPanel>
        </template>
        
        <script setup lang="ts">
        import { TabbedPanel } from "@dzangolab/vue3-ui";
        <\/script>
      `)]),_:1}),c(),l(d(x),{class:"colorized"},{icon:p(o=>{var s;return[l(d(I),{icon:(s=o==null?void 0:o.props)==null?void 0:s.icon,height:"1.5rem"},null,8,["icon"])]}),default:p(()=>[c(),l(S,{title:"Praesent",icon:"mdi-light:home"}),c(),l(P,{title:"A ullamcorper eros",icon:"mdi:cellphone-lock"})]),_:1})]),c(),m("section",null,[m("h3",null,y(d(t)("ui.tabbed-panel.position.bottom")),1),c(),l(d(x),{class:"colorized",position:"bottom"},{icon:p(o=>{var s;return[l(d(I),{icon:(s=o==null?void 0:o.props)==null?void 0:s.icon,height:"1.5rem"},null,8,["icon"])]}),default:p(()=>[c(),l(S,{title:"Praesent",icon:"mdi-light:home"}),c(),l(P,{title:"A ullamcorper eros",icon:"mdi:cellphone-lock"})]),_:1})]),c(),m("section",null,[m("h3",null,y(d(t)("ui.tabbed-panel.position.left")),1),c(),l(d(x),{class:"colorized",position:"left"},{icon:p(o=>{var s;return[l(d(I),{icon:(s=o==null?void 0:o.props)==null?void 0:s.icon,height:"1.5rem"},null,8,["icon"])]}),default:p(()=>[c(),l(S,{title:"Praesent",icon:"mdi-light:home"}),c(),l(P,{title:"A ullamcorper eros",icon:"mdi:cellphone-lock"})]),_:1})]),c(),m("section",null,[m("h3",null,y(n.$t("ui.tabbed-panel.position.right")),1),c(),l(d(x),{class:"colorized",position:"right"},{icon:p(o=>{var s;return[l(d(I),{icon:(s=o==null?void 0:o.props)==null?void 0:s.icon,height:"1.5rem"},null,8,["icon"])]}),default:p(()=>[c(),l(S,{title:"Praesent",icon:"mdi-light:home"}),c(),l(P,{title:"A ullamcorper eros",icon:"mdi:cellphone-lock"})]),_:1})])])}}}),rn={name:"ColorizedWithShadow"},sn=L({...rn,setup(e){const{t}=V();return(n,r)=>{const i=F("SshPre");return $(),O("section",null,[m("h2",null,y(d(t)("ui.tabbed-panel.with-color-and-shadow")),1),c(),m("section",null,[m("h3",null,y(d(t)("ui.tabbed-panel.position.top")),1),c(),l(i,{language:"html-vue"},{default:p(()=>[c(`
        <template>
          <TabbedPanel class="colorized shadow">
            <div title="Praesent" icon="mdi-light:home">
              ...
            </div>
            <div title="A ullamcorper eros" icon="mdi:cellphone-lock">
              ...
            </div>
          </TabbedPanel>
        </template>
        
        <script setup lang="ts">
        import { TabbedPanel } from "@dzangolab/vue3-ui";
        <\/script>
      `)]),_:1}),c(),l(d(x),{class:"colorized shadow"},{icon:p(o=>{var s;return[l(d(I),{icon:(s=o==null?void 0:o.props)==null?void 0:s.icon,height:"1.5rem"},null,8,["icon"])]}),default:p(()=>[c(),l(S,{title:"Praesent",icon:"mdi-light:home"}),c(),l(P,{title:"A ullamcorper eros",icon:"mdi:cellphone-lock"})]),_:1})]),c(),m("section",null,[m("h3",null,y(d(t)("ui.tabbed-panel.position.bottom")),1),c(),l(d(x),{class:"colorized shadow",position:"bottom"},{icon:p(o=>{var s;return[l(d(I),{icon:(s=o==null?void 0:o.props)==null?void 0:s.icon,height:"1.5rem"},null,8,["icon"])]}),default:p(()=>[c(),l(S,{title:"Praesent",icon:"mdi-light:home"}),c(),l(P,{title:"A ullamcorper eros",icon:"mdi:cellphone-lock"})]),_:1})]),c(),m("section",null,[m("h3",null,y(d(t)("ui.tabbed-panel.position.left")),1),c(),l(d(x),{class:"colorized shadow",position:"left"},{icon:p(o=>{var s;return[l(d(I),{icon:(s=o==null?void 0:o.props)==null?void 0:s.icon,height:"1.5rem"},null,8,["icon"])]}),default:p(()=>[c(),l(S,{title:"Praesent",icon:"mdi-light:home"}),c(),l(P,{title:"A ullamcorper eros",icon:"mdi:cellphone-lock"})]),_:1})]),c(),m("section",null,[m("h3",null,y(n.$t("ui.tabbed-panel.position.right")),1),c(),l(d(x),{class:"colorized shadow",position:"right"},{icon:p(o=>{var s;return[l(d(I),{icon:(s=o==null?void 0:o.props)==null?void 0:s.icon,height:"1.5rem"},null,8,["icon"])]}),default:p(()=>[c(),l(S,{title:"Praesent",icon:"mdi-light:home"}),c(),l(P,{title:"A ullamcorper eros",icon:"mdi:cellphone-lock"})]),_:1})])])}}}),cn={name:"CustomIcons"},ln=L({...cn,setup(e){const{t}=V();return(n,r)=>{const i=F("SshPre");return $(),O("section",null,[m("h2",null,y(d(t)("ui.tabbed-panel.with-custom-icons")),1),c(),m("section",null,[m("h3",null,y(d(t)("ui.tabbed-panel.position.top")),1),c(),l(i,{language:"html-vue"},{default:p(()=>[c(`
        <template>
          <TabbedPanel class="colorized shadow">
            <template #icon="slot">
              <Icon :icon="slot?.props?.icon" height="1.5rem" />
            </template>
            
            <div title="Praesent" icon="mdi-light:home">
              ...
            </div>
            <div title="A ullamcorper eros" icon="mdi:cellphone-lock">
              ...
            </div>
          </TabbedPanel>
        </template>
        
        <script setup lang="ts">
        import { TabbedPanel } from "@dzangolab/vue3-ui";
        import { Icon } from "@iconify/vue";
        <\/script>
      `)]),_:1}),c(),l(d(x),{class:"colorized shadow"},{icon:p(o=>{var s;return[l(d(I),{icon:(s=o==null?void 0:o.props)==null?void 0:s.icon,height:"1.5rem"},null,8,["icon"])]}),default:p(()=>[c(),l(S,{title:"Praesent",icon:"mdi-light:home"}),c(),l(P,{title:"A ullamcorper eros",icon:"mdi:cellphone-lock"})]),_:1})]),c(),m("section",null,[m("h3",null,y(d(t)("ui.tabbed-panel.position.bottom")),1),c(),l(d(x),{class:"colorized shadow",position:"bottom"},{icon:p(o=>{var s;return[l(d(I),{icon:(s=o==null?void 0:o.props)==null?void 0:s.icon,height:"1.5rem"},null,8,["icon"])]}),default:p(()=>[c(),l(S,{title:"Praesent",icon:"mdi-light:home"}),c(),l(P,{title:"A ullamcorper eros",icon:"mdi:cellphone-lock"})]),_:1})]),c(),m("section",null,[m("h3",null,y(d(t)("ui.tabbed-panel.position.left")),1),c(),l(d(x),{class:"colorized shadow",position:"left"},{icon:p(o=>{var s;return[l(d(I),{icon:(s=o==null?void 0:o.props)==null?void 0:s.icon,height:"1.5rem"},null,8,["icon"])]}),default:p(()=>[c(),l(S,{title:"Praesent",icon:"mdi-light:home"}),c(),l(P,{title:"A ullamcorper eros",icon:"mdi:cellphone-lock"})]),_:1})]),c(),m("section",null,[m("h3",null,y(n.$t("ui.tabbed-panel.position.right")),1),c(),l(d(x),{class:"colorized shadow",position:"right"},{icon:p(o=>{var s;return[l(d(I),{icon:(s=o==null?void 0:o.props)==null?void 0:s.icon,height:"1.5rem"},null,8,["icon"])]}),default:p(()=>[c(),l(S,{title:"Praesent",icon:"mdi-light:home"}),c(),l(P,{title:"A ullamcorper eros",icon:"mdi:cellphone-lock"})]),_:1})])])}}}),an={name:"TabbedPanelPage"},un=L({...an,setup(e){const{t}=V();return(n,r)=>{const i=F("router-link"),o=F("Page");return $(),Ke(o,{title:d(t)("ui.tabbed-panel.title")},{toolbar:p(()=>[l(i,{to:{name:"ui"},class:"back",type:"button"},{default:p(()=>[c(y(d(t)("common.back")),1)]),_:1})]),default:p(()=>[c(),l(d(x),{class:"colorized shadow"},{default:p(()=>[l(tn,{title:d(t)("ui.tabbed-panel.basic-usage")},null,8,["title"]),c(),l(on,{title:d(t)("ui.tabbed-panel.with-color")},null,8,["title"]),c(),l(sn,{title:d(t)("ui.tabbed-panel.with-color-and-shadow")},null,8,["title"]),c(),l(ln,{title:d(t)("ui.tabbed-panel.with-custom-icons")},null,8,["title"])]),_:1})]),_:1},8,["title"])}}});const fn=ae(un,[["__scopeId","data-v-d015dae0"]]);export{fn as default};