import{s as i,j as o,a as r}from"./index-0e29c780.js";import{T as m}from"./Tooltip-962f6bf4.js";import"./Button-75af9266.js";import"./useFocusRing-c9d14238.js";import"./Hidden-af0b88e3.js";import"./useFocusable-4a13219e.js";import"./useButton-c23710c1.js";import"./OverlayArrow-6858242a.js";import"./context-977462df.js";import"./Info-a25bdf75.js";import"./palette-97ed00c9.js";const n=i.div`
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
