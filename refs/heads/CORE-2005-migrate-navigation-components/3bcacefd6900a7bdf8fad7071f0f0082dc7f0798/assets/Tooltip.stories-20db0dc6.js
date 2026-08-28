import{s as e,j as o,a as r}from"./index-a84d1d7a.js";import{T as m}from"./Tooltip-a8ae6341.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-e04a1e06.js";import"./useFocusRing-11418ec0.js";import"./context-d8ee8066.js";import"./useButton-02bbc958.js";import"./OverlayArrow-b783cc62.js";import"./Info-b7c23bc6.js";const n=e.div`
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
