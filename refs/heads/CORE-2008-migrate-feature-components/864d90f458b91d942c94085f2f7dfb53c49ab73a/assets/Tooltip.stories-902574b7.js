import{s as i,j as o,a as r}from"./index-0ae673e4.js";import{T as m}from"./Tooltip-63245750.js";import"./Button-56a55526.js";import"./useFocusRing-061382fd.js";import"./Hidden-2ff2282e.js";import"./useFocusable-d32fa393.js";import"./useButton-4830784e.js";import"./OverlayArrow-5e23b7b2.js";import"./context-222c6b14.js";import"./Info-c4e24a9b.js";/* empty css              */const n=i.div`
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
`,x=()=>o(n,{children:["right","top","bottom"].map((t,e)=>r(a,{children:[o(m,{placement:t,ariaLabel:`More information about ${t} placement`,children:"Tooltip content goes here."}),t]},e))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default};
