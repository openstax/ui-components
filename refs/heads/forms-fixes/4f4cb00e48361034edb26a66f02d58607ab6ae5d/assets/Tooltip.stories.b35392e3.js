import{s as e,a as o,j as r}from"./index.d2b7e1af.js";import{T as m}from"./Tooltip.b5193e03.js";import"./theme.f138921f.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.75546c43.js";import"./context.module.23197c15.js";import"./useButton.module.64381ecb.js";import"./Info.a0e52576.js";const n=e.div`
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
