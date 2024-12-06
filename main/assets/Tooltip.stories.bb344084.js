import{s as e,a as o,j as r}from"./index.feb36096.js";import{T as m}from"./Tooltip.8d2bf927.js";import"./theme.4fe3a54d.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.ae42b92c.js";import"./focusSafely.module.9cd57ea1.js";import"./context.module.f8ceb79d.js";import"./Info.e567a3bb.js";const n=e.div`
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
`,g=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default};
