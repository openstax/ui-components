import{s as e,j as o,a as r}from"./index-901f19f1.js";import{T as m}from"./Tooltip-9ca72044.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-42448841.js";import"./useFocusRing-3efb5fc0.js";import"./context-23f86923.js";import"./useButton-5178fccc.js";import"./OverlayArrow-8a2b3b01.js";import"./Info-f89929d6.js";const n=e.div`
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
