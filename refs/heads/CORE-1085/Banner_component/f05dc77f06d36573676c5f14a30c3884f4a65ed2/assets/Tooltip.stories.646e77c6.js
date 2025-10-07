import{s as e,a as o,j as r}from"./index.73d4fe07.js";import{T as m}from"./Tooltip.60fc5115.js";import"./theme.492f6a78.js";import"./palette.15e4d008.js";import"./Button.module.3f0cc27b.js";import"./useFocusRing.module.aa02cab0.js";import"./context.module.e9becb0e.js";import"./useButton.module.8a0b42f3.js";import"./OverlayArrow.module.6b3727d6.js";import"./Info.311c7333.js";const n=e.div`
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
