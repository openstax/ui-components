import{s as e,a as o,j as r}from"./index.bb4c28cd.js";import{T as m}from"./Tooltip.dbcadb94.js";import"./theme.c08f2576.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.9f0429fb.js";import"./context.module.0a3334fa.js";import"./Hidden.module.f1b41a70.js";import"./useButton.module.5a68f188.js";import"./Info.f43e0b2d.js";const n=e.div`
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
