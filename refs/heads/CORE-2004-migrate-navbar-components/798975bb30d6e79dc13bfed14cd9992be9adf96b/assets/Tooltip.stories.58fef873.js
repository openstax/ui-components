import{s as e,a as o,j as r}from"./index.3a226cb8.js";import{T as m}from"./Tooltip.d04910ed.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.d5b0f338.js";import"./useFocusRing.module.648da32b.js";import"./context.module.42a0635d.js";import"./useButton.module.5a084dc9.js";import"./OverlayArrow.module.db6ce3d6.js";import"./Info.1596711d.js";const n=e.div`
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
