import{s as e,j as o,a as r}from"./index-1293f3a9.js";import{T as m}from"./Tooltip-009e6d7b.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-a3d122f3.js";import"./useFocusRing-f2d46e7e.js";import"./context-2ffd8006.js";import"./useButton-6e341a21.js";import"./OverlayArrow-b46e2fdb.js";import"./Info-b412b3be.js";const n=e.div`
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
