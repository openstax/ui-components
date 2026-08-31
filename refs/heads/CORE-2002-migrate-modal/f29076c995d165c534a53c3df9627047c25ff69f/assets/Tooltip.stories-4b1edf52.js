import{s as e,j as o,a as r}from"./index-f0758dee.js";import{T as m}from"./Tooltip-f9c6cbe6.js";import"./Button-a6752855.js";import"./useFocusRing-3e3041a4.js";import"./Hidden-3175ed19.js";import"./useButton-e96b671e.js";import"./OverlayArrow-ccb75d87.js";import"./context-26e13ead.js";import"./Info-0e522e94.js";import"./palette-12edeb86.js";const n=e.div`
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
