import{s as e,a as o,j as r}from"./index.602bb277.js";import{T as m}from"./Tooltip.b62930ae.js";import"./theme.36c8ac24.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.971f8047.js";import"./focusSafely.module.4a68d4f3.js";import"./context.module.55958d9e.js";import"./Info.918c1fe2.js";const n=e.div`
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
