import{c}from"./theme.469067e1.js";import{s as n,a as e,j as t}from"./index.0f552bb7.js";import{N as m,a as I,b as i,c as g,d as a,P as u}from"./NavBarMenuButtons.22e7c608.js";import{I as s}from"./Info.19bf3ef7.js";import{T as h,$ as p,d as l,e as r}from"./Tabs.4e4fbd1d.js";import"./palette.5e342580.js";import"./BodyPortal.97090edf.js";import"./Dialog.module.e56d8d59.js";import"./Button.module.7d779fc1.js";import"./useFocusRing.module.6be01e39.js";import"./context.module.4490ff1e.js";import"./useButton.module.41d66f7f.js";import"./VisuallyHidden.module.36d4f89e.js";import"./OverlayArrow.module.c47d6744.js";import"./Collection.module.c8744b48.js";import"./useTreeState.module.a02ac7e6.js";import"./useHasTabbableChild.module.fafa0ddf.js";const b="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K",d=n(m)`
  &:hover {
    svg path {
      fill: ${c.palette.lightBlue};
    }
  }
`,N=n(I)`
  padding: 1rem;
`,M=n(i)`
  color: ${c.palette.orange};
`,j=n.div`
  display: flex;
  height: 100%
`,o=n(g)`
  position: fixed;
  left: 2rem;
  top: 2rem;
  width: calc(100% - 36rem);
`,Y=()=>e(o,{children:"NavBar"}),H=()=>e(o,{logo:!0,children:"Menu"}),U=()=>e(o,{logo:{alt:"custom alt",href:"/"}}),J=()=>e(o,{logo:{alt:"custom alt unlinked"}}),X=()=>e(o,{justifyContent:"center",children:e("strong",{children:"Centered Menu"})}),W=()=>t(o,{children:[e(a,{label:"Help"}),e(a,{label:"Info",icon:e(s,{})}),e(a,{style:{padding:"1rem"},icon:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K","aria-label":"Menu"})]}),K=()=>t(o,{children:[e(d,{label:"Menu",children:t(u,{children:[e("button",{children:"Example button"}),e("button",{children:"Another button"})]})}),e(d,{label:"Test menu",icon:e(s,{}),children:t(h,{children:[t(p,{"aria-label":"Items",children:[e(l,{id:"one",children:"Info 1"}),e(l,{id:"two",children:"Info 2"}),e(l,{id:"three",children:"Info 3"})]}),e(r,{id:"one",children:"First"}),e(r,{id:"two",children:"Second"}),e(r,{id:"three",children:"Third"})]})}),t(j,{children:[t(I,{label:"Help",children:[e(i,{children:"Open Guide"}),e(i,{children:"Contact Support"})]}),t(N,{"aria-label":"Test menu",icon:b,children:[e(i,{children:"Cool menu item"}),e(i,{children:"Really long menu item with a lot of text"}),e(M,{children:"Styled menu item"})]})]})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{U as AltTextLinkedLogo,J as AltTextNoLinkedLogo,W as Controls_NavBarButton,H as LogoAndChildren,X as OverrideJustifyContent,Y as Plain,K as PopoverAndMenu};
