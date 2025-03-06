import{s as e,a as o,j as r}from"./index.7e912bad.js";import{T as m}from"./Tooltip.f434a6a4.js";import"./theme.4d023e0a.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.d63fb94b.js";import"./context.module.7f9d6dbe.js";import"./useButton.module.80b4fcd2.js";import"./Info.02ea7a41.js";const n=e.div`
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
