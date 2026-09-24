import{s as e,j as o,a as r}from"./index-76e7c673.js";import{T as m}from"./Tooltip-b779a8a2.js";import"./Button-1ec03cdb.js";import"./useFocusRing-e407b6dd.js";import"./Hidden-ff2c73c7.js";import"./useButton-93ba0cc4.js";import"./OverlayArrow-4959e14a.js";import"./context-0a641ab3.js";import"./Info-45c68f5a.js";import"./palette-97ed00c9.js";const n=e.div`
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
