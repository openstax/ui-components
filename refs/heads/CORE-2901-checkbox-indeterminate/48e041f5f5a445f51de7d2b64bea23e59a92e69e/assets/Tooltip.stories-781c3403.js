import{s as i,j as o,a as r}from"./index-f0b53669.js";import{T as m}from"./Tooltip-c447fd89.js";import"./Button-3e74280f.js";import"./useFocusRing-490b4e79.js";import"./Hidden-4f48b37a.js";import"./useFocusable-3955cbd6.js";import"./useButton-710678ed.js";import"./OverlayArrow-22c84e69.js";import"./context-b1891223.js";import"./Info-3e9bc1b8.js";import"./palette-97ed00c9.js";const n=i.div`
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
