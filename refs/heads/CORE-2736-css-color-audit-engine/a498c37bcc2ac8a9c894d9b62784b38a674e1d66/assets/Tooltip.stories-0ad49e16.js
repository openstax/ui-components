import{s as e,j as o,a as r}from"./index-33306e4c.js";import{T as m}from"./Tooltip-b490d976.js";import"./Button-e2cb7a01.js";import"./useFocusRing-4040c01d.js";import"./Hidden-96e1c22d.js";import"./useButton-0ef69dfa.js";import"./OverlayArrow-08bbeeec.js";import"./context-e939feaa.js";import"./Info-8b6443bd.js";import"./palette-12edeb86.js";const n=e.div`
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
