import{s as e,a as o,j as r}from"./index.21e3657a.js";import{T as m}from"./Tooltip.97c4a434.js";import"./theme.0a759f82.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.2013dc1b.js";import"./context.module.a1df228b.js";import"./useButton.module.73fabe67.js";import"./Info.f19d6a80.js";const n=e.div`
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
