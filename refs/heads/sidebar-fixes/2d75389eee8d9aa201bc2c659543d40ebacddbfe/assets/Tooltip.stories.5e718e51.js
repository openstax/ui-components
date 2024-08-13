import{s as e,a as o,j as i}from"./index.85c550ff.js";import{T as r}from"./Tooltip.ffb867b9.js";import"./theme.e63e1088.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.1c5a12b4.js";import"./focusSafely.module.df28f373.js";import"./context.module.ee7e2f16.js";import"./Info.0f5ed35e.js";const m=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,n=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,f=()=>o(m,{children:["right","top","bottom"].map(t=>i(n,{children:[o(r,{placement:t,children:"Tooltip content goes here."}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{f as Default};
