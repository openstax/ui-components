import{s as i,a as o,j as r}from"./index-81100b9e.js";import{T as m}from"./Tooltip-2889e734.js";import"./Button-0821f9c6.js";import"./useFocusRing-3b11e1d4.js";import"./Hidden-9436c453.js";import"./useFocusable-51b32f4d.js";import"./useButton-9fa66393.js";import"./OverlayArrow-a4d50627.js";import"./context-7274409b.js";import"./Info-c57723b4.js";import"./palette-97ed00c9.js";const n=i.div`
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
