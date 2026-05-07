import{s as e,a as o,j as r}from"./index.9115a955.js";import{T as m}from"./Tooltip.af756aa0.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.e3695140.js";import"./useFocusRing.module.c9b8a772.js";import"./context.module.adeb208d.js";import"./useButton.module.023abfb6.js";import"./OverlayArrow.module.3862a325.js";import"./Info.71057e16.js";const n=e.div`
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
