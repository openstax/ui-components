import{s as e,a as o,j as r}from"./index.73850c62.js";import{T as m}from"./Tooltip.d7448001.js";import"./theme.21fc0e19.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.1627d98c.js";import"./context.module.28957498.js";import"./useButton.module.25c5bccd.js";import"./Info.f2799f77.js";const n=e.div`
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
