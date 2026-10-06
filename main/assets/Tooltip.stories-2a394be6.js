import{s as i,j as o,a as r}from"./index-58355721.js";import{T as m}from"./Tooltip-c874a47f.js";import"./Button-bc499d05.js";import"./useFocusRing-bcd9ea7a.js";import"./Hidden-c50db482.js";import"./useFocusable-34bb8cb5.js";import"./useButton-1a729c92.js";import"./OverlayArrow-a9941bd6.js";import"./context-7dc19fa0.js";import"./Info-25033117.js";import"./palette-97ed00c9.js";const n=i.div`
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
