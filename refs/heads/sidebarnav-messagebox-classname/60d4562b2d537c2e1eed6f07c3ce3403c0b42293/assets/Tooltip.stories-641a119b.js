import{s as i,a as o,j as e}from"./index-d3833305.js";import{T as m}from"./Tooltip-d8ba57da.js";import"./Button-339ebe8d.js";import"./useFocusRing-60f1c3b9.js";import"./Hidden-7f95d112.js";import"./useFocusable-399780c8.js";import"./useButton-296ebca1.js";import"./OverlayArrow-1f9e14b9.js";import"./context-dfa91e1e.js";import"./useControlledState-38db85a4.js";import"./Info-a7757201.js";/* empty css              */const n=i.div`
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
