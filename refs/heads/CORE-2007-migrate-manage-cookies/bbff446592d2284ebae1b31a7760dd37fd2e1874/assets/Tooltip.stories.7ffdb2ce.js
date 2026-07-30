import{s as e,a as o,j as r}from"./index.4f9fd98e.js";import{T as m}from"./Tooltip.ce6ee1fe.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.29f82554.js";import"./useFocusRing.module.f50b7001.js";import"./context.module.99ddbbd9.js";import"./useButton.module.2bdf1831.js";import"./OverlayArrow.module.b0538934.js";import"./Info.fed0d5aa.js";const n=e.div`
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
