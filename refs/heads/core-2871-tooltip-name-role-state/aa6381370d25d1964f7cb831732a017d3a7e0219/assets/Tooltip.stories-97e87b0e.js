import{s as i,j as o,a as r}from"./index-67da3d90.js";import{T as m}from"./Tooltip-9d5d0cf1.js";import"./Button-e6f97bf6.js";import"./useFocusRing-06e96683.js";import"./Hidden-a512ccc2.js";import"./useFocusable-2993afc6.js";import"./useButton-da00c26a.js";import"./OverlayArrow-aaada6e3.js";import"./context-00361e80.js";import"./Info-178e0d76.js";import"./palette-97ed00c9.js";const n=i.div`
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
