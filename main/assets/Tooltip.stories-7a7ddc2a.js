import{s as e,j as o,a as r}from"./index-1734db48.js";import{T as m}from"./Tooltip-74840cbd.js";import"./Button-566da28b.js";import"./useFocusRing-7685feaf.js";import"./Hidden-dd13628b.js";import"./useButton-7070e7a8.js";import"./OverlayArrow-f8b9835d.js";import"./context-c2247e6c.js";import"./Info-273bfe3f.js";import"./palette-12edeb86.js";const n=e.div`
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
