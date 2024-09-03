import{a as w}from"./hooks.67f14972.js";import{a as t,C as f,s,R as m,c as x,j as g,W as k,F as I}from"./index.e82e894c.js";import{c as N,z as u,b as K}from"./theme.50138889.js";import{B as L,a as $}from"./BodyPortal.b0e18243.js";import{b as O}from"./FocusScope.module.b2c762ef.js";import{a as R,N as U}from"./NavBar.e1146cdd.js";import"./contexts.15c10c16.js";import"./utils.e3275d2c.js";import"./palette.15e4d008.js";import"./focusSafely.module.912049a4.js";const V=e=>t("svg",{width:"8",height:"10",viewBox:"0 0 8 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:t("path",{d:"M1.1266 5.38862L5.57702 9.83902C5.79166 10.0537 6.13964 10.0537 6.35426 9.83902L6.87333 9.31995C7.0876 9.10568 7.08801 8.75841 6.87424 8.54363L3.34721 4.99999L6.87424 1.45637C7.08801 1.24159 7.0876 0.89432 6.87333 0.680047L6.35426 0.160979C6.13962 -0.0536598 5.79164 -0.0536598 5.57702 0.160979L1.12662 4.61138C0.911981 4.826 0.911981 5.17398 1.1266 5.38862Z",fill:"#959595"})}),_=e=>t("svg",{width:"8",height:"10",viewBox:"0 0 8 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:t("path",{d:"M6.87337 5.38862L2.42295 9.83902C2.20831 10.0537 1.86033 10.0537 1.64571 9.83902L1.12664 9.31995C0.912369 9.10568 0.911957 8.75841 1.12573 8.54363L4.65276 4.99999L1.12573 1.45637C0.911957 1.24159 0.912369 0.89432 1.12664 0.680047L1.64571 0.160979C1.86035 -0.0536598 2.20833 -0.0536598 2.42295 0.160979L6.87335 4.61138C7.08799 4.826 7.08799 5.17398 6.87337 5.38862Z",fill:"#959595"})}),v="5.6rem",B="24rem",A=f`
  --collapsed-width: ${v};
  --expanded-width: ${B};
  width: var(--expanded-width);
  transition: width 300ms ease-in-out;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  box-shadow: -0.2rem 0 0.4rem rgba(0, 0, 0, 0.1) inset;
  background: ${N.palette.neutralBright};
  color: ${N.palette.neutralThin};
  z-index: ${u.navbar-1};

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
    margin-left: ${v};
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
    z-index: ${u.navbar+1};
  }

  &.mobile:not(.collapsed),
  &.mobile.collapsing {
    z-index: ${u.sidebar};
  }

  &.mobile:not(.collapsed),
  &.mobile.collapsing {
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
      z-index: ${u.sidebar-1};
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
`,E=s.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`,P=s.div`
  height: 100%;
  overflow-y: auto;
`,M=s.footer`
  button {
    width: 100%;
  }
`,C=s.button`
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
`,W=({mobileBreakpoint:e=`${K.mobileBreak}em`,...a})=>{var d;const i=w(`(max-width: ${e})`),o=(d=a.isMobile)!=null?d:i,[n,r]=m.useState(o);return{isMobile:o,navIsCollapsed:n,setNavIsCollapsed:r}},z=()=>{const[e,a]=m.useState("");return m.useEffect(()=>{e&&e!=="idle"&&setTimeout(()=>a("idle"),300)},[e]),{navAnimation:e,setNavAnimation:a}},T=({sidebarNavRef:e,navHeader:a,navFooter:i,children:o,isMobile:n,navIsCollapsed:r,setNavIsCollapsed:d,navAnimation:c})=>{const h=m.useRef(null);m.useLayoutEffect(()=>{d(n)},[n]),m.useEffect(()=>{if(!n||r)return;const l=b=>{n&&!r&&(e==null?void 0:e.current)&&!(e!=null&&e.current.contains(b.target))&&d(!0)},S=b=>{n&&!r&&b.key==="Escape"&&d(!0)};return document.addEventListener("click",l),document.addEventListener("touchend",l),document.addEventListener("keydown",S),()=>{document.removeEventListener("click",l),document.removeEventListener("touchend",l),document.removeEventListener("keydown",S)}},[n,r,d,e]);const p={navIsCollapsed:r,setNavIsCollapsed:d};return m.useEffect(()=>{var l;c==="idle"&&((l=h.current)==null||l.focus())},[c]),g(O,{contain:n&&!r,children:[t(C,{"aria-expanded":!r,ref:h,"data-testid":"sidebarnav-toggle",className:x({collapsed:r}),onClick:()=>{d(!r)},"aria-label":r?"Expand navigation":"Collapse navigation",children:r?t(_,{}):t(V,{})}),a?t(E,{children:typeof a=="function"?a(p):a}):null,t(P,{children:typeof o=="function"?o(p):o}),i?t(M,{children:typeof i=="function"?i(p):i}):null]})},q=s(({className:e,id:a,...i})=>{const{isMobile:o,navIsCollapsed:n,setNavIsCollapsed:r}=W(i),d=m.useRef(null),{navAnimation:c,setNavAnimation:h}=z(),p=l=>{l!==n&&h(l?"collapsing":"expanding"),r(l)};return t("nav",{id:a,ref:d,"data-testid":"sidebarnav",className:x(e,{collapsed:n,mobile:o,collapsing:c==="collapsing",expanding:c==="expanding"}),children:t(T,{...i,sidebarNavRef:d,isMobile:o,navIsCollapsed:n,setNavIsCollapsed:p,children:i.children})})})`
  ${A}
`,F=s(({className:e,id:a,...i})=>{const{isMobile:o,navIsCollapsed:n,setNavIsCollapsed:r}=W(i),d=m.useRef(document.createElement("NAV")),{navAnimation:c,setNavAnimation:h}=z(),p=l=>{l!==n&&h(l?"collapsing":"expanding"),r(l)};return t(L,{id:a,externalRef:d,tagName:"nav",slot:"sidebar","data-testid":"sidebarnav",className:x(e,{collapsed:n,mobile:o,collapsing:c==="collapsing",expanding:c==="expanding"}),children:t(T,{...i,isMobile:o,navIsCollapsed:n,setNavIsCollapsed:p,sidebarNavRef:d,navAnimation:c})})})`
  ${A}
`,y={NavHeader:E,NavBody:P,NavFooter:M,ToggleButton:C,expandedWidth:B,collapsedWidth:v},H=k`
  html, body, #ladle-root {
    margin: 0;
    padding: 0;
  }

  #ladle-root {
    height: 100vh;
  }
`,J=k`
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

  .ladle-background, #ladle-root {
    display: none;
  }
`,j=s.div`
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
`,G=f`
  overflow: auto;
  grid-area: nav;
  padding: 2rem;

  ul {
    list-style: none;
    padding: 0;
  }

  ${y.ToggleButton} {
    margin-top: 3.2rem;
  }
`,Q=f`
  .mobile + & {
    margin-left: 5.6rem;
  }
`,X=s(q)`
  ${G}
`,Y=s(F)`
  ${G}
`,ee=s.main`
  ${Q}
`,te=s(L)`
  ${Q}

  padding: 4rem;
  margin-left: ${e=>e.isMobile?y.collapsedWidth:""};
`,ne=s.li`
  a {
    text-decoration: none;
    color: black;
    padding: 0.5rem 1rem;
    display: block;
    border-radius: 4px;

    ${e=>e.active&&f`
        background-color: #007bff;
        color: white;
      `}
  }
`,Z=["Home","About","Services","Contact",...Array.from({length:50},(e,a)=>(a+1).toString())],D=({items:e,activeItem:a,setActiveItem:i,setNavIsCollapsed:o,navIsCollapsed:n,isMobile:r})=>t("ul",{children:e.map((d,c)=>t(ne,{active:a===d,children:t("a",{href:"#",onClick:h=>{h.preventDefault(),n?o(!1):(i(d),o(r))},children:d})},c))}),ae=()=>{const e=w("(max-width: 620px)"),[a,i]=m.useState(null);return g(I,{children:[t(H,{}),g(j,{children:[t(X,{isMobile:e,children:({setNavIsCollapsed:o,navIsCollapsed:n})=>t(D,{items:Z,activeItem:a,setActiveItem:i,setNavIsCollapsed:o,navIsCollapsed:n,isMobile:e})}),t(ee,{style:{padding:"4rem",marginLeft:e?y.collapsedWidth:""},children:g("h1",{children:["Main content",t("p",{children:t("a",{href:"#",children:"focusable element"})})]})})]})]})},ie=()=>{const e=w("(max-width: 620px)"),[a,i]=m.useState(null);return g($.Provider,{value:["sidebar","nav","main"],children:[t(J,{}),g(j,{children:[t(Y,{isMobile:e,navHeader:t(R,{alt:"logo"}),children:({setNavIsCollapsed:o,navIsCollapsed:n})=>t(D,{items:Z,activeItem:a,setActiveItem:i,setNavIsCollapsed:o,navIsCollapsed:n,isMobile:e})}),t(U,{children:t("h1",{children:"Title"})}),t(te,{tagName:"main",slot:"main",isMobile:e,children:g("h1",{children:["Main content",t("p",{children:t("a",{href:"#",children:"focusable element"})})]})})]})]})},ue=()=>t($.Provider,{value:["sidebar","nav","main"],children:t(ie,{})}),fe=()=>t(ae,{});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{ue as UsingBodyPortal,fe as WithoutBodyPortal};
