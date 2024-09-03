import{a as x}from"./hooks.f4b2ad58.js";import{a as t,C as b,s,R as l,c as y,j as f,W as L,F as I}from"./index.e7440c6d.js";import{c as k,z as g,b as K}from"./theme.8b40f719.js";import{B as $,a as B}from"./BodyPortal.10d7c671.js";import{b as O}from"./FocusScope.module.d63ac141.js";import{a as U,N as V}from"./NavBar.4b28359d.js";import"./contexts.a58a76eb.js";import"./utils.e3275d2c.js";import"./palette.15e4d008.js";import"./focusSafely.module.e29284d8.js";const _=e=>t("svg",{width:"8",height:"10",viewBox:"0 0 8 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:t("path",{d:"M1.1266 5.38862L5.57702 9.83902C5.79166 10.0537 6.13964 10.0537 6.35426 9.83902L6.87333 9.31995C7.0876 9.10568 7.08801 8.75841 6.87424 8.54363L3.34721 4.99999L6.87424 1.45637C7.08801 1.24159 7.0876 0.89432 6.87333 0.680047L6.35426 0.160979C6.13962 -0.0536598 5.79164 -0.0536598 5.57702 0.160979L1.12662 4.61138C0.911981 4.826 0.911981 5.17398 1.1266 5.38862Z",fill:"#959595"})}),H=e=>t("svg",{width:"8",height:"10",viewBox:"0 0 8 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:t("path",{d:"M6.87337 5.38862L2.42295 9.83902C2.20831 10.0537 1.86033 10.0537 1.64571 9.83902L1.12664 9.31995C0.912369 9.10568 0.911957 8.75841 1.12573 8.54363L4.65276 4.99999L1.12573 1.45637C0.911957 1.24159 0.912369 0.89432 1.12664 0.680047L1.64571 0.160979C1.86035 -0.0536598 2.20833 -0.0536598 2.42295 0.160979L6.87335 4.61138C7.08799 4.826 7.08799 5.17398 6.87337 5.38862Z",fill:"#959595"})}),w="5.6rem",A="24rem",E=b`
  --collapsed-width: ${w};
  --expanded-width: ${A};
  width: var(--expanded-width);
  transition: width 300ms ease-in-out;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  box-shadow: -0.2rem 0 0.4rem rgba(0, 0, 0, 0.1) inset;
  background: ${k.palette.neutralBright};
  color: ${k.palette.neutralThin};
  z-index: ${g.navbar-1};

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
    margin-left: ${w};
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
    z-index: ${g.navbar+1};
  }

  &.mobile:not(.collapsed),
  &.mobile.collapsing {
    z-index: ${g.sidebar};
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
      z-index: ${g.sidebar-1};
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
`,P=s.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`,M=s.div`
  height: 100%;
  overflow-y: auto;
`,C=s.footer`
  button {
    width: 100%;
  }
`,W=s.button`
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
`,z=({mobileBreakpoint:e=`${K.mobileBreak}em`,...a})=>{var d;const o=x(`(max-width: ${e})`),i=(d=a.isMobile)!=null?d:o,[n,r]=l.useState(i);return{isMobile:i,navIsCollapsed:n,setNavIsCollapsed:r}},T=()=>{const[e,a]=l.useState("");return l.useEffect(()=>{e&&e!=="idle"&&setTimeout(()=>a("idle"),300)},[e]),{navAnimation:e,setNavAnimation:a}},j=({sidebarNavRef:e,navHeader:a,navFooter:o,children:i,isMobile:n,navIsCollapsed:r,setNavIsCollapsed:d,navAnimation:c})=>{const p=l.useRef(null);l.useLayoutEffect(()=>{d(n)},[n]),l.useEffect(()=>{if(!n||r)return;const h=v=>{n&&!r&&(e==null?void 0:e.current)&&!(e!=null&&e.current.contains(v.target))&&d(!0)},N=v=>{n&&!r&&v.key==="Escape"&&d(!0)};return document.addEventListener("click",h),document.addEventListener("touchend",h),document.addEventListener("keydown",N),()=>{document.removeEventListener("click",h),document.removeEventListener("touchend",h),document.removeEventListener("keydown",N)}},[n,r,d,e]);const u={navIsCollapsed:r,setNavIsCollapsed:d};l.useEffect(()=>{var h;c==="idle"&&((h=p.current)==null||h.focus())},[c]);const m=l.useRef(null),[D,F]=l.useState(0);return requestAnimationFrame(()=>{m.current&&(m.current.scrollTop=D)}),f(O,{contain:n&&!r,children:[t(W,{"aria-expanded":!r,ref:p,"data-testid":"sidebarnav-toggle",className:y({collapsed:r}),onClick:()=>{d(!r)},"aria-label":r?"Expand navigation":"Collapse navigation",children:r?t(H,{}):t(_,{})}),a?t(P,{children:typeof a=="function"?a(u):a}):null,t(M,{ref:m,onScroll:h=>F(h.target.scrollTop),children:typeof i=="function"?i(u):i}),o?t(C,{children:typeof o=="function"?o(u):o}):null]})},J=s(({className:e,id:a,...o})=>{const{isMobile:i,navIsCollapsed:n,setNavIsCollapsed:r}=z(o),d=l.useRef(null),{navAnimation:c,setNavAnimation:p}=T(),u=m=>{m!==n&&p(m?"collapsing":"expanding"),r(m)};return t("nav",{id:a,ref:d,"data-testid":"sidebarnav",className:y(e,{collapsed:n,mobile:i,collapsing:c==="collapsing",expanding:c==="expanding"}),children:t(j,{...o,sidebarNavRef:d,isMobile:i,navIsCollapsed:n,setNavIsCollapsed:u,children:o.children})})})`
  ${E}
`,X=s(({className:e,id:a,...o})=>{const{isMobile:i,navIsCollapsed:n,setNavIsCollapsed:r}=z(o),d=l.useRef(document.createElement("NAV")),{navAnimation:c,setNavAnimation:p}=T(),u=m=>{m!==n&&p(m?"collapsing":"expanding"),r(m)};return t($,{id:a,externalRef:d,tagName:"nav",slot:"sidebar","data-testid":"sidebarnav",className:y(e,{collapsed:n,mobile:i,collapsing:c==="collapsing",expanding:c==="expanding"}),children:t(j,{...o,isMobile:i,navIsCollapsed:n,setNavIsCollapsed:u,sidebarNavRef:d,navAnimation:c})})})`
  ${E}
`,S={NavHeader:P,NavBody:M,NavFooter:C,ToggleButton:W,expandedWidth:A,collapsedWidth:w},Y=L`
  html, body, #ladle-root {
    margin: 0;
    padding: 0;
  }

  #ladle-root {
    height: 100vh;
  }
`,ee=L`
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
`,R=s.div`
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

  ${S.ToggleButton} {
    margin-top: 3.2rem;
  }
`,Q=b`
  .mobile + & {
    margin-left: 5.6rem;
  }
`,te=s(J)`
  ${G}
`,ne=s(X)`
  ${G}
`,ae=s.main`
  ${Q}
`,oe=s($)`
  ${Q}

  padding: 4rem;
  margin-left: ${e=>e.isMobile?S.collapsedWidth:""};
`,ie=s.li`
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
`,Z=["Home","About","Services","Contact",...Array.from({length:50},(e,a)=>(a+1).toString())],q=({items:e,activeItem:a,setActiveItem:o,setNavIsCollapsed:i,navIsCollapsed:n,isMobile:r})=>t("ul",{children:e.map((d,c)=>t(ie,{active:a===d,children:t("a",{href:"#",onClick:p=>{p.preventDefault(),n?i(!1):(o(d),i(r))},children:d})},c))}),re=()=>{const e=x("(max-width: 620px)"),[a,o]=l.useState(null);return f(I,{children:[t(Y,{}),f(R,{children:[t(te,{isMobile:e,children:({setNavIsCollapsed:i,navIsCollapsed:n})=>t(q,{items:Z,activeItem:a,setActiveItem:o,setNavIsCollapsed:i,navIsCollapsed:n,isMobile:e})}),t(ae,{style:{padding:"4rem",marginLeft:e?S.collapsedWidth:""},children:f("h1",{children:["Main content",t("p",{children:t("a",{href:"#",children:"focusable element"})})]})})]})]})},de=()=>{const e=x("(max-width: 620px)"),[a,o]=l.useState(null);return f(B.Provider,{value:["sidebar","nav","main"],children:[t(ee,{}),f(R,{children:[t(ne,{isMobile:e,navHeader:t(U,{alt:"logo"}),children:({setNavIsCollapsed:i,navIsCollapsed:n})=>t(q,{items:Z,activeItem:a,setActiveItem:o,setNavIsCollapsed:i,navIsCollapsed:n,isMobile:e})}),t(V,{children:t("h1",{children:"Title"})}),t(oe,{tagName:"main",slot:"main",isMobile:e,children:f("h1",{children:["Main content",t("p",{children:t("a",{href:"#",children:"focusable element"})})]})})]})]})},ve=()=>t(B.Provider,{value:["sidebar","nav","main"],children:t(de,{})}),we=()=>t(re,{});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{ve as UsingBodyPortal,we as WithoutBodyPortal};
