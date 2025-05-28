import{a as q}from"./hooks.d40f5c64.js";import{r as E,R as g,C as B,s as $,a as u,c as I,j as T,W as G,F as be}from"./index.c68b4d2f.js";import{R as pe,L as he}from"./RightArrow.14319558.js";import{B as H,a as Q}from"./BodyPortal.206c66c4.js";import{c as _,z as M,b as J}from"./theme.b2bae99d.js";import{c as ge,$ as w,a as x,b as $e,d as Ee,e as Ne,f as ye}from"./focusSafely.module.2832ea5c.js";import{d as xe,e as we,b as Te,P as Se}from"./NavBar.e553649c.js";import"./contexts.1094b961.js";import"./utils.e3275d2c.js";import"./palette.15e4d008.js";import"./Dialog.module.09a51098.js";import"./Button.module.6d0c5574.js";import"./useFocusRing.module.148955a4.js";import"./useButton.module.7040ca1b.js";import"./useTreeState.module.99ecc8bc.js";import"./Collection.module.4bd39e99.js";import"./OverlayArrow.module.51144fca.js";function Le(e){const t=ge(e);if(!(e instanceof t.HTMLElement)&&!(e instanceof t.SVGElement))return!1;let{display:n,visibility:o}=e.style,r=n!=="none"&&o!=="hidden"&&o!=="collapse";if(r){const{getComputedStyle:a}=e.ownerDocument.defaultView;let{display:l,visibility:i}=a(e);r=l!=="none"&&i!=="hidden"&&i!=="collapse"}return r}function ke(e,t){return!e.hasAttribute("hidden")&&!e.hasAttribute("data-react-aria-prevent-focus")&&(e.nodeName==="DETAILS"&&t&&t.nodeName!=="SUMMARY"?e.hasAttribute("open"):!0)}function Y(e,t){return e.nodeName!=="#comment"&&Le(e)&&ke(e,t)&&(!e.parentElement||Y(e.parentElement,e))}const O=g.createContext(null),P="react-aria-focus-scope-restore";let b=null;function Re(e){let{children:t,contain:n,restoreFocus:o,autoFocus:r}=e,a=E.exports.useRef(null),l=E.exports.useRef(null),i=E.exports.useRef([]),{parentNode:v}=E.exports.useContext(O)||{},d=E.exports.useMemo(()=>new K({scopeRef:i}),[i]);w(()=>{let m=v||p.root;if(p.getTreeNode(m.scopeRef)&&b&&!F(b,m.scopeRef)){let f=p.getTreeNode(b);f&&(m=f)}m.addChild(d),p.addNode(d)},[d,v]),w(()=>{let m=p.getTreeNode(i);m&&(m.contain=!!n)},[n]),w(()=>{var m;let f=(m=a.current)===null||m===void 0?void 0:m.nextSibling,h=[],y=C=>C.stopPropagation();for(;f&&f!==l.current;)h.push(f),f.addEventListener(P,y),f=f.nextSibling;return i.current=h,()=>{for(let C of h)C.removeEventListener(P,y)}},[t]),_e(i,o,n),Be(i,n),Pe(i,o,n),Ce(i,r),E.exports.useEffect(()=>{const m=x(i.current?i.current[0]:void 0).activeElement;let f=null;if(N(m,i.current)){for(let h of p.traverse())h.scopeRef&&N(m,h.scopeRef.current)&&(f=h);f===p.getTreeNode(i)&&(b=f.scopeRef)}},[i]),w(()=>()=>{var m,f,h;let y=(h=(f=p.getTreeNode(i))===null||f===void 0||(m=f.parent)===null||m===void 0?void 0:m.scopeRef)!==null&&h!==void 0?h:null;(i===b||F(i,b))&&(!y||p.getTreeNode(y))&&(b=y),p.removeTreeNode(i)},[i]);let c=E.exports.useMemo(()=>Ae(i),[]),s=E.exports.useMemo(()=>({focusManager:c,parentNode:d}),[d,c]);return g.createElement(O.Provider,{value:s},g.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:a}),t,g.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:l}))}function Ae(e){return{focusNext(t={}){let n=e.current,{from:o,tabbable:r,wrap:a,accept:l}=t,i=o||x(n[0]).activeElement,v=n[0].previousElementSibling,d=k(n),c=L(d,{tabbable:r,accept:l},n);c.currentNode=N(i,n)?i:v;let s=c.nextNode();return!s&&a&&(c.currentNode=v,s=c.nextNode()),s&&S(s,!0),s},focusPrevious(t={}){let n=e.current,{from:o,tabbable:r,wrap:a,accept:l}=t,i=o||x(n[0]).activeElement,v=n[n.length-1].nextElementSibling,d=k(n),c=L(d,{tabbable:r,accept:l},n);c.currentNode=N(i,n)?i:v;let s=c.previousNode();return!s&&a&&(c.currentNode=v,s=c.previousNode()),s&&S(s,!0),s},focusFirst(t={}){let n=e.current,{tabbable:o,accept:r}=t,a=k(n),l=L(a,{tabbable:o,accept:r},n);l.currentNode=n[0].previousElementSibling;let i=l.nextNode();return i&&S(i,!0),i},focusLast(t={}){let n=e.current,{tabbable:o,accept:r}=t,a=k(n),l=L(a,{tabbable:o,accept:r},n);l.currentNode=n[n.length-1].nextElementSibling;let i=l.previousNode();return i&&S(i,!0),i}}}const W=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable^="false"])'],Me=W.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";W.push('[tabindex]:not([tabindex="-1"]):not([disabled])');const Fe=W.join(':not([hidden]):not([tabindex="-1"]),');function k(e){return e[0].parentElement}function A(e){let t=p.getTreeNode(b);for(;t&&t.scopeRef!==e;){if(t.contain)return!1;t=t.parent}return!0}function Be(e,t){let n=E.exports.useRef(void 0),o=E.exports.useRef(void 0);w(()=>{let r=e.current;if(!t){o.current&&(cancelAnimationFrame(o.current),o.current=void 0);return}const a=x(r?r[0]:void 0);let l=d=>{if(d.key!=="Tab"||d.altKey||d.ctrlKey||d.metaKey||!A(e)||d.isComposing)return;let c=a.activeElement,s=e.current;if(!s||!N(c,s))return;let m=k(s),f=L(m,{tabbable:!0},s);if(!c)return;f.currentNode=c;let h=d.shiftKey?f.previousNode():f.nextNode();h||(f.currentNode=d.shiftKey?s[s.length-1].nextElementSibling:s[0].previousElementSibling,h=d.shiftKey?f.previousNode():f.nextNode()),d.preventDefault(),h&&S(h,!0)},i=d=>{(!b||F(b,e))&&N(d.target,e.current)?(b=e,n.current=d.target):A(e)&&!R(d.target,e)?n.current?n.current.focus():b&&b.current&&D(b.current):A(e)&&(n.current=d.target)},v=d=>{o.current&&cancelAnimationFrame(o.current),o.current=requestAnimationFrame(()=>{let c=Ee();if(!((c==="virtual"||c===null)&&Ne()&&ye())&&a.activeElement&&A(e)&&!R(a.activeElement,e))if(b=e,a.body.contains(d.target)){var m;n.current=d.target,(m=n.current)===null||m===void 0||m.focus()}else b.current&&D(b.current)})};return a.addEventListener("keydown",l,!1),a.addEventListener("focusin",i,!1),r==null||r.forEach(d=>d.addEventListener("focusin",i,!1)),r==null||r.forEach(d=>d.addEventListener("focusout",v,!1)),()=>{a.removeEventListener("keydown",l,!1),a.removeEventListener("focusin",i,!1),r==null||r.forEach(d=>d.removeEventListener("focusin",i,!1)),r==null||r.forEach(d=>d.removeEventListener("focusout",v,!1))}},[e,t]),w(()=>()=>{o.current&&cancelAnimationFrame(o.current)},[o])}function X(e){return R(e)}function N(e,t){return!e||!t?!1:t.some(n=>n.contains(e))}function R(e,t=null){if(e instanceof Element&&e.closest("[data-react-aria-top-layer]"))return!0;for(let{scopeRef:n}of p.traverse(p.getTreeNode(t)))if(n&&N(e,n.current))return!0;return!1}function F(e,t){var n;let o=(n=p.getTreeNode(t))===null||n===void 0?void 0:n.parent;for(;o;){if(o.scopeRef===e)return!0;o=o.parent}return!1}function S(e,t=!1){if(e!=null&&!t)try{$e(e)}catch{}else if(e!=null)try{e.focus()}catch{}}function Z(e,t=!0){let n=e[0].previousElementSibling,o=k(e),r=L(o,{tabbable:t},e);r.currentNode=n;let a=r.nextNode();return t&&!a&&(o=k(e),r=L(o,{tabbable:!1},e),r.currentNode=n,a=r.nextNode()),a}function D(e,t=!0){S(Z(e,t))}function Ce(e,t){const n=g.useRef(t);E.exports.useEffect(()=>{if(n.current){b=e;const o=x(e.current?e.current[0]:void 0);!N(o.activeElement,b.current)&&e.current&&D(e.current)}n.current=!1},[e])}function _e(e,t,n){w(()=>{if(t||n)return;let o=e.current;const r=x(o?o[0]:void 0);let a=l=>{let i=l.target;N(i,e.current)?b=e:X(i)||(b=null)};return r.addEventListener("focusin",a,!1),o==null||o.forEach(l=>l.addEventListener("focusin",a,!1)),()=>{r.removeEventListener("focusin",a,!1),o==null||o.forEach(l=>l.removeEventListener("focusin",a,!1))}},[e,t,n])}function V(e){let t=p.getTreeNode(b);for(;t&&t.scopeRef!==e;){if(t.nodeToRestore)return!1;t=t.parent}return(t==null?void 0:t.scopeRef)===e}function Pe(e,t,n){const o=E.exports.useRef(typeof document<"u"?x(e.current?e.current[0]:void 0).activeElement:null);w(()=>{let r=e.current;const a=x(r?r[0]:void 0);if(!t||n)return;let l=()=>{(!b||F(b,e))&&N(a.activeElement,e.current)&&(b=e)};return a.addEventListener("focusin",l,!1),r==null||r.forEach(i=>i.addEventListener("focusin",l,!1)),()=>{a.removeEventListener("focusin",l,!1),r==null||r.forEach(i=>i.removeEventListener("focusin",l,!1))}},[e,n]),w(()=>{const r=x(e.current?e.current[0]:void 0);if(!t)return;let a=l=>{if(l.key!=="Tab"||l.altKey||l.ctrlKey||l.metaKey||!A(e)||l.isComposing)return;let i=r.activeElement;if(!R(i,e)||!V(e))return;let v=p.getTreeNode(e);if(!v)return;let d=v.nodeToRestore,c=L(r.body,{tabbable:!0});c.currentNode=i;let s=l.shiftKey?c.previousNode():c.nextNode();if((!d||!r.body.contains(d)||d===r.body)&&(d=void 0,v.nodeToRestore=void 0),(!s||!R(s,e))&&d){c.currentNode=d;do s=l.shiftKey?c.previousNode():c.nextNode();while(R(s,e));l.preventDefault(),l.stopPropagation(),s?S(s,!0):X(d)?S(d,!0):i.blur()}};return n||r.addEventListener("keydown",a,!0),()=>{n||r.removeEventListener("keydown",a,!0)}},[e,t,n]),w(()=>{const r=x(e.current?e.current[0]:void 0);if(!t)return;let a=p.getTreeNode(e);if(!!a){var l;return a.nodeToRestore=(l=o.current)!==null&&l!==void 0?l:void 0,()=>{let i=p.getTreeNode(e);if(!i)return;let v=i.nodeToRestore;if(t&&v&&(r.activeElement&&R(r.activeElement,e)||r.activeElement===r.body&&V(e))){let d=p.clone();requestAnimationFrame(()=>{if(r.activeElement===r.body){let c=d.getTreeNode(e);for(;c;){if(c.nodeToRestore&&c.nodeToRestore.isConnected){U(c.nodeToRestore);return}c=c.parent}for(c=d.getTreeNode(e);c;){if(c.scopeRef&&c.scopeRef.current&&p.getTreeNode(c.scopeRef)){let s=Z(c.scopeRef.current,!0);U(s);return}c=c.parent}}})}}}},[e,t])}function U(e){e.dispatchEvent(new CustomEvent(P,{bubbles:!0,cancelable:!0}))&&S(e)}function L(e,t,n){let o=t!=null&&t.tabbable?Fe:Me,r=x(e).createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(a){var l;return!(t==null||(l=t.from)===null||l===void 0)&&l.contains(a)?NodeFilter.FILTER_REJECT:a.matches(o)&&Y(a)&&(!n||N(a,n))&&(!(t!=null&&t.accept)||t.accept(a))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return t!=null&&t.from&&(r.currentNode=t.from),r}class j{get size(){return this.fastMap.size}getTreeNode(t){return this.fastMap.get(t)}addTreeNode(t,n,o){let r=this.fastMap.get(n!=null?n:null);if(!r)return;let a=new K({scopeRef:t});r.addChild(a),a.parent=r,this.fastMap.set(t,a),o&&(a.nodeToRestore=o)}addNode(t){this.fastMap.set(t.scopeRef,t)}removeTreeNode(t){if(t===null)return;let n=this.fastMap.get(t);if(!n)return;let o=n.parent;for(let a of this.traverse())a!==n&&n.nodeToRestore&&a.nodeToRestore&&n.scopeRef&&n.scopeRef.current&&N(a.nodeToRestore,n.scopeRef.current)&&(a.nodeToRestore=n.nodeToRestore);let r=n.children;o&&(o.removeChild(n),r.size>0&&r.forEach(a=>o&&o.addChild(a))),this.fastMap.delete(n.scopeRef)}*traverse(t=this.root){if(t.scopeRef!=null&&(yield t),t.children.size>0)for(let n of t.children)yield*this.traverse(n)}clone(){var t;let n=new j;var o;for(let r of this.traverse())n.addTreeNode(r.scopeRef,(o=(t=r.parent)===null||t===void 0?void 0:t.scopeRef)!==null&&o!==void 0?o:null,r.nodeToRestore);return n}constructor(){this.fastMap=new Map,this.root=new K({scopeRef:null}),this.fastMap.set(null,this.root)}}class K{addChild(t){this.children.add(t),t.parent=this}removeChild(t){this.children.delete(t),t.parent=void 0}constructor(t){this.children=new Set,this.contain=!1,this.scopeRef=t.scopeRef}}let p=new j;const z="5.6rem",ee="24rem",te=B`
  --collapsed-width: ${z};
  --expanded-width: ${ee};
  width: var(--expanded-width);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  box-shadow: -0.2rem 0 0.4rem rgba(0, 0, 0, 0.1) inset;
  background: ${_.palette.neutralBright};
  color: ${_.palette.neutralThin};
  z-index: ${M.navbar-1};

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
    margin-left: ${z};
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
    z-index: ${M.navbar+1};
  }

  &.mobile:not(.collapsed),
  &.mobile.collapsing {
    z-index: ${M.sidebar};

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
      z-index: ${M.sidebar-1};
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
`,ne=$.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`,re=$.div`
  height: 100%;
  overflow-y: auto;
`,oe=$.footer`
  button {
    width: 100%;
  }
`,ae=$.button`
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
`,ie=({mobileBreakpoint:e=`${J.mobileNavBreak}em`,...t})=>{var l;const n=q(`(max-width: ${e})`),o=(l=t.isMobile)!=null?l:n,[r,a]=g.useState(o);return{isMobile:o,navIsCollapsed:r,setNavIsCollapsed:a}},le=()=>{const[e,t]=g.useState("");return g.useEffect(()=>{if(!e||e==="idle")return;const n=setTimeout(()=>t("idle"),300);return()=>clearTimeout(n)},[e,t]),{navAnimation:e,setNavAnimation:t}},de=({sidebarNavRef:e,navHeader:t,navFooter:n,children:o,navIsCollapsed:r,setNavIsCollapsed:a,navAnimation:l,isMobile:i})=>{const v=g.useRef(null);g.useLayoutEffect(()=>{a(i)},[i]),g.useEffect(()=>{if(!i||r)return;const f=y=>{i&&!r&&(e==null?void 0:e.current)&&!e.current.contains(y.target)&&document.body.contains(y.target)&&a(!0)},h=y=>{i&&!r&&y.key==="Escape"&&a(!0)};return document.addEventListener("click",f),document.addEventListener("touchend",f),document.addEventListener("keydown",h),()=>{document.removeEventListener("click",f),document.removeEventListener("touchend",f),document.removeEventListener("keydown",h)}},[i,r,a,e]);const d={navIsCollapsed:r,setNavIsCollapsed:a,isMobile:i};g.useEffect(()=>{l==="idle"&&v.current.focus()},[l]);const c=g.useRef(null),[s,m]=g.useState(0);return requestAnimationFrame(()=>{c.current&&(c.current.scrollTop=s)}),T(Re,{contain:i&&!r,children:[u(ae,{"aria-expanded":!r,ref:v,"data-testid":"sidebarnav-toggle",className:I({collapsed:r}),onClick:f=>{a(!r),f.stopPropagation()},"aria-label":r?"Expand navigation":"Collapse navigation",children:r?u(pe,{}):u(he,{})}),t?u(ne,{children:typeof t=="function"?t(d):t}):null,u(re,{"data-testid":"nav-body",ref:c,onScroll:f=>m(f.target.scrollTop),children:typeof o=="function"?o(d):o}),n?u(oe,{children:typeof n=="function"?n(d):n}):null]})},De=$(({className:e,id:t,ariaLabel:n,...o})=>{const{isMobile:r,navIsCollapsed:a,setNavIsCollapsed:l}=ie(o),i=g.useRef(null),{navAnimation:v,setNavAnimation:d}=le(),c=s=>{s!==a&&d(s?"collapsing":"expanding"),l(s)};return u("nav",{id:t,ref:i,"data-testid":"sidebarnav","aria-label":n,className:I(e,{collapsed:a,mobile:r,collapsing:v==="collapsing",expanding:v==="expanding"}),children:u(de,{...o,sidebarNavRef:i,navIsCollapsed:a,setNavIsCollapsed:c,isMobile:r,children:o.children})})})`
  ${te}
`,Ke=$(({className:e,id:t,ariaLabel:n,...o})=>{const{isMobile:r,navIsCollapsed:a,setNavIsCollapsed:l}=ie(o),i=g.useRef(document.createElement("NAV")),{navAnimation:v,setNavAnimation:d}=le(),c=s=>{s!==a&&d(s?"collapsing":"expanding"),l(s)};return u(H,{ref:i,id:t,tagName:"nav",slot:"sidebar","data-testid":"sidebarnav",ariaLabel:n,className:I(e,{collapsed:a,mobile:r,collapsing:v==="collapsing",expanding:v==="expanding"}),children:u(de,{...o,navIsCollapsed:a,setNavIsCollapsed:c,sidebarNavRef:i,navAnimation:v,isMobile:r})})})`
  ${te}
`,ce={NavHeader:ne,NavBody:re,NavFooter:oe,ToggleButton:ae,expandedWidth:ee,collapsedWidth:z},ze=G`
  html, body, #ladle-root {
    margin: 0;
    padding: 0;
  }

  #ladle-root {
    height: 100vh;
  }
`,Ie=G`
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
`,se=$.div`
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
`,ue=B`
  overflow: auto;
  grid-area: nav;
  padding: 2rem;

  ul {
    list-style: none;
    padding: 0;
  }

  ${ce.ToggleButton} {
    margin-top: 3.2rem;
  }
`,fe=B`
  .mobile + & {
    margin-left: 5.6rem;
  }
`,We=$(De)`
  ${ue}
`,je=$(Ke)`
  ${ue}
`,Oe=$.main`
  ${fe}
`,Ve=$(H)`
  ${fe}
  padding: 4rem;
`,Ue=$.li`
  a {
    text-decoration: none;
    color: black;
    padding: 0.5rem 1rem;
    display: block;
    border-radius: 4px;

    ${e=>e.active&&B`
        background-color: #007bff;
        color: white;
      `}
  }
`,ve=["Home","About","Services","Contact",...Array.from({length:50},(e,t)=>(t+1).toString())],me=({items:e,setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})=>{const[r,a]=g.useState(null);return u("ul",{children:e.map((l,i)=>u(Ue,{active:r===l,children:u("a",{href:"#",onClick:v=>{v.preventDefault(),n?t(!1):(a(l),t(o))},children:l})},i))})},qe=()=>{const e=q(`(max-width: ${J.mobileNavBreak}em)`);return T(be,{children:[u(ze,{}),T(se,{children:[u(We,{ariaLabel:"Main navigation",children:({setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})=>u(me,{items:ve,setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})}),u(Oe,{style:{padding:"4rem",marginLeft:e?ce.collapsedWidth:""},children:T("h1",{children:["Main content",u("p",{children:u("a",{href:"#",children:"focusable element"})})]})})]})]})},Ge=$(xe)`
  &:hover {
    svg path {
      fill: ${_.palette.lightBlue};
    }
  }
`,He=()=>T(Q.Provider,{value:["sidebar","nav","main"],children:[u(Ie,{}),T(se,{children:[u(je,{ariaLabel:"Header navigation",navHeader:u(we,{alt:"logo"}),children:({setNavIsCollapsed:e,navIsCollapsed:t,isMobile:n})=>u(me,{items:ve,setNavIsCollapsed:e,navIsCollapsed:t,isMobile:n})}),T(Te,{ariaLabel:"Main navigation",children:[u("h1",{children:"Title"}),u(Ge,{label:"Menu",children:T(Se,{children:[u("button",{children:"Example button"}),u("button",{children:"Another button"})]})})]}),u(Ve,{tagName:"main",slot:"main",children:T("h1",{children:["Main content",u("p",{children:u("a",{href:"#",children:"focusable element"})}),u("p",{children:Date.now().toString()})]})})]})]}),ft=()=>u(Q.Provider,{value:["sidebar","nav","main"],children:u(He,{})}),vt=()=>u(qe,{});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{ft as UsingBodyPortal,vt as WithoutBodyPortal};
