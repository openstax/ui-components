import{s as e,j as o,a as r}from"./index-5749e66f.js";import{T as m}from"./Tooltip-40d0c247.js";import"./Button-ae3a29eb.js";import"./useFocusRing-0edc27cd.js";import"./Hidden-cffe9fec.js";import"./useButton-5e1d9653.js";import"./OverlayArrow-db7106de.js";import"./context-81fcc5b1.js";import"./Info-e43aa0e5.js";import"./palette-97ed00c9.js";const n=e.div`
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
