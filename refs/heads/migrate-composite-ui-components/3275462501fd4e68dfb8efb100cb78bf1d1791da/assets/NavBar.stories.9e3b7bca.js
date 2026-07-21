import{c}from"./theme.469067e1.js";import{s as n,a as e,j as t}from"./index.6230b141.js";import{N as m,a as I,b as i,c as g,d as a,P as u}from"./NavBarMenuButtons.79acbf0d.js";import{I as s}from"./Info.19ca86ea.js";import{T as p,$ as h,a as l,b as r}from"./Tabs.046edf45.js";import"./palette.5e342580.js";import"./BodyPortal.d6ca4e98.js";import"./Dialog.module.658b7a88.js";import"./Button.module.8517c931.js";import"./useFocusRing.module.75522451.js";import"./Hidden.module.20bb48f4.js";import"./useButton.module.4a54fb63.js";import"./VisuallyHidden.module.8322532a.js";import"./OverlayArrow.module.aacc0374.js";import"./context.module.e700db4f.js";import"./Collection.module.7ad5e601.js";import"./FocusScope.module.42166267.js";import"./useTreeState.module.340e3553.js";import"./useHasTabbableChild.module.f25c0b3e.js";const b="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K",d=n(m)`
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
