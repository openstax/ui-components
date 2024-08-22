import{s as e,a as o,j as i}from"./index.dd572cb5.js";import{T as r}from"./Tooltip.353d4a36.js";import"./theme.5b7cb9a5.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.38284a40.js";import"./focusSafely.module.b9b9ee4d.js";import"./context.module.bcb8769f.js";import"./Info.3f328057.js";const m=e.div`
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
