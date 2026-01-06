import{s as e,a as o,j as r}from"./index.2111f8e4.js";import{T as m}from"./Tooltip.292d6f3a.js";import"./theme.937d8d2b.js";import"./palette.15e4d008.js";import"./Button.module.b49ec1ac.js";import"./useFocusRing.module.ae39e878.js";import"./context.module.6ae65def.js";import"./useButton.module.2d6879f1.js";import"./OverlayArrow.module.a738aa22.js";import"./Info.beed6ea0.js";const n=e.div`
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
