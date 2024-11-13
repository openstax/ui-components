import{s as e,a as o,j as i}from"./index.cee9d99f.js";import{T as r}from"./Tooltip.817876eb.js";import"./theme.8f4c0875.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.faea2fb6.js";import"./focusSafely.module.e32ac921.js";import"./context.module.35cbc0c8.js";import"./Info.7df0175c.js";const m=e.div`
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
