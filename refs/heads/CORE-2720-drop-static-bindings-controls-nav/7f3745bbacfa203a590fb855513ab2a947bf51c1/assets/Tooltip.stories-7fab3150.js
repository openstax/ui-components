import{s as i,j as o,a as r}from"./index-c37d68f9.js";import{T as m}from"./Tooltip-442cb941.js";import"./Button-5a021572.js";import"./useFocusRing-43230a90.js";import"./Hidden-a22783be.js";import"./useFocusable-30bb15b4.js";import"./useButton-351a1578.js";import"./OverlayArrow-b469dc7e.js";import"./context-3ac3bad0.js";import"./Info-a820faab.js";import"./palette-97ed00c9.js";const n=i.div`
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
