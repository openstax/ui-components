import{s as e,a as o,j as i}from"./index.6ebdf6ab.js";import{T as r}from"./Tooltip.72c7f8da.js";import"./theme.502056de.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.277ac1a6.js";import"./focusSafely.module.daf75532.js";import"./context.module.38678099.js";import"./Info.24df5005.js";const m=e.div`
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
