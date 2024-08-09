import{s as e,a as o,j as i}from"./index.c12c6b71.js";import{T as r}from"./Tooltip.6c740132.js";import"./theme.3a9da181.js";import"./palette.15e4d008.js";import"./Button.module.5144c528.js";import"./context.module.044c4642.js";import"./useFocusRing.module.5a970fce.js";import"./OverlayArrow.module.e2a3c1b5.js";import"./Info.55357163.js";const m=e.div`
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
`,g=()=>o(m,{children:["right","top","bottom"].map(t=>i(n,{children:[o(r,{placement:t,children:"Tooltip content goes here."}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default};
