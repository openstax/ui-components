import{s as e,a as o,j as r}from"./index.c9c1760a.js";import{T as m}from"./Tooltip.acd6aa56.js";import"./theme.784106f9.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.e0f4f6f5.js";import"./context.module.53eaea28.js";import"./useButton.module.d067c8df.js";import"./Info.97a61229.js";const n=e.div`
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
