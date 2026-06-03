import{s as e,a as o,j as r}from"./index.0fef33ed.js";import{T as m}from"./Tooltip.ec3df1a5.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.2f23a0f3.js";import"./useFocusRing.module.449c36c0.js";import"./context.module.0ea94d10.js";import"./useButton.module.bf096ed8.js";import"./OverlayArrow.module.0f2e0f9a.js";import"./Info.586e51b5.js";const n=e.div`
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
