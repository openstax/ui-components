import{C as b,s,R as d,j as a,c as w,a as u,W as N,F as O}from"./index-788b202e.js";import{a as S}from"./hooks-71affad6.js";import{R as U,L as V}from"./RightArrow-ea132a97.js";import{B as k,a as B}from"./BodyPortal-48fd4a37.js";import{c as v,z as f,b as $}from"./theme-e8c258fa.js";import{$ as _}from"./Collection-0fc0c0f8.js";import{d as q,f as F,b as J,P as X}from"./NavBar-f22e55df.js";import"./contexts-4fea428e.js";import"./palette-f868513b.js";import"./useFocusRing-fbe4d19f.js";import"./context-373662f9.js";import"./Dialog-bf2bb6b5.js";import"./Button-ca8ea009.js";import"./useButton-56df494a.js";import"./VisuallyHidden-d6b276e7.js";import"./OverlayArrow-651a8f8c.js";import"./useTreeState-7fad3765.js";const y="5.6rem",P="24rem",E=b`
  --collapsed-width: ${y};
  --expanded-width: ${P};
  width: var(--expanded-width);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  box-shadow: -0.2rem 0 0.4rem rgba(0, 0, 0, 0.1) inset;
  background: ${v.palette.neutralBright};
  color: ${v.palette.neutralThin};
  z-index: ${f.navbar-1};

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
    margin-left: ${y};
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
    z-index: ${f.navbar+1};
  }

  &.mobile:not(.collapsed),
  &.mobile.collapsing {
    z-index: ${f.sidebar};

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
      z-index: ${f.sidebar-1};
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
`,A=s.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`,L=s.div`
  height: 100%;
  overflow-y: auto;
`,M=s.footer`
  button {
    width: 100%;
  }
`,R=s.button`
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
`,C=({mobileBreakpoint:e=`${$.mobileNavBreak}em`,...t})=>{const n=S(`(max-width: ${e})`),o=t.isMobile??n,[i,r]=d.useState(o);return{isMobile:o,navIsCollapsed:i,setNavIsCollapsed:r}},T=()=>{const[e,t]=d.useState("");return d.useEffect(()=>{if(!e||e==="idle")return;const n=setTimeout(()=>t("idle"),300);return()=>clearTimeout(n)},[e,t]),{navAnimation:e,setNavAnimation:t}},Y=(e,t,n)=>{d.useEffect(()=>{if(!n)return;const o=i=>{e!=null&&e.current&&!e.current.contains(i.target)&&document.body.contains(i.target)&&t()};return document.addEventListener("click",o),document.addEventListener("touchend",o),()=>{document.removeEventListener("click",o),document.removeEventListener("touchend",o)}},[e,t,n])},Z=(e,t)=>{d.useEffect(()=>{if(!t)return;const n=o=>{o.key==="Escape"&&e()};return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[e,t])},ee=e=>{const[t,n]=d.useState(0);return d.useLayoutEffect(()=>{e.current&&(e.current.scrollTop=t)}),n},z=(e,t,n)=>d.useCallback(o=>{o!==e&&n(o?"collapsing":"expanding"),t(o)},[e,n,t]),W=({sidebarNavRef:e,navHeader:t,navFooter:n,children:o,navIsCollapsed:i,setNavIsCollapsed:r,navAnimation:m,isMobile:l})=>{const c=d.useRef(null);d.useLayoutEffect(()=>{r(l)},[l]);const h=d.useCallback(()=>{r(!0)},[r]);Y(e,h,l&&!i),Z(h,l&&!i);const p={navIsCollapsed:i,setNavIsCollapsed:r,isMobile:l};d.useEffect(()=>{m==="idle"&&c.current.focus()},[m]);const x=d.useRef(null),I=ee(x);return u(_,{contain:l&&!i,children:[a(R,{"aria-expanded":!i,ref:c,"data-testid":"sidebarnav-toggle",className:w({collapsed:i}),onClick:g=>{r(!i),g.stopPropagation()},"aria-label":i?"Expand navigation":"Collapse navigation",children:i?a(U,{}):a(V,{})}),t?a(A,{children:typeof t=="function"?t(p):t}):null,a(L,{"data-testid":"nav-body",ref:x,onScroll:g=>I(g.target.scrollTop),children:typeof o=="function"?o(p):o}),n?a(M,{children:typeof n=="function"?n(p):n}):null]})},te=s(({className:e,id:t,ariaLabel:n,...o})=>{const{isMobile:i,navIsCollapsed:r,setNavIsCollapsed:m}=C(o),l=d.useRef(null),{navAnimation:c,setNavAnimation:h}=T(),p=z(r,m,h);return a("nav",{id:t,ref:l,"data-testid":"sidebarnav","aria-label":n,className:w(e,{collapsed:r,mobile:i,collapsing:c==="collapsing",expanding:c==="expanding"}),children:a(W,{...o,sidebarNavRef:l,navIsCollapsed:r,setNavIsCollapsed:p,isMobile:i,children:o.children})})})`
  ${E}
`,ae=s(({className:e,id:t,ariaLabel:n,...o})=>{const{isMobile:i,navIsCollapsed:r,setNavIsCollapsed:m}=C(o),l=d.useRef(typeof document<"u"?document.createElement("NAV"):null),{navAnimation:c,setNavAnimation:h}=T(),p=z(r,m,h);return a(k,{ref:l,id:t,tagName:"nav",slot:"sidebar","data-testid":"sidebarnav",ariaLabel:n,className:w(e,{collapsed:r,mobile:i,collapsing:c==="collapsing",expanding:c==="expanding"}),children:a(W,{...o,navIsCollapsed:r,setNavIsCollapsed:p,sidebarNavRef:l,navAnimation:c,isMobile:i})})})`
  ${E}
`,j={NavHeader:A,NavBody:L,NavFooter:M,ToggleButton:R,expandedWidth:P,collapsedWidth:y},ne=N`
  html, body, #ladle-root {
    margin: 0;
    padding: 0;
  }

  #ladle-root {
    height: 100vh;
  }
`,oe=N`
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
`,D=s.div`
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
`,G=b`
  overflow: auto;
  grid-area: nav;
  padding: 2rem;

  ul {
    list-style: none;
    padding: 0;
  }

  ${j.ToggleButton} {
    margin-top: 3.2rem;
  }
`,H=b`
  .mobile + & {
    margin-left: 5.6rem;
  }
`,ie=s(te)`
  ${G}
`,re=s(ae)`
  ${G}
`,de=s.main`
  ${H}
`,le=s(k)`
  ${H}
  padding: 4rem;
`,se=s.li`
  a {
    text-decoration: none;
    color: black;
    padding: 0.5rem 1rem;
    display: block;
    border-radius: 4px;

    ${e=>e.active&&b`
        background-color: #007bff;
        color: white;
      `}
  }
`,K=["Home","About","Services","Contact",...Array.from({length:50},(e,t)=>(t+1).toString())],Q=({items:e,setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})=>{const[i,r]=d.useState(null);return a("ul",{children:e.map((m,l)=>a(se,{active:i===m,children:a("a",{href:"#",onClick:c=>{c.preventDefault(),n?t(!1):(r(m),t(o))},children:m})},l))})},ce=()=>{const e=S(`(max-width: ${$.mobileNavBreak}em)`);return u(O,{children:[a(ne,{}),u(D,{children:[a(ie,{ariaLabel:"Main navigation",children:({setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})=>a(Q,{items:K,setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})}),a(de,{style:{padding:"4rem",marginLeft:e?j.collapsedWidth:""},children:u("h1",{children:["Main content",a("p",{children:a("a",{href:"#",children:"focusable element"})})]})})]})]})},me=s(q)`
  &:hover {
    svg path {
      fill: ${v.palette.lightBlue};
    }
  }
`,ue=()=>u(B.Provider,{value:["sidebar","nav","main"],children:[a(oe,{}),u(D,{children:[a(re,{ariaLabel:"Header navigation",navHeader:a(F,{alt:"logo"}),children:({setNavIsCollapsed:e,navIsCollapsed:t,isMobile:n})=>a(Q,{items:K,setNavIsCollapsed:e,navIsCollapsed:t,isMobile:n})}),u(J,{ariaLabel:"Main navigation",children:[a("h1",{children:"Title"}),a(me,{label:"Menu",children:u(X,{children:[a("button",{children:"Example button"}),a("button",{children:"Another button"})]})})]}),a(le,{tagName:"main",slot:"main",children:u("h1",{children:["Main content",a("p",{children:a("a",{href:"#",children:"focusable element"})}),a("p",{children:Date.now().toString()})]})})]})]}),Le=()=>a(B.Provider,{value:["sidebar","nav","main"],children:a(ue,{})}),Me=()=>a(ce,{});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Le as UsingBodyPortal,Me as WithoutBodyPortal};
