import{s as e,j as o,a as r}from"./index-4213ba27.js";import{T as m}from"./Tooltip-07fd4bbe.js";import"./Button-92f2a88f.js";import"./useFocusRing-1b72058d.js";import"./Hidden-6efa0f33.js";import"./useButton-0d0ec44f.js";import"./OverlayArrow-39b94806.js";import"./context-fd76b7f3.js";import"./Info-c8c8b924.js";import"./palette-12edeb86.js";const n=e.div`
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
