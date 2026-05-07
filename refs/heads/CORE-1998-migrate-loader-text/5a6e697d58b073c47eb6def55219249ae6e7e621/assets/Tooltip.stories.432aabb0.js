import{s as e,a as o,j as r}from"./index.7077b1b4.js";import{T as m}from"./Tooltip.5d9a744d.js";import"./theme.f04239ea.js";import"./palette.5e342580.js";import"./Button.module.55ea42fb.js";import"./useFocusRing.module.a4bc068f.js";import"./context.module.9bdb695b.js";import"./useButton.module.aed693ff.js";import"./OverlayArrow.module.eee37901.js";import"./Info.16582cf9.js";const n=e.div`
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
