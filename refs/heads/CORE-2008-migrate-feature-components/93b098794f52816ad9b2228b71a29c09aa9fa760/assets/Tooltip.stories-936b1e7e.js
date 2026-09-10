import{s as e,j as o,a as r}from"./index-2c0eed31.js";import{T as m}from"./Tooltip-9ade33d5.js";import"./Button-73531154.js";import"./useFocusRing-c0e11279.js";import"./Hidden-e15f1449.js";import"./useButton-45156fba.js";import"./OverlayArrow-c8b6a695.js";import"./context-dd04165b.js";import"./Info-a7929488.js";/* empty css              */const n=e.div`
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
