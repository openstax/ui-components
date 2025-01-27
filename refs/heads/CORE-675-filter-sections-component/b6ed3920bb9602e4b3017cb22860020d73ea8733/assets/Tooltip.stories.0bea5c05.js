import{s as e,a as o,j as r}from"./index.4d692fb5.js";import{T as m}from"./Tooltip.8619eb2f.js";import"./theme.ac00b3a8.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.2c31857b.js";import"./context.module.992083d1.js";import"./Hidden.module.26b5b782.js";import"./useButton.module.1e8601a1.js";import"./Info.2739c8b2.js";const n=e.div`
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
