import{s as e,a as o,j as r}from"./index.d4bf6f6b.js";import{T as m}from"./Tooltip.949316e1.js";import"./theme.52d30849.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.b180a009.js";import"./context.module.8ff13914.js";import"./useButton.module.c2f72db2.js";import"./Info.93e926df.js";const n=e.div`
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
