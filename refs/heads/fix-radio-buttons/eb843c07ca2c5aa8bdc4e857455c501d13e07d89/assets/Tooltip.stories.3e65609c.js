import{s as e,a as o,j as r}from"./index.d239ade3.js";import{T as m}from"./Tooltip.d1bde843.js";import"./theme.c713de35.js";import"./palette.15e4d008.js";import"./Button.module.611b3131.js";import"./useFocusRing.module.851ea9a1.js";import"./context.module.a3f0af25.js";import"./useButton.module.b4155631.js";import"./OverlayArrow.module.0f2f3170.js";import"./Info.08c59840.js";const n=e.div`
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
