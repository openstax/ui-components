import{s as e,a as o,j as r}from"./index.34b63593.js";import{T as m}from"./Tooltip.089662d3.js";import"./theme.59a636b2.js";import"./palette.15e4d008.js";import"./Button.module.d9227393.js";import"./context.module.37646704.js";import"./focusSafely.module.efb1ea5c.js";import"./useFocusRing.module.aa8fcde2.js";import"./OverlayArrow.module.13e21131.js";import"./Info.fdd8de28.js";const n=e.div`
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
