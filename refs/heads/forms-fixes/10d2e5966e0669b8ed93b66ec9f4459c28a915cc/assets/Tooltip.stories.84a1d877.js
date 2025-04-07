import{s as e,a as o,j as r}from"./index.9f927896.js";import{T as m}from"./Tooltip.fee02722.js";import"./theme.0132c22d.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.117d3df0.js";import"./context.module.fd63364d.js";import"./useButton.module.d3aeee7a.js";import"./Info.73b16942.js";const n=e.div`
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
