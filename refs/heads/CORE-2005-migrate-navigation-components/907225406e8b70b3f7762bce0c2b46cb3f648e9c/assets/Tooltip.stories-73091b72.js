import{s as e,j as o,a as r}from"./index-57ab77e7.js";import{T as m}from"./Tooltip-c3c01d47.js";import"./Button-c6a9b1d3.js";import"./useFocusRing-9b3c0d8d.js";import"./Hidden-ce991d72.js";import"./useButton-88cc5259.js";import"./OverlayArrow-6af5e2f1.js";import"./context-6e1eb032.js";import"./Info-0133bab3.js";/* empty css              */const n=e.div`
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
