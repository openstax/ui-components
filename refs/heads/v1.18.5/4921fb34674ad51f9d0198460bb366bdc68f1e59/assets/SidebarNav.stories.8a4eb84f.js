import{a as B}from"./hooks.820dc169.js";import{C as y,s as c,R as s,a as e,c as S,j as p,W as k,F as O}from"./index.837c2439.js";import{R as U,L as V}from"./RightArrow.b312aca5.js";import{B as $,a as P}from"./BodyPortal.f0376a19.js";import{c as w,z as v,b as A}from"./theme.108e3497.js";import{o as _}from"./Collection.module.3a8cbc2d.js";import{d as I,e as J,b as X,P as Y}from"./NavBar.8d60b0a8.js";import"./contexts.36d405d0.js";import"./utils.e3275d2c.js";import"./palette.15e4d008.js";import"./useFocusRing.module.fe4029c6.js";import"./context.module.45618bf3.js";import"./Dialog.module.412840eb.js";import"./Button.module.fa3751f3.js";import"./useButton.module.e3251c36.js";import"./VisuallyHidden.module.ea4e9610.js";import"./OverlayArrow.module.d5859410.js";import"./useTreeState.module.f467b2e3.js";const x="5.6rem",E="24rem",L=y`
  --collapsed-width: ${x};
  --expanded-width: ${E};
  width: var(--expanded-width);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  box-shadow: -0.2rem 0 0.4rem rgba(0, 0, 0, 0.1) inset;
  background: ${w.palette.neutralBright};
  color: ${w.palette.neutralThin};
  z-index: ${v.navbar-1};

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
    margin-left: ${x};
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
    z-index: ${v.navbar+1};
  }

  &.mobile:not(.collapsed),
  &.mobile.collapsing {
    z-index: ${v.sidebar};

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
      z-index: ${v.sidebar-1};
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
`,M=c.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`,T=c.div`
  height: 100%;
  overflow-y: auto;
`,z=c.footer`
  button {
    width: 100%;
  }
`,R=c.button`
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
`,W=({mobileBreakpoint:t=`${A.mobileNavBreak}em`,...a})=>{var l;const o=B(`(max-width: ${t})`),r=(l=a.isMobile)!=null?l:o,[n,i]=s.useState(r);return{isMobile:r,navIsCollapsed:n,setNavIsCollapsed:i}},j=()=>{const[t,a]=s.useState("");return s.useEffect(()=>{if(!t||t==="idle")return;const o=setTimeout(()=>a("idle"),300);return()=>clearTimeout(o)},[t,a]),{navAnimation:t,setNavAnimation:a}},C=({sidebarNavRef:t,navHeader:a,navFooter:o,children:r,navIsCollapsed:n,setNavIsCollapsed:i,navAnimation:l,isMobile:d})=>{const m=s.useRef(null);s.useLayoutEffect(()=>{i(d)},[d]),s.useEffect(()=>{if(!d||n)return;const h=g=>{d&&!n&&(t==null?void 0:t.current)&&!t.current.contains(g.target)&&document.body.contains(g.target)&&i(!0)},N=g=>{d&&!n&&g.key==="Escape"&&i(!0)};return document.addEventListener("click",h),document.addEventListener("touchend",h),document.addEventListener("keydown",N),()=>{document.removeEventListener("click",h),document.removeEventListener("touchend",h),document.removeEventListener("keydown",N)}},[d,n,i,t]);const f={navIsCollapsed:n,setNavIsCollapsed:i,isMobile:d};s.useEffect(()=>{l==="idle"&&m.current.focus()},[l]);const b=s.useRef(null),[u,K]=s.useState(0);return requestAnimationFrame(()=>{b.current&&(b.current.scrollTop=u)}),p(_,{contain:d&&!n,children:[e(R,{"aria-expanded":!n,ref:m,"data-testid":"sidebarnav-toggle",className:S({collapsed:n}),onClick:h=>{i(!n),h.stopPropagation()},"aria-label":n?"Expand navigation":"Collapse navigation",children:n?e(U,{}):e(V,{})}),a?e(M,{children:typeof a=="function"?a(f):a}):null,e(T,{"data-testid":"nav-body",ref:b,onScroll:h=>K(h.target.scrollTop),children:typeof r=="function"?r(f):r}),o?e(z,{children:typeof o=="function"?o(f):o}):null]})},Z=c(({className:t,id:a,ariaLabel:o,...r})=>{const{isMobile:n,navIsCollapsed:i,setNavIsCollapsed:l}=W(r),d=s.useRef(null),{navAnimation:m,setNavAnimation:f}=j(),b=u=>{u!==i&&f(u?"collapsing":"expanding"),l(u)};return e("nav",{id:a,ref:d,"data-testid":"sidebarnav","aria-label":o,className:S(t,{collapsed:i,mobile:n,collapsing:m==="collapsing",expanding:m==="expanding"}),children:e(C,{...r,sidebarNavRef:d,navIsCollapsed:i,setNavIsCollapsed:b,isMobile:n,children:r.children})})})`
  ${L}
`,ee=c(({className:t,id:a,ariaLabel:o,...r})=>{const{isMobile:n,navIsCollapsed:i,setNavIsCollapsed:l}=W(r),d=s.useRef(document.createElement("NAV")),{navAnimation:m,setNavAnimation:f}=j(),b=u=>{u!==i&&f(u?"collapsing":"expanding"),l(u)};return e($,{ref:d,id:a,tagName:"nav",slot:"sidebar","data-testid":"sidebarnav",ariaLabel:o,className:S(t,{collapsed:i,mobile:n,collapsing:m==="collapsing",expanding:m==="expanding"}),children:e(C,{...r,navIsCollapsed:i,setNavIsCollapsed:b,sidebarNavRef:d,navAnimation:m,isMobile:n})})})`
  ${L}
`,D={NavHeader:M,NavBody:T,NavFooter:z,ToggleButton:R,expandedWidth:E,collapsedWidth:x},te=k`
  html, body, #ladle-root {
    margin: 0;
    padding: 0;
  }

  #ladle-root {
    height: 100vh;
  }
`,ae=k`
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
`,G=c.div`
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
`,Q=y`
  overflow: auto;
  grid-area: nav;
  padding: 2rem;

  ul {
    list-style: none;
    padding: 0;
  }

  ${D.ToggleButton} {
    margin-top: 3.2rem;
  }
`,q=y`
  .mobile + & {
    margin-left: 5.6rem;
  }
`,ne=c(Z)`
  ${Q}
`,oe=c(ee)`
  ${Q}
`,ie=c.main`
  ${q}
`,re=c($)`
  ${q}
  padding: 4rem;
`,de=c.li`
  a {
    text-decoration: none;
    color: black;
    padding: 0.5rem 1rem;
    display: block;
    border-radius: 4px;

    ${t=>t.active&&y`
        background-color: #007bff;
        color: white;
      `}
  }
`,F=["Home","About","Services","Contact",...Array.from({length:50},(t,a)=>(a+1).toString())],H=({items:t,setNavIsCollapsed:a,navIsCollapsed:o,isMobile:r})=>{const[n,i]=s.useState(null);return e("ul",{children:t.map((l,d)=>e(de,{active:n===l,children:e("a",{href:"#",onClick:m=>{m.preventDefault(),o?a(!1):(i(l),a(r))},children:l})},d))})},le=()=>{const t=B(`(max-width: ${A.mobileNavBreak}em)`);return p(O,{children:[e(te,{}),p(G,{children:[e(ne,{ariaLabel:"Main navigation",children:({setNavIsCollapsed:a,navIsCollapsed:o,isMobile:r})=>e(H,{items:F,setNavIsCollapsed:a,navIsCollapsed:o,isMobile:r})}),e(ie,{style:{padding:"4rem",marginLeft:t?D.collapsedWidth:""},children:p("h1",{children:["Main content",e("p",{children:e("a",{href:"#",children:"focusable element"})})]})})]})]})},ce=c(I)`
  &:hover {
    svg path {
      fill: ${w.palette.lightBlue};
    }
  }
`,se=()=>p(P.Provider,{value:["sidebar","nav","main"],children:[e(ae,{}),p(G,{children:[e(oe,{ariaLabel:"Header navigation",navHeader:e(J,{alt:"logo"}),children:({setNavIsCollapsed:t,navIsCollapsed:a,isMobile:o})=>e(H,{items:F,setNavIsCollapsed:t,navIsCollapsed:a,isMobile:o})}),p(X,{ariaLabel:"Main navigation",children:[e("h1",{children:"Title"}),e(ce,{label:"Menu",children:p(Y,{children:[e("button",{children:"Example button"}),e("button",{children:"Another button"})]})})]}),e(re,{tagName:"main",slot:"main",children:p("h1",{children:["Main content",e("p",{children:e("a",{href:"#",children:"focusable element"})}),e("p",{children:Date.now().toString()})]})})]})]}),Ee=()=>e(P.Provider,{value:["sidebar","nav","main"],children:e(se,{})}),Le=()=>e(le,{});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Ee as UsingBodyPortal,Le as WithoutBodyPortal};
