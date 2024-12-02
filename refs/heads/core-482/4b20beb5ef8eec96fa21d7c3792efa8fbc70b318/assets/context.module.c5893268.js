import{R as c,r as s,b as N,$ as W}from"./index.31876e64.js";import{$}from"./focusSafely.module.e2616d0c.js";const y={prefix:String(Math.round(Math.random()*1e10)),current:0},M=c.createContext(y),H=c.createContext(!1);let R=Boolean(typeof window<"u"&&window.document&&window.document.createElement),v=new WeakMap;function V(e=!1){let t=s.exports.useContext(M),r=s.exports.useRef(null);if(r.current===null&&!e){var n,a;let l=(a=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||a===void 0||(n=a.ReactCurrentOwner)===null||n===void 0?void 0:n.current;if(l){let o=v.get(l);o==null?v.set(l,{id:t.current,state:l.memoizedState}):l.memoizedState!==o.state&&(t.current=o.id,v.delete(l))}r.current=++t.current}return r.current}function j(e){let t=s.exports.useContext(M);t===y&&!R&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let r=V(!!e),n=`react-aria${t.prefix}`;return e||`${n}-${r}`}function A(e){let t=c.useId(),[r]=s.exports.useState(C()),n=r?"react-aria":`react-aria${y.prefix}`;return e||`${n}-${t}`}const D=typeof c.useId=="function"?A:j;function z(){return!1}function q(){return!0}function B(e){return()=>{}}function C(){return typeof c.useSyncExternalStore=="function"?c.useSyncExternalStore(B,z,q):s.exports.useContext(H)}if(typeof HTMLTemplateElement<"u"){const e=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild").get;Object.defineProperty(HTMLTemplateElement.prototype,"firstChild",{configurable:!0,enumerable:!0,get:function(){return this.dataset.reactAriaHidden?this.content.firstChild:e.call(this)}})}const h=s.exports.createContext(!1),G=typeof DocumentFragment<"u"?new DocumentFragment:null;function xe(e){let t=s.exports.useContext(h),r=C();if(t)return c.createElement(c.Fragment,null,e.children);let n=c.createElement(h.Provider,{value:!0},e.children);return r?c.createElement("template",{"data-react-aria-hidden":!0},n):N.exports.createPortal(n,G)}function me(e){let t=(r,n)=>s.exports.useContext(h)?null:e(r,n);return t.displayName=e.displayName||e.name,s.exports.forwardRef(t)}function ye(){return s.exports.useContext(h)}function S(e){const t=s.exports.useRef(null);return $(()=>{t.current=e},[e]),s.exports.useCallback((...r)=>{const n=t.current;return n==null?void 0:n(...r)},[])}function K(e){let[t,r]=s.exports.useState(e),n=s.exports.useRef(null),a=S(()=>{if(!n.current)return;let o=n.current.next();if(o.done){n.current=null;return}t===o.value?a():r(o.value)});$(()=>{n.current&&a()});let l=S(o=>{n.current=o(t),a()});return[t,l]}let U=Boolean(typeof window<"u"&&window.document&&window.document.createElement),g=new Map;function J(e){let[t,r]=s.exports.useState(e),n=s.exports.useRef(null),a=D(t),l=s.exports.useCallback(o=>{n.current=o},[]);return U&&g.set(a,l),$(()=>{let o=a;return()=>{g.delete(o)}},[a]),s.exports.useEffect(()=>{let o=n.current;o&&(n.current=null,r(o))}),a}function O(e,t){if(e===t)return e;let r=g.get(e);if(r)return r(t),t;let n=g.get(t);return n?(n(e),e):t}function he(e=[]){let t=J(),[r,n]=K(t),a=s.exports.useCallback(()=>{n(function*(){yield t,yield document.getElementById(t)?t:void 0})},[t,n]);return $(a,[t,a,...e]),r}function Q(...e){return(...t)=>{for(let r of e)typeof r=="function"&&r(...t)}}function L(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=L(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function X(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=L(e))&&(n&&(n+=" "),n+=t);return n}function Z(...e){let t={...e[0]};for(let r=1;r<e.length;r++){let n=e[r];for(let a in n){let l=t[a],o=n[a];typeof l=="function"&&typeof o=="function"&&a[0]==="o"&&a[1]==="n"&&a.charCodeAt(2)>=65&&a.charCodeAt(2)<=90?t[a]=Q(l,o):(a==="className"||a==="UNSAFE_className")&&typeof l=="string"&&typeof o=="string"?t[a]=X(l,o):a==="id"&&l&&o?t.id=O(l,o):t[a]=o!==void 0?o:l}}return t}function Y(...e){return e.length===1&&e[0]?e[0]:t=>{for(let r of e)typeof r=="function"?r(t):r!=null&&(r.current=t)}}const _=new Set(["id"]),ee=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),te=new Set(["href","hrefLang","target","rel","download","ping","referrerPolicy"]),re=/^(data-.*)$/;function ge(e,t={}){let{labelable:r,isLink:n,propNames:a}=t,l={};for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(_.has(o)||r&&ee.has(o)||n&&te.has(o)||(a==null?void 0:a.has(o))||re.test(o))&&(l[o]=e[o]);return l}function ne(e){const t=s.exports.useRef(null);return s.exports.useMemo(()=>({get current(){return t.current},set current(r){t.current=r,typeof e=="function"?e(r):e&&(e.current=r)}}),[e])}function ve(e,t){$(()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}})}function Se(e,t,r){let[n,a]=s.exports.useState(e||t),l=s.exports.useRef(e!==void 0),o=e!==void 0;s.exports.useEffect(()=>{let i=l.current;i!==o&&console.warn(`WARN: A component changed from ${i?"controlled":"uncontrolled"} to ${o?"controlled":"uncontrolled"}.`),l.current=o},[o]);let u=o?e:n,f=s.exports.useCallback((i,...d)=>{let b=(x,...m)=>{r&&(Object.is(u,x)||r(x,...m)),o||(u=x)};typeof i=="function"?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),a((m,...E)=>{let F=i(o?u:m,...E);return b(F,...d),o?m:F})):(o||a(i),b(i,...d))},[o,u,r]);return[u,f]}const P=Symbol("default");function we({values:e,children:t}){for(let[r,n]of e)t=c.createElement(r.Provider,{value:n},t);return t}function Ce(e){let{className:t,style:r,children:n,defaultClassName:a,defaultChildren:l,defaultStyle:o,values:u}=e;return s.exports.useMemo(()=>{let f,i,d;return typeof t=="function"?f=t({...u,defaultClassName:a}):f=t,typeof r=="function"?i=r({...u,defaultStyle:o||{}}):i=r,typeof n=="function"?d=n({...u,defaultChildren:l}):n==null?d=l:d=n,{className:f!=null?f:a,style:i||o?{...o,...i}:void 0,children:d!=null?d:l,"data-rac":""}},[t,r,n,a,l,o,u])}function ae(e,t){let r=s.exports.useContext(e);if(t===null)return null;if(r&&typeof r=="object"&&"slots"in r&&r.slots){let n=new Intl.ListFormat().format(Object.keys(r.slots).map(l=>`"${l}"`));if(!t&&!r.slots[P])throw new Error(`A slot prop is required. Valid slot names are ${n}.`);let a=t||P;if(!r.slots[a])throw new Error(`Invalid slot "${t}". Valid slot names are ${n}.`);return r.slots[a]}return r}function Fe(e,t,r){let n=ae(r,e.slot)||{},{ref:a,...l}=n,o=ne(s.exports.useMemo(()=>Y(t,a),[t,a])),u=Z(l,e);return"style"in l&&l.style&&"style"in e&&e.style&&(typeof l.style=="function"||typeof e.style=="function"?u.style=f=>{let i=typeof l.style=="function"?l.style(f):l.style,d={...f.defaultStyle,...i},b=typeof e.style=="function"?e.style({...f,defaultStyle:d}):e.style;return{...d,...b}}:u.style={...l.style,...e.style}),[u,o]}function Pe(){let[e,t]=s.exports.useState(!0),r=s.exports.useRef(!1),n=s.exports.useCallback(a=>{r.current=!0,t(!!a)},[]);return $(()=>{r.current||t(!1)},[]),[n,e]}function ke(e,t=!0){let[r,n]=s.exports.useState(!0);return T(e,r&&t,s.exports.useCallback(()=>n(!1),[])),r&&t}function Me(e,t){let[r,n]=s.exports.useState(!1),[a,l]=s.exports.useState("idle");return!t&&e.current&&a==="idle"&&(r=!0,n(!0),l("exiting")),!e.current&&a==="exited"&&l("idle"),T(e,r,s.exports.useCallback(()=>{l("exited"),n(!1)},[])),r}function T(e,t,r){let n=s.exports.useRef(null);t&&e.current&&(n.current=window.getComputedStyle(e.current).animation),$(()=>{if(t&&e.current){let a=window.getComputedStyle(e.current);if(a.animationName&&a.animationName!=="none"&&a.animation!==n.current){let l=u=>{u.target===e.current&&(o.removeEventListener("animationend",l),W.flushSync(()=>{r()}))},o=e.current;return o.addEventListener("animationend",l),()=>{o.removeEventListener("animationend",l)}}else r()}},[e,t,r])}const oe=c.createContext({register:()=>{}});oe.displayName="PressResponderContext";class le{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(t,r){this.nativeEvent=r,this.target=r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget,this.bubbles=r.bubbles,this.cancelable=r.cancelable,this.defaultPrevented=r.defaultPrevented,this.eventPhase=r.eventPhase,this.isTrusted=r.isTrusted,this.timeStamp=r.timeStamp,this.type=t}}function se(e){let t=s.exports.useRef({isFocused:!1,observer:null});$(()=>{const n=t.current;return()=>{n.observer&&(n.observer.disconnect(),n.observer=null)}},[]);let r=S(n=>{e==null||e(n)});return s.exports.useCallback(n=>{if(n.target instanceof HTMLButtonElement||n.target instanceof HTMLInputElement||n.target instanceof HTMLTextAreaElement||n.target instanceof HTMLSelectElement){t.current.isFocused=!0;let a=n.target,l=o=>{t.current.isFocused=!1,a.disabled&&r(new le("blur",o)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};a.addEventListener("focusout",l,{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&a.disabled){var o;(o=t.current.observer)===null||o===void 0||o.disconnect();let u=a===document.activeElement?null:document.activeElement;a.dispatchEvent(new FocusEvent("blur",{relatedTarget:u})),a.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:u}))}}),t.current.observer.observe(a,{attributes:!0,attributeFilter:["disabled"]})}},[r])}function Le(e){let{isDisabled:t,onBlurWithin:r,onFocusWithin:n,onFocusWithinChange:a}=e,l=s.exports.useRef({isFocusWithin:!1}),o=s.exports.useCallback(i=>{l.current.isFocusWithin&&!i.currentTarget.contains(i.relatedTarget)&&(l.current.isFocusWithin=!1,r&&r(i),a&&a(!1))},[r,a,l]),u=se(o),f=s.exports.useCallback(i=>{!l.current.isFocusWithin&&document.activeElement===i.target&&(n&&n(i),a&&a(!0),l.current.isFocusWithin=!0,u(i))},[n,a,u]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:f,onBlur:o}}}const ue=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),ie=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function ce(e){if(Intl.Locale){let r=new Intl.Locale(e).maximize(),n=typeof r.getTextInfo=="function"?r.getTextInfo():r.textInfo;if(n)return n.direction==="rtl";if(r.script)return ue.has(r.script)}let t=e.split("-")[0];return ie.has(t)}const fe=Symbol.for("react-aria.i18n.locale");function I(){let e=typeof window<"u"&&window[fe]||typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch{e="en-US"}return{locale:e,direction:ce(e)?"rtl":"ltr"}}let w=I(),p=new Set;function k(){w=I();for(let e of p)e(w)}function de(){let e=C(),[t,r]=s.exports.useState(w);return s.exports.useEffect(()=>(p.size===0&&window.addEventListener("languagechange",k),p.add(r),()=>{p.delete(r),p.size===0&&window.removeEventListener("languagechange",k)}),[]),e?{locale:"en-US",direction:"ltr"}:t}const $e=c.createContext(null);function Te(){let e=de();return s.exports.useContext($e)||e}export{ge as $,Z as a,Te as b,J as c,Se as d,ne as e,Ce as f,me as g,ae as h,we as i,Fe as j,S as k,xe as l,C as m,oe as n,ve as o,Q as p,se as q,Le as r,he as s,Pe as t,Me as u,ye as v,ke as w,P as x,Y as y};
