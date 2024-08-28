import{s as e,a as o,j as i}from"./index.66d9f391.js";import{T as r}from"./Tooltip.71f96efb.js";import"./theme.0311f00b.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.597b121f.js";import"./focusSafely.module.7b71a959.js";import"./context.module.25d6573d.js";import"./Info.36c0be75.js";const m=e.div`
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
