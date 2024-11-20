import{s as e,a as o,j as i}from"./index.378eb34b.js";import{T as r}from"./Tooltip.644e8c87.js";import"./theme.2cdfc96d.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.7aa7dce3.js";import"./focusSafely.module.092af8b5.js";import"./context.module.bec40e3d.js";import"./Info.6d3defd1.js";const m=e.div`
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
