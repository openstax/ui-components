import{s as e,a as o,j as r}from"./index.1725ba47.js";import{T as m}from"./Tooltip.f7b23b8f.js";import"./theme.9e7aa81e.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.cb573b65.js";import"./context.module.17a0d507.js";import"./useButton.module.45261402.js";import"./Info.3d365c71.js";const n=e.div`
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
