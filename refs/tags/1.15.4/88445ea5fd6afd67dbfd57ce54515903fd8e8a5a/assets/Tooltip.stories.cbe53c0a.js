import{s as e,a as o,j as r}from"./index.227eb4a7.js";import{T as m}from"./Tooltip.80dafe09.js";import"./theme.0f1f64fc.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.888dbaed.js";import"./context.module.f0e3f31c.js";import"./useButton.module.feb4ab3a.js";import"./Info.79685e50.js";const n=e.div`
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
