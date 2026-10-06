import{s as i,j as o,a as r}from"./index-fe37af2f.js";import{T as m}from"./Tooltip-a12b000a.js";import"./Button-52a5a137.js";import"./useFocusRing-c790c602.js";import"./Hidden-03238e07.js";import"./useFocusable-12f46272.js";import"./useButton-8b3b93d4.js";import"./OverlayArrow-6002e21d.js";import"./context-1de52094.js";import"./Info-ff5cc7f3.js";import"./palette-97ed00c9.js";const n=i.div`
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
