import{c}from"./theme.2f0b88da.js";import{s as n,a as e,j as t}from"./index.0226d2e0.js";import{c as a,P as m,N as I,a as i,d as g,b as u}from"./NavBar.62ac7bfa.js";import{I as s}from"./Info.41fb34dd.js";import{T as h,$ as p,d as l,e as r}from"./Tabs.47811f48.js";import"./palette.15e4d008.js";import"./Dialog.module.ea8ede0c.js";import"./Button.module.e6b0bef9.js";import"./useFocusRing.module.813e4eda.js";import"./context.module.5c9b824a.js";import"./useButton.module.d49ae8b9.js";import"./VisuallyHidden.module.f92d86b2.js";import"./OverlayArrow.module.7a1828c9.js";import"./Collection.module.2044025e.js";import"./useTreeState.module.e27852da.js";import"./BodyPortal.51e49c52.js";const b="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K",d=n(g)`
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
`,L=()=>e(o,{children:"NavBar"}),Y=()=>e(o,{logo:!0,children:"Menu"}),H=()=>e(o,{logo:{alt:"custom alt",href:"/"}}),U=()=>e(o,{logo:{alt:"custom alt unlinked"}}),J=()=>e(o,{justifyContent:"center",children:e("strong",{children:"Centered Menu"})}),X=()=>t(o,{children:[e(a,{label:"Help"}),e(a,{label:"Info",icon:e(s,{})}),e(a,{style:{padding:"1rem"},icon:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K","aria-label":"Menu"})]}),W=()=>t(o,{children:[e(d,{label:"Menu",children:t(m,{children:[e("button",{children:"Example button"}),e("button",{children:"Another button"})]})}),e(d,{label:"Test menu",icon:e(s,{}),children:t(h,{children:[t(p,{"aria-label":"Items",children:[e(l,{id:"one",children:"Info 1"}),e(l,{id:"two",children:"Info 2"}),e(l,{id:"three",children:"Info 3"})]}),e(r,{id:"one",children:"First"}),e(r,{id:"two",children:"Second"}),e(r,{id:"three",children:"Third"})]})}),t(j,{children:[t(I,{label:"Help",children:[e(i,{children:"Open Guide"}),e(i,{children:"Contact Support"})]}),t(N,{"aria-label":"Test menu",icon:b,children:[e(i,{children:"Cool menu item"}),e(i,{children:"Really long menu item with a lot of text"}),e(M,{children:"Styled menu item"})]})]})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{H as AltTextLinkedLogo,U as AltTextNoLinkedLogo,X as Controls_NavBarButton,Y as LogoAndChildren,J as OverrideJustifyContent,L as Plain,W as PopoverAndMenu};
