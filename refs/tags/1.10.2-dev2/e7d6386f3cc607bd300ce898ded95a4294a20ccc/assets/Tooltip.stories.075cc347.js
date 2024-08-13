import{s as e,a as o,j as i}from"./index.3d148387.js";import{T as r}from"./Tooltip.b154fbc3.js";import"./theme.d76f2835.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.b9e8dd3a.js";import"./focusSafely.module.d31aa75a.js";import"./context.module.13958d8e.js";import"./Info.9a6a3820.js";const m=e.div`
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
