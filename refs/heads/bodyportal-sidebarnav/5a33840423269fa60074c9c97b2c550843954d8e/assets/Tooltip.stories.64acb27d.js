import{s as e,a as o,j as i}from"./index.e82e894c.js";import{T as r}from"./Tooltip.29feaf76.js";import"./theme.50138889.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.7d06e037.js";import"./focusSafely.module.912049a4.js";import"./context.module.d961cb6b.js";import"./Info.1d7c6f37.js";const m=e.div`
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
