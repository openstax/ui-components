import{s as e,a as o,j as r}from"./index.a65d1ea5.js";import{T as m}from"./Tooltip.60c47834.js";import"./theme.ee87677b.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.873fe86e.js";import"./context.module.b64e52e9.js";import"./useButton.module.a556efec.js";import"./Info.ef399057.js";const n=e.div`
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
