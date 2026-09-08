import{s as e,j as o,a as r}from"./index-bed0009f.js";import{T as m}from"./Tooltip-3c0b5d27.js";import"./Button-a44d6186.js";import"./useFocusRing-cdd2881f.js";import"./Hidden-2a8b3e72.js";import"./useButton-9f6a3faf.js";import"./OverlayArrow-06b70eba.js";import"./context-d8ee95d7.js";import"./Info-b9363142.js";/* empty css              */const n=e.div`
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
