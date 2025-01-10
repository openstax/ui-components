import{a as N}from"./hooks.dedd9647.js";import{a as e,C as v,s as c,R as s,c as x,j as h,W as B,F as O}from"./index.954e3bd6.js";import{B as k,a as $}from"./BodyPortal.24dae221.js";import{c as w,z as b,b as L}from"./theme.02a10726.js";import{c as U}from"./FocusScope.module.0d569a27.js";import{c as V,e as _,d as H,P as I}from"./NavBarMenuButtons.82746ba5.js";import"./contexts.c54b1cf4.js";import"./utils.e3275d2c.js";import"./palette.15e4d008.js";import"./context.module.bdacad02.js";import"./Dialog.module.68250b15.js";import"./OverlayArrow.module.de701aa5.js";import"./Menu.module.fb5ac4a0.js";import"./SelectionManager.module.2d33d993.js";import"./useFocusRing.module.393c9424.js";import"./Button.module.7f8455ba.js";const J=t=>e("svg",{width:"8",height:"10",viewBox:"0 0 8 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{d:"M1.1266 5.38862L5.57702 9.83902C5.79166 10.0537 6.13964 10.0537 6.35426 9.83902L6.87333 9.31995C7.0876 9.10568 7.08801 8.75841 6.87424 8.54363L3.34721 4.99999L6.87424 1.45637C7.08801 1.24159 7.0876 0.89432 6.87333 0.680047L6.35426 0.160979C6.13962 -0.0536598 5.79164 -0.0536598 5.57702 0.160979L1.12662 4.61138C0.911981 4.826 0.911981 5.17398 1.1266 5.38862Z",fill:"#959595"})}),X=t=>e("svg",{width:"8",height:"10",viewBox:"0 0 8 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{d:"M6.87337 5.38862L2.42295 9.83902C2.20831 10.0537 1.86033 10.0537 1.64571 9.83902L1.12664 9.31995C0.912369 9.10568 0.911957 8.75841 1.12573 8.54363L4.65276 4.99999L1.12573 1.45637C0.911957 1.24159 0.912369 0.89432 1.12664 0.680047L1.64571 0.160979C1.86035 -0.0536598 2.20833 -0.0536598 2.42295 0.160979L6.87335 4.61138C7.08799 4.826 7.08799 5.17398 6.87337 5.38862Z",fill:"#959595"})}),y="5.6rem",P="24rem",A=v`
  --collapsed-width: ${y};
  --expanded-width: ${P};
  width: var(--expanded-width);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  box-shadow: -0.2rem 0 0.4rem rgba(0, 0, 0, 0.1) inset;
  background: ${w.palette.neutralBright};
  color: ${w.palette.neutralThin};
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
`,E=c.header`
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
`,z=({mobileBreakpoint:t=`${L.mobileNavBreak}em`,...n})=>{var d;const o=N(`(max-width: ${t})`),r=(d=n.isMobile)!=null?d:o,[a,l]=s.useState(r);return{isMobile:r,navIsCollapsed:a,setNavIsCollapsed:l}},W=()=>{const[t,n]=s.useState("");return s.useEffect(()=>{if(!t||t==="idle")return;const o=setTimeout(()=>n("idle"),300);return()=>clearTimeout(o)},[t,n]),{navAnimation:t,setNavAnimation:n}},R=({sidebarNavRef:t,navHeader:n,navFooter:o,children:r,navIsCollapsed:a,setNavIsCollapsed:l,navAnimation:d,isMobile:i})=>{const p=s.useRef(null);s.useLayoutEffect(()=>{l(i)},[i]),s.useEffect(()=>{if(!i||a)return;const u=g=>{i&&!a&&(t==null?void 0:t.current)&&!t.current.contains(g.target)&&document.body.contains(g.target)&&l(!0)},S=g=>{i&&!a&&g.key==="Escape"&&l(!0)};return document.addEventListener("click",u),document.addEventListener("touchend",u),document.addEventListener("keydown",S),()=>{document.removeEventListener("click",u),document.removeEventListener("touchend",u),document.removeEventListener("keydown",S)}},[i,a,l,t]);const f={navIsCollapsed:a,setNavIsCollapsed:l,isMobile:i};s.useEffect(()=>{d==="idle"&&p.current.focus()},[d]);const m=s.useRef(null),[F,K]=s.useState(0);return requestAnimationFrame(()=>{m.current&&(m.current.scrollTop=F)}),h(U,{contain:i&&!a,children:[e(T,{"aria-expanded":!a,ref:p,"data-testid":"sidebarnav-toggle",className:x({collapsed:a}),onClick:u=>{l(!a),u.stopPropagation()},"aria-label":a?"Expand navigation":"Collapse navigation",children:a?e(X,{}):e(J,{})}),n?e(E,{children:typeof n=="function"?n(f):n}):null,e(C,{"data-testid":"nav-body",ref:m,onScroll:u=>K(u.target.scrollTop),children:typeof r=="function"?r(f):r}),o?e(M,{children:typeof o=="function"?o(f):o}):null]})},Y=c(({className:t,id:n,...o})=>{const{isMobile:r,navIsCollapsed:a,setNavIsCollapsed:l}=z(o),d=s.useRef(null),{navAnimation:i,setNavAnimation:p}=W(),f=m=>{m!==a&&p(m?"collapsing":"expanding"),l(m)};return e("nav",{id:n,ref:d,"data-testid":"sidebarnav",className:x(t,{collapsed:a,mobile:r,collapsing:i==="collapsing",expanding:i==="expanding"}),children:e(R,{...o,sidebarNavRef:d,navIsCollapsed:a,setNavIsCollapsed:f,isMobile:r,children:o.children})})})`
  ${A}
`,ee=c(({className:t,id:n,...o})=>{const{isMobile:r,navIsCollapsed:a,setNavIsCollapsed:l}=z(o),d=s.useRef(document.createElement("NAV")),{navAnimation:i,setNavAnimation:p}=W(),f=m=>{m!==a&&p(m?"collapsing":"expanding"),l(m)};return e(k,{ref:d,id:n,tagName:"nav",slot:"sidebar","data-testid":"sidebarnav",className:x(t,{collapsed:a,mobile:r,collapsing:i==="collapsing",expanding:i==="expanding"}),children:e(R,{...o,navIsCollapsed:a,setNavIsCollapsed:f,sidebarNavRef:d,navAnimation:i,isMobile:r})})})`
  ${A}
`,j={NavHeader:E,NavBody:C,NavFooter:M,ToggleButton:T,expandedWidth:P,collapsedWidth:y},te=B`
  html, body, #ladle-root {
    margin: 0;
    padding: 0;
  }

  #ladle-root {
    height: 100vh;
  }
`,ne=B`
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

  ${j.ToggleButton} {
    margin-top: 3.2rem;
  }
`,Q=v`
  .mobile + & {
    margin-left: 5.6rem;
  }
`,ae=c(Y)`
  ${G}
`,oe=c(ee)`
  ${G}
`,ie=c.main`
  ${Q}
`,re=c(k)`
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
`,Z=["Home","About","Services","Contact",...Array.from({length:50},(t,n)=>(n+1).toString())],q=({items:t,setNavIsCollapsed:n,navIsCollapsed:o,isMobile:r})=>{const[a,l]=s.useState(null);return e("ul",{children:t.map((d,i)=>e(de,{active:a===d,children:e("a",{href:"#",onClick:p=>{p.preventDefault(),o?n(!1):(l(d),n(r))},children:d})},i))})},le=()=>{const t=N(`(max-width: ${L.mobileNavBreak}em)`);return h(O,{children:[e(te,{}),h(D,{children:[e(ae,{children:({setNavIsCollapsed:n,navIsCollapsed:o,isMobile:r})=>e(q,{items:Z,setNavIsCollapsed:n,navIsCollapsed:o,isMobile:r})}),e(ie,{style:{padding:"4rem",marginLeft:t?j.collapsedWidth:""},children:h("h1",{children:["Main content",e("p",{children:e("a",{href:"#",children:"focusable element"})})]})})]})]})},ce=c(V)`
  &:hover {
    svg path {
      fill: ${w.palette.lightBlue};
    }
  }
`,se=()=>h($.Provider,{value:["sidebar","nav","main"],children:[e(ne,{}),h(D,{children:[e(oe,{navHeader:e(_,{alt:"logo"}),children:({setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})=>e(q,{items:Z,setNavIsCollapsed:t,navIsCollapsed:n,isMobile:o})}),h(H,{children:[e("h1",{children:"Title"}),e(ce,{label:"Menu",children:h(I,{children:[e("button",{children:"Example button"}),e("button",{children:"Another button"})]})})]}),e(re,{tagName:"main",slot:"main",children:h("h1",{children:["Main content",e("p",{children:e("a",{href:"#",children:"focusable element"})}),e("p",{children:Date.now().toString()})]})})]})]}),Le=()=>e($.Provider,{value:["sidebar","nav","main"],children:e(se,{})}),Pe=()=>e(le,{});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Le as UsingBodyPortal,Pe as WithoutBodyPortal};
