import{s as i,a as o,j as r}from"./index-ebb5fb7d.js";import{T as m}from"./Tooltip-1c386bbf.js";import"./Button-334b0f03.js";import"./useFocusRing-13614e66.js";import"./Hidden-f152aa71.js";import"./useFocusable-bfd4a7e6.js";import"./useButton-10a854c4.js";import"./OverlayArrow-d7702333.js";import"./context-48f8f79b.js";import"./Info-63644805.js";import"./palette-97ed00c9.js";const n=i.div`
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
