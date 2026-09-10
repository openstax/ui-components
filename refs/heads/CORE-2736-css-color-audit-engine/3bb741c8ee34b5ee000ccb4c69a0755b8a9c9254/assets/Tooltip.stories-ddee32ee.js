import{s as e,j as o,a as r}from"./index-daf63fe9.js";import{T as m}from"./Tooltip-11ae2adf.js";import"./Button-54358581.js";import"./useFocusRing-ffd3bf59.js";import"./Hidden-29910d3e.js";import"./useButton-e224df17.js";import"./OverlayArrow-d95b806c.js";import"./context-6b65b76b.js";import"./Info-c1e71696.js";import"./palette-12edeb86.js";const n=e.div`
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
