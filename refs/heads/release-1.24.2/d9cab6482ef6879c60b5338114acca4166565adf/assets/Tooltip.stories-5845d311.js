import{s as e,j as o,a as r}from"./index-d6fe054b.js";import{T as m}from"./Tooltip-69291c7e.js";import"./Button-626a7020.js";import"./useFocusRing-077a2d60.js";import"./Hidden-4488e1dc.js";import"./useButton-1de02850.js";import"./OverlayArrow-b96eab31.js";import"./context-8f09d34e.js";import"./Info-c8e6b9f5.js";import"./palette-97ed00c9.js";const n=e.div`
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
