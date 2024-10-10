import{s as e,a as o,j as i}from"./index.2ecd1c91.js";import{T as r}from"./Tooltip.81844bcb.js";import"./theme.dc4e28f0.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.34b5595c.js";import"./focusSafely.module.8bfda9c4.js";import"./context.module.e26f7530.js";import"./Info.9eb43422.js";const m=e.div`
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
