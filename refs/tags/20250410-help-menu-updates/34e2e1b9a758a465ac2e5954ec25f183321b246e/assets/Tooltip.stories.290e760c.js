import{s as e,a as o,j as r}from"./index.7c656a9f.js";import{T as m}from"./Tooltip.38a2427b.js";import"./theme.c68a3012.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.14cdc101.js";import"./context.module.50ce8132.js";import"./useButton.module.299a379e.js";import"./Info.93da7d17.js";const n=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,d=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,g=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default};
