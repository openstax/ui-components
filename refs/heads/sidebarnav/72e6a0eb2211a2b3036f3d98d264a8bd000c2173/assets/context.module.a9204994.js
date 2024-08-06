import{R as u,r as l,b as oe,$ as ae}from"./index.22b301c1.js";const T={prefix:String(Math.round(Math.random()*1e10)),current:0},J=u.createContext(T),ie=u.createContext(!1);let le=Boolean(typeof window<"u"&&window.document&&window.document.createElement),H=new WeakMap;function ce(e=!1){let n=l.exports.useContext(J),t=l.exports.useRef(null);if(t.current===null&&!e){var r,o;let i=(o=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||o===void 0||(r=o.ReactCurrentOwner)===null||r===void 0?void 0:r.current;if(i){let a=H.get(i);a==null?H.set(i,{id:n.current,state:i.memoizedState}):i.memoizedState!==a.state&&(n.current=a.id,H.delete(i))}t.current=++n.current}return t.current}function se(e){let n=l.exports.useContext(J);n===T&&!le&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let t=ce(!!e),r=`react-aria${n.prefix}`;return e||`${r}-${t}`}function ue(e){let n=u.useId(),[t]=l.exports.useState(R()),r=t?"react-aria":`react-aria${T.prefix}`;return e||`${r}-${n}`}const fe=typeof u.useId=="function"?ue:se;function de(){return!1}function $e(){return!0}function pe(e){return()=>{}}function R(){return typeof u.useSyncExternalStore=="function"?u.useSyncExternalStore(pe,de,$e):l.exports.useContext(ie)}if(typeof HTMLTemplateElement<"u"){const e=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild").get;Object.defineProperty(HTMLTemplateElement.prototype,"firstChild",{configurable:!0,enumerable:!0,get:function(){return this.dataset.reactAriaHidden?this.content.firstChild:e.call(this)}})}const M=l.exports.createContext(!1),be=typeof DocumentFragment<"u"?new DocumentFragment:null;function nt(e){let n=l.exports.useContext(M),t=R();if(n)return u.createElement(u.Fragment,null,e.children);let r=u.createElement(M.Provider,{value:!0},e.children);return t?u.createElement("template",{"data-react-aria-hidden":!0},r):oe.exports.createPortal(r,be)}function rt(e){let n=(t,r)=>l.exports.useContext(M)?null:e(t,r);return n.displayName=e.displayName||e.name,l.exports.forwardRef(n)}function ot(){return l.exports.useContext(M)}const b=typeof document<"u"?u.useLayoutEffect:()=>{};function I(e){const n=l.exports.useRef(null);return b(()=>{n.current=e},[e]),l.exports.useCallback((...t)=>{const r=n.current;return r==null?void 0:r(...t)},[])}function ve(e){let[n,t]=l.exports.useState(e),r=l.exports.useRef(null),o=I(()=>{if(!r.current)return;let a=r.current.next();if(a.done){r.current=null;return}n===a.value?o():t(a.value)});b(()=>{r.current&&o()});let i=I(a=>{r.current=a(n),o()});return[n,i]}let me=Boolean(typeof window<"u"&&window.document&&window.document.createElement),k=new Map;function xe(e){let[n,t]=l.exports.useState(e),r=l.exports.useRef(null),o=fe(n),i=l.exports.useCallback(a=>{r.current=a},[]);return me&&k.set(o,i),b(()=>{let a=o;return()=>{k.delete(a)}},[o]),l.exports.useEffect(()=>{let a=r.current;a&&(r.current=null,t(a))}),o}function ye(e,n){if(e===n)return e;let t=k.get(e);if(t)return t(n),n;let r=k.get(n);return r?(r(e),e):n}function at(e=[]){let n=xe(),[t,r]=ve(n),o=l.exports.useCallback(()=>{r(function*(){yield n,yield document.getElementById(n)?n:void 0})},[n,r]);return b(o,[n,o,...e]),t}function ge(...e){return(...n)=>{for(let t of e)typeof t=="function"&&t(...n)}}const w=e=>{var n;return(n=e==null?void 0:e.ownerDocument)!==null&&n!==void 0?n:document},v=e=>e&&"window"in e&&e.window===e?e:w(e).defaultView||window;function Q(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(n=0;n<o;n++)e[n]&&(t=Q(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function he(){for(var e,n,t=0,r="",o=arguments.length;t<o;t++)(e=arguments[t])&&(n=Q(e))&&(r&&(r+=" "),r+=n);return r}function we(...e){let n={...e[0]};for(let t=1;t<e.length;t++){let r=e[t];for(let o in r){let i=n[o],a=r[o];typeof i=="function"&&typeof a=="function"&&o[0]==="o"&&o[1]==="n"&&o.charCodeAt(2)>=65&&o.charCodeAt(2)<=90?n[o]=ge(i,a):(o==="className"||o==="UNSAFE_className")&&typeof i=="string"&&typeof a=="string"?n[o]=he(i,a):o==="id"&&i&&a?n.id=ye(i,a):n[o]=a!==void 0?a:i}}return n}function Ee(...e){return e.length===1&&e[0]?e[0]:n=>{for(let t of e)typeof t=="function"?t(n):t!=null&&(t.current=n)}}const Se=new Set(["id"]),Le=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),Ce=new Set(["href","hrefLang","target","rel","download","ping","referrerPolicy"]),Te=/^(data-.*)$/;function it(e,n={}){let{labelable:t,isLink:r,propNames:o}=n,i={};for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&(Se.has(a)||t&&Le.has(a)||r&&Ce.has(a)||(o==null?void 0:o.has(a))||Te.test(a))&&(i[a]=e[a]);return i}function B(e){if(Me())e.focus({preventScroll:!0});else{let n=ke(e);e.focus(),Pe(n)}}let C=null;function Me(){if(C==null){C=!1;try{document.createElement("div").focus({get preventScroll(){return C=!0,!0}})}catch{}}return C}function ke(e){let n=e.parentNode,t=[],r=document.scrollingElement||document.documentElement;for(;n instanceof HTMLElement&&n!==r;)(n.offsetHeight<n.scrollHeight||n.offsetWidth<n.scrollWidth)&&t.push({element:n,scrollTop:n.scrollTop,scrollLeft:n.scrollLeft}),n=n.parentNode;return r instanceof HTMLElement&&t.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),t}function Pe(e){for(let{element:n,scrollTop:t,scrollLeft:r}of e)n.scrollTop=t,n.scrollLeft=r}function F(e){var n;return typeof window>"u"||window.navigator==null?!1:((n=window.navigator.userAgentData)===null||n===void 0?void 0:n.brands.some(t=>e.test(t.brand)))||e.test(window.navigator.userAgent)}function V(e){var n;return typeof window<"u"&&window.navigator!=null?e.test(((n=window.navigator.userAgentData)===null||n===void 0?void 0:n.platform)||window.navigator.platform):!1}function p(e){let n=null;return()=>(n==null&&(n=e()),n)}const K=p(function(){return V(/^Mac/i)}),Fe=p(function(){return V(/^iPhone/i)}),He=p(function(){return V(/^iPad/i)||K()&&navigator.maxTouchPoints>1}),Ie=p(function(){return Fe()||He()}),lt=p(function(){return K()||Ie()}),ct=p(function(){return F(/AppleWebKit/i)&&!Ne()}),Ne=p(function(){return F(/Chrome/i)}),X=p(function(){return F(/Android/i)}),st=p(function(){return F(/Firefox/i)});let x=new Map,N=new Set;function q(){if(typeof window>"u")return;function e(r){return"propertyName"in r}let n=r=>{if(!e(r)||!r.target)return;let o=x.get(r.target);o||(o=new Set,x.set(r.target,o),r.target.addEventListener("transitioncancel",t,{once:!0})),o.add(r.propertyName)},t=r=>{if(!e(r)||!r.target)return;let o=x.get(r.target);if(!!o&&(o.delete(r.propertyName),o.size===0&&(r.target.removeEventListener("transitioncancel",t),x.delete(r.target)),x.size===0)){for(let i of N)i();N.clear()}};document.body.addEventListener("transitionrun",n),document.body.addEventListener("transitionend",t)}typeof document<"u"&&(document.readyState!=="loading"?q():document.addEventListener("DOMContentLoaded",q));function Ae(e){requestAnimationFrame(()=>{x.size===0?e():N.add(e)})}function We(e){const n=l.exports.useRef(null);return l.exports.useMemo(()=>({get current(){return n.current},set current(t){n.current=t,typeof e=="function"?e(t):e&&(e.current=t)}}),[e])}function ut(e,n){b(()=>{if(e&&e.ref&&n)return e.ref.current=n.current,()=>{e.ref&&(e.ref.current=null)}})}function De(e){return e.mozInputSource===0&&e.isTrusted?!0:X()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function ft(e){return!X()&&e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"}function dt(e,n,t){let[r,o]=l.exports.useState(e||n),i=l.exports.useRef(e!==void 0),a=e!==void 0;l.exports.useEffect(()=>{let s=i.current;s!==a&&console.warn(`WARN: A component changed from ${s?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}.`),i.current=a},[a]);let c=a?e:r,f=l.exports.useCallback((s,...d)=>{let E=(S,...L)=>{t&&(Object.is(c,S)||t(S,...L)),a||(c=S)};typeof s=="function"?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),o((L,...re)=>{let O=s(a?c:L,...re);return E(O,...d),a?L:O})):(a||o(s),E(s,...d))},[a,c,t]);return[c,f]}const G=Symbol("default");function $t({values:e,children:n}){for(let[t,r]of e)n=u.createElement(t.Provider,{value:r},n);return n}function pt(e){let{className:n,style:t,children:r,defaultClassName:o,defaultChildren:i,defaultStyle:a,values:c}=e;return l.exports.useMemo(()=>{let f,s,d;return typeof n=="function"?f=n({...c,defaultClassName:o}):f=n,typeof t=="function"?s=t({...c,defaultStyle:a||{}}):s=t,typeof r=="function"?d=r({...c,defaultChildren:i}):r==null?d=i:d=r,{className:f!=null?f:o,style:s||a?{...a,...s}:void 0,children:d!=null?d:i,"data-rac":""}},[n,t,r,o,i,a,c])}function je(e,n){let t=l.exports.useContext(e);if(n===null)return null;if(t&&typeof t=="object"&&"slots"in t&&t.slots){let r=new Intl.ListFormat().format(Object.keys(t.slots).map(i=>`"${i}"`));if(!n&&!t.slots[G])throw new Error(`A slot prop is required. Valid slot names are ${r}.`);let o=n||G;if(!t.slots[o])throw new Error(`Invalid slot "${n}". Valid slot names are ${r}.`);return t.slots[o]}return t}function bt(e,n,t){let r=je(t,e.slot)||{},{ref:o,...i}=r,a=We(l.exports.useMemo(()=>Ee(n,o),[n,o])),c=we(i,e);return"style"in i&&i.style&&"style"in e&&e.style&&(typeof i.style=="function"||typeof e.style=="function"?c.style=f=>{let s=typeof i.style=="function"?i.style(f):i.style,d={...f.defaultStyle,...s},E=typeof e.style=="function"?e.style({...f,defaultStyle:d}):e.style;return{...d,...E}}:c.style={...i.style,...e.style}),[c,a]}function vt(){let[e,n]=l.exports.useState(!0),t=l.exports.useRef(!1),r=l.exports.useCallback(o=>{t.current=!0,n(!!o)},[]);return b(()=>{t.current||n(!1)},[]),[r,e]}function mt(e,n=!0){let[t,r]=l.exports.useState(!0);return Z(e,t&&n,l.exports.useCallback(()=>r(!1),[])),t&&n}function xt(e,n){let[t,r]=l.exports.useState(!1),[o,i]=l.exports.useState("idle");return!n&&e.current&&o==="idle"&&(t=!0,r(!0),i("exiting")),!e.current&&o==="exited"&&i("idle"),Z(e,t,l.exports.useCallback(()=>{i("exited"),r(!1)},[])),t}function Z(e,n,t){let r=l.exports.useRef(null);n&&e.current&&(r.current=window.getComputedStyle(e.current).animation),b(()=>{if(n&&e.current){let o=window.getComputedStyle(e.current);if(o.animationName&&o.animationName!=="none"&&o.animation!==r.current){let i=c=>{c.target===e.current&&(a.removeEventListener("animationend",i),ae.flushSync(()=>{t()}))},a=e.current;return a.addEventListener("animationend",i),()=>{a.removeEventListener("animationend",i)}}else t()}},[e,n,t])}const Re=u.createContext({register:()=>{}});Re.displayName="PressResponderContext";class Ve{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(n,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=n}}function Ke(e){let n=l.exports.useRef({isFocused:!1,observer:null});b(()=>{const r=n.current;return()=>{r.observer&&(r.observer.disconnect(),r.observer=null)}},[]);let t=I(r=>{e==null||e(r)});return l.exports.useCallback(r=>{if(r.target instanceof HTMLButtonElement||r.target instanceof HTMLInputElement||r.target instanceof HTMLTextAreaElement||r.target instanceof HTMLSelectElement){n.current.isFocused=!0;let o=r.target,i=a=>{n.current.isFocused=!1,o.disabled&&t(new Ve("blur",a)),n.current.observer&&(n.current.observer.disconnect(),n.current.observer=null)};o.addEventListener("focusout",i,{once:!0}),n.current.observer=new MutationObserver(()=>{if(n.current.isFocused&&o.disabled){var a;(a=n.current.observer)===null||a===void 0||a.disconnect();let c=o===document.activeElement?null:document.activeElement;o.dispatchEvent(new FocusEvent("blur",{relatedTarget:c})),o.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:c}))}}),n.current.observer.observe(o,{attributes:!0,attributeFilter:["disabled"]})}},[t])}let y=null,A=new Set,h=new Map,m=!1,W=!1;const ze={Tab:!0,Escape:!0};function z(e,n){for(let t of A)t(e,n)}function Oe(e){return!(e.metaKey||!K()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function P(e){m=!0,Oe(e)&&(y="keyboard",z("keyboard",e))}function $(e){y="pointer",(e.type==="mousedown"||e.type==="pointerdown")&&(m=!0,z("pointer",e))}function Y(e){De(e)&&(m=!0,y="virtual")}function _(e){e.target===window||e.target===document||(!m&&!W&&(y="virtual",z("virtual",e)),m=!1,W=!1)}function ee(){m=!1,W=!0}function D(e){if(typeof window>"u"||h.get(v(e)))return;const n=v(e),t=w(e);let r=n.HTMLElement.prototype.focus;n.HTMLElement.prototype.focus=function(){m=!0,r.apply(this,arguments)},t.addEventListener("keydown",P,!0),t.addEventListener("keyup",P,!0),t.addEventListener("click",Y,!0),n.addEventListener("focus",_,!0),n.addEventListener("blur",ee,!1),typeof PointerEvent<"u"?(t.addEventListener("pointerdown",$,!0),t.addEventListener("pointermove",$,!0),t.addEventListener("pointerup",$,!0)):(t.addEventListener("mousedown",$,!0),t.addEventListener("mousemove",$,!0),t.addEventListener("mouseup",$,!0)),n.addEventListener("beforeunload",()=>{te(e)},{once:!0}),h.set(n,{focus:r})}const te=(e,n)=>{const t=v(e),r=w(e);n&&r.removeEventListener("DOMContentLoaded",n),h.has(t)&&(t.HTMLElement.prototype.focus=h.get(t).focus,r.removeEventListener("keydown",P,!0),r.removeEventListener("keyup",P,!0),r.removeEventListener("click",Y,!0),t.removeEventListener("focus",_,!0),t.removeEventListener("blur",ee,!1),typeof PointerEvent<"u"?(r.removeEventListener("pointerdown",$,!0),r.removeEventListener("pointermove",$,!0),r.removeEventListener("pointerup",$,!0)):(r.removeEventListener("mousedown",$,!0),r.removeEventListener("mousemove",$,!0),r.removeEventListener("mouseup",$,!0)),h.delete(t))};function Be(e){const n=w(e);let t;return n.readyState!=="loading"?D(e):(t=()=>{D(e)},n.addEventListener("DOMContentLoaded",t)),()=>te(e,t)}typeof document<"u"&&Be();function qe(){return y!=="pointer"}function Ge(){return y}const Ue=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Je(e,n,t){var r;const o=typeof window<"u"?v(t==null?void 0:t.target).HTMLInputElement:HTMLInputElement,i=typeof window<"u"?v(t==null?void 0:t.target).HTMLTextAreaElement:HTMLTextAreaElement,a=typeof window<"u"?v(t==null?void 0:t.target).HTMLElement:HTMLElement,c=typeof window<"u"?v(t==null?void 0:t.target).KeyboardEvent:KeyboardEvent;return e=e||(t==null?void 0:t.target)instanceof o&&!Ue.has(t==null||(r=t.target)===null||r===void 0?void 0:r.type)||(t==null?void 0:t.target)instanceof i||(t==null?void 0:t.target)instanceof a&&(t==null?void 0:t.target.isContentEditable),!(e&&n==="keyboard"&&t instanceof c&&!ze[t.key])}function yt(e,n,t){D(),l.exports.useEffect(()=>{let r=(o,i)=>{!Je(!!(t!=null&&t.isTextInput),o,i)||e(qe())};return A.add(r),()=>{A.delete(r)}},n)}function gt(e){let{isDisabled:n,onBlurWithin:t,onFocusWithin:r,onFocusWithinChange:o}=e,i=l.exports.useRef({isFocusWithin:!1}),a=l.exports.useCallback(s=>{i.current.isFocusWithin&&!s.currentTarget.contains(s.relatedTarget)&&(i.current.isFocusWithin=!1,t&&t(s),o&&o(!1))},[t,o,i]),c=Ke(a),f=l.exports.useCallback(s=>{!i.current.isFocusWithin&&document.activeElement===s.target&&(r&&r(s),o&&o(!0),i.current.isFocusWithin=!0,c(s))},[r,o,c]);return n?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:f,onBlur:a}}}function ht(e){const n=w(e);if(Ge()==="virtual"){let t=n.activeElement;Ae(()=>{n.activeElement===t&&e.isConnected&&B(e)})}else B(e)}const Qe=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),Xe=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function Ze(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize(),r=typeof t.getTextInfo=="function"?t.getTextInfo():t.textInfo;if(r)return r.direction==="rtl";if(t.script)return Qe.has(t.script)}let n=e.split("-")[0];return Xe.has(n)}const Ye=Symbol.for("react-aria.i18n.locale");function ne(){let e=typeof window<"u"&&window[Ye]||typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch{e="en-US"}return{locale:e,direction:Ze(e)?"rtl":"ltr"}}let j=ne(),g=new Set;function U(){j=ne();for(let e of g)e(j)}function _e(){let e=R(),[n,t]=l.exports.useState(j);return l.exports.useEffect(()=>(g.size===0&&window.addEventListener("languagechange",U),g.add(t),()=>{g.delete(t),g.size===0&&window.removeEventListener("languagechange",U)}),[]),e?{locale:"en-US",direction:"ltr"}:n}const et=u.createContext(null);function wt(){let e=_e();return l.exports.useContext(et)||e}export{b as $,De as A,v as B,Re as C,ut as D,ge as E,Ke as F,qe as G,yt as H,gt as I,at as J,vt as K,xt as L,ot as M,mt as N,G as O,Ee as P,it as a,we as b,wt as c,xe as d,dt as e,We as f,pt as g,rt as h,je as i,$t as j,bt as k,I as l,nt as m,R as n,lt as o,K as p,ht as q,Ge as r,B as s,st as t,ct as u,He as v,Ie as w,w as x,Ae as y,ft as z};
