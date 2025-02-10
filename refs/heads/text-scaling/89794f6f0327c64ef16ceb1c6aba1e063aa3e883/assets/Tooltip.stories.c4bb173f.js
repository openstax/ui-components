import{s as e,a as o,j as r}from"./index.0e35f9e1.js";import{T as m}from"./Tooltip.fb207cb3.js";import"./theme.6bab1d26.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.1693cf45.js";import"./context.module.b83dae6a.js";import"./Hidden.module.272cb3e9.js";import"./useButton.module.2e479d47.js";import"./Info.a5c83bf8.js";const n=e.div`
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
