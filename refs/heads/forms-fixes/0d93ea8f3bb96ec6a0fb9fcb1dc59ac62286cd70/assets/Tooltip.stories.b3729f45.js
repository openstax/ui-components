import{s as e,a as o,j as r}from"./index.1c432139.js";import{T as m}from"./Tooltip.11e784ad.js";import"./theme.5130e1c7.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.63801668.js";import"./context.module.09879460.js";import"./useButton.module.a03e7f1f.js";import"./Info.4802d44c.js";const n=e.div`
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
