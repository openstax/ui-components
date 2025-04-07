import{s as e,a as o,j as r}from"./index.7e4e779f.js";import{T as m}from"./Tooltip.9b72a721.js";import"./theme.bd757b8d.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.dadc457d.js";import"./context.module.fe5d2df5.js";import"./useButton.module.1e7c04b7.js";import"./Info.1fea08a9.js";const n=e.div`
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
