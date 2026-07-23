import{s as e,a as o,j as r}from"./index.60bed6a7.js";import{T as m}from"./Tooltip.9d90dbe1.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.58b96bcc.js";import"./useFocusRing.module.0fea5d8c.js";import"./context.module.ac6979c8.js";import"./useButton.module.9ffaf158.js";import"./OverlayArrow.module.85b1ed6d.js";import"./Info.1e1811aa.js";const n=e.div`
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
