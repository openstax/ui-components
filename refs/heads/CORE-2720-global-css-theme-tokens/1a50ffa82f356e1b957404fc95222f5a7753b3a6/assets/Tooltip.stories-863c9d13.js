import{s as e,j as o,a as r}from"./index-51f067b6.js";import{T as m}from"./Tooltip-0b0fbb5b.js";import"./Button-294a31b8.js";import"./useFocusRing-4ccdea12.js";import"./Hidden-ac1b1a9e.js";import"./useButton-e1f7d2d8.js";import"./OverlayArrow-71727505.js";import"./context-78e7f0f5.js";import"./Info-5c174225.js";/* empty css              */const n=e.div`
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
