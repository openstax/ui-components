import{s as e,a as o,j as i}from"./index.3b0009bd.js";import{T as r}from"./Tooltip.01571323.js";import"./theme.3e0fa88e.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.da99b176.js";import"./focusSafely.module.a46de9e1.js";import"./context.module.4853f354.js";import"./Info.01c482a8.js";const m=e.div`
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