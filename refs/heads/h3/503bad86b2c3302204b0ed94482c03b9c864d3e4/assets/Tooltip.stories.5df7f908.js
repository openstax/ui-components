import{s as e,a as o,j as i}from"./index.f5adb5b8.js";import{T as r}from"./Tooltip.81decda5.js";import"./theme.7c4e67ce.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.08068b49.js";import"./focusSafely.module.a39af407.js";import"./context.module.a9614b73.js";import"./Info.c3b9cf74.js";const m=e.div`
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
