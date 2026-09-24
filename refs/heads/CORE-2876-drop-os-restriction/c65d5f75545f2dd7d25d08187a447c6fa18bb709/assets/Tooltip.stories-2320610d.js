import{s as e,j as o,a as r}from"./index-cc867f2c.js";import{T as m}from"./Tooltip-ba184b09.js";import"./Button-c72ad133.js";import"./useFocusRing-7a1d70fb.js";import"./Hidden-04de7ccd.js";import"./useButton-6ae46e7a.js";import"./OverlayArrow-34e88066.js";import"./context-28314663.js";import"./Info-3eaa18ca.js";import"./palette-97ed00c9.js";const n=e.div`
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
