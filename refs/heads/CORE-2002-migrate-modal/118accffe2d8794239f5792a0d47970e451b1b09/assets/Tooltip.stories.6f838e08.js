import{s as e,a as o,j as r}from"./index.766e0037.js";import{T as m}from"./Tooltip.1a7c3809.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.18720467.js";import"./useFocusRing.module.4db7b124.js";import"./context.module.b8718c87.js";import"./useButton.module.50c4b36d.js";import"./OverlayArrow.module.01884feb.js";import"./Info.6a7ca3e9.js";const n=e.div`
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
