import{s as e,a as o,j as r}from"./index.00f58178.js";import{T as m}from"./Tooltip.32c380b8.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.62562dc3.js";import"./useFocusRing.module.dcc6c22b.js";import"./context.module.67c80b96.js";import"./useButton.module.c51ba349.js";import"./OverlayArrow.module.37116bb0.js";import"./Info.806e6fd0.js";const n=e.div`
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
