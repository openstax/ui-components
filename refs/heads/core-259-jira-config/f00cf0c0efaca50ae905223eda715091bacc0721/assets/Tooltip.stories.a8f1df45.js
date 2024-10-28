import{s as e,a as o,j as i}from"./index.643303b4.js";import{T as r}from"./Tooltip.9034eda4.js";import"./theme.6feb31b4.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.c87470a6.js";import"./focusSafely.module.1f0bacdd.js";import"./context.module.29649597.js";import"./Info.c603e8b3.js";const m=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,n=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,f=()=>o(m,{children:["right","top","bottom"].map(t=>i(n,{children:[o(r,{placement:t,children:"Tooltip content goes here."}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{f as Default};
