import{s as e,a as o,j as i}from"./index.703f0666.js";import{T as r}from"./Tooltip.4e7403d7.js";import"./theme.4cbb785b.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.71424d6a.js";import"./focusSafely.module.9f333e43.js";import"./context.module.2c9931c5.js";import"./Info.b3523a2e.js";const m=e.div`
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
