import{s as e,a as o,j as i}from"./index.e5446cb1.js";import{T as r}from"./Tooltip.2f5440fd.js";import"./theme.0517330b.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.0d86807e.js";import"./focusSafely.module.bc6d02d3.js";import"./context.module.d3dfbe33.js";import"./Info.2b16191e.js";const m=e.div`
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
