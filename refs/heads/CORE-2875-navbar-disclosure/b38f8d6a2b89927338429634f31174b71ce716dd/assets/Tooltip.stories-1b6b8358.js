import{s as i,j as o,a as r}from"./index-88ed11a1.js";import{T as m}from"./Tooltip-f933eab7.js";import"./Button-c202e547.js";import"./useFocusRing-4970aa21.js";import"./Hidden-13fa9646.js";import"./useFocusable-088edd17.js";import"./useButton-1677fed7.js";import"./OverlayArrow-392ef6cb.js";import"./context-a06f9f97.js";import"./useControlledState-a278819c.js";import"./Info-33a5878b.js";import"./palette-97ed00c9.js";const n=i.div`
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
