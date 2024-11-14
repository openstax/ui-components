import{s as e,a as o,j as i}from"./index.dfccf34b.js";import{T as r}from"./Tooltip.7dc187a9.js";import"./theme.bf8fefe2.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.58174776.js";import"./focusSafely.module.c95f4529.js";import"./context.module.34abe295.js";import"./Info.8d05e811.js";const m=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,n=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,f=()=>o(m,{children:["right","top","bottom"].map(t=>i(n,{children:[o(r,{placement:t,children:"Tooltip content goes here."}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{f as Default};
