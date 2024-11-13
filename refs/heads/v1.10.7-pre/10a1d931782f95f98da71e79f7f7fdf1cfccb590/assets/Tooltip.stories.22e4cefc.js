import{s as e,a as o,j as i}from"./index.bc30b5ed.js";import{T as r}from"./Tooltip.b6c15de7.js";import"./theme.f8fe8198.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.bc91dccf.js";import"./focusSafely.module.15542996.js";import"./context.module.7258508d.js";import"./Info.835a551e.js";const m=e.div`
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
