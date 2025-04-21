import{s as e,a as o,j as r}from"./index.53a81f5b.js";import{T as m}from"./Tooltip.150afb96.js";import"./theme.c23a68d9.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.400554d1.js";import"./context.module.0f893f80.js";import"./useButton.module.0df5f773.js";import"./Info.0c80093e.js";const n=e.div`
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
