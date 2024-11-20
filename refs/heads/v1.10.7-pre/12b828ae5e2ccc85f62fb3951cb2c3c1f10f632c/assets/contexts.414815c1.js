import{R as Q}from"./index.378eb34b.js";const G=Object.prototype.toString;function Z(e){switch(G.call(e)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return b(e,Error)}}function g(e,t){return G.call(e)===`[object ${t}]`}function Dt(e){return g(e,"ErrorEvent")}function wt(e){return g(e,"DOMError")}function kt(e){return g(e,"DOMException")}function R(e){return g(e,"String")}function Lt(e){return e===null||typeof e!="object"&&typeof e!="function"}function v(e){return g(e,"Object")}function tt(e){return typeof Event<"u"&&b(e,Event)}function et(e){return typeof Element<"u"&&b(e,Element)}function nt(e){return g(e,"RegExp")}function Y(e){return Boolean(e&&e.then&&typeof e.then=="function")}function vt(e){return v(e)&&"nativeEvent"in e&&"preventDefault"in e&&"stopPropagation"in e}function Pt(e){return typeof e=="number"&&e!==e}function b(e,t){try{return e instanceof t}catch{return!1}}function m(e){return e&&e.Math==Math?e:void 0}const f=typeof globalThis=="object"&&m(globalThis)||typeof window=="object"&&m(window)||typeof self=="object"&&m(self)||typeof window=="object"&&m(window)||function(){return this}()||{};function H(){return f}function P(e,t,n){const s=n||f,r=s.__SENTRY__=s.__SENTRY__||{};return r[e]||(r[e]=t())}const y=H(),st=80;function rt(e,t={}){try{let n=e;const s=5,r=[];let i=0,o=0;const c=" > ",a=c.length;let u;const S=Array.isArray(t)?t:t.keyAttrs,h=!Array.isArray(t)&&t.maxStringLength||st;for(;n&&i++<s&&(u=it(n,S),!(u==="html"||i>1&&o+r.length*a+u.length>=h));)r.push(u),o+=u.length,n=n.parentNode;return r.reverse().join(c)}catch{return"<unknown>"}}function it(e,t){const n=e,s=[];let r,i,o,c,a;if(!n||!n.tagName)return"";s.push(n.tagName.toLowerCase());const u=t&&t.length?t.filter(h=>n.getAttribute(h)).map(h=>[h,n.getAttribute(h)]):null;if(u&&u.length)u.forEach(h=>{s.push(`[${h[0]}="${h[1]}"]`)});else if(n.id&&s.push(`#${n.id}`),r=n.className,r&&R(r))for(i=r.split(/\s+/),a=0;a<i.length;a++)s.push(`.${i[a]}`);const S=["aria-label","type","name","title","alt"];for(a=0;a<S.length;a++)o=S[a],c=n.getAttribute(o),c&&s.push(`[${o}="${c}"]`);return s.join("")}function At(){try{return y.document.location.href}catch{return""}}function Bt(e){return y.document&&y.document.querySelector?y.document.querySelector(e):null}const ot="Sentry Logger ",D=["debug","info","warn","error","log","assert","trace"];function $(e){if(!("console"in f))return e();const t=f.console,n={};D.forEach(s=>{const r=t[s]&&t[s].__sentry_original__;s in t&&r&&(n[s]=t[s],t[s]=r)});try{return e()}finally{Object.keys(n).forEach(s=>{t[s]=n[s]})}}function B(){let e=!1;const t={enable:()=>{e=!0},disable:()=>{e=!1}};return typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__?D.forEach(n=>{t[n]=(...s)=>{e&&$(()=>{f.console[n](`${ot}[${n}]:`,...s)})}}):D.forEach(n=>{t[n]=()=>{}}),t}let E;typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__?E=P("logger",B):E=B();function I(e,t=0){return typeof e!="string"||t===0||e.length<=t?e:`${e.slice(0,t)}...`}function It(e,t){if(!Array.isArray(e))return"";const n=[];for(let s=0;s<e.length;s++){const r=e[s];try{n.push(String(r))}catch{n.push("[value cannot be serialized]")}}return n.join(t)}function at(e,t,n=!1){return R(e)?nt(t)?t.test(e):R(t)?n?e===t:e.includes(t):!1:!1}function Ut(e,t=[],n=!1){return t.some(s=>at(e,s,n))}function Mt(e,t,n){if(!(t in e))return;const s=e[t],r=n(s);if(typeof r=="function")try{ct(r,s)}catch{}e[t]=r}function q(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0})}function ct(e,t){const n=t.prototype||{};e.prototype=t.prototype=n,q(e,"__sentry_original__",t)}function jt(e){return e.__sentry_original__}function xt(e){return Object.keys(e).map(t=>`${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&")}function ut(e){if(Z(e))return{message:e.message,name:e.name,stack:e.stack,...M(e)};if(tt(e)){const t={type:e.type,target:U(e.target),currentTarget:U(e.currentTarget),...M(e)};return typeof CustomEvent<"u"&&b(e,CustomEvent)&&(t.detail=e.detail),t}else return e}function U(e){try{return et(e)?rt(e):Object.prototype.toString.call(e)}catch{return"<unknown>"}}function M(e){if(typeof e=="object"&&e!==null){const t={};for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}else return{}}function Gt(e,t=40){const n=Object.keys(ut(e));if(n.sort(),!n.length)return"[object has no keys]";if(n[0].length>=t)return I(n[0],t);for(let s=n.length;s>0;s--){const r=n.slice(0,s).join(", ");if(!(r.length>t))return s===n.length?r:I(r,t)}return""}function _t(e){return w(e,new Map)}function w(e,t){if(v(e)){const n=t.get(e);if(n!==void 0)return n;const s={};t.set(e,s);for(const r of Object.keys(e))typeof e[r]<"u"&&(s[r]=w(e[r],t));return s}if(Array.isArray(e)){const n=t.get(e);if(n!==void 0)return n;const s=[];return t.set(e,s),e.forEach(r=>{s.push(w(r,t))}),s}return e}function p(){const e=f,t=e.crypto||e.msCrypto;if(t&&t.randomUUID)return t.randomUUID().replace(/-/g,"");const n=t&&t.getRandomValues?()=>t.getRandomValues(new Uint8Array(1))[0]:()=>Math.random()*16;return([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g,s=>(s^(n()&15)>>s/4).toString(16))}function C(e){return e.exception&&e.exception.values?e.exception.values[0]:void 0}function Yt(e){const{message:t,event_id:n}=e;if(t)return t;const s=C(e);return s?s.type&&s.value?`${s.type}: ${s.value}`:s.type||s.value||n||"<unknown>":n||"<unknown>"}function Ht(e,t,n){const s=e.exception=e.exception||{},r=s.values=s.values||[],i=r[0]=r[0]||{};i.value||(i.value=t||""),i.type||(i.type=n||"Error")}function $t(e,t){const n=C(e);if(!n)return;const s={type:"generic",handled:!0},r=n.mechanism;if(n.mechanism={...s,...r,...t},t&&"data"in t){const i={...r&&r.data,...t.data};n.mechanism.data=i}}function qt(e){if(e&&e.__sentry_captured__)return!0;try{q(e,"__sentry_captured__",!0)}catch{}return!1}function ft(e){return Array.isArray(e)?e:[e]}function ht(){return typeof __SENTRY_BROWSER_BUNDLE__<"u"&&!!__SENTRY_BROWSER_BUNDLE__}function Ct(){return"npm"}function dt(){return!ht()&&Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]"}function lt(e,t){return e.require(t)}var d;(function(e){e[e.PENDING=0]="PENDING";const n=1;e[e.RESOLVED=n]="RESOLVED";const s=2;e[e.REJECTED=s]="REJECTED"})(d||(d={}));function Ft(e){return new _(t=>{t(e)})}function Jt(e){return new _((t,n)=>{n(e)})}class _{__init(){this._state=d.PENDING}__init2(){this._handlers=[]}constructor(t){_.prototype.__init.call(this),_.prototype.__init2.call(this),_.prototype.__init3.call(this),_.prototype.__init4.call(this),_.prototype.__init5.call(this),_.prototype.__init6.call(this);try{t(this._resolve,this._reject)}catch(n){this._reject(n)}}then(t,n){return new _((s,r)=>{this._handlers.push([!1,i=>{if(!t)s(i);else try{s(t(i))}catch(o){r(o)}},i=>{if(!n)r(i);else try{s(n(i))}catch(o){r(o)}}]),this._executeHandlers()})}catch(t){return this.then(n=>n,t)}finally(t){return new _((n,s)=>{let r,i;return this.then(o=>{i=!1,r=o,t&&t()},o=>{i=!0,r=o,t&&t()}).then(()=>{if(i){s(r);return}n(r)})})}__init3(){this._resolve=t=>{this._setResult(d.RESOLVED,t)}}__init4(){this._reject=t=>{this._setResult(d.REJECTED,t)}}__init5(){this._setResult=(t,n)=>{if(this._state===d.PENDING){if(Y(n)){n.then(this._resolve,this._reject);return}this._state=t,this._value=n,this._executeHandlers()}}}__init6(){this._executeHandlers=()=>{if(this._state===d.PENDING)return;const t=this._handlers.slice();this._handlers=[],t.forEach(n=>{n[0]||(this._state===d.RESOLVED&&n[1](this._value),this._state===d.REJECTED&&n[2](this._value),n[0]=!0)})}}}const F=H(),k={nowSeconds:()=>Date.now()/1e3};function gt(){const{performance:e}=F;if(!e||!e.now)return;const t=Date.now()-e.now();return{now:()=>e.now(),timeOrigin:t}}function pt(){try{return lt(module,"perf_hooks").performance}catch{return}}const O=dt()?pt():gt(),j=O===void 0?k:{nowSeconds:()=>(O.timeOrigin+O.now())/1e3},J=k.nowSeconds.bind(k),A=j.nowSeconds.bind(j),Wt=A,Kt=(()=>{const{performance:e}=F;if(!e||!e.now)return;const t=3600*1e3,n=e.now(),s=Date.now(),r=e.timeOrigin?Math.abs(e.timeOrigin+n-s):t,i=r<t,o=e.timing&&e.timing.navigationStart,a=typeof o=="number"?Math.abs(o+n-s):t,u=a<t;return i||u?r<=a?e.timeOrigin:o:s})(),Et="production";function St(e){const t=A(),n={sid:p(),init:!0,timestamp:t,started:t,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>yt(n)};return e&&T(n,e),n}function T(e,t={}){if(t.user&&(!e.ipAddress&&t.user.ip_address&&(e.ipAddress=t.user.ip_address),!e.did&&!t.did&&(e.did=t.user.id||t.user.email||t.user.username)),e.timestamp=t.timestamp||A(),t.ignoreDuration&&(e.ignoreDuration=t.ignoreDuration),t.sid&&(e.sid=t.sid.length===32?t.sid:p()),t.init!==void 0&&(e.init=t.init),!e.did&&t.did&&(e.did=`${t.did}`),typeof t.started=="number"&&(e.started=t.started),e.ignoreDuration)e.duration=void 0;else if(typeof t.duration=="number")e.duration=t.duration;else{const n=e.timestamp-e.started;e.duration=n>=0?n:0}t.release&&(e.release=t.release),t.environment&&(e.environment=t.environment),!e.ipAddress&&t.ipAddress&&(e.ipAddress=t.ipAddress),!e.userAgent&&t.userAgent&&(e.userAgent=t.userAgent),typeof t.errors=="number"&&(e.errors=t.errors),t.status&&(e.status=t.status)}function mt(e,t){let n={};t?n={status:t}:e.status==="ok"&&(n={status:"exited"}),T(e,n)}function yt(e){return _t({sid:`${e.sid}`,init:e.init,started:new Date(e.started*1e3).toISOString(),timestamp:new Date(e.timestamp*1e3).toISOString(),status:e.status,errors:e.errors,did:typeof e.did=="number"||typeof e.did=="string"?`${e.did}`:void 0,duration:e.duration,attrs:{release:e.release,environment:e.environment,ip_address:e.ipAddress,user_agent:e.userAgent}})}const bt=100;class l{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={}}static clone(t){const n=new l;return t&&(n._breadcrumbs=[...t._breadcrumbs],n._tags={...t._tags},n._extra={...t._extra},n._contexts={...t._contexts},n._user=t._user,n._level=t._level,n._span=t._span,n._session=t._session,n._transactionName=t._transactionName,n._fingerprint=t._fingerprint,n._eventProcessors=[...t._eventProcessors],n._requestSession=t._requestSession,n._attachments=[...t._attachments],n._sdkProcessingMetadata={...t._sdkProcessingMetadata}),n}addScopeListener(t){this._scopeListeners.push(t)}addEventProcessor(t){return this._eventProcessors.push(t),this}setUser(t){return this._user=t||{},this._session&&T(this._session,{user:t}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(t){return this._requestSession=t,this}setTags(t){return this._tags={...this._tags,...t},this._notifyScopeListeners(),this}setTag(t,n){return this._tags={...this._tags,[t]:n},this._notifyScopeListeners(),this}setExtras(t){return this._extra={...this._extra,...t},this._notifyScopeListeners(),this}setExtra(t,n){return this._extra={...this._extra,[t]:n},this._notifyScopeListeners(),this}setFingerprint(t){return this._fingerprint=t,this._notifyScopeListeners(),this}setLevel(t){return this._level=t,this._notifyScopeListeners(),this}setTransactionName(t){return this._transactionName=t,this._notifyScopeListeners(),this}setContext(t,n){return n===null?delete this._contexts[t]:this._contexts[t]=n,this._notifyScopeListeners(),this}setSpan(t){return this._span=t,this._notifyScopeListeners(),this}getSpan(){return this._span}getTransaction(){const t=this.getSpan();return t&&t.transaction}setSession(t){return t?this._session=t:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(t){if(!t)return this;if(typeof t=="function"){const n=t(this);return n instanceof l?n:this}return t instanceof l?(this._tags={...this._tags,...t._tags},this._extra={...this._extra,...t._extra},this._contexts={...this._contexts,...t._contexts},t._user&&Object.keys(t._user).length&&(this._user=t._user),t._level&&(this._level=t._level),t._fingerprint&&(this._fingerprint=t._fingerprint),t._requestSession&&(this._requestSession=t._requestSession)):v(t)&&(t=t,this._tags={...this._tags,...t.tags},this._extra={...this._extra,...t.extra},this._contexts={...this._contexts,...t.contexts},t.user&&(this._user=t.user),t.level&&(this._level=t.level),t.fingerprint&&(this._fingerprint=t.fingerprint),t.requestSession&&(this._requestSession=t.requestSession)),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this._attachments=[],this}addBreadcrumb(t,n){const s=typeof n=="number"?n:bt;if(s<=0)return this;const r={timestamp:J(),...t};return this._breadcrumbs=[...this._breadcrumbs,r].slice(-s),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(t){return this._attachments.push(t),this}getAttachments(){return this._attachments}clearAttachments(){return this._attachments=[],this}applyToEvent(t,n={}){if(this._extra&&Object.keys(this._extra).length&&(t.extra={...this._extra,...t.extra}),this._tags&&Object.keys(this._tags).length&&(t.tags={...this._tags,...t.tags}),this._user&&Object.keys(this._user).length&&(t.user={...this._user,...t.user}),this._contexts&&Object.keys(this._contexts).length&&(t.contexts={...this._contexts,...t.contexts}),this._level&&(t.level=this._level),this._transactionName&&(t.transaction=this._transactionName),this._span){t.contexts={trace:this._span.getTraceContext(),...t.contexts};const s=this._span.transaction;if(s){t.sdkProcessingMetadata={dynamicSamplingContext:s.getDynamicSamplingContext(),...t.sdkProcessingMetadata};const r=s.name;r&&(t.tags={transaction:r,...t.tags})}}return this._applyFingerprint(t),t.breadcrumbs=[...t.breadcrumbs||[],...this._breadcrumbs],t.breadcrumbs=t.breadcrumbs.length>0?t.breadcrumbs:void 0,t.sdkProcessingMetadata={...t.sdkProcessingMetadata,...this._sdkProcessingMetadata},this._notifyEventProcessors([...W(),...this._eventProcessors],t,n)}setSDKProcessingMetadata(t){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...t},this}_notifyEventProcessors(t,n,s,r=0){return new _((i,o)=>{const c=t[r];if(n===null||typeof c!="function")i(n);else{const a=c({...n},s);(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&c.id&&a===null&&E.log(`Event processor "${c.id}" dropped event`),Y(a)?a.then(u=>this._notifyEventProcessors(t,u,s,r+1).then(i)).then(null,o):this._notifyEventProcessors(t,a,s,r+1).then(i).then(null,o)}})}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(t=>{t(this)}),this._notifyingListeners=!1)}_applyFingerprint(t){t.fingerprint=t.fingerprint?ft(t.fingerprint):[],this._fingerprint&&(t.fingerprint=t.fingerprint.concat(this._fingerprint)),t.fingerprint&&!t.fingerprint.length&&delete t.fingerprint}}function W(){return P("globalEventProcessors",()=>[])}function Vt(e){W().push(e)}const K=4,Tt=100;class V{constructor(t,n=new l,s=K){this._version=s,this._stack=[{scope:n}],t&&this.bindClient(t)}isOlderThan(t){return this._version<t}bindClient(t){const n=this.getStackTop();n.client=t,t&&t.setupIntegrations&&t.setupIntegrations()}pushScope(){const t=l.clone(this.getScope());return this.getStack().push({client:this.getClient(),scope:t}),t}popScope(){return this.getStack().length<=1?!1:!!this.getStack().pop()}withScope(t){const n=this.pushScope();try{t(n)}finally{this.popScope()}}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getStack(){return this._stack}getStackTop(){return this._stack[this._stack.length-1]}captureException(t,n){const s=this._lastEventId=n&&n.event_id?n.event_id:p(),r=new Error("Sentry syntheticException");return this._withClient((i,o)=>{i.captureException(t,{originalException:t,syntheticException:r,...n,event_id:s},o)}),s}captureMessage(t,n,s){const r=this._lastEventId=s&&s.event_id?s.event_id:p(),i=new Error(t);return this._withClient((o,c)=>{o.captureMessage(t,n,{originalException:t,syntheticException:i,...s,event_id:r},c)}),r}captureEvent(t,n){const s=n&&n.event_id?n.event_id:p();return t.type||(this._lastEventId=s),this._withClient((r,i)=>{r.captureEvent(t,{...n,event_id:s},i)}),s}lastEventId(){return this._lastEventId}addBreadcrumb(t,n){const{scope:s,client:r}=this.getStackTop();if(!r)return;const{beforeBreadcrumb:i=null,maxBreadcrumbs:o=Tt}=r.getOptions&&r.getOptions()||{};if(o<=0)return;const a={timestamp:J(),...t},u=i?$(()=>i(a,n)):a;u!==null&&(r.emit&&r.emit("beforeAddBreadcrumb",u,n),s.addBreadcrumb(u,o))}setUser(t){this.getScope().setUser(t)}setTags(t){this.getScope().setTags(t)}setExtras(t){this.getScope().setExtras(t)}setTag(t,n){this.getScope().setTag(t,n)}setExtra(t,n){this.getScope().setExtra(t,n)}setContext(t,n){this.getScope().setContext(t,n)}configureScope(t){const{scope:n,client:s}=this.getStackTop();s&&t(n)}run(t){const n=x(this);try{t(this)}finally{x(n)}}getIntegration(t){const n=this.getClient();if(!n)return null;try{return n.getIntegration(t)}catch{return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&E.warn(`Cannot retrieve integration ${t.id} from the current Hub`),null}}startTransaction(t,n){const s=this._callExtensionMethod("startTransaction",t,n);return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&!s&&console.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`),s}traceHeaders(){return this._callExtensionMethod("traceHeaders")}captureSession(t=!1){if(t)return this.endSession();this._sendSessionUpdate()}endSession(){const n=this.getStackTop().scope,s=n.getSession();s&&mt(s),this._sendSessionUpdate(),n.setSession()}startSession(t){const{scope:n,client:s}=this.getStackTop(),{release:r,environment:i=Et}=s&&s.getOptions()||{},{userAgent:o}=f.navigator||{},c=St({release:r,environment:i,user:n.getUser(),...o&&{userAgent:o},...t}),a=n.getSession&&n.getSession();return a&&a.status==="ok"&&T(a,{status:"exited"}),this.endSession(),n.setSession(c),c}shouldSendDefaultPii(){const t=this.getClient(),n=t&&t.getOptions();return Boolean(n&&n.sendDefaultPii)}_sendSessionUpdate(){const{scope:t,client:n}=this.getStackTop(),s=t.getSession();s&&n&&n.captureSession&&n.captureSession(s)}_withClient(t){const{scope:n,client:s}=this.getStackTop();s&&t(s,n)}_callExtensionMethod(t,...n){const r=N().__SENTRY__;if(r&&r.extensions&&typeof r.extensions[t]=="function")return r.extensions[t].apply(this,n);(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&E.warn(`Extension method ${t} couldn't be found, doing nothing.`)}}function N(){return f.__SENTRY__=f.__SENTRY__||{extensions:{},hub:void 0},f}function x(e){const t=N(),n=L(t);return z(t,e),n}function X(){const e=N();if(e.__SENTRY__&&e.__SENTRY__.acs){const t=e.__SENTRY__.acs.getCurrentHub();if(t)return t}return Nt(e)}function Nt(e=N()){return(!Ot(e)||L(e).isOlderThan(K))&&z(e,new V),L(e)}function Ot(e){return!!(e&&e.__SENTRY__&&e.__SENTRY__.hub)}function L(e){return P("hub",()=>new V,e)}function z(e,t){if(!e)return!1;const n=e.__SENTRY__=e.__SENTRY__||{};return n.hub=t,!0}function Xt(e,t){return X().captureException(e,{captureContext:t})}function zt(e){X().withScope(e)}const Qt=Q.createContext({error:null,setError:()=>{throw new Error("Expected setError to be initialized")}});export{ct as A,q as B,D as C,Et as D,zt as E,Ht as F,f as G,$t as H,Xt as I,Dt as J,wt as K,kt as L,Z as M,tt as N,Gt as O,rt as P,It as Q,Ct as R,_ as S,At as T,b as U,Qt as V,Wt as W,N as X,Kt as Y,Bt as Z,Pt as a,vt as b,ut as c,Ft as d,_t as e,Mt as f,H as g,J as h,R as i,ft as j,Vt as k,E as l,X as m,p as n,l as o,qt as p,Lt as q,Jt as r,T as s,I as t,xt as u,Y as v,v as w,jt as x,Yt as y,Ut as z};
