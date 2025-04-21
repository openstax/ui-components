import{s as e,a as o,j as r}from"./index.37207b3f.js";import{T as m}from"./Tooltip.284b814d.js";import"./theme.19c845c6.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.e01b64d1.js";import"./context.module.c13434dd.js";import"./useButton.module.c809ce8e.js";import"./Info.864e39c8.js";const n=e.div`
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
