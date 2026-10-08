import{R as i,j as a,c as p,a as u,W as x,s as v,C as h,F as D}from"./index-48a22ada.js";import{a as w}from"./hooks-e5391e0c.js";import{R as G,L as K}from"./RightArrow-e83d78d4.js";import{B as P,a as E}from"./BodyPortal-cf47f2e6.js";import{b as R,c as Q}from"./theme-bc69133b.js";/* empty css              */import{$ as q}from"./FocusScope-97648642.js";import{d as F,f as O,b as U,P as V}from"./NavBar-991c53e1.js";import"./contexts-f4b8e616.js";import"./palette-97ed00c9.js";import"./useFocusRing-a9eaccac.js";import"./useFocusable-2a6e9f1c.js";import"./Dialog-a2cef5d3.js";import"./Button-20f9376f.js";import"./Hidden-bb45d810.js";import"./useButton-20987226.js";import"./VisuallyHidden-91b1f4b7.js";import"./OverlayArrow-f3d2c316.js";import"./context-007e99e0.js";import"./Collection-1dfa96d4.js";import"./useTreeState-62ba95df.js";import"./MenuPopover-6041a28a.js";const _="5.6rem",z="24rem",k=({mobileBreakpoint:e=`${R.mobileNavBreak}em`,...t})=>{const n=w(`(max-width: ${e})`),o=t.isMobile??n,[r,l]=i.useState(o);return{isMobile:o,navIsCollapsed:r,setNavIsCollapsed:l}},A=()=>{const[e,t]=i.useState("");return i.useEffect(()=>{if(!e||e==="idle")return;const n=setTimeout(()=>t("idle"),300);return()=>clearTimeout(n)},[e,t]),{navAnimation:e,setNavAnimation:t}},I=(e,t,n)=>{i.useEffect(()=>{if(!n)return;const o=r=>{e!=null&&e.current&&!e.current.contains(r.target)&&document.body.contains(r.target)&&t()};return document.addEventListener("click",o),document.addEventListener("touchend",o),()=>{document.removeEventListener("click",o),document.removeEventListener("touchend",o)}},[e,t,n])},J=(e,t)=>{i.useEffect(()=>{if(!t)return;const n=o=>{o.key==="Escape"&&e()};return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[e,t])},X=e=>{const[t,n]=i.useState(0);return i.useLayoutEffect(()=>{e.current&&(e.current.scrollTop=t)}),n},L=(e,t,n)=>i.useCallback(o=>{o!==e&&n(o?"collapsing":"expanding"),t(o)},[e,n,t]);const y=i.forwardRef(({className:e,...t},n)=>a("header",{ref:n,className:p("sidebar-nav-header",e),...t}));y.displayName="NavHeader";const N=i.forwardRef(({className:e,...t},n)=>a("div",{ref:n,className:p("sidebar-nav-body",e),...t}));N.displayName="NavBody";const S=i.forwardRef(({className:e,...t},n)=>a("footer",{ref:n,className:p("sidebar-nav-footer",e),...t}));S.displayName="NavFooter";const B=i.forwardRef(({className:e,...t},n)=>a("button",{ref:n,className:p("sidebar-nav-toggle",e),...t}));B.displayName="ToggleButton";const M=({sidebarNavRef:e,navHeader:t,navFooter:n,children:o,navIsCollapsed:r,setNavIsCollapsed:l,navAnimation:s,isMobile:d})=>{const c=i.useRef(null);i.useLayoutEffect(()=>{l(d)},[d]);const m=i.useCallback(()=>{l(!0)},[l]);I(e,m,d&&!r),J(m,d&&!r);const f={navIsCollapsed:r,setNavIsCollapsed:l,isMobile:d};i.useEffect(()=>{s==="idle"&&c.current.focus()},[s]);const g=i.useRef(null),H=X(g);return u(q,{contain:d&&!r,children:[a(B,{"aria-expanded":!r,ref:c,"data-testid":"sidebarnav-toggle",className:p({collapsed:r}),onClick:b=>{l(!r),b.stopPropagation()},"aria-label":r?"Expand navigation":"Collapse navigation",children:r?a(G,{}):a(K,{})}),t?a(y,{children:typeof t=="function"?t(f):t}):null,a(N,{"data-testid":"nav-body",ref:g,onScroll:b=>H(b.target.scrollTop),children:typeof o=="function"?o(f):o}),n?a(S,{children:typeof n=="function"?n(f):n}):null]})},Y=({className:e,style:t,id:n,ariaLabel:o,...r})=>{const{isMobile:l,navIsCollapsed:s,setNavIsCollapsed:d}=k(r),c=i.useRef(null),{navAnimation:m,setNavAnimation:f}=A(),g=L(s,d,f);return a("nav",{id:n,ref:c,"data-testid":"sidebarnav","aria-label":o,style:t,className:p("sidebar-nav",e,{collapsed:s,mobile:l,collapsing:m==="collapsing",expanding:m==="expanding"}),children:a(M,{...r,sidebarNavRef:c,navIsCollapsed:s,setNavIsCollapsed:g,isMobile:l,children:r.children})})},Z=({className:e,style:t,id:n,ariaLabel:o,...r})=>{const{isMobile:l,navIsCollapsed:s,setNavIsCollapsed:d}=k(r),c=i.useRef(typeof document<"u"?document.createElement("NAV"):null),{navAnimation:m,setNavAnimation:f}=A(),g=L(s,d,f);return a(P,{ref:c,id:n,tagName:"nav",slot:"sidebar","data-testid":"sidebarnav",ariaLabel:o,style:t,className:p("sidebar-nav",e,{collapsed:s,mobile:l,collapsing:m==="collapsing",expanding:m==="expanding"}),children:a(M,{...r,navIsCollapsed:s,setNavIsCollapsed:g,sidebarNavRef:c,navAnimation:m,isMobile:l})})},ee={NavHeader:y,NavBody:N,NavFooter:S,ToggleButton:B,expandedWidth:z,collapsedWidth:_},te=x`
  html, body, #ladle-root {
    margin: 0;
    padding: 0;
  }

  #ladle-root {
    height: 100vh;
  }
`,ae=x`
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
`,$=v.div`
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
`,C=h`
  overflow: auto;
  grid-area: nav;
  padding: 2rem;

  ul {
    list-style: none;
    padding: 0;
  }

  .sidebar-nav-toggle {
    margin-top: 3.2rem;
  }
`,T=h`
  .mobile + & {
    margin-left: 5.6rem;
  }
`,ne=v(Y)`
  ${C}
`,oe=v(Z)`
  ${C}
`,re=v.main`
  ${T}
`,ie=v(P)`
  ${T}
  padding: 4rem;
`,le=v.li`
  a {
    text-decoration: none;
    color: black;
    padding: 0.5rem 1rem;
    display: block;
    border-radius: 4px;

    ${e=>e.active&&h`
        background-color: #007bff;
        color: white;
      `}
  }
`,W=["Home","About","Services","Contact",...Array.from({length:50},(e,t)=>(t+1).toString())],j=({items:e,setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})=>{const[r,l]=i.useState(null);return a("ul",{children:e.map((s,d)=>a(le,{active:r===s,children:a("a",{href:"#",onClick:c=>{c.preventDefault(),n?t(!1):(l(s),t(o))},children:s})},d))})},se=()=>{const e=w(`(max-width: ${R.mobileNavBreak}em)`);return u(D,{children:[a(te,{}),u($,{children:[a(ne,{ariaLabel:"Main navigation",children:({setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})=>a(j,{items:W,setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})}),a(re,{style:{padding:"4rem",marginLeft:e?ee.collapsedWidth:""},children:u("h1",{children:["Main content",a("p",{children:a("a",{href:"#",children:"focusable element"})})]})})]})]})},de=v(F)`
  &:hover {
    svg path {
      fill: ${Q.palette.lightBlue};
    }
  }
`,ce=()=>u(E.Provider,{value:["sidebar","nav","main"],children:[a(ae,{}),u($,{children:[a(oe,{ariaLabel:"Header navigation",navHeader:a(O,{alt:"logo"}),children:({setNavIsCollapsed:e,navIsCollapsed:t,isMobile:n})=>a(j,{items:W,setNavIsCollapsed:e,navIsCollapsed:t,isMobile:n})}),u(U,{ariaLabel:"Main navigation",children:[a("h1",{children:"Title"}),a(de,{label:"Menu",children:u(V,{children:[a("button",{children:"Example button"}),a("button",{children:"Another button"})]})})]}),a(ie,{tagName:"main",slot:"main",children:u("h1",{children:["Main content",a("p",{children:a("a",{href:"#",children:"focusable element"})}),a("p",{children:Date.now().toString()})]})})]})]}),Ce=()=>a(E.Provider,{value:["sidebar","nav","main"],children:a(ce,{})}),Te=()=>a(se,{});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Ce as UsingBodyPortal,Te as WithoutBodyPortal};
