import{s as e,a as o,j as r}from"./index.e65b35b3.js";import{T as m}from"./Tooltip.102ff6ea.js";import"./theme.5b878526.js";import"./palette.15e4d008.js";import"./Button.module.f8b2332b.js";import"./useFocusRing.module.c590aaf8.js";import"./context.module.fdd51b68.js";import"./useButton.module.ca25e792.js";import"./OverlayArrow.module.046828a0.js";import"./Info.86304890.js";const n=e.div`
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
`,x=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default};
