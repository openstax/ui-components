import{s as i,j as o,a as r}from"./index-5c4a7fe3.js";import{T as m}from"./Tooltip-71f558fc.js";import"./Button-7b3bdb0a.js";import"./useFocusRing-f616c5c6.js";import"./Hidden-4f6ef5b8.js";import"./useFocusable-0a7b6916.js";import"./useButton-cb4c8120.js";import"./OverlayArrow-466bbc91.js";import"./context-562d9161.js";import"./Info-fa7877c4.js";import"./palette-97ed00c9.js";/* empty css              */const n=i.div`
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
