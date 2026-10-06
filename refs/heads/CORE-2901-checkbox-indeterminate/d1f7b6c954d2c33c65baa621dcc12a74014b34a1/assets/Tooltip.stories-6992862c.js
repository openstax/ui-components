import{s as i,j as o,a as r}from"./index-21813e06.js";import{T as m}from"./Tooltip-f78d6d9b.js";import"./Button-3e68bc5c.js";import"./useFocusRing-98c7385b.js";import"./Hidden-79b9eeda.js";import"./useFocusable-deb04c4f.js";import"./useButton-a41308b6.js";import"./OverlayArrow-29775889.js";import"./context-b9bbbb55.js";import"./Info-8f94749c.js";import"./palette-97ed00c9.js";const n=i.div`
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
