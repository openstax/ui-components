import{s as e,j as o,a as r}from"./index-226744e2.js";import{T as m}from"./Tooltip-13b588d2.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-b4b5c161.js";import"./useFocusRing-b8be1973.js";import"./context-2b9145be.js";import"./useButton-3e2b2aae.js";import"./OverlayArrow-56f8c5aa.js";import"./Info-a474189c.js";const n=e.div`
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
