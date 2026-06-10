import{s as e,a as o,j as r}from"./index.50f6533e.js";import{T as m}from"./Tooltip.fa1efe95.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.82123d86.js";import"./useFocusRing.module.7d1a665f.js";import"./context.module.e6a5f215.js";import"./useButton.module.03bfdee7.js";import"./OverlayArrow.module.7b9de665.js";import"./Info.6ed9d6c6.js";const n=e.div`
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
