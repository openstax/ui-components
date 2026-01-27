import{s as e,a as o,j as r}from"./index.12b7f06d.js";import{T as m}from"./Tooltip.c9342d78.js";import"./theme.0fc322b0.js";import"./palette.5e342580.js";import"./Button.module.23d07276.js";import"./useFocusRing.module.0c0506dc.js";import"./context.module.f77430b2.js";import"./useButton.module.ab5eefe6.js";import"./OverlayArrow.module.83406366.js";import"./Info.8fe180ba.js";const n=e.div`
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
