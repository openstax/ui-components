import{c}from"./theme.68c19183.js";import{s as n,a as e,j as t}from"./index.47d9f853.js";import{N as a,P as m,a as I,b as i,c as g,d as u}from"./NavBarMenuButtons.6757552b.js";import{I as s}from"./Info.5cf0f61c.js";import{T as h,$ as p,d as l,e as r}from"./Tabs.87d7c625.js";import"./palette.15e4d008.js";import"./BodyPortal.3ca9c7ce.js";import"./Dialog.module.f657d69b.js";import"./Button.module.35fb2a08.js";import"./useFocusRing.module.d3eaf4b2.js";import"./context.module.138f7add.js";import"./useButton.module.9b581198.js";import"./VisuallyHidden.module.9b57f52f.js";import"./OverlayArrow.module.250a0482.js";import"./Collection.module.ec657308.js";import"./useTreeState.module.0044eee2.js";import"./useHasTabbableChild.module.bb82644d.js";const b="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K",d=n(g)`
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
