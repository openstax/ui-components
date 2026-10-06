import{s as i,a as o,j as r}from"./index-70c211b7.js";import{T as m}from"./Tooltip-76cb3648.js";import"./Button-2a235598.js";import"./useFocusRing-5f511fde.js";import"./Hidden-e52b25f1.js";import"./useFocusable-15d67dcb.js";import"./useButton-14e996ae.js";import"./OverlayArrow-a31de20b.js";import"./context-b29437f7.js";import"./Info-6eefb197.js";import"./palette-97ed00c9.js";const n=i.div`
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
