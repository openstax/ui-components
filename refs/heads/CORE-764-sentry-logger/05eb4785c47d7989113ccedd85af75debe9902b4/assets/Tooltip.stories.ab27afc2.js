import{s as e,a as o,j as r}from"./index.1658d0ff.js";import{T as m}from"./Tooltip.1fed0939.js";import"./theme.6b093367.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.b8c2a587.js";import"./context.module.9c47d877.js";import"./useButton.module.6a81afb6.js";import"./Info.45c64a54.js";const n=e.div`
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
