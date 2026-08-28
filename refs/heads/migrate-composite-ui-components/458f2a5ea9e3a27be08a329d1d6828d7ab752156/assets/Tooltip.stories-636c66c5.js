import{s as e,j as o,a as r}from"./index-a305f466.js";import{T as m}from"./Tooltip-87a6237a.js";import"./Button-e6f775e0.js";import"./useFocusRing-de446a71.js";import"./Hidden-16cd4541.js";import"./useButton-cfcf508f.js";import"./OverlayArrow-c0a58211.js";import"./context-1e96466a.js";import"./Info-2d4c2f1a.js";import"./palette-12edeb86.js";const n=e.div`
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
