import{s as i,j as o,a as r}from"./index-de148dac.js";import{T as m}from"./Tooltip-ae3c3100.js";import"./Button-d55d6056.js";import"./useFocusRing-e62db5dc.js";import"./Hidden-83927821.js";import"./useFocusable-ce3aa423.js";import"./useButton-b4292c4f.js";import"./OverlayArrow-7455fbc0.js";import"./context-e075e21b.js";import"./Info-19c19e06.js";import"./palette-97ed00c9.js";const n=i.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,p=i.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,y=()=>o(n,{children:["right","top","bottom"].map((t,e)=>r(p,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},e))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as Default};
