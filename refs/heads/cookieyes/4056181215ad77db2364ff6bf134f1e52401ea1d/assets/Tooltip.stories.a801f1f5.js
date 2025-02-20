import{s as e,a as o,j as r}from"./index.f09e7bf3.js";import{T as m}from"./Tooltip.91790c86.js";import"./theme.18fe5a74.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.7c1f8c9b.js";import"./context.module.86edc84f.js";import"./Hidden.module.9a7d5e7b.js";import"./useButton.module.a1a7d796.js";import"./Info.3be3d95b.js";const n=e.div`
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
