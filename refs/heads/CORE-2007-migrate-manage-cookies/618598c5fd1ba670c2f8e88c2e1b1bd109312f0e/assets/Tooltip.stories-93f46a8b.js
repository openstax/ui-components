import{s as e,j as o,a as r}from"./index-39bc29f6.js";import{T as m}from"./Tooltip-ed993714.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-a8f6b79a.js";import"./useFocusRing-6cc1ca05.js";import"./context-53995cf9.js";import"./useButton-bf552268.js";import"./OverlayArrow-93b3184b.js";import"./Info-2f2bd25d.js";const n=e.div`
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
