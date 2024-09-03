import{s as e,a as o,j as i}from"./index.043a8ba9.js";import{T as r}from"./Tooltip.17c340fc.js";import"./theme.ba5e7596.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.61617a3b.js";import"./focusSafely.module.6d012b0d.js";import"./context.module.de60063b.js";import"./Info.2dd6071e.js";const m=e.div`
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
