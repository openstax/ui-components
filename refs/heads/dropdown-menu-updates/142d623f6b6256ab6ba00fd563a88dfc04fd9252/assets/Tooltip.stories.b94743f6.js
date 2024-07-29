import{s as e,a as o,j as i}from"./index.22d09426.js";import{T as r}from"./Tooltip.a0e70d51.js";import"./theme.2fb09e35.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.48a1be8c.js";import"./context.module.1ef91ab0.js";import"./Info.4e8070d2.js";const n=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,m=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,w=()=>o(n,{children:["right","top","bottom"].map(t=>i(m,{children:[o(r,{placement:t,children:"Tooltip content goes here."}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};
