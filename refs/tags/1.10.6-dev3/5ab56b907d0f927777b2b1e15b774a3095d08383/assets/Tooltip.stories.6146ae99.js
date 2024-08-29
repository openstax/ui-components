import{s as e,a as o,j as i}from"./index.7adc4e41.js";import{T as r}from"./Tooltip.c9de3905.js";import"./theme.18a18449.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.66c91a56.js";import"./focusSafely.module.b8fc58d0.js";import"./context.module.ada5344c.js";import"./Info.3a5820b6.js";const m=e.div`
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
