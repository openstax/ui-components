import{s as e,j as o,a as r}from"./index-788b202e.js";import{T as m}from"./Tooltip-39ad58c3.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-ca8ea009.js";import"./useFocusRing-fbe4d19f.js";import"./context-373662f9.js";import"./useButton-56df494a.js";import"./OverlayArrow-651a8f8c.js";import"./Info-8dd1c313.js";const n=e.div`
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
