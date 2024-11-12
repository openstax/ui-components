import{s as e,a as o,j as i}from"./index.66dfb7be.js";import{T as r}from"./Tooltip.7ed752be.js";import"./theme.fb75f9d7.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.8fa81aa5.js";import"./focusSafely.module.999e0ffb.js";import"./context.module.6e56b063.js";import"./Info.02e297cf.js";const m=e.div`
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
