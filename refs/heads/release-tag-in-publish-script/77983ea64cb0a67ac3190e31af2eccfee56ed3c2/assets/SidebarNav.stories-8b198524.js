import{R as r,a,c as p,j as u,W as R,s as v,C as y,F as q}from"./index-e3c652a5.js";import{b as k}from"./hooks-76f1ddc4.js";import{R as F,L as O}from"./RightArrow-791fad82.js";import{B as A,a as L}from"./BodyPortal-0e087e18.js";import{b as M,c as U}from"./theme-bc69133b.js";/* empty css              */import{$ as V}from"./FocusScope-7e2c63ca.js";import{b as _,N as z}from"./NavBar-46e2a02e.js";import{b as I,P as J}from"./NavBarMenuButtons-8e382f95.js";import"./contexts-a4ec3ed5.js";import"./palette-97ed00c9.js";import"./useFocusRing-498b294f.js";import"./useFocusable-5019118a.js";import"./Button-6eb4f2c3.js";import"./Hidden-7c8d7410.js";import"./useButton-c4368a2c.js";import"./Dialog-d309187e.js";import"./VisuallyHidden-869ec7cd.js";import"./OverlayArrow-45d81623.js";import"./context-c12ccf2b.js";import"./useControlledState-68f08f2c.js";import"./Collection-15cc60dc.js";import"./useTreeState-a8aa74ae.js";import"./useInteractOutside-4e417106.js";import"./MenuPopover-40dc330d.js";const X="5.6rem",Y="24rem",$=({mobileBreakpoint:e=`${M.mobileNavBreak}em`,...t})=>{const n=k(`(max-width: ${e})`),o=t.isMobile??n,[l,c]=r.useState(o);return{isMobile:o,navIsCollapsed:l,setNavIsCollapsed:c}},C=()=>{const[e,t]=r.useState("");return r.useEffect(()=>{if(!e||e==="idle")return;const n=setTimeout(()=>t("idle"),300);return()=>clearTimeout(n)},[e,t]),{navAnimation:e,setNavAnimation:t}},Z=(e,t,n)=>{r.useEffect(()=>{if(!n)return;const o=l=>{e!=null&&e.current&&!e.current.contains(l.target)&&document.body.contains(l.target)&&t()};return document.addEventListener("click",o),document.addEventListener("touchend",o),()=>{document.removeEventListener("click",o),document.removeEventListener("touchend",o)}},[e,t,n])},ee=(e,t)=>{r.useEffect(()=>{if(!t)return;const n=o=>{o.key==="Escape"&&e()};return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[e,t])},te=e=>{const[t,n]=r.useState(0);return r.useLayoutEffect(()=>{e.current&&(e.current.scrollTop=t)}),n},T=(e,t,n)=>r.useCallback(o=>{o!==e&&n(o?"collapsing":"expanding"),t(o)},[e,n,t]);const N=r.forwardRef(({className:e,...t},n)=>a("header",{ref:n,className:p("sidebar-nav-header",e),...t}));N.displayName="NavHeader";const S=r.forwardRef(({className:e,...t},n)=>a("div",{ref:n,className:p("sidebar-nav-body",e),...t}));S.displayName="NavBody";const B=r.forwardRef(({className:e,...t},n)=>a("footer",{ref:n,className:p("sidebar-nav-footer",e),...t}));B.displayName="NavFooter";const x=r.forwardRef(({className:e,...t},n)=>a("button",{ref:n,className:p("sidebar-nav-toggle",e),...t}));x.displayName="ToggleButton";const W=({sidebarNavRef:e,navHeader:t,navFooter:n,children:o,navHeaderClassName:l,navBodyClassName:c,navFooterClassName:s,toggleButtonClassName:f,navIsCollapsed:i,setNavIsCollapsed:d,navAnimation:b,isMobile:m})=>{const w=r.useRef(null);r.useLayoutEffect(()=>{d(m)},[m]);const P=r.useCallback(()=>{d(!0)},[d]);Z(e,P,m&&!i),ee(P,m&&!i);const g={navIsCollapsed:i,setNavIsCollapsed:d,isMobile:m};r.useEffect(()=>{b==="idle"&&w.current.focus()},[b]);const E=r.useRef(null),Q=te(E);return u(V,{contain:m&&!i,children:[a(x,{"aria-expanded":!i,ref:w,"data-testid":"sidebarnav-toggle",className:p(f,{collapsed:i}),onClick:h=>{d(!i),h.stopPropagation()},"aria-label":i?"Expand navigation":"Collapse navigation",children:i?a(F,{}):a(O,{})}),t?a(N,{className:l,children:typeof t=="function"?t(g):t}):null,a(S,{"data-testid":"nav-body",className:c,ref:E,onScroll:h=>Q(h.target.scrollTop),children:typeof o=="function"?o(g):o}),n?a(B,{className:s,children:typeof n=="function"?n(g):n}):null]})},ae=({className:e,style:t,id:n,ariaLabel:o,...l})=>{const{isMobile:c,navIsCollapsed:s,setNavIsCollapsed:f}=$(l),i=r.useRef(null),{navAnimation:d,setNavAnimation:b}=C(),m=T(s,f,b);return a("nav",{id:n,ref:i,"data-testid":"sidebarnav","aria-label":o,style:t,className:p("sidebar-nav",e,{collapsed:s,mobile:c,collapsing:d==="collapsing",expanding:d==="expanding"}),children:a(W,{...l,sidebarNavRef:i,navIsCollapsed:s,setNavIsCollapsed:m,isMobile:c,children:l.children})})},ne=({className:e,style:t,id:n,ariaLabel:o,...l})=>{const{isMobile:c,navIsCollapsed:s,setNavIsCollapsed:f}=$(l),i=r.useRef(typeof document<"u"?document.createElement("NAV"):null),{navAnimation:d,setNavAnimation:b}=C(),m=T(s,f,b);return a(A,{ref:i,id:n,tagName:"nav",slot:"sidebar","data-testid":"sidebarnav",ariaLabel:o,style:t,className:p("sidebar-nav",e,{collapsed:s,mobile:c,collapsing:d==="collapsing",expanding:d==="expanding"}),children:a(W,{...l,navIsCollapsed:s,setNavIsCollapsed:m,sidebarNavRef:i,navAnimation:d,isMobile:c})})},oe={NavHeader:N,NavBody:S,NavFooter:B,ToggleButton:x,expandedWidth:Y,collapsedWidth:X},re=R`
  html, body, #ladle-root {
    margin: 0;
    padding: 0;
  }

  #ladle-root {
    height: 100vh;
  }
`,ie=R`
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
`,j=v.div`
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
`,H=y`
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
`,D=y`
  .mobile + & {
    margin-left: 5.6rem;
  }
`,le=v(ae)`
  ${H}
`,se=v(ne)`
  ${H}
`,de=v.main`
  ${D}
`,ce=v(A)`
  ${D}
  padding: 4rem;
`,me=v.li`
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
`,G=["Home","About","Services","Contact",...Array.from({length:50},(e,t)=>(t+1).toString())],K=({items:e,setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})=>{const[l,c]=r.useState(null);return a("ul",{children:e.map((s,f)=>a(me,{active:l===s,children:a("a",{href:"#",onClick:i=>{i.preventDefault(),n?t(!1):(c(s),t(o))},children:s})},f))})},ue=()=>{const e=k(`(max-width: ${M.mobileNavBreak}em)`);return u(q,{children:[a(re,{}),u(j,{children:[a(le,{ariaLabel:"Main navigation",children:({setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})=>a(K,{items:G,setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})}),a(de,{style:{padding:"4rem",marginLeft:e?oe.collapsedWidth:""},children:u("h1",{children:["Main content",a("p",{children:a("a",{href:"#",children:"focusable element"})})]})})]})]})},fe=v(I)`
  &:hover {
    svg path {
      fill: ${U.palette.lightBlue};
    }
  }
`,pe=()=>u(L.Provider,{value:["sidebar","nav","main"],children:[a(ie,{}),u(j,{children:[a(se,{ariaLabel:"Header navigation",navHeader:a(_,{alt:"logo"}),children:({setNavIsCollapsed:e,navIsCollapsed:t,isMobile:n})=>a(K,{items:G,setNavIsCollapsed:e,navIsCollapsed:t,isMobile:n})}),u(z,{ariaLabel:"Main navigation",children:[a("h1",{children:"Title"}),a(fe,{label:"Menu",children:u(J,{children:[a("button",{children:"Example button"}),a("button",{children:"Another button"})]})})]}),a(ce,{tagName:"main",slot:"main",children:u("h1",{children:["Main content",a("p",{children:a("a",{href:"#",children:"focusable element"})}),a("p",{children:Date.now().toString()})]})})]})]}),Ke=()=>a(L.Provider,{value:["sidebar","nav","main"],children:a(pe,{})}),Qe=()=>a(ue,{});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Ke as UsingBodyPortal,Qe as WithoutBodyPortal};
