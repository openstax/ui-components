import{s as e,a as o,j as r}from"./index.8536a5a5.js";import{T as m}from"./Tooltip.6371a775.js";import"./theme.1f58f548.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.1fe6e418.js";import"./context.module.ef3e16a4.js";import"./useButton.module.9bb24c44.js";import"./Info.79db2139.js";const n=e.div`
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
