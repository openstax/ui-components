import{s as e,j as o,a as r}from"./index-2c7a4860.js";import{T as m}from"./Tooltip-9fda1fb8.js";import"./Button-2e22acd4.js";import"./useFocusRing-f66a4aa9.js";import"./Hidden-c78039e2.js";import"./useButton-181c1197.js";import"./OverlayArrow-e9360c7f.js";import"./context-a8c5ea83.js";import"./Info-9a2b5957.js";import"./palette-12edeb86.js";const n=e.div`
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
