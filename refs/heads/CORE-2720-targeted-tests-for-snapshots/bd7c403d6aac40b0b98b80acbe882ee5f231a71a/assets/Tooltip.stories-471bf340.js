import{s as i,j as o,a as r}from"./index-c04b4447.js";import{T as m}from"./Tooltip-e1c73166.js";import"./Button-d9826ded.js";import"./useFocusRing-d4c292bc.js";import"./Hidden-3a34ca40.js";import"./useFocusable-d89abb9a.js";import"./useButton-445f8282.js";import"./OverlayArrow-f36853b7.js";import"./context-fc69c589.js";import"./Info-847963a2.js";import"./palette-97ed00c9.js";const n=i.div`
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
