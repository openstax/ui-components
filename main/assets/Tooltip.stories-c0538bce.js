import{s as i,j as o,a as r}from"./index-564ba12b.js";import{T as m}from"./Tooltip-9abe456b.js";import"./Button-deeedf6e.js";import"./useFocusRing-74b940f2.js";import"./Hidden-473dc9fd.js";import"./useFocusable-5eff6fb2.js";import"./useButton-bf0045c8.js";import"./OverlayArrow-75fc64b0.js";import"./context-27c2eb22.js";import"./Info-e32ef9db.js";import"./palette-97ed00c9.js";const n=i.div`
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
