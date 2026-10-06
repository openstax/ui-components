import{s as i,j as o,a as r}from"./index-99492966.js";import{T as m}from"./Tooltip-650ba0e7.js";import"./Button-7077bd61.js";import"./useFocusRing-b5523d99.js";import"./Hidden-cc69ff6f.js";import"./useFocusable-b90e5423.js";import"./useButton-ffda9389.js";import"./OverlayArrow-40a86248.js";import"./context-9859bd03.js";import"./Info-3a72a880.js";import"./palette-97ed00c9.js";const n=i.div`
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
