import{s as e,a as o,j as i}from"./index.0d250b5c.js";import{T as r}from"./Tooltip.e4fe3edd.js";import"./theme.ae0e9f70.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.87285495.js";import"./focusSafely.module.48a41d06.js";import"./context.module.0e5badad.js";import"./Info.9a72d8d4.js";const m=e.div`
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
