import{s as e,j as o,a as r}from"./index-2e18f280.js";import{T as m}from"./Tooltip-fcca2c4a.js";import"./Button-cccfa484.js";import"./useFocusRing-c07143c7.js";import"./Hidden-110ca2c9.js";import"./useButton-1a7cb8e4.js";import"./OverlayArrow-9806f204.js";import"./context-2c2a4cb4.js";import"./Info-5b60084b.js";import"./palette-12edeb86.js";const n=e.div`
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
