import{s as e,a as o,j as i}from"./index.7b00a96b.js";import{T as r}from"./Tooltip.e0f8cd4f.js";import"./theme.284ae27b.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.277aed3e.js";import"./focusSafely.module.a0243702.js";import"./context.module.31d3f641.js";import"./Info.8aa2a9c0.js";const m=e.div`
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