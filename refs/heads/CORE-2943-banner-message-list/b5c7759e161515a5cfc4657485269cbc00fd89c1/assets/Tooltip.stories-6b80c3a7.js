import{s as i,a as o,j as e}from"./index-ce98c68e.js";import{T as m}from"./Tooltip-299863f9.js";import"./Button-49b4fae4.js";import"./useFocusRing-c24f9b1a.js";import"./Hidden-1dff1183.js";import"./useFocusable-c5d2db78.js";import"./useButton-5cf8e74b.js";import"./OverlayArrow-745fb663.js";import"./context-8eee1b68.js";import"./useControlledState-c7e0ea39.js";import"./Info-229e6365.js";/* empty css              */const n=i.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,a=i.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,y=()=>o(n,{children:["right","top","bottom"].map((t,r)=>e(a,{children:[o(m,{placement:t,ariaLabel:`More information about ${t} placement`,children:"Tooltip content goes here."}),t]},r))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as Default};
