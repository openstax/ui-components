import{s as e,a as o,j as r}from"./index.217a48c1.js";import{T as m}from"./Tooltip.0d899ef4.js";import"./theme.6297c26f.js";import"./palette.15e4d008.js";import"./Button.module.22a3591b.js";import"./useFocusRing.module.b2c208cb.js";import"./context.module.31ef14dc.js";import"./useButton.module.06b6687c.js";import"./OverlayArrow.module.5e4f85f0.js";import"./Info.8cd8a279.js";const n=e.div`
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
