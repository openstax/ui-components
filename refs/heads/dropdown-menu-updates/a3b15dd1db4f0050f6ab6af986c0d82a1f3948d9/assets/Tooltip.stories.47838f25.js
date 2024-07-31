import{s as e,a as o,j as i}from"./index.3043e4ed.js";import{T as r}from"./Tooltip.5e6d61f4.js";import"./theme.3da1f3f1.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.ba1cfd28.js";import"./context.module.413e1b5c.js";import"./Info.767b35b4.js";const n=e.div`
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
