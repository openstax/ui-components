import{s as i,j as o,a as r}from"./index-5b536c3b.js";import{T as m}from"./Tooltip-007b68f3.js";import"./Button-3f7b9565.js";import"./useFocusRing-01b0a3be.js";import"./Hidden-24ba526e.js";import"./useFocusable-5836828b.js";import"./useButton-f8fc5435.js";import"./OverlayArrow-70b7ebc5.js";import"./context-4f57d7ae.js";import"./Info-a53035ba.js";import"./palette-97ed00c9.js";const n=i.div`
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
