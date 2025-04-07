import{s as e,a as o,j as r}from"./index.1c2ced63.js";import{T as m}from"./Tooltip.c51bc602.js";import"./theme.c4c799fb.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.39b16b36.js";import"./context.module.e1ba5576.js";import"./useButton.module.0d07ee4b.js";import"./Info.f3b493eb.js";const n=e.div`
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
