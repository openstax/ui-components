import{c}from"./theme.469067e1.js";import{s as n,a as e,j as t}from"./index.2acaa006.js";import{N as m,a as I,b as i,c as g,d as a,P as u}from"./NavBarMenuButtons.44cd3339.js";import{I as s}from"./Info.7d5182b1.js";import{T as h,$ as p,d as l,e as r}from"./Tabs.194ee3ad.js";import"./palette.5e342580.js";import"./BodyPortal.fda06d42.js";import"./Dialog.module.afe668c3.js";import"./Button.module.90816302.js";import"./useFocusRing.module.6c3036f9.js";import"./context.module.00655885.js";import"./useButton.module.9a8b3502.js";import"./RSPContexts.module.60b1b556.js";import"./OverlayArrow.module.e487b8b2.js";import"./Collection.module.b412da74.js";import"./useTreeState.module.a898aa66.js";import"./VisuallyHidden.module.7b868bc6.js";import"./useHasTabbableChild.module.7b513325.js";const b="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K",d=n(m)`
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
