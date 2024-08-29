import{a as b}from"./hooks.39a442ab.js";import{a as e,C as w,s as l,R as s,c as v,j as m,W as k,F as L}from"./index.7adc4e41.js";import{c as x,z as S,b as G}from"./theme.18a18449.js";import{B,a as Q}from"./BodyPortal.488ddfaf.js";import{b as Z}from"./FocusScope.module.1e393e05.js";import{a as K,N as O}from"./NavBar.6ed999ad.js";import"./contexts.d5f8b358.js";import"./utils.e3275d2c.js";import"./palette.15e4d008.js";import"./focusSafely.module.b8fc58d0.js";const R=t=>e("svg",{width:"8",height:"10",viewBox:"0 0 8 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{d:"M1.1266 5.38862L5.57702 9.83902C5.79166 10.0537 6.13964 10.0537 6.35426 9.83902L6.87333 9.31995C7.0876 9.10568 7.08801 8.75841 6.87424 8.54363L3.34721 4.99999L6.87424 1.45637C7.08801 1.24159 7.0876 0.89432 6.87333 0.680047L6.35426 0.160979C6.13962 -0.0536598 5.79164 -0.0536598 5.57702 0.160979L1.12662 4.61138C0.911981 4.826 0.911981 5.17398 1.1266 5.38862Z",fill:"#959595"})}),U=t=>e("svg",{width:"8",height:"10",viewBox:"0 0 8 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{d:"M6.87337 5.38862L2.42295 9.83902C2.20831 10.0537 1.86033 10.0537 1.64571 9.83902L1.12664 9.31995C0.912369 9.10568 0.911957 8.75841 1.12573 8.54363L4.65276 4.99999L1.12573 1.45637C0.911957 1.24159 0.912369 0.89432 1.12664 0.680047L1.64571 0.160979C1.86035 -0.0536598 2.20833 -0.0536598 2.42295 0.160979L6.87335 4.61138C7.08799 4.826 7.08799 5.17398 6.87337 5.38862Z",fill:"#959595"})}),g="5.6rem",$="24rem",N=w`
  --collapsed-width: ${g};
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
    margin-left: ${g};
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
`,C=({mobileBreakpoint:t=`${G.mobileBreak}em`,...d})=>{var i;const r=b(`(max-width: ${t})`),o=(i=d.isMobile)!=null?i:r,[a,n]=s.useState(o);return{isMobile:o,navIsCollapsed:a,setNavIsCollapsed:n}},W=({sidebarNavRef:t,navHeader:d,navFooter:r,children:o,isMobile:a,navIsCollapsed:n,setNavIsCollapsed:i})=>{const c=s.useRef(null);s.useLayoutEffect(()=>{i(a)},[a]),s.useEffect(()=>{if(!a||n)return;const u=p=>{a&&!n&&(t==null?void 0:t.current)&&!(t!=null&&t.current.contains(p.target))&&i(!0)},f=p=>{a&&!n&&p.key==="Escape"&&i(!0)};return document.addEventListener("click",u),document.addEventListener("touchend",u),document.addEventListener("keydown",f),()=>{document.removeEventListener("click",u),document.removeEventListener("touchend",u),document.removeEventListener("keydown",f)}},[a,n,i,t]);const h={navIsCollapsed:n,setNavIsCollapsed:i};return m(Z,{contain:a&&!n,children:[e(P,{"aria-expanded":!n,ref:c,"data-testid":"sidebarnav-toggle",className:v({collapsed:n}),onClick:()=>i(!n),"aria-label":n?"Expand navigation":"Collapse navigation",children:n?e(U,{}):e(R,{})}),d?e(E,{children:typeof d=="function"?d(h):d}):null,e(A,{children:typeof o=="function"?o(h):o}),r?e(M,{children:typeof r=="function"?r(h):r}):null]})},V=l(({className:t,id:d,...r})=>{const{isMobile:o,navIsCollapsed:a,setNavIsCollapsed:n}=C(r),i=s.useRef(null);return e("nav",{id:d,ref:i,"data-testid":"sidebarnav",className:v(t,{collapsed:a,mobile:o}),children:e(W,{...r,sidebarNavRef:i,isMobile:o,navIsCollapsed:a,setNavIsCollapsed:n,children:r.children})})})`
  ${N}
`,_=l(({className:t,id:d,...r})=>{const{isMobile:o,navIsCollapsed:a,setNavIsCollapsed:n}=C(r),i=s.useRef(document.createElement("NAV")),[c,h]=s.useState("idle"),u=f=>{f!==a&&h(f?"collapsing":"expanding"),n(f)};return s.useEffect(()=>{c!=="idle"&&setTimeout(()=>h("idle"),300)},[c]),e(B,{id:d,externalRef:i,tagName:"nav",slot:"sidebar","data-testid":"sidebarnav",className:v(t,{collapsed:a,mobile:o,collapsing:c==="collapsing",expanding:c==="expanding"}),children:e(W,{...r,isMobile:o,navIsCollapsed:a,setNavIsCollapsed:u,sidebarNavRef:i})})})`
  ${N}
`,y={NavHeader:E,NavBody:A,NavFooter:M,ToggleButton:P,expandedWidth:$,collapsedWidth:g},q=k`
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
`,T=w`
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
  margin-left: ${t=>t.isMobile?y.collapsedWidth:""};
`,j=l.li`
  a {
    text-decoration: none;
    color: black;
    padding: 0.5rem 1rem;
    display: block;
    border-radius: 4px;

    ${t=>t.active&&w`
        background-color: #007bff;
        color: white;
      `}
  }
`,D=["Home","About","Services","Contact",...Array.from({length:50},(t,d)=>(d+1).toString())],I=()=>{const t=b("(max-width: 620px)"),[d,r]=s.useState(null);return m(L,{children:[e(q,{}),m(z,{children:[e(H,{isMobile:t,children:({setNavIsCollapsed:o,navIsCollapsed:a})=>e("ul",{children:D.map((n,i)=>e(j,{active:d===n,children:e("a",{href:"#",onClick:c=>{c.preventDefault(),a?o(!1):(r(n),o(t))},children:n})},i))})}),e(X,{style:{padding:"4rem",marginLeft:t?y.collapsedWidth:""},children:m("h1",{children:["Main content",e("p",{children:e("a",{href:"#",children:"focusable element"})})]})})]})]})},ee=()=>{const t=b("(max-width: 620px)"),[d,r]=s.useState(null);return m(L,{children:[e(F,{}),m(z,{children:[e(J,{isMobile:t,navHeader:e(K,{alt:"logo"}),children:({setNavIsCollapsed:o,navIsCollapsed:a})=>e("ul",{children:D.map((n,i)=>e(j,{active:d===n,children:e("a",{href:"#",onClick:c=>{c.preventDefault(),a?o(!1):(r(n),o(t))},children:n})},i))})}),e(O,{children:e("h1",{children:"Title"})}),e(Y,{tagName:"main",slot:"main",isMobile:t,children:m("h1",{children:["Main content",e("p",{children:e("a",{href:"#",children:"focusable element"})})]})})]})]})},me=()=>e(Q.Provider,{value:["sidebar","nav","main"],children:e(ee,{})}),he=()=>e(I,{});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{me as UsingBodyPortal,he as WithoutBodyPortal};
