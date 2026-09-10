import{s as e,j as o,a as r}from"./index-45a59036.js";import{T as m}from"./Tooltip-2752473b.js";import"./Button-9b2d43f9.js";import"./useFocusRing-76b7caf7.js";import"./Hidden-033ed3e2.js";import"./useButton-c6925f2a.js";import"./OverlayArrow-77ca687c.js";import"./context-9f25fc9c.js";import"./Info-abf61787.js";import"./palette-97ed00c9.js";const n=e.div`
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
