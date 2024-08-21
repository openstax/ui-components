import{s as e,a as o,j as i}from"./index.2e5bf251.js";import{T as r}from"./Tooltip.48d6a819.js";import"./theme.37d6da14.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.00869e8f.js";import"./focusSafely.module.086ed6ef.js";import"./context.module.2033781d.js";import"./Info.55081754.js";const m=e.div`
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
