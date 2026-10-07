import{s as i,j as o,a as r}from"./index-57004f40.js";import{T as m}from"./Tooltip-546111da.js";import"./Button-89fb8459.js";import"./useFocusRing-34418017.js";import"./Hidden-dac8cdb9.js";import"./useFocusable-a083ce51.js";import"./useButton-10d94849.js";import"./OverlayArrow-b80bec5b.js";import"./context-1a7c96a0.js";import"./Info-7b68599d.js";import"./palette-97ed00c9.js";const n=i.div`
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
