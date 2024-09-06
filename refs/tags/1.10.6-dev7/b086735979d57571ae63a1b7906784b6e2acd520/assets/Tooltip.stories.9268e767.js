import{s as e,a as o,j as i}from"./index.707a9320.js";import{T as r}from"./Tooltip.b8a4414a.js";import"./theme.d04dcb0d.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.aacf4626.js";import"./focusSafely.module.9c0a03c2.js";import"./context.module.dda96eab.js";import"./Info.e603b73b.js";const m=e.div`
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
