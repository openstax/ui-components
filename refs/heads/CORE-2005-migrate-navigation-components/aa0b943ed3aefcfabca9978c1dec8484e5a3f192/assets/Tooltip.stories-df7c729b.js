import{s as e,j as o,a as r}from"./index-1148d1b3.js";import{T as m}from"./Tooltip-8814be58.js";import"./Button-c60fcf49.js";import"./useFocusRing-0593752c.js";import"./Hidden-d2f1bd99.js";import"./useButton-e6f10b9f.js";import"./OverlayArrow-a0e253c9.js";import"./context-cf676c38.js";import"./Info-618d11e1.js";import"./palette-97ed00c9.js";const n=e.div`
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
