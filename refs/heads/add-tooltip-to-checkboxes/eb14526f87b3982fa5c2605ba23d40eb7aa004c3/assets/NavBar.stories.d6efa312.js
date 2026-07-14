import{c}from"./theme.469067e1.js";import{s as n,a as e,j as t}from"./index.244dd005.js";import{N as m,a as I,b as i,c as g,d as a,P as u}from"./NavBarMenuButtons.d34cd69e.js";import{I as s}from"./Info.0060f7a4.js";import{T as h,$ as p,d as l,e as r}from"./Tabs.6c3fc5b7.js";import"./palette.5e342580.js";import"./BodyPortal.9677ee55.js";import"./Dialog.module.5f62c529.js";import"./Button.module.1764719c.js";import"./useFocusRing.module.4e35c6bc.js";import"./context.module.3d64a1f7.js";import"./useButton.module.625f8887.js";import"./RSPContexts.module.385aa849.js";import"./OverlayArrow.module.01e62d1e.js";import"./Collection.module.28180630.js";import"./useTreeState.module.ba5b08c4.js";import"./VisuallyHidden.module.8943f7b5.js";import"./useHasTabbableChild.module.731394c9.js";const b="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K",d=n(m)`
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
`,H=()=>e(o,{children:"NavBar"}),U=()=>e(o,{logo:!0,children:"Menu"}),J=()=>e(o,{logo:{alt:"custom alt",href:"/"}}),X=()=>e(o,{logo:{alt:"custom alt unlinked"}}),W=()=>e(o,{justifyContent:"center",children:e("strong",{children:"Centered Menu"})}),K=()=>t(o,{children:[e(a,{label:"Help"}),e(a,{label:"Info",icon:e(s,{})}),e(a,{style:{padding:"1rem"},icon:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K","aria-label":"Menu"})]}),O=()=>t(o,{children:[e(d,{label:"Menu",children:t(u,{children:[e("button",{children:"Example button"}),e("button",{children:"Another button"})]})}),e(d,{label:"Test menu",icon:e(s,{}),children:t(h,{children:[t(p,{"aria-label":"Items",children:[e(l,{id:"one",children:"Info 1"}),e(l,{id:"two",children:"Info 2"}),e(l,{id:"three",children:"Info 3"})]}),e(r,{id:"one",children:"First"}),e(r,{id:"two",children:"Second"}),e(r,{id:"three",children:"Third"})]})}),t(j,{children:[t(I,{label:"Help",children:[e(i,{children:"Open Guide"}),e(i,{children:"Contact Support"})]}),t(N,{"aria-label":"Test menu",icon:b,children:[e(i,{children:"Cool menu item"}),e(i,{children:"Really long menu item with a lot of text"}),e(M,{children:"Styled menu item"})]})]})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{J as AltTextLinkedLogo,X as AltTextNoLinkedLogo,K as Controls_NavBarButton,U as LogoAndChildren,W as OverrideJustifyContent,H as Plain,O as PopoverAndMenu};
