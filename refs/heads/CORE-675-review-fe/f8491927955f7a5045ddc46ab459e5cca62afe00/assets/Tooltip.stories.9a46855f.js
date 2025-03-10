import{s as e,a as o,j as r}from"./index.e27b1b36.js";import{T as m}from"./Tooltip.e56a8d97.js";import"./theme.77d2fe3c.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.3f1611fe.js";import"./context.module.57f4ebfa.js";import"./useButton.module.de9279ac.js";import"./Info.09e886d0.js";const n=e.div`
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
