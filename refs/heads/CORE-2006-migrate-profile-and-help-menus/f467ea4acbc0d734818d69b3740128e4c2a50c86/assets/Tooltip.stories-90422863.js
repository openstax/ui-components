import{s as e,j as o,a as r}from"./index-c589f728.js";import{T as m}from"./Tooltip-5049c635.js";import"./Button-4a97dbad.js";import"./useFocusRing-9c33b5f7.js";import"./Hidden-69e95dc3.js";import"./useButton-64fc3bda.js";import"./OverlayArrow-de585bc2.js";import"./context-b7483c8d.js";import"./Info-b3bd55f2.js";/* empty css              */const n=e.div`
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
