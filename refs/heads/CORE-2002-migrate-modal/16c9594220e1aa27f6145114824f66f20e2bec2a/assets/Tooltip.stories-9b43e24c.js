import{s as e,j as o,a as r}from"./index-c16f90e6.js";import{T as m}from"./Tooltip-cda2a5b8.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-a3aebc50.js";import"./useFocusRing-162d2dd0.js";import"./context-1f83f68f.js";import"./useButton-2abd7d1a.js";import"./OverlayArrow-0a03578a.js";import"./Info-cf068ffb.js";const n=e.div`
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
