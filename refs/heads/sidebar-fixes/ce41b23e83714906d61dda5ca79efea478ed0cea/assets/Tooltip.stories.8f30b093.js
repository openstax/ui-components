import{s as e,a as o,j as i}from"./index.7d1dd54f.js";import{T as r}from"./Tooltip.14012478.js";import"./theme.cf7b796d.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.66d3bd5f.js";import"./focusSafely.module.73535ea4.js";import"./context.module.d349f2ac.js";import"./Info.44aa216a.js";const m=e.div`
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
