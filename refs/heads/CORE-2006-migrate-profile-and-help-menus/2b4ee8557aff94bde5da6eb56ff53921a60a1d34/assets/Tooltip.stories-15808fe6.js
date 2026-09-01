import{s as e,j as o,a as r}from"./index-cb716086.js";import{T as m}from"./Tooltip-f0278a81.js";import"./Button-1d24eea0.js";import"./useFocusRing-542370d3.js";import"./Hidden-a5c4455c.js";import"./useButton-905038c9.js";import"./OverlayArrow-b0696a51.js";import"./context-1f2cc649.js";import"./Info-60139c5e.js";import"./palette-12edeb86.js";const n=e.div`
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
