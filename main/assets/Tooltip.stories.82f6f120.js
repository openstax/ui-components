import{s as e,a as o,j as r}from"./index.4766e129.js";import{T as m}from"./Tooltip.6f24c3ed.js";import"./theme.62734316.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.63e65c22.js";import"./context.module.c3bc7894.js";import"./useButton.module.0514c436.js";import"./Info.9e09f714.js";const n=e.div`
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
