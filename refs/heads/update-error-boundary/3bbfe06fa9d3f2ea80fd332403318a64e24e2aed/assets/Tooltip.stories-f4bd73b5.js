import{s as e,j as o,a as r}from"./index-bfa6cfd8.js";import{T as m}from"./Tooltip-c08db464.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-4c2531af.js";import"./useFocusRing-e7a07748.js";import"./context-62f02d8d.js";import"./useButton-38f19fa3.js";import"./OverlayArrow-d0b6551d.js";import"./Info-b19b7b9f.js";const n=e.div`
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
