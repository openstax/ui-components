import{s as e,j as o,a as r}from"./index-6bfea2ef.js";import{T as m}from"./Tooltip-dfdafa78.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-27eb6d92.js";import"./useFocusRing-ee919d4b.js";import"./context-aaac409d.js";import"./useButton-6ca7a259.js";import"./OverlayArrow-8bd47e16.js";import"./Info-bd84d4ac.js";const n=e.div`
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
