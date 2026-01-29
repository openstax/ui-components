import{s as e,a as o,j as r}from"./index.fabca33b.js";import{T as m}from"./Tooltip.1c417679.js";import"./theme.7d65ad6e.js";import"./palette.5e342580.js";import"./Button.module.996d8e2a.js";import"./useFocusRing.module.bf281d1a.js";import"./context.module.2924e6c2.js";import"./useButton.module.fbb9165d.js";import"./OverlayArrow.module.d1bc311a.js";import"./Info.3f11c4a0.js";const n=e.div`
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
