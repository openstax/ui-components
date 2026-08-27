import{s as e,j as o,a as r}from"./index-42144532.js";import{T as m}from"./Tooltip-9bbeac65.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-73607743.js";import"./useFocusRing-3b9e5d80.js";import"./context-ac140894.js";import"./useButton-a4a284f6.js";import"./OverlayArrow-df78e51b.js";import"./Info-60e1bc9a.js";const n=e.div`
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
