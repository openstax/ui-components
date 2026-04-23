import{s as e,a as o,j as r}from"./index.5ec55e82.js";import{T as m}from"./Tooltip.8c97e27c.js";import"./theme.a1793be1.js";import"./palette.5e342580.js";import"./Button.module.aeffeac0.js";import"./useFocusRing.module.3668c5e0.js";import"./context.module.832f8857.js";import"./useButton.module.b0e3c08c.js";import"./OverlayArrow.module.2fc49ee7.js";import"./Info.1404af8d.js";const n=e.div`
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
