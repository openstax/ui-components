import{s as e,a as o,j as i}from"./index.80f778e7.js";import{T as r}from"./Tooltip.a176d5fb.js";import"./theme.b2800fef.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.06b1b703.js";import"./focusSafely.module.1a4eccca.js";import"./context.module.8c2ff808.js";import"./Info.921d7289.js";const m=e.div`
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
