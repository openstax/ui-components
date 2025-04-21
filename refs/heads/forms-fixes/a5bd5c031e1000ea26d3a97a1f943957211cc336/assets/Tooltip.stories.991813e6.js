import{s as e,a as o,j as r}from"./index.ba54a6f4.js";import{T as m}from"./Tooltip.6dae715b.js";import"./theme.151da14b.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.3e82ba8a.js";import"./context.module.bca3e26a.js";import"./useButton.module.8c7552e7.js";import"./Info.cc997052.js";const n=e.div`
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
