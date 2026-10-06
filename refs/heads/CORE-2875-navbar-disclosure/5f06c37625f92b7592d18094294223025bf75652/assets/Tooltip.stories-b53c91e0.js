import{s as i,j as o,a as r}from"./index-69fd5b71.js";import{T as m}from"./Tooltip-1f6219d9.js";import"./Button-fb520109.js";import"./useFocusRing-cd15878b.js";import"./Hidden-23441427.js";import"./useFocusable-8f9f8147.js";import"./useButton-4d79e005.js";import"./OverlayArrow-74b47b93.js";import"./context-edde9ee0.js";import"./useControlledState-f03982eb.js";import"./Info-22632fcb.js";import"./palette-97ed00c9.js";const n=i.div`
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
