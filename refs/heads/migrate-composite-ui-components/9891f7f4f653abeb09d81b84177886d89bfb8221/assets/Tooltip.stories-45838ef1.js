import{s as e,j as o,a as r}from"./index-24599a65.js";import{T as m}from"./Tooltip-e92d8c80.js";import"./Button-4adae6f2.js";import"./useFocusRing-ec63e2ee.js";import"./Hidden-e4df40c4.js";import"./useButton-7808b1fa.js";import"./OverlayArrow-ecf5f0a7.js";import"./context-a7cb0a40.js";import"./Info-c25f0cb7.js";import"./palette-12edeb86.js";const n=e.div`
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
