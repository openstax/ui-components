import{s as i,j as o,a as r}from"./index-42b5f5b1.js";import{T as m}from"./Tooltip-fc5b469b.js";import"./Button-8a07c9f1.js";import"./useFocusRing-70ab3480.js";import"./Hidden-cf0d224c.js";import"./useFocusable-078882e4.js";import"./useButton-fcda04db.js";import"./OverlayArrow-31c946c5.js";import"./context-86f6238f.js";import"./Info-a475407c.js";import"./palette-97ed00c9.js";const n=i.div`
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
