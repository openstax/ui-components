import{s as i,j as o,a as r}from"./index-95f65afc.js";import{T as m}from"./Tooltip-24081e31.js";import"./Button-3baeb4e1.js";import"./useFocusRing-1446a9a1.js";import"./Hidden-38e2c068.js";import"./useButton-44b10a18.js";import"./OverlayArrow-75e72406.js";import"./context-4a669151.js";import"./Info-8c431ad7.js";import"./palette-97ed00c9.js";const n=i.div`
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
