import{s as e,a as o,j as r}from"./index.4193e21a.js";import{T as m}from"./Tooltip.c110413e.js";import"./theme.44905229.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.11703662.js";import"./context.module.4ccba5d3.js";import"./useButton.module.7e2fcd8b.js";import"./Info.1f3015f3.js";const n=e.div`
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
