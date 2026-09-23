import{s as e,j as o,a as r}from"./index-d304d79a.js";import{T as m}from"./Tooltip-81d0495b.js";import"./Button-5636cdd8.js";import"./useFocusRing-5bae2d4b.js";import"./Hidden-6eac4031.js";import"./useButton-63bd539a.js";import"./OverlayArrow-d13056ca.js";import"./context-4a7f49b0.js";import"./Info-421c4965.js";import"./palette-97ed00c9.js";const n=e.div`
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
