import{s as i,j as o,a as r}from"./index-b3b079aa.js";import{T as m}from"./Tooltip-0adfdaf0.js";import"./Button-ea421c75.js";import"./useFocusRing-cb19943c.js";import"./Hidden-e693f5c9.js";import"./useFocusable-e876d28e.js";import"./useButton-0c74c601.js";import"./OverlayArrow-cb5085ea.js";import"./context-e7cc9ad4.js";import"./Info-99affcdb.js";import"./palette-97ed00c9.js";const n=i.div`
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
