import{s as e,a as o,j as i}from"./index.15efebc5.js";import{T as r}from"./Tooltip.e691ef1e.js";import"./theme.b15327d7.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.d982f49f.js";import"./focusSafely.module.8c735c82.js";import"./context.module.7431fa97.js";import"./Info.a1df16e7.js";const m=e.div`
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
