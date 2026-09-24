import{s as e,j as o,a as r}from"./index-28a44004.js";import{T as m}from"./Tooltip-b7c6c69d.js";import"./Button-5fc80b46.js";import"./useFocusRing-c4472fd7.js";import"./Hidden-9b9025fd.js";import"./useButton-727e6d83.js";import"./OverlayArrow-1d1db8d3.js";import"./context-6ec3b506.js";import"./Info-64ec1e4f.js";import"./palette-97ed00c9.js";const n=e.div`
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
