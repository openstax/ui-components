import{s as e,j as o,a as r}from"./index-6cdbf030.js";import{T as m}from"./Tooltip-6943920a.js";import"./theme-8bbc88f0.js";import"./palette-f868513b.js";import"./Button-fb23e0bb.js";import"./useFocusRing-ab45b441.js";import"./context-2579df2b.js";import"./useButton-fcb28e67.js";import"./OverlayArrow-ad9eaade.js";import"./Info-1851eedf.js";const n=e.div`
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
