import{s as e,a as o,j as r}from"./index.b1193cf1.js";import{T as m}from"./Tooltip.1d153611.js";import"./theme.89304e3c.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.001f6f05.js";import"./context.module.122447a6.js";import"./Hidden.module.10a47570.js";import"./useButton.module.c025c117.js";import"./Info.e4d6b9f3.js";const n=e.div`
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
