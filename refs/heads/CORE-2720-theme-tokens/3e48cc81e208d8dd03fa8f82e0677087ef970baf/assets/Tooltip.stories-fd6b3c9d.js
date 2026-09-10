import{s as e,j as o,a as r}from"./index-d726e26d.js";import{T as m}from"./Tooltip-60595e02.js";import"./Button-de956351.js";import"./useFocusRing-b366c49b.js";import"./Hidden-3fb10087.js";import"./useButton-c3bd62fb.js";import"./OverlayArrow-972b09f7.js";import"./context-d6984892.js";import"./Info-19f0f8ed.js";import"./palette-97ed00c9.js";const n=e.div`
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
