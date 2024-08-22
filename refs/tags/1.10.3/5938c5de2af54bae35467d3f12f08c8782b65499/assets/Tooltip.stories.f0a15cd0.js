import{s as e,a as o,j as i}from"./index.5a7e9b17.js";import{T as r}from"./Tooltip.d767d058.js";import"./theme.f2ee44e7.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.6d60216b.js";import"./focusSafely.module.89692780.js";import"./context.module.6f291d7f.js";import"./Info.a86923cb.js";const m=e.div`
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
