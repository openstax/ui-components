import{a as g}from"./hooks.9f51ef7e.js";import{a as e,C as b,s as l,R as c,c as w,j as h,W as k,F as L}from"./index.150d903d.js";import{c as x,z as S,b as G}from"./theme.e822521e.js";import{B,a as Q}from"./BodyPortal.242c8f22.js";import{b as Z}from"./FocusScope.module.87c37e5b.js";import{a as K,N as O}from"./NavBar.5c24f9fe.js";import"./contexts.5c5bc0b4.js";import"./utils.e3275d2c.js";import"./palette.15e4d008.js";import"./focusSafely.module.685d6009.js";const R=t=>e("svg",{width:"8",height:"10",viewBox:"0 0 8 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{d:"M1.1266 5.38862L5.57702 9.83902C5.79166 10.0537 6.13964 10.0537 6.35426 9.83902L6.87333 9.31995C7.0876 9.10568 7.08801 8.75841 6.87424 8.54363L3.34721 4.99999L6.87424 1.45637C7.08801 1.24159 7.0876 0.89432 6.87333 0.680047L6.35426 0.160979C6.13962 -0.0536598 5.79164 -0.0536598 5.57702 0.160979L1.12662 4.61138C0.911981 4.826 0.911981 5.17398 1.1266 5.38862Z",fill:"#959595"})}),U=t=>e("svg",{width:"8",height:"10",viewBox:"0 0 8 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{d:"M6.87337 5.38862L2.42295 9.83902C2.20831 10.0537 1.86033 10.0537 1.64571 9.83902L1.12664 9.31995C0.912369 9.10568 0.911957 8.75841 1.12573 8.54363L4.65276 4.99999L1.12573 1.45637C0.911957 1.24159 0.912369 0.89432 1.12664 0.680047L1.64571 0.160979C1.86035 -0.0536598 2.20833 -0.0536598 2.42295 0.160979L6.87335 4.61138C7.08799 4.826 7.08799 5.17398 6.87337 5.38862Z",fill:"#959595"})}),p="5.6rem",$="24rem",N=b`
  --collapsed-width: ${p};
  --expanded-width: ${$};
  width: var(--expanded-width);
  transition: width 300ms ease-in-out;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  box-shadow: -0.2rem 0 0.4rem rgba(0, 0, 0, 0.1) inset;
  background: ${x.palette.neutralBright};
  color: ${x.palette.neutralThin};
  z-index: ${S.sidebar};

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
    margin-left: ${p};
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
    z-index: ${S.main+1};
  }

  &.mobile:not(.collapsed) ~ main::before,
  &.mobile:not(.collapsed) ~ [data-backdrop-target]::before {
    background: rgba(0 0 0 / 0.7);
    opacity: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
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
`,M=l.footer`
  button {
    width: 100%;
  }
`,P=l.button`
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
`,C=({mobileBreakpoint:t=`${G.mobileBreak}em`,...a})=>{var o;const d=g(`(max-width: ${t})`),i=(o=a.isMobile)!=null?o:d,[r,n]=c.useState(i);return{isMobile:i,navIsCollapsed:r,setNavIsCollapsed:n}},W=({sidebarNavRef:t,navHeader:a,navFooter:d,children:i,isMobile:r,navIsCollapsed:n,setNavIsCollapsed:o})=>{const s=c.useRef(null);c.useLayoutEffect(()=>{o(r)},[r]),c.useEffect(()=>{if(!r||n)return;const m=f=>{r&&!n&&(t==null?void 0:t.current)&&!(t!=null&&t.current.contains(f.target))&&o(!0)},y=f=>{r&&!n&&f.key==="Escape"&&o(!0)};return document.addEventListener("click",m),document.addEventListener("touchend",m),document.addEventListener("keydown",y),()=>{document.removeEventListener("click",m),document.removeEventListener("touchend",m),document.removeEventListener("keydown",y)}},[r,n,o,t]);const u={navIsCollapsed:n,setNavIsCollapsed:o};return h(Z,{contain:r&&!n,children:[e(P,{"aria-expanded":!n,ref:s,"data-testid":"sidebarnav-toggle",className:w({collapsed:n}),onClick:()=>o(!n),"aria-label":n?"Expand navigation":"Collapse navigation",children:n?e(U,{}):e(R,{})}),a?e(E,{children:typeof a=="function"?a(u):a}):null,e(A,{children:typeof i=="function"?i(u):i}),d?e(M,{children:typeof d=="function"?d(u):d}):null]})},V=l(({className:t,...a})=>{const{isMobile:d,navIsCollapsed:i,setNavIsCollapsed:r}=C(a),n=c.useRef(null);return e("nav",{ref:n,"data-testid":"sidebarnav",className:w(t,{collapsed:i,mobile:d}),children:e(W,{...a,sidebarNavRef:n,isMobile:d,navIsCollapsed:i,setNavIsCollapsed:r,children:a.children})})})`
  ${N}
`,_=l(({className:t,...a})=>{const{isMobile:d,navIsCollapsed:i,setNavIsCollapsed:r}=C(a),n=c.useRef(document.createElement("NAV")),[o,s]=c.useState("idle"),u=m=>{m!==i&&s(m?"collapsing":"expanding"),r(m)};return c.useEffect(()=>{o!=="idle"&&setTimeout(()=>s("idle"),300)},[o]),e(B,{externalRef:n,tagName:"nav",slot:"sidebar","data-testid":"sidebarnav",className:w(t,{collapsed:i,mobile:d,collapsing:o==="collapsing",expanding:o==="expanding"}),children:e(W,{...a,isMobile:d,navIsCollapsed:i,setNavIsCollapsed:u,sidebarNavRef:n})})})`
  ${N}
`,v={NavHeader:E,NavBody:A,NavFooter:M,ToggleButton:P,expandedWidth:$,collapsedWidth:p},q=k`
  html, body, #ladle-root {
    margin: 0;
    padding: 0;
  }

  #ladle-root {
    height: 100vh;
  }
`,F=k`
body {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "sidebar nav"
    "sidebar main";
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
`,T=b`
  overflow: auto;
  grid-area: nav;
  padding: 2rem;

  ul {
    list-style: none;
    padding: 0;
  }

  ${v.ToggleButton} {
    margin-top: 3.2rem;
  }
`,H=l(V)`
  ${T}
`,J=l(_)`
  ${T}
`,X=l.main`
  .mobile + & {
    margin-left: 5.6rem;
  }
`,Y=l(B)`
  .mobile + & {
    margin-left: 5.6rem;
  }

  padding: 4rem;
  margin-left: ${t=>t.isMobile?v.collapsedWidth:""};
`,j=l.li`
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
`,D=["Home","About","Services","Contact",...Array.from({length:50},(t,a)=>(a+1).toString())],I=()=>{const t=g("(max-width: 620px)"),[a,d]=c.useState(null);return h(L,{children:[e(q,{}),h(z,{children:[e(H,{isMobile:t,children:({setNavIsCollapsed:i,navIsCollapsed:r})=>e("ul",{children:D.map((n,o)=>e(j,{active:a===n,children:e("a",{href:"#",onClick:s=>{s.preventDefault(),r?i(!1):(d(n),i(t))},children:n})},o))})}),e(X,{style:{padding:"4rem",marginLeft:t?v.collapsedWidth:""},children:h("h1",{children:["Main content",e("p",{children:e("a",{href:"#",children:"focusable element"})})]})})]})]})},ee=()=>{const t=g("(max-width: 620px)"),[a,d]=c.useState(null);return h(L,{children:[e(F,{}),h(z,{children:[e(J,{isMobile:t,navHeader:e(K,{alt:"logo"}),children:({setNavIsCollapsed:i,navIsCollapsed:r})=>e("ul",{children:D.map((n,o)=>e(j,{active:a===n,children:e("a",{href:"#",onClick:s=>{s.preventDefault(),r?i(!1):(d(n),i(t))},children:n})},o))})}),e(O,{children:e("h1",{children:"Title"})}),e(Y,{tagName:"main",slot:"main",isMobile:t,children:h("h1",{children:["Main content",e("p",{children:e("a",{href:"#",children:"focusable element"})})]})})]})]})},me=()=>e(Q.Provider,{value:["sidebar","nav","main"],children:e(ee,{})}),he=()=>e(I,{});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{me as UsingBodyPortal,he as WithoutBodyPortal};
