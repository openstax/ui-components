import{s as e,j as o,a as r}from"./index-c5146d77.js";import{T as m}from"./Tooltip-74903d32.js";import"./Button-893193a2.js";import"./useFocusRing-b8ac5fc0.js";import"./Hidden-1fa43981.js";import"./useButton-b3914be9.js";import"./OverlayArrow-bf9b7bff.js";import"./context-cfb7df37.js";import"./Info-9ee6d1f7.js";import"./palette-97ed00c9.js";const n=e.div`
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
