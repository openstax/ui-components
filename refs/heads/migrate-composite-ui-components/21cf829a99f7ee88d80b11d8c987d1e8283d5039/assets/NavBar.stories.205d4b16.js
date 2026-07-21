import{c}from"./theme.469067e1.js";import{s as n,a as e,j as t}from"./index.c39542ce.js";import{N as m,a as I,b as i,c as g,d as a,P as u}from"./NavBarMenuButtons.cd925653.js";import{I as s}from"./Info.a3e1e22c.js";import{T as p,$ as h,a as l,b as r}from"./Tabs.a6b2b049.js";import"./palette.5e342580.js";import"./BodyPortal.754f89a2.js";import"./Dialog.module.dda90f0d.js";import"./Button.module.fe43f4a9.js";import"./useFocusRing.module.4b3c8f38.js";import"./Hidden.module.e7a81615.js";import"./useButton.module.66943ff5.js";import"./VisuallyHidden.module.48b66513.js";import"./OverlayArrow.module.e2e96f63.js";import"./context.module.af17b1db.js";import"./Collection.module.3c4efd74.js";import"./FocusScope.module.0d8894c6.js";import"./useTreeState.module.70f4b335.js";import"./useHasTabbableChild.module.d59d3187.js";const b="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K",d=n(m)`
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
`,U=()=>e(o,{children:"NavBar"}),J=()=>e(o,{logo:!0,children:"Menu"}),X=()=>e(o,{logo:{alt:"custom alt",href:"/"}}),W=()=>e(o,{logo:{alt:"custom alt unlinked"}}),K=()=>e(o,{justifyContent:"center",children:e("strong",{children:"Centered Menu"})}),O=()=>t(o,{children:[e(a,{label:"Help"}),e(a,{label:"Info",icon:e(s,{})}),e(a,{style:{padding:"1rem"},icon:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K","aria-label":"Menu"})]}),k=()=>t(o,{children:[e(d,{label:"Menu",children:t(u,{children:[e("button",{children:"Example button"}),e("button",{children:"Another button"})]})}),e(d,{label:"Test menu",icon:e(s,{}),children:t(p,{children:[t(h,{"aria-label":"Items",children:[e(l,{id:"one",children:"Info 1"}),e(l,{id:"two",children:"Info 2"}),e(l,{id:"three",children:"Info 3"})]}),e(r,{id:"one",children:"First"}),e(r,{id:"two",children:"Second"}),e(r,{id:"three",children:"Third"})]})}),t(j,{children:[t(I,{label:"Help",children:[e(i,{children:"Open Guide"}),e(i,{children:"Contact Support"})]}),t(N,{"aria-label":"Test menu",icon:b,children:[e(i,{children:"Cool menu item"}),e(i,{children:"Really long menu item with a lot of text"}),e(M,{children:"Styled menu item"})]})]})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{X as AltTextLinkedLogo,W as AltTextNoLinkedLogo,O as Controls_NavBarButton,J as LogoAndChildren,K as OverrideJustifyContent,U as Plain,k as PopoverAndMenu};
