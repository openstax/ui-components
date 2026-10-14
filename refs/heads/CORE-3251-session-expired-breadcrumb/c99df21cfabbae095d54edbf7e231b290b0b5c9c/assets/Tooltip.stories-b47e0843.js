import{s as i,a as o,j as e}from"./index-8c3a927e.js";import{T as m}from"./Tooltip-5bbe618d.js";import"./Button-1f848c96.js";import"./useFocusRing-7a876f02.js";import"./Hidden-59717a59.js";import"./useFocusable-79ef381e.js";import"./useButton-4c383c6e.js";import"./OverlayArrow-8311ed5e.js";import"./context-5ade2b37.js";import"./useControlledState-416143c4.js";import"./Info-5e9e00ee.js";/* empty css              */const n=i.div`
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
