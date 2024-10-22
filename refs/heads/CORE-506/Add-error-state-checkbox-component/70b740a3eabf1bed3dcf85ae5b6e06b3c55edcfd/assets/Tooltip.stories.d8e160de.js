import{s as e,a as o,j as i}from"./index.ca5be0f1.js";import{T as r}from"./Tooltip.61752af1.js";import"./theme.be59c3c4.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.0f826f14.js";import"./focusSafely.module.324aa0b9.js";import"./context.module.22cbb0b1.js";import"./Info.be2b1289.js";const m=e.div`
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
