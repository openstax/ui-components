import{s as e,a as o,j as i}from"./index.f350c878.js";import{T as r}from"./Tooltip.58cd18c2.js";import"./theme.b725fa60.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.f9c1b9d4.js";import"./focusSafely.module.11d247d0.js";import"./context.module.13429728.js";import"./Info.f03c0b97.js";const m=e.div`
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
