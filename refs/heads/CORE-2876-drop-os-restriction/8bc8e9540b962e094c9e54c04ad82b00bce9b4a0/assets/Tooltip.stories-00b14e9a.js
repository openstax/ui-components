import{s as e,j as o,a as r}from"./index-771b0097.js";import{T as m}from"./Tooltip-d3b80ee8.js";import"./Button-b04771e9.js";import"./useFocusRing-2ebcd9b7.js";import"./Hidden-1a6bb5c1.js";import"./useButton-b790afb2.js";import"./OverlayArrow-995268a8.js";import"./context-9d31b229.js";import"./Info-9834b286.js";import"./palette-97ed00c9.js";const n=e.div`
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
