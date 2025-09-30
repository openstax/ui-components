import{s as e,a as o,j as r}from"./index.64eca7f9.js";import{T as m}from"./Tooltip.b2e98352.js";import"./theme.fb46484b.js";import"./palette.15e4d008.js";import"./Button.module.8055a418.js";import"./useFocusRing.module.c45c12b7.js";import"./context.module.0a16dcb7.js";import"./useButton.module.732dc45d.js";import"./OverlayArrow.module.4989e243.js";import"./Info.0e25a6a8.js";const n=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,d=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,x=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default};
