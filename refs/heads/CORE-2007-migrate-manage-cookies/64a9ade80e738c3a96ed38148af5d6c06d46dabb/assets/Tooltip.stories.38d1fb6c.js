import{s as e,a as o,j as r}from"./index.8a319c7f.js";import{T as m}from"./Tooltip.371d1ccc.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.53bd1551.js";import"./useFocusRing.module.836a58b1.js";import"./context.module.159f5df0.js";import"./useButton.module.173d942c.js";import"./OverlayArrow.module.5637cc83.js";import"./Info.7f0cc6ed.js";const n=e.div`
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
