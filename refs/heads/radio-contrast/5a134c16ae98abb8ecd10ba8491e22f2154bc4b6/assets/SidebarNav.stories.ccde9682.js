import{a as L}from"./hooks.b464bb7a.js";import{a as e,s as i,R as l,j as u,c as x,W as A,C as B,F as W}from"./index.8b8509b6.js";import{c as y,z as I,b as j}from"./theme.0a1eaf15.js";import{b as z}from"./FocusScope.module.d41a6ee1.js";import"./contexts.932ffc57.js";import"./utils.e3275d2c.js";import"./palette.15e4d008.js";import"./focusSafely.module.db157cdf.js";const D=t=>e("svg",{width:"8",height:"10",viewBox:"0 0 8 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{d:"M1.1266 5.38862L5.57702 9.83902C5.79166 10.0537 6.13964 10.0537 6.35426 9.83902L6.87333 9.31995C7.0876 9.10568 7.08801 8.75841 6.87424 8.54363L3.34721 4.99999L6.87424 1.45637C7.08801 1.24159 7.0876 0.89432 6.87333 0.680047L6.35426 0.160979C6.13962 -0.0536598 5.79164 -0.0536598 5.57702 0.160979L1.12662 4.61138C0.911981 4.826 0.911981 5.17398 1.1266 5.38862Z",fill:"#959595"})}),Q=t=>e("svg",{width:"8",height:"10",viewBox:"0 0 8 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{d:"M6.87337 5.38862L2.42295 9.83902C2.20831 10.0537 1.86033 10.0537 1.64571 9.83902L1.12664 9.31995C0.912369 9.10568 0.911957 8.75841 1.12573 8.54363L4.65276 4.99999L1.12573 1.45637C0.911957 1.24159 0.912369 0.89432 1.12664 0.680047L1.64571 0.160979C1.86035 -0.0536598 2.20833 -0.0536598 2.42295 0.160979L6.87335 4.61138C7.08799 4.826 7.08799 5.17398 6.87337 5.38862Z",fill:"#959595"})}),k="5.6rem",C="24rem",E=i.nav`
  --collapsed-width: ${k};
  --expanded-width: ${C};
  width: var(--expanded-width);
  transition: width 300ms ease-in-out;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  box-shadow: -0.2rem 0 0.4rem rgba(0, 0, 0, 0.1) inset;
  background: ${y.palette.neutralBright};
  color: ${y.palette.neutralThin};
  z-index: ${I.navbar-1};

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
  }

  &.mobile[aria-expanded="true"] ~ main::before,
  &.mobile[aria-expanded="true"] ~ [data-backdrop-target]::before {
    background: rgba(0 0 0 / .7);
    opacity: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`,N=i.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`,S=i.div`
  height: 100%;
  overflow-y: auto;
`,$=i.footer`
  button {
    width: 100%;
  }
`,M=i.button`
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
`,T=i(({navHeader:t,navFooter:a,children:s,className:c,mobileBreakpoint:p=`${j.mobileBreak}em`,...r})=>{var w;const f=L(`(max-width: ${p})`),o=(w=r.isMobile)!=null?w:f,[n,d]=l.useState(o),R=l.useRef(null),m=l.useRef(null);l.useLayoutEffect(()=>{d(o)},[o]),l.useEffect(()=>{if(!o||n)return;const h=g=>{o&&!n&&m.current&&!m.current.contains(g.target)&&d(!0)},v=g=>{o&&!n&&g.key==="Escape"&&d(!0)};return document.addEventListener("click",h),document.addEventListener("touchend",h),document.addEventListener("keydown",v),()=>{document.removeEventListener("click",h),document.removeEventListener("touchend",h),document.removeEventListener("keydown",v)}},[o,n,d,m]);const b={navIsCollapsed:n,setNavIsCollapsed:d};return e(z,{contain:o&&!n,children:u(E,{ref:m,"aria-expanded":!n,"data-testid":"sidebarnav",className:x(c,{collapsed:n,mobile:o}),...r,children:[e(M,{ref:R,"data-testid":"sidebarnav-toggle",className:x({collapsed:n}),onClick:()=>d(!n),"aria-label":n?"Expand navigation":"Collapse navigation",children:n?e(Q,{}):e(D,{})}),t?e(N,{children:typeof t=="function"?t(b):t}):null,e(S,{children:typeof s=="function"?s(b):s}),a?e($,{children:typeof a=="function"?a(b):a}):null]})})})``,Z={Nav:E,NavHeader:N,NavBody:S,NavFooter:$,ToggleButton:M,expandedWidth:C,collapsedWidth:k},G=A`
  html, body, #ladle-root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #ladle-root {
    display: flex;
  }
`,K=i.div`
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
`,O=i(T)`
  overflow: auto;
  grid-area: nav;
  padding: 6rem 2rem;

  ul {
    list-style: none;
    padding: 0;
  }
`,P=i.main`
  .mobile + & {
    margin-left: 5.6rem;
  }
`,_=i.li`
  a {
    text-decoration: none;
    color: black;
    padding: 0.5rem 1rem;
    display: block;
    border-radius: 4px;

    ${t=>t.active&&B`
        background-color: #007bff;
        color: white;
      `}
  }
`,q=["Home","About","Services","Contact",...Array.from({length:50},(t,a)=>(a+1).toString())],te=()=>{const t=L("(max-width: 620px)"),[a,s]=l.useState(null);return u(W,{children:[e(G,{}),u(K,{children:[e(O,{isMobile:t,children:({setNavIsCollapsed:c,navIsCollapsed:p})=>e("ul",{children:q.map((r,f)=>e(_,{active:a===r,children:e("a",{href:"#",onClick:o=>{o.preventDefault(),p?c(!1):(s(r),c(t))},children:r})},f))})}),e(P,{style:{padding:"4rem",marginLeft:t?Z.collapsedWidth:""},children:u("h1",{children:["Main content",e("p",{children:e("a",{href:"#",children:"focusable element"})})]})})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{te as Default};
