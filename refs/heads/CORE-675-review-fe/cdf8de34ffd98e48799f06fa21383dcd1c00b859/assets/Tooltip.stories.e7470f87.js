import{s as e,a as o,j as r}from"./index.65ce4e2d.js";import{T as m}from"./Tooltip.97a41b5d.js";import"./theme.d9bb0adf.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.fd645f3c.js";import"./context.module.cb81d9b8.js";import"./useButton.module.9debfb93.js";import"./Info.e242f293.js";const n=e.div`
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
