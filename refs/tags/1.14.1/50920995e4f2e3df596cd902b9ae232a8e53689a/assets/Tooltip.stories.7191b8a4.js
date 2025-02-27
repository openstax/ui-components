import{s as e,a as o,j as r}from"./index.b6d3e59b.js";import{T as m}from"./Tooltip.3a3c7d57.js";import"./theme.9c9f69ec.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.0fb1973e.js";import"./context.module.5755ee13.js";import"./useButton.module.6b4e64ed.js";import"./Info.d0e33a1c.js";const n=e.div`
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
