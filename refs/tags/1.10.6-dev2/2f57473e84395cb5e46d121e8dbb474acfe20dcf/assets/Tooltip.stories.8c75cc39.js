import{s as e,a as o,j as i}from"./index.150d903d.js";import{T as r}from"./Tooltip.6ff948e0.js";import"./theme.e822521e.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.32e80c38.js";import"./focusSafely.module.685d6009.js";import"./context.module.53d3fe3a.js";import"./Info.2d901528.js";const m=e.div`
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
