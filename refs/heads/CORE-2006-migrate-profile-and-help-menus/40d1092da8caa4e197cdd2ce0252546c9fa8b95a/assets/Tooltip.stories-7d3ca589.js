import{s as e,j as o,a as r}from"./index-5734254e.js";import{T as m}from"./Tooltip-cd51f69a.js";import"./Button-345f468f.js";import"./useFocusRing-806159a4.js";import"./Hidden-b2f24860.js";import"./useButton-c6544dee.js";import"./OverlayArrow-e5a11290.js";import"./context-34338731.js";import"./Info-22738544.js";import"./palette-12edeb86.js";const n=e.div`
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
