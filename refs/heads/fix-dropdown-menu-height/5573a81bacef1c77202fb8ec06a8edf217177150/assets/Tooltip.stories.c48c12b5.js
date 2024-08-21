import{s as e,a as o,j as i}from"./index.d02ef7ff.js";import{T as r}from"./Tooltip.f04a1a9d.js";import"./theme.1294dcb7.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.28cdb492.js";import"./focusSafely.module.b47f43ce.js";import"./context.module.cce46bc7.js";import"./Info.77538634.js";const m=e.div`
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
