import{s as e,a as o,j as r}from"./index.6311e692.js";import{T as m}from"./Tooltip.8a2ebbb6.js";import"./theme.eb75eac4.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.d46f9749.js";import"./context.module.e7c01591.js";import"./Hidden.module.8f8e3ef0.js";import"./useButton.module.5ef4911e.js";import"./Info.acaaa249.js";const n=e.div`
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
