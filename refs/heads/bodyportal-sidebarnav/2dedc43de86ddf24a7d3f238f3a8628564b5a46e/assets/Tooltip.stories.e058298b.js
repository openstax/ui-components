import{s as e,a as o,j as i}from"./index.e95779b4.js";import{T as r}from"./Tooltip.7f778306.js";import"./theme.97363549.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.08ea3720.js";import"./focusSafely.module.41ed01a7.js";import"./context.module.9ccd312f.js";import"./Info.563d3eb3.js";const m=e.div`
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
