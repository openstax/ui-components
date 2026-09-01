import{s as e,j as o,a as r}from"./index-f5c32e7c.js";import{T as m}from"./Tooltip-f7b55f83.js";import"./Button-86c1e656.js";import"./useFocusRing-e6223fce.js";import"./Hidden-7c879882.js";import"./useButton-e53c231d.js";import"./OverlayArrow-a0e1406d.js";import"./context-6d802a82.js";import"./Info-0388ec23.js";import"./palette-12edeb86.js";const n=e.div`
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
