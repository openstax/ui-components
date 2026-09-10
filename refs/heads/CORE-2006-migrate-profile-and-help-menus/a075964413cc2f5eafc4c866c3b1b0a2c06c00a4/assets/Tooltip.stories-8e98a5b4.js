import{s as e,j as o,a as r}from"./index-83b5d49b.js";import{T as m}from"./Tooltip-fa2ca9fc.js";import"./Button-306b018a.js";import"./useFocusRing-8a3d9744.js";import"./Hidden-7c25d3e5.js";import"./useButton-7bafb022.js";import"./OverlayArrow-00a9d371.js";import"./context-5d5ce8c8.js";import"./Info-b79082d1.js";import"./palette-97ed00c9.js";const n=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,d=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,x=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default};
