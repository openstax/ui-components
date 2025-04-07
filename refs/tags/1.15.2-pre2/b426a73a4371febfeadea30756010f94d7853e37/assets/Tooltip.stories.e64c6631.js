import{s as e,a as o,j as r}from"./index.5e3f1571.js";import{T as m}from"./Tooltip.c590b018.js";import"./theme.b4f22e2f.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.10638770.js";import"./context.module.6c3fe25f.js";import"./useButton.module.c9a13927.js";import"./Info.eda3300a.js";const n=e.div`
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
