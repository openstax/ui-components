import{s as e,j as o,a as r}from"./index-5d39a9cf.js";import{T as m}from"./Tooltip-bd337999.js";import"./Button-d58a7e99.js";import"./useFocusRing-780d41a8.js";import"./Hidden-c4846879.js";import"./useButton-e62d34d0.js";import"./OverlayArrow-5fb699dd.js";import"./context-7591c634.js";import"./Info-6ccd7d93.js";import"./palette-97ed00c9.js";const n=e.div`
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
