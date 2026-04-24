import{s as e,a as o,j as r}from"./index.36f5dfba.js";import{T as m}from"./Tooltip.0a1352e9.js";import"./theme.1b1f074d.js";import"./palette.5e342580.js";import"./Button.module.9fd0a508.js";import"./useFocusRing.module.0f4434a8.js";import"./context.module.e7d75cc4.js";import"./useButton.module.d5dc0645.js";import"./OverlayArrow.module.dad026c2.js";import"./Info.681efd86.js";const n=e.div`
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
`,x=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default};
