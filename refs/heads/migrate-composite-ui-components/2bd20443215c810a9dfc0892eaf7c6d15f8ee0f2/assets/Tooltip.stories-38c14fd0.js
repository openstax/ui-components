import{s as e,j as o,a as r}from"./index-036ffbd0.js";import{T as m}from"./Tooltip-206deb3c.js";import"./Button-b63937fa.js";import"./useFocusRing-fea1e67b.js";import"./Hidden-25112f20.js";import"./useButton-7f90f243.js";import"./OverlayArrow-e300baea.js";import"./context-1f577250.js";import"./Info-285a0d9f.js";import"./palette-12edeb86.js";const n=e.div`
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
