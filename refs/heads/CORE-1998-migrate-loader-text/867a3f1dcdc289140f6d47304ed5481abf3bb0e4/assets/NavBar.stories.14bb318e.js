import{c}from"./theme.469067e1.js";import{s as n,a as e,j as t}from"./index.08db14f5.js";import{N as a,P as m,a as I,b as i,c as g,d as u}from"./NavBarMenuButtons.6bddcb4a.js";import{I as s}from"./Info.8d1a267a.js";import{T as h,$ as p,d as l,e as r}from"./Tabs.d023d437.js";import"./palette.5e342580.js";import"./BodyPortal.9f14cb83.js";import"./Dialog.module.fa8ca7fd.js";import"./Button.module.436f5140.js";import"./useFocusRing.module.35a4203d.js";import"./context.module.209b2345.js";import"./useButton.module.3a1de91e.js";import"./VisuallyHidden.module.72cf1f11.js";import"./OverlayArrow.module.a0eee73f.js";import"./Collection.module.dbb73945.js";import"./useTreeState.module.32275a25.js";import"./useHasTabbableChild.module.77ebb900.js";const b="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K",d=n(g)`
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
`,o=n(u)`
  position: fixed;
  left: 2rem;
  top: 2rem;
  width: calc(100% - 36rem);
`,Y=()=>e(o,{children:"NavBar"}),H=()=>e(o,{logo:!0,children:"Menu"}),U=()=>e(o,{logo:{alt:"custom alt",href:"/"}}),J=()=>e(o,{logo:{alt:"custom alt unlinked"}}),X=()=>e(o,{justifyContent:"center",children:e("strong",{children:"Centered Menu"})}),W=()=>t(o,{children:[e(a,{label:"Help"}),e(a,{label:"Info",icon:e(s,{})}),e(a,{style:{padding:"1rem"},icon:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K","aria-label":"Menu"})]}),K=()=>t(o,{children:[e(d,{label:"Menu",children:t(m,{children:[e("button",{children:"Example button"}),e("button",{children:"Another button"})]})}),e(d,{label:"Test menu",icon:e(s,{}),children:t(h,{children:[t(p,{"aria-label":"Items",children:[e(l,{id:"one",children:"Info 1"}),e(l,{id:"two",children:"Info 2"}),e(l,{id:"three",children:"Info 3"})]}),e(r,{id:"one",children:"First"}),e(r,{id:"two",children:"Second"}),e(r,{id:"three",children:"Third"})]})}),t(j,{children:[t(I,{label:"Help",children:[e(i,{children:"Open Guide"}),e(i,{children:"Contact Support"})]}),t(N,{"aria-label":"Test menu",icon:b,children:[e(i,{children:"Cool menu item"}),e(i,{children:"Really long menu item with a lot of text"}),e(M,{children:"Styled menu item"})]})]})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{U as AltTextLinkedLogo,J as AltTextNoLinkedLogo,W as Controls_NavBarButton,H as LogoAndChildren,X as OverrideJustifyContent,Y as Plain,K as PopoverAndMenu};
