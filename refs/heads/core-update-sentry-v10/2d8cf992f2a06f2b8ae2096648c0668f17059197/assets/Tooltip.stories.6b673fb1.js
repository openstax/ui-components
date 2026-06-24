import{s as e,a as o,j as r}from"./index.7d6fb05c.js";import{T as m}from"./Tooltip.f115c074.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.b9cc9ba4.js";import"./useFocusRing.module.73981b35.js";import"./context.module.b8d439b6.js";import"./useButton.module.a8b62ecc.js";import"./OverlayArrow.module.a0e25414.js";import"./Info.9e739e2e.js";const n=e.div`
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
