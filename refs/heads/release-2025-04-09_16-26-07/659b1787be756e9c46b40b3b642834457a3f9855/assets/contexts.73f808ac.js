import{R as kt}from"./index.4dc8374d.js";const ft=Object.prototype.toString;function At(e){switch(ft.call(e)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return L(e,Error)}}function D(e,t){return ft.call(e)===`[object ${t}]`}function Be(e){return D(e,"ErrorEvent")}function Fe(e){return D(e,"DOMError")}function He(e){return D(e,"DOMException")}function P(e){return D(e,"String")}function wt(e){return typeof e=="object"&&e!==null&&"__sentry_template_string__"in e&&"__sentry_template_values__"in e}function ze(e){return e===null||wt(e)||typeof e!="object"&&typeof e!="function"}function Y(e){return D(e,"Object")}function Pt(e){return typeof Event<"u"&&L(e,Event)}function Mt(e){return typeof Element<"u"&&L(e,Element)}function Lt(e){return D(e,"RegExp")}function q(e){return Boolean(e&&e.then&&typeof e.then=="function")}function jt(e){return Y(e)&&"nativeEvent"in e&&"preventDefault"in e&&"stopPropagation"in e}function vt(e){return typeof e=="number"&&e!==e}function L(e,t){try{return e instanceof t}catch{return!1}}function lt(e){return!!(typeof e=="object"&&e!==null&&(e.__isVue||e._isVue))}function N(e,t=0){return typeof e!="string"||t===0||e.length<=t?e:`${e.slice(0,t)}...`}function Ye(e,t){if(!Array.isArray(e))return"";const n=[];for(let r=0;r<e.length;r++){const s=e[r];try{lt(s)?n.push("[VueViewModel]"):n.push(String(s))}catch{n.push("[value cannot be serialized]")}}return n.join(t)}function Gt(e,t,n=!1){return P(e)?Lt(t)?t.test(e):P(t)?n?e===t:e.includes(t):!1:!1}function qe(e,t=[],n=!1){return t.some(r=>Gt(e,r,n))}function A(e){return e&&e.Math==Math?e:void 0}const g=typeof globalThis=="object"&&A(globalThis)||typeof window=="object"&&A(window)||typeof self=="object"&&A(self)||typeof window=="object"&&A(window)||function(){return this}()||{};function $t(){return g}function pt(e,t,n){const r=n||g,s=r.__SENTRY__=r.__SENTRY__||{};return s[e]||(s[e]=t())}const C=$t(),Ut=80;function Bt(e,t={}){if(!e)return"<unknown>";try{let n=e;const r=5,s=[];let i=0,o=0;const c=" > ",a=c.length;let u;const f=Array.isArray(t)?t:t.keyAttrs,l=!Array.isArray(t)&&t.maxStringLength||Ut;for(;n&&i++<r&&(u=Ft(n,f),!(u==="html"||i>1&&o+s.length*a+u.length>=l));)s.push(u),o+=u.length,n=n.parentNode;return s.reverse().join(c)}catch{return"<unknown>"}}function Ft(e,t){const n=e,r=[];let s,i,o,c,a;if(!n||!n.tagName)return"";if(C.HTMLElement&&n instanceof HTMLElement&&n.dataset&&n.dataset.sentryComponent)return n.dataset.sentryComponent;r.push(n.tagName.toLowerCase());const u=t&&t.length?t.filter(l=>n.getAttribute(l)).map(l=>[l,n.getAttribute(l)]):null;if(u&&u.length)u.forEach(l=>{r.push(`[${l[0]}="${l[1]}"]`)});else if(n.id&&r.push(`#${n.id}`),s=n.className,s&&P(s))for(i=s.split(/\s+/),a=0;a<i.length;a++)r.push(`.${i[a]}`);const f=["aria-label","type","name","title","alt"];for(a=0;a<f.length;a++)o=f[a],c=n.getAttribute(o),c&&r.push(`[${o}="${c}"]`);return r.join("")}function Je(){try{return C.document.location.href}catch{return""}}function Ke(e){return C.document&&C.document.querySelector?C.document.querySelector(e):null}function Ve(e){if(!C.HTMLElement)return null;let t=e;const n=5;for(let r=0;r<n;r++){if(!t)return null;if(t instanceof HTMLElement&&t.dataset.sentryComponent)return t.dataset.sentryComponent;t=t.parentNode}return null}const J=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,Ht="Sentry Logger ",Q=["debug","info","warn","error","log","assert","trace"],Z={};function dt(e){if(!("console"in g))return e();const t=g.console,n={},r=Object.keys(Z);r.forEach(s=>{const i=Z[s];n[s]=t[s],t[s]=i});try{return e()}finally{r.forEach(s=>{t[s]=n[s]})}}function zt(){let e=!1;const t={enable:()=>{e=!0},disable:()=>{e=!1},isEnabled:()=>e};return J?Q.forEach(n=>{t[n]=(...r)=>{e&&dt(()=>{g.console[n](`${Ht}[${n}]:`,...r)})}}):Q.forEach(n=>{t[n]=()=>{}}),t}const S=zt();function We(e,t,n){if(!(t in e))return;const r=e[t],s=n(r);typeof s=="function"&&Yt(s,r),e[t]=s}function gt(e,t,n){try{Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0})}catch{J&&S.log(`Failed to add non-enumerable property "${t}" to object`,e)}}function Yt(e,t){try{const n=t.prototype||{};e.prototype=t.prototype=n,gt(e,"__sentry_original__",t)}catch{}}function Xe(e){return e.__sentry_original__}function Qe(e){return Object.keys(e).map(t=>`${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&")}function ht(e){if(At(e))return{message:e.message,name:e.name,stack:e.stack,...et(e)};if(Pt(e)){const t={type:e.type,target:tt(e.target),currentTarget:tt(e.currentTarget),...et(e)};return typeof CustomEvent<"u"&&L(e,CustomEvent)&&(t.detail=e.detail),t}else return e}function tt(e){try{return Mt(e)?Bt(e):Object.prototype.toString.call(e)}catch{return"<unknown>"}}function et(e){if(typeof e=="object"&&e!==null){const t={};for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}else return{}}function Ze(e,t=40){const n=Object.keys(ht(e));if(n.sort(),!n.length)return"[object has no keys]";if(n[0].length>=t)return N(n[0],t);for(let r=n.length;r>0;r--){const s=n.slice(0,r).join(", ");if(!(s.length>t))return r===n.length?s:N(s,t)}return""}function T(e){return F(e,new Map)}function F(e,t){if(qt(e)){const n=t.get(e);if(n!==void 0)return n;const r={};t.set(e,r);for(const s of Object.keys(e))typeof e[s]<"u"&&(r[s]=F(e[s],t));return r}if(Array.isArray(e)){const n=t.get(e);if(n!==void 0)return n;const r=[];return t.set(e,r),e.forEach(s=>{r.push(F(s,t))}),r}return e}function qt(e){if(!Y(e))return!1;try{const t=Object.getPrototypeOf(e).constructor.name;return!t||t==="Object"}catch{return!0}}const _t=50,nt=/\(error: (.*)\)/,rt=/captureMessage|captureException/;function Jt(...e){const t=e.sort((n,r)=>n[0]-r[0]).map(n=>n[1]);return(n,r=0)=>{const s=[],i=n.split(`
`);for(let o=r;o<i.length;o++){const c=i[o];if(c.length>1024)continue;const a=nt.test(c)?c.replace(nt,"$1"):c;if(!a.match(/\S*Error: /)){for(const u of t){const f=u(a);if(f){s.push(f);break}}if(s.length>=_t)break}}return Kt(s)}}function tn(e){return Array.isArray(e)?Jt(...e):e}function Kt(e){if(!e.length)return[];const t=Array.from(e);return/sentryWrapped/.test(t[t.length-1].function||"")&&t.pop(),t.reverse(),rt.test(t[t.length-1].function||"")&&(t.pop(),rt.test(t[t.length-1].function||"")&&t.pop()),t.slice(0,_t).map(n=>({...n,filename:n.filename||t[t.length-1].filename,function:n.function||"?"}))}const U="<anonymous>";function Vt(e){try{return!e||typeof e!="function"?U:e.name||U}catch{return U}}function p(){const e=g,t=e.crypto||e.msCrypto;let n=()=>Math.random()*16;try{if(t&&t.randomUUID)return t.randomUUID().replace(/-/g,"");t&&t.getRandomValues&&(n=()=>{const r=new Uint8Array(1);return t.getRandomValues(r),r[0]})}catch{}return([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g,r=>(r^(n()&15)>>r/4).toString(16))}function mt(e){return e.exception&&e.exception.values?e.exception.values[0]:void 0}function en(e){const{message:t,event_id:n}=e;if(t)return t;const r=mt(e);return r?r.type&&r.value?`${r.type}: ${r.value}`:r.type||r.value||n||"<unknown>":n||"<unknown>"}function nn(e,t,n){const r=e.exception=e.exception||{},s=r.values=r.values||[],i=s[0]=s[0]||{};i.value||(i.value=t||""),i.type||(i.type=n||"Error")}function Wt(e,t){const n=mt(e);if(!n)return;const r={type:"generic",handled:!0},s=n.mechanism;if(n.mechanism={...r,...s,...t},t&&"data"in t){const i={...s&&s.data,...t.data};n.mechanism.data=i}}function rn(e){if(e&&e.__sentry_captured__)return!0;try{gt(e,"__sentry_captured__",!0)}catch{}return!1}function Xt(e){return Array.isArray(e)?e:[e]}function Qt(){const e=typeof WeakSet=="function",t=e?new WeakSet:[];function n(s){if(e)return t.has(s)?!0:(t.add(s),!1);for(let i=0;i<t.length;i++)if(t[i]===s)return!0;return t.push(s),!1}function r(s){if(e)t.delete(s);else for(let i=0;i<t.length;i++)if(t[i]===s){t.splice(i,1);break}}return[n,r]}function x(e,t=100,n=1/0){try{return H("",e,t,n)}catch(r){return{ERROR:`**non-serializable** (${r})`}}}function Zt(e,t=3,n=100*1024){const r=x(e,t);return re(r)>n?Zt(e,t-1,n):r}function H(e,t,n=1/0,r=1/0,s=Qt()){const[i,o]=s;if(t==null||["number","boolean","string"].includes(typeof t)&&!vt(t))return t;const c=te(e,t);if(!c.startsWith("[object "))return c;if(t.__sentry_skip_normalization__)return t;const a=typeof t.__sentry_override_normalization_depth__=="number"?t.__sentry_override_normalization_depth__:n;if(a===0)return c.replace("object ","");if(i(t))return"[Circular ~]";const u=t;if(u&&typeof u.toJSON=="function")try{const d=u.toJSON();return H("",d,a-1,r,s)}catch{}const f=Array.isArray(t)?[]:{};let l=0;const h=ht(t);for(const d in h){if(!Object.prototype.hasOwnProperty.call(h,d))continue;if(l>=r){f[d]="[MaxProperties ~]";break}const O=h[d];f[d]=H(d,O,a-1,r,s),l++}return o(t),f}function te(e,t){try{if(e==="domain"&&t&&typeof t=="object"&&t._events)return"[Domain]";if(e==="domainEmitter")return"[DomainEmitter]";if(typeof window<"u"&&t===window)return"[Global]";if(typeof window<"u"&&t===window)return"[Window]";if(typeof document<"u"&&t===document)return"[Document]";if(lt(t))return"[VueViewModel]";if(jt(t))return"[SyntheticEvent]";if(typeof t=="number"&&t!==t)return"[NaN]";if(typeof t=="function")return`[Function: ${Vt(t)}]`;if(typeof t=="symbol")return`[${String(t)}]`;if(typeof t=="bigint")return`[BigInt: ${String(t)}]`;const n=ee(t);return/^HTML(\w*)Element$/.test(n)?`[HTMLElement: ${n}]`:`[object ${n}]`}catch(n){return`**non-serializable** (${n})`}}function ee(e){const t=Object.getPrototypeOf(e);return t?t.constructor.name:"null prototype"}function ne(e){return~-encodeURI(e).split(/%..|./).length}function re(e){return ne(JSON.stringify(e))}var E;(function(e){e[e.PENDING=0]="PENDING";const n=1;e[e.RESOLVED=n]="RESOLVED";const r=2;e[e.REJECTED=r]="REJECTED"})(E||(E={}));function sn(e){return new m(t=>{t(e)})}function on(e){return new m((t,n)=>{n(e)})}class m{constructor(t){m.prototype.__init.call(this),m.prototype.__init2.call(this),m.prototype.__init3.call(this),m.prototype.__init4.call(this),this._state=E.PENDING,this._handlers=[];try{t(this._resolve,this._reject)}catch(n){this._reject(n)}}then(t,n){return new m((r,s)=>{this._handlers.push([!1,i=>{if(!t)r(i);else try{r(t(i))}catch(o){s(o)}},i=>{if(!n)s(i);else try{r(n(i))}catch(o){s(o)}}]),this._executeHandlers()})}catch(t){return this.then(n=>n,t)}finally(t){return new m((n,r)=>{let s,i;return this.then(o=>{i=!1,s=o,t&&t()},o=>{i=!0,s=o,t&&t()}).then(()=>{if(i){r(s);return}n(s)})})}__init(){this._resolve=t=>{this._setResult(E.RESOLVED,t)}}__init2(){this._reject=t=>{this._setResult(E.REJECTED,t)}}__init3(){this._setResult=(t,n)=>{if(this._state===E.PENDING){if(q(n)){n.then(this._resolve,this._reject);return}this._state=t,this._value=n,this._executeHandlers()}}}__init4(){this._executeHandlers=()=>{if(this._state===E.PENDING)return;const t=this._handlers.slice();this._handlers=[],t.forEach(n=>{n[0]||(this._state===E.RESOLVED&&n[1](this._value),this._state===E.REJECTED&&n[2](this._value),n[0]=!0)})}}}const St=1e3;function j(){return Date.now()/St}function se(){const{performance:e}=g;if(!e||!e.now)return j;const t=Date.now()-e.now(),n=e.timeOrigin==null?t:e.timeOrigin;return()=>(n+e.now())/St}const K=se(),an=(()=>{const{performance:e}=g;if(!e||!e.now)return;const t=3600*1e3,n=e.now(),r=Date.now(),s=e.timeOrigin?Math.abs(e.timeOrigin+n-r):t,i=s<t,o=e.timing&&e.timing.navigationStart,a=typeof o=="number"?Math.abs(o+n-r):t,u=a<t;return i||u?s<=a?e.timeOrigin:o:r})(),cn="baggage",Et="sentry-",ie=/^sentry-/,oe=8192;function ae(e){if(!P(e)&&!Array.isArray(e))return;let t={};if(Array.isArray(e))t=e.reduce((r,s)=>{const i=st(s);for(const o of Object.keys(i))r[o]=i[o];return r},{});else{if(!e)return;t=st(e)}const n=Object.entries(t).reduce((r,[s,i])=>{if(s.match(ie)){const o=s.slice(Et.length);r[o]=i}return r},{});if(Object.keys(n).length>0)return n}function un(e){if(!e)return;const t=Object.entries(e).reduce((n,[r,s])=>(s&&(n[`${Et}${r}`]=s),n),{});return ce(t)}function st(e){return e.split(",").map(t=>t.split("=").map(n=>decodeURIComponent(n.trim()))).reduce((t,[n,r])=>(t[n]=r,t),{})}function ce(e){if(Object.keys(e).length!==0)return Object.entries(e).reduce((t,[n,r],s)=>{const i=`${encodeURIComponent(n)}=${encodeURIComponent(r)}`,o=s===0?i:`${t},${i}`;return o.length>oe?(J&&S.warn(`Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`),t):o},"")}const ue=new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");function fe(e){if(!e)return;const t=e.match(ue);if(!t)return;let n;return t[3]==="1"?n=!0:t[3]==="0"&&(n=!1),{traceId:t[1],parentSampled:n,parentSpanId:t[2]}}function fn(e,t){const n=fe(e),r=ae(t),{traceId:s,parentSpanId:i,parentSampled:o}=n||{};return n?{traceId:s||p(),parentSpanId:i||p().substring(16),spanId:p().substring(16),sampled:o,dsc:r||{}}:{traceId:s||p(),spanId:p().substring(16)}}function le(e=p(),t=p().substring(16),n){let r="";return n!==void 0&&(r=n?"-1":"-0"),`${e}-${t}${r}`}const w=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,v="production";function V(){return pt("globalEventProcessors",()=>[])}function ln(e){V().push(e)}function M(e,t,n,r=0){return new m((s,i)=>{const o=e[r];if(t===null||typeof o!="function")s(t);else{const c=o({...t},n);w&&o.id&&c===null&&S.log(`Event processor "${o.id}" dropped event`),q(c)?c.then(a=>M(e,a,n,r+1).then(s)).then(null,i):M(e,c,n,r+1).then(s).then(null,i)}})}function yt(e){const t=K(),n={sid:p(),init:!0,timestamp:t,started:t,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>pe(n)};return e&&k(n,e),n}function k(e,t={}){if(t.user&&(!e.ipAddress&&t.user.ip_address&&(e.ipAddress=t.user.ip_address),!e.did&&!t.did&&(e.did=t.user.id||t.user.email||t.user.username)),e.timestamp=t.timestamp||K(),t.abnormal_mechanism&&(e.abnormal_mechanism=t.abnormal_mechanism),t.ignoreDuration&&(e.ignoreDuration=t.ignoreDuration),t.sid&&(e.sid=t.sid.length===32?t.sid:p()),t.init!==void 0&&(e.init=t.init),!e.did&&t.did&&(e.did=`${t.did}`),typeof t.started=="number"&&(e.started=t.started),e.ignoreDuration)e.duration=void 0;else if(typeof t.duration=="number")e.duration=t.duration;else{const n=e.timestamp-e.started;e.duration=n>=0?n:0}t.release&&(e.release=t.release),t.environment&&(e.environment=t.environment),!e.ipAddress&&t.ipAddress&&(e.ipAddress=t.ipAddress),!e.userAgent&&t.userAgent&&(e.userAgent=t.userAgent),typeof t.errors=="number"&&(e.errors=t.errors),t.status&&(e.status=t.status)}function bt(e,t){let n={};t?n={status:t}:e.status==="ok"&&(n={status:"exited"}),k(e,n)}function pe(e){return T({sid:`${e.sid}`,init:e.init,started:new Date(e.started*1e3).toISOString(),timestamp:new Date(e.timestamp*1e3).toISOString(),status:e.status,errors:e.errors,did:typeof e.did=="number"||typeof e.did=="string"?`${e.did}`:void 0,duration:e.duration,abnormal_mechanism:e.abnormal_mechanism,attrs:{release:e.release,environment:e.environment,ip_address:e.ipAddress,user_agent:e.userAgent}})}const pn=0,de=1;function ge(e){const{spanId:t,traceId:n}=e.spanContext(),{data:r,op:s,parent_span_id:i,status:o,tags:c,origin:a}=R(e);return T({data:r,op:s,parent_span_id:i,span_id:t,status:o,tags:c,trace_id:n,origin:a})}function dn(e){const{traceId:t,spanId:n}=e.spanContext(),r=xt(e);return le(t,n,r)}function gn(e){return typeof e=="number"?it(e):Array.isArray(e)?e[0]+e[1]/1e9:e instanceof Date?it(e.getTime()):K()}function it(e){return e>9999999999?e/1e3:e}function R(e){return he(e)?e.getSpanJSON():typeof e.toJSON=="function"?e.toJSON():{}}function he(e){return typeof e.getSpanJSON=="function"}function xt(e){const{traceFlags:t}=e.spanContext();return Boolean(t&de)}function hn(e,t,n,r,s,i){const{normalizeDepth:o=3,normalizeMaxBreadth:c=1e3}=e,a={...t,event_id:t.event_id||n.event_id||p(),timestamp:t.timestamp||j()},u=n.integrations||e.integrations.map(_=>_.name);_e(a,e),Ee(a,u),t.type===void 0&&me(a,e.stackParser);const f=be(r,n.captureContext);n.mechanism&&Wt(a,n.mechanism);const l=s&&s.getEventProcessors?s.getEventProcessors():[],h=Me().getScopeData();if(i){const _=i.getScopeData();at(h,_)}if(f){const _=f.getScopeData();at(h,_)}const d=[...n.attachments||[],...h.attachments];d.length&&(n.attachments=d),Dt(a,h);const O=[...l,...V(),...h.eventProcessors];return M(O,a,n).then(_=>(_&&Se(_),typeof o=="number"&&o>0?ye(_,o,c):_))}function _e(e,t){const{environment:n,release:r,dist:s,maxValueLength:i=250}=t;"environment"in e||(e.environment="environment"in t?n:v),e.release===void 0&&r!==void 0&&(e.release=r),e.dist===void 0&&s!==void 0&&(e.dist=s),e.message&&(e.message=N(e.message,i));const o=e.exception&&e.exception.values&&e.exception.values[0];o&&o.value&&(o.value=N(o.value,i));const c=e.request;c&&c.url&&(c.url=N(c.url,i))}const ot=new WeakMap;function me(e,t){const n=g._sentryDebugIds;if(!n)return;let r;const s=ot.get(t);s?r=s:(r=new Map,ot.set(t,r));const i=Object.keys(n).reduce((o,c)=>{let a;const u=r.get(c);u?a=u:(a=t(c),r.set(c,a));for(let f=a.length-1;f>=0;f--){const l=a[f];if(l.filename){o[l.filename]=n[c];break}}return o},{});try{e.exception.values.forEach(o=>{o.stacktrace.frames.forEach(c=>{c.filename&&(c.debug_id=i[c.filename])})})}catch{}}function Se(e){const t={};try{e.exception.values.forEach(r=>{r.stacktrace.frames.forEach(s=>{s.debug_id&&(s.abs_path?t[s.abs_path]=s.debug_id:s.filename&&(t[s.filename]=s.debug_id),delete s.debug_id)})})}catch{}if(Object.keys(t).length===0)return;e.debug_meta=e.debug_meta||{},e.debug_meta.images=e.debug_meta.images||[];const n=e.debug_meta.images;Object.keys(t).forEach(r=>{n.push({type:"sourcemap",code_file:r,debug_id:t[r]})})}function Ee(e,t){t.length>0&&(e.sdk=e.sdk||{},e.sdk.integrations=[...e.sdk.integrations||[],...t])}function ye(e,t,n){if(!e)return null;const r={...e,...e.breadcrumbs&&{breadcrumbs:e.breadcrumbs.map(s=>({...s,...s.data&&{data:x(s.data,t,n)}}))},...e.user&&{user:x(e.user,t,n)},...e.contexts&&{contexts:x(e.contexts,t,n)},...e.extra&&{extra:x(e.extra,t,n)}};return e.contexts&&e.contexts.trace&&r.contexts&&(r.contexts.trace=e.contexts.trace,e.contexts.trace.data&&(r.contexts.trace.data=x(e.contexts.trace.data,t,n))),e.spans&&(r.spans=e.spans.map(s=>{const i=R(s).data;return i&&(s.data=x(i,t,n)),s})),r}function be(e,t){if(!t)return e;const n=e?e.clone():new y;return n.update(t),n}function xe(e){if(!!e)return Te(e)?{captureContext:e}:Ce(e)?{captureContext:e}:e}function Te(e){return e instanceof y||typeof e=="function"}const Oe=["user","level","extra","contexts","tags","fingerprint","requestSession","propagationContext"];function Ce(e){return Object.keys(e).some(t=>Oe.includes(t))}function _n(e,t){return b().captureException(e,xe(t))}function mn(e,t){return b().captureEvent(e,t)}function Sn(e,t){b().addBreadcrumb(e,t)}function En(...e){const t=b();if(e.length===2){const[n,r]=e;return n?t.withScope(()=>(t.getStackTop().scope=n,r(n))):t.withScope(r)}return t.withScope(e[0])}function yn(){return b().lastEventId()}function W(){return b().getClient()}function G(){return b().getScope()}function bn(e){const t=W(),n=X(),r=G(),{release:s,environment:i=v}=t&&t.getOptions()||{},{userAgent:o}=g.navigator||{},c=yt({release:s,environment:i,user:r.getUser()||n.getUser(),...o&&{userAgent:o},...e}),a=n.getSession();return a&&a.status==="ok"&&k(a,{status:"exited"}),Tt(),n.setSession(c),r.setSession(c),c}function Tt(){const e=X(),t=G(),n=t.getSession()||e.getSession();n&&bt(n),Ot(),e.setSession(),t.setSession()}function Ot(){const e=X(),t=G(),n=W(),r=t.getSession()||e.getSession();r&&n&&n.captureSession&&n.captureSession(r)}function xn(e=!1){if(e){Tt();return}Ot()}function Ct(e){return e.transaction}function De(e,t,n){const r=t.getOptions(),{publicKey:s}=t.getDsn()||{},{segment:i}=n&&n.getUser()||{},o=T({environment:r.environment||v,release:r.release,user_segment:i,public_key:s,trace_id:e});return t.emit&&t.emit("createDsc",o),o}function Ie(e){const t=W();if(!t)return{};const n=De(R(e).trace_id||"",t,G()),r=Ct(e);if(!r)return n;const s=r&&r._frozenDynamicSamplingContext;if(s)return s;const{sampleRate:i,source:o}=r.metadata;i!=null&&(n.sample_rate=`${i}`);const c=R(r);return o&&o!=="url"&&(n.transaction=c.description),n.sampled=String(xt(r)),t.emit&&t.emit("createDsc",n),n}function Dt(e,t){const{fingerprint:n,span:r,breadcrumbs:s,sdkProcessingMetadata:i}=t;Ne(e,t),r&&Ae(e,r),we(e,n),Re(e,s),ke(e,i)}function at(e,t){const{extra:n,tags:r,user:s,contexts:i,level:o,sdkProcessingMetadata:c,breadcrumbs:a,fingerprint:u,eventProcessors:f,attachments:l,propagationContext:h,transactionName:d,span:O}=t;I(e,"extra",n),I(e,"tags",r),I(e,"user",s),I(e,"contexts",i),I(e,"sdkProcessingMetadata",c),o&&(e.level=o),d&&(e.transactionName=d),O&&(e.span=O),a.length&&(e.breadcrumbs=[...e.breadcrumbs,...a]),u.length&&(e.fingerprint=[...e.fingerprint,...u]),f.length&&(e.eventProcessors=[...e.eventProcessors,...f]),l.length&&(e.attachments=[...e.attachments,...l]),e.propagationContext={...e.propagationContext,...h}}function I(e,t,n){if(n&&Object.keys(n).length){e[t]={...e[t]};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[t][r]=n[r])}}function Ne(e,t){const{extra:n,tags:r,user:s,contexts:i,level:o,transactionName:c}=t,a=T(n);a&&Object.keys(a).length&&(e.extra={...a,...e.extra});const u=T(r);u&&Object.keys(u).length&&(e.tags={...u,...e.tags});const f=T(s);f&&Object.keys(f).length&&(e.user={...f,...e.user});const l=T(i);l&&Object.keys(l).length&&(e.contexts={...l,...e.contexts}),o&&(e.level=o),c&&(e.transaction=c)}function Re(e,t){const n=[...e.breadcrumbs||[],...t];e.breadcrumbs=n.length?n:void 0}function ke(e,t){e.sdkProcessingMetadata={...e.sdkProcessingMetadata,...t}}function Ae(e,t){e.contexts={trace:ge(t),...e.contexts};const n=Ct(t);if(n){e.sdkProcessingMetadata={dynamicSamplingContext:Ie(t),...e.sdkProcessingMetadata};const r=R(n).description;r&&(e.tags={transaction:r,...e.tags})}}function we(e,t){e.fingerprint=e.fingerprint?Xt(e.fingerprint):[],t&&(e.fingerprint=e.fingerprint.concat(t)),e.fingerprint&&!e.fingerprint.length&&delete e.fingerprint}const Pe=100;let B;class y{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext=ct()}static clone(t){return t?t.clone():new y}clone(){const t=new y;return t._breadcrumbs=[...this._breadcrumbs],t._tags={...this._tags},t._extra={...this._extra},t._contexts={...this._contexts},t._user=this._user,t._level=this._level,t._span=this._span,t._session=this._session,t._transactionName=this._transactionName,t._fingerprint=this._fingerprint,t._eventProcessors=[...this._eventProcessors],t._requestSession=this._requestSession,t._attachments=[...this._attachments],t._sdkProcessingMetadata={...this._sdkProcessingMetadata},t._propagationContext={...this._propagationContext},t._client=this._client,t}setClient(t){this._client=t}getClient(){return this._client}addScopeListener(t){this._scopeListeners.push(t)}addEventProcessor(t){return this._eventProcessors.push(t),this}setUser(t){return this._user=t||{email:void 0,id:void 0,ip_address:void 0,segment:void 0,username:void 0},this._session&&k(this._session,{user:t}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(t){return this._requestSession=t,this}setTags(t){return this._tags={...this._tags,...t},this._notifyScopeListeners(),this}setTag(t,n){return this._tags={...this._tags,[t]:n},this._notifyScopeListeners(),this}setExtras(t){return this._extra={...this._extra,...t},this._notifyScopeListeners(),this}setExtra(t,n){return this._extra={...this._extra,[t]:n},this._notifyScopeListeners(),this}setFingerprint(t){return this._fingerprint=t,this._notifyScopeListeners(),this}setLevel(t){return this._level=t,this._notifyScopeListeners(),this}setTransactionName(t){return this._transactionName=t,this._notifyScopeListeners(),this}setContext(t,n){return n===null?delete this._contexts[t]:this._contexts[t]=n,this._notifyScopeListeners(),this}setSpan(t){return this._span=t,this._notifyScopeListeners(),this}getSpan(){return this._span}getTransaction(){const t=this._span;return t&&t.transaction}setSession(t){return t?this._session=t:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(t){if(!t)return this;const n=typeof t=="function"?t(this):t;if(n instanceof y){const r=n.getScopeData();this._tags={...this._tags,...r.tags},this._extra={...this._extra,...r.extra},this._contexts={...this._contexts,...r.contexts},r.user&&Object.keys(r.user).length&&(this._user=r.user),r.level&&(this._level=r.level),r.fingerprint.length&&(this._fingerprint=r.fingerprint),n.getRequestSession()&&(this._requestSession=n.getRequestSession()),r.propagationContext&&(this._propagationContext=r.propagationContext)}else if(Y(n)){const r=t;this._tags={...this._tags,...r.tags},this._extra={...this._extra,...r.extra},this._contexts={...this._contexts,...r.contexts},r.user&&(this._user=r.user),r.level&&(this._level=r.level),r.fingerprint&&(this._fingerprint=r.fingerprint),r.requestSession&&(this._requestSession=r.requestSession),r.propagationContext&&(this._propagationContext=r.propagationContext)}return this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this._attachments=[],this._propagationContext=ct(),this}addBreadcrumb(t,n){const r=typeof n=="number"?n:Pe;if(r<=0)return this;const s={timestamp:j(),...t},i=this._breadcrumbs;return i.push(s),this._breadcrumbs=i.length>r?i.slice(-r):i,this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(t){return this._attachments.push(t),this}getAttachments(){return this.getScopeData().attachments}clearAttachments(){return this._attachments=[],this}getScopeData(){const{_breadcrumbs:t,_attachments:n,_contexts:r,_tags:s,_extra:i,_user:o,_level:c,_fingerprint:a,_eventProcessors:u,_propagationContext:f,_sdkProcessingMetadata:l,_transactionName:h,_span:d}=this;return{breadcrumbs:t,attachments:n,contexts:r,tags:s,extra:i,user:o,level:c,fingerprint:a||[],eventProcessors:u,propagationContext:f,sdkProcessingMetadata:l,transactionName:h,span:d}}applyToEvent(t,n={},r=[]){Dt(t,this.getScopeData());const s=[...r,...V(),...this._eventProcessors];return M(s,t,n)}setSDKProcessingMetadata(t){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...t},this}setPropagationContext(t){return this._propagationContext=t,this}getPropagationContext(){return this._propagationContext}captureException(t,n){const r=n&&n.event_id?n.event_id:p();if(!this._client)return S.warn("No client configured on scope - will not capture exception!"),r;const s=new Error("Sentry syntheticException");return this._client.captureException(t,{originalException:t,syntheticException:s,...n,event_id:r},this),r}captureMessage(t,n,r){const s=r&&r.event_id?r.event_id:p();if(!this._client)return S.warn("No client configured on scope - will not capture message!"),s;const i=new Error(t);return this._client.captureMessage(t,n,{originalException:t,syntheticException:i,...r,event_id:s},this),s}captureEvent(t,n){const r=n&&n.event_id?n.event_id:p();return this._client?(this._client.captureEvent(t,{...n,event_id:r},this),r):(S.warn("No client configured on scope - will not capture event!"),r)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(t=>{t(this)}),this._notifyingListeners=!1)}}function Me(){return B||(B=new y),B}function ct(){return{traceId:p(),spanId:p().substring(16)}}const Le="7.120.3",It=parseFloat(Le),je=100;class Nt{constructor(t,n,r,s=It){this._version=s;let i;n?i=n:(i=new y,i.setClient(t));let o;r?o=r:(o=new y,o.setClient(t)),this._stack=[{scope:i}],t&&this.bindClient(t),this._isolationScope=o}isOlderThan(t){return this._version<t}bindClient(t){const n=this.getStackTop();n.client=t,n.scope.setClient(t),t&&t.setupIntegrations&&t.setupIntegrations()}pushScope(){const t=this.getScope().clone();return this.getStack().push({client:this.getClient(),scope:t}),t}popScope(){return this.getStack().length<=1?!1:!!this.getStack().pop()}withScope(t){const n=this.pushScope();let r;try{r=t(n)}catch(s){throw this.popScope(),s}return q(r)?r.then(s=>(this.popScope(),s),s=>{throw this.popScope(),s}):(this.popScope(),r)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStack(){return this._stack}getStackTop(){return this._stack[this._stack.length-1]}captureException(t,n){const r=this._lastEventId=n&&n.event_id?n.event_id:p(),s=new Error("Sentry syntheticException");return this.getScope().captureException(t,{originalException:t,syntheticException:s,...n,event_id:r}),r}captureMessage(t,n,r){const s=this._lastEventId=r&&r.event_id?r.event_id:p(),i=new Error(t);return this.getScope().captureMessage(t,n,{originalException:t,syntheticException:i,...r,event_id:s}),s}captureEvent(t,n){const r=n&&n.event_id?n.event_id:p();return t.type||(this._lastEventId=r),this.getScope().captureEvent(t,{...n,event_id:r}),r}lastEventId(){return this._lastEventId}addBreadcrumb(t,n){const{scope:r,client:s}=this.getStackTop();if(!s)return;const{beforeBreadcrumb:i=null,maxBreadcrumbs:o=je}=s.getOptions&&s.getOptions()||{};if(o<=0)return;const a={timestamp:j(),...t},u=i?dt(()=>i(a,n)):a;u!==null&&(s.emit&&s.emit("beforeAddBreadcrumb",u,n),r.addBreadcrumb(u,o))}setUser(t){this.getScope().setUser(t),this.getIsolationScope().setUser(t)}setTags(t){this.getScope().setTags(t),this.getIsolationScope().setTags(t)}setExtras(t){this.getScope().setExtras(t),this.getIsolationScope().setExtras(t)}setTag(t,n){this.getScope().setTag(t,n),this.getIsolationScope().setTag(t,n)}setExtra(t,n){this.getScope().setExtra(t,n),this.getIsolationScope().setExtra(t,n)}setContext(t,n){this.getScope().setContext(t,n),this.getIsolationScope().setContext(t,n)}configureScope(t){const{scope:n,client:r}=this.getStackTop();r&&t(n)}run(t){const n=ut(this);try{t(this)}finally{ut(n)}}getIntegration(t){const n=this.getClient();if(!n)return null;try{return n.getIntegration(t)}catch{return w&&S.warn(`Cannot retrieve integration ${t.id} from the current Hub`),null}}startTransaction(t,n){const r=this._callExtensionMethod("startTransaction",t,n);return w&&!r&&(this.getClient()?S.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`):S.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")),r}traceHeaders(){return this._callExtensionMethod("traceHeaders")}captureSession(t=!1){if(t)return this.endSession();this._sendSessionUpdate()}endSession(){const n=this.getStackTop().scope,r=n.getSession();r&&bt(r),this._sendSessionUpdate(),n.setSession()}startSession(t){const{scope:n,client:r}=this.getStackTop(),{release:s,environment:i=v}=r&&r.getOptions()||{},{userAgent:o}=g.navigator||{},c=yt({release:s,environment:i,user:n.getUser(),...o&&{userAgent:o},...t}),a=n.getSession&&n.getSession();return a&&a.status==="ok"&&k(a,{status:"exited"}),this.endSession(),n.setSession(c),c}shouldSendDefaultPii(){const t=this.getClient(),n=t&&t.getOptions();return Boolean(n&&n.sendDefaultPii)}_sendSessionUpdate(){const{scope:t,client:n}=this.getStackTop(),r=t.getSession();r&&n&&n.captureSession&&n.captureSession(r)}_callExtensionMethod(t,...n){const s=$().__SENTRY__;if(s&&s.extensions&&typeof s.extensions[t]=="function")return s.extensions[t].apply(this,n);w&&S.warn(`Extension method ${t} couldn't be found, doing nothing.`)}}function $(){return g.__SENTRY__=g.__SENTRY__||{extensions:{},hub:void 0},g}function ut(e){const t=$(),n=z(t);return Rt(t,e),n}function b(){const e=$();if(e.__SENTRY__&&e.__SENTRY__.acs){const t=e.__SENTRY__.acs.getCurrentHub();if(t)return t}return ve(e)}function X(){return b().getIsolationScope()}function ve(e=$()){return(!Ge(e)||z(e).isOlderThan(It))&&Rt(e,new Nt),z(e)}function Ge(e){return!!(e&&e.__SENTRY__&&e.__SENTRY__.hub)}function z(e){return pt("hub",()=>new Nt,e)}function Rt(e,t){if(!e)return!1;const n=e.__SENTRY__=e.__SENTRY__||{};return n.hub=t,!0}const Tn=kt.createContext({error:null,setError:()=>{throw new Error("Expected setError to be initialized")}});export{Xe as $,pn as A,Ct as B,Q as C,J as D,Tn as E,R as F,g as G,dn as H,ge as I,vt as J,$ as K,Qe as L,Xt as M,ln as N,rn as O,ze as P,k as Q,hn as R,m as S,de as T,De as U,q as V,Y as W,wt as X,Le as Y,en as Z,qe as _,S as a,an as a0,Bt as a1,Ve as a2,le as a3,un as a4,cn as a5,fn as a6,Ke as a7,Yt as a8,En as a9,nn as aa,Wt as ab,_n as ac,Be as ad,Fe as ae,He as af,At as ag,Pt as ah,Zt as ai,Ze as aj,Jt as ak,Sn as al,Ye as am,mn as an,Je as ao,tn as ap,bn as aq,xn as ar,gt as b,dt as c,$t as d,P as e,We as f,Vt as g,sn as h,L as i,T as j,j as k,yn as l,b as m,x as n,Z as o,w as p,W as q,on as r,G as s,N as t,p as u,X as v,Ie as w,xt as x,gn as y,K as z};
