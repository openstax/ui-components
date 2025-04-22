import{s as e,a as o,j as r}from"./index.35502c0a.js";import{T as m}from"./Tooltip.b2d49815.js";import"./theme.546a2671.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.29dcdd72.js";import"./context.module.a44df2f8.js";import"./useButton.module.0e4de0c5.js";import"./Info.6ccdc610.js";const n=e.div`
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
