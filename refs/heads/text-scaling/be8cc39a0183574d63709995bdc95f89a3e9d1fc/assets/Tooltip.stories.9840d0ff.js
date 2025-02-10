import{s as e,a as o,j as r}from"./index.8ff9e0cf.js";import{T as m}from"./Tooltip.cd944473.js";import"./theme.5b6f0461.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.42ebf838.js";import"./context.module.aefde34a.js";import"./Hidden.module.85837774.js";import"./useButton.module.accd8fd1.js";import"./Info.b0c320da.js";const n=e.div`
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
