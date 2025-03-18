import{s as e,a as o,j as r}from"./index.ccc0dbf7.js";import{T as m}from"./Tooltip.75effa4a.js";import"./theme.3902300a.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.75b43e89.js";import"./context.module.85389306.js";import"./useButton.module.cad0a6d8.js";import"./Info.5ab727b6.js";const n=e.div`
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
