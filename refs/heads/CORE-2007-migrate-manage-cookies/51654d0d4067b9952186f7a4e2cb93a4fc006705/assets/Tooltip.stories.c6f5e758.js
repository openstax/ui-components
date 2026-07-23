import{s as e,a as o,j as r}from"./index.0a3c727d.js";import{T as m}from"./Tooltip.203aae13.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.5736616e.js";import"./useFocusRing.module.d184f928.js";import"./context.module.693b5561.js";import"./useButton.module.6f545216.js";import"./OverlayArrow.module.05398806.js";import"./Info.a2df3298.js";const n=e.div`
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
