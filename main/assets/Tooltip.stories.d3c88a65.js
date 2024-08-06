import{s as e,a as o,j as i}from"./index.d946ceb7.js";import{T as r}from"./Tooltip.ca67c255.js";import"./theme.466d367f.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.4a5c8978.js";import"./context.module.c92214f5.js";import"./Info.b09bdccd.js";const n=e.div`
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
