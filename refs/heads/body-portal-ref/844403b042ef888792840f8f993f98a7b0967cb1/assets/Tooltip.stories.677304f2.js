import{s as e,a as o,j as i}from"./index.19e0fecb.js";import{T as r}from"./Tooltip.70efdd2a.js";import"./theme.78791aff.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.83b00f24.js";import"./focusSafely.module.7d6e3cff.js";import"./context.module.7bb5e667.js";import"./Info.ea5f1d7e.js";const m=e.div`
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
