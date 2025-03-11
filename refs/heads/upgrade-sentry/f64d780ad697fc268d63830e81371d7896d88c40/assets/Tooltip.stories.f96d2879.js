import{s as e,a as o,j as r}from"./index.8409d8fe.js";import{T as m}from"./Tooltip.206c8f63.js";import"./theme.98004380.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.a4bcb6d8.js";import"./context.module.704a1da4.js";import"./useButton.module.2bf132a2.js";import"./Info.2de96ed2.js";const n=e.div`
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
