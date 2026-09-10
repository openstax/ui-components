import{s as e,j as o,a as r}from"./index-04a71309.js";import{T as m}from"./Tooltip-c662801a.js";import"./Button-9f091e71.js";import"./useFocusRing-bd0baa32.js";import"./Hidden-ea9aea49.js";import"./useButton-aef27423.js";import"./OverlayArrow-06fc1956.js";import"./context-64cf9a79.js";import"./Info-262bf7de.js";import"./palette-97ed00c9.js";const n=e.div`
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
