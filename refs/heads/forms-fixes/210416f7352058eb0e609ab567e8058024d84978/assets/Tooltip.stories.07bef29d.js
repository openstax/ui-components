import{s as e,a as o,j as r}from"./index.7f6fe903.js";import{T as m}from"./Tooltip.6270b8cd.js";import"./theme.8a4542f1.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.86f53dee.js";import"./context.module.7db2e6c7.js";import"./useButton.module.bc299841.js";import"./Info.4259e434.js";const n=e.div`
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
