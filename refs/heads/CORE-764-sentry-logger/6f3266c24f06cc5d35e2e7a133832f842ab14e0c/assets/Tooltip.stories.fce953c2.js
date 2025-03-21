import{s as e,a as o,j as r}from"./index.c82e9722.js";import{T as m}from"./Tooltip.ac7c496b.js";import"./theme.52473b37.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.af455877.js";import"./context.module.6bb24aee.js";import"./useButton.module.7e38f064.js";import"./Info.902ce2bb.js";const n=e.div`
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
