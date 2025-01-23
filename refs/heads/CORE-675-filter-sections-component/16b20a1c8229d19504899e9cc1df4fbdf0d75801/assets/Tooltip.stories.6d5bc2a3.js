import{s as e,a as o,j as r}from"./index.1b9b4ac1.js";import{T as m}from"./Tooltip.d4f6d425.js";import"./theme.aa5cf5ba.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.9e2e5740.js";import"./context.module.bd5d5f40.js";import"./Hidden.module.c899cf57.js";import"./useButton.module.99fa2919.js";import"./Info.a5b1960d.js";const n=e.div`
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
`,h=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{h as Default};
