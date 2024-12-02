import{s as e,a as o,j as i}from"./index.9b4d0b0c.js";import{T as r}from"./Tooltip.37e8df02.js";import"./theme.4c0edb2c.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.6b37123e.js";import"./focusSafely.module.f27b7bd6.js";import"./context.module.dcbfd98d.js";import"./Info.e1655112.js";const m=e.div`
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
