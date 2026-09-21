import{s as i,j as o,a as r}from"./index-763a0973.js";import{T as m}from"./Tooltip-cff7512b.js";import"./Button-1fb652d3.js";import"./useFocusRing-7ced4797.js";import"./Hidden-d4236f7c.js";import"./useFocusable-51c425c7.js";import"./useButton-a3cf34aa.js";import"./OverlayArrow-6ca53be9.js";import"./context-323ac398.js";import"./Info-8700f734.js";import"./palette-12edeb86.js";const n=i.div`
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
