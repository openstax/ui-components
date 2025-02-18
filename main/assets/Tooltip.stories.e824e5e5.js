import{s as e,a as o,j as r}from"./index.4b2278d7.js";import{T as m}from"./Tooltip.de159ee0.js";import"./theme.a9e0c4d9.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.4ac5d027.js";import"./context.module.f6086f8f.js";import"./Hidden.module.9fba73d0.js";import"./useButton.module.3bcd7eba.js";import"./Info.8b79ff67.js";const n=e.div`
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
`,h=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{h as Default};
