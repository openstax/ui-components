import{s as e,a as o,j as i}from"./index.d8193f44.js";import{T as r}from"./Tooltip.cef71fde.js";import"./theme.49368adb.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.987d3214.js";import"./focusSafely.module.65f8e4ea.js";import"./context.module.1ec05b64.js";import"./Info.0fb2c1a2.js";const m=e.div`
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
