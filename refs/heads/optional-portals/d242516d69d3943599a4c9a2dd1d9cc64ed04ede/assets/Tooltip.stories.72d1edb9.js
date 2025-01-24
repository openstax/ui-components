import{s as e,a as o,j as r}from"./index.9701bee5.js";import{T as m}from"./Tooltip.0fdb3527.js";import"./theme.282d57fd.js";import"./palette.15e4d008.js";import"./Button.module.700556b0.js";import"./context.module.61e0360d.js";import"./useFocusRing.module.358e6989.js";import"./OverlayArrow.module.6668f390.js";import"./Info.aa7b869a.js";const n=e.div`
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
