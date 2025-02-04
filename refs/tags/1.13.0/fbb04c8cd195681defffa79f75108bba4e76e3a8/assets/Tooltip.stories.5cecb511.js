import{s as e,a as o,j as r}from"./index.4dc41d0a.js";import{T as m}from"./Tooltip.c75f10b0.js";import"./theme.c9759b1d.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.3afa6f58.js";import"./context.module.eb0c2ddb.js";import"./Hidden.module.8d8ddbd2.js";import"./useButton.module.d9881f35.js";import"./Info.b6c20695.js";const n=e.div`
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
