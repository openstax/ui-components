import{s as e,j as o,a as r}from"./index-e198e043.js";import{T as m}from"./Tooltip-ec734f4f.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-3e95c3be.js";import"./useFocusRing-07394096.js";import"./context-6a840960.js";import"./useButton-111e6140.js";import"./OverlayArrow-59575c80.js";import"./Info-a9796ea7.js";const n=e.div`
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
