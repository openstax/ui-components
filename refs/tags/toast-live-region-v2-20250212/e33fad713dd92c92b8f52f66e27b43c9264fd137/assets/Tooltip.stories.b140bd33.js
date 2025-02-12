import{s as e,a as o,j as r}from"./index.7adb08c3.js";import{T as m}from"./Tooltip.8d6baa92.js";import"./theme.c7880208.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.568759c5.js";import"./context.module.d8400951.js";import"./Hidden.module.a5775082.js";import"./useButton.module.dce0d8f2.js";import"./Info.b2c0a163.js";const n=e.div`
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
