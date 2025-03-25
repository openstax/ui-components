import{s as e,a as o,j as r}from"./index.c4ccf2f7.js";import{T as m}from"./Tooltip.fd8f8d15.js";import"./theme.702baa9f.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.631996cd.js";import"./context.module.8c7ca040.js";import"./useButton.module.4efb775d.js";import"./Info.7997ca52.js";const n=e.div`
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
