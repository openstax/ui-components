import{s as e,j as o,a as r}from"./index-4f7e923e.js";import{T as m}from"./Tooltip-2bb6b438.js";import"./theme-8bbc88f0.js";import"./palette-f868513b.js";import"./Button-cbd6e0a7.js";import"./useFocusRing-dcf6ca9b.js";import"./context-3464ed93.js";import"./useButton-c6632430.js";import"./OverlayArrow-30014d30.js";import"./Info-5c4ff5cb.js";const n=e.div`
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
