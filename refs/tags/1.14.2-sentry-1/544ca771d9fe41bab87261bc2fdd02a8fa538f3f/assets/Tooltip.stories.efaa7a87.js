import{s as e,a as o,j as r}from"./index.748f356b.js";import{T as m}from"./Tooltip.3f1ec252.js";import"./theme.24b27b74.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.52a37378.js";import"./context.module.7a94968b.js";import"./useButton.module.6becf017.js";import"./Info.f1b539d2.js";const n=e.div`
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
