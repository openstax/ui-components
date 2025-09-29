import{s as e,a as o,j as r}from"./index.456f62bb.js";import{T as m}from"./Tooltip.b7768ac4.js";import"./theme.e48aaf48.js";import"./palette.15e4d008.js";import"./Button.module.66a51b0a.js";import"./useFocusRing.module.12417d36.js";import"./context.module.659e80ed.js";import"./useButton.module.a8e0b06f.js";import"./OverlayArrow.module.ac4bc2cb.js";import"./Info.fb9a091a.js";const n=e.div`
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
