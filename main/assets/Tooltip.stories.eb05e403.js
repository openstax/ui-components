import{s as e,a as o,j as r}from"./index.db0317c6.js";import{T as m}from"./Tooltip.978590d7.js";import"./theme.11661764.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.d105a73d.js";import"./context.module.340ae0da.js";import"./useButton.module.9b1836e5.js";import"./Info.a64bb908.js";const n=e.div`
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
