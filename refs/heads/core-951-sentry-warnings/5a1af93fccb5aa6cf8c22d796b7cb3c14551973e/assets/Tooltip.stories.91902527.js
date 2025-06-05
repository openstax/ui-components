import{s as e,a as o,j as r}from"./index.cc98102b.js";import{T as m}from"./Tooltip.7023a15b.js";import"./theme.dd29795e.js";import"./palette.15e4d008.js";import"./Button.module.e46f87d9.js";import"./useFocusRing.module.2f83f5c5.js";import"./context.module.8d337d24.js";import"./useButton.module.0b182c87.js";import"./OverlayArrow.module.b8891cdc.js";import"./Info.c80d3726.js";const n=e.div`
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
`,x=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default};
