import{R as D,r as I}from"./index.0f9cd158.js";const X=typeof document<"u"?D.useLayoutEffect:()=>{},$=e=>{var n;return(n=e==null?void 0:e.ownerDocument)!==null&&n!==void 0?n:document},c=e=>e&&"window"in e&&e.window===e?e:$(e).defaultView||window;function T(e){if(K())e.focus({preventScroll:!0});else{let n=P(e);e.focus(),F(n)}}let v=null;function K(){if(v==null){v=!1;try{document.createElement("div").focus({get preventScroll(){return v=!0,!0}})}catch{}}return v}function P(e){let n=e.parentNode,t=[],r=document.scrollingElement||document.documentElement;for(;n instanceof HTMLElement&&n!==r;)(n.offsetHeight<n.scrollHeight||n.offsetWidth<n.scrollWidth)&&t.push({element:n,scrollTop:n.scrollTop,scrollLeft:n.scrollLeft}),n=n.parentNode;return r instanceof HTMLElement&&t.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),t}function F(e){for(let{element:n,scrollTop:t,scrollLeft:r}of e)n.scrollTop=t,n.scrollLeft=r}function p(e){var n;return typeof window>"u"||window.navigator==null?!1:((n=window.navigator.userAgentData)===null||n===void 0?void 0:n.brands.some(t=>e.test(t.brand)))||e.test(window.navigator.userAgent)}function y(e){var n;return typeof window<"u"&&window.navigator!=null?e.test(((n=window.navigator.userAgentData)===null||n===void 0?void 0:n.platform)||window.navigator.platform):!1}function i(e){let n=null;return()=>(n==null&&(n=e()),n)}const L=i(function(){return y(/^Mac/i)}),O=i(function(){return y(/^iPhone/i)}),j=i(function(){return y(/^iPad/i)||L()&&navigator.maxTouchPoints>1}),N=i(function(){return O()||j()}),Z=i(function(){return L()||N()}),ee=i(function(){return p(/AppleWebKit/i)&&!W()}),W=i(function(){return p(/Chrome/i)}),M=i(function(){return p(/Android/i)}),te=i(function(){return p(/Firefox/i)});let f=new Map,m=new Set;function x(){if(typeof window>"u")return;function e(r){return"propertyName"in r}let n=r=>{if(!e(r)||!r.target)return;let o=f.get(r.target);o||(o=new Set,f.set(r.target,o),r.target.addEventListener("transitioncancel",t,{once:!0})),o.add(r.propertyName)},t=r=>{if(!e(r)||!r.target)return;let o=f.get(r.target);if(!!o&&(o.delete(r.propertyName),o.size===0&&(r.target.removeEventListener("transitioncancel",t),f.delete(r.target)),f.size===0)){for(let s of m)s();m.clear()}};document.body.addEventListener("transitionrun",n),document.body.addEventListener("transitionend",t)}typeof document<"u"&&(document.readyState!=="loading"?x():document.addEventListener("DOMContentLoaded",x));function B(e){requestAnimationFrame(()=>{f.size===0?e():m.add(e)})}function z(e){return e.mozInputSource===0&&e.isTrusted?!0:M()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function ne(e){return!M()&&e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"}let u=null,E=new Set,l=new Map,d=!1,w=!1;const R={Tab:!0,Escape:!0};function h(e,n){for(let t of E)t(e,n)}function U(e){return!(e.metaKey||!L()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function b(e){d=!0,U(e)&&(u="keyboard",h("keyboard",e))}function a(e){u="pointer",(e.type==="mousedown"||e.type==="pointerdown")&&(d=!0,h("pointer",e))}function k(e){z(e)&&(d=!0,u="virtual")}function S(e){e.target===window||e.target===document||(!d&&!w&&(u="virtual",h("virtual",e)),d=!1,w=!1)}function H(){d=!1,w=!0}function g(e){if(typeof window>"u"||l.get(c(e)))return;const n=c(e),t=$(e);let r=n.HTMLElement.prototype.focus;n.HTMLElement.prototype.focus=function(){d=!0,r.apply(this,arguments)},t.addEventListener("keydown",b,!0),t.addEventListener("keyup",b,!0),t.addEventListener("click",k,!0),n.addEventListener("focus",S,!0),n.addEventListener("blur",H,!1),typeof PointerEvent<"u"?(t.addEventListener("pointerdown",a,!0),t.addEventListener("pointermove",a,!0),t.addEventListener("pointerup",a,!0)):(t.addEventListener("mousedown",a,!0),t.addEventListener("mousemove",a,!0),t.addEventListener("mouseup",a,!0)),n.addEventListener("beforeunload",()=>{_(e)},{once:!0}),l.set(n,{focus:r})}const _=(e,n)=>{const t=c(e),r=$(e);n&&r.removeEventListener("DOMContentLoaded",n),l.has(t)&&(t.HTMLElement.prototype.focus=l.get(t).focus,r.removeEventListener("keydown",b,!0),r.removeEventListener("keyup",b,!0),r.removeEventListener("click",k,!0),t.removeEventListener("focus",S,!0),t.removeEventListener("blur",H,!1),typeof PointerEvent<"u"?(r.removeEventListener("pointerdown",a,!0),r.removeEventListener("pointermove",a,!0),r.removeEventListener("pointerup",a,!0)):(r.removeEventListener("mousedown",a,!0),r.removeEventListener("mousemove",a,!0),r.removeEventListener("mouseup",a,!0)),l.delete(t))};function V(e){const n=$(e);let t;return n.readyState!=="loading"?g(e):(t=()=>{g(e)},n.addEventListener("DOMContentLoaded",t)),()=>_(e,t)}typeof document<"u"&&V();function G(){return u!=="pointer"}function q(){return u}const Y=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function J(e,n,t){var r;const o=typeof window<"u"?c(t==null?void 0:t.target).HTMLInputElement:HTMLInputElement,s=typeof window<"u"?c(t==null?void 0:t.target).HTMLTextAreaElement:HTMLTextAreaElement,A=typeof window<"u"?c(t==null?void 0:t.target).HTMLElement:HTMLElement,C=typeof window<"u"?c(t==null?void 0:t.target).KeyboardEvent:KeyboardEvent;return e=e||(t==null?void 0:t.target)instanceof o&&!Y.has(t==null||(r=t.target)===null||r===void 0?void 0:r.type)||(t==null?void 0:t.target)instanceof s||(t==null?void 0:t.target)instanceof A&&(t==null?void 0:t.target.isContentEditable),!(e&&n==="keyboard"&&t instanceof C&&!R[t.key])}function re(e,n,t){g(),I.exports.useEffect(()=>{let r=(o,s)=>{!J(!!(t!=null&&t.isTextInput),o,s)||e(G())};return E.add(r),()=>{E.delete(r)}},n)}function oe(e){const n=$(e);if(q()==="virtual"){let t=n.activeElement;B(()=>{n.activeElement===t&&e.isConnected&&T(e)})}else T(e)}export{X as $,Z as a,L as b,oe as c,q as d,T as e,te as f,ee as g,j as h,N as i,$ as j,B as k,ne as l,z as m,c as n,G as o,re as p};
