import{s as e,a as o,j as i}from"./index.2120f737.js";import{T as r}from"./Tooltip.f5c9ae73.js";import"./theme.812194fb.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.71bd83f7.js";import"./focusSafely.module.9190f177.js";import"./context.module.d6637155.js";import"./Info.0e923663.js";const m=e.div`
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
