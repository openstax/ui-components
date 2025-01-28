import{s as e,a as o,j as r}from"./index.8ee6cded.js";import{T as m}from"./Tooltip.a5f5d892.js";import"./theme.13410593.js";import"./palette.15e4d008.js";import"./Button.module.3c6c6137.js";import"./context.module.d20ab0de.js";import"./useFocusRing.module.2847fd57.js";import"./OverlayArrow.module.69378247.js";import"./Info.f6d8db72.js";const n=e.div`
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
