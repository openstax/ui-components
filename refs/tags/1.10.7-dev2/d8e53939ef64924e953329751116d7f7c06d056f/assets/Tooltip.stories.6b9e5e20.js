import{s as e,a as o,j as i}from"./index.2cb5524c.js";import{T as r}from"./Tooltip.ba3c1b72.js";import"./theme.5b4c592d.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.8ef5b83a.js";import"./focusSafely.module.c7cdd5b1.js";import"./context.module.97ea21cf.js";import"./Info.23bba247.js";const m=e.div`
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
