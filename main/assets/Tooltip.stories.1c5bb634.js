import{s as e,a as o,j as r}from"./index.e1121c41.js";import{T as m}from"./Tooltip.4a44624f.js";import"./theme.e60eabc0.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.16c3a204.js";import"./context.module.ed0f9249.js";import"./useButton.module.07883b15.js";import"./Info.e6239522.js";const n=e.div`
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
