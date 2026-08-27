import{s as e,j as o,a as r}from"./index-2a86ddcc.js";import{T as m}from"./Tooltip-9cc20ca3.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-0c1667ee.js";import"./useFocusRing-cf2ff162.js";import"./context-9002cf1c.js";import"./useButton-800fd6a1.js";import"./OverlayArrow-2fd441af.js";import"./Info-bc5ce7fb.js";const n=e.div`
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
