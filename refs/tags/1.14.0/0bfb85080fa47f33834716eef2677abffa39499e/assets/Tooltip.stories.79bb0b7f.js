import{s as e,a as o,j as r}from"./index.68e5c861.js";import{T as m}from"./Tooltip.ffe2a060.js";import"./theme.c9e78a0d.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.dd666a8f.js";import"./context.module.725cfac0.js";import"./Hidden.module.a26f812d.js";import"./useButton.module.b9fbf560.js";import"./Info.ccdeb0d5.js";const n=e.div`
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
`,h=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{h as Default};
