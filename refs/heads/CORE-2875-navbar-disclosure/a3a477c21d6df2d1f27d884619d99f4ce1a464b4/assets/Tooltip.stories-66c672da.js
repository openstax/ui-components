import{s as i,j as o,a as r}from"./index-d1d1fded.js";import{T as m}from"./Tooltip-7177a56e.js";import"./Button-2715773e.js";import"./useFocusRing-4386dd52.js";import"./Hidden-c368feb1.js";import"./useFocusable-b3b8ee37.js";import"./useButton-0522c372.js";import"./OverlayArrow-2c169799.js";import"./context-930e22b4.js";import"./useControlledState-288176eb.js";import"./Info-2b9d1ee1.js";import"./palette-97ed00c9.js";const n=i.div`
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
`,b=()=>o(n,{children:["right","top","bottom"].map((t,e)=>r(p,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},e))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{b as Default};
