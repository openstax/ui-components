import{s as e,a as o,j as i}from"./index.2d01b0d2.js";import{T as r}from"./Tooltip.e2a788ce.js";import"./theme.6341794f.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.c9e4cd37.js";import"./focusSafely.module.e6673a6f.js";import"./context.module.1bed84c6.js";import"./Info.1bb84b5b.js";const m=e.div`
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
