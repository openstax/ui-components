import{s as e,a as o,j as r}from"./index.7b32fac2.js";import{T as m}from"./Tooltip.192a0960.js";import"./theme.3a44fd8f.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.02872700.js";import"./context.module.c5c92464.js";import"./useButton.module.a5989205.js";import"./Info.7bfe5721.js";const n=e.div`
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
