import{s as e,a as o,j as r}from"./index.4e803f83.js";import{T as m}from"./Tooltip.30765dbb.js";import"./theme.17dcc791.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.f3c44a54.js";import"./context.module.c36d2287.js";import"./useButton.module.36485fbc.js";import"./Info.df59c9b5.js";const n=e.div`
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
