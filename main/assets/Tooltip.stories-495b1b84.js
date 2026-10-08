import{s as i,j as o,a as r}from"./index-2b3cee5d.js";import{T as m}from"./Tooltip-d09ee1c5.js";import"./Button-fdb234db.js";import"./useFocusRing-9339b8c0.js";import"./Hidden-0ff76fc0.js";import"./useFocusable-81f53fdf.js";import"./useButton-726bf612.js";import"./OverlayArrow-787b2113.js";import"./context-03cc8480.js";import"./Info-075ea88d.js";import"./palette-97ed00c9.js";const n=i.div`
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
