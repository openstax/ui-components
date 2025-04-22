import{s as e,a as o,j as r}from"./index.2c7e0eb7.js";import{T as m}from"./Tooltip.06f90244.js";import"./theme.1014f7c7.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.e8d998e9.js";import"./context.module.f97e2902.js";import"./useButton.module.44290b0d.js";import"./Info.6532eead.js";const n=e.div`
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
