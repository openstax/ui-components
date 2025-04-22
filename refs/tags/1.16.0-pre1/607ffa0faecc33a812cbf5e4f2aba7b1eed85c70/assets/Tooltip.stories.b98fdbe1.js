import{s as e,a as o,j as r}from"./index.95e8e4bf.js";import{T as m}from"./Tooltip.0fd58d99.js";import"./theme.06c601cc.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.e0437c4e.js";import"./context.module.370f4e89.js";import"./useButton.module.94f6c6c8.js";import"./Info.c37c4b52.js";const n=e.div`
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
