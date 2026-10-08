import{s as i,j as o,a as r}from"./index-48a22ada.js";import{T as m}from"./Tooltip-f451e883.js";import"./Button-20f9376f.js";import"./useFocusRing-a9eaccac.js";import"./Hidden-bb45d810.js";import"./useFocusable-2a6e9f1c.js";import"./useButton-20987226.js";import"./OverlayArrow-f3d2c316.js";import"./context-007e99e0.js";import"./Info-d2750b9e.js";/* empty css              */const n=i.div`
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
