import{s as e,j as o,a as r}from"./index-3ade00d8.js";import{T as m}from"./Tooltip-8a5d399d.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-653aa58a.js";import"./useFocusRing-e0b32113.js";import"./context-a481f6ae.js";import"./useButton-f643d012.js";import"./OverlayArrow-77a21ad4.js";import"./Info-ca4c2d8e.js";const n=e.div`
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
