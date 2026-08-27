import{s as e,j as o,a as r}from"./index-94c190e1.js";import{T as m}from"./Tooltip-5a63ad72.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-7a6b5a8d.js";import"./useFocusRing-49e0b8e3.js";import"./context-29cf9f11.js";import"./useButton-43fc9096.js";import"./OverlayArrow-54e23faf.js";import"./Info-2b3a956d.js";const n=e.div`
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
