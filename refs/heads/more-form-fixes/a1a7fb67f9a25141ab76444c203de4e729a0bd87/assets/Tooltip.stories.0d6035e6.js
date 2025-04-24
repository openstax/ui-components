import{s as e,a as o,j as r}from"./index.2ed57b38.js";import{T as m}from"./Tooltip.9fd15ad1.js";import"./theme.f9556c48.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.2a7738a7.js";import"./context.module.34b4e0cd.js";import"./useButton.module.f48321a7.js";import"./Info.2f43cfad.js";const n=e.div`
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
