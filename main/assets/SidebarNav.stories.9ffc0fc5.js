import{a as N}from"./hooks.1fc3dad3.js";import{a as e,C as b,s as c,R as s,c as y,j as p,W as k,F as O}from"./index.feb36096.js";import{B,a as L}from"./BodyPortal.56fa0eeb.js";import{c as S,z as g,b as $}from"./theme.4fe3a54d.js";import{b as U}from"./FocusScope.module.b7836826.js";import{a as V,N as _}from"./NavBar.4d42428a.js";import"./contexts.58a54766.js";import"./utils.e3275d2c.js";import"./palette.15e4d008.js";import"./focusSafely.module.9cd57ea1.js";const H=t=>e("svg",{width:"8",height:"10",viewBox:"0 0 8 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{d:"M1.1266 5.38862L5.57702 9.83902C5.79166 10.0537 6.13964 10.0537 6.35426 9.83902L6.87333 9.31995C7.0876 9.10568 7.08801 8.75841 6.87424 8.54363L3.34721 4.99999L6.87424 1.45637C7.08801 1.24159 7.0876 0.89432 6.87333 0.680047L6.35426 0.160979C6.13962 -0.0536598 5.79164 -0.0536598 5.57702 0.160979L1.12662 4.61138C0.911981 4.826 0.911981 5.17398 1.1266 5.38862Z",fill:"#959595"})}),J=t=>e("svg",{width:"8",height:"10",viewBox:"0 0 8 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{d:"M6.87337 5.38862L2.42295 9.83902C2.20831 10.0537 1.86033 10.0537 1.64571 9.83902L1.12664 9.31995C0.912369 9.10568 0.911957 8.75841 1.12573 8.54363L4.65276 4.99999L1.12573 1.45637C0.911957 1.24159 0.912369 0.89432 1.12664 0.680047L1.64571 0.160979C1.86035 -0.0536598 2.20833 -0.0536598 2.42295 0.160979L6.87335 4.61138C7.08799 4.826 7.08799 5.17398 6.87337 5.38862Z",fill:"#959595"})}),w="5.6rem",A="24rem",E=b`
  --collapsed-width: ${w};
  --expanded-width: ${A};
  width: var(--expanded-width);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  box-shadow: -0.2rem 0 0.4rem rgba(0, 0, 0, 0.1) inset;
  background: ${S.palette.neutralBright};
  color: ${S.palette.neutralThin};
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
`,P=c.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`,C=c.div`
  height: 100%;
  overflow-y: auto;
`,M=c.footer`
  button {
    width: 100%;
  }
`,T=c.button`
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
`,z=({mobileBreakpoint:t=`${$.mobileNavBreak}em`,...n})=>{var d;const o=N(`(max-width: ${t})`),r=(d=n.isMobile)!=null?d:o,[a,l]=s.useState(r);return{isMobile:r,navIsCollapsed:a,setNavIsCollapsed:l}},W=()=>{const[t,n]=s.useState("");return s.useEffect(()=>{if(!t||t==="idle")return;const o=setTimeout(()=>n("idle"),300);return()=>clearTimeout(o)},[t,n]),{navAnimation:t,setNavAnimation:n}},R=({sidebarNavRef:t,navHeader:n,navFooter:o,children:r,navIsCollapsed:a,setNavIsCollapsed:l,navAnimation:d,isMobile:i})=>{const h=s.useRef(null);s.useLayoutEffect(()=>{l(i)},[i]),s.useEffect(()=>{if(!i||a)return;const f=v=>{i&&!a&&(t==null?void 0:t.current)&&!t.current.contains(v.target)&&l(!0)},x=v=>{i&&!a&&v.key==="Escape"&&l(!0)};return document.addEventListener("click",f),document.addEventListener("touchend",f),document.addEventListener("keydown",x),()=>{document.removeEventListener("click",f),document.removeEventListener("touchend",f),document.removeEventListener("keydown",x)}},[i,a,l,t]);const u={navIsCollapsed:a,setNavIsCollapsed:l,isMobile:i};s.useEffect(()=>{d==="idle"&&h.current.focus()},[d]);const m=s.useRef(null),[F,K]=s.useState(0);return requestAnimationFrame(()=>{m.current&&(m.current.scrollTop=F)}),p(U,{contain:i&&!a,children:[e(T,{"aria-expanded":!a,ref:h,"data-testid":"sidebarnav-toggle",className:y({collapsed:a}),onClick:()=>{l(!a)},"aria-label":a?"Expand navigation":"Collapse navigation",children:a?e(J,{}):e(H,{})}),n?e(P,{children:typeof n=="function"?n(u):n}):null,e(C,{"data-testid":"nav-body",ref:m,onScroll:f=>K(f.target.scrollTop),children:typeof r=="function"?r(u):r}),o?e(M,{children:typeof o=="function"?o(u):o}):null]})},X=c(({className:t,id:n,...o})=>{const{isMobile:r,navIsCollapsed:a,setNavIsCollapsed:l}=z(o),d=s.useRef(null),{navAnimation:i,setNavAnimation:h}=W(),u=m=>{m!==a&&h(m?"collapsing":"expanding"),l(m)};return e("nav",{id:n,ref:d,"data-testid":"sidebarnav",className:y(t,{collapsed:a,mobile:r,collapsing:i==="collapsing",expanding:i==="expanding"}),children:e(R,{...o,sidebarNavRef:d,navIsCollapsed:a,setNavIsCollapsed:u,isMobile:r,children:o.children})})})`
  ${E}
`,Y=c(({className:t,id:n,...o})=>{const{isMobile:r,navIsCollapsed:a,setNavIsCollapsed:l}=z(o),d=s.useRef(document.createElement("NAV")),{navAnimation:i,setNavAnimation:h}=W(),u=m=>{m!==a&&h(m?"collapsing":"expanding"),l(m)};return e(B,{ref:d,id:n,tagName:"nav",slot:"sidebar","data-testid":"sidebarnav",className:y(t,{collapsed:a,mobile:r,collapsing:i==="collapsing",expanding:i==="expanding"}),children:e(R,{...o,navIsCollapsed:a,setNavIsCollapsed:u,sidebarNavRef:d,navAnimation:i,isMobile:r})})})`
  ${E}
`,j={NavHeader:P,NavBody:C,NavFooter:M,ToggleButton:T,expandedWidth:A,collapsedWidth:w},I=k`
  html, body, #ladle-root {
    margin: 0;
    padding: 0;
  }

  #ladle-root {
    height: 100vh;
  }
`,ee=k`
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
`,Q=b`
  .mobile + & {
    margin-left: 5.6rem;
  }
`,te=c(X)`
  ${G}
`,ne=c(Y)`
  ${G}
`,ae=c.main`
  ${Q}
`,oe=c(B)`
  ${Q}
  padding: 4rem;
`,ie=c.li`
  a {
    text-decoration: none;
    color: black;
    padding: 0.5rem 1rem;
    display: block;
    border-radius: 4px;

    ${t=>t.active&&b`
        background-color: #007bff;
        color: white;
      `}
  }
`,Z=["Home","About","Services","Contact",...Array.from({length:50},(t,n)=>(n+1).toString())],q=({items:t,setNavIsCollapsed:n,navIsCollapsed:o,isMobile:r})=>{const[a,l]=s.useState(null);return e("ul",{children:t.map((d,i)=>e(ie,{active:a===d,children:e("a",{href:"#",onClick:h=>{h.preventDefault(),o?n(!1):(l(d),n(r))},children:d})},i))})},re=()=>{const t=N(`(max-width: ${$.mobileNavBreak}em)`);return p(O,{children:[e(I,{}),p(D,{children:[e(te,{children:({setNavIsCollapsed:n,navIsCollapsed:o,isMobile:r})=>e(q,{items:Z,setNavIsCollapsed:n,navIsCollapsed:o,isMobile:r})}),e(ae,{style:{padding:"4rem",marginLeft:t?j.collapsedWidth:""},children:p("h1",{children:["Main content",e("p",{children:e("a",{href:"#",children:"focusable element"})})]})})]})]})},de=()=>p(L.Provider,{value:["sidebar","nav","main"],children:[e(ee,{}),p(D,{children:[e(ne,{navHeader:e(V,{alt:"logo"}),children:({setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})=>e(q,{items:Z,setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})}),e(_,{children:e("h1",{children:"Title"})}),e(oe,{tagName:"main",slot:"main",children:p("h1",{children:["Main content",e("p",{children:e("a",{href:"#",children:"focusable element"})}),e("p",{children:Date.now().toString()})]})})]})]}),ve=()=>e(L.Provider,{value:["sidebar","nav","main"],children:e(de,{})}),we=()=>e(re,{});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{ve as UsingBodyPortal,we as WithoutBodyPortal};
