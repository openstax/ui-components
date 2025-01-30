import{s as e,a as o,j as r}from"./index.01c0db81.js";import{T as m}from"./Tooltip.149fdaed.js";import"./theme.ab1bbf07.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.5b8202c5.js";import"./context.module.cf25de0a.js";import"./Hidden.module.217ec4fb.js";import"./useButton.module.ed9fc12f.js";import"./Info.a5c3f2d4.js";const n=e.div`
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
