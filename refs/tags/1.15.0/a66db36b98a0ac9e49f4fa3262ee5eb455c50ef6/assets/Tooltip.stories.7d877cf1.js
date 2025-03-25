import{s as e,a as o,j as r}from"./index.04903a84.js";import{T as m}from"./Tooltip.0ed47e0e.js";import"./theme.6864226e.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.2410b171.js";import"./context.module.b4edb34a.js";import"./useButton.module.c264ba19.js";import"./Info.d15719cf.js";const n=e.div`
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
