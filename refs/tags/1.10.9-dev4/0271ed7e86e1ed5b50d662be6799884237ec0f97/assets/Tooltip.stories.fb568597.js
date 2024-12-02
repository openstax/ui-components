import{s as e,a as o,j as i}from"./index.b4656bd5.js";import{T as r}from"./Tooltip.ada6bfd1.js";import"./theme.66638568.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.fb1c8e5d.js";import"./focusSafely.module.76cee6a9.js";import"./context.module.6d381773.js";import"./Info.54a4e17b.js";const m=e.div`
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
