import{s as e,j as o,a as r}from"./index-440830f5.js";import{T as m}from"./Tooltip-b875aaab.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-06c74855.js";import"./useFocusRing-9cdb6345.js";import"./context-b520289c.js";import"./useButton-f01b5560.js";import"./OverlayArrow-d4ec99dc.js";import"./Info-fab2eb45.js";const n=e.div`
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
