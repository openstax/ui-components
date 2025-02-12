import{s as e,a as o,j as r}from"./index.89484feb.js";import{T as m}from"./Tooltip.96094759.js";import"./theme.c43baf4e.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.929e3056.js";import"./context.module.3f371966.js";import"./Hidden.module.4e5d620e.js";import"./useButton.module.7ea9351c.js";import"./Info.a47dd396.js";const n=e.div`
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
