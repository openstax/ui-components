import{s as e,a as o,j as i}from"./index.e7440c6d.js";import{T as r}from"./Tooltip.25b7f1de.js";import"./theme.8b40f719.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.96de75fb.js";import"./focusSafely.module.e29284d8.js";import"./context.module.17f02a4e.js";import"./Info.391e80aa.js";const m=e.div`
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
