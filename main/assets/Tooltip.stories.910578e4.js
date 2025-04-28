import{s as e,a as o,j as r}from"./index.8ec087ea.js";import{T as m}from"./Tooltip.e607e6b7.js";import"./theme.e9f3b33a.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.5526dcaf.js";import"./context.module.29cc6323.js";import"./useButton.module.08eafea0.js";import"./Info.869c7ee3.js";const n=e.div`
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
