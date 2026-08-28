import{s as e,j as o,a as r}from"./index-31b449e2.js";import{T as m}from"./Tooltip-fa8f62a7.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-72a2ec0e.js";import"./useFocusRing-84eff7e1.js";import"./context-7460e987.js";import"./useButton-973cc7e7.js";import"./OverlayArrow-1d2e0603.js";import"./Info-d9c5dfb9.js";const n=e.div`
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
