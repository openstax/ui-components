import{s as i,j as o,a as r}from"./index-8f9ae97c.js";import{T as m}from"./Tooltip-57caaf6a.js";import"./Button-4448ebf3.js";import"./useFocusRing-baa6b2a5.js";import"./Hidden-b16e4fcc.js";import"./useFocusable-10a50f45.js";import"./useButton-00251999.js";import"./OverlayArrow-474e4399.js";import"./context-986dc0a3.js";import"./Info-d7a3b6be.js";import"./palette-97ed00c9.js";const n=i.div`
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
