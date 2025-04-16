import{s as e,a as o,j as r}from"./index.d131bfb1.js";import{T as m}from"./Tooltip.eaea2707.js";import"./theme.7879de4e.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.546326da.js";import"./context.module.c6a5520e.js";import"./useButton.module.8863c5c2.js";import"./Info.2b1a7d09.js";const n=e.div`
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
