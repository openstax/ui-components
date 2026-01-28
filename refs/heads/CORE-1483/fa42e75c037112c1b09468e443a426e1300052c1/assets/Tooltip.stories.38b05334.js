import{s as e,a as o,j as r}from"./index.caafeed6.js";import{T as m}from"./Tooltip.bbab7f59.js";import"./theme.73b2196b.js";import"./palette.5e342580.js";import"./Button.module.8eeaa890.js";import"./useFocusRing.module.0de5ccb5.js";import"./context.module.cf5392d7.js";import"./useButton.module.c53a8eac.js";import"./OverlayArrow.module.0af9270f.js";import"./Info.e429c0f9.js";const n=e.div`
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
