import{s as e,j as o,a as r}from"./index-94041605.js";import{T as m}from"./Tooltip-76d484b2.js";import"./Button-6052709e.js";import"./useFocusRing-3acd48dc.js";import"./Hidden-d9178a04.js";import"./useFocusable-7a3f2343.js";import"./useButton-d6bc1b85.js";import"./OverlayArrow-ee6903d5.js";import"./context-9c204017.js";import"./Info-ec173c59.js";const n=e.div`
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
