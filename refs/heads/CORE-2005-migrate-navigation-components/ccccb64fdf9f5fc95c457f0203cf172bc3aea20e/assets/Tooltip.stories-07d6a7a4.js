import{s as e,j as o,a as r}from"./index-1c4517cb.js";import{T as m}from"./Tooltip-bfb4916b.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-899e193f.js";import"./useFocusRing-fa44e90f.js";import"./context-9d4dcb09.js";import"./useButton-8bfef6cb.js";import"./OverlayArrow-0a1f0e60.js";import"./Info-cf6859e8.js";const n=e.div`
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
