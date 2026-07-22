import{s as e,a as o,j as r}from"./index.59ba5354.js";import{T as m}from"./Tooltip.d5f45a5c.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.bd517fd0.js";import"./useFocusRing.module.fc38db1d.js";import"./context.module.99ae6aa6.js";import"./useButton.module.4f6c59b0.js";import"./OverlayArrow.module.1b157428.js";import"./Info.22160818.js";const n=e.div`
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
