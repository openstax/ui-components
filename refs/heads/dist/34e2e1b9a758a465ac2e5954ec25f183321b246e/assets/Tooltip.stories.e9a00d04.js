import{s as e,a as o,j as r}from"./index.68de9e9d.js";import{T as m}from"./Tooltip.e9f96be2.js";import"./theme.7350b22e.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.2a4d951c.js";import"./context.module.f80f659d.js";import"./useButton.module.2e3e9929.js";import"./Info.3f152d31.js";const n=e.div`
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
