import{s as e,a as o,j as r}from"./index.0edc2388.js";import{T as m}from"./Tooltip.8d5dae1c.js";import"./theme.ca682476.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.edbbe1cc.js";import"./context.module.a3feaa0a.js";import"./useButton.module.9c4d8459.js";import"./Info.46924370.js";const n=e.div`
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
