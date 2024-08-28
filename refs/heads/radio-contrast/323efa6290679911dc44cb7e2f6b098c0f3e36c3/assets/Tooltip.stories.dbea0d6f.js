import{s as e,a as o,j as i}from"./index.26cbc119.js";import{T as r}from"./Tooltip.7614fea9.js";import"./theme.6423b43d.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.19faa043.js";import"./focusSafely.module.d6edb272.js";import"./context.module.e6aa4c0c.js";import"./Info.e708210d.js";const m=e.div`
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
