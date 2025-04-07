import{s as e,a as o,j as r}from"./index.0def020e.js";import{T as m}from"./Tooltip.1d6f5e85.js";import"./theme.00a415e3.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.23beaa47.js";import"./context.module.756113a8.js";import"./useButton.module.544ad40e.js";import"./Info.14901c4b.js";const n=e.div`
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
`,g=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default};
