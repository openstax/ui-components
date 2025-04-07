import{s as e,a as o,j as r}from"./index.42ac0c1e.js";import{T as m}from"./Tooltip.e5cccbf5.js";import"./theme.a24d6312.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.28184022.js";import"./context.module.cf15fa30.js";import"./useButton.module.c582f78e.js";import"./Info.fddbb76d.js";const n=e.div`
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
