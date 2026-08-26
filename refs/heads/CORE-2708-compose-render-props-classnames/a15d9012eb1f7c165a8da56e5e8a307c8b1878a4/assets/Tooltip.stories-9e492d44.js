import{s as e,j as o,a as r}from"./index-bae51aee.js";import{T as m}from"./Tooltip-51380402.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-adb1df59.js";import"./useFocusRing-a4fca5a3.js";import"./context-0ad5bf8e.js";import"./useButton-22b589a2.js";import"./OverlayArrow-392c612d.js";import"./Info-05704d2d.js";const n=e.div`
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
