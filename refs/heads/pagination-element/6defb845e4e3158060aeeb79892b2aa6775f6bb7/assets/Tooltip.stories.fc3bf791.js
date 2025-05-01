import{s as e,a as o,j as r}from"./index.c4c6dca5.js";import{T as m}from"./Tooltip.a1356529.js";import"./theme.780a3272.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.3cfb706a.js";import"./context.module.6fba6f19.js";import"./useButton.module.57db5103.js";import"./Info.5ae6be6a.js";const n=e.div`
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
