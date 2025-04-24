import{s as e,a as o,j as r}from"./index.cf24ef3b.js";import{T as m}from"./Tooltip.74bb595c.js";import"./theme.f1fb32ed.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.84d9e499.js";import"./context.module.2174a500.js";import"./useButton.module.0dda1c74.js";import"./Info.dfe98dd8.js";const n=e.div`
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
