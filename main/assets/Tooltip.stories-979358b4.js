import{s as e,j as o,a as r}from"./index-6a37c30d.js";import{T as m}from"./Tooltip-6c5fcbab.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-c2e2e24a.js";import"./useFocusRing-bcd7ea86.js";import"./context-f1eb16d2.js";import"./useButton-2d2f4d8e.js";import"./OverlayArrow-a40486a4.js";import"./Info-4d33317b.js";const n=e.div`
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
