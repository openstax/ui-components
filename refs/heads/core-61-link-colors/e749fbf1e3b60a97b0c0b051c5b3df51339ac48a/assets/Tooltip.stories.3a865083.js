import{s as e,a as o,j as i}from"./index.f97136cc.js";import{T as r}from"./Tooltip.845c2cb0.js";import"./theme.603e6fc9.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.0862972c.js";import"./focusSafely.module.37fa09e3.js";import"./context.module.cfc85b7c.js";import"./Info.0b25b366.js";const m=e.div`
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
