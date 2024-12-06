import{s as e,a as o,j as r}from"./index.52210f8f.js";import{T as m}from"./Tooltip.ec647b38.js";import"./theme.a2fe6e85.js";import"./palette.15e4d008.js";import"./Button.module.52706f79.js";import"./context.module.2e90d596.js";import"./focusSafely.module.6462c9ae.js";import"./useFocusRing.module.9b3ecc29.js";import"./OverlayArrow.module.0971d0b0.js";import"./Info.64cfcd54.js";const n=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,d=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,x=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default};
