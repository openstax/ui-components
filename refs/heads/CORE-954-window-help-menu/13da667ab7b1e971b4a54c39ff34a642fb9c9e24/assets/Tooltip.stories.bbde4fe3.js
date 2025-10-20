import{s as e,a as o,j as r}from"./index.54a18bae.js";import{T as m}from"./Tooltip.d62efcad.js";import"./theme.fe159d0f.js";import"./palette.15e4d008.js";import"./Button.module.075ec6d4.js";import"./useFocusRing.module.120f0503.js";import"./context.module.667d7e0e.js";import"./useButton.module.a6db1dff.js";import"./OverlayArrow.module.c9add2b9.js";import"./Info.7c86e131.js";const n=e.div`
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
