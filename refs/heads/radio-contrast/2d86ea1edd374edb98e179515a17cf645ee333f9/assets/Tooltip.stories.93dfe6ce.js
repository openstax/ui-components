import{s as e,a as o,j as i}from"./index.09151c94.js";import{T as r}from"./Tooltip.f3c09ad0.js";import"./theme.971b19dd.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.a5c8b3d8.js";import"./focusSafely.module.a09bebde.js";import"./context.module.bbb78e88.js";import"./Info.0315a4b4.js";const m=e.div`
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
