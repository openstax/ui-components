import{s as e,a as o,j as i}from"./index.5c4b197b.js";import{T as r}from"./Tooltip.84510ff6.js";import"./theme.6e056fed.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.dd8890b5.js";import"./focusSafely.module.ebed06a9.js";import"./context.module.8bae71a6.js";import"./Info.bea6fd37.js";const m=e.div`
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
