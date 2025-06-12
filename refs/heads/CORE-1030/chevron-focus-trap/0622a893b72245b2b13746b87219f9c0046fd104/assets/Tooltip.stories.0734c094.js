import{s as e,a as o,j as r}from"./index.2d4485a1.js";import{T as m}from"./Tooltip.85b96812.js";import"./theme.7ac48908.js";import"./palette.15e4d008.js";import"./Button.module.71bfa7bb.js";import"./useFocusRing.module.08386828.js";import"./context.module.e2b11994.js";import"./useButton.module.1ada284a.js";import"./OverlayArrow.module.070cd530.js";import"./Info.d30597f6.js";const n=e.div`
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
