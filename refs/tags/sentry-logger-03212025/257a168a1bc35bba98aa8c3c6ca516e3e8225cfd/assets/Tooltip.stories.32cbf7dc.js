import{s as e,a as o,j as r}from"./index.9e2a039d.js";import{T as m}from"./Tooltip.64d418e7.js";import"./theme.237d738d.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.61735ad5.js";import"./context.module.d03e0ea4.js";import"./useButton.module.cc6ebde5.js";import"./Info.2379228d.js";const n=e.div`
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
