import{s as e,a as o,j as r}from"./index.3de36e76.js";import{T as m}from"./Tooltip.feb95d93.js";import"./theme.4ade321c.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.648fb943.js";import"./context.module.2d6a64b7.js";import"./useButton.module.782b46db.js";import"./Info.22aa2acc.js";const n=e.div`
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
