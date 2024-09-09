import{s as e,a as o,j as i}from"./index.b2a8d8cc.js";import{T as r}from"./Tooltip.c7a6657d.js";import"./theme.6fc3e458.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.a135db62.js";import"./focusSafely.module.55fcac4c.js";import"./context.module.cc6e965d.js";import"./Info.e03ae4be.js";const m=e.div`
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
