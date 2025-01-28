import{s as e,a as o,j as r}from"./index.9b638a39.js";import{T as m}from"./Tooltip.cd6e4670.js";import"./theme.e81936ef.js";import"./palette.15e4d008.js";import"./Button.module.729f9492.js";import"./context.module.ee8a93fc.js";import"./useFocusRing.module.ada377a3.js";import"./OverlayArrow.module.40f35c5e.js";import"./Info.013df92a.js";const n=e.div`
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
