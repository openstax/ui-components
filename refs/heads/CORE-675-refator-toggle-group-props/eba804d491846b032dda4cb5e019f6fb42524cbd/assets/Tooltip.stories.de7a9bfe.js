import{s as e,a as o,j as r}from"./index.a3530c27.js";import{T as m}from"./Tooltip.5e8ab23c.js";import"./theme.8724e1ea.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.74f78d26.js";import"./context.module.b6f6c385.js";import"./useButton.module.0b059335.js";import"./Info.a9b62ad7.js";const n=e.div`
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
