import{a as w}from"./hooks.ccd7b218.js";import{a as e,C as g,s as l,R as c,c as x,j as h,W as L,F as Z}from"./index.b1c0c990.js";import{c as S,z as f,b as D}from"./theme.d4b7cbef.js";import{B as $,a as k}from"./BodyPortal.61b50265.js";import{b as K}from"./FocusScope.module.845c4e81.js";import{a as O,N as R}from"./NavBar.41d24fdb.js";import"./contexts.6dbaed3a.js";import"./utils.e3275d2c.js";import"./palette.15e4d008.js";import"./focusSafely.module.928e7deb.js";const U=t=>e("svg",{width:"8",height:"10",viewBox:"0 0 8 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{d:"M1.1266 5.38862L5.57702 9.83902C5.79166 10.0537 6.13964 10.0537 6.35426 9.83902L6.87333 9.31995C7.0876 9.10568 7.08801 8.75841 6.87424 8.54363L3.34721 4.99999L6.87424 1.45637C7.08801 1.24159 7.0876 0.89432 6.87333 0.680047L6.35426 0.160979C6.13962 -0.0536598 5.79164 -0.0536598 5.57702 0.160979L1.12662 4.61138C0.911981 4.826 0.911981 5.17398 1.1266 5.38862Z",fill:"#959595"})}),V=t=>e("svg",{width:"8",height:"10",viewBox:"0 0 8 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{d:"M6.87337 5.38862L2.42295 9.83902C2.20831 10.0537 1.86033 10.0537 1.64571 9.83902L1.12664 9.31995C0.912369 9.10568 0.911957 8.75841 1.12573 8.54363L4.65276 4.99999L1.12573 1.45637C0.911957 1.24159 0.912369 0.89432 1.12664 0.680047L1.64571 0.160979C1.86035 -0.0536598 2.20833 -0.0536598 2.42295 0.160979L6.87335 4.61138C7.08799 4.826 7.08799 5.17398 6.87337 5.38862Z",fill:"#959595"})}),v="5.6rem",B="24rem",N=g`
  --collapsed-width: ${v};
  --expanded-width: ${B};
  width: var(--expanded-width);
  transition: width 300ms ease-in-out;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  box-shadow: -0.2rem 0 0.4rem rgba(0, 0, 0, 0.1) inset;
  background: ${S.palette.neutralBright};
  color: ${S.palette.neutralThin};
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
    z-index: ${f.navbar+1};
  }

  &.mobile:not(.collapsed) {
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
`,E=l.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`,A=l.div`
  height: 100%;
  overflow-y: auto;
`,P=l.footer`
  button {
    width: 100%;
  }
`,M=l.button`
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
`,C=({mobileBreakpoint:t=`${D.mobileBreak}em`,...d})=>{var r;const a=w(`(max-width: ${t})`),i=(r=d.isMobile)!=null?r:a,[n,o]=c.useState(i);return{isMobile:i,navIsCollapsed:n,setNavIsCollapsed:o}},W=({sidebarNavRef:t,navHeader:d,navFooter:a,children:i,isMobile:n,navIsCollapsed:o,setNavIsCollapsed:r})=>{const s=c.useRef(null);c.useLayoutEffect(()=>{r(n)},[n]),c.useEffect(()=>{if(!n||o)return;const u=b=>{n&&!o&&(t==null?void 0:t.current)&&!(t!=null&&t.current.contains(b.target))&&r(!0)},p=b=>{n&&!o&&b.key==="Escape"&&r(!0)};return document.addEventListener("click",u),document.addEventListener("touchend",u),document.addEventListener("keydown",p),()=>{document.removeEventListener("click",u),document.removeEventListener("touchend",u),document.removeEventListener("keydown",p)}},[n,o,r,t]);const m={navIsCollapsed:o,setNavIsCollapsed:r};return h(K,{contain:n&&!o,children:[e(M,{"aria-expanded":!o,ref:s,"data-testid":"sidebarnav-toggle",className:x({collapsed:o}),onClick:()=>r(!o),"aria-label":o?"Expand navigation":"Collapse navigation",children:o?e(V,{}):e(U,{})}),d?e(E,{children:typeof d=="function"?d(m):d}):null,e(A,{children:typeof i=="function"?i(m):i}),a?e(P,{children:typeof a=="function"?a(m):a}):null]})},_=l(({className:t,id:d,...a})=>{const{isMobile:i,navIsCollapsed:n,setNavIsCollapsed:o}=C(a),r=c.useRef(null);return e("nav",{id:d,ref:r,"data-testid":"sidebarnav",className:x(t,{collapsed:n,mobile:i}),children:e(W,{...a,sidebarNavRef:r,isMobile:i,navIsCollapsed:n,setNavIsCollapsed:o,children:a.children})})})`
  ${N}
`,q=l(({className:t,id:d,...a})=>{const{isMobile:i,navIsCollapsed:n,setNavIsCollapsed:o}=C(a),r=c.useRef(document.createElement("NAV")),[s,m]=c.useState("idle"),u=p=>{p!==n&&m(p?"collapsing":"expanding"),o(p)};return c.useEffect(()=>{s!=="idle"&&setTimeout(()=>m("idle"),300)},[s]),e($,{id:d,externalRef:r,tagName:"nav",slot:"sidebar","data-testid":"sidebarnav",className:x(t,{collapsed:n,mobile:i,collapsing:s==="collapsing",expanding:s==="expanding"}),children:e(W,{...a,isMobile:i,navIsCollapsed:n,setNavIsCollapsed:u,sidebarNavRef:r})})})`
  ${N}
`,y={NavHeader:E,NavBody:A,NavFooter:P,ToggleButton:M,expandedWidth:B,collapsedWidth:v},F=L`
  html, body, #ladle-root {
    margin: 0;
    padding: 0;
  }

  #ladle-root {
    height: 100vh;
  }
`,H=L`
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
`,z=l.div`
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
`,T=g`
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
`,j=g`
  .mobile + & {
    margin-left: 5.6rem;
  }
`,J=l(_)`
  ${T}
`,X=l(q)`
  ${T}
`,Y=l.main`
  ${j}
`,I=l($)`
  ${j}

  padding: 4rem;
  margin-left: ${t=>t.isMobile?y.collapsedWidth:""};
`,ee=l.li`
  a {
    text-decoration: none;
    color: black;
    padding: 0.5rem 1rem;
    display: block;
    border-radius: 4px;

    ${t=>t.active&&g`
        background-color: #007bff;
        color: white;
      `}
  }
`,G=["Home","About","Services","Contact",...Array.from({length:50},(t,d)=>(d+1).toString())],Q=({items:t,activeItem:d,setActiveItem:a,setNavIsCollapsed:i,navIsCollapsed:n,isMobile:o})=>e("ul",{children:t.map((r,s)=>e(ee,{active:d===r,children:e("a",{href:"#",onClick:m=>{m.preventDefault(),n?i(!1):(a(r),i(o))},children:r})},s))}),te=()=>{const t=w("(max-width: 620px)"),[d,a]=c.useState(null);return h(Z,{children:[e(F,{}),h(z,{children:[e(J,{isMobile:t,children:({setNavIsCollapsed:i,navIsCollapsed:n})=>e(Q,{items:G,activeItem:d,setActiveItem:a,setNavIsCollapsed:i,navIsCollapsed:n,isMobile:t})}),e(Y,{style:{padding:"4rem",marginLeft:t?y.collapsedWidth:""},children:h("h1",{children:["Main content",e("p",{children:e("a",{href:"#",children:"focusable element"})})]})})]})]})},ne=()=>{const t=w("(max-width: 620px)"),[d,a]=c.useState(null);return h(k.Provider,{value:["sidebar","nav","main"],children:[e(H,{}),h(z,{children:[e(X,{isMobile:t,navHeader:e(O,{alt:"logo"}),children:({setNavIsCollapsed:i,navIsCollapsed:n})=>e(Q,{items:G,activeItem:d,setActiveItem:a,setNavIsCollapsed:i,navIsCollapsed:n,isMobile:t})}),e(R,{children:e("h1",{children:"Title"})}),e(I,{tagName:"main",slot:"main",isMobile:t,children:h("h1",{children:["Main content",e("p",{children:e("a",{href:"#",children:"focusable element"})})]})})]})]})},ue=()=>e(k.Provider,{value:["sidebar","nav","main"],children:e(ne,{})}),pe=()=>e(te,{});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{ue as UsingBodyPortal,pe as WithoutBodyPortal};
