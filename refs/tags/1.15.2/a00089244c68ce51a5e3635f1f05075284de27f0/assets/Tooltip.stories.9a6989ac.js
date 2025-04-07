import{s as e,a as o,j as r}from"./index.7b15cc21.js";import{T as m}from"./Tooltip.27e56129.js";import"./theme.670e9418.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.39a84c81.js";import"./context.module.79f29597.js";import"./useButton.module.a78b8d39.js";import"./Info.02e3b7a6.js";const n=e.div`
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
