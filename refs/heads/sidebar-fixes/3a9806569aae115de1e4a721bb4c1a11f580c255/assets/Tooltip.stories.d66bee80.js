import{s as e,a as o,j as i}from"./index.be681636.js";import{T as r}from"./Tooltip.346b4a0c.js";import"./theme.64f96e43.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.2d657fee.js";import"./focusSafely.module.9b1fb895.js";import"./context.module.a9b03c48.js";import"./Info.cc0d08c3.js";const m=e.div`
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
