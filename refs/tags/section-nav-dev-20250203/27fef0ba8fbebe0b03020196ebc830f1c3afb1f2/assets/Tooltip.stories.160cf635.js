import{s as e,a as o,j as r}from"./index.adb3824b.js";import{T as m}from"./Tooltip.0a4a5483.js";import"./theme.bd0fead7.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.96c0329a.js";import"./context.module.8a6c92e2.js";import"./Hidden.module.0eacf102.js";import"./useButton.module.590035a4.js";import"./Info.0d4df870.js";const n=e.div`
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
