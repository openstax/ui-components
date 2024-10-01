import{s as e,a as o,j as i}from"./index.46d972aa.js";import{T as r}from"./Tooltip.b8b2191b.js";import"./theme.b7a4b84e.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.c6a3f899.js";import"./focusSafely.module.7f6f337a.js";import"./context.module.b4ac17ba.js";import"./Info.032faaeb.js";const m=e.div`
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
