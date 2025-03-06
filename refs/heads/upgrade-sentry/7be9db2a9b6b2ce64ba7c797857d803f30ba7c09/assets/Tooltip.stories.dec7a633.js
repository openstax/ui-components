import{s as e,a as o,j as r}from"./index.d322d4ae.js";import{T as m}from"./Tooltip.c0319024.js";import"./theme.5f10927e.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.3a6cbaed.js";import"./context.module.c5bed6c7.js";import"./useButton.module.e7a4a6c5.js";import"./Info.a41c5f52.js";const n=e.div`
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
