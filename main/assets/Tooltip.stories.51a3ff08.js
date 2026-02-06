import{s as e,a as o,j as r}from"./index.6f835c86.js";import{T as m}from"./Tooltip.2e1f124b.js";import"./theme.70751264.js";import"./palette.5e342580.js";import"./Button.module.d5960e02.js";import"./useFocusRing.module.96ff117b.js";import"./context.module.c1f58a16.js";import"./useButton.module.0a488349.js";import"./OverlayArrow.module.a51e2a16.js";import"./Info.eb175548.js";const n=e.div`
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
