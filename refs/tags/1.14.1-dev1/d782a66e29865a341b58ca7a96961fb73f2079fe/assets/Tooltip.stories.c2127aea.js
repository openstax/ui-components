import{s as e,a as o,j as r}from"./index.1e44f4c0.js";import{T as m}from"./Tooltip.51db22f1.js";import"./theme.28a98c57.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.0b223e07.js";import"./context.module.84b59f56.js";import"./useButton.module.55626caa.js";import"./Info.0f8eed4e.js";const n=e.div`
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
