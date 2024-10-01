import{s as e,a as o,j as i}from"./index.4ecba276.js";import{T as r}from"./Tooltip.4938ca89.js";import"./theme.8e8d162f.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.c33d1f47.js";import"./focusSafely.module.ee363900.js";import"./context.module.5160584b.js";import"./Info.55cf2893.js";const m=e.div`
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
