import{s as e,a as o,j as i}from"./index.472bc33b.js";import{T as r}from"./Tooltip.77c2a421.js";import"./theme.7cea2114.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.60f557d6.js";import"./focusSafely.module.e0435f7f.js";import"./context.module.23bd5f65.js";import"./Info.61c62c62.js";const m=e.div`
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
