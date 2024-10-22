import{s as e,a as o,j as i}from"./index.c1b3aa24.js";import{T as r}from"./Tooltip.6012cc5e.js";import"./theme.07cf6cc1.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.fbb5d999.js";import"./focusSafely.module.3764b933.js";import"./context.module.d28ee879.js";import"./Info.118acf49.js";const m=e.div`
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
