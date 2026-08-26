import{s as e,j as o,a as r}from"./index-3cc9c786.js";import{T as m}from"./Tooltip-c1df892d.js";import"./Button-e3ad5626.js";import"./useFocusRing-fc027e0e.js";import"./Hidden-453f41bc.js";import"./useButton-a51c2f63.js";import"./OverlayArrow-0ac292b5.js";import"./context-28a935ee.js";import"./Info-ad264065.js";import"./palette-f868513b.js";const n=e.div`
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
