import{s as e,a as o,j as r}from"./index.a1f82bcb.js";import{T as m}from"./Tooltip.60721934.js";import"./theme.12d25bef.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.d9745d05.js";import"./context.module.4ef7588e.js";import"./useButton.module.b3c93051.js";import"./Info.f1946886.js";const n=e.div`
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
