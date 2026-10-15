import{s as i,a as o,j as e}from"./index-ee8f85d8.js";import{T as m}from"./Tooltip-de0ef1e2.js";import"./Button-2a4e2371.js";import"./useFocusRing-ecc66b24.js";import"./Hidden-7d3bd3ff.js";import"./useFocusable-661bbd4a.js";import"./useButton-2612e899.js";import"./OverlayArrow-21c5b688.js";import"./context-1657acc9.js";import"./useControlledState-2cf3e814.js";import"./Info-561f2896.js";/* empty css              */const n=i.div`
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
