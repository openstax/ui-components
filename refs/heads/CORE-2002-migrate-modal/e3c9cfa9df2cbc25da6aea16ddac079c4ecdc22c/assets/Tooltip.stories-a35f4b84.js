import{s as e,j as o,a as r}from"./index-44518a20.js";import{T as m}from"./Tooltip-ab57bada.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-34df7702.js";import"./useFocusRing-6c8dd2f4.js";import"./context-5d178fb2.js";import"./useButton-03fff4ea.js";import"./OverlayArrow-224aff4e.js";import"./Info-3a7009f4.js";const n=e.div`
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
