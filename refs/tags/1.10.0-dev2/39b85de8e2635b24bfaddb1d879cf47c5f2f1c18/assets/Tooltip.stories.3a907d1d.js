import{s as e,a as o,j as i}from"./index.d6fac028.js";import{T as r}from"./Tooltip.f8edf76c.js";import"./theme.7681647e.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.f2f328ca.js";import"./context.module.9a763501.js";import"./Info.6826d135.js";const n=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,m=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,w=()=>o(n,{children:["right","top","bottom"].map(t=>i(m,{children:[o(r,{placement:t,children:"Tooltip content goes here."}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};
