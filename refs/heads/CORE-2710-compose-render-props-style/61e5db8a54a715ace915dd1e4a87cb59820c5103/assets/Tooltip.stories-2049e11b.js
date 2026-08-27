import{s as e,j as o,a as r}from"./index-1367334a.js";import{T as m}from"./Tooltip-973d4f06.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-a30ea8bc.js";import"./useFocusRing-600f5fb0.js";import"./context-766a570b.js";import"./useButton-10ff610f.js";import"./OverlayArrow-f2f29fdd.js";import"./Info-4c2ede82.js";const n=e.div`
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
