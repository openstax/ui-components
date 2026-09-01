import{s as e,j as o,a as r}from"./index-92cb9a38.js";import{T as m}from"./Tooltip-634a2ec0.js";import"./Button-310cf512.js";import"./useFocusRing-fa3214a0.js";import"./Hidden-f48c7e99.js";import"./useButton-eea976f2.js";import"./OverlayArrow-f1c48456.js";import"./context-2b4760a4.js";import"./Info-2066c16a.js";import"./palette-12edeb86.js";const n=e.div`
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
