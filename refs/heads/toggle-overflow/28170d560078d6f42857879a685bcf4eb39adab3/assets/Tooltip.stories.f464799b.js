import{s as e,a as o,j as r}from"./index.12e308cc.js";import{T as m}from"./Tooltip.8c0e9c50.js";import"./theme.c9dc91dd.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.c0dad592.js";import"./context.module.017d15d4.js";import"./useButton.module.2a98dee4.js";import"./Info.88173f4f.js";const n=e.div`
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
