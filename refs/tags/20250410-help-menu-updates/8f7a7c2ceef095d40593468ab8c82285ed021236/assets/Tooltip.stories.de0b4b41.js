import{s as e,a as o,j as r}from"./index.aa197b2c.js";import{T as m}from"./Tooltip.e17f23e3.js";import"./theme.3d7efd7e.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.229435cc.js";import"./context.module.f2474b39.js";import"./useButton.module.a3059e59.js";import"./Info.85d19483.js";const n=e.div`
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
`,g=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default};
