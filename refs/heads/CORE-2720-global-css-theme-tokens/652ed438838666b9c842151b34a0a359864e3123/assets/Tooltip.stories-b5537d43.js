import{s as e,j as o,a as r}from"./index-e04c0ab7.js";import{T as m}from"./Tooltip-d89acb91.js";import"./Button-c556a712.js";import"./useFocusRing-5ab27c02.js";import"./Hidden-533de5c9.js";import"./useButton-be49629f.js";import"./OverlayArrow-7944a254.js";import"./context-5e70ebe0.js";import"./Info-543f35ad.js";/* empty css              */const n=e.div`
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
