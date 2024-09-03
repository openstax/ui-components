import{s as e,a as o,j as i}from"./index.306bf6a6.js";import{T as r}from"./Tooltip.d54bb829.js";import"./theme.2dc685db.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.0d944d4b.js";import"./focusSafely.module.60d14cdc.js";import"./context.module.5aefc454.js";import"./Info.664969ee.js";const m=e.div`
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
