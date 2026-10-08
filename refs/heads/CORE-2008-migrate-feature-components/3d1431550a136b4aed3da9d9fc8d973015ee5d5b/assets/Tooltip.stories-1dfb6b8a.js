import{s as i,j as o,a as r}from"./index-0ec533db.js";import{T as m}from"./Tooltip-1639a296.js";import"./Button-e59b6048.js";import"./useFocusRing-3818e8f4.js";import"./Hidden-b9e7a86a.js";import"./useFocusable-f9e73eaa.js";import"./useButton-9ed9d95c.js";import"./OverlayArrow-a4b3383c.js";import"./context-13d3a0b3.js";import"./Info-76f6b4f7.js";/* empty css              */const n=i.div`
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
