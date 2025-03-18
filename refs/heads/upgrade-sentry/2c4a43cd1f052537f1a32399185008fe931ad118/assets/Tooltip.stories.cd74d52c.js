import{s as e,a as o,j as r}from"./index.54adc06d.js";import{T as m}from"./Tooltip.4665f1f5.js";import"./theme.8fa202b5.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.c231e8c1.js";import"./context.module.23fcf398.js";import"./useButton.module.9d20b895.js";import"./Info.45c31655.js";const n=e.div`
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
