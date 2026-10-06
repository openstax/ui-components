import{s as i,j as o,a as r}from"./index-faee1409.js";import{T as m}from"./Tooltip-a5695b50.js";import"./Button-c447eb2e.js";import"./useFocusRing-f5af020e.js";import"./Hidden-46b268b4.js";import"./useFocusable-35476b43.js";import"./useButton-88d6f238.js";import"./OverlayArrow-2fa73871.js";import"./context-bf72279c.js";import"./Info-07608323.js";import"./palette-97ed00c9.js";const n=i.div`
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
