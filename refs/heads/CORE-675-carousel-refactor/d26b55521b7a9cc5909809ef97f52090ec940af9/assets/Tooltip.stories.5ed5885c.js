import{s as e,a as o,j as r}from"./index.b8f03196.js";import{T as m}from"./Tooltip.aff3161d.js";import"./theme.d553a56d.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.32d5bf76.js";import"./context.module.3f75ddd5.js";import"./Hidden.module.6436f3b0.js";import"./useButton.module.c9435f91.js";import"./Info.f33bbe8a.js";const n=e.div`
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
`,h=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{h as Default};
