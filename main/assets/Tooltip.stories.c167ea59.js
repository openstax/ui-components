import{s as e,a as o,j as r}from"./index.dab0bae4.js";import{T as m}from"./Tooltip.16c0fa6b.js";import"./theme.4c0514e2.js";import"./palette.15e4d008.js";import"./Button.module.4dda79b4.js";import"./useFocusRing.module.186fe2c6.js";import"./context.module.6bb86195.js";import"./useButton.module.ce0a5871.js";import"./OverlayArrow.module.36ae93d0.js";import"./Info.c788044b.js";const n=e.div`
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
