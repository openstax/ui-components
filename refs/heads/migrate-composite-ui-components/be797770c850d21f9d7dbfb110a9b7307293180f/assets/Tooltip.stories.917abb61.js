import{s as e,a as o,j as r}from"./index.2bf602ce.js";import{T as m}from"./Tooltip.9528067a.js";import"./Button.module.5276be63.js";import"./useFocusRing.module.6e60fef6.js";import"./Hidden.module.2cbc25bc.js";import"./useButton.module.76caaf0a.js";import"./OverlayArrow.module.bc5c0080.js";import"./context.module.180862e1.js";import"./Info.cff3c914.js";import"./palette.5e342580.js";const n=e.div`
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
