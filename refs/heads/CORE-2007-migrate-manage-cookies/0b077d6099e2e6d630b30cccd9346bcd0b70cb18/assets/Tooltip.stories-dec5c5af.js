import{s as e,j as o,a as r}from"./index-2712b3cb.js";import{T as m}from"./Tooltip-3f1d2027.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-4935ba7e.js";import"./useFocusRing-5b5e1e4e.js";import"./context-1a71db3d.js";import"./useButton-45780e55.js";import"./OverlayArrow-fb2f07be.js";import"./Info-777efcab.js";const n=e.div`
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
