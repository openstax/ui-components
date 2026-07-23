import{s as e,a as o,j as r}from"./index.b57afb2c.js";import{T as m}from"./Tooltip.036c55ca.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.e2ab8ead.js";import"./useFocusRing.module.3a317c65.js";import"./context.module.889f177d.js";import"./useButton.module.0ab174e5.js";import"./OverlayArrow.module.d3b35e6d.js";import"./Info.ff5cc5d5.js";const n=e.div`
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
