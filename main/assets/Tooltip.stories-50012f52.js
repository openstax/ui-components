import{s as i,j as o,a as r}from"./index-2209e7c5.js";import{T as m}from"./Tooltip-af428ed8.js";import"./Button-c9d14711.js";import"./useFocusRing-5e731e0c.js";import"./Hidden-c3c5ede1.js";import"./useFocusable-e6cf46b8.js";import"./useButton-91c414db.js";import"./OverlayArrow-583d90cc.js";import"./context-43eff3d8.js";import"./Info-ea8f8b5e.js";const n=i.div`
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
`,b=()=>o(n,{children:["right","top","bottom"].map((t,e)=>r(a,{children:[o(m,{placement:t,ariaLabel:`More information about ${t} placement`,children:"Tooltip content goes here."}),t]},e))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{b as Default};
