import{s as e,j as o,a as r}from"./index-622c4348.js";import{T as m}from"./Tooltip-6e32d885.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-a0ce8241.js";import"./useFocusRing-c92a64e9.js";import"./context-381ba8f5.js";import"./useButton-99d838a5.js";import"./OverlayArrow-8cd3bb56.js";import"./Info-951dbf71.js";const n=e.div`
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
