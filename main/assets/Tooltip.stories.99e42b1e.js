import{s as e,a as o,j as i}from"./index.ebc20e14.js";import{T as r}from"./Tooltip.155a12f5.js";import"./theme.2d6d734f.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.28930c28.js";import"./focusSafely.module.5e643972.js";import"./context.module.61a96b5f.js";import"./Info.fc87330e.js";const m=e.div`
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
