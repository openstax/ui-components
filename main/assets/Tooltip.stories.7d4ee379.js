import{s as e,a as o,j as i}from"./index.1f82b929.js";import{T as r}from"./Tooltip.307a1a02.js";import"./theme.8c2a3b76.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.b8e8cd2f.js";import"./focusSafely.module.4d8fae01.js";import"./context.module.4692e2d9.js";import"./Info.53933873.js";const m=e.div`
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