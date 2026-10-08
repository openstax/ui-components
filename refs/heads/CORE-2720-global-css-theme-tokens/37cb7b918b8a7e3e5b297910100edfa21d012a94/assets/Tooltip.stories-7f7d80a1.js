import{s as i,j as o,a as r}from"./index-32a2a8d8.js";import{T as m}from"./Tooltip-9127ad7c.js";import"./Button-41c19099.js";import"./useFocusRing-97a1e14c.js";import"./Hidden-c99c870e.js";import"./useFocusable-1a8bec85.js";import"./useButton-ae8df2d3.js";import"./OverlayArrow-9fcff4a2.js";import"./context-20fbd935.js";import"./Info-4b353a2c.js";const n=i.div`
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
