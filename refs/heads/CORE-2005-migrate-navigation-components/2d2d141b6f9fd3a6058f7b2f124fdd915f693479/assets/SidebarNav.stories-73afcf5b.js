import{R as i,j as a,c as b,a as m,W as B,s as v,C as y,F as K}from"./index-1293f3a9.js";import{a as w}from"./hooks-26e16d91.js";import{R as Q,L as V}from"./RightArrow-5e575c32.js";import{B as P,a as E}from"./BodyPortal-274a094f.js";import{b as k,c as g,z as x}from"./theme-e8c258fa.js";import{$ as I}from"./Collection-a2332310.js";import{d as O,f as U,b as _,P as q}from"./NavBar-b9b622ad.js";import"./contexts-48249f1d.js";import"./palette-f868513b.js";import"./useFocusRing-f2d46e7e.js";import"./context-2ffd8006.js";import"./Dialog-4256cde8.js";import"./Button-a3d122f3.js";import"./useButton-6e341a21.js";import"./VisuallyHidden-38bae7fd.js";import"./OverlayArrow-b46e2fdb.js";import"./useTreeState-607fd514.js";const F="5.6rem",J="24rem",A=({mobileBreakpoint:e=`${k.mobileNavBreak}em`,...t})=>{const n=w(`(max-width: ${e})`),o=t.isMobile??n,[r,l]=i.useState(o);return{isMobile:o,navIsCollapsed:r,setNavIsCollapsed:l}},L=()=>{const[e,t]=i.useState("");return i.useEffect(()=>{if(!e||e==="idle")return;const n=setTimeout(()=>t("idle"),300);return()=>clearTimeout(n)},[e,t]),{navAnimation:e,setNavAnimation:t}},X=(e,t,n)=>{i.useEffect(()=>{if(!n)return;const o=r=>{e!=null&&e.current&&!e.current.contains(r.target)&&document.body.contains(r.target)&&t()};return document.addEventListener("click",o),document.addEventListener("touchend",o),()=>{document.removeEventListener("click",o),document.removeEventListener("touchend",o)}},[e,t,n])},Y=(e,t)=>{i.useEffect(()=>{if(!t)return;const n=o=>{o.key==="Escape"&&e()};return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[e,t])},Z=e=>{const[t,n]=i.useState(0);return i.useLayoutEffect(()=>{e.current&&(e.current.scrollTop=t)}),n},R=(e,t,n)=>i.useCallback(o=>{o!==e&&n(o?"collapsing":"expanding"),t(o)},[e,n,t]);const M=({className:e,...t})=>a("header",{className:b("sidebar-nav-header",e),...t}),N=i.forwardRef(({className:e,...t},n)=>a("div",{ref:n,className:b("sidebar-nav-body",e),...t}));N.displayName="NavBody";const $=({className:e,...t})=>a("footer",{className:b("sidebar-nav-footer",e),...t}),S=i.forwardRef(({className:e,...t},n)=>a("button",{ref:n,className:b("sidebar-nav-toggle",e),...t}));S.displayName="ToggleButton";const C={"--sidebar-nav-background":g.palette.neutralBright,"--sidebar-nav-color":g.palette.neutralThin,"--sidebar-nav-z-index":x.navbar-1,"--sidebar-nav-open-z-index":x.sidebar},T=({sidebarNavRef:e,navHeader:t,navFooter:n,children:o,navIsCollapsed:r,setNavIsCollapsed:l,navAnimation:s,isMobile:d})=>{const c=i.useRef(null);i.useLayoutEffect(()=>{l(d)},[d]);const u=i.useCallback(()=>{l(!0)},[l]);X(e,u,d&&!r),Y(u,d&&!r);const f={navIsCollapsed:r,setNavIsCollapsed:l,isMobile:d};i.useEffect(()=>{s==="idle"&&c.current.focus()},[s]);const p=i.useRef(null),H=Z(p);return m(I,{contain:d&&!r,children:[a(S,{"aria-expanded":!r,ref:c,"data-testid":"sidebarnav-toggle",className:b({collapsed:r}),onClick:h=>{l(!r),h.stopPropagation()},"aria-label":r?"Expand navigation":"Collapse navigation",children:r?a(Q,{}):a(V,{})}),t?a(M,{children:typeof t=="function"?t(f):t}):null,a(N,{"data-testid":"nav-body",ref:p,onScroll:h=>H(h.target.scrollTop),children:typeof o=="function"?o(f):o}),n?a($,{children:typeof n=="function"?n(f):n}):null]})},ee=({className:e,style:t,id:n,ariaLabel:o,...r})=>{const{isMobile:l,navIsCollapsed:s,setNavIsCollapsed:d}=A(r),c=i.useRef(null),{navAnimation:u,setNavAnimation:f}=L(),p=R(s,d,f);return a("nav",{id:n,ref:c,"data-testid":"sidebarnav","aria-label":o,style:{...C,...t},className:b("sidebar-nav",e,{collapsed:s,mobile:l,collapsing:u==="collapsing",expanding:u==="expanding"}),children:a(T,{...r,sidebarNavRef:c,navIsCollapsed:s,setNavIsCollapsed:p,isMobile:l,children:r.children})})},te=({className:e,style:t,id:n,ariaLabel:o,...r})=>{const{isMobile:l,navIsCollapsed:s,setNavIsCollapsed:d}=A(r),c=i.useRef(typeof document<"u"?document.createElement("NAV"):null),{navAnimation:u,setNavAnimation:f}=L(),p=R(s,d,f);return a(P,{ref:c,id:n,tagName:"nav",slot:"sidebar","data-testid":"sidebarnav",ariaLabel:o,style:{...C,...t},className:b("sidebar-nav",e,{collapsed:s,mobile:l,collapsing:u==="collapsing",expanding:u==="expanding"}),children:a(T,{...r,navIsCollapsed:s,setNavIsCollapsed:p,sidebarNavRef:c,navAnimation:u,isMobile:l})})},ae={NavHeader:M,NavBody:N,NavFooter:$,ToggleButton:S,expandedWidth:J,collapsedWidth:F},ne=B`
  html, body, #ladle-root {
    margin: 0;
    padding: 0;
  }

  #ladle-root {
    height: 100vh;
  }
`,oe=B`
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
`,W=v.div`
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
`,z=y`
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
`,j=y`
  .mobile + & {
    margin-left: 5.6rem;
  }
`,re=v(ee)`
  ${z}
`,ie=v(te)`
  ${z}
`,le=v.main`
  ${j}
`,se=v(P)`
  ${j}
  padding: 4rem;
`,de=v.li`
  a {
    text-decoration: none;
    color: black;
    padding: 0.5rem 1rem;
    display: block;
    border-radius: 4px;

    ${e=>e.active&&y`
        background-color: #007bff;
        color: white;
      `}
  }
`,D=["Home","About","Services","Contact",...Array.from({length:50},(e,t)=>(t+1).toString())],G=({items:e,setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})=>{const[r,l]=i.useState(null);return a("ul",{children:e.map((s,d)=>a(de,{active:r===s,children:a("a",{href:"#",onClick:c=>{c.preventDefault(),n?t(!1):(l(s),t(o))},children:s})},d))})},ce=()=>{const e=w(`(max-width: ${k.mobileNavBreak}em)`);return m(K,{children:[a(ne,{}),m(W,{children:[a(re,{ariaLabel:"Main navigation",children:({setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})=>a(G,{items:D,setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})}),a(le,{style:{padding:"4rem",marginLeft:e?ae.collapsedWidth:""},children:m("h1",{children:["Main content",a("p",{children:a("a",{href:"#",children:"focusable element"})})]})})]})]})},ue=v(O)`
  &:hover {
    svg path {
      fill: ${g.palette.lightBlue};
    }
  }
`,me=()=>m(E.Provider,{value:["sidebar","nav","main"],children:[a(oe,{}),m(W,{children:[a(ie,{ariaLabel:"Header navigation",navHeader:a(U,{alt:"logo"}),children:({setNavIsCollapsed:e,navIsCollapsed:t,isMobile:n})=>a(G,{items:D,setNavIsCollapsed:e,navIsCollapsed:t,isMobile:n})}),m(_,{ariaLabel:"Main navigation",children:[a("h1",{children:"Title"}),a(ue,{label:"Menu",children:m(q,{children:[a("button",{children:"Example button"}),a("button",{children:"Another button"})]})})]}),a(se,{tagName:"main",slot:"main",children:m("h1",{children:["Main content",a("p",{children:a("a",{href:"#",children:"focusable element"})}),a("p",{children:Date.now().toString()})]})})]})]}),Re=()=>a(E.Provider,{value:["sidebar","nav","main"],children:a(me,{})}),Me=()=>a(ce,{});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Re as UsingBodyPortal,Me as WithoutBodyPortal};
