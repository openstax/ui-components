import{s as i,j as o,a as r}from"./index-a4575406.js";import{T as m}from"./Tooltip-053d658d.js";import"./Button-96627a8e.js";import"./useFocusRing-1050d8be.js";import"./Hidden-4251ac3c.js";import"./useFocusable-3e37605e.js";import"./useButton-e78ffb32.js";import"./OverlayArrow-cf6fab05.js";import"./context-d841ad98.js";import"./Info-b27ce3f3.js";import"./palette-12edeb86.js";const n=i.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,p=i.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,y=()=>o(n,{children:["right","top","bottom"].map((t,e)=>r(p,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},e))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as Default};
