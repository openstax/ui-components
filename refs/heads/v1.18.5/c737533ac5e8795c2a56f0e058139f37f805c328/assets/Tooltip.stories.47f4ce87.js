import{s as e,a as o,j as r}from"./index.515a76d5.js";import{T as m}from"./Tooltip.785e02d2.js";import"./theme.3b0839ab.js";import"./palette.15e4d008.js";import"./Button.module.6fc2d186.js";import"./useFocusRing.module.6f1818ac.js";import"./context.module.44c41772.js";import"./useButton.module.68bb9fb5.js";import"./OverlayArrow.module.e9a026ed.js";import"./Info.8fcc3637.js";const n=e.div`
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
