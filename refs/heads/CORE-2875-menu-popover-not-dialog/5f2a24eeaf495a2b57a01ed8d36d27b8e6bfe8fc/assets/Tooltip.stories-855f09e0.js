import{s as e,j as o,a as r}from"./index-8213ebad.js";import{T as m}from"./Tooltip-8e13b486.js";import"./Button-76b815ee.js";import"./useFocusRing-bc6ad164.js";import"./Hidden-c66cdf4b.js";import"./useButton-dabc3721.js";import"./OverlayArrow-22e8f685.js";import"./context-71bdb8cb.js";import"./Info-8467f822.js";import"./palette-97ed00c9.js";const n=e.div`
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
