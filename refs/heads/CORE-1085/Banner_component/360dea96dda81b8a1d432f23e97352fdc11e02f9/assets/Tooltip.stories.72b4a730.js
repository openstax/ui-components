import{s as e,a as o,j as r}from"./index.ebaf06cd.js";import{T as m}from"./Tooltip.86c79eb0.js";import"./theme.a2ab34a0.js";import"./palette.15e4d008.js";import"./Button.module.342a93e4.js";import"./useFocusRing.module.78ddc1fa.js";import"./context.module.a7db674c.js";import"./useButton.module.4da3d446.js";import"./OverlayArrow.module.f2e5990e.js";import"./Info.54bb14e5.js";const n=e.div`
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
