import{s as e,a as o,j as r}from"./index.7cd3446d.js";import{T as m}from"./Tooltip.559b9000.js";import"./theme.b86b84e0.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.9e9efbce.js";import"./context.module.ac0a08ec.js";import"./Hidden.module.62cac3d8.js";import"./useButton.module.f0ac53cc.js";import"./Info.e202d1a7.js";const n=e.div`
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
