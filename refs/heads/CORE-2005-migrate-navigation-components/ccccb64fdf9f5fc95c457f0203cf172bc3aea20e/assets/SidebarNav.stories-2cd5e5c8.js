import{R as i,j as a,c as v,a as u,W as P,s as b,C as y,F as K}from"./index-1c4517cb.js";import{a as E}from"./hooks-ee17ffef.js";import{R as Q,L as V}from"./RightArrow-a2f51273.js";import{B as k,a as R}from"./BodyPortal-51ee6dd3.js";import{b as A,c as g,z as w}from"./theme-e8c258fa.js";import{$ as F}from"./Collection-d8957be9.js";import{d as I,f as O,b as U,P as _}from"./NavBar-da629df2.js";import"./contexts-2c71e585.js";import"./palette-f868513b.js";import"./useFocusRing-fa44e90f.js";import"./context-9d4dcb09.js";import"./Dialog-233b2225.js";import"./Button-899e193f.js";import"./useButton-8bfef6cb.js";import"./VisuallyHidden-429f3740.js";import"./OverlayArrow-0a1f0e60.js";import"./useTreeState-114c9b30.js";const q="5.6rem",J="24rem",L=({mobileBreakpoint:e=`${A.mobileNavBreak}em`,...t})=>{const n=E(`(max-width: ${e})`),o=t.isMobile??n,[r,l]=i.useState(o);return{isMobile:o,navIsCollapsed:r,setNavIsCollapsed:l}},M=()=>{const[e,t]=i.useState("");return i.useEffect(()=>{if(!e||e==="idle")return;const n=setTimeout(()=>t("idle"),300);return()=>clearTimeout(n)},[e,t]),{navAnimation:e,setNavAnimation:t}},X=(e,t,n)=>{i.useEffect(()=>{if(!n)return;const o=r=>{e!=null&&e.current&&!e.current.contains(r.target)&&document.body.contains(r.target)&&t()};return document.addEventListener("click",o),document.addEventListener("touchend",o),()=>{document.removeEventListener("click",o),document.removeEventListener("touchend",o)}},[e,t,n])},Y=(e,t)=>{i.useEffect(()=>{if(!t)return;const n=o=>{o.key==="Escape"&&e()};return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[e,t])},Z=e=>{const[t,n]=i.useState(0);return i.useLayoutEffect(()=>{e.current&&(e.current.scrollTop=t)}),n},$=(e,t,n)=>i.useCallback(o=>{o!==e&&n(o?"collapsing":"expanding"),t(o)},[e,n,t]);const N=i.forwardRef(({className:e,...t},n)=>a("header",{ref:n,className:v("sidebar-nav-header",e),...t}));N.displayName="NavHeader";const S=i.forwardRef(({className:e,...t},n)=>a("div",{ref:n,className:v("sidebar-nav-body",e),...t}));S.displayName="NavBody";const x=i.forwardRef(({className:e,...t},n)=>a("footer",{ref:n,className:v("sidebar-nav-footer",e),...t}));x.displayName="NavFooter";const B=i.forwardRef(({className:e,...t},n)=>a("button",{ref:n,className:v("sidebar-nav-toggle",e),...t}));B.displayName="ToggleButton";const C={"--sidebar-nav-background":g.palette.neutralBright,"--sidebar-nav-color":g.palette.neutralThin,"--sidebar-nav-z-index":w.navbar-1,"--sidebar-nav-open-z-index":w.sidebar},T=({sidebarNavRef:e,navHeader:t,navFooter:n,children:o,navIsCollapsed:r,setNavIsCollapsed:l,navAnimation:s,isMobile:d})=>{const c=i.useRef(null);i.useLayoutEffect(()=>{l(d)},[d]);const m=i.useCallback(()=>{l(!0)},[l]);X(e,m,d&&!r),Y(m,d&&!r);const f={navIsCollapsed:r,setNavIsCollapsed:l,isMobile:d};i.useEffect(()=>{s==="idle"&&c.current.focus()},[s]);const p=i.useRef(null),G=Z(p);return u(F,{contain:d&&!r,children:[a(B,{"aria-expanded":!r,ref:c,"data-testid":"sidebarnav-toggle",className:v({collapsed:r}),onClick:h=>{l(!r),h.stopPropagation()},"aria-label":r?"Expand navigation":"Collapse navigation",children:r?a(Q,{}):a(V,{})}),t?a(N,{children:typeof t=="function"?t(f):t}):null,a(S,{"data-testid":"nav-body",ref:p,onScroll:h=>G(h.target.scrollTop),children:typeof o=="function"?o(f):o}),n?a(x,{children:typeof n=="function"?n(f):n}):null]})},ee=({className:e,style:t,id:n,ariaLabel:o,...r})=>{const{isMobile:l,navIsCollapsed:s,setNavIsCollapsed:d}=L(r),c=i.useRef(null),{navAnimation:m,setNavAnimation:f}=M(),p=$(s,d,f);return a("nav",{id:n,ref:c,"data-testid":"sidebarnav","aria-label":o,style:{...C,...t},className:v("sidebar-nav",e,{collapsed:s,mobile:l,collapsing:m==="collapsing",expanding:m==="expanding"}),children:a(T,{...r,sidebarNavRef:c,navIsCollapsed:s,setNavIsCollapsed:p,isMobile:l,children:r.children})})},te=({className:e,style:t,id:n,ariaLabel:o,...r})=>{const{isMobile:l,navIsCollapsed:s,setNavIsCollapsed:d}=L(r),c=i.useRef(typeof document<"u"?document.createElement("NAV"):null),{navAnimation:m,setNavAnimation:f}=M(),p=$(s,d,f);return a(k,{ref:c,id:n,tagName:"nav",slot:"sidebar","data-testid":"sidebarnav",ariaLabel:o,style:{...C,...t},className:v("sidebar-nav",e,{collapsed:s,mobile:l,collapsing:m==="collapsing",expanding:m==="expanding"}),children:a(T,{...r,navIsCollapsed:s,setNavIsCollapsed:p,sidebarNavRef:c,navAnimation:m,isMobile:l})})},ae={NavHeader:N,NavBody:S,NavFooter:x,ToggleButton:B,expandedWidth:J,collapsedWidth:q},ne=P`
  html, body, #ladle-root {
    margin: 0;
    padding: 0;
  }

  #ladle-root {
    height: 100vh;
  }
`,oe=P`
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
`,W=b.div`
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
`,re=b(ee)`
  ${z}
`,ie=b(te)`
  ${z}
`,le=b.main`
  ${j}
`,se=b(k)`
  ${j}
  padding: 4rem;
`,de=b.li`
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
`,H=["Home","About","Services","Contact",...Array.from({length:50},(e,t)=>(t+1).toString())],D=({items:e,setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})=>{const[r,l]=i.useState(null);return a("ul",{children:e.map((s,d)=>a(de,{active:r===s,children:a("a",{href:"#",onClick:c=>{c.preventDefault(),n?t(!1):(l(s),t(o))},children:s})},d))})},ce=()=>{const e=E(`(max-width: ${A.mobileNavBreak}em)`);return u(K,{children:[a(ne,{}),u(W,{children:[a(re,{ariaLabel:"Main navigation",children:({setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})=>a(D,{items:H,setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})}),a(le,{style:{padding:"4rem",marginLeft:e?ae.collapsedWidth:""},children:u("h1",{children:["Main content",a("p",{children:a("a",{href:"#",children:"focusable element"})})]})})]})]})},me=b(I)`
  &:hover {
    svg path {
      fill: ${g.palette.lightBlue};
    }
  }
`,ue=()=>u(R.Provider,{value:["sidebar","nav","main"],children:[a(oe,{}),u(W,{children:[a(ie,{ariaLabel:"Header navigation",navHeader:a(O,{alt:"logo"}),children:({setNavIsCollapsed:e,navIsCollapsed:t,isMobile:n})=>a(D,{items:H,setNavIsCollapsed:e,navIsCollapsed:t,isMobile:n})}),u(U,{ariaLabel:"Main navigation",children:[a("h1",{children:"Title"}),a(me,{label:"Menu",children:u(_,{children:[a("button",{children:"Example button"}),a("button",{children:"Another button"})]})})]}),a(se,{tagName:"main",slot:"main",children:u("h1",{children:["Main content",a("p",{children:a("a",{href:"#",children:"focusable element"})}),a("p",{children:Date.now().toString()})]})})]})]}),Le=()=>a(R.Provider,{value:["sidebar","nav","main"],children:a(ue,{})}),Me=()=>a(ce,{});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Le as UsingBodyPortal,Me as WithoutBodyPortal};
