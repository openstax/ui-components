import{s as i,j as o,a as r}from"./index-c5c4f151.js";import{T as m}from"./Tooltip-3f5fb360.js";import"./Button-586f8bee.js";import"./useFocusRing-0f193f3b.js";import"./Hidden-9957d589.js";import"./useFocusable-a67b4384.js";import"./useButton-cc602a37.js";import"./OverlayArrow-f14acea4.js";import"./context-b5987f00.js";import"./Info-a2b0882c.js";import"./palette-97ed00c9.js";const n=i.div`
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
