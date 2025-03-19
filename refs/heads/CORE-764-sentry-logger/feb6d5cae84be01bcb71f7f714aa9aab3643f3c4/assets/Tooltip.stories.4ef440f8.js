import{s as e,a as o,j as r}from"./index.c08e3dbc.js";import{T as m}from"./Tooltip.b1eb06cb.js";import"./theme.86c39b7c.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.ec5ae3cb.js";import"./context.module.f21aa855.js";import"./useButton.module.4b963912.js";import"./Info.ab66a65d.js";const n=e.div`
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
