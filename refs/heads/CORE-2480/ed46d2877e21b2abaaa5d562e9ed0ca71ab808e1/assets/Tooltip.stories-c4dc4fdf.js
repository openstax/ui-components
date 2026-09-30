import{s as i,j as o,a as r}from"./index-a675d4f3.js";import{T as m}from"./Tooltip-65c4e8c8.js";import"./Button-023f0948.js";import"./useFocusRing-7f36ea2c.js";import"./Hidden-ea0adeff.js";import"./useFocusable-1a852174.js";import"./useButton-8d3a4c09.js";import"./OverlayArrow-a87aaaef.js";import"./context-15939b1f.js";import"./Info-b07954be.js";import"./palette-97ed00c9.js";const n=i.div`
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
