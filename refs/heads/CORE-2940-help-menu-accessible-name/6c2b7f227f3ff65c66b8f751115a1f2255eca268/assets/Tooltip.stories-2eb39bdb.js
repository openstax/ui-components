import{s as i,j as o,a as r}from"./index-cd45fd1a.js";import{T as m}from"./Tooltip-da27ff31.js";import"./Button-8c0cabc6.js";import"./useFocusRing-16f7cf48.js";import"./Hidden-a0845117.js";import"./useFocusable-ca23f472.js";import"./useButton-f6a5a81a.js";import"./OverlayArrow-ad5d0e54.js";import"./context-8c85b89a.js";import"./Info-beada5de.js";import"./palette-97ed00c9.js";const n=i.div`
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
