import{s as e,a as o,j as r}from"./index.4b20b1a8.js";import{T as m}from"./Tooltip.6fca5730.js";import"./theme.fadf525a.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.4dad6b23.js";import"./context.module.7790f34e.js";import"./useButton.module.91092ab4.js";import"./Info.9b9c62e9.js";const n=e.div`
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
