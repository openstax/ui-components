import{s as e,a as o,j as i}from"./index.da1c4242.js";import{T as r}from"./Tooltip.9d66c3a6.js";import"./theme.ba7e5a80.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.a9d997fd.js";import"./focusSafely.module.20778e4e.js";import"./context.module.d92a133c.js";import"./Info.fbf8c761.js";const m=e.div`
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
