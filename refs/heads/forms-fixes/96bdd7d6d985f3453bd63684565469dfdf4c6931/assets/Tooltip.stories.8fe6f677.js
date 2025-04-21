import{s as e,a as o,j as r}from"./index.d3086247.js";import{T as m}from"./Tooltip.5b43583a.js";import"./theme.fcdbdd22.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.b78f8eea.js";import"./context.module.32c38983.js";import"./useButton.module.451a09ac.js";import"./Info.c5ad1d6f.js";const n=e.div`
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
