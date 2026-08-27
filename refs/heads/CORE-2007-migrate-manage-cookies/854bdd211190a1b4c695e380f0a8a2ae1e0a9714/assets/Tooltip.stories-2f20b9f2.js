import{s as e,j as o,a as r}from"./index-71b90bb9.js";import{T as m}from"./Tooltip-185d1bd8.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-3ab1e846.js";import"./useFocusRing-afc782ec.js";import"./context-b1dd3c1b.js";import"./useButton-abcdca45.js";import"./OverlayArrow-d19016aa.js";import"./Info-74960b0b.js";const n=e.div`
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
