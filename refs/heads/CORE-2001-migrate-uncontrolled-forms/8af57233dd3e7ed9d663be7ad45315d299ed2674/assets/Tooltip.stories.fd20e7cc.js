import{s as e,a as o,j as r}from"./index.c4169142.js";import{T as m}from"./Tooltip.90ad5384.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.f2c15482.js";import"./useFocusRing.module.5be683fc.js";import"./context.module.9c1fb9d0.js";import"./useButton.module.d3129de0.js";import"./OverlayArrow.module.bac71c6d.js";import"./Info.1d19e642.js";const n=e.div`
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
