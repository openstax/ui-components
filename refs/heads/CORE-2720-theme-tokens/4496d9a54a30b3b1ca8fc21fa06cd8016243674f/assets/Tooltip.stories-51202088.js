import{s as e,j as o,a as r}from"./index-44170a33.js";import{T as m}from"./Tooltip-decac8f3.js";import"./Button-4f2a95f2.js";import"./useFocusRing-a4821759.js";import"./Hidden-3aa0c2ca.js";import"./useButton-ea6a22ef.js";import"./OverlayArrow-55c226cb.js";import"./context-95adfa68.js";import"./Info-a27ff1e9.js";import"./palette-97ed00c9.js";const n=e.div`
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
