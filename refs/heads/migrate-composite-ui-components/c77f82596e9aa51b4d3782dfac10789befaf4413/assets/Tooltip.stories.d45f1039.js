import{s as e,a as o,j as r}from"./index.088c8a11.js";import{T as m}from"./Tooltip.a88dbc71.js";import"./Button.module.b3dee338.js";import"./useFocusRing.module.aec2e6e3.js";import"./Hidden.module.09d0c978.js";import"./useButton.module.7d59b370.js";import"./OverlayArrow.module.ff62a467.js";import"./context.module.765eb233.js";import"./Info.bc7e78f0.js";import"./palette.5e342580.js";const n=e.div`
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
