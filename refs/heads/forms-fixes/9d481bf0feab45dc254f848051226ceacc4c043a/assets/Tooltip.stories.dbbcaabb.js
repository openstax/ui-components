import{s as e,a as o,j as r}from"./index.f9db6b46.js";import{T as m}from"./Tooltip.34eb1422.js";import"./theme.ba986330.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.0b434592.js";import"./context.module.5e11cc9b.js";import"./useButton.module.b59b9e37.js";import"./Info.03fe7f23.js";const n=e.div`
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
