import{s as e,a as o,j as r}from"./index.9f90db4d.js";import{T as m}from"./Tooltip.54f94fd3.js";import"./theme.eb782948.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.51d3a720.js";import"./context.module.226bb646.js";import"./useButton.module.e7eb6b09.js";import"./Info.1acbbeeb.js";const n=e.div`
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
