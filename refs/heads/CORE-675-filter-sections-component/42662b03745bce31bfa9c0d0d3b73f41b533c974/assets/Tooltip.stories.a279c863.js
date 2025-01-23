import{s as e,a as o,j as r}from"./index.1e546c7c.js";import{T as m}from"./Tooltip.22fa09b3.js";import"./theme.9e15b8d9.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.ca056705.js";import"./context.module.9c48efd0.js";import"./Hidden.module.4a240f73.js";import"./useButton.module.d03c5d12.js";import"./Info.f4fc8603.js";const n=e.div`
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
