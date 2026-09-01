import{s as e,j as o,a as r}from"./index-9749f8f0.js";import{T as m}from"./Tooltip-352e34c9.js";import"./Button-b07c43d2.js";import"./useFocusRing-8fe4a59f.js";import"./Hidden-97016bac.js";import"./useButton-c4dee33d.js";import"./OverlayArrow-b542f975.js";import"./context-bf3f7b55.js";import"./Info-886c2fae.js";/* empty css              */const n=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,d=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,x=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default};
