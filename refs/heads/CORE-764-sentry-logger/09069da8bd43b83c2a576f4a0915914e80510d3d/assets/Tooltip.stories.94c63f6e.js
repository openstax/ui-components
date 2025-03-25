import{s as e,a as o,j as r}from"./index.5e11718c.js";import{T as m}from"./Tooltip.36f7dc7b.js";import"./theme.2c5db1d3.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.7c8b0f40.js";import"./context.module.4ed32ea3.js";import"./useButton.module.0454b8a7.js";import"./Info.0828861b.js";const n=e.div`
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
