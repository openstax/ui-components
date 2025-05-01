import{s as e,a as o,j as r}from"./index.84c7ebb3.js";import{T as m}from"./Tooltip.de1c7ede.js";import"./theme.1ced6a05.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.c4e53cac.js";import"./context.module.2f4720ec.js";import"./useButton.module.a84be4f5.js";import"./Info.1f0f2739.js";const n=e.div`
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
