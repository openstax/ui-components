import{s as e,j as o,a as r}from"./index-1b99ed79.js";import{T as m}from"./Tooltip-851891a1.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-cb214005.js";import"./useFocusRing-eaa9d689.js";import"./context-dae88839.js";import"./useButton-95bc4026.js";import"./OverlayArrow-282c5307.js";import"./Info-60f66a24.js";const n=e.div`
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
