import{y as j,$ as x,z as N,u as U,A as q,B as H,v as W}from"./context.module.eddded96.js";import{r as m,R as L}from"./index.9517b6b6.js";function G(e){const t=j(e);if(!(e instanceof t.HTMLElement)&&!(e instanceof t.SVGElement))return!1;let{display:r,visibility:o}=e.style,n=r!=="none"&&o!=="hidden"&&o!=="collapse";if(n){const{getComputedStyle:l}=e.ownerDocument.defaultView;let{display:c,visibility:a}=l(e);n=c!=="none"&&a!=="hidden"&&a!=="collapse"}return n}function J(e,t){return!e.hasAttribute("hidden")&&!e.hasAttribute("data-react-aria-prevent-focus")&&(e.nodeName==="DETAILS"&&t&&t.nodeName!=="SUMMARY"?e.hasAttribute("open"):!0)}function V(e,t){return e.nodeName!=="#comment"&&G(e)&&J(e,t)&&(!e.parentElement||V(e.parentElement,e))}const D=L.createContext(null),C="react-aria-focus-scope-restore";let s=null;function oe(e){let{children:t,contain:r,restoreFocus:o,autoFocus:n}=e,l=m.exports.useRef(null),c=m.exports.useRef(null),a=m.exports.useRef([]),{parentNode:v}=m.exports.useContext(D)||{},i=m.exports.useMemo(()=>new M({scopeRef:a}),[a]);x(()=>{let f=v||p.root;if(p.getTreeNode(f.scopeRef)&&s&&!R(s,f.scopeRef)){let b=p.getTreeNode(s);b&&(f=b)}f.addChild(i),p.addNode(i)},[i,v]),x(()=>{let f=p.getTreeNode(a);f&&(f.contain=!!r)},[r]),x(()=>{var f;let b=(f=l.current)===null||f===void 0?void 0:f.nextSibling,$=[],y=F=>F.stopPropagation();for(;b&&b!==c.current;)$.push(b),b.addEventListener(C,y),b=b.nextSibling;return a.current=$,()=>{for(let F of $)F.removeEventListener(C,y)}},[t]),ee(a,o,r),Z(a,r),te(a,o,r),O(a,n),m.exports.useEffect(()=>{const f=N(a.current?a.current[0]:void 0).activeElement;let b=null;if(T(f,a.current)){for(let $ of p.traverse())$.scopeRef&&T(f,$.scopeRef.current)&&(b=$);b===p.getTreeNode(a)&&(s=b.scopeRef)}},[a]),x(()=>()=>{var f,b,$;let y=($=(b=p.getTreeNode(a))===null||b===void 0||(f=b.parent)===null||f===void 0?void 0:f.scopeRef)!==null&&$!==void 0?$:null;(a===s||R(a,s))&&(!y||p.getTreeNode(y))&&(s=y),p.removeTreeNode(a)},[a]);let u=m.exports.useMemo(()=>Y(a),[]),d=m.exports.useMemo(()=>({focusManager:u,parentNode:i}),[i,u]);return L.createElement(D.Provider,{value:d},L.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:l}),t,L.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:c}))}function Y(e){return{focusNext(t={}){let r=e.current,{from:o,tabbable:n,wrap:l,accept:c}=t,a=o||N(r[0]).activeElement,v=r[0].previousElementSibling,i=w(r),u=h(i,{tabbable:n,accept:c},r);u.currentNode=T(a,r)?a:v;let d=u.nextNode();return!d&&l&&(u.currentNode=v,d=u.nextNode()),d&&E(d,!0),d},focusPrevious(t={}){let r=e.current,{from:o,tabbable:n,wrap:l,accept:c}=t,a=o||N(r[0]).activeElement,v=r[r.length-1].nextElementSibling,i=w(r),u=h(i,{tabbable:n,accept:c},r);u.currentNode=T(a,r)?a:v;let d=u.previousNode();return!d&&l&&(u.currentNode=v,d=u.previousNode()),d&&E(d,!0),d},focusFirst(t={}){let r=e.current,{tabbable:o,accept:n}=t,l=w(r),c=h(l,{tabbable:o,accept:n},r);c.currentNode=r[0].previousElementSibling;let a=c.nextNode();return a&&E(a,!0),a},focusLast(t={}){let r=e.current,{tabbable:o,accept:n}=t,l=w(r),c=h(l,{tabbable:o,accept:n},r);c.currentNode=r[r.length-1].nextElementSibling;let a=c.previousNode();return a&&E(a,!0),a}}}const A=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable^="false"])'],Q=A.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";A.push('[tabindex]:not([tabindex="-1"]):not([disabled])');const X=A.join(':not([hidden]):not([tabindex="-1"]),');function w(e){return e[0].parentElement}function S(e){let t=p.getTreeNode(s);for(;t&&t.scopeRef!==e;){if(t.contain)return!1;t=t.parent}return!0}function Z(e,t){let r=m.exports.useRef(void 0),o=m.exports.useRef(void 0);x(()=>{let n=e.current;if(!t){o.current&&(cancelAnimationFrame(o.current),o.current=void 0);return}const l=N(n?n[0]:void 0);let c=i=>{if(i.key!=="Tab"||i.altKey||i.ctrlKey||i.metaKey||!S(e)||i.isComposing)return;let u=l.activeElement,d=e.current;if(!d||!T(u,d))return;let f=w(d),b=h(f,{tabbable:!0},d);if(!u)return;b.currentNode=u;let $=i.shiftKey?b.previousNode():b.nextNode();$||(b.currentNode=i.shiftKey?d[d.length-1].nextElementSibling:d[0].previousElementSibling,$=i.shiftKey?b.previousNode():b.nextNode()),i.preventDefault(),$&&E($,!0)},a=i=>{(!s||R(s,e))&&T(i.target,e.current)?(s=e,r.current=i.target):S(e)&&!g(i.target,e)?r.current?r.current.focus():s&&s.current&&k(s.current):S(e)&&(r.current=i.target)},v=i=>{o.current&&cancelAnimationFrame(o.current),o.current=requestAnimationFrame(()=>{let u=W();if(!((u==="virtual"||u===null)&&q()&&H())&&l.activeElement&&S(e)&&!g(l.activeElement,e))if(s=e,l.body.contains(i.target)){var f;r.current=i.target,(f=r.current)===null||f===void 0||f.focus()}else s.current&&k(s.current)})};return l.addEventListener("keydown",c,!1),l.addEventListener("focusin",a,!1),n==null||n.forEach(i=>i.addEventListener("focusin",a,!1)),n==null||n.forEach(i=>i.addEventListener("focusout",v,!1)),()=>{l.removeEventListener("keydown",c,!1),l.removeEventListener("focusin",a,!1),n==null||n.forEach(i=>i.removeEventListener("focusin",a,!1)),n==null||n.forEach(i=>i.removeEventListener("focusout",v,!1))}},[e,t]),x(()=>()=>{o.current&&cancelAnimationFrame(o.current)},[o])}function B(e){return g(e)}function T(e,t){return!e||!t?!1:t.some(r=>r.contains(e))}function g(e,t=null){if(e instanceof Element&&e.closest("[data-react-aria-top-layer]"))return!0;for(let{scopeRef:r}of p.traverse(p.getTreeNode(t)))if(r&&T(e,r.current))return!0;return!1}function ae(e){return g(e,s)}function R(e,t){var r;let o=(r=p.getTreeNode(t))===null||r===void 0?void 0:r.parent;for(;o;){if(o.scopeRef===e)return!0;o=o.parent}return!1}function E(e,t=!1){if(e!=null&&!t)try{U(e)}catch{}else if(e!=null)try{e.focus()}catch{}}function z(e,t=!0){let r=e[0].previousElementSibling,o=w(e),n=h(o,{tabbable:t},e);n.currentNode=r;let l=n.nextNode();return t&&!l&&(o=w(e),n=h(o,{tabbable:!1},e),n.currentNode=r,l=n.nextNode()),l}function k(e,t=!0){E(z(e,t))}function O(e,t){const r=L.useRef(t);m.exports.useEffect(()=>{if(r.current){s=e;const o=N(e.current?e.current[0]:void 0);!T(o.activeElement,s.current)&&e.current&&k(e.current)}r.current=!1},[e])}function ee(e,t,r){x(()=>{if(t||r)return;let o=e.current;const n=N(o?o[0]:void 0);let l=c=>{let a=c.target;T(a,e.current)?s=e:B(a)||(s=null)};return n.addEventListener("focusin",l,!1),o==null||o.forEach(c=>c.addEventListener("focusin",l,!1)),()=>{n.removeEventListener("focusin",l,!1),o==null||o.forEach(c=>c.removeEventListener("focusin",l,!1))}},[e,t,r])}function I(e){let t=p.getTreeNode(s);for(;t&&t.scopeRef!==e;){if(t.nodeToRestore)return!1;t=t.parent}return(t==null?void 0:t.scopeRef)===e}function te(e,t,r){const o=m.exports.useRef(typeof document<"u"?N(e.current?e.current[0]:void 0).activeElement:null);x(()=>{let n=e.current;const l=N(n?n[0]:void 0);if(!t||r)return;let c=()=>{(!s||R(s,e))&&T(l.activeElement,e.current)&&(s=e)};return l.addEventListener("focusin",c,!1),n==null||n.forEach(a=>a.addEventListener("focusin",c,!1)),()=>{l.removeEventListener("focusin",c,!1),n==null||n.forEach(a=>a.removeEventListener("focusin",c,!1))}},[e,r]),x(()=>{const n=N(e.current?e.current[0]:void 0);if(!t)return;let l=c=>{if(c.key!=="Tab"||c.altKey||c.ctrlKey||c.metaKey||!S(e)||c.isComposing)return;let a=n.activeElement;if(!g(a,e)||!I(e))return;let v=p.getTreeNode(e);if(!v)return;let i=v.nodeToRestore,u=h(n.body,{tabbable:!0});u.currentNode=a;let d=c.shiftKey?u.previousNode():u.nextNode();if((!i||!n.body.contains(i)||i===n.body)&&(i=void 0,v.nodeToRestore=void 0),(!d||!g(d,e))&&i){u.currentNode=i;do d=c.shiftKey?u.previousNode():u.nextNode();while(g(d,e));c.preventDefault(),c.stopPropagation(),d?E(d,!0):B(i)?E(i,!0):a.blur()}};return r||n.addEventListener("keydown",l,!0),()=>{r||n.removeEventListener("keydown",l,!0)}},[e,t,r]),x(()=>{const n=N(e.current?e.current[0]:void 0);if(!t)return;let l=p.getTreeNode(e);if(!!l){var c;return l.nodeToRestore=(c=o.current)!==null&&c!==void 0?c:void 0,()=>{let a=p.getTreeNode(e);if(!a)return;let v=a.nodeToRestore;if(t&&v&&(n.activeElement&&g(n.activeElement,e)||n.activeElement===n.body&&I(e))){let i=p.clone();requestAnimationFrame(()=>{if(n.activeElement===n.body){let u=i.getTreeNode(e);for(;u;){if(u.nodeToRestore&&u.nodeToRestore.isConnected){P(u.nodeToRestore);return}u=u.parent}for(u=i.getTreeNode(e);u;){if(u.scopeRef&&u.scopeRef.current&&p.getTreeNode(u.scopeRef)){let d=z(u.scopeRef.current,!0);P(d);return}u=u.parent}}})}}}},[e,t])}function P(e){e.dispatchEvent(new CustomEvent(C,{bubbles:!0,cancelable:!0}))&&E(e)}function h(e,t,r){let o=t!=null&&t.tabbable?X:Q,n=N(e).createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(l){var c;return!(t==null||(c=t.from)===null||c===void 0)&&c.contains(l)?NodeFilter.FILTER_REJECT:l.matches(o)&&V(l)&&(!r||T(l,r))&&(!(t!=null&&t.accept)||t.accept(l))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return t!=null&&t.from&&(n.currentNode=t.from),n}function le(e,t={}){return{focusNext(r={}){let o=e.current;if(!o)return null;let{from:n,tabbable:l=t.tabbable,wrap:c=t.wrap,accept:a=t.accept}=r,v=n||N(o).activeElement,i=h(o,{tabbable:l,accept:a});o.contains(v)&&(i.currentNode=v);let u=i.nextNode();return!u&&c&&(i.currentNode=o,u=i.nextNode()),u&&E(u,!0),u},focusPrevious(r=t){let o=e.current;if(!o)return null;let{from:n,tabbable:l=t.tabbable,wrap:c=t.wrap,accept:a=t.accept}=r,v=n||N(o).activeElement,i=h(o,{tabbable:l,accept:a});if(o.contains(v))i.currentNode=v;else{let d=_(i);return d&&E(d,!0),d!=null?d:null}let u=i.previousNode();if(!u&&c){i.currentNode=o;let d=_(i);if(!d)return null;u=d}return u&&E(u,!0),u!=null?u:null},focusFirst(r=t){let o=e.current;if(!o)return null;let{tabbable:n=t.tabbable,accept:l=t.accept}=r,a=h(o,{tabbable:n,accept:l}).nextNode();return a&&E(a,!0),a},focusLast(r=t){let o=e.current;if(!o)return null;let{tabbable:n=t.tabbable,accept:l=t.accept}=r,c=h(o,{tabbable:n,accept:l}),a=_(c);return a&&E(a,!0),a!=null?a:null}}}function _(e){let t,r;do r=e.lastChild(),r&&(t=r);while(r);return t}class K{get size(){return this.fastMap.size}getTreeNode(t){return this.fastMap.get(t)}addTreeNode(t,r,o){let n=this.fastMap.get(r!=null?r:null);if(!n)return;let l=new M({scopeRef:t});n.addChild(l),l.parent=n,this.fastMap.set(t,l),o&&(l.nodeToRestore=o)}addNode(t){this.fastMap.set(t.scopeRef,t)}removeTreeNode(t){if(t===null)return;let r=this.fastMap.get(t);if(!r)return;let o=r.parent;for(let l of this.traverse())l!==r&&r.nodeToRestore&&l.nodeToRestore&&r.scopeRef&&r.scopeRef.current&&T(l.nodeToRestore,r.scopeRef.current)&&(l.nodeToRestore=r.nodeToRestore);let n=r.children;o&&(o.removeChild(r),n.size>0&&n.forEach(l=>o&&o.addChild(l))),this.fastMap.delete(r.scopeRef)}*traverse(t=this.root){if(t.scopeRef!=null&&(yield t),t.children.size>0)for(let r of t.children)yield*this.traverse(r)}clone(){var t;let r=new K;var o;for(let n of this.traverse())r.addTreeNode(n.scopeRef,(o=(t=n.parent)===null||t===void 0?void 0:t.scopeRef)!==null&&o!==void 0?o:null,n.nodeToRestore);return r}constructor(){this.fastMap=new Map,this.root=new M({scopeRef:null}),this.fastMap.set(null,this.root)}}class M{addChild(t){this.children.add(t),t.parent=this}removeChild(t){this.children.delete(t),t.parent=void 0}constructor(t){this.children=new Set,this.contain=!1,this.scopeRef=t.scopeRef}}let p=new K;export{h as $,ae as a,oe as b,le as c};
