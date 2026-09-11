import{s as e,j as o,a as r}from"./index-16ec9eb7.js";import{T as m}from"./Tooltip-559c98aa.js";import"./Button-7238c2b4.js";import"./useFocusRing-8f3cf6f0.js";import"./Hidden-a07f4dba.js";import"./useButton-f2f6150a.js";import"./OverlayArrow-bf66e5b9.js";import"./context-d50e6430.js";import"./Info-a61cb52a.js";import"./palette-12edeb86.js";const n=e.div`
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
