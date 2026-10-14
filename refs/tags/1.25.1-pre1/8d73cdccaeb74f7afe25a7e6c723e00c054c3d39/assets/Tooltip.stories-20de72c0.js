import{s as i,a as o,j as e}from"./index-74c98c0d.js";import{T as m}from"./Tooltip-c28171ca.js";import"./Button-401ee79f.js";import"./useFocusRing-3d844a79.js";import"./Hidden-29f48d17.js";import"./useFocusable-cfecd327.js";import"./useButton-560d34e3.js";import"./OverlayArrow-9064a05e.js";import"./context-47174a68.js";import"./useControlledState-18a3cd1d.js";import"./Info-c6b72858.js";/* empty css              */const n=i.div`
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
