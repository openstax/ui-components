import{R as r,a,c as b,j as u,F as j}from"./index-ff7015d6.js";import{b as E}from"./hooks-e048946c.js";import{R as H,L as D}from"./RightArrow-1d265a29.js";import{B as P,a as R}from"./BodyPortal-aa3d841f.js";import{b as A}from"./theme-3db70ba8.js";/* empty css              */import{$ as G}from"./FocusScope-f37b50e0.js";import{b as K,N as Q}from"./NavBar-09b6067a.js";import{b as _,P as q}from"./NavBarMenuButtons-29bf60bc.js";import"./contexts-6662c1b6.js";import"./palette-97ed00c9.js";import"./useFocusRing-3824a14c.js";import"./useFocusable-90983a90.js";import"./Button-3c94f183.js";import"./Hidden-4282b2d8.js";import"./useButton-4fbaea96.js";import"./Dialog-c1c13d32.js";import"./VisuallyHidden-97752252.js";import"./OverlayArrow-670a4895.js";import"./context-793976c8.js";import"./useControlledState-e90b11ea.js";import"./Collection-7064bdaa.js";import"./useTreeState-31ffa2bc.js";import"./useInteractOutside-86daa263.js";import"./MenuPopover-32fee744.js";const F="5.6rem",O="24rem",L=({mobileBreakpoint:e=`${A.mobileNavBreak}em`,...t})=>{const n=E(`(max-width: ${e})`),o=t.isMobile??n,[s,c]=r.useState(o);return{isMobile:o,navIsCollapsed:s,setNavIsCollapsed:c}},k=()=>{const[e,t]=r.useState("");return r.useEffect(()=>{if(!e||e==="idle")return;const n=setTimeout(()=>t("idle"),300);return()=>clearTimeout(n)},[e,t]),{navAnimation:e,setNavAnimation:t}},U=(e,t,n)=>{r.useEffect(()=>{if(!n)return;const o=s=>{e!=null&&e.current&&!e.current.contains(s.target)&&document.body.contains(s.target)&&t()};return document.addEventListener("click",o),document.addEventListener("touchend",o),()=>{document.removeEventListener("click",o),document.removeEventListener("touchend",o)}},[e,t,n])},V=(e,t)=>{r.useEffect(()=>{if(!t)return;const n=o=>{o.key==="Escape"&&e()};return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[e,t])},z=e=>{const[t,n]=r.useState(0);return r.useLayoutEffect(()=>{e.current&&(e.current.scrollTop=t)}),n},M=(e,t,n)=>r.useCallback(o=>{o!==e&&n(o?"collapsing":"expanding"),t(o)},[e,n,t]);const g=r.forwardRef(({className:e,...t},n)=>a("header",{ref:n,className:b("sidebar-nav-header",e),...t}));g.displayName="NavHeader";const N=r.forwardRef(({className:e,...t},n)=>a("div",{ref:n,className:b("sidebar-nav-body",e),...t}));N.displayName="NavBody";const y=r.forwardRef(({className:e,...t},n)=>a("footer",{ref:n,className:b("sidebar-nav-footer",e),...t}));y.displayName="NavFooter";const S=r.forwardRef(({className:e,...t},n)=>a("button",{ref:n,className:b("sidebar-nav-toggle",e),...t}));S.displayName="ToggleButton";const $=({sidebarNavRef:e,navHeader:t,navFooter:n,children:o,navHeaderClassName:s,navBodyClassName:c,navFooterClassName:l,toggleButtonClassName:f,navIsCollapsed:i,setNavIsCollapsed:d,navAnimation:p,isMobile:m})=>{const w=r.useRef(null);r.useLayoutEffect(()=>{d(m)},[m]);const B=r.useCallback(()=>{d(!0)},[d]);U(e,B,m&&!i),V(B,m&&!i);const v={navIsCollapsed:i,setNavIsCollapsed:d,isMobile:m};r.useEffect(()=>{p==="idle"&&w.current.focus()},[p]);const x=r.useRef(null),W=z(x);return u(G,{contain:m&&!i,children:[a(S,{"aria-expanded":!i,ref:w,"data-testid":"sidebarnav-toggle",className:b(f,{collapsed:i}),onClick:h=>{d(!i),h.stopPropagation()},"aria-label":i?"Expand navigation":"Collapse navigation",children:i?a(H,{}):a(D,{})}),t?a(g,{className:s,children:typeof t=="function"?t(v):t}):null,a(N,{"data-testid":"nav-body",className:c,ref:x,onScroll:h=>W(h.target.scrollTop),children:typeof o=="function"?o(v):o}),n?a(y,{className:l,children:typeof n=="function"?n(v):n}):null]})},J=({className:e,style:t,id:n,ariaLabel:o,...s})=>{const{isMobile:c,navIsCollapsed:l,setNavIsCollapsed:f}=L(s),i=r.useRef(null),{navAnimation:d,setNavAnimation:p}=k(),m=M(l,f,p);return a("nav",{id:n,ref:i,"data-testid":"sidebarnav","aria-label":o,style:t,className:b("sidebar-nav",e,{collapsed:l,mobile:c,collapsing:d==="collapsing",expanding:d==="expanding"}),children:a($,{...s,sidebarNavRef:i,navIsCollapsed:l,setNavIsCollapsed:m,isMobile:c,children:s.children})})},X=({className:e,style:t,id:n,ariaLabel:o,...s})=>{const{isMobile:c,navIsCollapsed:l,setNavIsCollapsed:f}=L(s),i=r.useRef(typeof document<"u"?document.createElement("NAV"):null),{navAnimation:d,setNavAnimation:p}=k(),m=M(l,f,p);return a(P,{ref:i,id:n,tagName:"nav",slot:"sidebar","data-testid":"sidebarnav",ariaLabel:o,style:t,className:b("sidebar-nav",e,{collapsed:l,mobile:c,collapsing:d==="collapsing",expanding:d==="expanding"}),children:a($,{...s,navIsCollapsed:l,setNavIsCollapsed:m,sidebarNavRef:i,navAnimation:d,isMobile:c})})},Y={NavHeader:g,NavBody:N,NavFooter:y,ToggleButton:S,expandedWidth:O,collapsedWidth:F};const Z=()=>a("style",{children:`
  html, body, #ladle-root {
    margin: 0;
    padding: 0;
  }

  #ladle-root {
    height: 100vh;
  }
`}),I=()=>a("style",{children:`
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

    /* Not tag-qualified: NavBar's element is configurable via tagName */
    [data-portal-slot="nav"] {
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
`}),C=["Home","About","Services","Contact",...Array.from({length:50},(e,t)=>(t+1).toString())],T=({items:e,setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})=>{const[s,c]=r.useState(null);return a("ul",{children:e.map((l,f)=>a("li",{className:"story-sidebar-nav-item",children:a("a",{href:"#",style:s===l?{backgroundColor:"#007bff",color:"white"}:void 0,onClick:i=>{i.preventDefault(),n?t(!1):(c(l),t(o))},children:l})},f))})},ee=()=>{const e=E(`(max-width: ${A.mobileNavBreak}em)`);return u(j,{children:[a(Z,{}),u("div",{className:"story-sidebar-wrapper",children:[a(J,{className:"story-sidebar-nav",ariaLabel:"Main navigation",children:({setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})=>a(T,{items:C,setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})}),a("main",{className:"story-sidebar-main",style:{padding:"4rem",marginLeft:e?Y.collapsedWidth:""},children:u("h1",{children:["Main content",a("p",{children:a("a",{href:"#",children:"focusable element"})})]})})]})]})},te=()=>u(R.Provider,{value:["sidebar","nav","main"],children:[a(I,{}),u("div",{className:"story-sidebar-wrapper",children:[a(X,{className:"story-sidebar-nav",ariaLabel:"Header navigation",navHeader:a(K,{alt:"logo"}),children:({setNavIsCollapsed:e,navIsCollapsed:t,isMobile:n})=>a(T,{items:C,setNavIsCollapsed:e,navIsCollapsed:t,isMobile:n})}),u(Q,{ariaLabel:"Main navigation",children:[a("h1",{children:"Title"}),a(_,{className:"story-sidebar-info-button",label:"Menu",children:u(q,{children:[a("button",{children:"Example button"}),a("button",{children:"Another button"})]})})]}),a(P,{className:"story-sidebar-main story-sidebar-main-portal",tagName:"main",slot:"main",children:u("h1",{children:["Main content",a("p",{children:a("a",{href:"#",children:"focusable element"})}),a("p",{children:Date.now().toString()})]})})]})]}),Re=()=>a(R.Provider,{value:["sidebar","nav","main"],children:a(te,{})}),Ae=()=>a(ee,{});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Re as UsingBodyPortal,Ae as WithoutBodyPortal};
