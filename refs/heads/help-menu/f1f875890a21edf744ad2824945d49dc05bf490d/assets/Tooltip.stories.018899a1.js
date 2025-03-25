import{s as e,a as o,j as r}from"./index.421c3dd2.js";import{T as m}from"./Tooltip.5a760510.js";import"./theme.053495be.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.4a2ad612.js";import"./context.module.f193a991.js";import"./useButton.module.7ee677df.js";import"./Info.4812d384.js";const n=e.div`
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
