import{s as e,a as o,j as r}from"./index.f6407646.js";import{T as m}from"./Tooltip.325f1b2a.js";import"./theme.b1569579.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.b0c27bf1.js";import"./context.module.9b8881af.js";import"./useButton.module.40085501.js";import"./Info.fac7f145.js";const n=e.div`
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
