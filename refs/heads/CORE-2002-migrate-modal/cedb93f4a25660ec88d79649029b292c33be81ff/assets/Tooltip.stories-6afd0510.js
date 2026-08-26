import{s as e,j as o,a as r}from"./index-c5fec281.js";import{T as m}from"./Tooltip-e650a7a1.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-56122d06.js";import"./useFocusRing-3318340f.js";import"./context-e8998d0f.js";import"./useButton-8ec990f5.js";import"./OverlayArrow-c8ef7d9e.js";import"./Info-7ced8f0b.js";const n=e.div`
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
