import{s as i,j as o,a as r}from"./index-3d226d98.js";import{T as m}from"./Tooltip-7b61eed5.js";import"./Button-61077671.js";import"./useFocusRing-25a349b3.js";import"./Hidden-6e382400.js";import"./useFocusable-f2be1e35.js";import"./useButton-7d15dca2.js";import"./OverlayArrow-3d818583.js";import"./context-a82a8fff.js";import"./Info-4b9166fb.js";import"./palette-97ed00c9.js";const n=i.div`
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
