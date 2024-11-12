import{s as e,a as o,j as i}from"./index.fa345119.js";import{T as r}from"./Tooltip.86088077.js";import"./theme.823fe688.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.efe9891e.js";import"./focusSafely.module.bc4a327c.js";import"./context.module.36170295.js";import"./Info.55e24332.js";const m=e.div`
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
