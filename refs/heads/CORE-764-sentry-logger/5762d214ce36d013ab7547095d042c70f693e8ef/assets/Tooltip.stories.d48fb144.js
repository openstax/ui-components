import{s as e,a as o,j as r}from"./index.72f770f4.js";import{T as m}from"./Tooltip.0a94164b.js";import"./theme.f80aeec3.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.453b89cf.js";import"./context.module.0fc03b23.js";import"./useButton.module.f4529245.js";import"./Info.36d59b42.js";const n=e.div`
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
