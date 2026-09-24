import{s as e,j as o,a as r}from"./index-ee1427ea.js";import{T as m}from"./Tooltip-192945fb.js";import"./Button-0cf1471b.js";import"./useFocusRing-efa95777.js";import"./Hidden-5ee31a97.js";import"./useButton-1f2b32e4.js";import"./OverlayArrow-2fd92577.js";import"./context-7a66bb35.js";import"./Info-c6552477.js";import"./palette-97ed00c9.js";const n=e.div`
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
