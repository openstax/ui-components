import{s as e,a as o,j as i}from"./index.041d0a60.js";import{T as r}from"./Tooltip.e8476f07.js";import"./theme.c1cfd40e.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.44a066d5.js";import"./focusSafely.module.c14bd131.js";import"./context.module.20f2eb57.js";import"./Info.ed113384.js";const m=e.div`
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
