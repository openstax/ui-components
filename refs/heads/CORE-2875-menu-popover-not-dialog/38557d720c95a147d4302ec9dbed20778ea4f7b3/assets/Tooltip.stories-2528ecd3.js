import{s as i,j as o,a as r}from"./index-a20739c8.js";import{T as m}from"./Tooltip-435dc70e.js";import"./Button-a2420e85.js";import"./useFocusRing-f123a228.js";import"./Hidden-d9084126.js";import"./useFocusable-51c83c00.js";import"./useButton-13d8d03b.js";import"./OverlayArrow-c99c4098.js";import"./context-e305dfce.js";import"./Info-0b5cb341.js";import"./palette-97ed00c9.js";const n=i.div`
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
