import{s as i,a as o,j as r}from"./index-71cf49a2.js";import{T as m}from"./Tooltip-28e50ef4.js";import"./Button-a03708ad.js";import"./useFocusRing-12289b3e.js";import"./Hidden-ceb4dd1f.js";import"./useFocusable-31c562a2.js";import"./useButton-dc5febb2.js";import"./OverlayArrow-94eb4bb8.js";import"./context-6e43649b.js";import"./Info-8b9eb34c.js";import"./palette-97ed00c9.js";const n=i.div`
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
