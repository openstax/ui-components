import{s as e,a as o,j as i}from"./index.8b8509b6.js";import{T as r}from"./Tooltip.6f5b19ca.js";import"./theme.0a1eaf15.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.5caccc56.js";import"./focusSafely.module.db157cdf.js";import"./context.module.e7b96665.js";import"./Info.121452c3.js";const m=e.div`
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
