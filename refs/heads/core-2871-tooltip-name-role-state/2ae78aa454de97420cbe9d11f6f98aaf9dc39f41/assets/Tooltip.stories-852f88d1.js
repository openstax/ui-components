import{s as i,j as o,a as r}from"./index-b20d9a9a.js";import{T as m}from"./Tooltip-863cea96.js";import"./Button-bd85cfed.js";import"./useFocusRing-6e287732.js";import"./Hidden-cfe8ff9e.js";import"./useButton-036e8a82.js";import"./OverlayArrow-a0a57366.js";import"./context-a36cecb2.js";import"./Info-7844466d.js";import"./palette-97ed00c9.js";const n=i.div`
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
