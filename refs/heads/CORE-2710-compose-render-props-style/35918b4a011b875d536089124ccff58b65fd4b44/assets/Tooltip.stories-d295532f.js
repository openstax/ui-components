import{s as e,j as o,a as r}from"./index-ce30fb49.js";import{T as m}from"./Tooltip-8087cb74.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-7aab122d.js";import"./useFocusRing-63fb8bcc.js";import"./context-a88d5e68.js";import"./useButton-9aa438fd.js";import"./OverlayArrow-bab3e8e0.js";import"./Info-cb2a50fb.js";const n=e.div`
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
