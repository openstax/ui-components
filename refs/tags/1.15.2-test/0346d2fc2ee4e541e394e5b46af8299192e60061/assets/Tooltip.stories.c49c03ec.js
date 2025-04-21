import{s as e,a as o,j as r}from"./index.9c6a7386.js";import{T as m}from"./Tooltip.a6a7da22.js";import"./theme.f9ddeb4d.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.0cd4e4e2.js";import"./context.module.9624e326.js";import"./useButton.module.5cc231d6.js";import"./Info.2dfe622e.js";const n=e.div`
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
