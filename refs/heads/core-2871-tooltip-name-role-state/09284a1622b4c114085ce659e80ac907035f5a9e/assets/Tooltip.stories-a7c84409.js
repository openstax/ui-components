import{s as i,j as o,a as r}from"./index-496f6db0.js";import{T as m}from"./Tooltip-1e6e4e7c.js";import"./Button-daf65346.js";import"./useFocusRing-6c24074e.js";import"./Hidden-b4434b8d.js";import"./useFocusable-c78b504f.js";import"./useButton-adc8cf45.js";import"./OverlayArrow-575df714.js";import"./context-a77db222.js";import"./Info-01b9b6dc.js";import"./palette-97ed00c9.js";const n=i.div`
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
