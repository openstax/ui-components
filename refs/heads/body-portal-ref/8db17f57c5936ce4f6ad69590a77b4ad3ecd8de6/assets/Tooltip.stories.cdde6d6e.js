import{s as e,a as o,j as i}from"./index.80cbb35d.js";import{T as r}from"./Tooltip.c611c6b7.js";import"./theme.6ce78390.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.6362e7d7.js";import"./focusSafely.module.93adf0d7.js";import"./context.module.fbd899c7.js";import"./Info.11907d47.js";const m=e.div`
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
