import{s as e,j as o,a as r}from"./index-55482ecf.js";import{T as m}from"./Tooltip-dab5dabb.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-09c920da.js";import"./useFocusRing-dd36146c.js";import"./context-18929427.js";import"./useButton-aee056d6.js";import"./OverlayArrow-79c50d56.js";import"./Info-db7f0c5f.js";const n=e.div`
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
