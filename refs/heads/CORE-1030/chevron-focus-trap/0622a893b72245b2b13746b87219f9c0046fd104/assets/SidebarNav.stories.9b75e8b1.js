import{a as ue}from"./hooks.9d32f7b4.js";import{R as $,r as N,C as j,s as w,a as b,c as Z,j as S,W as fe,F as ze}from"./index.2d4485a1.js";import{R as je,L as He}from"./RightArrow.b51e8a6d.js";import{B as be,a as pe}from"./BodyPortal.930139df.js";import{c as G,z as O,b as ve}from"./theme.7ac48908.js";import{d as Ve,e as Ge,b as Ue,P as qe}from"./NavBar.116d7383.js";import"./contexts.a293ef27.js";import"./utils.e3275d2c.js";import"./palette.15e4d008.js";import"./Dialog.module.0522cde4.js";import"./Button.module.71bfa7bb.js";import"./useFocusRing.module.08386828.js";import"./context.module.e2b11994.js";import"./useButton.module.1ada284a.js";import"./VisuallyHidden.module.fa273d49.js";import"./OverlayArrow.module.070cd530.js";import"./Collection.module.6f250d03.js";import"./useTreeState.module.6254506b.js";const x=typeof document<"u"?$.useLayoutEffect:()=>{},g=e=>{var t;return(t=e==null?void 0:e.ownerDocument)!==null&&t!==void 0?t:document},K=e=>e&&"window"in e&&e.window===e?e:g(e).defaultView||window;function Qe(e){return e!==null&&typeof e=="object"&&"nodeType"in e&&typeof e.nodeType=="number"}function Je(e){return Qe(e)&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&"host"in e}let Ye=!1;function H(){return Ye}function oe(e,t){if(!H())return t&&e?e.contains(t):!1;if(!e||!t)return!1;let n=t;for(;n!==null;){if(n===e)return!0;n.tagName==="SLOT"&&n.assignedSlot?n=n.assignedSlot.parentNode:Je(n)?n=n.host:n=n.parentNode}return!1}const T=(e=document)=>{var t;if(!H())return e.activeElement;let n=e.activeElement;for(;n&&"shadowRoot"in n&&((t=n.shadowRoot)===null||t===void 0?void 0:t.activeElement);)n=n.shadowRoot.activeElement;return n};function M(e){return H()&&e.target.shadowRoot&&e.composedPath?e.composedPath()[0]:e.target}class Xe{get currentNode(){return this._currentNode}set currentNode(t){if(!oe(this.root,t))throw new Error("Cannot set currentNode to a node that is not contained by the root node.");const n=[];let r=t,o=t;for(this._currentNode=t;r&&r!==this.root;)if(r.nodeType===Node.DOCUMENT_FRAGMENT_NODE){const l=r,a=this._doc.createTreeWalker(l,this.whatToShow,{acceptNode:this._acceptNode});n.push(a),a.currentNode=o,this._currentSetFor.add(a),r=o=l.host}else r=r.parentNode;const i=this._doc.createTreeWalker(this.root,this.whatToShow,{acceptNode:this._acceptNode});n.push(i),i.currentNode=o,this._currentSetFor.add(i),this._walkerStack=n}get doc(){return this._doc}firstChild(){let t=this.currentNode,n=this.nextNode();return oe(t,n)?(n&&(this.currentNode=n),n):(this.currentNode=t,null)}lastChild(){let n=this._walkerStack[0].lastChild();return n&&(this.currentNode=n),n}nextNode(){const t=this._walkerStack[0].nextNode();if(t){if(t.shadowRoot){var n;let o;if(typeof this.filter=="function"?o=this.filter(t):!((n=this.filter)===null||n===void 0)&&n.acceptNode&&(o=this.filter.acceptNode(t)),o===NodeFilter.FILTER_ACCEPT)return this.currentNode=t,t;let i=this.nextNode();return i&&(this.currentNode=i),i}return t&&(this.currentNode=t),t}else if(this._walkerStack.length>1){this._walkerStack.shift();let r=this.nextNode();return r&&(this.currentNode=r),r}else return null}previousNode(){const t=this._walkerStack[0];if(t.currentNode===t.root){if(this._currentSetFor.has(t))if(this._currentSetFor.delete(t),this._walkerStack.length>1){this._walkerStack.shift();let o=this.previousNode();return o&&(this.currentNode=o),o}else return null;return null}const n=t.previousNode();if(n){if(n.shadowRoot){var r;let i;if(typeof this.filter=="function"?i=this.filter(n):!((r=this.filter)===null||r===void 0)&&r.acceptNode&&(i=this.filter.acceptNode(n)),i===NodeFilter.FILTER_ACCEPT)return n&&(this.currentNode=n),n;let l=this.lastChild();return l&&(this.currentNode=l),l}return n&&(this.currentNode=n),n}else if(this._walkerStack.length>1){this._walkerStack.shift();let o=this.previousNode();return o&&(this.currentNode=o),o}else return null}nextSibling(){return null}previousSibling(){return null}parentNode(){return null}constructor(t,n,r,o){this._walkerStack=[],this._currentSetFor=new Set,this._acceptNode=l=>{if(l.nodeType===Node.ELEMENT_NODE){const f=l.shadowRoot;if(f){const d=this._doc.createTreeWalker(f,this.whatToShow,{acceptNode:this._acceptNode});return this._walkerStack.unshift(d),NodeFilter.FILTER_ACCEPT}else{var a;if(typeof this.filter=="function")return this.filter(l);if(!((a=this.filter)===null||a===void 0)&&a.acceptNode)return this.filter.acceptNode(l);if(this.filter===null)return NodeFilter.FILTER_ACCEPT}}return NodeFilter.FILTER_SKIP},this._doc=t,this.root=n,this.filter=o!=null?o:null,this.whatToShow=r!=null?r:NodeFilter.SHOW_ALL,this._currentNode=n,this._walkerStack.unshift(t.createTreeWalker(n,r,this._acceptNode));const i=n.shadowRoot;if(i){const l=this._doc.createTreeWalker(i,this.whatToShow,{acceptNode:this._acceptNode});this._walkerStack.unshift(l)}}}function Ze(e,t,n,r){return H()?new Xe(e,t,n,r):e.createTreeWalker(t,n,r)}function ie(e){if(et())e.focus({preventScroll:!0});else{let t=tt(e);e.focus(),nt(t)}}let W=null;function et(){if(W==null){W=!1;try{document.createElement("div").focus({get preventScroll(){return W=!0,!0}})}catch{}}return W}function tt(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}function nt(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}function he(e){var t;return typeof window>"u"||window.navigator==null?!1:((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.brands.some(n=>e.test(n.brand)))||e.test(window.navigator.userAgent)}function rt(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function ee(e){let t=null;return()=>(t==null&&(t=e()),t)}const ot=ee(function(){return rt(/^Mac/i)}),it=ee(function(){return he(/Chrome/i)}),me=ee(function(){return he(/Android/i)});let L=new Map,U=new Set;function ae(){if(typeof window>"u")return;function e(r){return"propertyName"in r}let t=r=>{if(!e(r)||!r.target)return;let o=L.get(r.target);o||(o=new Set,L.set(r.target,o),r.target.addEventListener("transitioncancel",n,{once:!0})),o.add(r.propertyName)},n=r=>{if(!e(r)||!r.target)return;let o=L.get(r.target);if(!!o&&(o.delete(r.propertyName),o.size===0&&(r.target.removeEventListener("transitioncancel",n),L.delete(r.target)),L.size===0)){for(let i of U)i();U.clear()}};document.body.addEventListener("transitionrun",t),document.body.addEventListener("transitionend",n)}typeof document<"u"&&(document.readyState!=="loading"?ae():document.addEventListener("DOMContentLoaded",ae));function at(){for(const[e]of L)"isConnected"in e&&!e.isConnected&&L.delete(e)}function lt(e){requestAnimationFrame(()=>{at(),L.size===0?e():U.add(e)})}function dt(e){return e.mozInputSource===0&&e.isTrusted?!0:me()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}const te=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable^="false"])'],ct=te.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";te.push('[tabindex]:not([tabindex="-1"]):not([disabled])');const st=te.join(':not([hidden]):not([tabindex="-1"]),');function ut(e){return e.matches(ct)}function ft(e){return e.matches(st)}function bt(e){const t=K(e);if(!(e instanceof t.HTMLElement)&&!(e instanceof t.SVGElement))return!1;let{display:n,visibility:r}=e.style,o=n!=="none"&&r!=="hidden"&&r!=="collapse";if(o){const{getComputedStyle:i}=e.ownerDocument.defaultView;let{display:l,visibility:a}=i(e);o=l!=="none"&&a!=="hidden"&&a!=="collapse"}return o}function pt(e,t){return!e.hasAttribute("hidden")&&!e.hasAttribute("data-react-aria-prevent-focus")&&(e.nodeName==="DETAILS"&&t&&t.nodeName!=="SUMMARY"?e.hasAttribute("open"):!0)}function $e(e,t){return e.nodeName!=="#comment"&&bt(e)&&pt(e,t)&&(!e.parentElement||$e(e.parentElement,e))}let ge=!1,D=null,vt=new Set,B=new Map,F=!1,q=!1;function ne(e,t){for(let n of vt)n(e,t)}function ht(e){return!(e.metaKey||!ot()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function I(e){F=!0,ht(e)&&(D="keyboard",ne("keyboard",e))}function A(e){D="pointer",(e.type==="mousedown"||e.type==="pointerdown")&&(F=!0,ne("pointer",e))}function we(e){dt(e)&&(F=!0,D="virtual")}function Ne(e){e.target===window||e.target===document||ge||!e.isTrusted||(!F&&!q&&(D="virtual",ne("virtual",e)),F=!1,q=!1)}function Ee(){ge||(F=!1,q=!0)}function le(e){if(typeof window>"u"||typeof document>"u"||B.get(K(e)))return;const t=K(e),n=g(e);let r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){F=!0,r.apply(this,arguments)},n.addEventListener("keydown",I,!0),n.addEventListener("keyup",I,!0),n.addEventListener("click",we,!0),t.addEventListener("focus",Ne,!0),t.addEventListener("blur",Ee,!1),typeof PointerEvent<"u"&&(n.addEventListener("pointerdown",A,!0),n.addEventListener("pointermove",A,!0),n.addEventListener("pointerup",A,!0)),t.addEventListener("beforeunload",()=>{ye(e)},{once:!0}),B.set(t,{focus:r})}const ye=(e,t)=>{const n=K(e),r=g(e);t&&r.removeEventListener("DOMContentLoaded",t),B.has(n)&&(n.HTMLElement.prototype.focus=B.get(n).focus,r.removeEventListener("keydown",I,!0),r.removeEventListener("keyup",I,!0),r.removeEventListener("click",we,!0),n.removeEventListener("focus",Ne,!0),n.removeEventListener("blur",Ee,!1),typeof PointerEvent<"u"&&(r.removeEventListener("pointerdown",A,!0),r.removeEventListener("pointermove",A,!0),r.removeEventListener("pointerup",A,!0)),B.delete(n))};function mt(e){const t=g(e);let n;return t.readyState!=="loading"?le(e):(n=()=>{le(e)},t.addEventListener("DOMContentLoaded",n)),()=>ye(e,n)}typeof document<"u"&&mt();function Te(){return D}function $t(e){const t=g(e),n=T(t);if(Te()==="virtual"){let r=n;lt(()=>{T(t)===r&&e.isConnected&&ie(e)})}else ie(e)}const de=$.createContext(null),Q="react-aria-focus-scope-restore";let v=null;function gt(e){let{children:t,contain:n,restoreFocus:r,autoFocus:o}=e,i=N.exports.useRef(null),l=N.exports.useRef(null),a=N.exports.useRef([]),{parentNode:f}=N.exports.useContext(de)||{},d=N.exports.useMemo(()=>new Y({scopeRef:a}),[a]);x(()=>{let s=f||m.root;if(m.getTreeNode(s.scopeRef)&&v&&!z(v,s.scopeRef)){let u=m.getTreeNode(v);u&&(s=u)}s.addChild(d),m.addNode(d)},[d,f]),x(()=>{let s=m.getTreeNode(a);s&&(s.contain=!!n)},[n]),x(()=>{var s;let u=(s=i.current)===null||s===void 0?void 0:s.nextSibling,h=[],y=V=>V.stopPropagation();for(;u&&u!==l.current;)h.push(u),u.addEventListener(Q,y),u=u.nextSibling;return a.current=h,()=>{for(let V of h)V.removeEventListener(Q,y)}},[t]),yt(a,r,n),Nt(a,n),Tt(a,r,n),Et(a,o),N.exports.useEffect(()=>{const s=T(g(a.current?a.current[0]:void 0));let u=null;if(E(s,a.current)){for(let h of m.traverse())h.scopeRef&&E(s,h.scopeRef.current)&&(u=h);u===m.getTreeNode(a)&&(v=u.scopeRef)}},[a]),x(()=>()=>{var s,u,h;let y=(h=(u=m.getTreeNode(a))===null||u===void 0||(s=u.parent)===null||s===void 0?void 0:s.scopeRef)!==null&&h!==void 0?h:null;(a===v||z(a,v))&&(!y||m.getTreeNode(y))&&(v=y),m.removeTreeNode(a)},[a]);let p=N.exports.useMemo(()=>wt(a),[]),c=N.exports.useMemo(()=>({focusManager:p,parentNode:d}),[d,p]);return $.createElement(de.Provider,{value:c},$.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:i}),t,$.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:l}))}function wt(e){return{focusNext(t={}){let n=e.current,{from:r,tabbable:o,wrap:i,accept:l}=t;var a;let f=r||T(g((a=n[0])!==null&&a!==void 0?a:void 0)),d=n[0].previousElementSibling,p=R(n),c=_(p,{tabbable:o,accept:l},n);c.currentNode=E(f,n)?f:d;let s=c.nextNode();return!s&&i&&(c.currentNode=d,s=c.nextNode()),s&&k(s,!0),s},focusPrevious(t={}){let n=e.current,{from:r,tabbable:o,wrap:i,accept:l}=t;var a;let f=r||T(g((a=n[0])!==null&&a!==void 0?a:void 0)),d=n[n.length-1].nextElementSibling,p=R(n),c=_(p,{tabbable:o,accept:l},n);c.currentNode=E(f,n)?f:d;let s=c.previousNode();return!s&&i&&(c.currentNode=d,s=c.previousNode()),s&&k(s,!0),s},focusFirst(t={}){let n=e.current,{tabbable:r,accept:o}=t,i=R(n),l=_(i,{tabbable:r,accept:o},n);l.currentNode=n[0].previousElementSibling;let a=l.nextNode();return a&&k(a,!0),a},focusLast(t={}){let n=e.current,{tabbable:r,accept:o}=t,i=R(n),l=_(i,{tabbable:r,accept:o},n);l.currentNode=n[n.length-1].nextElementSibling;let a=l.previousNode();return a&&k(a,!0),a}}}function R(e){return e[0].parentElement}function P(e){let t=m.getTreeNode(v);for(;t&&t.scopeRef!==e;){if(t.contain)return!1;t=t.parent}return!0}function Nt(e,t){let n=N.exports.useRef(void 0),r=N.exports.useRef(void 0);x(()=>{let o=e.current;if(!t){r.current&&(cancelAnimationFrame(r.current),r.current=void 0);return}const i=g(o?o[0]:void 0);let l=d=>{if(d.key!=="Tab"||d.altKey||d.ctrlKey||d.metaKey||!P(e)||d.isComposing)return;let p=T(i),c=e.current;if(!c||!E(p,c))return;let s=R(c),u=_(s,{tabbable:!0},c);if(!p)return;u.currentNode=p;let h=d.shiftKey?u.previousNode():u.nextNode();h||(u.currentNode=d.shiftKey?c[c.length-1].nextElementSibling:c[0].previousElementSibling,h=d.shiftKey?u.previousNode():u.nextNode()),d.preventDefault(),h&&k(h,!0)},a=d=>{(!v||z(v,e))&&E(M(d),e.current)?(v=e,n.current=M(d)):P(e)&&!C(M(d),e)?n.current?n.current.focus():v&&v.current&&J(v.current):P(e)&&(n.current=M(d))},f=d=>{r.current&&cancelAnimationFrame(r.current),r.current=requestAnimationFrame(()=>{let p=Te(),c=(p==="virtual"||p===null)&&me()&&it(),s=T(i);if(!c&&s&&P(e)&&!C(s,e)){v=e;let h=M(d);if(h&&h.isConnected){var u;n.current=h,(u=n.current)===null||u===void 0||u.focus()}else v.current&&J(v.current)}})};return i.addEventListener("keydown",l,!1),i.addEventListener("focusin",a,!1),o==null||o.forEach(d=>d.addEventListener("focusin",a,!1)),o==null||o.forEach(d=>d.addEventListener("focusout",f,!1)),()=>{i.removeEventListener("keydown",l,!1),i.removeEventListener("focusin",a,!1),o==null||o.forEach(d=>d.removeEventListener("focusin",a,!1)),o==null||o.forEach(d=>d.removeEventListener("focusout",f,!1))}},[e,t]),x(()=>()=>{r.current&&cancelAnimationFrame(r.current)},[r])}function xe(e){return C(e)}function E(e,t){return!e||!t?!1:t.some(n=>n.contains(e))}function C(e,t=null){if(e instanceof Element&&e.closest("[data-react-aria-top-layer]"))return!0;for(let{scopeRef:n}of m.traverse(m.getTreeNode(t)))if(n&&E(e,n.current))return!0;return!1}function z(e,t){var n;let r=(n=m.getTreeNode(t))===null||n===void 0?void 0:n.parent;for(;r;){if(r.scopeRef===e)return!0;r=r.parent}return!1}function k(e,t=!1){if(e!=null&&!t)try{$t(e)}catch{}else if(e!=null)try{e.focus()}catch{}}function Se(e,t=!0){let n=e[0].previousElementSibling,r=R(e),o=_(r,{tabbable:t},e);o.currentNode=n;let i=o.nextNode();return t&&!i&&(r=R(e),o=_(r,{tabbable:!1},e),o.currentNode=n,i=o.nextNode()),i}function J(e,t=!0){k(Se(e,t))}function Et(e,t){const n=$.useRef(t);N.exports.useEffect(()=>{if(n.current){v=e;const r=g(e.current?e.current[0]:void 0);!E(T(r),v.current)&&e.current&&J(e.current)}n.current=!1},[e])}function yt(e,t,n){x(()=>{if(t||n)return;let r=e.current;const o=g(r?r[0]:void 0);let i=l=>{let a=M(l);E(a,e.current)?v=e:xe(a)||(v=null)};return o.addEventListener("focusin",i,!1),r==null||r.forEach(l=>l.addEventListener("focusin",i,!1)),()=>{o.removeEventListener("focusin",i,!1),r==null||r.forEach(l=>l.removeEventListener("focusin",i,!1))}},[e,t,n])}function ce(e){let t=m.getTreeNode(v);for(;t&&t.scopeRef!==e;){if(t.nodeToRestore)return!1;t=t.parent}return(t==null?void 0:t.scopeRef)===e}function Tt(e,t,n){const r=N.exports.useRef(typeof document<"u"?T(g(e.current?e.current[0]:void 0)):null);x(()=>{let o=e.current;const i=g(o?o[0]:void 0);if(!t||n)return;let l=()=>{(!v||z(v,e))&&E(T(i),e.current)&&(v=e)};return i.addEventListener("focusin",l,!1),o==null||o.forEach(a=>a.addEventListener("focusin",l,!1)),()=>{i.removeEventListener("focusin",l,!1),o==null||o.forEach(a=>a.removeEventListener("focusin",l,!1))}},[e,n]),x(()=>{const o=g(e.current?e.current[0]:void 0);if(!t)return;let i=l=>{if(l.key!=="Tab"||l.altKey||l.ctrlKey||l.metaKey||!P(e)||l.isComposing)return;let a=o.activeElement;if(!C(a,e)||!ce(e))return;let f=m.getTreeNode(e);if(!f)return;let d=f.nodeToRestore,p=_(o.body,{tabbable:!0});p.currentNode=a;let c=l.shiftKey?p.previousNode():p.nextNode();if((!d||!d.isConnected||d===o.body)&&(d=void 0,f.nodeToRestore=void 0),(!c||!C(c,e))&&d){p.currentNode=d;do c=l.shiftKey?p.previousNode():p.nextNode();while(C(c,e));l.preventDefault(),l.stopPropagation(),c?k(c,!0):xe(d)?k(d,!0):a.blur()}};return n||o.addEventListener("keydown",i,!0),()=>{n||o.removeEventListener("keydown",i,!0)}},[e,t,n]),x(()=>{const o=g(e.current?e.current[0]:void 0);if(!t)return;let i=m.getTreeNode(e);if(!!i){var l;return i.nodeToRestore=(l=r.current)!==null&&l!==void 0?l:void 0,()=>{let a=m.getTreeNode(e);if(!a)return;let f=a.nodeToRestore,d=T(o);if(t&&f&&(d&&C(d,e)||d===o.body&&ce(e))){let p=m.clone();requestAnimationFrame(()=>{if(o.activeElement===o.body){let c=p.getTreeNode(e);for(;c;){if(c.nodeToRestore&&c.nodeToRestore.isConnected){se(c.nodeToRestore);return}c=c.parent}for(c=p.getTreeNode(e);c;){if(c.scopeRef&&c.scopeRef.current&&m.getTreeNode(c.scopeRef)){let s=Se(c.scopeRef.current,!0);se(s);return}c=c.parent}}})}}}},[e,t])}function se(e){e.dispatchEvent(new CustomEvent(Q,{bubbles:!0,cancelable:!0}))&&k(e)}function _(e,t,n){let r=t!=null&&t.tabbable?ft:ut,o=(e==null?void 0:e.nodeType)===Node.ELEMENT_NODE?e:null,i=g(o),l=Ze(i,e||i,NodeFilter.SHOW_ELEMENT,{acceptNode(a){var f;return!(t==null||(f=t.from)===null||f===void 0)&&f.contains(a)?NodeFilter.FILTER_REJECT:r(a)&&$e(a)&&(!n||E(a,n))&&(!(t!=null&&t.accept)||t.accept(a))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return t!=null&&t.from&&(l.currentNode=t.from),l}class re{get size(){return this.fastMap.size}getTreeNode(t){return this.fastMap.get(t)}addTreeNode(t,n,r){let o=this.fastMap.get(n!=null?n:null);if(!o)return;let i=new Y({scopeRef:t});o.addChild(i),i.parent=o,this.fastMap.set(t,i),r&&(i.nodeToRestore=r)}addNode(t){this.fastMap.set(t.scopeRef,t)}removeTreeNode(t){if(t===null)return;let n=this.fastMap.get(t);if(!n)return;let r=n.parent;for(let i of this.traverse())i!==n&&n.nodeToRestore&&i.nodeToRestore&&n.scopeRef&&n.scopeRef.current&&E(i.nodeToRestore,n.scopeRef.current)&&(i.nodeToRestore=n.nodeToRestore);let o=n.children;r&&(r.removeChild(n),o.size>0&&o.forEach(i=>r&&r.addChild(i))),this.fastMap.delete(n.scopeRef)}*traverse(t=this.root){if(t.scopeRef!=null&&(yield t),t.children.size>0)for(let n of t.children)yield*this.traverse(n)}clone(){var t;let n=new re;var r;for(let o of this.traverse())n.addTreeNode(o.scopeRef,(r=(t=o.parent)===null||t===void 0?void 0:t.scopeRef)!==null&&r!==void 0?r:null,o.nodeToRestore);return n}constructor(){this.fastMap=new Map,this.root=new Y({scopeRef:null}),this.fastMap.set(null,this.root)}}class Y{addChild(t){this.children.add(t),t.parent=this}removeChild(t){this.children.delete(t),t.parent=void 0}constructor(t){this.children=new Set,this.contain=!1,this.scopeRef=t.scopeRef}}let m=new re;const X="5.6rem",ke="24rem",Le=j`
  --collapsed-width: ${X};
  --expanded-width: ${ke};
  width: var(--expanded-width);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  box-shadow: -0.2rem 0 0.4rem rgba(0, 0, 0, 0.1) inset;
  background: ${G.palette.neutralBright};
  color: ${G.palette.neutralThin};
  z-index: ${O.navbar-1};

  @media (max-width: 15em) {
    --expanded-width: 100vw;
    width: 100vw;
  }

  &.collapsed {
    width: 5.6rem;
  }

  &.mobile {
    position: fixed;
    height: 100%;
  }

  &.mobile + nav,
  &.mobile + nav + main {
    margin-left: ${X};
  }

  &.mobile ~ main::before,
  &.mobile ~ [data-backdrop-target]::before {
    content: "";
    background: none;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    position: fixed;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    z-index: ${O.navbar+1};
  }

  &.mobile:not(.collapsed),
  &.mobile.collapsing {
    z-index: ${O.sidebar};

    & ~ main::before,
    & ~ [data-backdrop-target]::before {
      background: rgba(0 0 0 / 0.7);
      opacity: 1;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      z-index: ${O.sidebar-1};
    }
  }

  &.mobile.collapsing {
    & ~ main::before,
    & ~ [data-backdrop-target]::before {
      opacity: 0;
    }
  }

  @keyframes expandSidebarNav {
    from {
      width: var(--collapsed-width);
    }
    to {
      width: var(--expanded-width);
    }
  }
  @keyframes collapseSidebarNav {
    from {
      width: var(--expanded-width);
    }
    to {
      width: var(--collapsed-width);
    }
  }
  &.expanding {
    animation: expandSidebarNav 300ms forwards;
  }
  &.collapsing {
    animation: collapseSidebarNav 300ms forwards;
  }
`,_e=w.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`,Re=w.div`
  height: 100%;
  overflow-y: auto;
`,Ce=w.footer`
  button {
    width: 100%;
  }
`,Fe=w.button`
  position: absolute;
  right: 0;
  top: 1.8rem;
  width: 1.6rem;
  height: 2.4rem;
  background: #fff;
  padding: 0;
  border: 0;
  cursor: pointer;
  border: 0.1rem solid #959595;
  border-right: 0;
  border-radius: 0.4rem 0 0 0.4rem;
  z-index: 1;
`,Me=({mobileBreakpoint:e=`${ve.mobileNavBreak}em`,...t})=>{var l;const n=ue(`(max-width: ${e})`),r=(l=t.isMobile)!=null?l:n,[o,i]=$.useState(r);return{isMobile:r,navIsCollapsed:o,setNavIsCollapsed:i}},Ae=()=>{const[e,t]=$.useState("");return $.useEffect(()=>{if(!e||e==="idle")return;const n=setTimeout(()=>t("idle"),300);return()=>clearTimeout(n)},[e,t]),{navAnimation:e,setNavAnimation:t}},Pe=({sidebarNavRef:e,navHeader:t,navFooter:n,children:r,navIsCollapsed:o,setNavIsCollapsed:i,navAnimation:l,isMobile:a})=>{const f=$.useRef(null);$.useLayoutEffect(()=>{i(a)},[a]),$.useEffect(()=>{if(!a||o)return;const u=y=>{a&&!o&&(e==null?void 0:e.current)&&!e.current.contains(y.target)&&document.body.contains(y.target)&&i(!0)},h=y=>{a&&!o&&y.key==="Escape"&&i(!0)};return document.addEventListener("click",u),document.addEventListener("touchend",u),document.addEventListener("keydown",h),()=>{document.removeEventListener("click",u),document.removeEventListener("touchend",u),document.removeEventListener("keydown",h)}},[a,o,i,e]);const d={navIsCollapsed:o,setNavIsCollapsed:i,isMobile:a};$.useEffect(()=>{l==="idle"&&f.current.focus()},[l]);const p=$.useRef(null),[c,s]=$.useState(0);return requestAnimationFrame(()=>{p.current&&(p.current.scrollTop=c)}),S(gt,{contain:a&&!o,children:[b(Fe,{"aria-expanded":!o,ref:f,"data-testid":"sidebarnav-toggle",className:Z({collapsed:o}),onClick:u=>{i(!o),u.stopPropagation()},"aria-label":o?"Expand navigation":"Collapse navigation",children:o?b(je,{}):b(He,{})}),t?b(_e,{children:typeof t=="function"?t(d):t}):null,b(Re,{"data-testid":"nav-body",ref:p,onScroll:u=>s(u.target.scrollTop),children:typeof r=="function"?r(d):r}),n?b(Ce,{children:typeof n=="function"?n(d):n}):null]})},xt=w(({className:e,id:t,ariaLabel:n,...r})=>{const{isMobile:o,navIsCollapsed:i,setNavIsCollapsed:l}=Me(r),a=$.useRef(null),{navAnimation:f,setNavAnimation:d}=Ae(),p=c=>{c!==i&&d(c?"collapsing":"expanding"),l(c)};return b("nav",{id:t,ref:a,"data-testid":"sidebarnav","aria-label":n,className:Z(e,{collapsed:i,mobile:o,collapsing:f==="collapsing",expanding:f==="expanding"}),children:b(Pe,{...r,sidebarNavRef:a,navIsCollapsed:i,setNavIsCollapsed:p,isMobile:o,children:r.children})})})`
  ${Le}
`,St=w(({className:e,id:t,ariaLabel:n,...r})=>{const{isMobile:o,navIsCollapsed:i,setNavIsCollapsed:l}=Me(r),a=$.useRef(document.createElement("NAV")),{navAnimation:f,setNavAnimation:d}=Ae(),p=c=>{c!==i&&d(c?"collapsing":"expanding"),l(c)};return b(be,{ref:a,id:t,tagName:"nav",slot:"sidebar","data-testid":"sidebarnav",ariaLabel:n,className:Z(e,{collapsed:i,mobile:o,collapsing:f==="collapsing",expanding:f==="expanding"}),children:b(Pe,{...r,navIsCollapsed:i,setNavIsCollapsed:p,sidebarNavRef:a,navAnimation:f,isMobile:o})})})`
  ${Le}
`,Be={NavHeader:_e,NavBody:Re,NavFooter:Ce,ToggleButton:Fe,expandedWidth:ke,collapsedWidth:X},kt=fe`
  html, body, #ladle-root {
    margin: 0;
    padding: 0;
  }

  #ladle-root {
    height: 100vh;
  }
`,Lt=fe`
  body {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "sidebar nav" "sidebar main";
    overflow: hidden;
    height: 100vh;
    background: #fff;

    nav[data-portal-slot="sidebar"] {
      grid-area: sidebar;
    }

    nav[data-portal-slot="nav"] {
      grid-area: nav;
    }

    main {
      grid-area: main;
      overflow: hidden auto;
      display: flex;
      flex-direction: column;
      place-content: center;
      align-items: center;
      text-align: center;
    }
  }

  #ladle-root {
    position: absolute;
    right: 0;
  }
`,De=w.div`
  flex: 1;
  display: grid;
  grid-template: "nav main" / auto 1fr;
  overflow: hidden;
  height: 100%;

  main {
    grid-area: main;
    overflow: hidden auto;
    display: flex;
    flex-direction: column;
    place-content: center;
    align-items: center;
    text-align: center;
  }
`,Oe=j`
  overflow: auto;
  grid-area: nav;
  padding: 2rem;

  ul {
    list-style: none;
    padding: 0;
  }

  ${Be.ToggleButton} {
    margin-top: 3.2rem;
  }
`,We=j`
  .mobile + & {
    margin-left: 5.6rem;
  }
`,_t=w(xt)`
  ${Oe}
`,Rt=w(St)`
  ${Oe}
`,Ct=w.main`
  ${We}
`,Ft=w(be)`
  ${We}
  padding: 4rem;
`,Mt=w.li`
  a {
    text-decoration: none;
    color: black;
    padding: 0.5rem 1rem;
    display: block;
    border-radius: 4px;

    ${e=>e.active&&j`
        background-color: #007bff;
        color: white;
      `}
  }
`,Ke=["Home","About","Services","Contact",...Array.from({length:50},(e,t)=>(t+1).toString())],Ie=({items:e,setNavIsCollapsed:t,navIsCollapsed:n,isMobile:r})=>{const[o,i]=$.useState(null);return b("ul",{children:e.map((l,a)=>b(Mt,{active:o===l,children:b("a",{href:"#",onClick:f=>{f.preventDefault(),n?t(!1):(i(l),t(r))},children:l})},a))})},At=()=>{const e=ue(`(max-width: ${ve.mobileNavBreak}em)`);return S(ze,{children:[b(kt,{}),S(De,{children:[b(_t,{ariaLabel:"Main navigation",children:({setNavIsCollapsed:t,navIsCollapsed:n,isMobile:r})=>b(Ie,{items:Ke,setNavIsCollapsed:t,navIsCollapsed:n,isMobile:r})}),b(Ct,{style:{padding:"4rem",marginLeft:e?Be.collapsedWidth:""},children:S("h1",{children:["Main content",b("p",{children:b("a",{href:"#",children:"focusable element"})})]})})]})]})},Pt=w(Ve)`
  &:hover {
    svg path {
      fill: ${G.palette.lightBlue};
    }
  }
`,Bt=()=>S(pe.Provider,{value:["sidebar","nav","main"],children:[b(Lt,{}),S(De,{children:[b(Rt,{ariaLabel:"Header navigation",navHeader:b(Ge,{alt:"logo"}),children:({setNavIsCollapsed:e,navIsCollapsed:t,isMobile:n})=>b(Ie,{items:Ke,setNavIsCollapsed:e,navIsCollapsed:t,isMobile:n})}),S(Ue,{ariaLabel:"Main navigation",children:[b("h1",{children:"Title"}),b(Pt,{label:"Menu",children:S(qe,{children:[b("button",{children:"Example button"}),b("button",{children:"Another button"})]})})]}),b(Ft,{tagName:"main",slot:"main",children:S("h1",{children:["Main content",b("p",{children:b("a",{href:"#",children:"focusable element"})}),b("p",{children:Date.now().toString()})]})})]})]}),tn=()=>b(pe.Provider,{value:["sidebar","nav","main"],children:b(Bt,{})}),nn=()=>b(At,{});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{tn as UsingBodyPortal,nn as WithoutBodyPortal};
