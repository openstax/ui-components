import{s as e,j as o,a as r}from"./index-36157f95.js";import{T as m}from"./Tooltip-a8a07422.js";import"./Button-c9936696.js";import"./useFocusRing-9548e559.js";import"./Hidden-8cb80b19.js";import"./useButton-7d4d9c9d.js";import"./OverlayArrow-4ab98306.js";import"./context-f69c089a.js";import"./Info-939e31c1.js";import"./palette-97ed00c9.js";const n=e.div`
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
