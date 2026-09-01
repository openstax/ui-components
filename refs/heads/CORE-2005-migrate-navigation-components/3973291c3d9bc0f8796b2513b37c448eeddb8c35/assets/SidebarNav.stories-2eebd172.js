import{R as i,j as a,c as p,a as u,W as B,s as v,C as g,F as D}from"./index-a38b551c.js";import{a as w}from"./hooks-b8f540df.js";import{R as G,L as K}from"./RightArrow-61752180.js";import{B as P,a as E}from"./BodyPortal-cea3e365.js";import{b as R,c as Q}from"./theme-d4ad8b5e.js";/* empty css              */import{$ as F}from"./FocusScope-606e4a83.js";import{d as O,f as U,b as V,P as _}from"./NavBar-120d6334.js";import"./contexts-0126b798.js";import"./palette-97ed00c9.js";import"./useFocusRing-ba8df2bb.js";import"./Dialog-4e281e9c.js";import"./Button-8a084f8e.js";import"./Hidden-c13db486.js";import"./useButton-eeea7b85.js";import"./VisuallyHidden-09ae7cb9.js";import"./OverlayArrow-a5df9f68.js";import"./context-c7fdf9db.js";import"./Collection-51160688.js";import"./useTreeState-944e7e06.js";const q="5.6rem",z="24rem",k=({mobileBreakpoint:e=`${R.mobileNavBreak}em`,...t})=>{const n=w(`(max-width: ${e})`),o=t.isMobile??n,[r,l]=i.useState(o);return{isMobile:o,navIsCollapsed:r,setNavIsCollapsed:l}},A=()=>{const[e,t]=i.useState("");return i.useEffect(()=>{if(!e||e==="idle")return;const n=setTimeout(()=>t("idle"),300);return()=>clearTimeout(n)},[e,t]),{navAnimation:e,setNavAnimation:t}},I=(e,t,n)=>{i.useEffect(()=>{if(!n)return;const o=r=>{e!=null&&e.current&&!e.current.contains(r.target)&&document.body.contains(r.target)&&t()};return document.addEventListener("click",o),document.addEventListener("touchend",o),()=>{document.removeEventListener("click",o),document.removeEventListener("touchend",o)}},[e,t,n])},J=(e,t)=>{i.useEffect(()=>{if(!t)return;const n=o=>{o.key==="Escape"&&e()};return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[e,t])},X=e=>{const[t,n]=i.useState(0);return i.useLayoutEffect(()=>{e.current&&(e.current.scrollTop=t)}),n},L=(e,t,n)=>i.useCallback(o=>{o!==e&&n(o?"collapsing":"expanding"),t(o)},[e,n,t]);const y=i.forwardRef(({className:e,...t},n)=>a("header",{ref:n,className:p("sidebar-nav-header",e),...t}));y.displayName="NavHeader";const N=i.forwardRef(({className:e,...t},n)=>a("div",{ref:n,className:p("sidebar-nav-body",e),...t}));N.displayName="NavBody";const S=i.forwardRef(({className:e,...t},n)=>a("footer",{ref:n,className:p("sidebar-nav-footer",e),...t}));S.displayName="NavFooter";const x=i.forwardRef(({className:e,...t},n)=>a("button",{ref:n,className:p("sidebar-nav-toggle",e),...t}));x.displayName="ToggleButton";const M=({sidebarNavRef:e,navHeader:t,navFooter:n,children:o,navIsCollapsed:r,setNavIsCollapsed:l,navAnimation:s,isMobile:d})=>{const c=i.useRef(null);i.useLayoutEffect(()=>{l(d)},[d]);const m=i.useCallback(()=>{l(!0)},[l]);I(e,m,d&&!r),J(m,d&&!r);const f={navIsCollapsed:r,setNavIsCollapsed:l,isMobile:d};i.useEffect(()=>{s==="idle"&&c.current.focus()},[s]);const h=i.useRef(null),H=X(h);return u(F,{contain:d&&!r,children:[a(x,{"aria-expanded":!r,ref:c,"data-testid":"sidebarnav-toggle",className:p({collapsed:r}),onClick:b=>{l(!r),b.stopPropagation()},"aria-label":r?"Expand navigation":"Collapse navigation",children:r?a(G,{}):a(K,{})}),t?a(y,{children:typeof t=="function"?t(f):t}):null,a(N,{"data-testid":"nav-body",ref:h,onScroll:b=>H(b.target.scrollTop),children:typeof o=="function"?o(f):o}),n?a(S,{children:typeof n=="function"?n(f):n}):null]})},Y=({className:e,style:t,id:n,ariaLabel:o,...r})=>{const{isMobile:l,navIsCollapsed:s,setNavIsCollapsed:d}=k(r),c=i.useRef(null),{navAnimation:m,setNavAnimation:f}=A(),h=L(s,d,f);return a("nav",{id:n,ref:c,"data-testid":"sidebarnav","aria-label":o,style:t,className:p("sidebar-nav",e,{collapsed:s,mobile:l,collapsing:m==="collapsing",expanding:m==="expanding"}),children:a(M,{...r,sidebarNavRef:c,navIsCollapsed:s,setNavIsCollapsed:h,isMobile:l,children:r.children})})},Z=({className:e,style:t,id:n,ariaLabel:o,...r})=>{const{isMobile:l,navIsCollapsed:s,setNavIsCollapsed:d}=k(r),c=i.useRef(typeof document<"u"?document.createElement("NAV"):null),{navAnimation:m,setNavAnimation:f}=A(),h=L(s,d,f);return a(P,{ref:c,id:n,tagName:"nav",slot:"sidebar","data-testid":"sidebarnav",ariaLabel:o,style:t,className:p("sidebar-nav",e,{collapsed:s,mobile:l,collapsing:m==="collapsing",expanding:m==="expanding"}),children:a(M,{...r,navIsCollapsed:s,setNavIsCollapsed:h,sidebarNavRef:c,navAnimation:m,isMobile:l})})},ee={NavHeader:y,NavBody:N,NavFooter:S,ToggleButton:x,expandedWidth:z,collapsedWidth:q},te=B`
  html, body, #ladle-root {
    margin: 0;
    padding: 0;
  }

  #ladle-root {
    height: 100vh;
  }
`,ae=B`
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
`,C=g`
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
`,T=g`
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

    ${e=>e.active&&g`
        background-color: #007bff;
        color: white;
      `}
  }
`,W=["Home","About","Services","Contact",...Array.from({length:50},(e,t)=>(t+1).toString())],j=({items:e,setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})=>{const[r,l]=i.useState(null);return a("ul",{children:e.map((s,d)=>a(le,{active:r===s,children:a("a",{href:"#",onClick:c=>{c.preventDefault(),n?t(!1):(l(s),t(o))},children:s})},d))})},se=()=>{const e=w(`(max-width: ${R.mobileNavBreak}em)`);return u(D,{children:[a(te,{}),u($,{children:[a(ne,{ariaLabel:"Main navigation",children:({setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})=>a(j,{items:W,setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})}),a(re,{style:{padding:"4rem",marginLeft:e?ee.collapsedWidth:""},children:u("h1",{children:["Main content",a("p",{children:a("a",{href:"#",children:"focusable element"})})]})})]})]})},de=v(O)`
  &:hover {
    svg path {
      fill: ${Q.palette.lightBlue};
    }
  }
`,ce=()=>u(E.Provider,{value:["sidebar","nav","main"],children:[a(ae,{}),u($,{children:[a(oe,{ariaLabel:"Header navigation",navHeader:a(U,{alt:"logo"}),children:({setNavIsCollapsed:e,navIsCollapsed:t,isMobile:n})=>a(j,{items:W,setNavIsCollapsed:e,navIsCollapsed:t,isMobile:n})}),u(V,{ariaLabel:"Main navigation",children:[a("h1",{children:"Title"}),a(de,{label:"Menu",children:u(_,{children:[a("button",{children:"Example button"}),a("button",{children:"Another button"})]})})]}),a(ie,{tagName:"main",slot:"main",children:u("h1",{children:["Main content",a("p",{children:a("a",{href:"#",children:"focusable element"})}),a("p",{children:Date.now().toString()})]})})]})]}),Me=()=>a(E.Provider,{value:["sidebar","nav","main"],children:a(ce,{})}),$e=()=>a(se,{});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Me as UsingBodyPortal,$e as WithoutBodyPortal};
