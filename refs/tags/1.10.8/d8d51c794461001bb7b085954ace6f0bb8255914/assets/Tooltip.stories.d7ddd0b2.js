import{s as e,a as o,j as i}from"./index.ee7cf99b.js";import{T as r}from"./Tooltip.e9112bf6.js";import"./theme.0cc7d32d.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.80aa1d0a.js";import"./focusSafely.module.93898310.js";import"./context.module.b6a2084f.js";import"./Info.c04b974f.js";const m=e.div`
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
