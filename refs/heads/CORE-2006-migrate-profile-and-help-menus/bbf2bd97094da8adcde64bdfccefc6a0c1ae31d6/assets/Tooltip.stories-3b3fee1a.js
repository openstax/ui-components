import{s as i,j as o,a as r}from"./index-498102b8.js";import{T as m}from"./Tooltip-cbcf395e.js";import"./Button-47926c77.js";import"./useFocusRing-fbd22f75.js";import"./Hidden-7e43645b.js";import"./useFocusable-825edfbb.js";import"./useButton-2d2af185.js";import"./OverlayArrow-cc0ed6a0.js";import"./context-1d0a19f0.js";import"./Info-9b225a17.js";import"./palette-97ed00c9.js";const n=i.div`
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
