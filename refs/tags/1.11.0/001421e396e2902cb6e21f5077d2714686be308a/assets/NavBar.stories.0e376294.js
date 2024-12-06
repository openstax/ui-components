import{c as d}from"./theme.cc0a80d6.js";import{s as n,j as t,a as e}from"./index.cc835bd8.js";import{N as $}from"./NavBar.b852ebb6.js";import{$ as N}from"./Button.module.cd98a565.js";import{$ as v,o as x,n as M}from"./Dialog.module.f8aeb395.js";import{b as j,a as A,$ as B}from"./Menu.module.9538221b.js";import{I as p}from"./Info.c53390c6.js";import{T as C,$ as S,d as m,e as g}from"./Tabs.3f1fb874.js";import"./palette.15e4d008.js";import"./BodyPortal.58a9a8f7.js";import"./context.module.b913cfa5.js";import"./focusSafely.module.5220aa3a.js";import"./useFocusRing.module.8658ba65.js";import"./OverlayArrow.module.f8d91753.js";import"./FocusScope.module.cc743143.js";import"./isScrollable.module.cba4c319.js";import"./SelectionManager.module.d79f291f.js";const l=n(({label:o,icon:r,className:c,"aria-label":I,...s})=>t(N,{className:c,...s,children:[r&&(typeof r=="string"?e("img",{"aria-hidden":"true",src:r,alt:""}):r),o?e("span",{children:o}):null]}))`
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
`,a=n(j)``,y=n.div`
  padding: 1.6rem;
`,w=n(v)`
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
`,h=({isMenu:o,children:r,popoverProps:c,...I})=>{const s=o?A:x,f=o?B:M;return t(s,{children:[e(l,{...I}),e(w,{...c,children:e(f,{children:r})})]})},Z=o=>e(h,{...o,isMenu:!1}),u=o=>e(h,{...o,isMenu:!0}),D="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K",b=n(Z)`
  &:hover {
    svg path {
      fill: ${d.palette.lightBlue};
    }
  }
`,P=n(u)`
  padding: 1rem;
`,G=n(a)`
  color: ${d.palette.orange};
`,T=n.div`
  display: flex;
  height: 100%
`,i=n($)`
  position: fixed;
  left: 2rem;
  top: 2rem;
  width: calc(100% - 36rem);
`,V=()=>e(i,{children:"NavBar"}),ee=()=>e(i,{logo:!0,children:"Menu"}),te=()=>e(i,{logo:{alt:"custom alt",href:"/"}}),oe=()=>e(i,{logo:{alt:"custom alt unlinked"}}),ne=()=>e(i,{justifyContent:"center",children:e("strong",{children:"Centered Menu"})}),ie=()=>t(i,{children:[e(l,{label:"Help"}),e(l,{label:"Info",icon:e(p,{})}),e(l,{style:{padding:"1rem"},icon:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K","aria-label":"Menu"})]}),re=()=>t(i,{children:[e(b,{label:"Menu",children:t(y,{children:[e("button",{children:"Example button"}),e("button",{children:"Another button"})]})}),e(b,{label:"Test menu",icon:e(p,{}),children:t(C,{children:[t(S,{"aria-label":"Items",children:[e(m,{id:"one",children:"Info 1"}),e(m,{id:"two",children:"Info 2"}),e(m,{id:"three",children:"Info 3"})]}),e(g,{id:"one",children:"First"}),e(g,{id:"two",children:"Second"}),e(g,{id:"three",children:"Third"})]})}),t(T,{children:[t(u,{label:"Help",children:[e(a,{children:"Open Guide"}),e(a,{children:"Contact Support"})]}),t(P,{"aria-label":"Test menu",icon:D,children:[e(a,{children:"Cool menu item"}),e(a,{children:"Really long menu item with a lot of text"}),e(G,{children:"Styled menu item"})]})]})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{te as AltTextLinkedLogo,oe as AltTextNoLinkedLogo,ie as Controls_NavBarButton,ee as LogoAndChildren,ne as OverrideJustifyContent,V as Plain,re as PopoverAndMenu};
