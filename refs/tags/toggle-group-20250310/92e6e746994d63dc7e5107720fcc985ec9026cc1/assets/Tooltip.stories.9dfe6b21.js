import{s as e,a as o,j as r}from"./index.df4f9f75.js";import{T as m}from"./Tooltip.479f3067.js";import"./theme.a916d9e9.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.05fb4b93.js";import"./context.module.8b449dcb.js";import"./useButton.module.d2b6cfcd.js";import"./Info.abcd952d.js";const n=e.div`
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
