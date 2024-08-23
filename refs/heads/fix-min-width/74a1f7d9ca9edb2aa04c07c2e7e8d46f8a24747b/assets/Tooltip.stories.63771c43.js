import{s as e,a as o,j as i}from"./index.8e51a9b6.js";import{T as r}from"./Tooltip.0ce4a97f.js";import"./theme.325a8038.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.043ffa7b.js";import"./focusSafely.module.1dcc0622.js";import"./context.module.bd30ec64.js";import"./Info.71bb94fe.js";const m=e.div`
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
