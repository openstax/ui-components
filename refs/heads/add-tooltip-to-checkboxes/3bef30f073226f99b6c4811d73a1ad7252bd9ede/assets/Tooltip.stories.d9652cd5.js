import{s as e,a as o,j as r}from"./index.e55df2cc.js";import{T as m}from"./Tooltip.e725d540.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.45e9cdb3.js";import"./useFocusRing.module.bb7d70f3.js";import"./context.module.404ee0b0.js";import"./useButton.module.b9a964a9.js";import"./OverlayArrow.module.1c096a00.js";import"./Info.c0831bb1.js";const n=e.div`
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
