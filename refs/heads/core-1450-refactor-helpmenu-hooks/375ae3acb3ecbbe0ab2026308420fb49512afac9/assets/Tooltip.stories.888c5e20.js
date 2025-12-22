import{s as e,a as o,j as r}from"./index.0958d440.js";import{T as m}from"./Tooltip.c90259e2.js";import"./theme.48d111e7.js";import"./palette.15e4d008.js";import"./Button.module.1481a788.js";import"./useFocusRing.module.5faf7d13.js";import"./context.module.1c33aef1.js";import"./useButton.module.a97ddd89.js";import"./OverlayArrow.module.332d0eb0.js";import"./Info.5bc1ddd9.js";const n=e.div`
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
