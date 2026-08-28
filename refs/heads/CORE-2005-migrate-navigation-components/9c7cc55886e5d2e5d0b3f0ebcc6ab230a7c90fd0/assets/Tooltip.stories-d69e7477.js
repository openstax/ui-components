import{s as e,j as o,a as r}from"./index-5615db60.js";import{T as m}from"./Tooltip-6c47b486.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-7d32397c.js";import"./useFocusRing-f909da71.js";import"./context-c5a541d7.js";import"./useButton-bbf1e04c.js";import"./OverlayArrow-dd007d8d.js";import"./Info-a1002e08.js";const n=e.div`
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
