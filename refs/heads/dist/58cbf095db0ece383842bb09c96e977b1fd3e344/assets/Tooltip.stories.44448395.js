import{s as e,a as o,j as r}from"./index.321a2563.js";import{T as m}from"./Tooltip.b34768ae.js";import"./theme.33e0228f.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.33cbeeca.js";import"./context.module.ffe26e00.js";import"./useButton.module.5294b8b9.js";import"./Info.60175dc2.js";const n=e.div`
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
