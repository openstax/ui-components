import{s as i,j as o,a as r}from"./index-4bf0fe39.js";import{T as m}from"./Tooltip-aaa8dbd9.js";import"./Button-518a766e.js";import"./useFocusRing-5099f795.js";import"./Hidden-f9649c51.js";import"./useFocusable-8961e2c2.js";import"./useButton-cee424d5.js";import"./OverlayArrow-4425e510.js";import"./context-13fc5389.js";import"./Info-e94728ba.js";import"./palette-97ed00c9.js";const n=i.div`
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
