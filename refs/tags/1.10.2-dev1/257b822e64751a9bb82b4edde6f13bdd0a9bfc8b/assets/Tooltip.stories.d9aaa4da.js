import{s as e,a as o,j as i}from"./index.3afea343.js";import{T as r}from"./Tooltip.215b8246.js";import"./theme.ca6c9e7c.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.0d209ee2.js";import"./focusSafely.module.815c5fee.js";import"./context.module.abacec58.js";import"./Info.1688bc80.js";const m=e.div`
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
