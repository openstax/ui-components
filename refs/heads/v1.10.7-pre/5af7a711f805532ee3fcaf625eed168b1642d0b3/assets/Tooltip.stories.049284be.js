import{s as e,a as o,j as r}from"./index.faf95f15.js";import{T as m}from"./Tooltip.141c38e9.js";import"./theme.3b4e7d7e.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.5a67e2a8.js";import"./focusSafely.module.7063b024.js";import"./context.module.c5d54df9.js";import"./Info.e62cb9cb.js";const n=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,d=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,g=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default};