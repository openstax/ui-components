import{s as e,j as o,a as r}from"./index-c21ad90e.js";import{T as m}from"./Tooltip-95d0d472.js";import"./Button-8d4a6dff.js";import"./useFocusRing-e7e22a4f.js";import"./Hidden-41164517.js";import"./useButton-0dac40d3.js";import"./OverlayArrow-e2e46c82.js";import"./context-d43e6a98.js";import"./Info-a8cab7f4.js";/* empty css              */const n=e.div`
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
