import{s as e,a as o,j as r}from"./index.c232f93f.js";import{T as m}from"./Tooltip.8272fdb9.js";import"./theme.1a9b3d09.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.c9a65f9c.js";import"./context.module.cc94b508.js";import"./useButton.module.5ba0736d.js";import"./Info.3a3337b0.js";const n=e.div`
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
