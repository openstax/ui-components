import{s as i,j as o,a as r}from"./index-78f56fc2.js";import{T as m}from"./Tooltip-45ef7c0b.js";import"./Button-32d97aff.js";import"./useFocusRing-23c40bdc.js";import"./Hidden-30e6f676.js";import"./useFocusable-abff89ec.js";import"./useButton-a1e8c4b2.js";import"./OverlayArrow-f63ae629.js";import"./context-725730c4.js";import"./Info-1035bedb.js";import"./palette-12edeb86.js";const n=i.div`
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
