import{s as e,j as o,a as r}from"./index-eb83cddb.js";import{T as m}from"./Tooltip-4757bbae.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-b4e93eb8.js";import"./useFocusRing-36033347.js";import"./context-e9c2fce8.js";import"./useButton-e22d0ffe.js";import"./OverlayArrow-303da9e8.js";import"./Info-298c0fad.js";const n=e.div`
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
