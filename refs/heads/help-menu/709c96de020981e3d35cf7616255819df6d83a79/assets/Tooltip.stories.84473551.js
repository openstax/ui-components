import{s as e,a as o,j as r}from"./index.f09d4694.js";import{T as m}from"./Tooltip.823b01a6.js";import"./theme.e36af20f.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.1c35a28b.js";import"./context.module.98926726.js";import"./useButton.module.bc2a963e.js";import"./Info.ca27969a.js";const n=e.div`
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
