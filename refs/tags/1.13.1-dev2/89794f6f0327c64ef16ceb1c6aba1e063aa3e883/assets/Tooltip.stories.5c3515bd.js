import{s as e,a as o,j as r}from"./index.e0283a51.js";import{T as m}from"./Tooltip.35180cdd.js";import"./theme.78c9163a.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.2c1cc475.js";import"./context.module.601201c6.js";import"./Hidden.module.16d7996d.js";import"./useButton.module.698a374a.js";import"./Info.b18c4360.js";const n=e.div`
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
