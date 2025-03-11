import{s as e,a as o,j as r}from"./index.7c4852f2.js";import{T as m}from"./Tooltip.e9f0942e.js";import"./theme.a8cbb38f.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.29be92e0.js";import"./context.module.ca6ce86b.js";import"./useButton.module.67245ef3.js";import"./Info.6747e125.js";const n=e.div`
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
