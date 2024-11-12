import{s as e,a as o,j as i}from"./index.56892473.js";import{T as r}from"./Tooltip.c2e63ac7.js";import"./theme.a04e998e.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.91db7bc5.js";import"./focusSafely.module.82d7c88e.js";import"./context.module.0bfdf56a.js";import"./Info.049c8305.js";const m=e.div`
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
