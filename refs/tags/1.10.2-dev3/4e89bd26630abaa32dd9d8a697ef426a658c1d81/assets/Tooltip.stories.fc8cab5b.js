import{s as e,a as o,j as i}from"./index.07f3ac88.js";import{T as r}from"./Tooltip.1c266b94.js";import"./theme.0e572517.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.7d72686c.js";import"./focusSafely.module.2f7ce911.js";import"./context.module.8cad4157.js";import"./Info.d16241a7.js";const m=e.div`
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
