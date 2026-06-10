import{s as e,a as o,j as r}from"./index.ef4f34e3.js";import{T as m}from"./Tooltip.109d4b03.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.b093aef0.js";import"./useFocusRing.module.e419bf45.js";import"./context.module.a44f18b5.js";import"./useButton.module.0507a0f0.js";import"./OverlayArrow.module.d9dabd09.js";import"./Info.0b73493d.js";const n=e.div`
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
