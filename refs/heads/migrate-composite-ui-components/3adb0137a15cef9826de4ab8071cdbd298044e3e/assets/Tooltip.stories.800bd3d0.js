import{s as e,a as o,j as r}from"./index.f7108b46.js";import{T as m}from"./Tooltip.890aaf1e.js";import"./Button.module.dbd42776.js";import"./useFocusRing.module.cfe0e68a.js";import"./Hidden.module.8d1cc264.js";import"./useButton.module.8ff6a8a6.js";import"./OverlayArrow.module.c7cb388b.js";import"./context.module.753a63d7.js";import"./Info.6361bfb6.js";import"./palette.5e342580.js";const n=e.div`
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
