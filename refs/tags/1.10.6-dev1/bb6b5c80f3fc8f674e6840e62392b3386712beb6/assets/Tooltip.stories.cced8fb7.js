import{s as e,a as o,j as i}from"./index.d878c4e5.js";import{T as r}from"./Tooltip.3b176855.js";import"./theme.a7a67b7e.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.1e6a9133.js";import"./focusSafely.module.acb075c8.js";import"./context.module.08934d4f.js";import"./Info.a7e31fc5.js";const m=e.div`
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
