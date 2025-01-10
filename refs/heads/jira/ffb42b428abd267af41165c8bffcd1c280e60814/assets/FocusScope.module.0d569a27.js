import{d as P,B as V,$ as N,x as h,q as j}from"./context.module.bdacad02.js";import{r as m,R as S}from"./index.954e3bd6.js";function te(e,t){let{id:r,"aria-label":o,"aria-labelledby":n}=e;return r=P(r),n&&o?n=[...new Set([r,...n.trim().split(/\s+/)])].join(" "):n&&(n=n.trim().split(/\s+/).join(" ")),!o&&!n&&t&&(o=t),{id:r,"aria-label":o,"aria-labelledby":n}}function re(e,t){let r=window.getComputedStyle(e),o=/(auto|scroll)/.test(r.overflow+r.overflowX+r.overflowY);return o&&t&&(o=e.scrollHeight!==e.clientHeight||e.scrollWidth!==e.clientWidth),o}function z(e){const t=V(e);if(!(e instanceof t.HTMLElement)&&!(e instanceof t.SVGElement))return!1;let{display:r,visibility:o}=e.style,n=r!=="none"&&o!=="hidden"&&o!=="collapse";if(n){const{getComputedStyle:i}=e.ownerDocument.defaultView;let{display:u,visibility:a}=i(e);n=u!=="none"&&a!=="hidden"&&a!=="collapse"}return n}function H(e,t){return!e.hasAttribute("hidden")&&!e.hasAttribute("data-react-aria-prevent-focus")&&(e.nodeName==="DETAILS"&&t&&t.nodeName!=="SUMMARY"?e.hasAttribute("open"):!0)}function I(e,t){return e.nodeName!=="#comment"&&z(e)&&H(e,t)&&(!e.parentElement||I(e.parentElement,e))}const K=S.createContext(null),_="react-aria-focus-scope-restore";let s=null;function ne(e){let{children:t,contain:r,restoreFocus:o,autoFocus:n}=e,i=m.exports.useRef(null),u=m.exports.useRef(null),a=m.exports.useRef([]),{parentNode:p}=m.exports.useContext(K)||{},l=m.exports.useMemo(()=>new M({scopeRef:a}),[a]);N(()=>{let v=p||b.root;if(b.getTreeNode(v.scopeRef)&&s&&!L(s,v.scopeRef)){let f=b.getTreeNode(s);f&&(v=f)}v.addChild(l),b.addNode(l)},[l,p]),N(()=>{let v=b.getTreeNode(a);v&&(v.contain=!!r)},[r]),N(()=>{var v;let f=(v=i.current)===null||v===void 0?void 0:v.nextSibling,$=[],y=F=>F.stopPropagation();for(;f&&f!==u.current;)$.push(f),f.addEventListener(_,y),f=f.nextSibling;return a.current=$,()=>{for(let F of $)F.removeEventListener(_,y)}},[t]),J(a,o,r),Y(a,r),Q(a,o,r),G(a,n),m.exports.useEffect(()=>{const v=h(a.current?a.current[0]:void 0).activeElement;let f=null;if(E(v,a.current)){for(let $ of b.traverse())$.scopeRef&&E(v,$.scopeRef.current)&&(f=$);f===b.getTreeNode(a)&&(s=f.scopeRef)}},[a]),N(()=>()=>{var v,f,$;let y=($=(f=b.getTreeNode(a))===null||f===void 0||(v=f.parent)===null||v===void 0?void 0:v.scopeRef)!==null&&$!==void 0?$:null;(a===s||L(a,s))&&(!y||b.getTreeNode(y))&&(s=y),b.removeTreeNode(a)},[a]);let c=m.exports.useMemo(()=>W(a),[]),d=m.exports.useMemo(()=>({focusManager:c,parentNode:l}),[l,c]);return S.createElement(K.Provider,{value:d},S.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:i}),t,S.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:u}))}function W(e){return{focusNext(t={}){let r=e.current,{from:o,tabbable:n,wrap:i,accept:u}=t,a=o||h(r[0]).activeElement,p=r[0].previousElementSibling,l=x(r),c=g(l,{tabbable:n,accept:u},r);c.currentNode=E(a,r)?a:p;let d=c.nextNode();return!d&&i&&(c.currentNode=p,d=c.nextNode()),d&&T(d,!0),d},focusPrevious(t={}){let r=e.current,{from:o,tabbable:n,wrap:i,accept:u}=t,a=o||h(r[0]).activeElement,p=r[r.length-1].nextElementSibling,l=x(r),c=g(l,{tabbable:n,accept:u},r);c.currentNode=E(a,r)?a:p;let d=c.previousNode();return!d&&i&&(c.currentNode=p,d=c.previousNode()),d&&T(d,!0),d},focusFirst(t={}){let r=e.current,{tabbable:o,accept:n}=t,i=x(r),u=g(i,{tabbable:o,accept:n},r);u.currentNode=r[0].previousElementSibling;let a=u.nextNode();return a&&T(a,!0),a},focusLast(t={}){let r=e.current,{tabbable:o,accept:n}=t,i=x(r),u=g(i,{tabbable:o,accept:n},r);u.currentNode=r[r.length-1].nextElementSibling;let a=u.previousNode();return a&&T(a,!0),a}}}const A=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],q=A.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";A.push('[tabindex]:not([tabindex="-1"]):not([disabled])');const U=A.join(':not([hidden]):not([tabindex="-1"]),');function x(e){return e[0].parentElement}function w(e){let t=b.getTreeNode(s);for(;t&&t.scopeRef!==e;){if(t.contain)return!1;t=t.parent}return!0}function Y(e,t){let r=m.exports.useRef(void 0),o=m.exports.useRef(void 0);N(()=>{let n=e.current;if(!t){o.current&&(cancelAnimationFrame(o.current),o.current=void 0);return}const i=h(n?n[0]:void 0);let u=l=>{if(l.key!=="Tab"||l.altKey||l.ctrlKey||l.metaKey||!w(e)||l.isComposing)return;let c=i.activeElement,d=e.current;if(!d||!E(c,d))return;let v=x(d),f=g(v,{tabbable:!0},d);if(!c)return;f.currentNode=c;let $=l.shiftKey?f.previousNode():f.nextNode();$||(f.currentNode=l.shiftKey?d[d.length-1].nextElementSibling:d[0].previousElementSibling,$=l.shiftKey?f.previousNode():f.nextNode()),l.preventDefault(),$&&T($,!0)},a=l=>{(!s||L(s,e))&&E(l.target,e.current)?(s=e,r.current=l.target):w(e)&&!R(l.target,e)?r.current?r.current.focus():s&&s.current&&C(s.current):w(e)&&(r.current=l.target)},p=l=>{o.current&&cancelAnimationFrame(o.current),o.current=requestAnimationFrame(()=>{if(i.activeElement&&w(e)&&!R(i.activeElement,e))if(s=e,i.body.contains(l.target)){var c;r.current=l.target,(c=r.current)===null||c===void 0||c.focus()}else s.current&&C(s.current)})};return i.addEventListener("keydown",u,!1),i.addEventListener("focusin",a,!1),n==null||n.forEach(l=>l.addEventListener("focusin",a,!1)),n==null||n.forEach(l=>l.addEventListener("focusout",p,!1)),()=>{i.removeEventListener("keydown",u,!1),i.removeEventListener("focusin",a,!1),n==null||n.forEach(l=>l.removeEventListener("focusin",a,!1)),n==null||n.forEach(l=>l.removeEventListener("focusout",p,!1))}},[e,t]),N(()=>()=>{o.current&&cancelAnimationFrame(o.current)},[o])}function B(e){return R(e)}function E(e,t){return!e||!t?!1:t.some(r=>r.contains(e))}function R(e,t=null){if(e instanceof Element&&e.closest("[data-react-aria-top-layer]"))return!0;for(let{scopeRef:r}of b.traverse(b.getTreeNode(t)))if(r&&E(e,r.current))return!0;return!1}function oe(e){return R(e,s)}function L(e,t){var r;let o=(r=b.getTreeNode(t))===null||r===void 0?void 0:r.parent;for(;o;){if(o.scopeRef===e)return!0;o=o.parent}return!1}function T(e,t=!1){if(e!=null&&!t)try{j(e)}catch{}else if(e!=null)try{e.focus()}catch{}}function O(e,t=!0){let r=e[0].previousElementSibling,o=x(e),n=g(o,{tabbable:t},e);n.currentNode=r;let i=n.nextNode();return t&&!i&&(o=x(e),n=g(o,{tabbable:!1},e),n.currentNode=r,i=n.nextNode()),i}function C(e,t=!0){T(O(e,t))}function G(e,t){const r=S.useRef(t);m.exports.useEffect(()=>{if(r.current){s=e;const o=h(e.current?e.current[0]:void 0);!E(o.activeElement,s.current)&&e.current&&C(e.current)}r.current=!1},[e])}function J(e,t,r){N(()=>{if(t||r)return;let o=e.current;const n=h(o?o[0]:void 0);let i=u=>{let a=u.target;E(a,e.current)?s=e:B(a)||(s=null)};return n.addEventListener("focusin",i,!1),o==null||o.forEach(u=>u.addEventListener("focusin",i,!1)),()=>{n.removeEventListener("focusin",i,!1),o==null||o.forEach(u=>u.removeEventListener("focusin",i,!1))}},[e,t,r])}function X(e){let t=b.getTreeNode(s);for(;t&&t.scopeRef!==e;){if(t.nodeToRestore)return!1;t=t.parent}return(t==null?void 0:t.scopeRef)===e}function Q(e,t,r){const o=m.exports.useRef(typeof document<"u"?h(e.current?e.current[0]:void 0).activeElement:null);N(()=>{let n=e.current;const i=h(n?n[0]:void 0);if(!t||r)return;let u=()=>{(!s||L(s,e))&&E(i.activeElement,e.current)&&(s=e)};return i.addEventListener("focusin",u,!1),n==null||n.forEach(a=>a.addEventListener("focusin",u,!1)),()=>{i.removeEventListener("focusin",u,!1),n==null||n.forEach(a=>a.removeEventListener("focusin",u,!1))}},[e,r]),N(()=>{const n=h(e.current?e.current[0]:void 0);if(!t)return;let i=u=>{if(u.key!=="Tab"||u.altKey||u.ctrlKey||u.metaKey||!w(e)||u.isComposing)return;let a=n.activeElement;if(!E(a,e.current))return;let p=b.getTreeNode(e);if(!p)return;let l=p.nodeToRestore,c=g(n.body,{tabbable:!0});c.currentNode=a;let d=u.shiftKey?c.previousNode():c.nextNode();if((!l||!n.body.contains(l)||l===n.body)&&(l=void 0,p.nodeToRestore=void 0),(!d||!E(d,e.current))&&l){c.currentNode=l;do d=u.shiftKey?c.previousNode():c.nextNode();while(E(d,e.current));u.preventDefault(),u.stopPropagation(),d?T(d,!0):B(l)?T(l,!0):a.blur()}};return r||n.addEventListener("keydown",i,!0),()=>{r||n.removeEventListener("keydown",i,!0)}},[e,t,r]),N(()=>{const n=h(e.current?e.current[0]:void 0);if(!t)return;let i=b.getTreeNode(e);if(!!i){var u;return i.nodeToRestore=(u=o.current)!==null&&u!==void 0?u:void 0,()=>{let a=b.getTreeNode(e);if(!a)return;let p=a.nodeToRestore;if(t&&p&&(E(n.activeElement,e.current)||n.activeElement===n.body&&X(e))){let l=b.clone();requestAnimationFrame(()=>{if(n.activeElement===n.body){let c=l.getTreeNode(e);for(;c;){if(c.nodeToRestore&&c.nodeToRestore.isConnected){D(c.nodeToRestore);return}c=c.parent}for(c=l.getTreeNode(e);c;){if(c.scopeRef&&c.scopeRef.current&&b.getTreeNode(c.scopeRef)){let d=O(c.scopeRef.current,!0);D(d);return}c=c.parent}}})}}}},[e,t])}function D(e){e.dispatchEvent(new CustomEvent(_,{bubbles:!0,cancelable:!0}))&&T(e)}function g(e,t,r){let o=t!=null&&t.tabbable?U:q,n=h(e).createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(i){var u;return!(t==null||(u=t.from)===null||u===void 0)&&u.contains(i)?NodeFilter.FILTER_REJECT:i.matches(o)&&I(i)&&(!r||E(i,r))&&(!(t!=null&&t.accept)||t.accept(i))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return t!=null&&t.from&&(n.currentNode=t.from),n}class k{get size(){return this.fastMap.size}getTreeNode(t){return this.fastMap.get(t)}addTreeNode(t,r,o){let n=this.fastMap.get(r!=null?r:null);if(!n)return;let i=new M({scopeRef:t});n.addChild(i),i.parent=n,this.fastMap.set(t,i),o&&(i.nodeToRestore=o)}addNode(t){this.fastMap.set(t.scopeRef,t)}removeTreeNode(t){if(t===null)return;let r=this.fastMap.get(t);if(!r)return;let o=r.parent;for(let i of this.traverse())i!==r&&r.nodeToRestore&&i.nodeToRestore&&r.scopeRef&&r.scopeRef.current&&E(i.nodeToRestore,r.scopeRef.current)&&(i.nodeToRestore=r.nodeToRestore);let n=r.children;o&&(o.removeChild(r),n.size>0&&n.forEach(i=>o&&o.addChild(i))),this.fastMap.delete(r.scopeRef)}*traverse(t=this.root){if(t.scopeRef!=null&&(yield t),t.children.size>0)for(let r of t.children)yield*this.traverse(r)}clone(){var t;let r=new k;var o;for(let n of this.traverse())r.addTreeNode(n.scopeRef,(o=(t=n.parent)===null||t===void 0?void 0:t.scopeRef)!==null&&o!==void 0?o:null,n.nodeToRestore);return r}constructor(){this.fastMap=new Map,this.root=new M({scopeRef:null}),this.fastMap.set(null,this.root)}}class M{addChild(t){this.children.add(t),t.parent=this}removeChild(t){this.children.delete(t),t.parent=void 0}constructor(t){this.children=new Set,this.contain=!1,this.scopeRef=t.scopeRef}}let b=new k;export{g as $,te as a,re as b,ne as c,oe as d};
