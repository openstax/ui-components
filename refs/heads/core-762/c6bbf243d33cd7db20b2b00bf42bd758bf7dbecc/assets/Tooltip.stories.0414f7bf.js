import{s as e,a as o,j as r}from"./index.0bc7eaa6.js";import{T as m}from"./Tooltip.fdc676d9.js";import"./theme.c64d2254.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.3448a0ae.js";import"./context.module.df77b4f9.js";import"./Hidden.module.17aa5339.js";import"./useButton.module.8853fc49.js";import"./Info.2e11455b.js";const n=e.div`
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
