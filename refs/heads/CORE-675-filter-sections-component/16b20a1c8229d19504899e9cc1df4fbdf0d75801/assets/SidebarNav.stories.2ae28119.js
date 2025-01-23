import{a as N}from"./hooks.3a662d20.js";import{C as v,s as c,R as s,a as e,c as x,j as u,W as k,F as U}from"./index.1b9b4ac1.js";import{R as V,L as _}from"./RightArrow.d7f678eb.js";import{B,a as $}from"./BodyPortal.90a5d2e2.js";import{c as y,z as b,b as P}from"./theme.aa5cf5ba.js";import{c as H}from"./FocusScope.module.c0ac4f92.js";import{c as I,e as J,d as X,P as Y}from"./NavBarMenuButtons.2deb5162.js";import"./contexts.f3018e4b.js";import"./utils.e3275d2c.js";import"./palette.15e4d008.js";import"./context.module.bd5d5f40.js";import"./Dialog.module.99c5f256.js";import"./OverlayArrow.module.9e2e5740.js";import"./Hidden.module.c899cf57.js";import"./useButton.module.99fa2919.js";import"./Collection.module.293d0b1d.js";const w="5.6rem",A="24rem",E=v`
  --collapsed-width: ${w};
  --expanded-width: ${A};
  width: var(--expanded-width);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  box-shadow: -0.2rem 0 0.4rem rgba(0, 0, 0, 0.1) inset;
  background: ${y.palette.neutralBright};
  color: ${y.palette.neutralThin};
  z-index: ${b.navbar-1};

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
    z-index: ${b.navbar+1};
  }

  &.mobile:not(.collapsed),
  &.mobile.collapsing {
    z-index: ${b.sidebar};

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
      z-index: ${b.sidebar-1};
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
`,L=c.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`,M=c.div`
  height: 100%;
  overflow-y: auto;
`,T=c.footer`
  button {
    width: 100%;
  }
`,z=c.button`
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
`,R=({mobileBreakpoint:t=`${P.mobileNavBreak}em`,...n})=>{var d;const o=N(`(max-width: ${t})`),r=(d=n.isMobile)!=null?d:o,[a,l]=s.useState(r);return{isMobile:r,navIsCollapsed:a,setNavIsCollapsed:l}},W=()=>{const[t,n]=s.useState("");return s.useEffect(()=>{if(!t||t==="idle")return;const o=setTimeout(()=>n("idle"),300);return()=>clearTimeout(o)},[t,n]),{navAnimation:t,setNavAnimation:n}},j=({sidebarNavRef:t,navHeader:n,navFooter:o,children:r,navIsCollapsed:a,setNavIsCollapsed:l,navAnimation:d,isMobile:i})=>{const p=s.useRef(null);s.useLayoutEffect(()=>{l(i)},[i]),s.useEffect(()=>{if(!i||a)return;const h=g=>{i&&!a&&(t==null?void 0:t.current)&&!t.current.contains(g.target)&&document.body.contains(g.target)&&l(!0)},S=g=>{i&&!a&&g.key==="Escape"&&l(!0)};return document.addEventListener("click",h),document.addEventListener("touchend",h),document.addEventListener("keydown",S),()=>{document.removeEventListener("click",h),document.removeEventListener("touchend",h),document.removeEventListener("keydown",S)}},[i,a,l,t]);const f={navIsCollapsed:a,setNavIsCollapsed:l,isMobile:i};s.useEffect(()=>{d==="idle"&&p.current.focus()},[d]);const m=s.useRef(null),[K,O]=s.useState(0);return requestAnimationFrame(()=>{m.current&&(m.current.scrollTop=K)}),u(H,{contain:i&&!a,children:[e(z,{"aria-expanded":!a,ref:p,"data-testid":"sidebarnav-toggle",className:x({collapsed:a}),onClick:h=>{l(!a),h.stopPropagation()},"aria-label":a?"Expand navigation":"Collapse navigation",children:a?e(V,{}):e(_,{})}),n?e(L,{children:typeof n=="function"?n(f):n}):null,e(M,{"data-testid":"nav-body",ref:m,onScroll:h=>O(h.target.scrollTop),children:typeof r=="function"?r(f):r}),o?e(T,{children:typeof o=="function"?o(f):o}):null]})},Z=c(({className:t,id:n,...o})=>{const{isMobile:r,navIsCollapsed:a,setNavIsCollapsed:l}=R(o),d=s.useRef(null),{navAnimation:i,setNavAnimation:p}=W(),f=m=>{m!==a&&p(m?"collapsing":"expanding"),l(m)};return e("nav",{id:n,ref:d,"data-testid":"sidebarnav",className:x(t,{collapsed:a,mobile:r,collapsing:i==="collapsing",expanding:i==="expanding"}),children:e(j,{...o,sidebarNavRef:d,navIsCollapsed:a,setNavIsCollapsed:f,isMobile:r,children:o.children})})})`
  ${E}
`,ee=c(({className:t,id:n,...o})=>{const{isMobile:r,navIsCollapsed:a,setNavIsCollapsed:l}=R(o),d=s.useRef(document.createElement("NAV")),{navAnimation:i,setNavAnimation:p}=W(),f=m=>{m!==a&&p(m?"collapsing":"expanding"),l(m)};return e(B,{ref:d,id:n,tagName:"nav",slot:"sidebar","data-testid":"sidebarnav",className:x(t,{collapsed:a,mobile:r,collapsing:i==="collapsing",expanding:i==="expanding"}),children:e(j,{...o,navIsCollapsed:a,setNavIsCollapsed:f,sidebarNavRef:d,navAnimation:i,isMobile:r})})})`
  ${E}
`,C={NavHeader:L,NavBody:M,NavFooter:T,ToggleButton:z,expandedWidth:A,collapsedWidth:w},te=k`
  html, body, #ladle-root {
    margin: 0;
    padding: 0;
  }

  #ladle-root {
    height: 100vh;
  }
`,ne=k`
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
`,D=c.div`
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
`,G=v`
  overflow: auto;
  grid-area: nav;
  padding: 2rem;

  ul {
    list-style: none;
    padding: 0;
  }

  ${C.ToggleButton} {
    margin-top: 3.2rem;
  }
`,Q=v`
  .mobile + & {
    margin-left: 5.6rem;
  }
`,ae=c(Z)`
  ${G}
`,oe=c(ee)`
  ${G}
`,ie=c.main`
  ${Q}
`,re=c(B)`
  ${Q}
  padding: 4rem;
`,de=c.li`
  a {
    text-decoration: none;
    color: black;
    padding: 0.5rem 1rem;
    display: block;
    border-radius: 4px;

    ${t=>t.active&&v`
        background-color: #007bff;
        color: white;
      `}
  }
`,q=["Home","About","Services","Contact",...Array.from({length:50},(t,n)=>(n+1).toString())],F=({items:t,setNavIsCollapsed:n,navIsCollapsed:o,isMobile:r})=>{const[a,l]=s.useState(null);return e("ul",{children:t.map((d,i)=>e(de,{active:a===d,children:e("a",{href:"#",onClick:p=>{p.preventDefault(),o?n(!1):(l(d),n(r))},children:d})},i))})},le=()=>{const t=N(`(max-width: ${P.mobileNavBreak}em)`);return u(U,{children:[e(te,{}),u(D,{children:[e(ae,{children:({setNavIsCollapsed:n,navIsCollapsed:o,isMobile:r})=>e(F,{items:q,setNavIsCollapsed:n,navIsCollapsed:o,isMobile:r})}),e(ie,{style:{padding:"4rem",marginLeft:t?C.collapsedWidth:""},children:u("h1",{children:["Main content",e("p",{children:e("a",{href:"#",children:"focusable element"})})]})})]})]})},ce=c(I)`
  &:hover {
    svg path {
      fill: ${y.palette.lightBlue};
    }
  }
`,se=()=>u($.Provider,{value:["sidebar","nav","main"],children:[e(ne,{}),u(D,{children:[e(oe,{navHeader:e(J,{alt:"logo"}),children:({setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})=>e(F,{items:q,setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})}),u(X,{children:[e("h1",{children:"Title"}),e(ce,{label:"Menu",children:u(Y,{children:[e("button",{children:"Example button"}),e("button",{children:"Another button"})]})})]}),e(re,{tagName:"main",slot:"main",children:u("h1",{children:["Main content",e("p",{children:e("a",{href:"#",children:"focusable element"})}),e("p",{children:Date.now().toString()})]})})]})]}),Pe=()=>e($.Provider,{value:["sidebar","nav","main"],children:e(se,{})}),Ae=()=>e(le,{});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Pe as UsingBodyPortal,Ae as WithoutBodyPortal};
