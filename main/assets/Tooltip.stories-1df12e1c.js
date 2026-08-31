import{s as e,j as o,a as r}from"./index-4403cc3b.js";import{T as m}from"./Tooltip-972e4a28.js";import"./Button-5de3c1ac.js";import"./useFocusRing-052e896c.js";import"./Hidden-8b6ecea4.js";import"./useButton-14a39305.js";import"./OverlayArrow-ff9b5d25.js";import"./context-bf86e0a3.js";import"./Info-c57aa2c3.js";import"./palette-12edeb86.js";const n=e.div`
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
