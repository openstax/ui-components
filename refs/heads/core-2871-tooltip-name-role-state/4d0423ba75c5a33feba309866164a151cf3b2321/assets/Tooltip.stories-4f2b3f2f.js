import{s as i,j as o,a as r}from"./index-d111eead.js";import{T as m}from"./Tooltip-7f34eb17.js";import"./Button-ac4835cf.js";import"./useFocusRing-7ab4da3a.js";import"./Hidden-f313aff2.js";import"./useFocusable-ce5f4563.js";import"./useButton-9c332c5f.js";import"./OverlayArrow-74d87d95.js";import"./context-a6142a90.js";import"./Info-c951f121.js";import"./palette-97ed00c9.js";const n=i.div`
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
