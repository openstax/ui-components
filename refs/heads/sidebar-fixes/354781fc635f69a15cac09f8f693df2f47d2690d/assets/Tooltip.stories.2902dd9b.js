import{s as e,a as o,j as i}from"./index.3012ffb9.js";import{T as r}from"./Tooltip.c54d54c4.js";import"./theme.71eec472.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.71412295.js";import"./focusSafely.module.743974a8.js";import"./context.module.7c9209dd.js";import"./Info.ba6e626a.js";const m=e.div`
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
