import{c}from"./theme.237d738d.js";import{s as i,a as e,j as t}from"./index.9e2a039d.js";import{N as a,P as m,a as I,b as n,c as g,d as u}from"./NavBarMenuButtons.2c9bc68a.js";import{I as s}from"./Info.2379228d.js";import{T as h,$ as p,d as l,e as d}from"./Tabs.57c9ddd4.js";import"./palette.15e4d008.js";import"./BodyPortal.dc59b9a2.js";import"./Dialog.module.1c40b0bb.js";import"./OverlayArrow.module.61735ad5.js";import"./context.module.d03e0ea4.js";import"./useButton.module.cc6ebde5.js";import"./Collection.module.dd92289f.js";const b="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K",r=i(g)`
  &:hover {
    svg path {
      fill: ${c.palette.lightBlue};
    }
  }
`,N=i(I)`
  padding: 1rem;
`,M=i(n)`
  color: ${c.palette.orange};
`,j=i.div`
  display: flex;
  height: 100%
`,o=i(u)`
  position: fixed;
  left: 2rem;
  top: 2rem;
  width: calc(100% - 36rem);
`,G=()=>e(o,{children:"NavBar"}),T=()=>e(o,{logo:!0,children:"Menu"}),z=()=>e(o,{logo:{alt:"custom alt",href:"/"}}),$=()=>e(o,{logo:{alt:"custom alt unlinked"}}),L=()=>e(o,{justifyContent:"center",children:e("strong",{children:"Centered Menu"})}),Y=()=>t(o,{children:[e(a,{label:"Help"}),e(a,{label:"Info",icon:e(s,{})}),e(a,{style:{padding:"1rem"},icon:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K","aria-label":"Menu"})]}),H=()=>t(o,{children:[e(r,{label:"Menu",children:t(m,{children:[e("button",{children:"Example button"}),e("button",{children:"Another button"})]})}),e(r,{label:"Test menu",icon:e(s,{}),children:t(h,{children:[t(p,{"aria-label":"Items",children:[e(l,{id:"one",children:"Info 1"}),e(l,{id:"two",children:"Info 2"}),e(l,{id:"three",children:"Info 3"})]}),e(d,{id:"one",children:"First"}),e(d,{id:"two",children:"Second"}),e(d,{id:"three",children:"Third"})]})}),t(j,{children:[t(I,{label:"Help",children:[e(n,{children:"Open Guide"}),e(n,{children:"Contact Support"})]}),t(N,{"aria-label":"Test menu",icon:b,children:[e(n,{children:"Cool menu item"}),e(n,{children:"Really long menu item with a lot of text"}),e(M,{children:"Styled menu item"})]})]})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{z as AltTextLinkedLogo,$ as AltTextNoLinkedLogo,Y as Controls_NavBarButton,T as LogoAndChildren,L as OverrideJustifyContent,G as Plain,H as PopoverAndMenu};
