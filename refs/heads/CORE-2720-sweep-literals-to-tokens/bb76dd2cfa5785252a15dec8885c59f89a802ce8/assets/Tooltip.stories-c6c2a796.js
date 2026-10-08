import{s as i,j as o,a as r}from"./index-2fab6fd0.js";import{T as m}from"./Tooltip-a2d32f4d.js";import"./Button-b6afdcc0.js";import"./useFocusRing-37100d60.js";import"./Hidden-a9520704.js";import"./useFocusable-8b6c3a25.js";import"./useButton-6ae0c938.js";import"./OverlayArrow-be68ec23.js";import"./context-2a26ca7e.js";import"./Info-ef32f855.js";/* empty css              */const n=i.div`
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
