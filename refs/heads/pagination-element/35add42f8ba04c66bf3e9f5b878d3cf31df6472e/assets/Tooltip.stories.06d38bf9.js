import{s as e,a as o,j as r}from"./index.adb103b6.js";import{T as m}from"./Tooltip.ff74f1ae.js";import"./theme.67c90849.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.01e76ad5.js";import"./context.module.1352d4ff.js";import"./useButton.module.273f767b.js";import"./Info.baabf768.js";const n=e.div`
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
