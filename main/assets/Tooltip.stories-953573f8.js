import{s as e,j as o,a as r}from"./index-0944ceb3.js";import{T as m}from"./Tooltip-f0861ee3.js";import"./Button-b0a7b830.js";import"./useFocusRing-a7d93656.js";import"./Hidden-23110ebb.js";import"./useButton-12eee667.js";import"./OverlayArrow-66bf5bbd.js";import"./context-5a208b0c.js";import"./Info-11dfcd7c.js";import"./palette-12edeb86.js";const n=e.div`
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
