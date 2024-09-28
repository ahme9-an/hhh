const __vite__fileDeps=["./pageSignIn-Cn-27vdB.js","./index-Bi_R5DOD.js","./index-vX_PR0Tt.css","./putPreloader-GUTk_xtx.js","./page-CU8OMfVw.js","./countryInputField-TdfrWYZa.js","./button-fd7vmGEE.js","./wrapEmojiText-DexI8BZA.js","./scrollable-bzm66Usj.js","./textToSvgURL-Cnw_Q8Rw.js","./qr-code-styling-CvBVNv73.js","./_commonjsHelpers-Cpj98o6Y.js","./pageIm-DDvPcWOY.js","./pagePassword-bVJxfvlJ.js","./htmlToSpan-DjeLrNns.js","./loginPage-D-0fbg3A.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{f as d,l as Q,a as l,e as V,d as $,i as F,_ as y,A as P,p as C}from"./index-Bi_R5DOD.js";import{a as z,P as H}from"./page-CU8OMfVw.js";import{B as R}from"./button-fd7vmGEE.js";import{p as O}from"./putPreloader-GUTk_xtx.js";import{b as N,t as j}from"./textToSvgURL-Cnw_Q8Rw.js";let T=!1;function W(){return S||(S=l.managers.apiManager.getConfig().then(e=>e.suggested_lang_code!==d.lastRequestedLangCode?Promise.all([e,d.getStrings(e.suggested_lang_code,["Login.ContinueOnLanguage"]),d.getCacheLangPack()]):[]))}let S;function G(e){T||W().then(([a,c])=>{if(!a)return;const s=[];c.forEach(i=>{const g=d.strings.get(i.key);g&&(s.push(g),d.strings.set(i.key,i))});const o="Login.ContinueOnLanguage",r=R("btn-primary btn-secondary btn-primary-transparent primary",{text:o});r.lastElementChild.classList.remove("i18n"),Q({text:[d.format(o,!0)]}).then(()=>{window.requestAnimationFrame(()=>{e.append(r)})}),l.addEventListener("language_change",()=>{r.remove()},{once:!0}),s.forEach(i=>{d.strings.set(i.key,i)}),z(r,i=>{V(i),T=!0,r.disabled=!0,O(r),d.getLangPack(a.suggested_lang_code)})})}function J(e,a){return e.replace(/\+/g,"-").replace(/\//g,"_").replace(/\=+$/,"")}function K(e){let a,c="";for(let s=e.length,o=0,r=0;r<s;++r)a=r%3,o|=e[r]<<(16>>>a&24),(a===2||s-r===1)&&(c+=String.fromCharCode(E(o>>>18&63),E(o>>>12&63),E(o>>>6&63),E(o&63)),o=0);return c.replace(/A(?=A$|$)/g,"=")}function E(e){return e<26?e+65:e<52?e+71:e<62?e-4:e===62?43:e===63?47:65}const b=3,X=async()=>{const a=A.pageEl.querySelector(".auth-image");let c=O(a,!0);const s=document.createElement("div");s.classList.add("input-wrapper");const o=R("btn-primary btn-secondary btn-primary-transparent primary",{text:"Login.QR.Cancel"});s.append(o),G(s);const r=a.parentElement,i=document.createElement("h4");$(i,"Login.QR.Title");const g=document.createElement("ol");g.classList.add("qr-description"),["Login.QR.Help1","Login.QR.Help2","Login.QR.Help3"].forEach(u=>{const t=document.createElement("li");t.append(F(u)),g.append(t)}),r.append(i,g,s),o.addEventListener("click",()=>{y(()=>import("./pageSignIn-Cn-27vdB.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url).then(u=>u.default.mount()),m=!0});const x=(await Promise.all([y(()=>import("./qr-code-styling-CvBVNv73.js").then(u=>u.q),__vite__mapDeps([10,11]),import.meta.url)]))[0].default;let m=!1;l.addEventListener("user_auth",()=>{m=!0,h=null},{once:!0});const L={ignoreErrors:!0};let k;const I=async u=>{try{let t=await l.managers.apiManager.invokeApi("auth.exportLoginToken",{api_id:P.id,api_hash:P.hash,except_ids:[]},{ignoreErrors:!0});if(t._==="auth.loginTokenMigrateTo"&&(L.dcId||(L.dcId=t.dc_id,l.managers.apiManager.setBaseDcId(t.dc_id)),t=await l.managers.apiManager.invokeApi("auth.importLoginToken",{token:t.token},L)),t._==="auth.loginTokenSuccess"){const p=t.authorization;return await l.managers.apiManager.setUser(p.user),y(()=>import("./pageIm-DDvPcWOY.js"),__vite__mapDeps([12,1,2,4]),import.meta.url).then(f=>f.default.mount()),!0}if(!k||!N(k,t.token)){k=t.token;const p=K(t.token),f="tg://login?token="+J(p,!0),w=window.getComputedStyle(document.documentElement),q=w.getPropertyValue("--surface-color").trim(),B=w.getPropertyValue("--primary-text-color").trim(),D=w.getPropertyValue("--primary-color").trim(),M=await fetch("assets/img/logo_padded.svg").then(n=>n.text()).then(n=>(n=n.replace(/(fill:).+?(;)/,`$1${D}$2`),j(n))),_=new x({width:240*window.devicePixelRatio,height:240*window.devicePixelRatio,data:f,image:M,dotsOptions:{color:B,type:"rounded"},cornersSquareOptions:{type:"extra-rounded"},imageOptions:{imageSize:1,margin:0},backgroundOptions:{color:q},qrOptions:{errorCorrectionLevel:"L"}});_.append(a),a.lastChild.classList.add("qr-canvas");let v;_._drawingPromise?v=_._drawingPromise:v=Promise.race([C(1e3),new Promise(n=>{_._canvas._image.addEventListener("load",()=>{window.requestAnimationFrame(()=>n())},{once:!0})})]),await v.then(()=>{if(c){c.style.animation="hide-icon .4s forwards";const n=a.children[1];n.style.display="none",n.style.animation="grow-icon .4s forwards",setTimeout(()=>{n.style.display=""},150),setTimeout(()=>{n.style.animation=""},500),c=void 0}else Array.from(a.children).slice(0,-1).forEach(n=>{n.remove()})})}if(u){const p=Date.now()/1e3,f=t.expires-p-await l.managers.timeManager.getServerTimeOffset();await C(f>b?1e3*b:1e3*f|0)}}catch(t){switch(t.type){case"SESSION_PASSWORD_NEEDED":t.handled=!0,y(()=>import("./pagePassword-bVJxfvlJ.js"),__vite__mapDeps([13,1,2,3,4,6,14,7,15]),import.meta.url).then(p=>p.default.mount()),m=!0,h=null;break;default:console.error("pageSignQR: default error:",t),m=!0;break}return!0}return!1};return async()=>{m=!1;do if(m||await I(!0))break;while(!0)}};let h;const A=new H("page-signQR",!0,()=>h,()=>{h||(h=X()),h.then(e=>{e()}),l.managers.appStateManager.pushToState("authState",{_:"authStateSignQr"})}),re=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));export{re as a,G as g,A as p};
//# sourceMappingURL=pageSignQR-CMkieBNC.js.map
