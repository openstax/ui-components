import{s as e,a as o,j as r}from"./index.a8c6b030.js";import{T as m}from"./Tooltip.7edfd8c7.js";import"./theme.d4b5e010.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.112f66bc.js";import"./context.module.44ac2d6f.js";import"./useButton.module.4016024e.js";import"./Info.aac32841.js";const n=e.div`
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
