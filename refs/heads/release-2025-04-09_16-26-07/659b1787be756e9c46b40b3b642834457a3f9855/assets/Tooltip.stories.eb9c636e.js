import{s as e,a as o,j as r}from"./index.4dc8374d.js";import{T as m}from"./Tooltip.94900a72.js";import"./theme.4704fc27.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.c9f56038.js";import"./context.module.26473488.js";import"./useButton.module.eaa7eb64.js";import"./Info.33d06e90.js";const n=e.div`
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
