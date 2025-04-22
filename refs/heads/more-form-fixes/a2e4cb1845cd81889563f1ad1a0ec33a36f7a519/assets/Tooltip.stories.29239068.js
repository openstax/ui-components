import{s as e,a as o,j as r}from"./index.6d68e8e0.js";import{T as m}from"./Tooltip.86e862b7.js";import"./theme.72d7bce0.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.394bb346.js";import"./context.module.bcbc041c.js";import"./useButton.module.232cbe65.js";import"./Info.4fd6e044.js";const n=e.div`
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
