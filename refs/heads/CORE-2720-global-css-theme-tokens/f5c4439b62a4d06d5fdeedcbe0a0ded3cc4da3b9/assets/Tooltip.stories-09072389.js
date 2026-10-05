import{s as e,j as o,a as r}from"./index-0ccca12e.js";import{T as m}from"./Tooltip-ebbdf70f.js";import"./Button-647574cb.js";import"./useFocusRing-b182c07a.js";import"./Hidden-c75239a6.js";import"./useFocusable-48927e42.js";import"./useButton-2de02fca.js";import"./OverlayArrow-17e0710e.js";import"./context-79f85f88.js";import"./Info-a747f8d8.js";const n=e.div`
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
