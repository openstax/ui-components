import{s as e,a as o,j as r}from"./index.beb92222.js";import{T as m}from"./Tooltip.77ea40a5.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.1b9bc7ae.js";import"./useFocusRing.module.209a79a7.js";import"./context.module.7d04dba8.js";import"./useButton.module.92405fb7.js";import"./OverlayArrow.module.52c48408.js";import"./Info.48182211.js";const n=e.div`
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
