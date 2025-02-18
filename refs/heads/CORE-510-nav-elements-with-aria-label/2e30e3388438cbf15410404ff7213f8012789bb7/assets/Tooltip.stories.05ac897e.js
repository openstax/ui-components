import{s as e,a as o,j as r}from"./index.b3e7ac0c.js";import{T as m}from"./Tooltip.09b0456e.js";import"./theme.e68be389.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.7eab0bd8.js";import"./context.module.ee06a185.js";import"./Hidden.module.664f188e.js";import"./useButton.module.1458d218.js";import"./Info.07a8bbc9.js";const n=e.div`
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
