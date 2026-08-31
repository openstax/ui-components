import{s as e,j as o,a as r}from"./index-8124cb98.js";import{T as m}from"./Tooltip-68ab1332.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-815bdd9f.js";import"./useFocusRing-3b3e734d.js";import"./context-f007ccaa.js";import"./useButton-33d40f3d.js";import"./OverlayArrow-abfcf4bd.js";import"./Info-80ce0d17.js";const n=e.div`
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
