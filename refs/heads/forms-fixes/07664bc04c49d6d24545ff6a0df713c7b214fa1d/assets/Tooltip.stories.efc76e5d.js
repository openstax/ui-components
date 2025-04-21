import{s as e,a as o,j as r}from"./index.18ccb163.js";import{T as m}from"./Tooltip.9b5e97fa.js";import"./theme.4d86e427.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.076af703.js";import"./context.module.bd931d7b.js";import"./useButton.module.bfccfa89.js";import"./Info.a588c13a.js";const n=e.div`
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
