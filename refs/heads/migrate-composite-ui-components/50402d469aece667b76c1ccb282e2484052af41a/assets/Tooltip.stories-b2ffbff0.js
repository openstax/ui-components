import{s as e,j as o,a as r}from"./index-5e423046.js";import{T as m}from"./Tooltip-d3e0727b.js";import"./Button-7a3fe4cf.js";import"./useFocusRing-31641249.js";import"./Hidden-6d040365.js";import"./useButton-4c14a3ca.js";import"./OverlayArrow-cd60ecfd.js";import"./context-9bbca4cd.js";import"./Info-f915080b.js";import"./palette-f868513b.js";const n=e.div`
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
