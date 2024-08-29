import{s as e,a as o,j as i}from"./index.a9f07d77.js";import{T as r}from"./Tooltip.9a6f44ad.js";import"./theme.095ccc43.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.5033c58f.js";import"./focusSafely.module.d07b08d9.js";import"./context.module.88f937e7.js";import"./Info.905d0bf4.js";const m=e.div`
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
