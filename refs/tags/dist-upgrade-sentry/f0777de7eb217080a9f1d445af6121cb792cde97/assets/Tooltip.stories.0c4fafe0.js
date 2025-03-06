import{s as e,a as o,j as r}from"./index.26578956.js";import{T as m}from"./Tooltip.720f20f1.js";import"./theme.51535ca9.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.d69496e8.js";import"./context.module.0a436a08.js";import"./useButton.module.7e046039.js";import"./Info.e95a05b2.js";const n=e.div`
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
