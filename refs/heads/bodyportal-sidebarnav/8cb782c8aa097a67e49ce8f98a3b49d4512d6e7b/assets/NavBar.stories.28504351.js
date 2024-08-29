import{c as d}from"./theme.6e056fed.js";import{s as o,j as t,a as e}from"./index.5c4b197b.js";import{N as $}from"./NavBar.763e6c78.js";import{$ as N}from"./OverlayArrow.module.dd8890b5.js";import{c as v,b as x,a as M,d as j,$ as A,e as B}from"./Menu.module.a62de4d5.js";import{I as h}from"./Info.bea6fd37.js";import{T as C,$ as S,d as m,e as g}from"./Tabs.d001ea8a.js";import"./palette.15e4d008.js";import"./BodyPortal.b74732e1.js";import"./focusSafely.module.ebed06a9.js";import"./context.module.8bae71a6.js";import"./SelectionManager.module.119db734.js";import"./FocusScope.module.c1da3f2b.js";const l=o(({label:n,icon:r,className:c,"aria-label":I,...s})=>t(N,{className:c,...s,children:[r&&(typeof r=="string"?e("img",{"aria-hidden":"true",src:r,alt:""}):r),n?e("span",{children:n}):null]}))`
  border: none;
  background: none;
  padding: 0;
  min-height: 4rem;
  min-width: 4rem;
  height: 100%;
  display: inline-flex;
  place-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 500;

  img {
    max-height: 100%;
  }

  img + *,
  svg + * {
    margin-left: 0.8rem;
  }
`,a=o(v)``,y=o.div`
  padding: 1.6rem;
`,w=o(x)`
  margin-top: -1rem;
  border-top: 0.4rem solid ${d.palette.darkGreen};
  box-shadow: 0 0.4rem 0.4rem 0 #00000033;
  background: #fff;

  ${a} {
    font-size: 1.4rem;
    min-height: 4rem;
    padding: 0 1.6rem;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
      background: ${d.palette.neutralLighter};
    }

    &:active {
      font-weight: bold;
    }

    &:not(:last-child) {
      border-bottom: 0.1rem solid ${d.palette.neutralBright};
    }
  }
`,p=({isMenu:n,children:r,popoverProps:c,...I})=>{const s=n?M:j,f=n?A:B;return t(s,{children:[e(l,{...I}),e(w,{...c,children:e(f,{children:r})})]})},Z=n=>e(p,{...n,isMenu:!1}),u=n=>e(p,{...n,isMenu:!0}),D="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K",b=o(Z)`
  &:hover {
    svg path {
      fill: ${d.palette.lightBlue};
    }
  }
`,P=o(u)`
  padding: 1rem;
`,G=o(a)`
  color: ${d.palette.orange};
`,T=o.div`
  display: flex;
  height: 100%
`,i=o($)`
  position: fixed;
  left: 2rem;
  top: 2rem;
  width: calc(100% - 36rem);
`,F=()=>e(i,{children:"NavBar"}),_=()=>e(i,{logo:!0,children:"Menu"}),q=()=>e(i,{logo:{alt:"custom alt",href:"/"}}),Q=()=>e(i,{logo:{alt:"custom alt unlinked"}}),V=()=>e(i,{justifyContent:"center",children:e("strong",{children:"Centered Menu"})}),ee=()=>t(i,{children:[e(l,{label:"Help"}),e(l,{label:"Info",icon:e(h,{})}),e(l,{style:{padding:"1rem"},icon:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K","aria-label":"Menu"})]}),te=()=>t(i,{children:[e(b,{label:"Menu",children:t(y,{children:[e("button",{children:"Example button"}),e("button",{children:"Another button"})]})}),e(b,{label:"Test menu",icon:e(h,{}),children:t(C,{children:[t(S,{"aria-label":"Items",children:[e(m,{id:"one",children:"Info 1"}),e(m,{id:"two",children:"Info 2"}),e(m,{id:"three",children:"Info 3"})]}),e(g,{id:"one",children:"First"}),e(g,{id:"two",children:"Second"}),e(g,{id:"three",children:"Third"})]})}),t(T,{children:[t(u,{label:"Help",children:[e(a,{children:"Open Guide"}),e(a,{children:"Contact Support"})]}),t(P,{"aria-label":"Test menu",icon:D,children:[e(a,{children:"Cool menu item"}),e(a,{children:"Really long menu item with a lot of text"}),e(G,{children:"Styled menu item"})]})]})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{q as AltTextLinkedLogo,Q as AltTextNoLinkedLogo,ee as Controls_NavBarButton,_ as LogoAndChildren,V as OverrideJustifyContent,F as Plain,te as PopoverAndMenu};
