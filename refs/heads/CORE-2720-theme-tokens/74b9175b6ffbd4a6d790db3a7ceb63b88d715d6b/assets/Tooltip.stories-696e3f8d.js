import{s as e,j as o,a as r}from"./index-e7b956bc.js";import{T as m}from"./Tooltip-4a8cdeb8.js";import"./Button-abe201fb.js";import"./useFocusRing-4aae80b4.js";import"./Hidden-37f46b48.js";import"./useButton-9c7e8bce.js";import"./OverlayArrow-0176614e.js";import"./context-8aa3223e.js";import"./Info-3a937618.js";import"./palette-97ed00c9.js";const n=e.div`
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
