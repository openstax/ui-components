import{s as i,j as o,a as r}from"./index-b07cf1ee.js";import{T as m}from"./Tooltip-92df281a.js";import"./Button-f6edc5ce.js";import"./useFocusRing-191f8b7d.js";import"./Hidden-94d00f79.js";import"./useFocusable-51a5db58.js";import"./useButton-a6b3f5b4.js";import"./OverlayArrow-2bb3b8e6.js";import"./context-b89d176e.js";import"./Info-cc165acb.js";/* empty css              */const n=i.div`
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
