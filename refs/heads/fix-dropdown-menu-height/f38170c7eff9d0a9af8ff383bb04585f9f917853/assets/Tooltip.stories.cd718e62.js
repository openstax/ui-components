import{s as e,a as o,j as i}from"./index.d012f9c5.js";import{T as r}from"./Tooltip.215b4a61.js";import"./theme.7f0b2a10.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.4482f739.js";import"./focusSafely.module.a2ecb629.js";import"./context.module.e94045d9.js";import"./Info.2981133f.js";const m=e.div`
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
