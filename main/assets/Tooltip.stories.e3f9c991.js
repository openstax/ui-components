import{s as e,a as o,j as r}from"./index.122c3292.js";import{T as m}from"./Tooltip.0358dd42.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.514102e3.js";import"./useFocusRing.module.554ac6ad.js";import"./context.module.20fb0481.js";import"./useButton.module.b9611756.js";import"./OverlayArrow.module.058b4121.js";import"./Info.4f96a986.js";const n=e.div`
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
