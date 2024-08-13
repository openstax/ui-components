import{s as e,a as o,j as i}from"./index.029a6614.js";import{T as r}from"./Tooltip.ea2a44c9.js";import"./theme.96c068a4.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.3ce2baad.js";import"./focusSafely.module.657101c1.js";import"./context.module.1bad0e5e.js";import"./Info.bfc3fcf3.js";const m=e.div`
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
