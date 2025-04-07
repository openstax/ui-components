import{s as e,a as o,j as r}from"./index.1fe52fd1.js";import{T as m}from"./Tooltip.7d6f7af2.js";import"./theme.3b9f2548.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.3008b355.js";import"./context.module.7c4b0fb9.js";import"./useButton.module.8d67609a.js";import"./Info.5d638cdf.js";const n=e.div`
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
