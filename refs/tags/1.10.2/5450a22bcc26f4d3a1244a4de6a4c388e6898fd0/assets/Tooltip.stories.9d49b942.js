import{s as e,a as o,j as i}from"./index.2f94ad0b.js";import{T as r}from"./Tooltip.79a9cef7.js";import"./theme.2fe80fd8.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.70a9028f.js";import"./focusSafely.module.71989e4d.js";import"./context.module.b48470d5.js";import"./Info.9ab08e8e.js";const m=e.div`
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
